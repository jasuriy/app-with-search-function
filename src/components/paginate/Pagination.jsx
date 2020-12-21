import React from "react";
import _ from "lodash";
import Movies from "../layout-tables/MoviesLayout";
const Pagination = ({
  itemsCount,
  pageSize,
  handlePageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(itemsCount.length / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => handlePageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
