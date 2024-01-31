import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Hash, Time } from 'src/utils';
import useSWR from 'swr';

import LinkUnderline from '@src/components/link';
import { IBlock } from '@src/types/api';

import fetcher from '@utils/fetcher';

import { Container } from './styles';

const Address = () => {
  const [size, setSize] = useState(10);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const { data: totalData, error: totalDataErr } = useSWR<IBlock>(`/api/last-block`, fetcher, {
    refreshInterval: 1000
  });
  const { data, error } = useSWR<IBlock[]>(totalData ? `/api/blocks?page=${page}&size=${size}` : null, fetcher, {
    refreshInterval: 1000
  });

  useEffect(() => {
    data?.length && setCount(Math.ceil((totalData!.height + 1) / size));
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
              <TableCell> Transaction Info</TableCell>
              <TableCell size="medium" align="left">
                Age
              </TableCell>
              <TableCell align="left">Maker</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="right">Item</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.length &&
              data.map((row) => (
                <TableRow key={row.height} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <LinkUnderline
                      path={`/block/${row.height}`}
                      underlink={Hash.ellipsis(row.validator)}
                    ></LinkUnderline>
                  </TableCell>

                  <TableCell align="left">{Time.elapsedTime(Time.formatUnixNano(row.timestamp))}</TableCell>
                  <TableCell align="left">
                    <LinkUnderline path={`/address`} underlink={Hash.ellipsis(row.validator)}></LinkUnderline>
                  </TableCell>
                  <TableCell align="left">
                    <span className="badge">ERC-1155</span>
                  </TableCell>
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

export default Address;
