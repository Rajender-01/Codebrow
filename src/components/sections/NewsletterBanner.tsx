import Link from "next/link";
import React from "react";
import ArrowIcon from "../common/ArrowIcon";

const NewsletterBanner = () => {
  return (
    <Link
      href={"/"}
      className="w-full flex-center underline md:no-underline container mx-auto h-auto text-[var(--gray-font-color)] py-4 text-center group "
    >
      <p>
        Subscribe to our newsletter to get the latest updates and promotions
      </p>
      <ArrowIcon
        className="hidden md:block"
      />
    </Link>
  );
};

export default NewsletterBanner;
