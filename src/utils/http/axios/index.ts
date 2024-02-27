import { service } from '@src/utils/http';
import { AxiosHttpClient } from '@src/utils/http/axios/axios.ts';

export function createAxios() {
  return new AxiosHttpClient({});
}
