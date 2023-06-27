// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 ml-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
        </div>
        <div className="text-sm mt-4 md:mt-0 text-gray-400 mr-8">
          &copy; {new Date().getFullYear()} Customized bites All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
