import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
