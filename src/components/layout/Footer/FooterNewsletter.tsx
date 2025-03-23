// components/FooterNewsletter.tsx
import React from 'react';

interface FooterNewsletterProps {
  title: string;
  description: string;
  buttonText: string;
  onSubmit: (e: React.FormEvent) => void;
}

const FooterNewsletter: React.FC<FooterNewsletterProps> = ({ title, description, buttonText, onSubmit }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
      <h5 className="font-semibold mb-2 text-gray-900 dark:text-white">{title}</h5>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <form onSubmit={onSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 text-sm"
            aria-label="Email for newsletter"
            required
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
