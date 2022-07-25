import React, { useState } from "react";
import "../UI/notifications/filterDropdown.scss"

const FilterDropdown = ({isNewest}) =>{
    const [isOpen,setIsOpen] = useState(false)

    return(
        <div>
            <div className="iconButton" onClick={() => setIsOpen(!isOpen)}>
                <img src="/filter.svg" alt="filter logo" />
            </div>
            {isOpen ? 
                <div className="dd-wrapper">
                    <p className="dd-title">Сортувати</p>
                    <ul className="dd-list">
                        <li onClick={() => isNewest(true)}>Найновіші</li>
                        <li onClick={() => isNewest(false)}>Найстаріші</li>
                    </ul>
                </div>:<></>
            } 
        </div>
    );
}

export default FilterDropdown;