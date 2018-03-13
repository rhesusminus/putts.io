import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers/'
import App from './components/App'
import './css/index.css'
// import registerServiceWorker from './registerServiceWorker';

const history = createHistory()
const middleware = [reduxThunk, routerMiddleware(history)]
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
})
const store = createStore(
  rootReducer,
  {
    /* initial state */
  },
  composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker();
