import React, { useState } from "react";
import "../UI/notifications/notificationPage.scss"
import NotificationList from "./NotificationList";
import FilterDropdown from "./FilterDropdown";

const NotificationPage = () => {
  const [choosenNotification,setChoosenNotification] = useState({
    id:0,isRead:false,title:"", paragraph:"",date:"",body:""});

  const [isAll, setIsAll] = useState(true);
  const [isNewest,setIsNewest] = useState(true);

  const getSelectedFilter = () =>{
    document.getElementsByName("sizeBy").forEach(radio =>{
      if(radio.checked && radio.value === "all"){
        setIsAll(true);
      }
      else{
        setIsAll(false);
      }
    })
  }
  
  return (
    <div className="wrapper">
        <div className="baner">
          <p className="banerText">Сповіщення</p>
        </div>
        <div className="sidebar">
          <div className="toggle" onChange={getSelectedFilter}>
            <input type="radio" name="sizeBy" value="all" id="sizeAll" defaultChecked/>
            <label htmlFor="sizeAll">Всі</label>
            <input type="radio" name="sizeBy" value="unread" id="sizeUnread" />
            <label htmlFor="sizeUnread">Непрочитані</label>
            <FilterDropdown isNewest={setIsNewest}/>
          </div>
          <div className="notificationsList">
            <NotificationList onChoose={setChoosenNotification}/>
          </div>
        </div>
        <div className="notificationDetails">
          <p className="notificationTitle">
            {choosenNotification.title}
          </p>
          <p className="notificationDate">
            {choosenNotification.date}
          </p>
          <p className="notificationBody">
            {choosenNotification.body}
          </p>
        </div>
    </div>
  );
};
export default NotificationPage;