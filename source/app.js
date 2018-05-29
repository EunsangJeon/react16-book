import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import { initializeStreamOfTweets } from './utils/WebAPIUtils';
import store from './stores';
import { Provider } from 'react-redux'

initializeStreamOfTweets(store);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('react-application')
)
