import { BlockResponse, BlocksResponse } from '@type/dto/block';

import useApi from '@hooks/useApi';

const BlocksService = () => {
  const PATH: string = '/api';

  function GetAll({ page, size }: Record<string, number>) {
    return useApi<BlocksResponse>(`${PATH}/blocks?page=${page}&size=${size}`, {
      refreshInterval: true
    });
  }

  function GetOneById(id: string) {
    return useApi<BlockResponse>(`${PATH}/blocks/${id}`, {});
  }

  function GetLast() {
    return useApi<BlockResponse>(`${PATH}/last-block`, { refreshInterval: true });
  }

  return {
    GetAll,
    GetOneById,
    GetLast
  };
};
export default BlocksService;
