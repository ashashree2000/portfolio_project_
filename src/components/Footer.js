import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <span className="text-white font-bold text-xl">Your Name</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-400 hover:text-white transition-colors duration-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-400 hover:text-white transition-colors duration-300" />
            </Link>
            <Link
              href="https://twitter.com/your-twitter-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-400 hover:text-white transition-colors duration-300" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
