import ReactPaginate from "react-paginate";
import styles from "../UI/adminPage/AdminPagination.module.scss";
import { useState } from "react";

const AdminPagination = ({ currentPage, setCurrentPage }) => {
  const [pageCount, setpageCount] = useState(10);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
    console.log(data.selected + 1);
  };
  return (
    <div className={styles.container}>
      <label>
        {currentPage === 1
          ? `${currentPage} - 25 з 1000`
          : `${(currentPage - 1) * 25 + 1} - ${currentPage * 25} з 250`}
      </label>
      <ReactPaginate
        previousLabel={<img src="Union.svg" alt="arrow" />}
        nextLabel={<img src="Union.svg" alt="arrow" />}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={
          currentPage === 1 || currentPage > pageCount - 3
            ? 5
            : currentPage === 2 || currentPage === 3
            ? 4
            : 3
        }
        onPageChange={handlePageClick}
        containerClassName={styles.paginationContainer}
        pageClassName={styles.number}
        pageLinkClassName={styles.pageItem}
        previousClassName={styles.previousArrow}
        nextLinkClassName={styles.pageItem}
        previousLinkClassName={styles.pageItem}
        nextClassName={styles.nextArrow}
        breakClassName={styles.pageItem}
        activeClassName={styles.activePage}
        disabledClassName={styles.disabledPage}
      />
    </div>
  );
};
export default AdminPagination;
