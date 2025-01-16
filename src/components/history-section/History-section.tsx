/* eslint-disable no-undef */
import React, { useState } from 'react';
import { MockData } from '../../data/mockData';
import { Dates } from '../dates/Dates';
import { Header } from '../header/Header';
import { HistoryBlock } from '../history-block/History-block';
import './history-section.scss';
import { Pagination } from '../pagintaion/Pagination';
import { CategoryPickers } from '../pickers/Pickers';
import { Geometry } from '../geometry/Geometry';

export const HistorySection = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);
  const [showSpan, setShowSpan] = useState(true);
  let timeout: NodeJS.Timeout;

  const showSpanFunc = () => {
    setShowSpan(false);
    timeout = setTimeout(() => {
      setShowSpan(true);
    }, 500);
  };

  const handleDotClick = (index: number) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    const newRotation = (index * 60) % 360;
    setRotation(newRotation);
    setActiveCategory(index);
    showSpanFunc();
  };

  const handleNext = () => {
    if (activeCategory >= MockData.length - 1) return;
    setActiveCategory((prev) => prev + 1);
    handleDotClick(activeCategory + 1);
  };

  const handlePrev = () => {
    if (activeCategory === 0) return;
    setActiveCategory((prev) => prev - 1);
    handleDotClick(activeCategory - 1);
  };

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
