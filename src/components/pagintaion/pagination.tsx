/* eslint-disable no-unused-vars */
import React from 'react';
import './pagination.scss';

interface PaginationProps {
  total: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  activeIndex,
  onDotClick,
}) => {
  return (
    <div className="pagination">
      {Array.from({ length: total }, (_, index) => (
        <button
          type="button"
          aria-label="pagination-dot"
          key={index}
          className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};
