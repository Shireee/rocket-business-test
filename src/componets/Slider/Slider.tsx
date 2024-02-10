import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import Slide from '../Slide/Slide';


const Slider = () => {
    return (
        <Swiper
          pagination={{type: 'fraction'}}
          navigation={true}
          modules={[Pagination, Navigation]}
          loop={true}
          className="slider">
          <SwiperSlide><Slide/></SwiperSlide>
          <SwiperSlide><Slide/></SwiperSlide>
          <SwiperSlide><Slide/></SwiperSlide>
          <SwiperSlide><Slide/></SwiperSlide>
        </Swiper>
    );
}
 
export default Slider;