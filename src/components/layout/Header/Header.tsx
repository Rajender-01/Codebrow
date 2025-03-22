"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { navigationData } from "@/app/data/data";
import Button from "@/components/common/Button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResponsiveHeaderLoaded, setIsResponsiveHeaderLoaded] = useState(false);
  const responsiveHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 95);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsResponsiveHeaderLoaded(true);
          observer.unobserve(responsiveHeaderRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = responsiveHeaderRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const ResponsiveHeader = isResponsiveHeaderLoaded
    ? React.lazy(() => import("./ResponsiveHeader"))
    : null;

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/70 shadow-lg" : "bg-black"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-between h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-white text-lg font-bold">Codebrow</span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigationData.length > 0 &&
                navigationData?.map((item) => (
                  <li key={item?.id}>
                    <Link
                      href={item?.path}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button label={"Contact Us"} link={"/contact"} />
          </div>

          {/* Mobile Menu Button */}
          {<div ref={responsiveHeaderRef} className="md:hidden">
            {ResponsiveHeader && (
              <React.Suspense fallback={<div>Loading...</div>}>
                <ResponsiveHeader
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
              </React.Suspense>
            )}
          </div>}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu navigationData={navigationData} />}
    </header>
  );
};

export default Header;
