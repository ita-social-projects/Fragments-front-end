import React, {useState} from 'react'
import styles from './registration.module.scss'
import validator from 'validator'
import BirthdayPicker from './BirthdayPicker';


const RegistrationForm = () => {  
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
  const [date, setDate] = useState();
  const [values, setValues] = useState(initialFieldValues)
  const [emailError, setEmailError] = useState('')

  const applyErrorClass = field => (!values[field] ? styles.hidden : '')

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
  const validateEmail = (e) => {
    const emailElem = document.getElementById('email-input');
    const email = e.target.value
    if (validator.isEmail(email) || email.length === 0) {
      setEmailError('')
      emailElem.classList.remove(styles.invalidField);
    } else {
      setEmailError('невірна поштова адреса')
      emailElem.classList.add(styles.invalidField)

    }
  }
  
  const handleFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('userID', values.userID)
    formData.append('email', values.email)
    formData.append('firstName', values.firstName)
    formData.append('lastName', values.lastName)
    formData.append('date', date.toJSON())
    formData.append('imageFile', values.imageFile)
  }
  return (
    <>
      <span className={styles.regInfo}> Особисті дані</span>
      <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
      <img src={values.imageSrc} className={'img-fluid '+styles.inputPhoto} id="image-uploader" alt='upload'/>
        <input className={styles.inputFile + ' ' + applyErrorClass('imageSrc')} type="file" name='photo' accept="image/*" 
        onChange={showPreview} required/> 
        <div className={styles.inputText}>
          Ім'я
        </div>  
        <input className={styles.inputFields} type="text" name="firstName"  
        value={values.firstName} onChange={handleInputChange} placeholder="Ім'я" required />
        <button className={styles.lastnameBtn + ' ' + applyErrorClass('firstName')} onClick={name => {name = 'firstName'; handleInputClear(name)}} >
        <img src="button.svg" alt="x" />
        </button>
        <div className={styles.inputText}>
          Прізвище
        </div>
        <div>
          <input className={styles.inputFields} type="text" name="lastName"  
        value={values.lastName} onChange={handleInputChange} placeholder="Прізвище" required />
        <button className={styles.lastnameBtn + ' ' + applyErrorClass('lastName')} onClick={name => {name = 'lastName'; handleInputClear(name)}}>
        <img src="button.svg" alt="x" />
        </button>
        </div>
        
        <div className={styles.inputText}>
          
          Дата народження
        </div>
        <BirthdayPicker value= {date} setValue ={setDate} classes={styles.selectInput}/>     
        <div className={styles.inputText}>
          Поштова адреса
        </div>       
        <input type="email" className={styles.inputFields} id='email-input'  name="email" value={values.email} 
        onChange={handleInputChange}  placeholder="example@domain.com" required />
        <span className={styles.emailValid}>{emailError}</span>  
        {/* <button className={styles.backBtn} type="reset" value="back">Назад</button> */}
        {/* <button className={styles.regBtn} type="submit" value="save" disabled={emailError !== '' || !values.firstName || !values.email || !values.lastName || !date ||!values.imageFile}>Зберегти</button> */}
      </form>
    </>
  )
}

export default RegistrationForm;