import { Link } from 'react-router-dom';
import logo from '../assets/phaenicio.svg';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container fade-in">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="badge">
            Introducing Digital Precision
          </div>
          
          <h1 className="hero-title">
            Build with <br /> Intelligent Design
          </h1>
          
          <p className="hero-subtitle">
            Phaenicio builds precision-driven software, AI systems, and modern digital infrastructure inspired by clarity, speed, and intelligent design.
          </p>
          
          <div className="hero-actions">
            <Link to="/about" className="cta-button">
              Get Started
            </Link>
            <Link to="/services" className="secondary-button">
              View Services
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <img src={logo} alt="Phaenicio Logo" className="hero-logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
