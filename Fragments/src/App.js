import React from 'react';
import Header from './components/header/Header';
import RegistrationForm from './components/registration/RegistrationForm'
import SignUp from './components/SignUp/SignUpForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element = {<SignUp/>} exact/>
          <Route path="/Details" element = {<RegistrationForm/>} exact/>
      </Routes>
    </Router>
  </>
  );
}
export default App;