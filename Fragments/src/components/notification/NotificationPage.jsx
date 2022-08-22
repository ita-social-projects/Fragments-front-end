import React, { useEffect, useState } from "react";
import styles from "../UI/notifications/notificationPage.module.scss";
import NotificationList from "./NotificationList";
import FilterDropdown from "./FilterDropdown";
import getNotifications from "../requests/NotificationRequests.js";
import variables from "../important variables/variables";

const NotificationPage = () => {
  const [notificationsList, setNotificationsList] = useState([]);

  const [previousDiv, setPreviousDiv] = useState(
    document.getElementsByTagName("div")
  );

  const [choosenNotification, setChoosenNotification] = useState({});

  const [isAll, setIsAll] = useState(true);

  const [isNewest, setIsNewest] = useState(true);

  const getSelectedFilter = () => {
    previousDiv.className = "notificationItem";
    setChoosenNotification({});
    document.getElementsByName("sizeBy").forEach((radio) => {
      if (radio.checked && radio.value === "all") {
        setIsAll(true);
      } else if (radio.checked && radio.value === "unread") {
        setIsAll(false);
      }
    });
  };

  useEffect(() => {
    const options = {
      headers: variables.header,
      params: {
        sortingBy: isNewest,
        pageIndex: 1,
        typeOfRead: isAll,
      },
    };
    getNotifications()
      .read(options)
      .then((response) => setNotificationsList(response.data));
  }, [isNewest, isAll]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.baner}>
        <p className={styles.banerText}>Сповіщення</p>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.toggle} onChange={getSelectedFilter}>
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
          <FilterDropdown
            previousDiv={previousDiv}
            setChoosenNotification={setChoosenNotification}
            isNewest={isNewest}
            setIsNewest={setIsNewest}
          />
        </div>
        <div className={styles.notificationsList}>
          <NotificationList
            previousDiv={previousDiv}
            setPreviousDiv={setPreviousDiv}
            header={variables.header}
            list={notificationsList}
            onChoose={setChoosenNotification}
          />
        </div>
      </div>
      {Object.keys(choosenNotification).length !== 0 && (
        <div className={styles.notificationDetails}>
          <p className={styles.notificationTitle}>
            {choosenNotification.theme}
          </p>
          <p className={styles.notificationDate}>
            {new Date(choosenNotification.date).toLocaleDateString()}
          </p>
          <p className={styles.notificationBody}>{choosenNotification.body}</p>
        </div>
      )}
    </div>
  );
};
export default NotificationPage;
