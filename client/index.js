import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux'
import { Provider} from 'react-redux'

import {reducer} from './reducers/question'
import App from './app'  //不需要添加{}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root')
);
