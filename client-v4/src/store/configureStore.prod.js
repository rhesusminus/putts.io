import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import middleware from './middlewares'

export default preloadedState => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(...middleware))

  return store
}
