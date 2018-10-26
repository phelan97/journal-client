
import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../actions/auth';
import './login-form.css';

class LoginForm extends React.Component {
  render() {
    if(this.props.loggedIn) {
      return <Redirect to="/journal" />
    }

    return (
        <div className="login-container">
          <form className="login-form" onSubmit={this.props.handleSubmit(values =>
          this.props.dispatch(login(values.email, values.password))
          )}>
            <legend>Log in</legend>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="text" id="email-field" />
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" id="password-field" />
            <button type="submit" onSubmit={this.handleSubmit}>Log In</button>
            <Link to='/register'>Don't have an account? Register here!</Link>
          </form>
        </div>
    );
  }
}

const loginForm = reduxForm({
  form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null
});
export default withRouter(connect(mapStateToProps)(loginForm));
