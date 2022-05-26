import React from "react";
import ReactTooltip from "react-tooltip";
import stylescenter from "./Interests.module.css";

const Interests = ({ ...props }) => {
  function charCount(startFrom, charend) {
    var len = document.getElementById(startFrom).value.length;
    document.getElementById(charend).innerHTML = len;
  }
  return (
    <div name="Interests" className={stylescenter.informationAboutUser}>
      <div className={stylescenter.hintItems}>
        Мої інтереси
        <span
          className={stylescenter.hintButton}
          data-tip="Введіть інформацію про себе"
        >
          <p>?</p>
        </span>
        <ReactTooltip />
      </div>
      <div>
        <div className={stylescenter.charAmount}>
          <>
            <span id="letters_interest">0</span>/500
          </>
        </div>
        <textarea
          onKeyUp={() => charCount("input_interests", "letters_interest")}
          onKeyDown={() => charCount("input_interests", "letters_interest")}
          onMouseDown={() => charCount("input_benefits", "letters_benefits")}
          id="input_interests"
          maxLength="500"
          onChange={props.handleChangeTextInterest}
          value={props.textareaInterests}
          className={stylescenter.multiInput}
          placeholder="опишіть"
        />
      </div>
    </div>
  );
};

export default React.memo(Interests);
