import axios, { AxiosInstance } from 'axios';

export function createServerAPI(): AxiosInstance {
  const api = axios.create({
    baseURL: 'https://10.react.pages.academy/six-cities',
    timeout: 5000
  });

  return api;
}
