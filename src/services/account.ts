import { IAccount } from '@type/api';

import useApi from '@hooks/useApi.ts';

const AccountService = () => {
  const PATH: string = '/api';

  function GetOneById(id: string) {
    return useApi<IAccount>(id && `${PATH}/accounts/${id}`, {
      revalidateOnMount: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      focusThrottleInterval: 3000
    });
  }

  return {
    GetOneById
  };
};
export default AccountService;
