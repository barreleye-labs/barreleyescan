import { useSnackbar } from 'notistack';

import { useCallback, useMemo, useState } from 'react';

import { Container } from './styles';

import { LoadingButton } from '@mui/lab';
import { CardContent, Typography } from '@mui/material';

import { Input } from '@components/input';

import { IFaucet } from '@src/types/api';

import { Crypto } from '@utils';

import FaucetService from '@services/faucet';

import useInput from '@hooks/useInput';

const Faucet = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [faucet, onChange] = useInput<IFaucet>({ accountAddress: '', balance: 0 });
  const [loading, setLoading] = useState(false);
  const { accountAddress, balance } = faucet;

  const showToast = useCallback(({ variant, message }: { variant: 'success' | 'error'; message: string }) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: 'top', horizontal: 'right' }
    });
  }, []);

  const onSubmit = useCallback(async () => {
    const { data } = await FaucetService().Send({
      accountAddress: Crypto.remove0x(accountAddress)
    });

    if (!data) return showToast({ variant: 'error', message: 'Invalid address format.\n' });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast({ variant: 'success', message: 'Your Barrel Faucet request accepted.' });
    }, 13000);
  }, [accountAddress, balance]);
  const disabled = useMemo(() => !accountAddress, [accountAddress]);
  return (
    <Container>
      <CardContent>
        <>
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            Barrel Faucet
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            The Barrel Faucet runs on Testnet. It takes 13 seconds to transmit barrelee transaction.
          </Typography>

          <Input
            fullWidth
            label="Account Address"
            value="accountAddress"
            placeholder="Please put your wallet address here"
            name="accountAddress"
            onChange={onChange}
          />
          <Input
            label="Barrel Balance"
            name="balance"
            value="balance"
            type="number"
            placeholder="0.000000"
            disabled={true}
            defaultValue="10"
            fullWidth
            onChange={onChange}
          />
        </>

        <div className="btn-wrapper">
          <span className="warning">{loading && ' Takes up to 13 seconds'}</span>
          <LoadingButton loading={loading} disabled={disabled} className="button" size="large" onClick={onSubmit}>
            Run Faucet
          </LoadingButton>
        </div>
      </CardContent>
    </Container>
  );
};

export default Faucet;
