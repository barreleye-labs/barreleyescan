import { useState } from 'react';

import { Container } from './styles.tsx';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material-next/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';

interface Props {
  defaultValue: string;
  label: string;
}

const COPY_TEXT = {
  DEFAULT: 'COPY',
  ACTIVE: 'COPIED!'
};
const CopyInput = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState(COPY_TEXT.DEFAULT);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onCopy = () => {
    setCopyButtonText(COPY_TEXT.ACTIVE);
    navigator.clipboard.writeText(props.defaultValue);

    setTimeout(() => {
      setCopyButtonText(COPY_TEXT.DEFAULT);
    }, 1000);
  };

  return (
    <Container>
      <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">{props.label}</InputLabel>
        <Input
          disabled={true}
          defaultValue={props.defaultValue}
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

      <Button onClick={onCopy} className={`${'copy-button'} ${copyButtonText === COPY_TEXT.ACTIVE && 'active'} `}>
        {copyButtonText}
      </Button>
    </Container>
  );
};

export default CopyInput;
