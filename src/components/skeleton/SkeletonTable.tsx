import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';

import { TableCell } from '@components/table';

interface Props {
  columns: number;
  size: number;
}
const SkeletonTable = ({ columns = 7, size = 10 }: Props) => {
  return new Array(size).fill({}).map((_, index) => (
    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {new Array(columns).fill({}).map((_, idx) => (
        <TableCell key={idx}>
          <Skeleton variant="rectangular" />
        </TableCell>
      ))}
    </TableRow>
  ));
};

export default SkeletonTable;
