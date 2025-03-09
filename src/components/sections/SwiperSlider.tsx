"use client";
import React, { Suspense } from "react";
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
    <Suspense fallback={<div>Loading...</div>}>
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
                <div className="relative aspect-video w-full">
                  <Image
                    src={slide?.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={80}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              {slide?.title && (
                <div className="absolute inset-0 bg-black/50 flex-center">
                  <div>
                    <h2 className="text-white mb-2">{slide?.title}</h2>
                    <p className="text-white">{slide?.description}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </Suspense>
  );
};

export default SwiperSlider;
