import React from "react";

const Footer = () => {
  return (
    <footer className="bg-fuchsia-400 text-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              odio eu velit maximus vulputate ut nec magna.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Latest Events</h2>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Art Exhibition - May 2024
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cultural Festival - June 2024
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Poetry Reading - July 2024
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Music Concert - August 2024
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
            <div className="flex items-center">
              <a href="#" className="text-xl mr-4 hover:text-gray-400">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="text-xl mr-4 hover:text-gray-400">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#" className="text-xl mr-4 hover:text-gray-400">
                <i className="fab fa-instagram-square"></i>
              </a>
              <a href="#" className="text-xl mr-4 hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-youtube-square"></i>
              </a>
            </div>
          </div>
        </div>
        <h6 className="border-gray-700 my-8"></h6>
        <div className="text-center text-sm">
          &copy; 2024 Art & Culture. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
