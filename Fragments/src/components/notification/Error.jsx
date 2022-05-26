import React, { useState } from 'react'
import styles from './notification.module.scss';

const Error = () => {
  const [hidden, setHidden] = useState(false);
  const applyErrorClass = () => hidden ? styles.hidden : '';
  return (
    <div className={styles.notification + ' col align-self-end ' + applyErrorClass()}>
            <div className={styles.error}>
                <img src="error.svg" alt="success" className={styles.successImg}/>
                <div className={styles.notificationInfo}>
                <div className={styles.notificationHeader}>Сталась помилка</div>
                <div className={styles.notificationText}>Не вдалося зберегти дані.</div>
                </div>
                <button className={styles.closeBtn} type='search' onClick={() => {
          setHidden(!hidden);}}>
                <img src="button.svg" alt="x" />
                </button>
            </div>
    </div>
  )
}

export default Error;