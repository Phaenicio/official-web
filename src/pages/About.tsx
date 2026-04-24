import { FiTarget, FiCpu, FiUsers } from 'react-icons/fi';

const About = () => {
  return (
    <div className="page-shell fade-in">
      <header className="page-header">
        <div className="badge">
          Pioneering Research Infrastructure
        </div>
        <h1 className="text-5xl leading-[1.08] mb-5 max-md:text-4xl">
          Phaenicio: Building <br /> <span className="text-primary">for the Next Frontier.</span>
        </h1>
        <p className="page-lead">
          Empowering specialized communities through precision-driven technology.
        </p>
      </header>

      <section className="text-left">
        <div className="mb-14 p-10 surface-panel text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] mb-6 text-primary">Our Mission</h2>
          <p className="text-2xl text-text-h font-medium leading-relaxed tracking-tight">
            At Phaenicio, we believe that meaningful progress occurs at the intersections of specialized knowledge and purpose-built technology. We design digital infrastructure that addresses the unique requirements of professional and academic communities.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-14 max-md:grid-cols-1">
          {[
            { icon: <FiTarget />, title: "Stability & Precision", text: "We provide the stability required for navigating complex professional landscapes, ensuring every tool we build is a seamless extension of human expertise." },
            { icon: <FiCpu />, title: "Intelligent Design", text: "Our platforms leverage advanced AI orchestration to automate the heavy lifting, allowing experts to focus on what matters most: discovery." },
            { icon: <FiUsers />, title: "Domain Depth", text: "Rather than pursuing generalized solutions, we focus on niche ecosystems that empower professionals within their specific fields." }
          ].map((pillar, i) => (
            <div key={i} className="surface-panel p-8 rounded-[24px] hover:border-primary/40 hover:-translate-y-0.5 group">
              <div className="text-3xl text-primary mb-5 group-hover:scale-105 transition-transform">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-text-h">{pillar.title}</h3>
              <p className="text-sm text-text leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[800px] mx-auto text-center border-t border-border pt-16">
          <h2 className="text-2xl font-semibold mb-6 italic">The Ecosystem</h2>
          <div className="flex flex-col gap-5 text-base text-text leading-relaxed">
            <p>
              Zosterix stands as our flagship initiative—a testament to our commitment to the global research community. As a dedicated space for researchers to document findings and foster collaboration, it embodies our mission to enhance the impact of academic work.
            </p>
            <p>
              Through a growing portfolio of specialized platforms, we are cultivating a diverse digital infrastructure that respects the nuances of every field we enter.
            </p>
          </div>
        </div>
      </section>

      {/* Global footer will be rendered by App.tsx */}
    </div>
  );
};

export default About;
