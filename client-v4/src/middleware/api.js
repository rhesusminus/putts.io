import { CALL_API } from '../actions/action-types'
import { validateAction } from './validate'

const API_ROOT = process.env.REACT_APP_API_URI

const callApi = method => endpoint => {
  const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint
  const addOptions = () => {
    if (method === 'POST') {
      return {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    }
  }

  return fetch(fullUrl, addOptions())
    .then(response => {
      if (!response.ok) {
        return Promise.reject()
      }

      return response.json()
    })
    .then(json => Object.assign([], json))
}

export default state => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { types, method = '' } = callAPI

  /*
  if (typeof endpoint === 'function') {
    endpoint = endpoint(state.getState())
  }
  */

  validateAction(callAPI)

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))

  return callApi(method)(endpoint).then(
    response =>
      next(
        actionWith({
          type: successType,
          payload: response
        })
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || 'Something bad happened'
        })
      )
  )
}
