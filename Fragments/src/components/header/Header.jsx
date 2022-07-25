import React from "react";
import Buttons from "./Buttons";
import styles from "./Header.module.scss";
import Logged from "./Logged";

const Header = ({...props}) => {
  return (
    <div className={styles.header + " container-fluid"}>
      <div className="row">
        <div className={styles.nav + " col-6"}>
          <span className={styles.fragmentsLogo}>
            <img src="/logo.svg" alt="logo" />
            <span className={styles.fragmentsText}>ФРАГМЕНТИ</span>
          </span>
          <span className={styles.headerLabel}>Проекти</span>
          <span className={styles.headerLabel}>Спільнота</span>
        </div>
        <div className={styles.leftNav + " col-6"}>
          {props.user ? (
            <Logged className={styles} user={props.user} />
          ) : (
            <Buttons className={styles} setUser={props.setUser}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
