import { ReactNode } from 'react';

import { Body } from '../styles.tsx';

interface Props {
  children: ReactNode;
}
const TableBody = ({ children }: Props) => {
  return <Body>{children}</Body>;
};

export default TableBody;
