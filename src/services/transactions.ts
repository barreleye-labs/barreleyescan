import { TransactionRequest, TransactionResponse, TransactionsResponse } from '@type/dto/transaction';

import useApi from '@hooks/useApi';

import { service } from '@src/utils/http';

const TransactionsService = () => {
  const PATH: string = '/api';

  function GetAll({ page, size }: Record<string, number>) {
    return useApi<TransactionsResponse>(`${PATH}/txs?page=${page}&size=${size}`, {
      refreshInterval: true
    });
  }

  function GetOneById(id: string) {
    return useApi<TransactionResponse>(`${PATH}/txs/${id}`, {});
  }

  async function Send(params: TransactionRequest) {
    return await service.post<TransactionRequest>(`/txs`, params);
  }

  return {
    GetAll,
    GetOneById,
    Send
  };
};
export default TransactionsService;
