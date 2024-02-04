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

import { Container } from './styles';

const Transfer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = () => {
    setStep(2);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            Access Your Account
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            You can access your account using your private key.
          </Typography>

          <div className="input-wrapper">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Private Key</InputLabel>
              <Input
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

            <Button className="button" onClick={onSubmit}>
              Access
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Transfer;
