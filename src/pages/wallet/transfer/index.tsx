import axios from 'axios';
import { useSnackbar } from 'notistack';
import sha256 from 'sha256';

import { useCallback, useMemo, useState } from 'react';

import { Container } from './styles';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material-next/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

import LinkUnderline from '@components/link';

import { ITx } from '@src/types/api';

import { Char, Crypto } from '@utils';

import useInput from '@hooks/useInput';

const txDefaultData = (): ITx => {
  return {
    from: '',
    to: '',
    value: '',
    nonce: 'ab',
    data: 'ab'
  };
};

const Transfer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [tx, onChange, setTx] = useInput<ITx>(txDefaultData());
  const [step, setStep] = useState(1);
  const [privateKey, onChangePrivateKey, setPrivateKey] = useInput('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = useCallback(() => setShowPassword((show) => !show), []);

  const handleMouseDownPassword = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }, []);

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

  const onSubmit = useCallback(() => {
    if (step === 1) {
      const { x, y } = Crypto.generatePublicKey(privateKey);
      const from = sha256(x.concat(y)).toString().substring(0, 40);

      setTx((tx) => ({ ...tx, from }));

      return setStep(2);
    }

    axios
      .post(
        '/api/txs',
        {
          ...tx,
          signatureR: getSignature(tx).r,
          signatureS: getSignature(tx).s,
          signerX: getSigner().x,
          signerY: getSigner().y
        },
        { withCredentials: true }
      )
      .then(() => {
        showToast({ variant: 'success', message: 'Transaction transfer was successful!' });
        initData();
      })
      .catch((err) => {
        showToast({ variant: 'error', message: err.response.data === '' ? 'Check the network.' : err.response.data });
      });
  }, [getSignature, getSigner, tx, step]);

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

            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Private Key</InputLabel>
              <Input
                onChange={onChangePrivateKey}
                name="privateKey"
                placeholder="Enter the private key"
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        ) : (
          <>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              Enter Information
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              You can access your account using your private key.
            </Typography>

            <TextField
              fullWidth
              label="From Address"
              disabled={true}
              id="fullWidth"
              margin="normal"
              defaultValue={tx.from}
            />
            <TextField
              fullWidth
              label="To Address"
              margin="normal"
              name="to"
              onChange={onChange}
              defaultValue={tx.to}
            />
            <TextField
              fullWidth
              name="value"
              defaultValue={tx.value}
              onChange={onChange}
              type="number"
              label="Amount to Send"
              placeholder="0.000000"
              margin="normal"
            />
          </>
        )}

        <div className="btn-wrapper">
          <Button disabled={disabled} className="button" size="large" variant="filled" onClick={onSubmit}>
            {step === 1 ? 'Access' : 'Send Transaction'}
          </Button>

          {step === 2 && <LinkUnderline onClick={() => setStep(1)} underlink="Turn Back" />}
        </div>
      </CardContent>
    </Container>
  );
};

export default Transfer;
