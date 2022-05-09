import axios from 'axios';

const API_URL = 'https://cinoref-api.herokuapp.com/';

const register = (username, email, password, birthday) => axios.post(`${API_URL}signup`, {
  username,
  email,
  password,
  birthday,
});

const login = (username, password) => axios.post(`${API_URL}login`, {
  username,
  password,
})
  .then((response) => {
    console.log(response);
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
