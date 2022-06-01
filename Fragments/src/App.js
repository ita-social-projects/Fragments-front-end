import React from 'react';
import Header from './components/header/Header';
import Registration from './components/registration/RegistrationForm';
import SignUp from './components/registration/SignUpForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {gapi} from 'gapi-script';
import {useEffect} from 'react'
import ProfileEdit from './components/profileEdit/ProfileEdit';

const clientId = "366436901363-b93c7i7nj1rmvnle6m992dgecfsf4bcd.apps.googleusercontent.com"
function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2',start);
  });
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element = {<SignUp/>} exact/>
          <Route path="/Details" element = {<Registration/>} exact/>
          <Route path="/ProfileEdit" element = {<ProfileEdit/>} exact/>
      </Routes>
    </Router>
  );
}
export default App;