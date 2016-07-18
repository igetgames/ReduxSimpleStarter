import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return dispatch => {
    axios.post(`${API_URL}/login`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });

        browserHistory.push('/feature');
      })
      .catch(() => {

      });
  };
}

export { AUTH_USER, UNAUTH_USER } from './types';
