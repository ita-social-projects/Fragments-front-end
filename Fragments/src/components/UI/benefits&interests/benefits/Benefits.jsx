import React from "react";
import ReactTooltip from "react-tooltip";
import stylescenter from "./Benefits.module.css";

const Benefits = ({ ...props }) => {
  function charCount(startFrom, charend) {
    const len = document.getElementById(startFrom).value.length;
    document.getElementById(charend).innerHTML = len;
  }

  return (
    <div name="Benefits" className={stylescenter.informationAboutUser}>
      <div className={stylescenter.hintItems}>
        <p className={stylescenter.benefitsText}>Чим можу бути корисним</p>
        <span
          className={stylescenter.hintButton}
          data-tip="Введіть інформацію про себе"
        >
          <p>?</p>
        </span>
        <ReactTooltip />
      </div>
      <div name="Benefits_input">
        <div className={stylescenter.charAmount}>
          <>
            <span id="letters_benefits">0</span>/500
          </>
        </div>
        <textarea
          onKeyUp={() => charCount("input_benefits", "letters_benefits")}
          onKeyDown={() => charCount("input_benefits", "letters_benefits")}
          onMouseDown={() => charCount("input_benefits", "letters_benefits")}
          id="input_benefits"
          maxLength="500"
          onChange={props.handleChangeTextBenefits}
          value={props.textareaBenefits}
          className={stylescenter.multiInput}
          placeholder="опишіть"
        />
      </div>
    </div>
  );
};

export default Benefits;
