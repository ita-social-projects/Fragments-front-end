import React from "react";
import "../UI/adminPage/AdminSidebar.scss"

const Sidebar = () => {
    
    return (
      <div className="admin-wrapper">
        <div className="admin-sidebar">
            <div tabIndex = {1} className = "sidebar-item" >
              <img className = "sidebar-icon" src = "Home.svg" alt="Home" />
              <label className="sidebar-label">Головна</label>
            </div>
            <div tabIndex = {2} className = "sidebar-item" >
              <img className = "sidebar-icon" src = "User.svg" alt="User" />
              <label className="sidebar-label">Користувачі</label>
            </div>
        </div>
      </div>
    );
  };
  export default Sidebar;