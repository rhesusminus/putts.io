import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import auth from './auth-reducer';
import games from './games-reducer';

const rootReducer = combineReducers({
  auth,
  router,
  games,
});

export default rootReducer;
