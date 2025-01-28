import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import img1 from '/cimageLogo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <img
              src={img1} 
              alt="Cimage Logo"
              className="w-32 h-auto"
            />
          </div>
          {/* Social Media Links */}
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/cimage/"
              target="_blank" //this will open the tag in new browser
              rel="noopener noreferrer" //nooper nooreferrer help to not send data using header
              className="hover:text-blue-500 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://x.com/cimagecollege/status/1815641918337880127?mx=2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/cimagecollege/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/cimage/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/@cimagepatna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition duration-300"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy;  2025 Cimage College. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
