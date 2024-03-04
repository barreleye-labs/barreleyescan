import useSWR from 'swr';

import { fetcher } from '@utils';

const useApi = <T>(path: string, config) => {
  const { data, isLoading, error, mutate } = useSWR<T, boolean, Error>(path, fetcher, config);
  return { data, isLoading, error, mutate };
};

export default useApi;
