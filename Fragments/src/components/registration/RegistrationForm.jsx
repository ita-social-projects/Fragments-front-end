import React, {useState} from 'react'
import '../scss/registration.scss'
import validator from 'validator'
import addUser from './Requests.js'
import BirthdayPicker from './BirthdayPicker';
import {useLocation} from 'react-router-dom'

const defaultImageSrc = '/logo192.png'


const RegistrationForm = () =>{  
  const info = useLocation().state

  const initialFieldValues = {
    id: 0,
    email: info.email,
    firstName: info.firstname,
    lastName: info.lastname,
    birthday: Date.now(),
    imageSrc: info.picture,
    imageFile: null
  }

  const [date, setDate] = useState();
  const [values, setValues] = useState(initialFieldValues)


  const handleInputChange = e => {
      const { name, value } = e.target;
      if(name === 'email')
        validateEmail(e);
      setValues({
          ...values,
          [name]: value
      })
  }
  const handleInputClear = (name) => {
    setValues({
        ...values,
        [name]: ''
    })
}
  const showPreview = e => {
    const imgEl = document.getElementById('image-uploader');
    if (e.target.files && e.target.files[0]) {
        let imageFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = x => {
            setValues({
                ...values,
                imageFile,
                imageSrc: x.target.result
            })
        }
        reader.readAsDataURL(imageFile)
        document.getElementById('image-uploader').style.border = 'none'
    }
    else {
        setValues({
            ...values,
            imageFile: null,
            imageSrc: defaultImageSrc
            
        })
        document.getElementById('image-uploader').style = imgEl.style;
    }
  }
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    let emailElem = document.getElementById('email-input');
    var email = e.target.value
    if (validator.isEmail(email) || email.length === 0) {
      setEmailError('')
      emailElem.classList.remove('invalid-field')
    } else {
      setEmailError('невірна поштова адреса')
      emailElem.classList.add('invalid-field')

    }
  }
  const validate = () => {
    let temp = {}
    temp.email = values.email !== "";
    temp.imageSrc = values.imageSrc !== defaultImageSrc;
    return Object.values(temp).every(x => x === true)
  }
  const applyErrorClass = field => (!values[field] ? 'hidden' : '')

  const handleFormSubmit = e => {
    e.preventDefault()
    if (validate()) {  
      const formData = {
        id:values.id,
        firstName:values.firstName,
        lastName:values.lastName,
        email:values.email,
        birthday:date.toJSON(),
        photo:values.imageSrc
      }
        addUser(formData)
    }
  }
  return (
    <>
    <div className='container-fluid'>
      
      <div className='row'>
        <div className='reg-form col align-self-center'>
          <span className='reg-info'> Особисті дані</span>
          <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
          <img src={values.imageSrc} className="img-fluid input-photo" id="image-uploader" alt='upload'/>
            <input className={'input-file' + applyErrorClass('imageSrc')} type="file" name='photo' accept="image/*" 
            onChange={showPreview} required/> 
            <div className='input-text'>
              Ім'я
              <span class="required">*</span>
            </div>  
            <input className='input-fields' type="text" name="firstName"  
            value={values.firstName} onChange={handleInputChange} placeholder="Ім'я" required />
            <button className={'lastname-btn ' + applyErrorClass('firstName')} onClick={name => {name = 'firstName'; handleInputClear(name)}} >
            <img src="button.svg" alt="x" />
            </button>
            <div className='input-text'>
              Прізвище
            <span className="required">*</span>
            </div>
            <div id='lastname'>
              <input className='input-fields' type="text" name="lastName"  
            value={values.lastName} onChange={handleInputChange} placeholder="Прізвище" required />
            <button className={'lastname-btn ' + applyErrorClass('lastName')} onClick={name => {name = 'lastName'; handleInputClear(name)}}>
            <img src="button.svg" alt="x" />
            </button>
            </div>
            
            <div className='input-text'>
              
              Дата народження
              <span className="required">*</span>
            </div>
            <BirthdayPicker value= {date} setValue ={setDate} classes={'select-input'}/>     
            <div className='input-text'>
              Поштова адреса
              <span className="required">*</span>
            </div>       
            <input type="email" pattern=".+@globex\.com" className='input-fields' id='email-input'  name="email" value={values.email} 
            onChange={handleInputChange}  placeholder="example@domain.com" required />
            <span className='email-valid'>{emailError}</span>  
            <button className='back-btn' type="submit" value="back">Назад</button>
            <button className='reg-btn' type="submit" value="save" disabled={!values.email || !values.firstName || !values.lastName || !date ||!values.imageFile}>Зберегти</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default RegistrationForm;