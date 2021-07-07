import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: apiURL,
});

export default $api;
