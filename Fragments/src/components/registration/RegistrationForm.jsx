import React, {useState ,useEffect} from 'react'
import '../scss/registration.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


const defaultImageSrc = '/logo192.png'

const initialFieldValues = {
    userID: 0,
    email: '',
    firstName: '',
    lastName: '',
    bDay: Date.now(),
    imageSrc: defaultImageSrc,
    imageFile: null
}

const Registration = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const { addOrEdit, recordForEdit } = props

  const [values, setValues] = useState(initialFieldValues)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (recordForEdit != null)
        setValues(recordForEdit);
  }, [recordForEdit])

  const handleInputChange = e => {
      const { name, value } = e.target;
      setValues({
          ...values,
          [name]: value
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
  const validate = () => {
    let temp = {}
    temp.email = values.email === "" ? false : true;
    temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
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
        formData.append('bDay', values.bDay)
        formData.append('imageFile', values.imageFile)
        addOrEdit(formData, resetForm)
    }
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='reg-form col align-self-center'>
          <span className='reg-info'> Введіть ваші дані, будь ласка</span>
          <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            
            <img src={values.imageSrc} className="img-fluid input-photo" id="image-uploader"/>
            <input className={'input-file' + applyErrorClass('imageSrc')} type="file" name='photo' accept="image/*" 
            onChange={showPreview} required  />
                       
            <input className='input-fields' type="email" name="email" value={values.email} 
            onChange={handleInputChange}  placeholder="Е-мейл" required />
            <input className='input-fields' type="text" name="firstName"  
            value={values.firstName} onChange={handleInputChange} placeholder="Ім'я" required />
            <input className='input-fields' type="text" name="lastName"  
            value={values.lastName} onChange={handleInputChange} placeholder="Прізвище" required />
            <DatePicker className='input-fields' selected={startDate} name="bDay" 
            value={values.bDay}  onChange={(date) => setStartDate(date)}  dateFormat="dd/MM/yyyy"  required />
            <button className='reg-btn' type="submit" value="Sign Up">Зберегти</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration;