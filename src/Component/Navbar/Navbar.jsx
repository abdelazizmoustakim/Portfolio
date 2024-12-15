import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const links = [
  { id: 1, name: "TEACHING", link: '/Teachings' },
  { id: 2, name: "WRITING", link: "/Writing" },
  { id: 3, name: "BOOKS", link: "/Books"},
  { id: 4, name: "PROJECTS", link: "/Projects"},
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Ensure dark mode is always enabled on initial load
  useEffect(() => {
    document.documentElement.classList.add('dark'); // Apply dark mode to html element
  }, []);

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 dark:text-white transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 h-16">
        {/* Left Section: Name with responsive shrinking effect */}
        <Link className="flex items-center h-full cursor-pointer" to="/">
          <ReactTypingEffect
            text={["ABDELAZIZ MOUSTAKIM"]}
            typingDelay={1}
            speed={60}
            eraseDelay={999999}
            onComplete={(self) => self.cursor.remove()}
            className="font-['Montserrat'] text-black font-semibold tracking-widest text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl uppercase flex items-center px-3 transition-all duration-300 hover:text-primary dark:text-gray-100 dark:hover:text-primary cursor-pointer"
          />
        </Link>

        {/* Right Section: Links (Hidden on mobile) */}
        <div className="hidden lg:flex space-x-8 items-center lg:text-1xl font-semibold">
          {links.map((linkItem) => (
            <Link
              key={linkItem.id}
              to={linkItem.link}
              className="text-black dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 uppercase py-2 px-4 rounded-lg"
            >
              {linkItem.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black dark:text-white p-2">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible only on smaller screens) */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 py-4 dark:bg-gray-900">
          <ul className="space-y-4">
            {links.map((linkItem) => (
              <li key={linkItem.id}>
                <Link
                  to={linkItem.link}
                  className="block text-black font-semibold tracking-widest text-sm uppercase py-2 border-b border-gray-300 hover:text-primary dark:text-gray-50 dark:hover:text-primary transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {linkItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;