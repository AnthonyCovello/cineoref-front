/* eslint-disable camelcase */
import axios from 'axios';

const API_URL = 'https://cinoref-api.herokuapp.com/';

const proposal = (title, category, character, artist, reference, user_id) => axios.post(`${API_URL}form/submit`, {
  title,
  category,
  character,
  artist,
  reference,
  user_id,
}).then((response) => response.data);

const proposalService = {
  proposal,
};

export default proposalService;
