import { IAccount } from '@type/api';

import { service } from '@src/utils/http';

const AccountService = () => {
  function GetOneById(id: string) {
    return service.get<IAccount>(`/accounts/${id}`);
  }

  return {
    GetOneById
  };
};
export default AccountService;
