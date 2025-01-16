import React from 'react';
import './dates.scss';

interface IDatesProps {
  beginDate: string;
  endDate: string;
}
export const Dates: React.FC<IDatesProps> = ({ beginDate, endDate }) => {
  return (
    <div className="dates">
      <h2 className="dates__begin-date">{beginDate}</h2>
      <h2 className="dates__end-date">{endDate}</h2>
    </div>
  );
};
