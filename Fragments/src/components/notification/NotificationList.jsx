import React, { useState } from "react";
import "../UI/notifications/notificationList.scss"

const NotificationList = ({onChoose}) => {
  const seed = [
    {id:1,isRead:false,title:'Вітаємо у Спільноті Fragmenty!', paragraph:'Ви можете підтримати платформу, створ...',date:new Date().toLocaleDateString(),body:"Ой нема, нема ні вітру, ні хвилі Із нашої України! Чи там раду радять, як на турка стати, Не чуємо на чужині. Чи там раду радять, як на турка стати, Не чуємо на чужині."},
    {id:2,isRead:true,title:'dngnng', paragraph:'dfnggngnn',date:new Date().toLocaleDateString(),body:"Ой нема, нема ні вітру, ні хвилі Із нашої України! як на турка стати, Не чуємо на чужині."},
    {id:3,isRead:false,title:'ALOOO NAROD !', paragraph:'Ви можете підтримати платформу, створ...',date:new Date().toLocaleDateString(),body:" Не чуємо на чужині. Чи там раду радять, як на турка стати, Не чуємо на чужині."},
    {id:4,isRead:false,title:'HAHAHAHHA!', paragraph:'Ви можете підтримати платформу, створ...',date:new Date().toLocaleDateString(),body:"Ой нема, нема ні вітру, ні хвилі Із нашої України! Чи там раду радять, як на турка стати, Не чуємо на чужині. Чи там раду радять, як на турка стати, Не чуємо на чужині."},
    {id:5,isRead:false,title:'sdvdsvsdvsd!', paragraph:'Ви можете підтримати платформу, створ...',date:new Date().toLocaleDateString(),body:"Ой нема, нема ні вітру, ні хвилі Із нашої України! Чи там раду радять, як на турка стати, Не чуємо на чужині. Чи там раду радять, як на турка стати, Не чуємо на чужині."},
    {id:6,isRead:false,title:'Вітаємо у Спільноті Fragmenty!', paragraph:'Ви можете підтримати платформу, створ...',date:new Date().toLocaleDateString(),body:"Ой нема, нема ні вітру, ні хвилі Із нашої України! Чи там раду радять, як на турка стати, Не чуємо на чужині. Чи там раду радять, як на турка стати, Не чуємо на чужині."},
    {id:7,isRead:true,title:'dngnng', paragraph:'dfnggngnn',date:new Date().toLocaleDateString(),body:"Ой нема, нема ні вітру, ні хвилі Із нашої України! як на турка стати, Не чуємо на чужині."},
    {id:8,isRead:false,title:'ALOOO NAROD !', paragraph:'Ви можете підтримати платформу, створ...',date:new Date().toLocaleDateString(),body:" Не чуємо на чужині. Чи там раду радять, як на турка стати, Не чуємо на чужині."},
    {id:9,isRead:false,title:'Вітаємо у Спільноті Fragmenty!', paragraph:'Ви можете підтримати платформу, створ...',date:new Date().toLocaleDateString(),body:"Ой нема, нема ні вітру, ні хвилі Із нашої України! Чи там раду радять, як на турка стати, Не чуємо на чужині. Чи там раду радять, як на турка стати, Не чуємо на чужині."},
    {id:10,isRead:true,title:'dngnng', paragraph:'dfnggngnn',date:new Date().toLocaleDateString(),body:"Ой нема, нема ні вітру, ні хвилі Із нашої України! як на турка стати, Не чуємо на чужині."},
    {id:11,isRead:false,title:'ALOOO NAROD !', paragraph:'Ви можете підтримати платформу, створ...',date:new Date().toLocaleDateString(),body:" Не чуємо на чужині. Чи там раду радять, як на турка стати, Не чуємо на чужині."},
    {id:12,isRead:false,title:'HAHAHAHHA!', paragraph:'Ви можете підтримати платформу, створ...',date:new Date().toLocaleDateString(),body:"Ой нема, нема ні вітру, ні хвилі Із нашої України! Чи там раду радять, як на турка стати, Не чуємо на чужині. Чи там раду радять, як на турка стати, Не чуємо на чужині."}
  ];

  const [notifications,setNotifications] = useState(seed);
  const[previousDiv,setPreviousDiv] = useState(document.getElementsByTagName("div"));

  const handleClickNotification = (id) => {
    const notification = notifications.find(x => x.id === id);
    onChoose(notification);
    notification.isRead = true;
    const div = document.getElementById(id.toString());
    previousDiv.className = "notificationItem";
    div.className = "notificationItemActive";
    setPreviousDiv(div);
  }
  

  return (
    <div>
        {notifications.map((element,index) => (
          <div key = {index} className = "top-border">
            <div id = {element.id.toString()} className = "notificationItem" onClick={() => handleClickNotification(element.id)}>
              <p className="title">
                {element.isRead ? <></>:<span className="dot"></span>}
                {element.title}
              </p>
              <p className="paragraph">
                {element.paragraph}
              </p>
              <p className="date">
                {element.date}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default NotificationList;