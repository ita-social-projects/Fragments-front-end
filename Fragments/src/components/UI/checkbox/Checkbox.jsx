import React from "react";
import stylescenter from "./Checkbox.module.css";

const Checkbox = ({ ...props }) => {
  return (
    <div className={stylescenter.roleCheckboxPos}>
      <div className={stylescenter.roleCenter}>
        <p>Оберіть роль</p>
      </div>
      <div className={stylescenter.postCheckboxRepresentative}>
        <div>
          <input
            onChange={props.handleOne}
            type="checkbox"
            name="representative"
            value={props.checkDataOne}
          />
          <p>представник влади</p>
        </div>
        <div>
          <input
            onChange={props.handleTwo}
            type="checkbox"
            name="representative Study"
            value={props.checkDataTwo}
          />
          <p>представник ЗВО</p>
        </div>
        
      </div>
    </div>
  );
};

export default Checkbox;