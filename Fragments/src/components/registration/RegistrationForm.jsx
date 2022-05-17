import React, {useState, useEffect} from 'react'
import '../scss/registration.scss'
import validator from 'validator'
import BirthdayPicker from './BirthdayPicker';
import Success from '../notification/Success';


const defaultImageSrc = '/logo192.png'

const initialFieldValues = {
    userID: 0,
    email: '',
    firstName: '',
    lastName: '',
    date:'',
    imageSrc: defaultImageSrc,
    imageFile: null
}
const RegistrationForm = (props) => {  
  const [date, setDate] = useState();
  const { addOrEdit, recordForEdit } = props
  const [values, setValues] = useState(initialFieldValues)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (recordForEdit != null)
        setValues(recordForEdit);
  }, [recordForEdit])

  const handleInputChange = e => {
      const { name, value } = e.target;
      if(name === 'email')
        validateEmail(e);
      setValues({
          ...values,
          [name]: value
      })
  }
  const ClearInput = e => {
      e = ''
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
    setErrors(temp)
    return Object.values(temp).every(x => x === true)
  }
  const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')

  const resetForm = () => {
    setValues(initialFieldValues)
    document.getElementById('image-uploader').value = null;
    setErrors({})
  }
  const handleFormSubmit = e => {
    e.preventDefault()
    if (validate()) {  
        const formData = new FormData()
        formData.append('userID', values.userID)
        formData.append('email', values.email)
        formData.append('firstName', values.firstName)
        formData.append('lastName', values.lastName)
        formData.append('date', date.toLocaleDateString().replaceAll('.','-'))
        formData.append('imageFile', values.imageFile)
        addOrEdit(formData, resetForm)
    }
  }
  return (
    <>
    <Success/>
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
            <button type="reset" onClick={ClearInput}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.40634L1.40634 14L0 12.5937L12.5937 0L14 1.40634Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.40634 0L14 12.5937L12.5937 14L0 1.40634L1.40634 0Z" fill="black"/>
            </svg>
            </button>
            <div className='input-text'>
              Прізвище
            <span className="required">*</span>
            </div>  
            <input className='input-fields' type="text" name="lastName"  
            value={values.lastName} onChange={handleInputChange} placeholder="Прізвище" required />
            <button className='lastname-btn' type='search' onClick={ClearInput(values.lastName)}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.40634L1.40634 14L0 12.5937L12.5937 0L14 1.40634Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.40634 0L14 12.5937L12.5937 14L0 1.40634L1.40634 0Z" fill="black"/>
            </svg>
            </button>
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