import axios from 'axios';

const URL = 'http://localhost:5000/api';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const CHECK_AUTHENTICATION = 'CHECK_AUTHENTICATION'
export const DISPLAY_JOKES = 'DISPLAY_JOKES';

export const authError = (error) => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error,
  };
};

export const checkAuth = () => {
  return (dispatch) => ({
    type: CHECK_AUTHENTICATION,
  });
};

export const register = (username, password, history) => {
  return (dispatch) => {
    axios
      .post(`${URL}/users`, { username, password })
      .then(() => {
        dispatch({
          type: USER_REGISTERED,
        });
        history.push('/login');
      })
      .catch(() => {
        dispatch(authError('Failed to register'));
      });
  };
};

export const login = (username, password, history) => {
  return (dispatch) => {
    axios
      .post(`${URL}/login`, { username, password })
      .then(response => {
        console.log('response', response);
        dispatch({
          type: USER_AUTHENTICATED,
        });
        localStorage.setItem('token', response.data.token);
        history.push('/jokes');
      })
      .catch(() => {
        dispatch(authError('Incorrect credentials'));
      });
  };
};

export const displayJokes = () => {
  return (dispatch) => {
    axios
      .get(`${URL}/jokes`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        dispatch({
          type: DISPLAY_JOKES,
          payload: response.data,
        });
        dispatch({
          type: USER_AUTHENTICATED,
        });
      })
      .catch(() => {
        dispatch(authError('Failed to display jokes'));
      });
  };
};