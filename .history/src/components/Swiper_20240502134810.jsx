import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

SwiperCore.use([EffectCoverflow, Navigation]);

const Swiper3DCoverflow = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <Swiper {...params}>
      <SwiperSlide>
        <img src="" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="image2.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="image3.jpg" alt="Slide 3" />
      </SwiperSlide>
      
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default Swiper3DCoverflow;
