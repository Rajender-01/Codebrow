"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { navigationData } from "@/app/data/data";
import dynamic from "next/dynamic";
const ResponsiveHeader = dynamic(() => import("./ResponsiveHeader"), { ssr: false });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 95) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/70 shadow-lg" : "bg-black"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-white text-lg font-bold">Codebrow</span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigationData.length > 0 && navigationData?.map((item) => (
                <li key={item?.id}>
                  <a
                    href={item?.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                  >
                    {item?.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <ResponsiveHeader
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationData.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-md"
              >
                {item.name}
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
      )}
    </header>
  );
};

export default Header;