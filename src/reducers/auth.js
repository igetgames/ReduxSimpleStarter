import * as actionTypes from '../actions/types';

export default function auth(state = {}, action) {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return { ...state, authenticated: true };

    case actionTypes.UNAUTH_USER:
      return { ...state, authenticated: false };

    default:
      return state;
  }
}
