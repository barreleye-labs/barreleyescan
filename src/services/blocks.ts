import { IBlock, IBlocks, Pagination } from '@type/api';

import useApi from '@hooks/useApi';

const BlocksService = () => {
  const PATH: string = '/api';

  function GetAll({ page, size }: Pagination) {
    return useApi<IBlocks>(`${PATH}/blocks?page=${page}&size=${size}`, {
      refreshInterval: true
    });
  }

  function GetOneById(id: string) {
    return useApi<IBlock>(`${PATH}/blocks/${id}`);
  }

  function GetLast() {
    return useApi<IBlock>(`${PATH}/last-block`, { refreshInterval: true });
  }

  return {
    GetAll,
    GetOneById,
    GetLast
  };
};
export default BlocksService;
