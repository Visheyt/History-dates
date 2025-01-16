/* eslint-disable no-undef */
import React, { useState } from 'react';
import { MockData } from '../../data/mockData';

import { Dates } from '../dates/Dates';
import { Header } from '../header/Header';
import { HistoryBlock } from '../history-block/History-block';

import './history-section.scss';
import { Pagination } from '../pagintaion/pagination';
import { CategoryPickers } from '../pickers/Pickers';

export const HistorySection = () => {
  const [category, setCategory] = useState<number>(0);
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
    setCategory(index);
    showSpanFunc();
  };

  const handleNext = () => {
    if (category >= MockData.length - 1) return;
    setCategory((prev) => prev + 1);
    handleDotClick(category + 1);
  };

  const handlePrev = () => {
    if (category === 0) return;
    setCategory((prev) => prev - 1);
    handleDotClick(category - 1);
  };

  const numDots = 6;
  const radiusX = 536 / 2;
  const radiusY = 530 / 2;
  const dots = Array.from({ length: numDots }, (_, i) => {
    const angle = (i + 1) * 10 * (Math.PI / 30);
    const x = radiusX * Math.cos(angle);
    const y = radiusY * Math.sin(angle);
    return { x, y };
  });

  return (
    <section className="section">
      <div className="section__lines">
        <div className="horizontal" />
        <div className="vertical" />
        <div
          className="circle"
          style={{
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            zIndex: 10,
          }}
        >
          {dots.map((dot, index) => (
            <div
              className="button-container"
              style={{
                position: 'absolute',
                left: `calc(50% + ${dot.x}px)`,
                top: `calc(50% - ${dot.y}px)`,
                transform: `translate(-50%,-50%) rotate(${-rotation}deg) `,
              }}
            >
              <button
                type="button"
                key={dot.x}
                className={`dot dot-${index + 1} ${index === category ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              >
                {index + 1}
              </button>
              {showSpan && index === category ? (
                <span>{MockData[category].name}</span>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      </div>
      <Dates
        beginDate={MockData[category].startYear}
        endDate={MockData[category].endYear}
      />
      <Header />

      <CategoryPickers
        activeCategory={category}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <HistoryBlock data={MockData[category].data} />
      <Pagination
        total={MockData.length}
        activeIndex={category}
        onDotClick={handleDotClick}
      />
    </section>
  );
};
