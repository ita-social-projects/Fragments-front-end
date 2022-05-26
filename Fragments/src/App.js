import React from 'react';
import Header from './components/header/Header';
import RegistrationForm from './components/registration/RegistrationForm';

function App() {
  return (
  <>
    <Header/>
    <div className='container-fluid'>
      <div className='row'>
        <div className='reg-form col align-self-center'>
        <RegistrationForm/>
        </div>

      </div>
    </div>
  </>   
  );
}
export default App;