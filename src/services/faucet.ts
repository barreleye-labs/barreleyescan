import { AccountResponse } from '@type/dto/account';
import { FaucetRequest, TransactionResponse } from '@type/dto/transaction';

import useApi from '@hooks/useApi';

import { service } from '@src/utils/http';

const FaucetService = () => {
  const PATH: string = '/api';

  function GetOneById(id: string) {
    return useApi<AccountResponse>(`${PATH}/accounts/${id}`, {
      revalidateOnMount: false,
      revalidateOnReconnect: false,
      revalidateOnFocus: false
    });
  }

  async function Send(params: FaucetRequest) {
    return await service.post<TransactionResponse>('/faucet', params);
  }

  return {
    GetOneById,
    Send
  };
};
export default FaucetService;
