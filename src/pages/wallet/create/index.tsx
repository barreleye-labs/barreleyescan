import sha256 from 'sha256';

import { useState } from 'react';

import { Container } from './styles';

import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material-next/Button';

import CopyInput from '@components/input/CopyInput';

import { Crypto } from '@utils';

const Create = () => {
  const [privateKey] = useState(Crypto.generatePrivateKey());
  const [addressKey] = useState(getAddressKey());
  const [step, setStep] = useState(1);

  function getAddressKey() {
    const publicKey = Crypto.generatePublicKey(privateKey);

    const { x: signerX, y: signerY } = publicKey;

    const temp: string = signerX.concat(signerY);
    return sha256(temp).toString().substring(0, 40);
  }

  const onClick = () => {
    setStep(2);
  };

  return (
    <Container>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {step === 1 ? 'Please Set The Private Key' : 'Please save Your Wallet Key'}
        </Typography>
        <Typography sx={{ mb: 4 }} color="text.secondary">
          {step === 1
            ? 'If you want to generate a private key for your account, please click the button below.'
            : 'Your new account has been created. Please copy and securely store the Wallet Key below.'}
        </Typography>

        {step === 1 && (
          <Button className="button" size="large" variant="filled" onClick={onClick}>
            SET PRIVATE KEY
          </Button>
        )}
        {step === 2 && (
          <>
            <CopyInput defaultValue={privateKey} label="Private Key" />
            <CopyInput defaultValue={addressKey} label="Address Key" />
          </>
        )}
      </CardContent>
    </Container>
  );
};

export default Create;
