import { ITx, ITxs, Pagination, Transfer, Tx } from '@type/api';

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

  async function Send(params: Transfer) {
    return await service.post<Transfer>(`/txs`, params);
  }

  return {
    GetAll,
    GetOneById,
    Send
  };
};
export default TransactionsService;
