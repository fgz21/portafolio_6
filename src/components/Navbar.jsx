import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white w-full top-0 z-50shadow-lg font-sans">
      <div className="container mx-auto px-4 py-3 flex justify-around items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-sky-500">Francisco</span>
            <span className="text-gray-300 ml-2">Gonzalez</span>
          </h1>
        </div>

        {/* Menú Hamburguesa (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú de Navegación (Desktop) */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-sky-500 transition duration-300 font-medium py-2 border-b-2 border-transparent hover:border-sky-500 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-sky-500 transition duration-300 font-medium py-2 border-b-2 border-transparent hover:border-sky-500 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-sky-500 transition duration-300 font-medium py-2 border-b-2 border-transparent hover:border-sky-500 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú de Navegación (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-white hover:text-sky-500 transition duration-300 font-medium py-2 border-b-2 border-transparent hover:border-sky-500 cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-white hover:text-sky-500 transition duration-300 font-medium py-2 border-b-2 border-transparent hover:border-sky-500 cursor-pointer"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-white hover:text-sky-500 transition duration-300 font-medium py-2 border-b-2 border-transparent hover:border-sky-500 cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;