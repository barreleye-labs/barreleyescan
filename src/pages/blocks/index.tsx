import { Block } from '@type/api';

import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from './styles.tsx';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import LinkUnderline from '@components/link';
import { Table, TableBody, TableHead } from '@components/table/index.ts';

import { Hash, Time } from '@utils';

import BlocksService from '@services/blocks';

interface Props {
  isPagination: boolean;
  isSimpleData: boolean;
  size: number;
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}));

const Blocks = ({ isPagination = true, size = 10, isSimpleData = false }: Props) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const { data } = BlocksService().GetAll({ page, size });

  const handleChange = useCallback(
    (_, value: number) => {
      setPage(value);
    },
    [page]
  );

  const count = useMemo(() => (data ? Math.ceil(data.totalCount / size) : 1), [data]);
  console.log(data);
  return (
    <Table count={count} page={page} onChange={handleChange} isPagination={isPagination}>
      <TableHead>
        <TableRow>
          <TableCell>Block</TableCell>
          <TableCell width="100px" size="medium" align="left">
            Age
          </TableCell>
          <TableCell width="100px" align="left">
            Total TXs
          </TableCell>
          <TableCell align="left">Block Proposer</TableCell>
          {!isSimpleData && <TableCell align="left">Block Hash</TableCell>}
          <TableCell align="right">Reward</TableCell>
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
          data?.blocks.map((row: Block) => (
            <TableRow key={row.height} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <LinkUnderline path={`/block/${row.height}`} underlink={row.height.toString()}></LinkUnderline>
              </TableCell>

              <TableCell align="left">{Time.elapsedTime(Time.formatUnixNano(row.timestamp))}</TableCell>

              <TableCell align="left">{row.txCount}</TableCell>

              <TableCell align="left">
                <HtmlTooltip
                  title={
                    <>
                      <Typography color="inherit">
                        <b>{row.extra}</b>
                      </Typography>
                      <em>(0x{row.signer})</em>
                    </>
                  }
                >
                  <Button onClick={() => navigate(`/account/${row.signer}`)} size="small" variant="outlined">
                    {row.extra}
                  </Button>
                </HtmlTooltip>
              </TableCell>

              {!isSimpleData && (
                <TableCell align="left">
                  <HtmlTooltip title={<em>0x{row.hash}</em>}>
                    <span>0x{Hash.ellipsis(row.hash)}</span>
                  </HtmlTooltip>
                </TableCell>
              )}

              <TableCell align="right">
                10 <span className="sub-text">Barrel</span>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default Blocks;
