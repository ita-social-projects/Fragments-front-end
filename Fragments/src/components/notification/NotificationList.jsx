import React from "react";
import styles from "../UI/notifications/notificationList.module.scss";
import NotificationRequests from "../requests/NotificationRequests";

const NotificationList = ({
  previousDiv,
  setPreviousDiv,
  header,
  list,
  onChoose,
}) => {
  const handleClickNotification = (id) => {
    const notification = list.find((x) => x.notificationId === id);
    onChoose(notification);
    if (!notification.isRead) {
      notification.isRead = true;
      NotificationRequests().post(notification, header);
    }
    const div = document.getElementById(id.toString());
    previousDiv.className = styles.notificationItem;
    div.className = styles.notificationItemActive;
    setPreviousDiv(div);
  };

  return (
    <div>
      {list.length !== 0 &&
        list.map((element, index) => (
          <div key={index} className={styles.topBorder}>
            <div
              id={element.notificationId.toString()}
              className={styles.notificationItem}
              onClick={() => handleClickNotification(element.notificationId)}
            >
              <p className={styles.title}>
                {!element.isRead && <span className={styles.dot}></span>}
                {element.theme}
              </p>
              <p className={styles.paragraph}>{element.theme}</p>
              <p className={styles.date}>
                {new Date(element.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default NotificationList;
