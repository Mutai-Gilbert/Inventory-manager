import React from 'react';
import Signin from './components/SignIn/RegistrationForm';
import LoginForm from './components/Login/LoginForm';
import UserProfile from './components/UserProfile/UserProfile'
import './App.css';

function App() {
  return (
    <div className="App">
      < Signin />
      < LoginForm />
      < UserProfile />
      <hr />
    </div>
  );
}

export default App;
