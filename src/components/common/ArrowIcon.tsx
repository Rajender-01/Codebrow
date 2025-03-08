import React from "react";

const ArrowIcon = () => {
  return (
    <svg
      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  );
};

export default ArrowIcon;
