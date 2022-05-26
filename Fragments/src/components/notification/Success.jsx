import React, { useState } from 'react'
import styles from './notification.module.scss';

const Success = () => {
  const [hidden, setHidden] = useState(false);
  const applyErrorClass = () => hidden ? styles.hidden : '';
  return(
    <div className={styles.notification + ' col align-self-end ' + applyErrorClass()}>
            <div className={styles.success}>
                <img src="success.svg" alt="success" className={styles.successImg}/>
                <div className={styles.notificationInfo}>
                <div className={styles.notificationHeader}>Positive notification</div>
                <div className={styles.notificationText}>Дані збережено</div>
                </div>
                <button className={styles.closeBtn} type='search' onClick={() => {
          setHidden(!hidden);
        }}>
                <img src="button.svg" alt="x" />
                </button>
            </div>
    </div>
  )
}

export default Success;