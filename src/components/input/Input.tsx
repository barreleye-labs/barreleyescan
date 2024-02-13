import { ChangeEvent, memo } from 'react';

import TextField from '@mui/material/TextField';

interface Props {
  name?: string;
  type?: string;
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  onChange?: (e: ChangeEvent) => void;
}
const Input = memo(({ name, type, defaultValue, disabled, label, fullWidth, onChange, placeholder }: Props) => {
  return (
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
    />
  );
});

export default Input;
