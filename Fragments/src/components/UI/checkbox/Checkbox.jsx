import React, { useState } from 'react'
import stylescenter from './Checkbox.module.css';


const Checkbox = () => {
  
const [checkedBoxOne, setCheckedOne] = useState(false);
const [checkedBoxTwo, setCheckedTwo] = useState(false);

const handleChangeCheckboxOne = () => 
{
  setCheckedOne(!checkedBoxOne);
};

const handleChangeCheckboxTwo = () => 
{
  setCheckedTwo(!checkedBoxTwo);
};
    return (
        <div className={stylescenter.roleCheckboxPos}>
            <div className = {stylescenter.roleCenter}><p>Оберіть роль</p></div>
            <div className= {stylescenter.postCheckboxRepresentative}>
                <div>
                <input onChange={handleChangeCheckboxOne} type= "checkbox" 
                name = "representative" value = {checkedBoxOne}/> 
                <p>представник влади</p> 
            </div>
            <div>
              <input onChange={handleChangeCheckboxTwo} type= "checkbox" 
              name = "representative" value = {checkedBoxTwo} /> 
              <p>представник ЗВО</p>
            </div>
            </div>
        </div>
    )
}

export default Checkbox;