import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';
import { Button, Form, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import { reduxForm, Field } from 'redux-form';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state.username, this.state.password, this.props.history);
  }
  // handleFormSubmit ({ username, password }) {
  //   this.props.register(username, password, this.props.history);
  // }

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  render() {
    // const { handleSubmit } = this.props;
    return  (
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
      <p className="SignUp-header">Sign Up</p>
      <Form onSubmit={this.onSubmit}>
        <Input type="text" name="username" value={this.state.username} onChange={this.onChange} placeholder="username" />
        <Input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="password" />
        <Button type="submit">Register</Button>
      </Form>
      {/* <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label>Username:</label>
          <Field name="username" component="input" type="text" />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name="password" component="input" type="password" />
        </fieldset>
        <button action="submit">Sign Up</button>
        {this.renderAlert()}
      </form> */}
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

SignUp = connect(mapStateToProps, { register })(SignUp);

export default SignUp;

// export default reduxForm({
//   form: 'signup',
//   fields: ['username', 'password']
// })(SignUp);