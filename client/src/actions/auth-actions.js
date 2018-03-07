import axios from 'axios';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actionTypes';

const API_URI = process.env.REACT_APP_API_URI;

const requestLogin = credentials => ({
  type: LOGIN_REQUEST,
  credentials,
});

const receiveLogin = token => ({
  type: LOGIN_SUCCESS,
  token,
});

const loginError = message => ({
  type: LOGIN_FAILURE,
  message,
});

export const loginUser = ({ email, password }) => dispatch => {
  const token = 'ABC'; // secret temporary token for testing purposes
  dispatch(requestLogin({ email, password }));
  localStorage.setItem('putts.io-jwt-token', token);
  dispatch(receiveLogin(token));
  dispatch(push('/dashboard'));
  /* commented out since I really don't have a login-service atm.
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
    */
};

export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT_REQUEST });
  localStorage.removeItem('putts.io-jwt-token');
  dispatch({ type: LOGOUT_SUCCESS });
  dispatch(push('/'));
};
