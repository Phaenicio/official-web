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
    <div className="max-w-[1200px] mx-auto px-6 pt-[90px] pb-32 text-center fade-in">
      <header className="mb-16">
        <div className="badge">
          Phaenicio Ecosystem
        </div>
        <h1 className="hero-title">
          Our Services <br /> & Platforms
        </h1>
        <p className="text-xl text-text max-w-[600px] mx-auto mb-4">
          Purpose-built digital infrastructure for specialized professional and academic communities.
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 mt-12 text-left">
        {services.map((service) => (
          <article key={service.id} className="bg-white border border-border rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium hover:border-primary/30 flex flex-col justify-between h-full box-border">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary border border-primary/20 rounded-full text-[0.75rem] font-semibold mb-6 w-fit">
                {service.badge}
              </span>
              <h2 className="text-[1.75rem] font-bold text-text-h mb-4">{service.title}</h2>
              <p className="text-[1.125rem] text-text leading-relaxed mb-8">{service.description}</p>
            </div>
            <div className="mt-auto">
              <a href={service.link} className="inline-flex items-center justify-center px-6 py-3 bg-[#0d0d0d] text-white rounded-lg text-sm font-medium transition-opacity hover:opacity-90 w-fit">
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
