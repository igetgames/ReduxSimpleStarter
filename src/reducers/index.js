import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import feature from './feature';

const rootReducer = combineReducers({
  form,
  auth,
  feature
});

export default rootReducer;
