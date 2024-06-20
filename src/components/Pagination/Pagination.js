import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
