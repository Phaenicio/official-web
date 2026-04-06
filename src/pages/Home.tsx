import { Link } from 'react-router-dom';
import logo from '../assets/phaenicio.svg';
import automatedImg from '../assets/automated-pana.svg';
import biasImg from '../assets/bias-elimination-pana.svg';
import analyticsImg from '../assets/Setup Analytics-rafiki.svg';
import documentationImg from '../assets/Online document-bro.svg';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge">
              Powered by Advanced Architecture & AI
            </div>
            <h1 className="hero-title">
              Precision-Driven <br /> Digital Infrastructure.
            </h1>
            <p className="hero-subtitle">
              Phaenicio builds precision-driven software, AI systems, and modern digital infrastructure inspired by clarity, speed, and intelligent design.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="cta-button">
                Core Engine
              </Link>
              <a href="#why-phaenicio" className="secondary-button">
                Why Phaenicio?
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={logo} alt="Phaenicio Logo" className="hero-logo" />
          </div>
        </div>
      </section>

      {/* Why Phaenicio? Section */}
      <section id="why-phaenicio" className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Phaenicio?</h2>
          <p className="section-subtitle">
            Built on a robust orchestrator and intelligent AI engine, we deliver a seamless digital experience.
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-text">
              <h3>Intelligent Automation</h3>
              <p>Instantly process, route, and analyze data using our advanced AI intelligence engine.</p>
            </div>
            <div className="feature-illustration">
              <img src={automatedImg} alt="Automated Screening" />
            </div>
          </div>

          <div className="feature-card reverse">
            <div className="feature-illustration">
              <img src={biasImg} alt="Bias Elimination" />
            </div>
            <div className="feature-text">
              <h3>Bias Elimination</h3>
              <p>Our AI models are trained to focus purely on optimal outcomes and objective data, ensuring fair execution.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-text">
              <h3>Real-time Operations</h3>
              <p>Visualize performance pipelines, system health, and critical metrics with our comprehensive dashboards.</p>
            </div>
            <div className="feature-illustration">
              <img src={analyticsImg} alt="Real-time Analytics" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Phaenicio For? Section */}
      <section className="about-purpose-section">
        <div className="purpose-content">
          <h2 className="section-title">What is Phaenicio For?</h2>
          <p className="purpose-text">
            Phaenicio is designed to revolutionize digital infrastructure by leveraging the power of AI. It serves as a bridge between complex problems and elegant solutions, ensuring every system runs virtually and efficiently. Whether you are a startup building your first product or an enterprise scaling your infrastructure, Phaenicio automates the heavy lifting of system orchestration and data processing.
          </p>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="documentation-section">
        <div className="documentation-grid">
          <div className="documentation-content">
            <h2 className="section-title">Documentation</h2>
            <p className="section-subtitle">
              Everything you need to know about integrating and using Phaenicio.
            </p>
            
            <div className="doc-cards">
              <Link to="/user-guide" className="doc-card" style={{ display: 'block' }}>
                <h4>User Guide</h4>
                <p>Step-by-step guides to setting up your first project and configuring AI parameters.</p>
              </Link>
            </div>
          </div>
          <div className="documentation-illustration">
            <img src={documentationImg} alt="Documentation Illustration" />
          </div>
        </div>
      </section>

      {/* Ready CTA Section */}
      <section className="cta-final-section">
        <div className="cta-final-content">
          <h2 className="section-title">Ready to transform your infrastructure?</h2>
          <p>Join forward-thinking teams using Phaenicio to build high-performing systems.</p>
          <button className="cta-button">Free community edition</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
