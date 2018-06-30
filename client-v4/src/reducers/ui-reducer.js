import { CHANGE_TOOLBAR_TYPE, CHANGE_TOOLBAR_TITLE } from '../actions/action-types'

const initialState = {
  toolbarType: 'normal',
  toolbarTitle: 'default title'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_TOOLBAR_TYPE:
      return {
        ...state,
        toolbarType: payload
      }
    case CHANGE_TOOLBAR_TITLE:
      return {
        ...state,
        toolbarTitle: payload
      }

    default:
      return state
  }
}
