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

const Blocks = () => {
  const { data, error } = useSWR('/api/block/1', fetcher);
  console.log(data, error);

  return (
    data && (
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
            </TableRow>
          </TableHead>
          <TableBody>
            {[data].map((row) => (
              <TableRow key={row.Height} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <LinkUnderline path={`/block/${row.Height}`} underlink={row.Height}></LinkUnderline>
                </TableCell>
                <TableCell align="left">{Time.elapsedTime(Time.formatUnixNano(row.Timestamp))}</TableCell>
                <TableCell align="left">{row.TxResponse.TxCount}</TableCell>
                <TableCell align="left">
                  <LinkUnderline path={`/address`} underlink={Hash.ellipsis(row.Validator)}></LinkUnderline>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default Blocks;
