import React from 'react'
import FacebookLogin from 'react-facebook-login'
import {useNavigate} from 'react-router-dom'
import '../scss/signup.scss'


const LoginForm = () => {
    const navigate = useNavigate();

    const state = {
        isLoggedIn:false,
        userId:"",
        firstname:"",
        lastname:"",
        email:"",
        picture:""
    }
    const responseFacebook = (response) =>{
        const fullname = response.name.split(' ');
        state.isLoggedIn = true;
        state.userId = response.id;
        state.firstname = fullname[0];
        state.lastname = fullname[1];
        state.email = response.email;
        state.picture = response.picture.data.url;
        navigate('/Details',{state:state})
    }
  return (
    <div className="container registration-container">
      <div className="row">
          <div className="moduleborderwrap">
              <form className="registration-form">
                  <legend>Зареєструватись</legend>
                  <div className='hints'>Створіть обліковий запис</div>
                  <div className="control-group">
                      <label className="control-label"></label>
                      <div className="controls">
                        <FacebookLogin cssClass='logbutton btn btn-outline-dark'                
                            appId='414490970111119'
                            autoLoad={true}
                            cookie={true}
                            xfbml={true}
                            fields="name,email,picture"
                            textButton='Продовжити через Facebook'
                            callback={responseFacebook}
                        />
                      </div>
                      <label className="control-label"></label>
                      <div className="controls">
                          <button className='logbutton btn btn-outline-dark'>Продовжити через Google</button>
                      </div>
                      <label className="control-label"></label>
                      <div className="controls">
                          <button className='logbutton btn btn-outline-dark'>Продовжити через Instagram</button>
                      </div>
                  </div>

                  <hr className='line'/>
                  <div className='hints'>Вже маєте обліковий запис? <a href='http://localhost:3000/'>Увійти до системи</a></div>
                  <div className='hints'>Продовжуючи, ти приймаєш <a href='http://localhost:3000/'>”Умови Спільноти”</a></div>
              </form>
          </div>
      </div>
  </div>
  )
  }

export default LoginForm;