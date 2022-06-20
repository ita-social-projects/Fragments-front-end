import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={[styles.header, "container-fluid"].join(" ")}>
      <div className="row">
        <div className="col-8">
          <span className={styles.fragmentsLogo}>
            <img src="/logo.svg" alt="fragments logo" />
            <span className={styles.fragmentsText}>ФРАГМЕНТИ</span>
          </span>
          <span className={styles.headerLabel}>Проекти</span>
          <span className={styles.headerLabel}>Спільнота</span>
        </div>
        <div className="col-4">
           <span className={styles.searchIcon}>
            <img src="/search.svg" alt="search" />
          </span>
            <span className={styles.regButtons}>
            <button className={styles.logBtn}>Log in</button>
            <button className={styles.signBtn}>Sign in</button>
          </span> 

        </div>
      </div>
    </div>
  );
};

export default Header;
