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
  [CALL_API]: {
    types: [FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE],
    endpoint: 'games',
    method: 'get'
  }
})

export const postResult = result => ({
  [CALL_API]: {
    types: [SEND_RESULT_REQUEST, SEND_RESULT_SUCCESS, SEND_RESULT_FAILURE],
    endpoint: 'results',
    method: 'post',
    payload: result
  }
})
