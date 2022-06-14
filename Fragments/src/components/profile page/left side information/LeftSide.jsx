
import React,{useState, useEffect} from "react";
import styles from "./LeftSide.module.scss";

const LeftSide = ({ ...props }) => {
   const [showHEI, setHEI] = useState(true)
   const [showAuthority, setAuthority] = useState(false)
 
  const name = props.fullName;
  const date = props.birthday;
  const HEI = props.representativeHEI;
  const Authority = props.representativeAuthority;
  const onLoadingHEI = () => setHEI(HEI);
  const onLoadingAuthority = () => setAuthority(Authority);

  const convertTime = (time) =>{
    return new Date(time).toLocaleDateString('uk-UA',{
      year: 'numeric',
      month:'long',
      day:'numeric',
    })
  }


  useEffect(() => {
    onLoadingHEI();
    onLoadingAuthority();
  });
  
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

      <time className={styles.dateOfBirth}>{convertTime(date)}</time>
      <span className={styles.representative}>
        <div>  {showHEI ? "Представник ЗВО" : null} </div>
        <div>  {showAuthority ? "Представник влади" : null} </div>
      </span>
      <span className={styles.editLeftSide}>
        <button className={styles.editButton}>
          <p className={styles.editText}>Редагувати</p>
          <img
            className={styles.editButtonImage}
            src="/edit button.svg"
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

        <a className={styles.settingsExit} href="http://localhost:3000/Profile">
          Налаштування
        </a>
        <a className={styles.settingsExit} href="http://localhost:3000/Profile">

          Вихід
        </a>
      </span>
    </div>
  );
};

export default LeftSide;
