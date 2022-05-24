import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip';
import stylescenter from './Interests.module.css';

const Interests =() =>{
    const [textareaInterests, setTextareaInterest] = useState("");
    const handleChangeTextInterest = (event) => 
    {
      setTextareaInterest(event.target.value)
      };
      function charCount(startFrom, charend){
        var len = document.getElementById(startFrom).value.length;
        document.getElementById(charend).innerHTML =len;
    }  
    return(
        <form name = "Interests" className={stylescenter.informationAboutUser}>
          <div className={stylescenter.hintItems}>Мої інтереси 
            <span className={stylescenter.hintButton} data-tip= "Введіть інформацію про себе">
              <p>?</p>
            </span>
            <ReactTooltip/>
          </div>
          <div> 
                <div className={stylescenter.charAmount}>
                  <><span id ="letters_interest">0</span>/500</>
                </div>
               <textarea
                onKeyUp={() => charCount('input_interests','letters_interest')}
                onKeyDown = {() => charCount('input_interests','letters_interest')}
                id ="input_interests"
                maxLength="500"
                onChange={handleChangeTextInterest}
                value={textareaInterests}
                className= {stylescenter.multiInput}
                placeholder='опишіть'/>
          </div>
        </form>
    )
}

export default Interests;