import axios from "axios";
import React, { useState } from "react";
import "../UI/notifications/notificationList.scss"
import variables from "../important variables/variables.js"

const NotificationList = ({header,list,onChoose}) => {

  const[previousDiv,setPreviousDiv] = useState(document.getElementsByTagName("div"));

  const handleClickNotification = (id) => {
    const notification = list.find(x => x.notificationId === id);
    onChoose(notification);
    if(!notification.isRead){
      notification.isRead = true;
      axios.post(`${variables.API_URL}Notifications/readMessage`,notification,{headers:header});
    }
    const div = document.getElementById(id.toString());
    previousDiv.className = "notificationItem";
    div.className = "notificationItemActive";
    setPreviousDiv(div);
  }


  return (
    <div>
        {list.map((element,index) => (
          <div key = {index} className = "top-border">
            <div id = {element.notificationId.toString()} className = "notificationItem" onClick={() => handleClickNotification(element.notificationId)}>
              <p className="title">
                {element.isRead ? <></>:<span className="dot"></span>}
                {element.theme}
              </p>
              <p className="paragraph">
                {element.theme}
              </p>
              <p className="date">
                {new Date(element.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))} 

    </div>
  );
};
export default NotificationList;