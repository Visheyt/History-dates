import React from 'react';
import { IHistoryBlock } from '../../types/history-block';
import './history-card.scss';

export const HistoryCard: React.FC<IHistoryBlock> = ({
  year: header,
  description,
}) => {
  return (
    <div className="history-card">
      <header>{header}</header>
      <p>{description}</p>
    </div>
  );
};
