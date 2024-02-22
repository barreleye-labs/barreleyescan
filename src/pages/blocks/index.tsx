import useSWR from 'swr';

import { useCallback, useMemo, useState } from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import LinkUnderline from '@components/link';
import { Table, TableBody, TableHead } from '@components/table/index.ts';

import { IBlocks } from '@src/types/api';

import { Hash, Time, fetcher } from '@utils';

interface Props {
  isPagination: boolean;
}
const Blocks = ({ isPagination = true }: Props) => {
  const [size] = useState(10);
  // const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);

  const { data } = useSWR<IBlocks>(`/api/blocks?page=${page}&size=${size}`, fetcher, {
    refreshInterval: 10000
  });

  const handleChange = useCallback(
    (_, value: number) => {
      setPage(value);
    },
    [page]
  );

  const count = useMemo(() => (data ? Math.ceil(data.data.totalCount / size) : 1), [data]);

  return (
    <Table count={count} page={page} onChange={handleChange} isPagination={isPagination}>
      <TableHead>
        <TableRow>
          <TableCell>Block</TableCell>
          <TableCell width="100px" size="medium" align="left">
            Age
          </TableCell>

          <TableCell width="100px" align="left">
            TOTAL TXs
          </TableCell>
          <TableCell align="left">Validator</TableCell>
          <TableCell align="right">Block Proposer</TableCell>
          <TableCell align="right">Base Fee</TableCell>
          <TableCell align="right">Reward</TableCell>
          <TableCell align="right">Burnt Fees</TableCell>
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
          data.data.blocks.map((row) => (
            <TableRow key={row.height} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <LinkUnderline path={`/block/${row.height}`} underlink={row.height.toString()}></LinkUnderline>
              </TableCell>

              <TableCell align="left">{Time.elapsedTime(Time.formatUnixNano(row.timestamp))}</TableCell>
              <TableCell align="left">{row.txCount}</TableCell>
              <TableCell align="left">
                <LinkUnderline path={`/account`} underlink={row.signer && Hash.ellipsis(row.signer)}></LinkUnderline>
              </TableCell>
              <TableCell align="right">-</TableCell>
              <TableCell align="right">-</TableCell>
              <TableCell align="right">-</TableCell>
              <TableCell align="right">-</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default Blocks;
