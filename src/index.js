import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/';
import App from './components/App';
import './css/index.css';
// import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(brands, faCog, faUserCircle);

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
