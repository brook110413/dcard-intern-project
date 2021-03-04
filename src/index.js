import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import store from './store';
import App from './App';

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <App />
      {/* <div>123</div> */}
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
