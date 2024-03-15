import { useSnackbar } from 'notistack';
import sha256 from 'sha256';

import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LoadingButton from '@mui/lab/LoadingButton';
import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

import Card from '@components/card';
import { CustomInput, Input } from '@components/input';
import LinkUnderline from '@components/link';

import { Tx } from '@src/types/api';

import { Char, Crypto } from '@utils';

import AccountService from '@services/account';
import TransactionsService from '@services/transactions.ts';

import useInput from '@hooks/useInput';
import { utils } from 'elliptic';

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
  const navigate = useNavigate();
  const [tx, onChange, setTx] = useInput<Tx>(txDefaultData());
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [privateKey, onChangePrivateKey, setPrivateKey] = useInput('');
  const { data: accountInfo, error, mutate: accountMutate } = AccountService().GetOneById(tx.from);
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

      sig.from = Crypto.remove0x(from);
      sig.to = Crypto.remove0x(to);
      sig.value = Char.numberToHex(Number(sig.value));
      
      const txUintArray = new Uint8Array(
        Object.keys(sig).reduce((acc: number[], key: string) => acc.concat(...Char.hexToUint8Array(sig[key])), [])
      );

      const message = Char.uint8ArrayToHex(txUintArray);
      return Crypto.signMessage(message, privateKey);
    },
    [privateKey, tx]
  );

  const sendTransaction = useCallback(async () => {
    try {
      const accountInfo = await accountMutate();

      if (!accountInfo)
        return showToast({
          variant: 'error',
          message: 'Insufficient balance. You can receive coins through faucet.'
        });

      const nonce = accountInfo.account.nonce;
      const { r, s } = getSignature(nonce);
      const { x, y } = getSigner();

      const { error } = await TransactionsService().Send({
        ...tx,
        nonce,
        value: '0x' + Char.numberToHex(Number(tx.value)),
        to: Crypto.remove0x(tx.to),
        signatureR: r,
        signatureS: s,
        signerX: x,
        signerY: y
      });

      if (error)
        return showToast({ variant: 'error', message: 'Insufficient balance. You can receive coins through faucet.' });

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        showToast({ variant: 'success', message: 'Transaction transfer was successful!' });
        initData();
      }, 13000);
    } catch (error) {
      console.log('err', error);
    }
  }, [tx]);

  function arbuf2hex(buffer: any) {
    var hexCodes = [];
    var view = new DataView(buffer);
    for (var i = 0; i < view.byteLength; i += 4) {
      // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
      var value = view.getUint32(i)
      // toString(16) will give the hex representation of the number without padding
      var stringValue = value.toString(16)
      // We use concatenation and slice for padding
      var padding = '00000000'
      var paddedValue = (padding + stringValue).slice(-padding.length)
      hexCodes.push(paddedValue);
    }
  
    // Join all the hex strings into one
    return hexCodes.join("");
  }
  
  function sha256Veta(hexstr: any) {
    // We transform the string into an arraybuffer.
    var buffer = new Uint8Array(hexstr.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }));
    return crypto.subtle.digest("SHA-256", buffer).then(function (hash) {
      return arbuf2hex(hash);
    });
  }
  
  const onSubmit = useCallback(async () => {
    if (step === 1) {
      const { x, y } = Crypto.generatePublicKey(privateKey);
      console.log("fffefe: ", (await sha256Veta(x.concat(y))).substring(0,40))
      const from = (await sha256Veta(x.concat(y))).substring(0,40); // 임시.
      // const from = sha256(x.concat(y)).toString().substring(0, 40); // TODO: 트랜잭션 해시할 때는 올바른 값이 나오는데, 왜 다른 값이 나오는지 확인 필요.

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
    <>
      <Card>
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
              {step === 2 && (
                <Button className="return" onClick={() => setStep(1)}>
                  <ArrowBackIosNewIcon />
                  Back
                </Button>
              )}
              <div className="input-wrapper">
                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  Enter Information
                </Typography>
                <Typography sx={{ mb: 1 }} color="text.secondary">
                  You can access your account using your private key. It takes 13 seconds to send.
                </Typography>

                <Input label="From Address" disabled={true} defaultValue={tx.from} />
                <Input label="To Address" name="to" onChange={onChange} defaultValue={tx.to} />
                <Input
                  name="value"
                  defaultValue={tx.value}
                  onChange={onChange}
                  type="number"
                  label="Amount to Send"
                  placeholder="0.000000"
                />
              </div>
            </>
          )}
          <CardActions>
            <span className="warning">{loading && ' Takes up to 13 seconds'}</span>

            <LoadingButton loading={loading} disabled={disabled} className="button" size="large" onClick={onSubmit}>
              {step === 1 ? 'Access' : 'Send Transaction'}
            </LoadingButton>
          </CardActions>
        </CardContent>
      </Card>
      {step === 2 && (
        <Card custom onClick={() => navigate('/faucet')} background={'#e5fbf842'}>
          <CardContent>
            <Typography variant="h5">Click if your balance is insufficient!</Typography>
            <span className="link">
              <LinkUnderline underlink="You need to use the faucet service to get a Barrel." />
            </span>
          </CardContent>

          <CardActions className="wrapper">
            <div className="icon-wrapper">
              <CallMadeIcon />
            </div>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Transfer;
