import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Profile from "./components/profile page/profile/Profile";
import RegistrationForm from "./components/registration/RegistrationForm";
import SignUpForm from "./components/SignUp/SignUpForm";
import AdminPage from "./components/admin/AdminPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotificationPage from './components/notification/NotificationPage';
import {getUser} from './services/userService';
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
        <Route path="/Sign-up" element = {<SignUpForm/>}/>
        <Route path="/Registration" element={<RegistrationForm />} />
        <Route path="/Notifications" element = {<NotificationPage/>}/>
        <Route path="/api/Users" element={<Profile />} />
        <Route path="/Admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
export default App;
