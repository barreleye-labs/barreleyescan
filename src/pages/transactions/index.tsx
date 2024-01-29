import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Hash, Time } from 'src/utils';
import useSWR from 'swr';

import LinkUnderline from '@src/components/link';

import fetcher from '@utils/fetcher';

const Transactions = () => {
  const { data, error } = useSWR('/api/block/1', fetcher);
  console.log(data, error);

  return (
    data && (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>TX Hash</TableCell>
              <TableCell>Block</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">From</TableCell>
              <TableCell align="left">To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[data].map((row) => (
              <TableRow key={row.height} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">
                  <LinkUnderline
                    path={`/transaction/${row.validator}`}
                    underlink={Hash.ellipsis(row.validator)}
                  ></LinkUnderline>
                </TableCell>

                <TableCell component="th" scope="row">
                  <LinkUnderline path={`/block/${row.height}`} underlink={row.height}></LinkUnderline>
                </TableCell>

                <TableCell align="left">{Time.elapsedTime(Time.formatUnixNano(row.timestamp))}</TableCell>

                <TableCell align="left">
                  <LinkUnderline path={`/address`} underlink={Hash.ellipsis(row.validator)}></LinkUnderline>
                </TableCell>

                <TableCell align="left">
                  <LinkUnderline path={`/address`} underlink={Hash.ellipsis(row.validator)}></LinkUnderline>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default Transactions;
