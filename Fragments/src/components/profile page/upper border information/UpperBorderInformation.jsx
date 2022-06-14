import React from "react";
import styles from "./UpperBorderInformation.module.scss";

// let newArr = props.channelsOfRefferences.map((item, i) => {
//   return i++;
// });

const UpperBorderInformation = ({ ...props }) => {
  return (
    <div className={styles.upperBorderBorder}>
      <button className={styles.backButton}>
        <img src="/arrow back.svg" alt="arrow back" />
        <span className={styles.backButtonText}>Повернутись на головну</span>
      </button>

      <span className={styles.bigTextBox}>
        <p className={styles.bigText}>Контакти</p>
        <button className={styles.editButton}>
          <img
            className={styles.editButtonImage}
            src="/edit button med.svg"
            alt="edit button"
          />
        </button>
      </span>

      <span className={styles.gmailTextBox}>
        <span className={styles.simpleText}>Поштова адреса</span>
        <span className={styles.dataText}>{props.email}</span>
      </span>

      <span className={styles.detailsTextBox}>
        {props.channelsOfRefferences.map((item, i) => {
          const list = (
              <div className={styles.channelAndTextBox} key={i}>
                <div className={styles.channelBox} >
                  <span className={styles.simpleText}>Канал звязку</span>
                  <span className={styles.dataText}>{item.channelName}</span>
                </div>
                <div>
                  <span className={styles.simpleText}>
                    Деталі
                  </span>
                  <span className={styles.dataText}>{item.channelDetails}</span>
                </div>
              </div>
          );
          return list;
        })}
      </span>
    </div>
  );
};

export default UpperBorderInformation;
