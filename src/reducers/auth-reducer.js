import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: Boolean(localStorage.getItem('putts.io-jwt-token')),
  errorMessage: '',
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.credentials.email,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};
