"use client"
import SwiperSlider from "@/components/sections/SwiperSlider";
import dynamic from "next/dynamic";
import React from "react";

const FeaturedBlogPosts = dynamic(() => import('@/components/sections/FeaturedBlogPosts'), {
  loading: () => <div className="flex-center">Loading...</div>,
  ssr: false
});

const Newsletter = dynamic(() => import('@/components/sections/Newsletter'), {
  loading: () => <div className="flex-center">Loading...</div>,
  ssr: false
});

const Page = () => {
  return (
    <>
      <SwiperSlider />
      <FeaturedBlogPosts />
      <Newsletter />
    </>
  );
};

export default Page;
