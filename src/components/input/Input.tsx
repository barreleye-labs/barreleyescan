import { ChangeEvent, memo } from 'react';

import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import { Container } from './styles';

interface Props {
  name?: string;
  type?: string;
  label?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  fullWidth?: boolean;
  width?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent) => void;
  onBlur?: (e: ChangeEvent) => void;
}
const Input = memo(
  ({ name, width = '80%', type, defaultValue, disabled, label, fullWidth, onChange, onBlur, placeholder }: Props) => {
    return (
      <Container>
        <FormControl sx={{ m: 1, width }} variant="standard">
          <TextField
            id="fullWidth"
            margin="normal"
            name={name}
            type={type}
            fullWidth={fullWidth}
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={(e) => onChange && onChange(e)}
            onBlur={(e) => onBlur && onBlur(e)}
          />
        </FormControl>
      </Container>
    );
  }
);

export default Input;
