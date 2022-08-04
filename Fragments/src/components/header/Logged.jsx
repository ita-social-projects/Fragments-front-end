import React, { useState } from "react";
import { hub } from "../../services/notificationService";

const Logged = ({ ...props }) => {
  const [notify, setNotify] = useState()
  hub.hubConnection.on("createNotify", (message) => {
    setNotify(message)
    console.log(message);
  },[]);
  
  return (
    <div className={props.className.userLogged}>
      <span className={props.className.projects}>Мої проекти</span>
      <span className={props.className.searchIcon}>
        {notify ? <img src="/bellnotification.svg" alt="bell" /> : <img src="/bell.svg" alt="noBell" />}
      </span>
      <div className={props.className.profile}>
        <img
          src="/logo192.png"
          alt="avatar"
          className={props.className.userAvatar}
        />
        <span className={props.className.userName}>{props.user.fullName}</span>
      </div>
    </div>
  );
};

export default Logged;
