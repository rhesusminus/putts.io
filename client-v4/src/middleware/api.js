import { CALL_API } from '../actions/action-types'

const API_ROOT = process.env.REACT_APP_API_URI

const callApi = endpoint => {
  const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        return Promise.reject()
      }

      return response.json()
    })
    .then(json => Object.assign([], json))
}

export default ({ getState, dispatch }) => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { types } = callAPI

  /*
  if (typeof endpoint === 'function') {
    endpoint = endpoint(getState())
  }
  */

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint).then(
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
