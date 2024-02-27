import { ITx, ITxs, Pagination } from '@type/api';

import useApi from '@hooks/useApi';

const TransactionsService = () => {
  const PATH: string = '/api';

  function GetAll({ page, size }: Pagination) {
    return useApi<ITxs>(`${PATH}/txs?page=${page}&size=${size}`, {
      refreshInterval: true
    });
  }

  function GetOneById(id: string) {
    return useApi<ITx>(`${PATH}/txs/${id}`);
  }

  return {
    GetAll,
    GetOneById
  };
};
export default TransactionsService;
