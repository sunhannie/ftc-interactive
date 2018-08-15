import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore,applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'

import {rootReducer} from './reducers/question'
import App from './app'  //不需要添加{}
const middleware = [ thunk ];
const store = createStore(rootReducer,
   applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root')
);
