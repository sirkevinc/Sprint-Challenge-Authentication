import {
  USER_AUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHECK_AUTHENTICATION
} from '../actions';

export default (auth = {}, action) => {
  switch(action.type) {
    case USER_AUTHENTICATED:
      return { ...auth, authenticated: true };
    case AUTHENTICATION_ERROR:
      return { ...auth, error: action.payload };
    case CHECK_AUTHENTICATION:
      return { ...auth };
    default:
      return auth;
  } 
};