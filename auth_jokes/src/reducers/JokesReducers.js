import { DISPLAY_JOKES } from '../actions';

export default (jokes = [], action) => {
  switch (action.type) {
    case DISPLAY_JOKES:
      return action.payload;
    default:
      return jokes;
  }
};