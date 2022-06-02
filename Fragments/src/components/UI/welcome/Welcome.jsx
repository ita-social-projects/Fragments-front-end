import React from 'react'
import stylescenter from './Welcome.module.css';

const Welcome=()=>{
    return(
    <div className={stylescenter.header_welcome_text}>
        <h2>Вітаємо!</h2>
        <h3>Для завершення реєстрації у Спільності дозвольте нам дізнатися про Вас більше</h3>
    </div>
    )
}

export default Welcome;