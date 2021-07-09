import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: apiURL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `${localStorage.getItem('habits:token')}`;
  return config;
});

export default $api;
