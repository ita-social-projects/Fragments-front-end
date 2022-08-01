import React from "react";
import Sidebar from "./Sidebar";
import "../UI/adminPage/AdminPage.scss"
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

const AdminPage = () => {
    const seed = [
      {Email:"fdsfsdf@gmail.com",Fullname:"Moris Kul",Role:["Адмін","Користувач"],RegisterDate:"18.09.2021",LastActivity:"03.05.2022",Category:"Представник влади"},
      {Email:"fdsfsdf@gmail.com",Fullname:"Moris Kul",Role:["Користувач"],RegisterDate:"18.09.2021",LastActivity:"03.05.2022",Category:"Представник влади"},
      {Email:"fdsfsdf@gmail.com",Fullname:"Moris Kul",Role:["Користувач"],RegisterDate:"18.09.2021",LastActivity:"03.05.2022",Category:"Представник влади"},
      {Email:"fdsfsdf@gmail.com",Fullname:"Moris Kul",Role:["Користувач"],RegisterDate:"18.09.2021",LastActivity:"03.05.2022",Category:"Представник влади"}
    ]
    return (
      <div className="admin-wrapper">
        <Sidebar/>
        <div className="pageBody">
          <div className="adminTitle">Користувачі</div>
          <div className="properties">
            <input className="filterInput"/>
            <img className="filterIcon" src="/filter.svg" alt="filter logo" />
            <button className="setButton">Призначити роль</button>
          </div>
          <Grid className="dataGrid"
          data={seed}>
            <Column field="" width="52px"/>
            <Column field="Email" title="Е-мейл" width="144px"/>
            <Column field="Fullname" title="Прізвище та ім'я" width="190px"/>
            <Column field="Role" title="Роль" width="122px"/>
            <Column field="RegisterDate" title="Дата реєстрації" width="120px"/>
            <Column field="LastActivity" title="Дата останньої активності" width="208px"/>
            <Column field="Category" title="Категорія" width="180px"/>
          </Grid>
        </div>
      </div>
    );
  };
  export default AdminPage;