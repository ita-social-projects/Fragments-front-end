import React from "react";
import Header from "./components/header/Header";
import Profile from "./components/profile page/profile/Profile";
import RegistrationForm from "./components/registration/RegistrationForm";
import SignUp from './components/registration/SignUpForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {gapi} from 'gapi-script';
import {useEffect} from 'react'


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
      <Header />
      <Routes>
      <Route path="/" element = {<SignUp/>} exact/>
        <Route path="/Registration" element={<RegistrationForm />} />
        <Route path="/api/Users" element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default App;
