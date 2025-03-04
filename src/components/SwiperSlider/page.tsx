"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/app/styles/globals.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="bg-red-500">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-blue-500">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-green-500">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-teal-500">Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
