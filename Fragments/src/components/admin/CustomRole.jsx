import React from "react";
import styles from "../UI/adminPage/CustomeRoles.module.scss";

export const CustomRole = ({ roles }) => {
  return (
    <>
      {roles.map((role, index) => (
        <div key={index} className={styles.roleItem}>
          <div
            className={
              role === "Адмін"
                ? styles.adminRole
                : role === "Модератор"
                ? styles.moderatorRole
                : styles.userRole
            }
          >
            <label className="role-label">{role}</label>
          </div>
        </div>
      ))}
    </>
  );
};
