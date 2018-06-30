import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'

export default preloadedState => {
  const middleware = [thunk, api]

  const store = createStore(rootReducer, preloadedState, applyMiddleware(...middleware))

  return store
}
