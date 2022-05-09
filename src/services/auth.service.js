import axios from 'axios';

const API_URL = 'http://:3000';

const register = (pseudo, email, password, birthday) => axios.post(`${API_URL}/login`, {
  pseudo,
  email,
  password,
  birthday,
});
