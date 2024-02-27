import axios from 'axios';
import { type AxiosInstance } from 'axios';

export class AxiosHttpClient {
  private readonly axiosInstance: AxiosInstance;
  constructor(config) {
    this.axiosInstance = axios.create(config);
  }

  /**
   * TODO: Axios Interceptor
   */

  /**
   * @description Rest APIs
   */

  post<T>(url: string, params?: object | string) {
    return this.axiosInstance.post(url, params);
  }
}
