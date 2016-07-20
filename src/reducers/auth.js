import * as actionTypes from '../actions/types';

export default function auth(state = {}, action) {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return { ...state, error: '', authenticated: true };

    case actionTypes.UNAUTH_USER:
      return { ...state, error: '', authenticated: false };

    case actionTypes.SET_AUTH_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
