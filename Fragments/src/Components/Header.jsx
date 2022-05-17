import React from 'react'
import './modules/header.scss'

const Header = () => {
  return (
    <div className='header container-fluid'>
    <div className='row'> 
      <div className='col-9'>
        <span className='fragments-logo'>
          <img src = "logo.svg" alt="fragments logo"/>
          <span className='fragments-text'>ФРАГМЕНТИ</span> 
        </span>
        
        <span className='header-label'>Label</span>
        <span className='header-label'>Label</span>
        <span className='header-label'>Label</span>    
      </div>
      <div className='col-3'> 
        <span className='search-icon'>
          <img src = "search.svg" alt="search"/>
        </span>
        <span className='reg-buttons'>
          <button className='log-in-btn'>Log in</button>
          <button className='sign-in-btn'>Sign in</button>
        </span>
      </div>
    </div>
  </div>
  )
}

export default Header;