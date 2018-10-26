
import React from 'react';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {register, login} from '../actions/auth';
import './register-form.css';

import {
  required,
  nonEmpty,
  password,
  email,
  matches
} from '../validators';
const matchesPassword = matches('password');

class RegisterForm extends React.Component {
  // TODO: doesn't check to see if the passwords match
  render() {
    // TODO: doesn't automatically go to a logged in page
    if(this.props.submitSucceeded) {
      return <Redirect to="/login" />;
    }
    return (
      <main>
        <div className="register-container">
          <form className="register-form" onSubmit={this.props.handleSubmit(values =>
            this.props.dispatch(register(values.email, values.password,
              values['first-name'], values['last-name']))
            )}>
            <legend>Register</legend>
            <label htmlFor="first-name">First name</label>
            <Field name="first-name" component={Input} type="text" id="first-name-field" 
              validate={[required, nonEmpty]}/>
            <label htmlFor="last-name">Last name</label>
            <Field name="last-name" component={Input} type="text" id="last-name-field"
              validate={[required, nonEmpty]}/>
            <label htmlFor="email">Email</label>
            <Field name="email" component={Input} type="text" id="email-field"
              validate={[required, nonEmpty, email]}/>
            <label htmlFor="password">Password</label>
            <Field name="password" component={Input} type="password" id="password-field"
              validate={[required, nonEmpty, password]}/>
            <label htmlFor="password-confirm">Confirm password</label>
            <Field name="password-confirm" component={Input} type="password" id="password-confirm-field"
              validate={[required, nonEmpty, password, matchesPassword]}/>
            <button type="submit" onSubmit={this.handleSubmit}>Create account</button>
          </form>
        </div>
      </main>
    );
  }
}

export default reduxForm({
  form: 'register'
})(RegisterForm);
