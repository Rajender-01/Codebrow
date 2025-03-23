import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // For handling actions like form submit
  isSubmitting?: boolean; // To handle loading state for submit buttons
  className?: string;
  disabled?: boolean; // To disable the button when necessary
}

const Button = ({
  label,
  link,
  onClick,
  isSubmitting,
  className,
  disabled,
}: ButtonProps) => {
  const commonClasses =
    "bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 px-4 rounded-md transition-colors duration-200";

  return link ? (
    // Link button
    <Link
      href={link}
      className={`${className} ${commonClasses}`}
    >
      {label}
    </Link>
  ) : (
    // Regular button (for form submission, etc.)
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isSubmitting}
      className={`${className} ${commonClasses} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </span>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
