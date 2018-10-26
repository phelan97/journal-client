
import React from 'react';
import RegisterForm from './register-form';
import {Link} from 'react-router-dom';
import './landing-page.css';

console.log(RegisterForm);

export default function LandingPage(props) {
  return (
    <main>
      <div className="landing-container">
        <div className="info-container">
          <h2>Fast, convenient journaling</h2>
          <Link to='/login'>Already have an account? Sign in!</Link>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}


