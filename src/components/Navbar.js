"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white font-bold text-xl">Logo</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </span>
              </Link>
              <Link href="/services">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </span>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </span>
          </Link>
          <Link href="/services">
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
