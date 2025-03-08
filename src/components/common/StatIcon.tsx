import React from "react";

interface StatIconProps {
  icon: string;
  value: number;
}

const StatIcon: React.FC<StatIconProps> = ({ icon, value }) => {
  const iconPath =
    icon === "like" ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      ></path>
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
    );

  return (
    <div className="flex items-center">
      <svg
        className="w-5 h-5 mr-1.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {iconPath}
      </svg>
      <span>{value}k</span>
    </div>
  );
};

export default StatIcon;
