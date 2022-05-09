import axios from 'axios';

const API_URL = 'http://:3000';

const register = (pseudo, email, password, birthday) => axios.post(`${API_URL}/signup`, {
  pseudo,
  email,
  password,
  birthday,
});

const login = (pseudo, password) => axios.post(`${API_URL}/login`, {
  pseudo,
  password,
})
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
