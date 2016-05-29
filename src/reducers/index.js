import { combineReducers } from 'redux';

import authentication from './authentication';

const rootReducer = combineReducers({
  authenticated: authentication
});

export default rootReducer;
