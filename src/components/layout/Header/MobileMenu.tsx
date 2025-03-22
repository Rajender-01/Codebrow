import { MobileMenuProps } from '@/app/types';
import React from 'react';

const MobileMenu: React.FC<MobileMenuProps> = ({ navigationData }) => {
  return (
    <div className="md:hidden bg-gray-900">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigationData?.length > 0 &&
          navigationData?.map((item) => (
            <a
              key={item?.id}
              href={item?.path}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-md"
            >
              {item?.name}
            </a>
          ))}
        <a
          href="/contact"
          className="block px-3 py-2 mt-4 text-center text-base font-medium bg-yellow-400 hover:bg-yellow-500 text-black rounded-md"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
