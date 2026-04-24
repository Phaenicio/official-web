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
    <nav className="fixed top-0 left-0 w-full h-[78px] flex items-center justify-between px-[5%] z-50 fade-in overflow-hidden border-b border-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2f343b] via-[#c9ced6] to-[#ffffff]"></div>
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_26px),repeating-linear-gradient(0deg,rgba(17,24,39,0.08)_0px,rgba(17,24,39,0.08)_1px,transparent_1px,transparent_20px)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.22)_0%,rgba(15,23,42,0.06)_38%,rgba(255,255,255,0.08)_100%)]"></div>

      <Link to="/" className="flex items-center relative z-10" onClick={closeMenu}>
        <picture>
          <source media="(max-width: 768px)" srcSet={logoShort} />
          <img src={logoLong} alt="Phaenicio" className="h-[64px] w-auto transition-all duration-300 hover:scale-[1.01] hover:opacity-95 max-md:h-[56px] drop-shadow-[0_4px_8px_rgba(15,23,42,0.24)]" />
        </picture>
      </Link>

      <div id="mobile-navigation" className={`flex gap-6 items-center relative z-10 max-md:fixed max-md:top-[78px] max-md:left-0 max-md:w-full max-md:h-[calc(100vh-78px)] max-md:bg-[linear-gradient(140deg,#2f343b_0%,#d6dae0_55%,#ffffff_100%)] max-md:backdrop-blur-sm max-md:flex-col max-md:justify-center max-md:gap-9 max-md:transition-transform max-md:duration-300 ${isOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'}`}>
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
            className={({ isActive }) => `text-sm tracking-wide font-semibold transition-colors duration-200 max-md:text-xl ${isActive ? 'text-[#0b1020]' : 'text-[#273245] hover:text-[#0b1020]'}`}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        
        <a 
          href="https://github.com/phaenicio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm tracking-wide font-semibold transition-colors duration-200 text-[#273245] hover:text-[#0b1020] max-md:text-xl"
          onClick={closeMenu}
        >
          GitHub
        </a>

        <a href="#" className="flex items-center bg-primary text-white no-underline text-sm font-semibold rounded-lg overflow-hidden transition-all duration-200 border border-white/10 h-10 cursor-pointer hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(30,58,138,0.22)] max-md:h-[48px] max-md:text-base max-md:w-4/5 max-md:justify-center" onClick={closeMenu}>
          <span className="px-3.5 flex items-center h-full">Try Zosterix</span>
          <span className="w-px h-5 bg-white/15"></span>
          <span className="px-2.5 flex items-center justify-center h-full text-base">
            <FiChevronDown />
          </span>
        </a>
      </div>

      <button className="hidden max-md:block relative z-10 bg-none border-none text-[#0b1020] text-2xl cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="mobile-navigation">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;

