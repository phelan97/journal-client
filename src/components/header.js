
import React from 'react';
import JournalMenu from '../components/journal-menu';
import store from '../store';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export default function Header() {
  return (
    <header>
      <h1>Your Journal</h1>
      <JournalMenu outerContainerId={"Header"}/>
      <button onClick={() => {
        clearAuthToken();
        store.dispatch(clearAuth());
      }}>Log out</button>
    </header>
  );
}