
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from '../actions/auth';
import './login.css';

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values =>
        this.props.dispatch(login(values.email, values.password))
        )}>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" id="email-field" />
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" id="password-field" />
        <button type="submit" onSubmit={this.handleSubmit}>Log In</button>
        <button id="register-button">Register</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);
