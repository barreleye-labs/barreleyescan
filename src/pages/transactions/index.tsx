import { useMemo, useState } from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TableCell from '@mui/material/TableCell';

import transactions from '@services/transactions';

import { Transaction } from '@type/dto/transaction';

import LinkUnderline from '@components/link';
import { SkeletonTable } from '@components/skeleton';
import { Table, TableBody, TableHead } from '@components/table/index.ts';
import IntervalTimestamp from '@components/time';

import { Char } from '@utils';

import { TableRow } from './styles.tsx';

interface Props {
  isPagination: boolean;
  isSimpleData: boolean;
  size: number;
}
const Transactions = ({ isPagination = true, size = 10, isSimpleData = false }: Props) => {
  const [page, setPage] = useState(1);

  const { data } = transactions().GetAll({ page, size });

  const handleChange = (_, value: number) => {
    setPage(value);
  };
  const count = useMemo(() => (data ? Math.ceil(data.totalCount / size) : 1), [data]);

  return (
    <Table count={count} page={page} isPagination={isPagination} onChange={handleChange}>
      <TableHead>
        <TableRow>
          <TableCell>TX Hash</TableCell>
          <TableCell>Age</TableCell>
          {!isSimpleData && <TableCell>Block</TableCell>}
          <TableCell align="left">From</TableCell>
          <TableCell align="left"></TableCell>
          <TableCell align="left">To</TableCell>
          <TableCell align="right">Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!data ? (
          <SkeletonTable columns={isSimpleData ? 5 : 7} size={size} />
        ) : (
          data.transactions.map((row: Transaction) => (
            <TableRow key={row.hash} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell style={{ width: 250 }} align="left">
                <LinkUnderline
                  path={`/transaction/${row.hash}`}
                  underlink={`0x${Char.ellipsis(row.hash)}`}
                ></LinkUnderline>
              </TableCell>
              <TableCell align="left" style={{ width: 200 }}>
                <IntervalTimestamp data={row.timestamp as number}></IntervalTimestamp>
              </TableCell>
              {!isSimpleData && (
                <TableCell style={{ width: 220 }} component="th" scope="row">
                  <LinkUnderline path={`/block/${row.blockHeight}`} underlink={row.blockHeight}></LinkUnderline>
                </TableCell>
              )}

              <TableCell style={{ width: '11%' }} align="left">
                <LinkUnderline path={`/account/${row.from}`} underlink={`0x${Char.ellipsis(row.from)}`}></LinkUnderline>
              </TableCell>
              <TableCell align="left" style={{ textAlign: 'center', width: 100, padding: 0 }}>
                <ArrowForwardIcon />
              </TableCell>
              <TableCell align="left" style={{ width: '14%' }}>
                <LinkUnderline path={`/account/${row.to}`} underlink={`0x${Char.ellipsis(row.to)}`}></LinkUnderline>
              </TableCell>
              <TableCell align="right" style={{ width: 200 }}>
                {Char.hexToBalance(row.value.toString())} <span className="description">Barrel</span>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default Transactions;
