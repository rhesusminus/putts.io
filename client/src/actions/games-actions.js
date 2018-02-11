import axios from 'axios';
import { GAMES_REQUEST, GAMES_SUCCESS, GAMES_FAILURE } from './actionTypes';

const API_URI = process.env.REACT_APP_API_URI;

const receiveGames = gamesList => ({ type: GAMES_SUCCESS, payload: gamesList });

export const fetchGames = () => dispatch => {
  dispatch({ type: GAMES_REQUEST });
  return axios
    .get(`${API_URI}/api/games`)
    .then(result => {
      dispatch(receiveGames(result));
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: GAMES_FAILURE });
      return Promise.reject(error);
    });
};
