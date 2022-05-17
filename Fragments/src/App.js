import React from 'react';
import Header from './components/header/Header';
import LoginForm from './components/registration/LoginForm';
import RegistrationForm from './components/registration/RegistrationForm';

function App() {
  return (
    <>
    <Header/>
    <RegistrationForm/>
    <LoginForm/>
    </>   
  );
}
export default App;