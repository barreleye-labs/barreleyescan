import { ChangeEvent, memo, useState } from 'react';

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
  defaultValue?: string;
  width?: string;
  label: string;
  placeholder?: string;
  isCopyBtn?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent) => void;
}

const COPY_TEXT = {
  DEFAULT: 'COPY',
  ACTIVE: 'COPIED!'
};
const CustomInput = memo(
  ({ width = '50%', defaultValue, label, isCopyBtn, disabled, placeholder, onChange }: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState(COPY_TEXT.DEFAULT);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const onCopy = () => {
      setCopyButtonText(COPY_TEXT.ACTIVE);
      navigator.clipboard.writeText(defaultValue);

      setTimeout(() => {
        setCopyButtonText(COPY_TEXT.DEFAULT);
      }, 1000);
    };

    return (
      <Container>
        <FormControl sx={{ m: 1, width }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
          <Input
            disabled={disabled}
            defaultValue={defaultValue}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => onChange && onChange(e)}
            placeholder={placeholder}
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

        {isCopyBtn && (
          <Button onClick={onCopy} className={`${'copy-button'} ${copyButtonText === COPY_TEXT.ACTIVE && 'active'} `}>
            {copyButtonText}
          </Button>
        )}
      </Container>
    );
  }
);

export default CustomInput;
