import axios, { AxiosRequestConfig } from 'axios';

const request: AxiosRequestConfig = {
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: import.meta.env.VITE_API_LOCAL,
};
const instanceAxios = axios.create(request);

export default instanceAxios;
