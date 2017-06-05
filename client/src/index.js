import React from 'react'
import {render} from 'react-dom'
import store from './store/store'
import {Provider} from 'react-redux'

const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
  </Provider>,
  rootElement
);
