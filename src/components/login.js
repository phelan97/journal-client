
import React from 'react';
import './login.css';

export default function Login() {
  return (
    <form>
      <input class="username-field" type="text" />
      <input class="password-field" type="text" />
      <button type="submit">Log In</button>
      <button class="register-button">Register</button>
    </form>
  );
}
