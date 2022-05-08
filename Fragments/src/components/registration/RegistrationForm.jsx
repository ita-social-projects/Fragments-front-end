import React, {useState} from 'react'
import '../scss/registration.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


const Registration = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='reg-form col align-self-center'>
          <span className='reg-info'> Введіть ваші дані, будь ласка</span>
          <form action="" method="get">
            <span className='input-photo'>
              <input className='insert-photo' type="file" name='photo' accept="image/png, image/tiff, image/jpeg, image/bmp" required  />
              </span>           
            <input className='input-fields' type="email" name="email" placeholder="Е-мейл" required />
            <input className='input-fields' type="text" name="first-name" placeholder="Ім'я" title="Format: Xx[space]Xx (e.g. Alex Cican)" autoFocus autoComplete="off" required pattern="^\w+\s\w+$" />
            <input className='input-fields' type="text" name="last-name" placeholder="Прізвище" title="Format: Xx[space]Xx (e.g. Alex Cican)" autoFocus autoComplete="off" required pattern="^\w+\s\w+$" />
            <DatePicker className='input-fields' selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="dd/MM/yyyy" />
            <button className='reg-btn' type="submit" value="Sign Up">Зберегти</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration;