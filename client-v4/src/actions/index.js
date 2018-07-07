import {
  CALL_API,
  FETCH_GAMES_FAILURE,
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  SELECT_GAME,
  CHANGE_TOOLBAR_TYPE,
  CHANGE_TOOLBAR_TITLE,
  SEND_RESULT_REQUEST,
  SEND_RESULT_SUCCESS,
  SEND_RESULT_FAILURE
} from './action-types'

export const selectGame = game => ({
  type: SELECT_GAME,
  payload: game
})

export const changeToolbarType = type => ({
  type: CHANGE_TOOLBAR_TYPE,
  payload: type
})

export const changeToolbarTitle = title => ({
  type: CHANGE_TOOLBAR_TITLE,
  payload: title
})

export const fetchGames = () => ({
  type: CALL_API,
  meta: {
    method: 'GET',
    endpoint: 'games',
    types: [FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE]
  }
})

export const postResult = result => ({
  type: CALL_API,
  payload: { result },
  meta: {
    method: 'POST',
    endpoint: 'results',
    types: [SEND_RESULT_REQUEST, SEND_RESULT_SUCCESS, SEND_RESULT_FAILURE]
  }
})
