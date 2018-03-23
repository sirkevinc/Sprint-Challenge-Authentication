import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Jokes from './components/Jokes';
import RequireAuth from './components/HOC/RequireAuth';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers/RootReducer';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={SignIn} />
        <Route path="/users" component={SignUp} />
        <Route path="/jokes" component={RequireAuth(Jokes)} />
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root'));
