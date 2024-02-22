import { ReactNode } from 'react';

import { Head } from '../styles.tsx';

interface Props {
  children: ReactNode;
}
const TableHead = ({ children }: Props) => {
  return <Head>{children}</Head>;
};

export default TableHead;
