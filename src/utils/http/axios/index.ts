import { AxiosHttpClient } from './axios';

export function createAxios() {
  console.log(import.meta.env.VITE_API_SERVER_URL);
  return new AxiosHttpClient({
    baseURL: import.meta.env.VITE_API_SERVER_URL
  });
}
