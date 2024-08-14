'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    
    <div className="flex bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100  filter  justify-between items-center md:gap-20 max-w-full px-3 md:py-6 sticky  top-0 left-0 right-0 backdrop-blur-lg z-50  border-b border-black/20  ">
      
        {/* Left side: Menu, Locations, To-go Kit */}
       <ul className="flex  flex-col md:flex-row items-center  justify-center gap-6">
        <li className="bg-orange-500 p-3 rounded-xl text-white border-2  font-bold border-transparent hover-shine">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="hover:cursor-pointer transition hover:bg-opacity-50 bg-opacity-0 font-bold hover:bg-orange-500 hover-shine bg-white p-3 rounded-xl text-black">
            <Link href="/locations">Locations</Link>
          </li>
          <li className="hover:cursor-pointer transition hover:bg-opacity-50 bg-opacity-0 font-bold hover:bg-orange-500 bg-white p-3 rounded-xl text-black">
            <Link href="/togo-kit">To-go Kit</Link>
          </li>
        </ul>
        
        {/* Center: Logo and Gator Nutrition */}
        <ul className="flex  flex-col md:flex-row items-center  justify-center gap-6">
          <li className="text-black text-2xl md:text-3xl font-extrabold"><Link href="/">Gator Nutrition</Link></li>
          <li className="  justify-center  top-0 md:top-14 items-center gap-2 absolute left-1/2 transform -translate-x-1/2 ">
          
          <Image src="/photos/file.png" alt="Logo" width={100} height={50}></Image>
      
          </li>
          </ul>
    
        
        {/* Right side: About Us, Contact Us, Events */}
        <ul className=" flex flex-col md:flex-row items-center justify-center gap-6 ">
          <li className="hover:cursor-pointer transition font-bold hover:bg-opacity-50 hover:bg-orange-500 bg-opacity-0 bg-red p-3 rounded-xl text-black">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="hover:cursor-pointer transition font-bold hover:bg-opacity-50 hover:bg-orange-500 bg-opacity-0 bg-white p-3 rounded-xl text-black">
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li className="hover:cursor-pointer transition font-bold hover:bg-opacity-50 hover:bg-orange-500 bg-opacity-0 bg-white p-3 rounded-xl text-black">
            <Link href="/events">Events</Link>
          </li>
        </ul>
        
      </div>
      
  );
};

export default Navbar;
