import '../styles/services.css';

const Services = () => {
  const services = [
    {
      id: 'zosterix',
      title: 'Zosterix',
      badge: 'Flagship Platform',
      description: 'Zosterix is a global research networking platform designed for students, researchers, and supervisors to connect, share knowledge through blogs, discover mentorship opportunities, and collaborate via structured academic discussions, enhanced with AI-powered research validation and analytics tools.',
      link: '#',
      actionText: 'Explore Zosterix'
    }
  ];

  return (
    <div className="services-container fade-in">
      <header className="services-header">
        <div className="badge">
          Phaenicio Ecosystem
        </div>
        <h1 className="hero-title">
          Our Services <br /> & Platforms
        </h1>
        <p className="services-tagline">
          Purpose-built digital infrastructure for specialized professional and academic communities.
        </p>
      </header>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.id} className="service-card">
            <div>
              <span className="service-badge">
                {service.badge}
              </span>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
            <div className="service-actions">
              <a href={service.link} className="btn-visit">
                {service.actionText}
              </a>
            </div>
          </article>
        ))}
      </div>

      <footer className="about-footer">
        <div className="about-footer-text">
          PHAENICIO-ECOSYSTEM-V1
        </div>
        <div className="about-footer-text">
          - 2026 -
        </div>
      </footer>
    </div>
  );
};

export default Services;
