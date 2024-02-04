import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Card } from '@mui/joy';
import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material-next/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';

import { Crypto } from '@src/utils';

import { Container } from './styles';

const COPY_TEXT = {
  DEFAULT: 'COPY',
  ACTIVE: 'COPIED!'
};
const Create = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [privateKey] = useState(Crypto.generatePrivateKey());
  const [step, setStep] = useState(1);
  const [copyButtonText, setCopyButtonText] = useState(COPY_TEXT.DEFAULT);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onClick = () => {
    setStep(2);
  };

  const onCopy = () => {
    setCopyButtonText(COPY_TEXT.ACTIVE);
    navigator.clipboard.writeText(privateKey);

    setTimeout(() => {
      setCopyButtonText(COPY_TEXT.DEFAULT);
    }, 1000);
  };
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            {step === 1 && 'Please Set The Private Key'}
            {step === 2 && 'Please save Your Wallet Key'}
          </Typography>
          <Typography sx={{ mb: 4 }} color="text.secondary">
            {step === 1 && 'If you want to generate a private key for your account, please click the button below.'}
            {step === 2 && 'Your new account has been created. Please copy and securely store the Wallet Key below.'}
          </Typography>

          {step === 1 && (
            <Button className="button" size="large" variant="filled" onClick={onClick}>
              SET PRIVATE KEY
            </Button>
          )}
          {step === 2 && (
            <div className="input-wrapper">
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Private Key</InputLabel>
                <Input
                  disabled={true}
                  defaultValue={privateKey}
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

              <Button
                onClick={onCopy}
                className={`${'copy-button'} ${copyButtonText === COPY_TEXT.ACTIVE && 'active'} `}
              >
                {copyButtonText}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Create;
