import React from "react";

export default function Pagination({
  totalPosts,
  itemsPerPage,
  setCurrentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            className="botbtn"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
