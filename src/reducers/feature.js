import * as actionTypes from '../actions/types';

export default function feature(state = { message: '' }, action) {
  switch (action.type) {
    case actionTypes.FETCH_MESSAGE:
      return { ...state, message: action.payload };

    default:
      return state;
  }
}
