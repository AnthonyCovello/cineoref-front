import axios from 'axios';

const API_URL = 'https://cinoref-api.herokuapp.com/';
const user = JSON.parse(localStorage.getItem('user'));

const proposal = (title, category, character, artist, reference) => axios.post(`${API_URL}form/submit`, {
  title,
  category,
  character,
  artist,
  reference,
  username: user.pseudo,
}).then(
  (response) => response.data,
  console.log(title, category, character, artist, reference, user.pseudo),
);

const proposalService = {
  proposal,
};

export default proposalService;
