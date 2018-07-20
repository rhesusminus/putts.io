import * as actions from '../actions'
import * as types from '../actions/action-types'

describe('actions', () => {
  it('should create an action to select game', () => {
    const game = 3
    const expectedAction = {
      type: types.SELECT_GAME,
      payload: game
    }
    expect(actions.selectGame(game)).toEqual(expectedAction)
  })

  it('should create an action to change toolbar-type', () => {
    const type = 'normal'
    const expectedAction = {
      type: types.CHANGE_TOOLBAR_TYPE,
      payload: type
    }
    expect(actions.changeToolbarType(type)).toEqual(expectedAction)
  })

  it('should create an action to change toolbar-title', () => {
    const title = 'Naakima'
    const expectedAction = {
      type: types.CHANGE_TOOLBAR_TITLE,
      payload: title
    }
    expect(actions.changeToolbarTitle(title)).toEqual(expectedAction)
  })

  it('should create an action to fetch games from server', () => {
    const expectedAction = {
      type: types.CALL_API,
      meta: {
        method: 'GET',
        endpoint: 'games',
        types: [types.FETCH_GAMES_REQUEST, types.FETCH_GAMES_SUCCESS, types.FETCH_GAMES_FAILURE]
      }
    }
    expect(actions.fetchGames()).toEqual(expectedAction)
  })

  it('should create an action to post results to the server', () => {
    const result = 5
    const expectedAction = {
      type: types.CALL_API,
      payload: { result },
      meta: {
        method: 'POST',
        endpoint: 'results',
        types: [types.SEND_RESULT_REQUEST, types.SEND_RESULT_SUCCESS, types.SEND_RESULT_FAILURE]
      }
    }
    expect(actions.postResult(result)).toEqual(expectedAction)
  })
})
