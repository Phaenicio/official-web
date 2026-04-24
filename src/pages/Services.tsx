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
    <div className="page-shell text-center fade-in">
      <header className="page-header">
        <div className="badge">
          Phaenicio Ecosystem
        </div>
        <h1 className="hero-title">
          Our Services <br /> & Platforms
        </h1>
        <p className="page-lead mb-3">
          Purpose-built digital infrastructure for specialized professional and academic communities.
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 mt-8 text-left">
        {services.map((service) => (
          <article key={service.id} className="surface-panel rounded-xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(15,23,42,0.12)] hover:border-primary/30 flex flex-col justify-between h-full box-border">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary/5 text-primary border border-primary/20 rounded-full text-[11px] font-semibold mb-5 w-fit">
                {service.badge}
              </span>
              <h2 className="text-[1.5rem] font-semibold text-text-h mb-3">{service.title}</h2>
              <p className="text-base text-text leading-relaxed mb-6">{service.description}</p>
            </div>
            <div className="mt-auto">
              <a href={service.link} className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0d0d0d] text-white rounded-lg text-sm font-medium transition-opacity hover:opacity-90 w-fit">
                {service.actionText}
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Global footer will be rendered by App.tsx */}
    </div>
  );
};

export default Services;
