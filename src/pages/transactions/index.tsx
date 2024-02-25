import useSWR from 'swr';

import { useMemo, useState } from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import LinkUnderline from '@components/link';
import { Table, TableBody, TableHead } from '@components/table/index.ts';

import { ITxs } from '@src/types/api';

import { Crypto, Hash, Time, fetcher } from '@utils';

interface Props {
  isPagination: boolean;
  isSimpleData: boolean;
  size: number;
}
const Transactions = ({ isPagination = true, size = 10, isSimpleData = false }: Props) => {
  const [page, setPage] = useState(1);

  const { data } = useSWR<ITxs>(`/api/txs?page=${page}&size=${size}`, fetcher, {
    refreshInterval: 1000
  });

  const handleChange = (_, value: number) => {
    setPage(value);
  };
  const count = useMemo(() => (data ? Math.ceil(data.data.totalCount / size) : 1), [data]);

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
          {!isSimpleData && <TableCell align="left">Value</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {!data ? (
          <TableRow>
            <TableCell colSpan={8} align="center">
              No Data
            </TableCell>
          </TableRow>
        ) : (
          data.data.transactions.map((row) => (
            <TableRow key={row.hash} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left">
                <LinkUnderline path={`/transaction/${row.hash}`} underlink={Hash.ellipsis(row.hash)}></LinkUnderline>
              </TableCell>
              <TableCell align="left">{Time.elapsedTime(Time.formatUnixNano(row.timestamp))}</TableCell>
              {!isSimpleData && (
                <TableCell component="th" scope="row">
                  <LinkUnderline path={`/block/${row.blockHeight}`} underlink={row.blockHeight}></LinkUnderline>
                </TableCell>
              )}

              <TableCell align="left">
                <LinkUnderline path={`/account/${row.from}`} underlink={Hash.ellipsis(row.from)}></LinkUnderline>
              </TableCell>
              <TableCell align="left">
                <ArrowForwardIcon />
              </TableCell>
              <TableCell align="left">
                <LinkUnderline path={`/account/${row.to}`} underlink={Hash.ellipsis(row.to)}></LinkUnderline>
              </TableCell>
              {!isSimpleData && (
                <TableCell align="left">
                  {Crypto.hexToDecimal(row.value)} <span className="description">Barrel</span>
                </TableCell>
              )}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default Transactions;
