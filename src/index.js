import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import todos from './reducers/todos';

const rootDom = document.createElement('div');
rootDom.id = 'root';
document.body.append(rootDom);

const combineReducer = combineReducers({ todos });
const store = createStore(combineReducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);
