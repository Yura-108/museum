import './Pagination.scss';
import React, { useState } from 'react';
import CombinedShape from '@images/CombinedShape.svg';
import { getNumberOfTotalPages } from '@utils/APIFunctions.ts';

interface PaginationProps {
  activePage: number;
  setActivePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  setActivePage,
}) => {
  const totalPages = 20;
  //console.log(getNumberOfTotalPages({limit: 20}).then(res => console.log(res)));
  const pagesPerView = 4;
  const [currentRangeStart, setCurrentRangeStart] = useState(0);

  const visiblePages = Array.from(
    { length: Math.min(pagesPerView, totalPages - currentRangeStart) },
    (_, index) => currentRangeStart + index,
  );

  const handleNextRange = () => {
    if (currentRangeStart + pagesPerView < totalPages) {
      setCurrentRangeStart((prev) => prev + pagesPerView);
    }
  };

  const handlePrevRange = () => {
    if (currentRangeStart > 0) {
      setCurrentRangeStart((prev) => prev - pagesPerView);
    }
  };

  const handlePageClick = (page: number) => {
    setActivePage(page);
  };

  return (
    <div className="containerPagination">
      <div className="pagination">
        {currentRangeStart > 0 && (
          <div onClick={handlePrevRange} className="page prev">
            <img src={CombinedShape} alt="CombinedShape" />
          </div>
        )}
        {visiblePages.map((page) => (
          <div
            key={page}
            onClick={() => handlePageClick(page)}
            className={`page ${activePage === page ? 'active' : ''}`}
          >
            {page + 1}
          </div>
        ))}
        {currentRangeStart < totalPages - pagesPerView && (
          <div onClick={handleNextRange} className="page next">
            <img src={CombinedShape} alt="CombinedShape" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
