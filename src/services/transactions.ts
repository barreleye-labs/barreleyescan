import { ITx, ITxs, Pagination, Tx } from '@type/api';

import { service } from '@src/utils/http';

import useApi from '@hooks/useApi';

const TransactionsService = () => {
  const PATH: string = '/api';

  function GetAll({ page, size }: Pagination) {
    return useApi<ITxs>(`${PATH}/txs?page=${page}&size=${size}`, {
      refreshInterval: true
    });
  }

  function GetOneById(id: string) {
    return useApi<ITx>(`${PATH}/txs/${id}`, {});
  }

  function Send(params: Tx) {
    return service.post<ITx>(`/txs`, params);
  }

  return {
    GetAll,
    GetOneById,
    Send
  };
};
export default TransactionsService;
