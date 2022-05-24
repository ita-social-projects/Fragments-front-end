import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import stylescenter from './Channeldetails.module.css'


const Channeldetails = () =>{
  
    const options =[
        {value :'none',label :''},
        {value :'viber',label:'Viber'},
        {value :'telegram',label:'Telegram'},
        {value :'messenger',label:'Messenger'},
        {value :'sms',label:"SMS"}
      ]
    
    const [inputFieldsAndOptions, setInputFieldsAndOptions] = useState([{optionSelected:'',details:''}])

    // Кнопка ↑
    const handleChangeDetailsAndOptions = (index, event) => 
    {
      console.log();
        const values = [...inputFieldsAndOptions];
        values[index][event.target.name] = event.target.value;
        setInputFieldsAndOptions(values);
    }
  
    const handleAddDetails =()=>
    {
      setInputFieldsAndOptions([...inputFieldsAndOptions,{optionSelected:'',details:''}])
    }
  
    const handleRemoveField =(index)=>
    {
      const values = [...inputFieldsAndOptions];
      values.splice(index,1); 
      setInputFieldsAndOptions(values);
    }
  
    function charCount(startFrom, charend){
      var len = document.getElementById(startFrom).value.length;
      document.getElementById(charend).innerHTML = len;
    }

    return (
      <div>
        <div className='button_addConnection'> 

      <form className={stylescenter.detailsChannelAndInput}>
        {inputFieldsAndOptions.map((element,index) => (
          <div key ={index}>
            <div>
              <p className={stylescenter.channelOfConntection}>Канал зв'язку</p> 
                <select className={stylescenter.selecterOptions} name = 'optionSelected' 
                  onChange={event => handleChangeDetailsAndOptions(index,event)}
                  value = {element.optionSelected}>
                   {options.map((el)=>
                  <option key = {el.value} value ={el.value}>{el.label}</option> 
                   )}
                </select>
            </div>
            <div className='Details'>
            {/* <p className={stylescenter.channelOfConntection}>Деталі</p>  */}
                <div className={stylescenter.charAmount}>
                  <><span id ={"letters"+index}>0</span>/100</>
                </div>
                <textarea
                  onKeyUp={() => charCount("input_details_selecter" + index,"letters"+index)}
                  onKeyDown = {() => charCount("input_details_selecter" + index,"letters"+index)}
                  onMouseOut ={() => charCount("input_details_selecter" + index,"letters"+index)}
                  id = {"input_details_selecter" + index}
                  maxLength="100"
                  rows = '2'
                  onChange={event => handleChangeDetailsAndOptions(index,event)}
                  value={element.details}
                  className= {stylescenter.detailsChannelInput}
                  name = "details"
                  placeholder='Деталі'/>
                  <div className={stylescenter.removeButtons}>
                    {index!==0 &&
                    <span>
                      <IconButton 
                        onClick={() =>handleRemoveField(index)}>
                      <img src = "bin.svg" alt="bin logo"/>
                      <span className={stylescenter.removeButtonText}>Видалити канал</span>
                      </IconButton>     
                    </span>
                }
              </div>
            </div>
          </div> 
        ))}
      </form>
        <div>
          <button className={stylescenter.addButton} onClick={()=>handleAddDetails()}>
            <img src = "plus.svg" alt="plus logo"/>
            <span className={stylescenter.addButtonText}>Додати канал зв'язку</span>
          </button>
        </div>
    </div>
    </div>
    )
}

export default Channeldetails;