import { ChangeEvent, ReactNode } from 'react';

import type { ColorPaletteProp, VariantProp } from '@mui/joy';
import DefaultButton from '@mui/joy/Button';

interface Props {
  text: string;
  variant?: VariantProp;
  size?: 'sm' | 'md' | 'lg';
  color?: ColorPaletteProp;
  children?: ReactNode;
  startDecorator?: ReactNode;
  onClick?: () => void;
}
const Button = ({ children, variant = 'outlined', color = 'neutral', size, text, startDecorator, onClick }: Props) => {
  return (
    <DefaultButton
      component="a"
      size={size}
      startDecorator={startDecorator}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {text}
      {children}
    </DefaultButton>
  );
};

export default Button;
