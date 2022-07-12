import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Profile from "./components/profile page/profile/Profile";
import RegistrationForm from "./components/registration/RegistrationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {getUser} from './services/userService';
import SignUp from './components/SignUp/SignUpForm'

function App() {
  const [user, setUser] = useState();

  useEffect(()=>{
    const token = window.localStorage.getItem('token');
    if(!user)
      getUser(token, setUser)
  },[user]);
  
  return (
    <Router>
      <Header user = {user}/>
      <Routes>
        <Route path="/Sign-up" element = {<SignUp/>} exact/>
        <Route path="/Registration" element={<RegistrationForm />} />
        <Route path="/api/Users" element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default App;
