import { CALL_API } from '../actions/action-types'
import { validateAction } from './validate'

const API_ROOT = process.env.REACT_APP_API_URI

const createHeaders = method => {
  if (method === 'POST') {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  } else {
    return null
  }
}

const callApi = method => (endpoint, payload) => {
  const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint
  const addOptions = () => {
    if (method === 'POST') {
      return { method, headers: createHeaders(method), body: JSON.stringify(payload) }
    }
    return null
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
  if (action.type !== CALL_API) {
    return next(action)
  }

  const {
    payload,
    meta: { endpoint, types, method = 'GET' }
  } = action

  console.log('CALL_API:', action)

  validateAction(action.meta)

  const [requestType, successType, failureType] = types
  next({ type: requestType })

  return callApi(method.toUpperCase())(endpoint, payload).then(
    response =>
      next({
        type: successType,
        payload: response
      }),
    error =>
      next({
        type: failureType,
        error: true,
        payload: error.message || 'Something bad happened'
      })
  )
}
