import { AccountResponse } from '@type/dto/account';

import useApi from '@hooks/useApi.ts';

const AccountService = () => {
  const PATH: string = '/api';

  function GetOneById(id: string, option?: Record<string, boolean>) {
    return useApi<AccountResponse>(id && `${PATH}/accounts/${id}`, {
      revalidateOnMount: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      focusThrottleInterval: 3000,
      ...option
    });
  }

  return {
    GetOneById
  };
};
export default AccountService;
