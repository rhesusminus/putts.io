import axios from 'axios';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actionTypes';

const API_URI = process.env.REACT_APP_API_URI;

const requestLogin = credentials => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  credentials,
});

const receiveLogin = token => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token,
});

const loginError = message => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});

const requestLogout = () => ({
  type: LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true,
});

const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
});

export const loginUser = ({ email, password }) => dispatch => {
  dispatch(requestLogin({ email, password }));

  return axios
    .post(`${API_URI}/signin`, { email, password })
    .then(({ data: { token } }) => {
      localStorage.setItem('putts.io-jwt-token', token);
      dispatch(receiveLogin(token));
      dispatch(push('/dashboard'));
    })
    .catch(error => {
      let errorMessage = '';

      if (!error.response) {
        errorMessage = 'Network error.';
      } else {
        errorMessage = error.response.status === 401 ? 'Incorrect email or password!' : 'Something went wrong!';
      }

      dispatch(loginError(errorMessage));

      return Promise.reject(error);
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  localStorage.removeItem('putts.io-jwt-token');
  dispatch(receiveLogout());
};
