import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import amazon_vector from '../assets/brands/amazon_vector.png';
import amazon from '../assets/brands/amazon.png';
import casio from '../assets/brands/casio.png';
import moonstar from '../assets/brands/moonstar.png';
import randstad from '../assets/brands/randstad.png';
import star from '../assets/brands/star.png';
import start_people from '../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';

const brandLogos= [amazon_vector, amazon, casio, moonstar, randstad, star, start_people];

const Brands = () => {
    return (
    <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
            brandLogos.map(logo=> <SwiperSlide><img src={logo} alt="" /></SwiperSlide>)
        }
      </Swiper>
    );
};

export default Brands;