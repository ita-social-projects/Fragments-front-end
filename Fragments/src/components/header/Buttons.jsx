import React from "react";
import { loginUser } from "../../services/userService";

const request = {
  email : 'petro@gmail.com'
}

const Buttons = ({ ...props }) => {
  const fetchSignIn = (e) =>{
    loginUser(request);
    
}
  return (
    <>
      <span className={props.className.searchIcon}>
        <img src="/search.svg" alt="search" />
      </span>
      <span className={props.className.regButtons}>
        <button className={props.className.logBtn} onClick = {fetchSignIn}>Sign in</button>
        <button className={props.className.signBtn}>Sign up</button>
      </span>
    </>
  );
};
export default Buttons;
