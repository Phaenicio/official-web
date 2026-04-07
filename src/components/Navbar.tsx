import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logoLong from '../assets/phaenicio-long.svg';
import logoShort from '../assets/phaenicio.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[90px] glass flex items-center justify-between px-[5%] z-50 fade-in">
      <Link to="/" className="flex items-center" onClick={closeMenu}>
        <picture>
          <source media="(max-width: 768px)" srcSet={logoShort} />
          <img src={logoLong} alt="Phaenicio" className="h-[80px] w-auto transition-all duration-300 hover:scale-[1.02] hover:opacity-90" />
        </picture>
      </Link>

      <div className={`flex gap-8 items-center max-md:fixed max-md:top-[90px] max-md:left-0 max-md:w-full max-md:h-[calc(100vh-90px)] max-md:bg-bg max-md:flex-col max-md:justify-center max-md:gap-12 max-md:transition-transform max-md:duration-300 ${isOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'}`}>
        {[
          { to: "/", label: "Home", end: true },
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" },
          { to: "/user-guide", label: "User Guide" }
        ].map((link) => (
          <NavLink 
            key={link.to}
            to={link.to} 
            end={link.end}
            className={({ isActive }) => `text-sm font-medium transition-colors duration-200 max-md:text-2xl ${isActive ? 'text-text-h' : 'text-text hover:text-text-h'}`}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        
        <a 
          href="https://github.com/phaenicio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors duration-200 text-text hover:text-text-h max-md:text-2xl"
          onClick={closeMenu}
        >
          GitHub
        </a>

        <a href="#" className="flex items-center bg-primary text-white no-underline text-sm font-semibold rounded-lg overflow-hidden transition-all duration-200 border border-white/10 h-[42px] cursor-pointer hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(30,58,138,0.25)] max-md:h-[54px] max-md:text-lg max-md:w-4/5 max-md:justify-center max-md:rounded-xl" onClick={closeMenu}>
          <span className="px-4 flex items-center h-full">Try Zosterix</span>
          <span className="w-px h-5 bg-white/15"></span>
          <span className="px-2.5 flex items-center justify-center h-full text-lg">
            <FiChevronDown />
          </span>
        </a>
      </div>

      <button className="hidden max-md:block bg-none border-none text-text-h text-2xl cursor-pointer" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;

