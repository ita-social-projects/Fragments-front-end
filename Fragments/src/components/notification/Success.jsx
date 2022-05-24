import React, { useState } from 'react'
import './notification.scss'
const Success = () => {
  const [hidden, setHidden] = useState(false);
  const applyErrorClass = () => hidden ? "hidden" : '';
  return(
    <div className={'notification col align-self-end ' + applyErrorClass()}>
            <div className='success'>
                <img src="success.svg" alt="success" className='success-img'/>
                <div className='notification-info'>
                <div className='notification-header'>Positive notification</div>
                <div className='notification-text'>Дані збережено</div>
                </div>
                <button className='close-btn' type='search' onClick={() => {
          setHidden(!hidden);
        }}>
                <img src="button.svg" alt="x" />
                </button>
            </div>
    </div>
  )
}

export default Success;