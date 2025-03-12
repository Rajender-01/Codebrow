import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  link: string;
  className?: string;
}

const Button = ({ label, link, className }: ButtonProps) => {
  return (
    <Link href={link} className={`${className} bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 px-4 rounded-md transition-colors duration-200`}>
      {label}
    </Link>
  );
};

export default Button;
