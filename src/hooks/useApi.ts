import useSWR from 'swr';

import { fetcher } from '@utils';

interface Config {
  refreshInterval: boolean;
}

const useApi = <T>(path: string, config?: Config) => {
  const { data, isLoading, error } = useSWR<T>(path, fetcher, config);
  return { data, isLoading, error };
};

export default useApi;
