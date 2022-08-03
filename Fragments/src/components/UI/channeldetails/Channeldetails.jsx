import React from "react";
import { IconButton } from "@mui/material";
import stylescenter from "./Channeldetails.module.css";

const Channeldetails = ({ ...props }) => {
  const options = [
    { value: "", label: "" },
    { value: "viber", label: "Viber" },
    { value: "telegram", label: "Telegram" },
    { value: "messenger", label: "Messenger" },
    { value: "sms", label: "SMS" },
  ];

  const handleChangeDetailsAndOptions = props.handleChangeDetailsAndOptions;
  const setInputFieldsAndOptions = props.setInputFieldsAndOptions;
  const inputFieldsAndOptions = props.inputFieldsAndOptions;

  const checkEmptyChannels = () => {
    const values = [...inputFieldsAndOptions];
    return values.some(element => Object.values(element).some(val => val === null || val === ""));
  };

  const handleAddDetails = () => {
    setInputFieldsAndOptions([
      ...inputFieldsAndOptions,
      { channelName: "", channelDetails: "" },
    ]);
  };

  const handleRemoveField = (index) => {
    const previousvalues = [...inputFieldsAndOptions];
    previousvalues.splice(index, 1);
    setInputFieldsAndOptions(previousvalues);
  };

  return (
    <div>
      <div className="button_addConnection">
        <div className={stylescenter.detailsChannelAndInput}>
          {inputFieldsAndOptions.map((element, index) => (
            <div key={index} className={stylescenter.fullChannelControll}>
              <div className={stylescenter.channelAndChannel} >
                <p className={stylescenter.channelOfConntection}>
                  Канал зв'язку
                </p>
                <select
                  className={stylescenter.selecterOptions}
                  name="channelName"
                  onChange={(event) =>
                    handleChangeDetailsAndOptions(index, event)
                  }
                  value={element.optionSelected}
                >
                  {options.map((el) => (
                    <option key={el.value} value={el.value}>
                      {el.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={stylescenter.detailsAndInputAndDelete}>
                <p className={stylescenter.channelOfConntection}>
                  Деталі
                </p>
                <textarea
                  maxLength="100"
                  rows="2"
                  onChange={(event) =>
                    handleChangeDetailsAndOptions(index, event)
                  }
                  value={element.channelDetails}
                  className={stylescenter.detailsChannelInput}
                  name="channelDetails"
                  placeholder="введіть телефон або @username"
                />
                <div className={stylescenter.removeButtons}>
                  {index !== 0 && (
                    <span>
                      <IconButton onClick={() => handleRemoveField(index)}>
                        <img src="bin.svg" alt="bin logo" />
                        <span className={stylescenter.removeButtonText}>
                          Видалити канал
                        </span>
                      </IconButton>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            type="button"
            className={stylescenter.addButton}
            onClick={() => handleAddDetails()}
            disabled={checkEmptyChannels}
          >
            <img src="plus.svg" alt="plus logo" />
            <span className={stylescenter.addButtonText}>
              Додати канал зв'язку
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Channeldetails;
