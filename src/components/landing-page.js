
import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import './landing-page.css';

function LandingPage(props) {
  if(props.loggedIn) { 
    console.log(props.loggedIn);
    return <Redirect to="/journal" />
  }

  return (
    <main>
      <div className="landing-container">
        <LoginForm />
        <Link to='/register'>Register</Link>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null
});
export default withRouter(connect(mapStateToProps)(LandingPage));
