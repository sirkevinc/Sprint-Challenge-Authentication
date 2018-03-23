import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import JokesReducers from './JokesReducers';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducers,
  form: FormReducer,
  jokes: JokesReducers,
});

export default rootReducer;