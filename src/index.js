import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(promise),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
