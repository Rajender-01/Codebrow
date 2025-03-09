import React from "react";

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="var(--yellow)"
      className={`size-4 sm:size-5 rotate-45 p-0.5 ml-1.5 transition-all duration-300 lg:group-hover:translate-x-0.5 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
};

export default ArrowIcon;
