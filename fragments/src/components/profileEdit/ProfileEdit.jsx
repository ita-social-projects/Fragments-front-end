import React, { useState, useCallback } from "react";
import { Button } from "@mui/material";
import stylescenter from "../UI/centerbody/center.body.module.css";
import Checkbox from "../UI/checkbox/Checkbox";
import Benefits from "../UI/benefits&interests/benefits/Benefits";
import Interests from "../UI/benefits&interests/interests/Interests";
import Channeldetails from "../UI/channeldetails/Channeldetails";
import RegistrationDetails from "../UI/registrationDetails/RegistrationDetails";
import addUser from "../registration/Requests";

const ProfileEdit = () => {
  const defaultImageSrc = "/logo192.png";

  const initialFieldValues = {
    userID: 0,
    email: "",
    name: "",
    date: "",
    imageSrc: defaultImageSrc,
    imageFile: null,
  };

  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState("");
  const [date, setDate] = useState();
  const [textareaBenefits, setTextareaBenefits] = useState("");
  const [textareaInterests, setTextareaInterest] = useState("");
  const [checkedBoxOne, setCheckedOne] = useState(false);
  const [checkedBoxTwo, setCheckedTwo] = useState(false);
  const [inputFieldsAndOptions, setInputFieldsAndOptions] = useState([
    { optionSelected: "", details: "" },
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: values.userID,
      email: values.email, 
      name: values.name,
      date: date.toJSON(),
      imageSrc: values.imageSrc,
      imageFile: values.imageFile,
      benefits: textareaBenefits,
      interests: textareaInterests, 
      governmentBox: checkedBoxOne,
      educationBox: checkedBoxTwo,
      channel: inputFieldsAndOptions
    }
    addUser(formData);
  };

  const handleChangeDetailsAndOptions = useCallback(
    (index, event) => {
      const values = [...inputFieldsAndOptions];
      values[index][event.target.name] = event.target.value;
      setInputFieldsAndOptions(values);
    },
    [inputFieldsAndOptions]
  );

  const handleChangeTextBenefits = useCallback((event) => {
    setTextareaBenefits(event.target.value);
  },[]);

  const handleChangeTextInterest = useCallback((event) => {
    setTextareaInterest(event.target.value);
  },[]);

  const handleChangeCheckboxOne = useCallback(() => {
    setCheckedOne(!checkedBoxOne);
  }, [checkedBoxOne]);

  const handleChangeCheckboxTwo = useCallback(() => {
    setCheckedTwo(!checkedBoxTwo);
  },[checkedBoxTwo]);

  return (
    <div className={stylescenter.center_body}>
      <div className={stylescenter.border_center}>
        <span className={stylescenter.regInfo}> Особисті дані</span>
        <form autoComplete="off" onSubmit={handleFormSubmit} noValidate>
          <RegistrationDetails
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            date={date}
            setDate={setDate}
          />
          <Channeldetails
            inputFieldsAndOptions={inputFieldsAndOptions}
            setInputFieldsAndOptions={setInputFieldsAndOptions}
            handleChangeDetailsAndOptions={handleChangeDetailsAndOptions}
          />
          <Checkbox
            handleOne={handleChangeCheckboxOne}
            handleTwo={handleChangeCheckboxTwo}
            checkDataOne={checkedBoxOne}
            checkDataTwo={checkedBoxTwo}
          />
          <div className={stylescenter.benefits_and_interest}>
            <Benefits
              handleChangeTextBenefits={handleChangeTextBenefits}
              textareaBenefits={textareaBenefits}
            />
            <Interests
              handleChangeTextInterest={handleChangeTextInterest}
              textareaInterests={textareaInterests}
            />
          </div>
          <div className={stylescenter.button_submit}>
            <button className={stylescenter.backBtn} type="reset" value="back">
              Назад
            </button>
            <Button variant="contained" type="submit" disabled = {errors !== '' || !values.name || !values.email ||  !date } >
              Зберегти
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;