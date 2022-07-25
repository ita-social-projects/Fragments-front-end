import React from "react";

const Logged = ({ ...props }) => {
  return (
    <div className={props.className.userLogged}>
      <span className={props.className.projects}>Мої проекти</span>
      <span className={props.className.searchIcon}>
        <img src="/bellnotification.svg" alt="notif" />
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
