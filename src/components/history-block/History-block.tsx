/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './history-block.scss';
import gsap from 'gsap';
import { IHistoryBlock } from '../../types/history-block';
import { HistoryCard } from '../history-card/History-card';
import { NextArrow } from '../../shared/svg/next-arrow';
import { PrevArrow } from '../../shared/svg/prev-arrow';

interface HistoryBlockProps {
  data: IHistoryBlock[];
}

export const HistoryBlock: React.FC<HistoryBlockProps> = ({ data }) => {
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.inOut' },
      );
    }

    return () => {
      if (swiperRef.current) swiperRef.current.swiper.slideTo(0);
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
        });
      }
    };
  }, [data]);

  return (
    <div className="history-block" ref={containerRef}>
      <Swiper {...params} slidesPerView="auto" ref={swiperRef}>
        <div>
          <div className="swiper-button-next">
            <NextArrow />
          </div>
          <div className="swiper-button-prev">
            <PrevArrow />
          </div>
        </div>
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <HistoryCard
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
