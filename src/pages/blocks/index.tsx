import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useSWR from 'swr';

import fetcher from '@utils/fetcher';

const Blocks = () => {
  const { data, error } = useSWR('/api/block/1', fetcher);
  console.log(data, error);

  const columns: GridColDef[] = [
    { field: 'Height', headerName: 'BLOCK' },
    { field: 'Timestamp', headerName: 'TIME' },
    { field: 'TxResponse.TxCount', headerName: 'TOTAL TXS' },
    { field: 'Hash', headerName: 'HASH' }
  ];

  return data && <DataGrid rows={[data].map((item, index) => ({ ...item, id: index }))} columns={columns} />;
};

export default Blocks;
