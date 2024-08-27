import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:6417',
  timeout: 9000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default instance;
