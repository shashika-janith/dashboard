import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
  // timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

axiosInstance
  .interceptors
  .request
  .use((config) => {
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

axiosInstance
  .interceptors
  .response
  .use(
    response => response,
    error => {
      return Promise.reject(error);
    }
  );


export default axiosInstance;