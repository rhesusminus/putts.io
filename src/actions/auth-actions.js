import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './types';
export * from './user-actions';

const requestLogin = (credentials) => ({
      type: LOGIN_REQUEST,
      isFetching: true,
      isAuthenticated: false,
      credentials
});

const receiveLogin = (token) => ({
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token
});

const loginError = (message) => ({
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
});

const requestLogout = () => ({
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
});

const receiveLogout = () => ({
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
});

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch(requestLogin({ email, password }));

    return axios.post('http://localhost:3090/signin', { email, password })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('jwt-token', token);
        dispatch(receiveLogin(token));
      })
      .catch(error => {
        const errorMessage = error.response.status === 401
          ? 'Incorrect email or password!'
          : 'Something went wrong!';

        dispatch(loginError(errorMessage));

        return Promise.reject(error);
      });
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('jwt-token');
    dispatch(receiveLogout());
  }
}
