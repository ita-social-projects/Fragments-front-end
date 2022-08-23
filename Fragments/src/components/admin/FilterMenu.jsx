import React, { useState } from "react";
import menu from "./FilterMenu.module.scss";
import DateToDateRangePicker from "./DateToDateRangePicker";
import { Button } from "@mui/material";
import stylescenter from "../UI/centerbody/center.body.module.css";
import { addDays } from "date-fns";
const FilterMenu = ({ seed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModerator, setIsModerator] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isHEI, setIsHEI] = useState(false);
  const [isAuthority, setIsAuthority] = useState(false);
  const [level1, setLevel1] = useState(false);
  const [level2, setLevel2] = useState(false);

  const [rangeRegist, setRangeRegist] = useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [rangeLastDay, setRangeLastDay] = useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const resetCheckboxes = () => {
    setIsOpen(!isOpen);
    setIsModerator(false);
    setIsAdmin(false);
    setIsHEI(false);
    setIsAuthority(false);
  };

  const handleSubmit = (e) => {
    setIsOpen(!isOpen);
    if (isModerator) {
      seed[0].roleList.push(isModerator);
    }
    if (isAdmin) {
      seed[0].roleList.push(isAdmin);
    }
    seed.representativeHEI = isHEI;
    seed.representativeAuthority = isAuthority;
    seed.dateOfRegistration = rangeRegist;
    seed.dateOfLastActivity = rangeLastDay;
    console.log("1____" + isModerator);
    console.log("2___" + isAdmin);
    console.log("3__" + seed.representativeAuthority);
    console.log("4_" + seed.representativeHEI);
    console.log(seed);
  };

  const handleChangeModerator = (e) => {
    setIsModerator(e.target.checked);
    console.log("1" + e.target.checked);
  };
  const handleChangeAdmin = (e) => {
    setIsAdmin(e.target.checked);
    console.log("2" + e.target.checked);
  };
  const handleChangeHEI = (e) => {
    setIsHEI(e.target.checked);
    console.log("4" + e.target.checked);
  };
  const handleChangeAuthority = (e) => {
    setIsAuthority(e.target.checked);
    console.log("3" + e.target.checked);
  };

  return (
    <div>
      <button
        className={menu.iconButton}
        onClick={() => {
          setIsOpen(!isOpen);
          console.log(isOpen);
        }}
      >
        <img
          className={menu.filterButton}
          src="/filter.svg"
          alt="filter logo"
        />
      </button>

      {isOpen ? (
        <div className={menu.background}>
          <div className={menu.wrapper}>
            <div className={menu.textWithCross}>
              <p className={menu.bigText}>Фільтр</p>
              <button className={menu.crossButton}>
                <img
                  src="/cross.svg"
                  alt="cross button"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    console.log(isOpen);
                  }}
                />
              </button>
            </div>
            <div className={menu.checkDisplay}>
              <p className={menu.smallText}> Роль</p>
              <label className={menu.checkbox}>
                <input
                  name="moderator"
                  type="checkbox"
                  checked={isModerator}
                  onChange={handleChangeModerator}
                />
                <span>Модератор</span>
                <br />
              </label>
              <label className={menu.checkbox}>
                <input
                  name="admin"
                  type="checkbox"
                  checked={isAdmin}
                  onChange={handleChangeAdmin}
                />
                <span>Адміністратор</span>
                <br />
              </label>
              <div className={menu.line}></div>
            </div>
            <div className={menu.checkDisplay}>
              <p className={menu.smallText}>Категорія</p>
              <label className={menu.checkbox}>
                <input
                  name="authority"
                  type="checkbox"
                  checked={isAuthority}
                  onChange={handleChangeAuthority}
                />
                <span> Представник влади</span>
                <br />
              </label>
              <label className={menu.checkbox}>
                <input
                  name="HEI"
                  type="checkbox"
                  checked={isHEI}
                  onChange={handleChangeHEI}
                />
                <span>Представник ЗВО</span>
                <br />
              </label>
              <div className={menu.line}></div>
            </div>
            <div>
              <p className={menu.smallText}>Дата реєстрації</p>
              <DateToDateRangePicker
                range={rangeRegist}
                setRange={setRangeRegist}
                level={level1}
                setLevel={setLevel1}
              />
            </div>
            <div className={menu.line}></div>
            <div>
              <p className={menu.smallText}>Дата останньої активності</p>
              <DateToDateRangePicker
                range={rangeLastDay}
                setRange={setRangeLastDay}
                level={level2}
                setLevel={setLevel2}
              />
            </div>

            <div className={stylescenter.button_submit}>
              <button
                className={stylescenter.backBtn}
                onClick={resetCheckboxes}
              >
                Скасувати
              </button>
              <Button
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                disabled={!isHEI && !isAuthority && !isAdmin && !isModerator}
              >
                Застосувати
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterMenu;
