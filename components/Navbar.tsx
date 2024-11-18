'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center max-container padding-container relative z-30 py-5">
      {/* QWC Logo on the left */}
      <Link href="/">
        <Image
          src="/circlelogoQWC.png"
          alt="logo"
          width={100}
          height={100}
          className="transform transition-transform duration-500 hover:-rotate-12"
        />
      </Link>

      {/* Wrapper for Nav Items - Centered on Large Screens, Stacked on Small */}
      <div className="flex-grow flex justify-center items-center">
        <ul className="hidden lg:flex gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-MainColorLightOrange flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold scroll-smooth focus:scroll-auto text-base md:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      {/* BBB Seal on the right - Visible on all screen sizes */}
      <a
        href="https://www.bbb.org/us/il/chicago/profile/construction/quality-work-construction-corp-0654-1000038834/#sealclick"
        target="_blank"
        rel="nofollow"
        className="absolute top-1/2 right-5 transform -translate-y-1/2"
      >
        <img
          src="https://seal-chicago.bbb.org/seals/darkgray-seal-293-61-whitetxt-bbb-1000038834.png"
          alt="Quality Work Construction Corp. BBB Business Review"
          style={{ border: '0' }}
        />
      </a>

      {/* Mobile Hamburger Icon (Large and visible on small to medium screens) */}
      <button
        className="lg:hidden flex items-center justify-center flex-col space-y-2 text-3xl"
        onClick={toggleMobileMenu}
      >
        {/* Hamburger icon */}
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button (X) */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-2xl text-black"
        >
          &times;
        </button>

        {/* Mobile Links */}
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-MainColorLightOrange text-xl py-2 cursor-pointer transition-all hover:font-bold scroll-smooth"
            onClick={() => setIsMobileMenuOpen(false)} // Close the menu after clicking a link
          >
            {link.label}
          </Link>
        ))}

      </div>
    </nav>
  );
};

export default Navbar;
