import React from "react";
import { useNavigate } from "react-router-dom";

const Logged = ({ ...props }) => {
  const navigate = useNavigate();
  const fetchNotificationPage = () => navigate('/Notifications');
  return (
    <div className={props.className.userLogged}>
      <span className={props.className.projects}>Мої проекти</span>
      <span className={props.className.searchIcon}>
        <img src="/bellnotification.svg" alt="notif" onClick={fetchNotificationPage}/>
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
