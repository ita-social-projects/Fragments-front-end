import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={[styles.header, 'container-fluid'].join(' ')}>
    <div className='row'> 
      <div className='col-9'>
        <span className={styles.fragmentsLogo}>
          <img src = "logo.svg" alt="fragments logo"/>
          <span className={styles.fragmentsText}>ФРАГМЕНТИ</span> 
        </span>
        
        <span className={styles.headerLabel}>Label</span>
        <span className={styles.headerLabel}>Label</span>
        <span className={styles.headerLabel}>Label</span>    
      </div>
      <div className='col-3'> 
        <span className={styles.searchIcon}>
          <img src = "search.svg" alt="search"/>
        </span>
        <span className={styles.regButtons}>
          <button className={styles.logBtn}>Log in</button>
          <button className={styles.signBtn}>Sign in</button>
        </span>
      </div>
    </div>
  </div>
  )
}

export default Header;