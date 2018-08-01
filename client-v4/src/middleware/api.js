import { CALL_API } from '../actions/action-types'
import { Http } from '../utils'
import { validateAction } from '../validations/action-validations'

export default state => next => action => {
  if (action.type !== CALL_API) {
    return next(action)
  }

  const {
    payload,
    meta: { endpoint, types, method = 'GET' }
  } = action
  const [requestType, successType, failureType] = types

  validateAction(action.meta)

  next({ type: requestType })

  Http(method, endpoint, payload)
    .run()
    .listen({
      onResolved: res => next({ type: successType, payload: res.data }),
      onRejected: error => next({ type: failureType, error: true, payload: error.message || 'Something bad happened' })
    })
}
