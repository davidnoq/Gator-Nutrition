'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: '/menu', label: 'Menu' },
    
    { href: '/togo-kit', label: 'To-go Kit' },
    { href: '/about', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    
  ];

  return (
    <div className="sticky top-0 px-4 py-6 z-50 border-b border-black/20 backdrop-blur-lg bg-white bg-opacity-60">
      {/* --- header row / column --- */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-5 lg:gap-0">
        {/* logo */}
        <div className="h-10 mb-4 flex items-center">
          <Link href="/">
            <Image
              src="/photos/file.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain h-full w-auto"
            />
          </Link>
        </div>

        {/* slogan */}
        <div className="slogan text-base text-center text-black italic font-bold leading-tight">
          Fueling Gators,<br />
          One Drink at a Time.
        </div>

        {/* hamburger */}
        <button
          onClick={toggleMobileMenu}
          className="hamburger-btn "
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* desktop links */}
        <ul className="nav-links gap-4 items-center text-sm font-semibold">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="px-3 py-2 rounded-xl transition hover:bg-orange-500 hover:text-white text-black"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* --- mobile dropdown --- */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden flex flex-col text-sm font-semibold">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="w-full text-center">
              <Link
                href={href}
                className="block px-3 py-2 rounded-xl transition hover:bg-orange-500 hover:text-white text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* custom breakpoint: 912 px */}
      <style jsx>{`
        /* links hidden by default (mobile) */
        .nav-links {
          display: none;
        }
          

        /* hamburger visible by default (mobile) */
        .hamburger-btn {
          display: block;
        }

        /* show links & hide hamburger once ≥ 912 px */
        @media (min-width: 912px) {
          .nav-links {
            display: flex;
          }
            
          .hamburger-btn {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
