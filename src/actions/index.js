import axios from 'axios';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return dispatch => {
    axios.post(`${API_URL}/login`, { email, password });
  };
}
