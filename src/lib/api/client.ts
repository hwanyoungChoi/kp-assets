import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

export default client;
