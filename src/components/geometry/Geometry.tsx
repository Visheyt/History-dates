/* eslint-disable no-unused-vars */
import React from 'react';
import { MockData } from '../../data/mockData';
import './geometry.scss';
import { createDots } from '../../utils/createDots';

type GeometryProps = {
  rotation: number;
  showSpan: boolean;
  activeCategory: number;
  handleDotClick: (index: number) => void;
};

export const Geometry: React.FC<GeometryProps> = ({
  rotation,
  showSpan,
  activeCategory,
  handleDotClick,
}) => {
  const dots = createDots({ numDots: 6, width: 536, height: 530 });

  return (
    <div className="section__geometry">
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
              className={`dot dot-${index + 1} ${index === activeCategory ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            >
              {index + 1}
            </button>
            {showSpan && index === activeCategory ? (
              <span>{MockData[activeCategory].name}</span>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
