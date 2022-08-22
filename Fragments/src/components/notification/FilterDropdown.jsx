import React, { useState } from "react";
import styles from "../UI/notifications/filterDropdown.module.scss";

const FilterDropdown = ({
  previousDiv,
  setChoosenNotification,
  isNewest,
  setIsNewest,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (filter) => {
    if (isNewest !== filter) {
      previousDiv.className = "notificationItem";
      setChoosenNotification({});
      setIsOpen(false);
      setIsNewest(filter);
    }
  };

  return (
    <div>
      <div className={styles.iconButton} onClick={() => setIsOpen(!isOpen)}>
        <img src="/filter.svg" alt="filter logo" />
      </div>
      {isOpen && (
        <div className={styles.ddWrapper}>
          <p className={styles.ddTitle}>Сортувати</p>
          <ul className={styles.ddList}>
            <li onClick={() => handleFilterChange(true)}>
              {isNewest && (
                <i
                  style={{ marginLeft: -25, marginRight: 9 }}
                  className="arrow fa fa-check"
                ></i>
              )}
              Найновіші
            </li>
            <li onClick={() => handleFilterChange(false)}>
              {!isNewest && (
                <i
                  style={{ marginLeft: -25, marginRight: 9 }}
                  className="arrow fa fa-check"
                ></i>
              )}
              Найстаріші
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
