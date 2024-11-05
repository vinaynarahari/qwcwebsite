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
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/circlelogoQWC.png"
          alt="logo"
          width={100}
          height={100}
          className="transform transition-transform duration-500 hover:-rotate-12"
        />
      </Link>

      {/* Desktop menu */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-MainColorLightOrange flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold scroll-smooth focus:scroll-auto"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Mobile Hamburger Icon */}
      <button
        className="lg:hidden flex items-center justify-center flex-col space-y-2"
        onClick={toggleMobileMenu}
      >
        {/* Hamburger lines */}
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

        {/* Optional: Link to Home or other page */}
        <Link href="/" className="mt-6 text-xl text-MainColorLightOrange">
          Go back to Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
