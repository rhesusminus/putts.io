import { SEND_RESULT_REQUEST, SEND_RESULT_SUCCESS, SEND_RESULT_FAILURE } from '../actions/action-types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_RESULT_REQUEST:
      return state

    default:
      return state
  }
}
