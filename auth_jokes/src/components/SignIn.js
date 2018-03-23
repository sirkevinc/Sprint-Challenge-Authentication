import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
import { login } from '../actions';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SignIn extends Component {

  state = {
    username: '',
    password: '',
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password, this.props.history);
  }

  // handleFormSubmit ({ username, password }) {
  //   this.props.login(username, password, this.props.history);
  // }

  renderAlert() {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  }

  render() {
    // const { handleSubmit } = this.props;

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
        <p className="SignIn-header">Sign In</p>
        <Form onSubmit={this.onSubmit}>
            <Input name="username" onChange={this.onChange} value={this.state.username} type="text" placeholder="username" />
            <Input name="password" onChange={this.onChange} value={this.state.password} type="password" placeholder="password" />
          <Button type="submit">Sign In</Button>
          {this.renderAlert()}
        </Form>
      </div>
      // <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      //   <fieldset>
      //     <label>Username:</label>
      //     <Field name="username" component="input" type="text" />
      //   </fieldset>
      //   <fieldset>
      //     <label>Password:</label>
      //     <Field name="password" component="input" type="password" />
      //   </fieldset>
      //   <button action="submit">Sign In</button>
      //   {this.renderAlert()}
      // </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated
  };
};

SignIn = connect(mapStateToProps, { login })(SignIn);

export default SignIn;
