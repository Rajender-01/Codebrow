"use client"
import SwiperSlider from "@/components/sections/SwiperSlider";
import dynamic from "next/dynamic";
import React from "react";

const FeaturedBlogPosts = dynamic(() => import('@/components/sections/FeaturedBlogPosts'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const Page = () => {
  return (
    <>
      <SwiperSlider />
      <FeaturedBlogPosts />
    </>
  );
};

export default Page;
