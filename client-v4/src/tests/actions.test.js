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

  it('should create and action to ', () => {})
})
