import React from "react";
import { useNavigate } from "react-router-dom";

const state = {
  action: 'login'
}

const Buttons = ({ ...props }) => {
  const navigate = useNavigate();
  const fetchSignIn = () => navigate('/Sign-up', {state:state});


  return (
    <>
      <span className={props.className.searchIcon} >
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
