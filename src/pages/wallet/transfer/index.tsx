import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LoadingButton from '@mui/lab/LoadingButton';
import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { useSnackbar } from 'notistack';

import AccountService from '@services/account';
import TransactionsService from '@services/transactions';

import { Signature } from '@type/dto/signature';
import { TransactionRequest } from '@type/dto/transaction';

import useInput from '@hooks/useInput';
import useSessionStorage from '@hooks/useSessionStorage';

import Card from '@components/card';
import { PrivateForm } from '@components/form';
import { Input } from '@components/input';
import LinkUnderline from '@components/link';

import { Char, Crypto } from '@utils';

import { BTN_TYPE, buttonHandlerStore } from '@src/stores';

const Transfer = () => {
  const loading = buttonHandlerStore((state) => state.loadingTransfer);
  const setLoading = buttonHandlerStore((state) => state.setLoading);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [getSession] = useSessionStorage<string>('key');

  const txDefaultData = useCallback(async (): TransactionRequest => {
    return {
      nonce: '',
      from: '',
      to: '',
      value: '',
      data: 'ab'
    };
  }, []);
  const [tx, onChange, setTx] = useInput<TransactionRequest>();

  useEffect(() => {
    if (getSession()) {
      setTx({ ...tx, from: Crypto.privateKeyToAddress(getSession() as string) });
    }
    console.log('tx', Crypto.privateKeyToAddress(getSession() as string));
  }, []);

  const [step, setStep] = useState(1);
  const [privateKey, onChangePrivateKey, setPrivateKey] = useInput('');
  const { data: accountInfo, mutate: accountMutate } = AccountService().GetOneById(tx?.from);

  const initData = useCallback(() => {
    setTx(txDefaultData());
    setStep(1);
    setPrivateKey('');
  }, []);
  console.log(txDefaultData());
  const showToast = useCallback(({ variant, message }: { variant: 'success' | 'error'; message: string }) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: 'top', horizontal: 'right' }
    });
  }, []);

  const getSigner = useCallback(() => Crypto.generatePublicKey(privateKey), [privateKey]);

  const getSignature = useCallback(
    (nonce: string): Signature => {
      const { from, to, value, data } = tx;

      const sig: TransactionRequest = {
        nonce,
        from: Char.remove0x(from),
        to: Char.remove0x(to),
        value: Char.numberToHex(Number(value)),
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
      to: Char.remove0x(tx.to),
      signatureR: r,
      signatureS: s,
      signerX: x,
      signerY: y
    });

    if (error)
      return showToast({ variant: 'error', message: 'Insufficient balance. You can receive coins through faucet.' });

    setLoading(BTN_TYPE.TRANSFER);
    setTimeout(() => {
      showToast({ variant: 'success', message: 'Transaction transfer was successful!' });
      initData();
      setLoading(BTN_TYPE.TRANSFER);
    }, 13000);
  }, [tx]);

  const onSubmit = useCallback(async () => {
    if (step === 1) {
      const from = Crypto.privateKeyToAddress(privateKey).toString();

      // const { x, y } = Crypto.generatePublicKey(privateKey);
      // const from = (await Crypto.sha256Veta(x.concat(y))).substring(0, 40); // 임시.
      // const from = sha256(x.concat(y)).toString().substring(0, 40); // TODO: 트랜잭션 해시할 때는 올바른 값이 나오는데, 왜 다른 값이 나오는지 확인 필요.

      setTx({ ...tx, from });
      return setStep(2);
    }

    if (tx.from === Char.remove0x(tx.to)) {
      return showToast({ variant: 'error', message: 'Cannot send to the same address.' });
    }
    /**
     * validator
     */
    Char.isAddress(tx.to) ? sendTransaction() : showToast({ variant: 'error', message: 'Check your address format' });
  }, [privateKey, tx, step]);

  const disabled = useMemo(() => (step === 1 ? !privateKey : !tx.to || !tx.value), [tx, step, privateKey]);
  return (
    <>
      {step === 1 && !getSession() ? (
        <PrivateForm
          title="Enter an acceptable private key."
          sub="Please enter the private key to sign the transaction."
          defaultValue={privateKey}
          disabled={loading}
          loading={loading}
          onChange={(e) => onChangePrivateKey(e)}
          onClick={onSubmit}
        />
      ) : (
        <>
          <Card>
            <CardContent>
              <>
                {step === 2 && (
                  <Button className="return" onClick={() => setStep(1)}>
                    <ArrowBackIosNewIcon />
                    Back
                  </Button>
                )}
                <div className="input-wrapper">
                  <Typography variant="h5" sx={{ mb: 1.5 }}>
                    Enter the information
                  </Typography>
                  <Typography sx={{ mb: 1 }} color="text.secondary">
                    Please enter the information required to send the transaction. And try sending the transaction.
                  </Typography>

                  <Input label="From Address" disabled={true} defaultValue={`0x${tx?.from}`} />
                  <Input label="To Address" name="to" onChange={onChange} defaultValue={tx?.to} />

                  <Input
                    name="value"
                    defaultValue={tx?.value as string}
                    onChange={onChange}
                    type="number"
                    label="Amount to Send"
                    placeholder="0.000000"
                  />
                </div>
              </>

              <CardActions>
                <span className="info">{loading && 'Please wait up to 13 seconds'}</span>

                <LoadingButton loading={loading} disabled={disabled} className="button" size="large" onClick={onSubmit}>
                  Send Transaction
                </LoadingButton>
              </CardActions>
            </CardContent>
          </Card>

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
        </>
      )}
    </>
  );
};

export default Transfer;
