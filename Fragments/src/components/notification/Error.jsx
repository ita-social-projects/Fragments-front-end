import React, { useState } from 'react'
import './notification.scss';

const Error = () => {
  const [hidden, setHidden] = useState(false);
  const applyErrorClass = () => hidden ? "hidden" : '';
  return (
    <div className={'notification col align-self-end ' + applyErrorClass()}>
            <div className='error'>
                <img src="error.svg" alt="success" className='success-img'/>
                <div className='notification-info'>
                <div className='notification-header'>Сталась помилка</div>
                <div className='notification-text'>Не вдалося зберегти дані.</div>
                </div>
                <button className='close-btn' type='search' onClick={() => {
          setHidden(!hidden);}}>
                <img src="button.svg" alt="x" />
                </button>
            </div>
    </div>
  )
}

export default Error;