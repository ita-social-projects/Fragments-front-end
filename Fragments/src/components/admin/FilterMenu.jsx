import React, { useState } from "react";
import menu from "./FilterMenu.module.scss";

const FilterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
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
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <span> Користувач</span>
              <br />
            </label>
            <label className={menu.checkbox}>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <span>Модератор</span>
              <br />
            </label>
            <label className={menu.checkbox}>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
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
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <span> Представник влади</span>
              <br />
            </label>
            <label className={menu.checkbox}>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <span>Представник ЗВО</span>
              <br />
            </label>
            <div className={menu.line}></div>
          </div>
          <div>
            <p className={menu.smallText}>Дата реєстрації</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterMenu;
