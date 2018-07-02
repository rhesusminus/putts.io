import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, SELECT_GAME } from '../actions/action-types'

const initialState = {
  isFetching: false,
  list: [],
  selectedGame: null
}

export default (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        list: payload,
        isFetching: false
      }

    case SELECT_GAME:
      return {
        ...state,
        selectedGame: payload
      }

    default:
      return state
  }
}
