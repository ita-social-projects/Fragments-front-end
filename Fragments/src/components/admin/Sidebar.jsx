import React from "react";
import styles from "../UI/adminPage/AdminSidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.adminSidebar}>
      <div tabIndex={1} className={styles.sidebarItem}>
        <img className={styles.sidebarIcon} src="Home.svg" alt="Home" />
        <label className={styles.sidebarLabel}>Головна</label>
      </div>
      <div tabIndex={2} className={styles.sidebarItem}>
        <img className={styles.sidebarIcon} src="User.svg" alt="User" />
        <label className={styles.sidebarLabel}>Користувачі</label>
      </div>
    </div>
  );
};
export default Sidebar;
