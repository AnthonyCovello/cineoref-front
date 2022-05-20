import axios from 'axios';

const API_URL = 'https://cinoref-api.herokuapp.com/';

const register = (username, email, birthday, password) => axios.post(`${API_URL}signup`, {
  username,
  email,
  birthday,
  password,
}).then((response) => {
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
});

const login = (username, password) => axios.post(`${API_URL}login`, {
  username,
  password,
}).then((response) => {
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
});

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register, login, logout,
};

export default authService;
