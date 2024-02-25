import axios from 'axios';
import { useSnackbar } from 'notistack';
import sha256 from 'sha256';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { Container } from './styles';

import LoadingButton from '@mui/lab/LoadingButton';
import { CardContent, Typography } from '@mui/material';

import { CustomInput, Input } from '@components/input';
import LinkUnderline from '@components/link';

import { ITx, Tx } from '@src/types/api';

import { Char, Crypto } from '@utils';

import useInput from '@hooks/useInput';

const txDefaultData = (): Tx => {
  return {
    from: '',
    to: '',
    value: '',
    nonce: '',
    data: 'ab'
  };
};

const Transfer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [tx, onChange, setTx] = useInput<Tx>(txDefaultData());
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [privateKey, onChangePrivateKey, setPrivateKey] = useInput('');
  const [a, seta] = useState(false);

  useEffect(() => {
    if (a) {
      requestTxs();
    }
  }, [a]);

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
    (info: ITx) => {
      const txUintArray = new Uint8Array(
        Object.keys(info).reduce((acc: number[], key) => acc.concat(...Char.hexToUint8Array(info[key])), [])
      );

      const message = Char.uint8ArrayToHex(txUintArray);
      return Crypto.signMessage(message, privateKey);
    },
    [privateKey]
  );

  const requestTxs = useCallback(() => {
    console.log(tx.nonce);

    const requestBody = {
      ...tx,
      signatureR: getSignature(tx).r,
      signatureS: getSignature(tx).s,
      signerX: getSigner().x,
      signerY: getSigner().y
    };

    axios
      .post('/api/txs', requestBody, { withCredentials: true })
      .then(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          showToast({ variant: 'success', message: 'Transaction transfer was successful!' });
          initData();
        }, 13000);
      })

      .catch((err) => {
        showToast({ variant: 'error', message: 'Insufficient balance. You can receive coins through faucet.' });
      });
  }, [tx]);

  const checkAccount = useCallback(() => {
    axios
      .get(`/api/accounts/${tx.from}`)
      .then(({ data }) => {
        setTx({ ...tx, nonce: data.data.account.nonce });
        // const ttt = { ...tx, nonce: data.data.account.nonce };
        // console.log(ttt);
        seta(true);
        requestTxs();
      })
      .catch((err) => {
        console.log(err);
        showToast({
          variant: 'error',
          message: 'Insufficient balance. You can receive coins through faucet.'
        });
      });
  }, [tx, tx.nonce]);
  const onSubmit = useCallback(() => {
    if (step === 1) {
      const { x, y } = Crypto.generatePublicKey(privateKey);
      const from = sha256(x.concat(y)).toString().substring(0, 40);

      setTx((tx) => ({ ...tx, from }));
      return setStep(2);
    }

    /**
     * validator
     */
    Crypto.isAddress(tx.to) ? checkAccount() : showToast({ variant: 'error', message: 'Check your address format' });
  }, [privateKey, tx, step]);

  const disabled = useMemo(() => (step === 1 ? !privateKey : !tx.to || !tx.value), [tx, step, privateKey]);
  return (
    <Container>
      <CardContent>
        {step === 1 ? (
          <div>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              Enter an acceptable private key
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Please enter your private key.
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
              You can access your account using your private key.
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
          <LoadingButton
            loading={loading}
            disabled={disabled}
            className="button"
            size="large"
            variant="filled"
            onClick={onSubmit}
          >
            {step === 1 ? 'Access' : 'Send Transaction'}
          </LoadingButton>

          {step === 2 && <LinkUnderline onClick={() => setStep(1)} underlink="Turn Back" />}
        </div>
      </CardContent>
    </Container>
  );
};

export default Transfer;
