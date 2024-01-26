import Snackbar from '@mui/material/Snackbar';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useSWR from 'swr';

import fetcher from '@utils/fetcher';

const Transactions = () => {
  const { data, error } = useSWR('/api/tx/1', fetcher);
  console.log(data, error);

  const columns: GridColDef[] = [
    { field: 'Height', headerName: 'BLOCK' },
    { field: 'Timestamp', headerName: 'TIME' },
    { field: 'TxResponse.TxCount', headerName: 'TOTAL TXS' },
    { field: 'Hash', headerName: 'HASH' }
  ];

  return (
    <>
      {data && <DataGrid rows={[data].map((item, index) => ({ ...item, id: index }))} columns={columns} />}
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={error ? true : false}
          message={error.message}
        />
      )}
    </>
  );
};

export default Transactions;
