
import React from "react";
import { Animate } from "./ui/motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <Animate animation="fade-up" delay={100}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Alex Johnson</h3>
              <p className="text-gray-600 mb-6">
                A passionate computer science student specializing in web development, 
                machine learning, and software engineering.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </Animate>

          <Animate animation="fade-up" delay={200}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </Animate>

          <Animate animation="fade-up" delay={300}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:alex@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    alex@example.com
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+11234567890" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    +1 (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600">
                    San Francisco, California
                  </span>
                </li>
              </ul>
            </div>
          </Animate>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Alex Johnson. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
