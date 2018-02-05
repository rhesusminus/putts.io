import { GAMES_REQUEST, GAMES_SUCCESS, GAMES_FAILURE } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  gamesList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAMES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case GAMES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        gamesList: action.payload.data,
      };

    case GAMES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
