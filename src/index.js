import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducers';
import middlewares from './middlewares/middleware';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const store = createStore(
  rootReducer,
  applyMiddleware(
    middlewares
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);