import { IAccount } from '@type/api';

import useApi from '@hooks/useApi';

const FaucetService = () => {
  const PATH: string = '/api';

  function GetOneById(id: string) {
    return useApi<IAccount>(`${PATH}/accounts/${id}`);
  }

  return {
    GetOneById
  };
};
export default FaucetService;
