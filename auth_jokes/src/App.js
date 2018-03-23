import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Auth Jokes</h1>
          <div className="Header-links">
            <Link className="Login-Link" to="/login">Login</Link>
            <Link className="Register-Link" to="/users">Register</Link>
          </div>
        </header>
        <p className="Root-page-text">Please Select "Login" or "Register"</p>
      </div>
    );
  }
}

export default App;
