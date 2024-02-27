import { createAxios } from '@src/utils/http/axios';

export const service = createAxios({
  baseURL: 'http://localhost:9001'
});
