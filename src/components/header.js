
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import store from '../store';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './header.css';

 class Header extends React.Component {
   render() {
    const logout = (
      <button onClick={() => {
        clearAuthToken();
        store.dispatch(clearAuth());
      }}>Log out</button>
    );
    return (
      <header>
        <Link to="/login">
          <h1>{this.props.loggedIn ? 'Your Journal' : 'Cloud Journal'}</h1>
        </Link>
        {this.props.loggedIn ? logout : ''}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Header);