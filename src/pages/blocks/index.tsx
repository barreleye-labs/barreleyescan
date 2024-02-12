import useSWR from 'swr';

import { useEffect, useState } from 'react';

import { Container } from './styles';

import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import LinkUnderline from '@components/link';

import { Hash, Time, fetcher } from '@utils';

import { IBlock } from '@types/api.d.ts';

const Blocks = () => {
  const [size] = useState(10);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const { data: totalData } = useSWR<IBlock>(`/api/last-block`, fetcher, {
    refreshInterval: 1000
  });
  const { data } = useSWR<IBlock[]>(totalData ? `/api/blocks?page=${page}&size=${size}` : null, fetcher, {
    refreshInterval: 1000
  });

  useEffect(() => {
    data?.length && setCount(Math.ceil((totalData!.height + 1) / size));
  }, [totalData, size]);

  const handleChange = (_, value: number) => {
    setPage(value);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Block</TableCell>
              <TableCell size="medium" align="left">
                Age
              </TableCell>
              <TableCell align="left">TOTAL TXs</TableCell>
              <TableCell align="left">Validator</TableCell>
              <TableCell align="right">Block Proposer</TableCell>
              <TableCell align="right">Base Fee</TableCell>
              <TableCell align="right">Reward</TableCell>
              <TableCell align="right">Burnt Fees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow key={row.height} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <LinkUnderline path={`/block/${row.height}`} underlink={row.height.toString()}></LinkUnderline>
                </TableCell>

                <TableCell align="left">{Time.elapsedTime(Time.formatUnixNano(row.timestamp))}</TableCell>
                <TableCell align="left">{row.txResponse?.txCount}</TableCell>
                <TableCell align="left">
                  <LinkUnderline
                    path={`/address`}
                    underlink={row.validator && Hash.ellipsis(row.validator)}
                  ></LinkUnderline>
                </TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">-</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={count} page={page} shape="rounded" onChange={handleChange} />
    </Container>
  );
};

export default Blocks;
