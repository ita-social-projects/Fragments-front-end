import React, { useState } from "react";
import styles from "../UI/adminPage/Pagination.module.scss";

const Pagination = ({ pages = 10, setCurrentPage, currentPage }) => {
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1);

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  const handlePageClick = () => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }
    console.log("fdafad");
    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  };

  return (
    <div className={styles.paginationContainer}>
      <title>
        {currentPage === 1
          ? `${currentPage} - 25 з 1000`
          : `${(currentPage - 1) * 25 + 1} - ${currentPage * 25} з 1000`}
      </title>
      <div
        className={`${currentButton === 1 ? styles.disabled : ""}`}
        onClick={() => {
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1));
          handlePageClick();
        }}
      >
        <img className={styles.previousArrow} src="Union.svg" alt="arrow" />
      </div>

      {arrOfCurrButtons.map((item, index) => (
        <div
          key={index}
          className={`${currentButton === item ? styles.active : ""}`}
          onClick={() => {
            setCurrentButton(item);
            handlePageClick();
          }}
        >
          {item}
        </div>
      ))}

      <div
        className={`${
          currentButton === numberOfPages.length ? styles.disabled : ""
        }`}
        onClick={() => {
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          );
          handlePageClick();
        }}
      >
        <img src="Union.svg" alt="arrow" />
      </div>
    </div>
  );
};

export default Pagination;
