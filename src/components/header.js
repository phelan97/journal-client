
import React from 'react';
import JournalMenu from '../components/journal-menu';
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
        <h1>Your Journal</h1>
        {/* <JournalMenu outerContainerId={"Header"}/> */}
        {this.props.loggedIn ? logout : ''}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Header);