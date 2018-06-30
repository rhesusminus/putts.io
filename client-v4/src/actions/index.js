import { CALL_API, GAMES_FAILURE, GAMES_REQUEST, GAMES_SUCCESS, SELECT_GAME } from './action-types'

export const selectGame = game => ({
  type: SELECT_GAME,
  payload: game
})

export const fetchGames = () => ({
  [CALL_API]: {
    types: [GAMES_REQUEST, GAMES_SUCCESS, GAMES_FAILURE],
    endpoint: 'games'
  }
})
