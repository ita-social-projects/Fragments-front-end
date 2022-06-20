import React from "react";
import styles from "./DownBorder.module.scss";

const DownBorder = ({ ...props }) => {
  return (
    <div>
      <div className={styles.thisBox}>
        <span className={styles.bigTextBox}>
          <p className={styles.bigText}>Чим можу бути корисним?</p>
          <button className={styles.editButton}>
            <img
              className={styles.editButtonImage}
              src="/edit button med.svg"
              alt="edit button"
            />
          </button>
        </span>
        <span className={styles.text}>{props.benefits}</span>
      </div>
      <div>
        <div>
          <span className={styles.bigTextBox}>
            <p className={styles.bigText}>Мої інтереси</p>
            <button className={styles.editButton}>
              <img
                className={styles.editButtonImage}
                src="/edit button med.svg"
                alt="edit button"
              />
            </button>
          </span>
          <span className={styles.text}>{props.interests}</span>
        </div>
      </div>
    </div>
  );
};

export default DownBorder;
