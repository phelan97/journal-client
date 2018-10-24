
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {register} from '../actions/auth';
import './register-form.css';

class RegisterForm extends React.Component {
  render() {
    return (
      <main>
        <div className="register-container">
          <form onSubmit={this.props.handleSubmit(values =>
            this.props.dispatch(register(values.email, values.password,
              values.firstName, values.lastName))
            )}>
            <legend>Register</legend>
            <label htmlFor="first-name">First name</label>
            <Field name="first-name" component="input" type="text" id="first-name-field" />
            <label htmlFor="last-name">Last name</label>
            <Field name="last-name" component="input" type="text" id="last-name-field" />
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="text" id="email-field" />
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" id="password-field" />
            <label htmlFor="password-confirm">Confirm password</label>
            <Field name="password-confirm" component="input" type="password-confirm" id="password-confirm-field" />
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
