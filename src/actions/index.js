import axios from 'axios';

import {FETCH_USERS} from './types';

const API_URL = 'http://jsonplaceholder.typicode.com/users';

export function fetchUsers() {
  const request = axios.get(API_URL);

  return {
    type: FETCH_USERS,
    payload: request
  };
}
