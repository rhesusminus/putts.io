import { createStore, applyMiddleware, compose } from 'redux'
import middleware from './middlewares'
import rootReducer from '../reducers'

export default preloadedState => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const enhancer = composeEnhancers(applyMiddleware(...middleware))

  const store = createStore(rootReducer, preloadedState, enhancer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}
