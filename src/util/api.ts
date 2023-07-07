import axios, { AxiosInstance, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 5000, // Set the timeout value as needed
});

export const get = <T>(url: string, params?: any): Promise<AxiosResponse<T>> => api.get(url, { params });

export const post = <T>(url: string, data: any): Promise<AxiosResponse<T>> => api.post(url, data);

export const put = <T>(url: string, data: any): Promise<AxiosResponse<T>> => api.put(url, data);

export const remove = <T>(url: string): Promise<AxiosResponse<T>> => api.delete(url);

api.interceptors.request.use(
  (config) => {
    // Add authentication token, headers, or any other custom logic here
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Process successful responses
    return response.data;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default api;
