import axios from 'axios';
import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export class AxiosHttpClient {
  private readonly axiosInstance: AxiosInstance;
  constructor(config) {
    this.axiosInstance = axios.create(config);
  }

  /**
   * @description Rest APIs
   */

  async get<T>(url: string) {
    try {
      const { data } = await this.axiosInstance.get(url);
      console.log('axios response :: ', data);
      return data;
    } catch (err) {
      const error = err.response.data;
      console.log('axios error response :: ', error.response.data);
      return error;
    }
  }
  async post<T>(url: string, params?: object | string): Promise<API.Response<T>> {
    try {
      const { data } = await this.axiosInstance.post(url, params);
      console.log('axios response :: ', data);
      return data;
    } catch (error) {
      console.log('axios error response :: ', error.response.data);
      return error.response.status === 500
        ? { data: '', statusCode: '500', error: { message: 'server error' } }
        : error.response.data;
    }
  }
}
