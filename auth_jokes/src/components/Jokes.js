import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayJokes } from '../actions';

class Jokes extends Component {
  componentDidMount() {
    this.props.displayJokes();
  }

  render() {
    return (
      <ul>
        {this.props.jokes.map((joke, i) => {
          return <li key={i}>{joke}</li>
        })}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    jokes: state.jokes
  };
};

export default connect(mapStateToProps, { displayJokes })(Jokes);