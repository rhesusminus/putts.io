import { GAMES_FAILURE, GAMES_REQUEST, GAMES_SUCCESS, SELECT_GAME } from '../actions/action-types'

const initialState = {
  isFetching: false,
  list: [],
  selectedGame: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAMES_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case GAMES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isFetching: false
      }

    case SELECT_GAME:
      return {
        ...state,
        selectedGame: action.payload
      }

    default:
      return state
  }
}
