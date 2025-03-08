import Image from "next/image";
import React from "react";
import StatIcon from "./StatIcon";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

interface NewsCardProps {
  title: string;
  image: string;
  category: string;
  likes: number;
  views: number;
  slug: string;
  isFeatured?: boolean;
}

const BlogsCard: React.FC<NewsCardProps> = ({
  title,
  image,
  category,
  likes,
  views,
  slug,
  isFeatured = false,
}) => {
  return (
    <div
      className={`flex flex-col ${isFeatured ? "pb-8 mb-8 border-b border-gray-800" : ""}`}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
        <Image
          src={image}
          alt={title}
          layout="fill"
          sizes="(max-width: 768px) 100vw, 512px"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
          priority={true}
          loading="lazy"
          quality={80}
        />
      </div>
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <div className="mb-4 text-sm text-gray-400">{category}</div>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4">
          <StatIcon icon="like" value={likes} />
          <StatIcon icon="view" value={views} />
        </div>
        <Link
          href={slug}
          className="inline-flex items-center text-sm font-medium hover:underline group"
        >
          Read More
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
