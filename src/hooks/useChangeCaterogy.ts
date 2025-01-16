/* eslint-disable no-undef */
import { useState } from 'react';
import { MockData } from '../data/mockData';

export const useChangeCategory = () => {
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

  return {
    handleNext,
    handlePrev,
    handleDotClick,
    rotation,
    showSpan,
    activeCategory,
  };
};
