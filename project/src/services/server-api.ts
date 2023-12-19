import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { getToken } from '../features/token';

export function createServerAPI(): AxiosInstance {
  const api = axios.create({
    baseURL: 'https://10.react.pages.academy/six-cities',
    timeout: 5000
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (config.headers && token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
}
