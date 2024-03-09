import { ChangeEvent, ReactNode } from 'react';

import { TableContainer, TableWrapper } from './styles';
import { Container } from './styles';

import Pagination from '@mui/material/Pagination';

interface Props {
  children?: ReactNode;
  isPagination?: boolean;
  count?: number;
  page?: number;
  onChange?: (event: ChangeEvent, page: number) => void;
}
const Table = ({ isPagination = true, count, page, children, onChange }: Props) => {
  return (
    <Container>
      <TableContainer>
        <TableWrapper>{children}</TableWrapper>
      </TableContainer>
      {isPagination ? <Pagination count={count} page={page} shape="rounded" onChange={onChange} /> : ''}
    </Container>
  );
};

export default Table;
