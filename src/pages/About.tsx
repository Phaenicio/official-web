import { FiTarget, FiCpu, FiUsers } from 'react-icons/fi';

const About = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-[5%] fade-in pb-32 pt-[90px]">
      <header className="mb-24 text-center">
        <div className="badge">
          Pioneering Research Infrastructure
        </div>
        <h1 className="text-6xl leading-[1.1] mb-6 max-md:text-4xl">
          Phaenicio: Building <br /> <span className="text-primary">for the Next Frontier.</span>
        </h1>
        <p className="text-xl text-text max-w-[600px] mx-auto">
          Empowering specialized communities through precision-driven technology.
        </p>
      </header>

      <section className="text-left">
        <div className="mb-24 p-16 bg-white/5 border border-border rounded-[40px] text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-primary">Our Mission</h2>
          <p className="text-3xl text-text-h font-medium leading-relaxed tracking-tight">
            At Phaenicio, we believe that meaningful progress occurs at the intersections of specialized knowledge and purpose-built technology. We design digital infrastructure that addresses the unique requirements of professional and academic communities.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-24 max-md:grid-cols-1">
          {[
            { icon: <FiTarget />, title: "Stability & Precision", text: "We provide the stability required for navigating complex professional landscapes, ensuring every tool we build is a seamless extension of human expertise." },
            { icon: <FiCpu />, title: "Intelligent Design", text: "Our platforms leverage advanced AI orchestration to automate the heavy lifting, allowing experts to focus on what matters most: discovery." },
            { icon: <FiUsers />, title: "Domain Depth", text: "Rather than pursuing generalized solutions, we focus on niche ecosystems that empower professionals within their specific fields." }
          ].map((pillar, i) => (
            <div key={i} className="glass p-10 rounded-[32px] hover:border-primary group">
              <div className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-text-h">{pillar.title}</h3>
              <p className="text-text leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[800px] mx-auto text-center border-t border-border pt-24">
          <h2 className="text-3xl font-bold mb-8 italic">The Ecosystem</h2>
          <div className="flex flex-col gap-6 text-lg text-text leading-relaxed">
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
