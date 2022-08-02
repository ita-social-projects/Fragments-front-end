import React, { useState, useEffect } from "react";
import "../UI/notifications/notificationPage.scss";
import NotificationList from "./NotificationList";
import FilterDropdown from "./FilterDropdown";
import axios from "axios";
import variables from "../important variables/variables.js";

const NotificationPage = () => {
  const [notificationsList, setNotificationsList] = useState([
    {
      notificationId: 0,
      isRead: false,
      theme: "",
      date: "",
      body: "",
    },
  ]);

  const [choosenNotification, setChoosenNotification] = useState({
    notificationId: 0,
    isRead: false,
    theme: "",
    date: "",
    body: "",
  });

  const [isAll, setIsAll] = useState(true);

  const [isNewest, setIsNewest] = useState(true);

  const getSelectedFilter = () => {
    setChoosenNotification({
      notificationId: 0,
      isRead: false,
      theme: "",
      date: "",
      body: "",
    });
    document.getElementsByName("sizeBy").forEach((radio) => {
      if (radio.checked && radio.value === "all") {
        setIsAll(true);
        console.log(true);
      } else if (radio.checked && radio.value === "unread") {
        setIsAll(false);
        console.log(false);
      }
    });
  };
  const options = {
    headers: { Authorization: `bearer ${localStorage.getItem("token")}` },
    params: {
      sortingBy: isNewest,
      pageIndex: 1,
      typeOfRead: isAll,
    },
  };

  useEffect(() => {
    axios
      .get(`${variables.API_URL}Notifications/getNotifications`, options)
      .then((response) => setNotificationsList(response.data));
  });

  return (
    <div className="wrapper">
      <div className="baner">
        <p className="banerText">Сповіщення</p>
      </div>
      <div className="sidebar">
        <div className="toggle" onChange={getSelectedFilter}>
          <input
            type="radio"
            name="sizeBy"
            value="all"
            id="sizeAll"
            defaultChecked
          />
          <label htmlFor="sizeAll">Всі</label>
          <input type="radio" name="sizeBy" value="unread" id="sizeUnread" />
          <label htmlFor="sizeUnread">Непрочитані</label>
          <FilterDropdown isNewest={setIsNewest} />
        </div>
        <div className="notificationsList">
          <NotificationList
            header={options.headers}
            list={notificationsList}
            onChoose={setChoosenNotification}
          />
        </div>
      </div>
      <div className="notificationDetails">
        <p className="notificationTitle">{choosenNotification.theme}</p>
        <p className="notificationDate">{choosenNotification.date}</p>
        <p className="notificationBody">{choosenNotification.body}</p>
      </div>
    </div>
  );
};
export default NotificationPage;
