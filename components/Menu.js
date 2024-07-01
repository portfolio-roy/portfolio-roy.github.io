import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-100 bg-opacity-80 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold no-underline hover:no-underline">
                <h4 className="no-underline hover:no-underline text-slate-900 hover:text-slate-800">Utsargo Roy</h4>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium no-underline hover:no-underline">
              Home
            </Link>
            <Link href="/#about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium no-underline hover:no-underline">
              About
            </Link>
            <Link href="/#portfolio" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium no-underline hover:no-underline">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium no-underline hover:no-underline">
              Contact
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium no-underline hover:no-underline">
            Home
          </Link>
          <Link href="/#about" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium no-underline hover:no-underline">
            About
          </Link>
          <Link href="/#portfolio" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium no-underline hover:no-underline">
            Portfolio
          </Link>
          <Link href="/#contact" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium no-underline hover:no-underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
