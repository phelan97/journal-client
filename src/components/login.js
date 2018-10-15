
import React from 'react';
import './login.css';

export default function Login() {
  return (
    <form>
      <label for="username">Username</label>
      <input class="username-field" name="username" type="text" />
      <label for="password">Password</label>
      <input class="password-field" name="password" type="text" />
      <button type="submit">Log In</button>
      <button class="register-button">Register</button>
    </form>
  );
}
