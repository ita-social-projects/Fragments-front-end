import React from 'react';
import { Button } from '@mui/material';
import Header from './components/header/Header';
import stylescenter from './components/UI/centerbody/center.body.module.css';
import Welcome from './components/UI/welcome/Welcome';
import Checkbox from './components/UI/checkbox/Checkbox';
import Benefits from './components/UI/benefits&interests/benefits/Benefits';
import Interests from './components/UI/benefits&interests/interests/Interests';
import Channeldetails from './components/UI/channeldetails/Channeldetails';
import RegistrationForm from './components/registration/RegistrationForm'

function App() {
  const handleSubmit =(e) =>
  {
    e.preventDefault();
  }
  return (
    <><Header/>
      <div className={stylescenter.center_body}>
        <Welcome/>
          <div className= {stylescenter.border_center}>
            <RegistrationForm/>
            <Channeldetails/>
            <Checkbox/>
            <div className={stylescenter.benefits_and_interest}>
              <Benefits/>
              <Interests/>
            </div>
            <div className={stylescenter.button_submit}>
              <button className={stylescenter.backBtn} type="reset" value="back">Назад</button> 
              <Button variant ="contained" type = "submit" onClick ={handleSubmit}> Зберегти</Button>
            </div>
          </div>
      </div></>
  );
}
export default App;




