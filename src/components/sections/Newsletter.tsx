"use client"
import { NewsletterProps } from '@/app/types';
import React, { useState } from 'react';
import Button from '../common/Button';
import { newsletterData } from '@/app/data/data';

const Newsletter: React.FC<NewsletterProps> = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | null }>({
    text: '',
    type: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));

      // Success case
      setMessage({ text: newsletterData?.messages?.success, type: 'success' });
      setEmail('');
    } catch {
      setMessage({ text: newsletterData?.messages?.error, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full dark:bg-[var(--dark-gray)]">
      <div className="container mx-auto py-10 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Content Container */}
          <div className="text-center text-[var(--dark-gray)] dark:text-[var(--white)]">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{newsletterData?.title}</h2>
            <p className="text-sm md:text-base mb-6 text-gray-600 dark:text-[var(--gray-font-color)]">
              {newsletterData?.description}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg text-sm md:text-base bg-white dark:bg-[var(--light-gray)] text-gray-800 dark:text-[var(--white)] border-gray-200 dark:border-[var(--light-gray)] focus:ring-[var(--yellow)] border focus:outline-none focus:ring-2 transition-all"
                  required
                  aria-label="Email for newsletter"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-[var(--gray-font-color)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>

              <Button
                label={isSubmitting ? 'Submitting...' : 'Subscribe'}
                onClick={handleSubmit}
                isSubmitting={isSubmitting}
                disabled={isSubmitting}
              />
            </form>

            {/* Status Message */}
            {message.type && (
              <div className={`mt-4 text-sm ${message.type === 'success'
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400'
                }`}>
                {message.text}
              </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-6 text-xs text-gray-500 dark:text-[var(--gray-font-color)]">
              <p>{newsletterData?.trustIndicators?.privacy}</p>
              <div className="flex items-center justify-center mt-3 space-x-4">
                {newsletterData?.trustIndicators?.items?.map((item, index) => (
                  <span key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;