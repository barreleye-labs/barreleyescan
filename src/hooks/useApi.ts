import useSWR from 'swr';
import { type SWRResponse } from 'swr';

import { fetcher } from '@utils';

const useApi = <T>(path: string, config): SWRResponse<T> => {
  return useSWR(path, fetcher, config);
};

export default useApi;
