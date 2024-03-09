import { ReactNode, memo } from 'react';

import ATableCell from '@mui/material/TableCell';

interface Props {
  children: ReactNode;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  colSpan?: number;
  size?: 'small' | 'medium';
}
const TableCell = memo(({ children, size, align, colSpan }: Props) => {
  return (
    <ATableCell colSpan={colSpan} align={align} size={size}>
      {children}
    </ATableCell>
  );
});

export default TableCell;
