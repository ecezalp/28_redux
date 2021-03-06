import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './reducers/index';

import { fetchCats, addCats } from './actions';

const store = createStore(rootReducer)

store.dispatch( fetchCats());

console.log(store.getState())

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('container')
)
