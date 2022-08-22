import React, { useState, useCallback, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../UI/adminPage/AdminPage.scss";
import "@progress/kendo-theme-default/dist/all.css";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import FilterMenu from "./FilterMenu";
import axios from "axios";
import variables from "../important variables/variables";

const AdminPage = () => {
  const [seed] = useState([
    {
      roleList: [],
      representativeHEI: false,
      representativeAuthority: false,
      dateOfRegistration: "",
      dateOfLastActivity: "",
    },
  ]);

  const [result, setResult] = useState([
    {
      id: 0,
      fullName: "",
      email: "",
      birthday: "",
      registrationDate: "",
      lastActivityDate: "",
      representativeHEI: "",
      representativeAuthority: "",
      channelsOfRefferences: [],
    },
  ]);

  const [search, setSearch] = useState("");

  const handleOnChangeSearch = (event) => {
    console.log(seed);
    setSearch(event.target.value);
  };

  const handleSearchGetMethod = useCallback(async () => {
    console.log(seed + search);
    const options = {
      headers: { Authorization: `bearer ${localStorage.getItem("token")}` },
      params: {
        Roles: "user",
        RepresentativeHEI: seed.representativeHEI,
        RepresentativeAuthority: seed.representativeAuthority,
        SearchText: search,
      },
    };

    await axios
      .get(`${variables.API_URL}Admin/getUsersBySearch`, options)
      .then((response) => setResult(response.data))
      .catch((error) => console.log(error));
  }, [search]);

  const allDataGet = useCallback(async () => {
    await axios
      .get(`${variables.API_URL}Admin/get-all`)
      .then((response) => setResult(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (search.length >= 3) {
      handleSearchGetMethod();
    } else {
      allDataGet();
    }
  }, [search, handleSearchGetMethod, allDataGet]);

  return (
    <div className="admin-wrapper">
      <Sidebar />
      <div className="pageBody">
        <div className="adminTitle">Користувачі</div>
        <div className="properties">
          <input
            className="filterInput"
            value={search}
            onChange={handleOnChangeSearch}
            maxLength="25"
            onSubmit={handleSearchGetMethod}
          />
          <FilterMenu seed={seed} />
          <button className="setButton">Призначити роль</button>
        </div>
        <Grid className="dataGrid" data={result}>
          <Column field="" width="52px" />
          <Column field="email" title="Е-мейл" width="144px" />
          <Column field="fullName" title="Прізвище та ім'я" width="190px" />
          <Column
            field="representativeHEI"
            title="Представник ЗВО"
            width="180px"
          />
          <Column
            field="representativeAuthority"
            title="Представник влади"
            width="180px"
          />
        </Grid>
        {/* <Grid className="dataGrid" data={seed}>
          <Column field="" width="52px" />
          <Column field="Email" title="Е-мейл" width="144px" />
          <Column field="Fullname" title="Прізвище та ім'я" width="190px" />
          <Column field="Role" title="Роль" width="122px" />
          <Column field="RegisterDate" title="Дата реєстрації" width="120px" />
          <Column field="LastActivity" title="Дата останньої активності" width="208px" />
          <Column field="Category" title="Категорія" width="180px" />
        </Grid> */}
      </div>
    </div>
  );
};
export default AdminPage;
