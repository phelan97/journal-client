
import React from 'react';
import store from '../store';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
      <button onClick={() => {
        clearAuthToken();
        store.dispatch(clearAuth());
      }}>Log out</button>
    </header>
  );
}
