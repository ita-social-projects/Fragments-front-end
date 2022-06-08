import React,{useState} from "react";
import styles from "./LeftSide.module.scss";

const LeftSide = () => {
  const [name, setName] = useState("Михайло Соколенко");
  const [date, setDate] = useState("28 травня 1985р");
  const [representativeHEI, setRepresentativeHEI] = useState("Представник ЗВО");
  const [representativeAuthority, setRepresentativeAuthority] = useState("Представник влади");
  
  return (
    <div>
      <span className={styles.photoPos}>
        <img
          className={styles.photos}
          src="/logo192.png"
          alt="profile photos"
        />
      </span>
      <span className={styles.firstLastName} >{name}</span>
      <span className={styles.dateOfBirth}>{date}</span>
      <span className={styles.representativeHEI}>{representativeHEI}</span>
      <span className={styles.editLeftSide}>
        <button className={styles.editButton}>
          <p className={styles.editText}>Редагувати</p>
          <img
            className={styles.editButtonImage}
            src="edit button.svg"
            alt="edit button"
          />
        </button>
      </span>
      <span className={styles.applyButton}>
        <button className={styles.application} type="button">
          Подати заявку
        </button>
      </span>
      <span className={styles.settingsAndExit}>
        <a className={styles.settingsExit} href="">
          Налаштування
        </a>
        <a className={styles.settingsExit} href="">
          Вихід
        </a>
      </span>
    </div>
  );
};

export default LeftSide;
