import React from "react";
import { featuredBlogs } from "@/app/data/data";
import BlogsCard from "../common/BlogsCard";
import { NewsCardProps } from "@/app/types";

const FeaturedBlogPosts = () => {
  const renderBlogCard = (blogs: NewsCardProps) => (
    <BlogsCard key={blogs.id} {...blogs} />
  );
  return (
    <section className="w-full px-4 py-24 text-white bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-15 md:grid-cols-3">
          {featuredBlogs?.map(renderBlogCard)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogPosts;
