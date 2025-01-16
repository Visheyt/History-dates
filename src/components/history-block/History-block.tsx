import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import './history-block.scss';
import { IHistoryBlock } from '../../types/history-block';
import { HistoryCard } from '../history-card/History-card';
import { NextArrow } from '../../shared/svg/next-arrow';
import { PrevArrow } from '../../shared/svg/prev-arrow';

export const HistoryBlock = ({ data }: { data: IHistoryBlock[] }) => {
  const params = {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    modules: [Navigation],
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
    },
  };

  return (
    <div className="history-block">
      <Swiper {...params} slidesPerView="auto">
        <div>
          <div className="swiper-button-next">
            <NextArrow />
          </div>
          <div className="swiper-button-prev">
            <PrevArrow />
          </div>
        </div>
        {data.map((el) => (
          <SwiperSlide>
            <HistoryCard
              key={el.id}
              year={el.year}
              description={el.description}
              id={el.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
