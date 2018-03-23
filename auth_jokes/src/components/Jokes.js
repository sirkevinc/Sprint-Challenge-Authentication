import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayJokes } from '../actions';
import { Link } from 'react-router-dom';

class Jokes extends Component {
  componentDidMount() {
    this.props.displayJokes();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="App">
          <header className="App-header">
          <h1 className="App-title">Welcome to Auth Jokes</h1>
          <div className="Header-links">
            <Link className="Login-Link" to="/login">Login</Link>
            <Link className="Register-Link" to="/users">Register</Link>
          </div>
          </header>
        </div>
        <p className="jokes-header">Enjoy some hilarious jokes!</p>
        <ul>
          {this.props.jokes.map((joke, i) => {
            return (
              <div key={i} className="joke">
                <li>{joke.setup}</li>
                <li>{joke.punchline}</li>
                <hr />
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    jokes: state.jokes
  };
};

export default connect(mapStateToProps, { displayJokes })(Jokes);