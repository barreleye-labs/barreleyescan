import { useSnackbar } from 'notistack';
import sha256 from 'sha256';

import { useCallback, useMemo, useState } from 'react';

import { Container } from './styles';

import LoadingButton from '@mui/lab/LoadingButton';
import { CardContent, Typography } from '@mui/material';

import { CustomInput, Input } from '@components/input';
import LinkUnderline from '@components/link';

import { Tx } from '@src/types/api';

import { Char, Crypto } from '@utils';

import AccountService from '@services/account';
import TransactionsService from '@services/transactions.ts';

import useInput from '@hooks/useInput';

const txDefaultData = (): Tx => {
  return {
    nonce: '',
    from: '',
    to: '',
    value: '',
    data: 'ab'
  };
};

const Transfer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [tx, onChange, setTx] = useInput<Tx>(txDefaultData());
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [privateKey, onChangePrivateKey, setPrivateKey] = useInput('');

  const initData = useCallback(() => {
    setTx(txDefaultData());
    setStep(1);
    setPrivateKey('');
  }, []);

  const showToast = useCallback(({ variant, message }: { variant: 'success' | 'error'; message: string }) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: 'top', horizontal: 'right' }
    });
  }, []);

  const getSigner = useCallback(() => Crypto.generatePublicKey(privateKey), [privateKey]);

  const getSignature = useCallback(
    (nonce: string) => {
      const { from, to, value, data } = tx;

      const sig = {
        nonce,
        from,
        to,
        value,
        data
      };
      const txUintArray = new Uint8Array(
        Object.keys(sig).reduce((acc: number[], key: string) => acc.concat(...Char.hexToUint8Array(sig[key])), [])
      );

      const message = Char.uint8ArrayToHex(txUintArray);
      return Crypto.signMessage(message, privateKey);
    },
    [privateKey, tx]
  );

  const sendTransaction = useCallback(async () => {
    const { data, error } = await AccountService().GetOneById(tx.from);

    if (error)
      return showToast({
        variant: 'error',
        message: 'Insufficient balance. You can receive coins through faucet.'
      });
    const nonce = data.account.nonce;
    const { r, s } = getSignature(nonce);
    const { x, y } = getSigner();

    const { error: sendError } = TransactionsService().Send({
      ...tx,
      nonce,
      to: Crypto.remove0x(tx.to),
      signatureR: r,
      signatureS: s,
      signerX: x,
      signerY: y
    });

    if (sendError)
      return showToast({ variant: 'error', message: 'Insufficient balance. You can receive coins through faucet.' });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast({ variant: 'success', message: 'Transaction transfer was successful!' });
      initData();
    }, 13000);
  }, [tx]);

  const onSubmit = useCallback(() => {
    if (step === 1) {
      const { x, y } = Crypto.generatePublicKey(privateKey);
      const from = sha256(x.concat(y)).toString().substring(0, 40);

      setTx({ ...tx, from });
      return setStep(2);
    }

    /**
     * validator
     */
    Crypto.isAddress(tx.to) ? sendTransaction() : showToast({ variant: 'error', message: 'Check your address format' });
  }, [privateKey, tx, step]);

  const disabled = useMemo(() => (step === 1 ? !privateKey : !tx.to || !tx.value), [tx, step, privateKey]);
  return (
    <Container>
      <CardContent>
        {step === 1 ? (
          <div>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              Enter an acceptable private key.
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Please enter your private key. It takes 13 seconds to transmit barrelee transaction.
            </Typography>

            <CustomInput
              label="Private Key"
              placeholder="Enter the private key"
              defaultValue={privateKey}
              onChange={(e) => onChangePrivateKey(e)}
            />
          </div>
        ) : (
          <>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              Enter Information
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              You can access your account using your private key. It takes 13 seconds to send.
            </Typography>

            <Input fullWidth label="From Address" disabled={true} defaultValue={tx.from} />
            <Input fullWidth label="To Address" name="to" onChange={onChange} defaultValue={tx.to} />
            <Input
              fullWidth
              name="value"
              defaultValue={tx.value}
              onChange={onChange}
              type="number"
              label="Amount to Send"
              placeholder="0.000000"
            />
          </>
        )}

        <div className="btn-wrapper">
          <span className="warning">{loading && ' Takes up to 13 seconds'}</span>
          <LoadingButton loading={loading} disabled={disabled} className="button" size="large" onClick={onSubmit}>
            {step === 1 ? 'Access' : 'Send Transaction'}
          </LoadingButton>
        </div>
        <span className="return">
          {step === 2 && <LinkUnderline onClick={() => setStep(1)} underlink="Turn Back" />}
        </span>
      </CardContent>
    </Container>
  );
};

export default Transfer;
