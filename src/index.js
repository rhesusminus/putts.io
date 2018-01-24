import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers/';
import App from './components/App';
import './css/index.css';
// import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(brands, faCog, faUserCircle, faBars);

const history = createHistory();
const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(reduxThunk, routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
