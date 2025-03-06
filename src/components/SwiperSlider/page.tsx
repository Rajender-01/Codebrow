"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/app/styles/globals.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { slideData } from "@/app/data/data";

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
      {slideData.length > 0 &&
        slideData?.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide?.image && (
              <Image
                loading="lazy"
                src={slide?.image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            )}
            {slide?.title && (
              <div className="absolute inset-0 m-4 bg-black/50 flex items-center justify-center">
                <div>
                  <h2 className="text-white mb-2">{slide?.title}</h2>
                  <p className="text-white">{slide?.description}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperSlider;
