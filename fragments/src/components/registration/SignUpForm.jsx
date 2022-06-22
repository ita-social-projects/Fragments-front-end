import React ,{useEffect}from 'react'
import FacebookLogin from 'react-facebook-login'
import {useNavigate} from 'react-router-dom'
import '../scss/signup.scss'
import {GoogleLogin} from 'react-google-login'
import {gapi} from 'gapi-script';
const clientId = "366436901363-b93c7i7nj1rmvnle6m992dgecfsf4bcd.apps.googleusercontent.com"
const FacebookAppId = '414490970111119';

const LoginForm = () => {
    useEffect(()=>{
        function start(){
          gapi.client.init({
            clientId: clientId,
            scope: ""
          })
        };
        gapi.load('client:auth2',start);
      });
    const navigate = useNavigate();

    const state = {
        isLoggedIn:false,
        userId:"",
        fullname:"",
        email:"",
        picture:""
    }
    const responseFacebook = (response) =>{
        state.isLoggedIn = true;
        state.userId = response.id;
        state.fullname = response.name;
        state.email = response.email;
        state.picture = response.picture.data.url;
        navigate('/Registration',{state:state})
    }
    const responseSuccessGoogle = (response) =>{
        state.isLoggedIn = true;
        state.userId = response.profileObj.googleId;
        state.fullname = response.profileObj.name;
        state.email = response.profileObj.email;
        state.picture = response.profileObj.imageUrl;
        navigate('/Registration',{state:state})
    }
    const responseFailureGoogle = (response) =>{
        console.log("Login is failed");
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
                      <GoogleLogin          
                            clientId={clientId}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className ='logbutton'> <img className = "svg1" src = "GoogleLogo.svg" alt="Google" /> Продовжити через Google</button>
                              )}
                            onSuccess={responseSuccessGoogle}
                            onFailure = {responseFailureGoogle}
                            cookiePolicy = {'single_host_origin'}
                        /> 
                      <label className="control-label"></label>
                      <div className="controls">
                        <FacebookLogin cssClass='logbutton' 
                            icon={<img className = "svg1" src = "Facebook.svg" alt="filter applied"/>}   
                            appId={FacebookAppId}
                            autoLoad={true}
                            cookie={true}
                            xfbml={true}
                            callback={responseFacebook}
                            textButton="Продовжити через Facebook"
                            fields="name,email,picture"
                            />
                      </div>
                      </div>
                      <label className="control-label"></label>
                      <div className="controls">
                          <button className='logbutton'><img className = "svg1"  src = "Instagram.svg" alt="Facebook"/> Продовжити через Instagram</button>
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