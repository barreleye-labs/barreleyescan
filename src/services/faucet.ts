import { IAccount } from '@type/api';

import { service } from '@src/utils/http';

import useApi from '@hooks/useApi';

const FaucetService = () => {
  const PATH: string = '/api';

  function GetOneById(id: string) {
    return useApi<IAccount>(`${PATH}/accounts/${id}`, {
      revalidateOnMount: false,
      revalidateOnReconnect: false,
      revalidateOnFocus: false
    });
  }

  function Send(params: { accountAddress: string }) {
    return service.post('/faucet', params);
  }

  return {
    GetOneById,
    Send
  };
};
export default FaucetService;
