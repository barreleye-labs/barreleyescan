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

  async get<T>(url: string) {
    try {
      const { data } = await this.axiosInstance.get(url);

      return data;
    } catch (err) {
      const error = err.response.data;
      return error;
    }
  }
  async post<T>(url: string, params?: object | string) {
    try {
      const { data } = await this.axiosInstance.post(url, params);
      return data;
    } catch (err) {
      const error = err.response.data;
      return error;
    }
  }
}
