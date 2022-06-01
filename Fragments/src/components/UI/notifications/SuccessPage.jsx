import React from "react";
import styles from "./SuccessPage.module.scss";

const SuccessPage = () => {
  return (
    <div className="container">
      <div className={"col-md-6 offset-md-3 " + styles.container}>
        <div className={styles.icon}>
          <img src="ok.svg" alt="ok" />
        </div>
        <div className={styles.headerText}>Дані збережено!</div>
        <div className={styles.infoText}>Ваші особисті дані було збережено</div>
      </div>
    </div>
  );
};
export default SuccessPage;
