import React from 'react';
import { MockData } from '../../data/mockData';
import { NextButton } from '../../shared/svg/next-button';
import { PrevButton } from '../../shared/svg/prev-button';
import './pickers.scss';

type CategoryPickersProps = {
  activeCategory: number;
  handleNext: () => void;
  handlePrev: () => void;
};
export const CategoryPickers: React.FC<CategoryPickersProps> = ({
  activeCategory,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="category-pickers">
      <span>{`0${activeCategory + 1}/0${MockData.length}`}</span>
      <div className="pickers__buttons">
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeCategory === 0}
        >
          <PrevButton />
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={activeCategory >= MockData.length - 1}
        >
          <NextButton />
        </button>
      </div>
    </div>
  );
};
