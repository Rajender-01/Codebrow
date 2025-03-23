"use client"
import FooterLinkList from './FooterLinkList';
import FooterContactInfo from './FooterContactInfo';
import FooterNewsletter from './FooterNewsletter';
import { footerData } from '@/app/data/data';
import Link from 'next/link';

const Footer: React.FC = () => {
  const { about, quickLinks, categories, newsletter, copyrightInfo, policies } = footerData;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
  };

  return (
    <footer className="bg-white dark:bg-gray-900 w-full py-10 min-h-[400px] hidden md:flex">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full">
          <div className="min-h-[200px]">
            <h5 className="font-semibold mb-4 text-gray-900 dark:text-white">About</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{about?.text}</p>
            <div className="space-y-1">
              <FooterContactInfo label={about?.email?.label} value={about?.email?.address} isEmail />
              <FooterContactInfo label={about?.phone?.label} value={about?.phone?.number} />
            </div>
          </div>

          <div className="min-h-[200px]">
            <FooterLinkList title="Quick Links" links={quickLinks} />
          </div>

          <div className="min-h-[200px]">
            <FooterLinkList title="Category" links={categories} />
          </div>

          <div className="min-h-[200px]">
            <FooterNewsletter
              title={newsletter?.title}
              description={newsletter?.description}
              buttonText={newsletter?.buttonText}
              onSubmit={handleNewsletterSubmit}
            />
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <div className="mr-2 w-8 h-8 bg-black text-white rounded-full flex-center text-xs font-bold">C</div>
            <span className="font-bold text-gray-900 dark:text-white">{copyrightInfo?.logo}</span>
            <p className="text-sm text-gray-500 dark:text-gray-300 ml-2">
              © {copyrightInfo?.year} {copyrightInfo?.rightsText}
            </p>
          </div>

          <div className="flex space-x-6">
            {policies?.map((policy, index) => (
              <Link
                key={`policy-${index}`}
                href={policy?.url}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
              >
                {policy?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
