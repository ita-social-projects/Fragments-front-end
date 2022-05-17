import React from 'react'
import './notification.scss'
const Success = () => {
  return(
    <div className='notification col align-self-end'>
            <div className='success'>
                <img src="success.svg" alt="success" className='success-img'/>
                <span className='notification-text'>Positive notification</span>
                <span className='notification-text'>Positive notification</span>
                <button className='close-btn' type='search'>
                <img src="button.svg" alt="x" />
                </button>
            </div>
    </div>
  )
}

export default Success;