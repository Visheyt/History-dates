/* eslint-disable no-undef */
import React from 'react';
import { MockData } from '../../data/mockData';
import { Dates } from '../dates/Dates';
import { Header } from '../header/Header';
import { HistoryBlock } from '../history-block/History-block';
import './history-section.scss';
import { Pagination } from '../pagintaion/Pagination';
import { CategoryPickers } from '../pickers/Pickers';
import { Geometry } from '../geometry/Geometry';
import { useChangeCategory } from '../../hooks/useChangeCaterogy';

export const HistorySection = () => {
  const {
    activeCategory,
    rotation,
    showSpan,
    handleDotClick,
    handleNext,
    handlePrev,
  } = useChangeCategory();

  return (
    <section className="section">
      <Geometry
        rotation={rotation}
        showSpan={showSpan}
        activeCategory={activeCategory}
        handleDotClick={handleDotClick}
      />
      <Dates
        beginDate={MockData[activeCategory].startYear}
        endDate={MockData[activeCategory].endYear}
      />
      <Header />
      <CategoryPickers
        activeCategory={activeCategory}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <HistoryBlock data={MockData[activeCategory].data} />
      <Pagination
        total={MockData.length}
        activeIndex={activeCategory}
        onDotClick={handleDotClick}
      />
    </section>
  );
};
