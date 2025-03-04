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
      <SwiperSlide className="bg-black">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-black/80">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-black">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-black/80">Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
