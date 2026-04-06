import '../styles/about.css'; // Reusing some about styles for consistency

const UserGuide = () => {
  return (
    <div className="about-container fade-in doc-page">
      <header className="about-header">
        <div className="badge">
          Step-by-Step Documentation
        </div>
        <h1 className="about-title">
          User Guide
        </h1>
        <p className="about-tagline">
          Everything you need to know about setting up and using Phaenicio.
        </p>
      </header>

      <section className="about-content">
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Getting Started</h2>
        <p className="about-paragraph">
          Welcome to the Phaenicio user guide. This document will walk you through the core concepts, setup process, and advanced features of our digital infrastructure platforms.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Initial Setup</h3>
        <p className="about-paragraph">
          To begin using Phaenicio's intelligent systems, you'll first need to establish a project workspace. Our automated onboarding will guide you through connecting your existing data repositories and configuring initial parameters.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Data Architecture</h3>
        <p className="about-paragraph">
          Phaenicio treats data with precision. Ensure your data structures are clean and well-defined. Our systems thrive on structured formats but are capable of parsing semi-structured information with high accuracy.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Running Automation</h3>
        <p className="about-paragraph">
          Once your workspace is ready, you can deploy automation agents. These agents are designed to handle specific tasks like data routing, screening, and real-time analysis without manual intervention.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Monitoring Systems</h3>
        <p className="about-paragraph">
          Utilize the real-time analytics dashboard to monitor the health and performance of your projects. You will receive alerts if the system detects any anomalies or requires manual decision-making.
        </p>
      </section>

      <footer className="about-footer">
        <div className="about-footer-text">
          - Latest Update: 2026 -
        </div>
      </footer>
    </div>
  );
};

export default UserGuide;
