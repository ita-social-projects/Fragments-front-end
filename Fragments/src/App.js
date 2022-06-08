import React from 'react';
import Header from './components/header/Header';
import Profile from './components/profile page/profile/Profile';
import RegistrationForm from './components/registration/RegistrationForm'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
        
    <Router>
      <Header/>
        <Routes>     
          <Route path = "/Registration" element = {<RegistrationForm/>} />
          <Route path = "/Profile" element = {<Profile/>}/>
        </Routes>

    </Router>

    {/* <RegistrationForm/> */}

  </>
  );
}
export default App;