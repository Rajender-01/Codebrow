// components/FooterLinkList.tsx
import { FooterLink } from '@/app/types';
import Link from 'next/link';

interface FooterLinkListProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ title, links }) => {
  return (
    <div>
      <h5 className="font-semibold mb-4 text-gray-900 dark:text-white">{title}</h5>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={`${title}-${index}`}>
            <Link
              href={link.url}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
