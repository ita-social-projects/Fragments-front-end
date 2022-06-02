import React from "react";
import { IconButton } from "@mui/material";
import stylescenter from "./Channeldetails.module.css";

const Channeldetails = ({ ...props }) => {
  const options = [
    { value: "none", label: "" },
    { value: "viber", label: "Viber" },
    { value: "telegram", label: "Telegram" },
    { value: "messenger", label: "Messenger" },
    { value: "sms", label: "SMS" },
  ];

  const handleChangeDetailsAndOptions = props.handleChangeDetailsAndOptions;
  const setInputFieldsAndOptions = props.setInputFieldsAndOptions;
  const inputFieldsAndOptions = props.inputFieldsAndOptions;

  const handleAddDetails = () => {
    setInputFieldsAndOptions([
      ...inputFieldsAndOptions,
      { optionSelected: "", details: "" },
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
                  name="optionSelected"
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
                  value={element.details}
                  className={stylescenter.detailsChannelInput}
                  name="details"
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
            onClick={() => handleAddDetails()
            }
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
