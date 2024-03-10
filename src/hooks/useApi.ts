import useSWR from 'swr';
import type { SWRConfiguration, SWRResponse } from 'swr';

import { fetcher } from '@utils';

const useApi = <T>(path: string, config: SWRConfiguration): SWRResponse<T> => {
  return useSWR(path, fetcher, config);
};

export default useApi;
