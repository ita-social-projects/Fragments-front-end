import React from "react";
import FacebookLogin from "react-facebook-login";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../UI/signup.module.scss";
import { GoogleLogin } from "react-google-login";
import { loginUser } from "../../services/userService";
import variables from "../important variables/variables";

const LoginForm = () => {
  const navigate = useNavigate();
  const action = useLocation().state;
  const state = {
    isLoggedIn: false,
    userId: "",
    fullname: "",
    email: "",
    picture: "",
  };
  const responseFacebook = (response) => {
    state.isLoggedIn = true;
    state.userId = response.id;
    state.fullname = response.name;
    state.email = response.email;
    state.picture = response.picture.data.url;
    if (action) {
      loginUser({ email: state.email });
      navigate("/", { state: null });
    } else navigate("/Registration", { state: state });
  };
  const responseSuccessGoogle = (response) => {
    console.log("Login is success", response.profileObj);
    state.userId = response.profileObj.googleId;
    state.isLoggedIn = true;
    state.email = response.profileObj.email;
    state.fullname =
      response.profileObj.givenName + response.profileObj.familyName;
    state.picture = response.profileObj.imageUrl;
    if (action) {
      loginUser({ email: state.email });
      navigate("/", { state: null });
    } else navigate("/Registration", { state: state });
  };
  const responseFailureGoogle = (response) => {
    console.log("Login is failed");
  };
  return (
    <div className={styles.container + " registration-container"}>
      <div className={styles.row}>
        <div className={styles.moduleborderwrap}>
          <form className={styles.registrationForm}>
            <legend>Зареєструватись</legend>
            <div className={styles.hints}>Створіть обліковий запис</div>
            <div className={styles.controlGroup}>
              <div className={styles.controls}>
                <GoogleLogin
                  clientId={variables.clientId}
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      className={styles.logbutton}
                    >
                      {" "}
                      <img
                        className={styles.svg1}
                        src="GoogleLogo.svg"
                        alt="Google"
                      />{" "}
                      Продовжити через Google
                    </button>
                  )}
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseFailureGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <div className={styles.controls}>
                  <FacebookLogin
                    cssClass={styles.logbutton}
                    icon={
                      <img
                        className={styles.svg1}
                        src="Facebook.svg"
                        alt="filter applied"
                      />
                    }
                    appId={variables.FacebookAppId}
                    autoLoad={true}
                    cookie={true}
                    callback={responseFacebook}
                    textButton="Продовжити через Facebook"
                    fields="name,email,picture"
                  />
                </div>
              </div>
              <div className={styles.controls}>
                <button className={styles.logbutton}>
                  <img
                    className={styles.svg1}
                    src="Instagram.svg"
                    alt="Facebook"
                  />{" "}
                  Продовжити через Instagram
                </button>
              </div>
            </div>

            <hr className={styles.line} />
            <div className={styles.hints}>
              Вже маєте обліковий запис?{" "}
              <a href="http://localhost:3000/">Увійти до системи</a>
            </div>
            <div className={styles.hints}>
              Продовжуючи, ти приймаєш{" "}
              <a href="http://localhost:3000/">”Умови Спільноти”</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

