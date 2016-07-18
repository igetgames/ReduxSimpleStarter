import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, SET_AUTH_ERROR } from './types';

const API_URL = 'http://localhost:3090';

export function setAuthError(error) {
  return {
    type: SET_AUTH_ERROR,
    payload: error,
    error: true
  };
}

export function signinUser({ email, password }) {
  return dispatch => {
    axios.post(`${API_URL}/login`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(setAuthError('Invalid login'));
      });
  };
}

export function signoutUser() {
  return {
    type: UNAUTH_USER
  };
}

export { AUTH_USER, UNAUTH_USER } from './types';
