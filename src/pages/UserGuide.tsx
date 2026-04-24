import { FiBook, FiUser, FiGlobe, FiShare2, FiZap } from 'react-icons/fi';

const UserGuide = () => {
  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: <FiBook /> },
    { id: 'profile-setup', title: 'Profile Setup', icon: <FiUser /> },
    { id: 'networking', title: 'Research Networking', icon: <FiGlobe /> },
    { id: 'sharing', title: 'Knowledge Sharing', icon: <FiShare2 /> },
    { id: 'advanced', title: 'Advanced Tools', icon: <FiZap /> },
  ];

  return (
    <div className="page-shell max-w-7xl grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 fade-in">
      <aside className="sticky top-28 h-fit hidden md:block text-left">
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-h/50 mb-5">On This Page</h3>
        <nav className="flex flex-col gap-1">
          {sections.map((section) => (
            <a 
              key={section.id} 
              href={`#${section.id}`} 
              className="group flex items-center gap-3 py-2.5 px-3.5 border-l-2 border-transparent text-text hover:text-text-h hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium rounded-r-lg"
            >
              <span className="text-lg opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">{section.icon}</span>
              {section.title}
            </a>
          ))}
        </nav>
      </aside>

      <main className="text-left w-full max-w-4xl">
        <header className="relative surface-panel p-12 max-md:p-7 rounded-[30px] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-center mb-16 overflow-hidden">
          <div className="relative z-10">
            <div className="badge">Phaenicio User Guide</div>
            <h1 className="text-5xl leading-tight mb-5 max-md:text-4xl">Zosterix <br /> <span className="text-primary">Documentation.</span></h1>
            <p className="text-lg text-text/80 max-w-md leading-relaxed font-medium">
              Everything you need to master the global research networking ecosystem.
            </p>
          </div>
          <div className="hidden lg:flex justify-center opacity-20">
             <div className="w-56 h-56 bg-primary/60 blur-[70px] rounded-full"></div>
          </div>
        </header>

        <section id="getting-started" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-semibold mb-6 border-b border-border pb-4">Getting Started</h2>
          <p className="text-base text-text leading-relaxed mb-7 italic">
            Welcome to Zosterix. This guide will help you navigate the platform and maximize your impact within the global research community.
          </p>
          <div className="surface-panel p-8 rounded-[24px] mb-6 hover:-translate-y-0.5 group">
            <span className="inline-block px-3 py-1 bg-primary text-white rounded-lg text-xs font-semibold mb-5 shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">1</span>
            <h3 className="text-xl font-semibold mb-3">Initial Access</h3>
            <p className="text-text leading-relaxed">Access Zosterix through the official web portal at zosterix.com or via the Phaenicio ecosystem dashboard.</p>
          </div>
        </section>

        <section id="profile-setup" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-semibold mb-6 border-b border-border pb-4">Profile Setup</h2>
          <p className="text-base text-text leading-relaxed mb-7 italic">
            Your profile is your academic identity. A complete profile increases your visibility to potential collaborators and supervisors.
          </p>
          <div className="surface-panel p-8 rounded-[24px] mb-6 hover:-translate-y-0.5 group">
            <span className="inline-block px-3 py-1 bg-primary text-white rounded-lg text-xs font-semibold mb-5 shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">2</span>
            <h3 className="text-xl font-semibold mb-3">Identity Verification</h3>
            <p className="text-text leading-relaxed">Connect your institutional email or ORCID iD to verify your academic status and pull in existing publication data.</p>
          </div>
          <div className="surface-panel p-8 rounded-[24px] mb-6 hover:-translate-y-0.5 group border-dashed border-primary/20">
            <span className="inline-block px-3 py-1 bg-primary text-white rounded-lg text-xs font-semibold mb-5 shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">3</span>
            <h3 className="text-xl font-semibold mb-3 text-text-h">Expertise Tags</h3>
            <p className="text-text leading-relaxed">Add specific research tags to help our AI engine match you with relevant mentorship and collaboration opportunities.</p>
          </div>
        </section>

        <section id="networking" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-semibold mb-6 border-b border-border pb-4 text-text-h">Research Networking</h2>
          <p className="text-base text-text leading-relaxed mb-7 italic">
            Zosterix matches you with researchers across institutional boundaries based on shared expertise and research goals.
          </p>
          <div className="surface-panel p-8 rounded-[24px] mb-6 hover:-translate-y-0.5 group">
            <span className="inline-block px-3 py-1 bg-primary text-white rounded-lg text-xs font-semibold mb-5 shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">4</span>
            <h3 className="text-xl font-semibold mb-3 text-text-h">Discover Mentors</h3>
            <p className="text-text leading-relaxed font-medium">Browse through the supervisor directory or let our AI suggest mentors who align with your current research trajectory.</p>
          </div>
        </section>

        <section id="sharing" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-semibold mb-6 border-b border-border pb-4 text-text-h">Knowledge Sharing</h2>
          <p className="text-base text-text leading-relaxed mb-7 italic">
            Communicate your findings effectively through the integrated blogging and discussion platform.
          </p>
          <div className="surface-panel p-8 rounded-[24px] mb-6 hover:-translate-y-0.5 group shadow-[0_20px_50px_rgba(30,58,138,0.05)] border-primary/10">
             <span className="inline-block px-3 py-1 bg-primary text-white rounded-lg text-xs font-semibold mb-5 shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">5</span>
            <h3 className="text-xl font-semibold mb-3 text-text-h">Academic Blogs</h3>
            <p className="text-text leading-relaxed">Publish long-form research updates, methodologies, or meta-analyses that are searchable within the entire ecosystem.</p>
          </div>
        </section>

        <section id="advanced" className="mb-24 scroll-mt-32">
          <h2 className="text-3xl font-semibold mb-6 border-b border-border pb-4 text-text-h">Advanced Tools</h2>
          <p className="text-base text-text leading-relaxed mb-7 italic">
            Leverage Phaenicio's core AI intelligence to validate data and analyze research trends.
          </p>
          <div className="surface-panel p-8 rounded-[24px] mb-6 hover:-translate-y-0.5 group">
             <span className="inline-block px-3 py-1 bg-primary text-white rounded-lg text-xs font-semibold mb-5 shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">6</span>
            <h3 className="text-xl font-semibold mb-3 text-text-h">Validation Engine</h3>
            <p className="text-text leading-relaxed">Submit your datasets or methodologies to the AI-powered validation tool for sanity checks and bias detection.</p>
          </div>
        </section>

          {/* Global footer will be rendered by App.tsx */}
        </main>
    </div>
  );
};

export default UserGuide;
