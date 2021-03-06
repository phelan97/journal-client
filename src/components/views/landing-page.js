
import React from 'react';
import RegisterForm from '../register-form';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';

function LandingPage(props) {
  if(props.loggedIn) {
    return <Redirect to="/journal" />
  }
  return (
    <main>
      <div className="landing-container">
        <div className="info-container">
          <h2>Convenient journaling on any device</h2>
          <p>Journaling offers a variety of personal benefits. Maybe you're already familiar
            with the advantages of regularly journaling. Maybe not. Either way, it's easier than ever to get started! 
          </p>
          <p>Cloud Journal works on any device, and makes it easy to post and manage journal entries. Accessing your journal
            is as simple as logging in!
          </p>
          <Link to='/login'>Already have an account? Sign in!</Link>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(LandingPage);


