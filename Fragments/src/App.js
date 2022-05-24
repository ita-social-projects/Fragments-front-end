import React from 'react';
import Header from './components/header/Header';
import Registration from './components/registration/RegistrationForm';
import SignUp from './components/registration/SignUpForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element = {<SignUp/>} exact/>
          <Route path="/Details" element = {<Registration/>} exact/>
      </Routes>
    </Router>
  );
}
export default App;