import useSWR from 'swr';

import { useState } from 'react';

import { Container } from './styles';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import LinkUnderline from '@components/link';

import { IBlock } from '@src/types/api';

import { Hash, fetcher } from '@utils';

const Transactions = () => {
  const [size] = useState(10);
  const [count] = useState(1);
  const [page, setPage] = useState(1);
  const { data: totalData } = useSWR<IBlock>(`/api/last-block`, fetcher, {
    refreshInterval: 1000
  });
  const { data } = useSWR(totalData ? `/api/txs?page=${page}&size=${size}` : null, fetcher, {
    refreshInterval: 1000
  });

  const handleChange = (_, value: number) => {
    setPage(value);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>TX Hash</TableCell>
              <TableCell>Block</TableCell>
              <TableCell align="left">From</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">To</TableCell>
              <TableCell align="left">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.transactions.map((row) => (
              <TableRow key={row.hash} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">
                  <LinkUnderline path={`/transaction/${row.hash}`} underlink={Hash.ellipsis(row.hash)}></LinkUnderline>
                </TableCell>

                <TableCell component="th" scope="row">
                  <LinkUnderline path={`/block/${0}`} underlink={0}></LinkUnderline>
                </TableCell>

                <TableCell align="left">
                  <LinkUnderline path={`/address`} underlink={Hash.ellipsis(row.from)}></LinkUnderline>
                </TableCell>
                <TableCell align="left">
                  <ArrowForwardIcon />
                </TableCell>
                <TableCell align="left">
                  <LinkUnderline path={`/address`} underlink={Hash.ellipsis(row.to)}></LinkUnderline>
                </TableCell>
                <TableCell align="left">
                  {row.value} <span className="description">Barrel</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={count} page={page} shape="rounded" onChange={handleChange} />
    </Container>
  );
};

export default Transactions;
