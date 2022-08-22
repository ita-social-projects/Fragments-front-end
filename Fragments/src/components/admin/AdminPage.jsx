import React from "react";
import Sidebar from "./Sidebar";
import styles from "../UI/adminPage/AdminPage.module.scss";
import AdminTable from "./AdminTable";
const AdminPage = () => {
  return (
    <div className={styles.adminWrapper}>
      <Sidebar />
      <div className={styles.pageBody}>
        <div className={styles.adminTitle}>Користувачі</div>
        <div className={styles.properties}>
          <div className={styles.inputWithSearch}>
            <img
              className={styles.searchButton}
              src="/search.svg"
              alt="seatch logo"
            />
            <input className={styles.filterInput} />
            <img className={styles.close} src="/close.svg" alt="close logo" />
          </div>
          <img
            className={styles.filterIcon}
            src="/filter.svg"
            alt="filter logo"
          />
          <button className={styles.setButton}>Призначити роль</button>
        </div>
        <div className={styles.adminTable}>
          <AdminTable />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
