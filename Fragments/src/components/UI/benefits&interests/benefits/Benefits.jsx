import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip';
import stylescenter from './Benefits.module.css';

const Benefits = () =>{
    const [textareaBenefits, setTextareaBenefits] = useState("");
    const handleChangeTextBenefits = (event) => 
    {
      setTextareaBenefits(event.target.value)
    };
    function charCount(startFrom, charend){
        var len = document.getElementById(startFrom).value.length;
        document.getElementById(charend).innerHTML =len;
    }

    return (
        <form name = "Benefits" className={stylescenter.informationAboutUser} >
            <div className={stylescenter.hintItems}>Чим можу бути корисним  
                <span className={stylescenter.hintButton} data-tip= "Введіть інформацію про себе">
                <p>?</p>
                </span>
                <ReactTooltip/>
            </div>
            <div name = "Benefits_input">
                <div className={stylescenter.charAmount}>
                    <><span id ="letters_benefits">0</span>/500</>
                </div> 
            <textarea
                onKeyUp={() => charCount('input_benefits','letters_benefits')}
                onKeyDown = {() => charCount('input_benefits','letters_benefits')}
                id ="input_benefits"
                maxLength="500"
                onChange={handleChangeTextBenefits}
                value={textareaBenefits}
                className= {stylescenter.multiInput}
                placeholder='опишіть'/>
            </div>
        </form>
    )
}

export default Benefits;