import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logoLong from '../assets/phaenicio-long.svg';
import logoShort from '../assets/phaenicio.svg';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar fade-in">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <picture>
          <source media="(max-width: 768px)" srcSet={logoShort} />
          <img src={logoLong} alt="Phaenicio" />
        </picture>
      </Link>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
        <NavLink 
          to="/user-guide" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          User Guide
        </NavLink>
        <a 
          href="https://github.com/phaenicio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-item"
          onClick={closeMenu}
        >
          GitHub
        </a>

        <a href="#" className="btn-try-zosterix" onClick={closeMenu}>
          <span className="btn-label">Try Zosterix</span>
          <span className="btn-divider"></span>
          <span className="btn-icon">
            <FiChevronDown />
          </span>
        </a>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;

