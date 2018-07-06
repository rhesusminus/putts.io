import { combineReducers } from 'redux'
import gamesReducer from './games-reducer'
import gameReducer from './game-reducer'
import uiReducer from './ui-reducer'

export default combineReducers({
  game: gameReducer,
  games: gamesReducer,
  ui: uiReducer
})
