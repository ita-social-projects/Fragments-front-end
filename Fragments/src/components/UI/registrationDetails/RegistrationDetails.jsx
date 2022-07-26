import React from "react";
import styles from "./Registration.module.scss";
import validator from "validator";
import BirthdayPicker from "./BirthdayPicker";
import ProfileImage from "./ProfileImage";

const RegistrationDetails = ({ ...props }) => {
  const values = props.values;
  const setValues = props.setValues;
  const errors = props.errors;
  const setErrors = props.setErrors;
  const date = props.date;
  const setDate = props.setDate;
  const imageSrc = props.imageSrc;
  const setImageSrc = props.setImageSrc;

  const defaultImageSrc = "/logo192.png";

  const applyErrorClass = (field) => (!values[field] ? styles.hidden : "");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") validateEmail(e);
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleInputClear = (name) => {
    setValues({
      ...values,
      [name]: "",
    });
  };
  const showPreview = (e) => {
    const imgEl = document.getElementById("image-uploader");
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
      document.getElementById("image-uploader").style.border = "none";
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
      document.getElementById("image-uploader").style = imgEl.style;
    }
  };
  const validateEmail = (e) => {
    const emailElem = document.getElementById("email-input");
    const email = e.target.value;
    if (validator.isEmail(email) || email.length === 0) {
      setErrors("");
      emailElem.classList.remove(styles.invalidField);
    } else {
      setErrors("невірна поштова адреса");
      emailElem.classList.add(styles.invalidField);
    }
  };
  return (
    <div>
      <ProfileImage
        value={imageSrc}
        setValue={setImageSrc}
      />
      <div className={styles.inputText}>
        Ім'я та Прізвище<span className={styles.required}>*</span>
      </div>
      <input
        className={styles.inputFields}
        type="text"
        name="name"
        maxLength={100}
        value={values.name}
        onChange={handleInputChange}
        placeholder="Ім'я та прізвище"
        required
      />
      <button
        className={styles.lastnameBtn + " " + applyErrorClass("name")}
        onClick={() => {
          handleInputClear("name");
        }}
      >
        <img src="button.svg" alt="x" />
      </button>
      <div className={styles.inputText}>
        Дата народження<span className={styles.required}>*</span>
      </div>
      <BirthdayPicker
        value={date}
        setValue={setDate}
        classes={styles.selectInput}
      />
      <div className={styles.inputText}>
        Поштова адреса<span className={styles.required}>*</span>
      </div>
      <input
        type="email"
        className={styles.inputFields}
        id="email-input"
        name="email"
        value={values.email}
        onChange={handleInputChange}
        placeholder="example@domain.com"
        required
      />
      <span className={styles.emailValid}>{errors}</span>
    </div>
  );
};

export default RegistrationDetails;
