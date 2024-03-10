import sha256 from 'sha256';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Stack from '@mui/joy/Stack';
import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { CustomInput } from '@components/input';

import { Crypto } from '@utils';

const Create = () => {
  const navigate = useNavigate();
  const [privateKey] = useState(Crypto.generatePrivateKey());
  const [address] = useState(getAddress());
  const [step, setStep] = useState(1);

  function getAddress() {
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
          {step === 1 ? (
            'If you want to generate a private key for your account, please click the button below.'
          ) : (
            <p>
              <span>Your new account has been created.</span>
              <br />
              <span> Please copy and securely store the Wallet Key below.</span>
            </p>
          )}
        </Typography>

        {step === 1 && (
          <Button className="button button-primary" size="large" variant="contained" onClick={onClick}>
            SET PRIVATE KEY
          </Button>
        )}
        {step === 2 && (
          <>
            <CustomInput defaultValue={privateKey} label="Private Key" isCopyBtn={true} disabled={true} />
            <CustomInput defaultValue={address} label="Address Key" isCopyBtn={true} disabled={true} />

            <Stack direction="row" spacing={2}>
              <Button
                className="button button-primary"
                size="large"
                variant="contained"
                onClick={() => navigate('/faucet')}
              >
                Barrel Faucet <OpenInNewIcon />
              </Button>
              <Button
                className="button button-primary"
                size="large"
                variant="contained"
                onClick={() => navigate('/transfer')}
              >
                Send Barrel <OpenInNewIcon />
              </Button>
            </Stack>
          </>
        )}
      </CardContent>
    </Container>
  );
};

export default Create;
