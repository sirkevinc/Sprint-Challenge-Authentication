import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayJokes } from '../actions';

class Jokes extends Component {
  componentDidMount() {
    this.props.displayJokes();
  }

  render() {
    console.log(this.props)
    return (
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
    );
  }
}
const mapStateToProps = state => {
  return {
    jokes: state.jokes
  };
};

export default connect(mapStateToProps, { displayJokes })(Jokes);