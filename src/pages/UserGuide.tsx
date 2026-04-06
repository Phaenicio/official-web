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
    <div className="max-w-7xl mx-auto px-[5%] grid grid-cols-1 md:grid-cols-[250px_1fr] gap-16 pt-[90px] pb-32 fade-in">
      <aside className="sticky top-32 h-fit hidden md:block text-left">
        <h3 className="text-xs font-bold uppercase tracking-widest text-text-h/40 mb-6">On This Page</h3>
        <nav className="flex flex-col gap-1">
          {sections.map((section) => (
            <a 
              key={section.id} 
              href={`#${section.id}`} 
              className="group flex items-center gap-3 py-3 px-4 border-l-2 border-transparent text-text hover:text-text-h hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-medium rounded-r-lg"
            >
              <span className="text-lg opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">{section.icon}</span>
              {section.title}
            </a>
          ))}
        </nav>
      </aside>

      <main className="text-left w-full max-w-4xl">
        <header className="relative glass p-16 max-md:p-8 rounded-[40px] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-center mb-24 overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 bg-primary text-white rounded-full text-xs font-bold mb-6 shadow-lg shadow-primary/20 uppercase tracking-widest">Phaenicio User Guide</div>
            <h1 className="text-5xl font-extrabold leading-tight mb-6 text-text-h tracking-tight max-md:text-4xl">Zosterix <br /> <span className="text-primary">Documentation.</span></h1>
            <p className="text-xl text-text/80 max-w-md leading-relaxed font-medium">
              Everything you need to master the global research networking ecosystem.
            </p>
          </div>
          <div className="hidden lg:flex justify-center opacity-20">
             <div className="w-64 h-64 bg-primary blur-[80px] rounded-full animate-pulse"></div>
          </div>
        </header>

        <section id="getting-started" className="mb-24 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8 border-b border-border pb-6">Getting Started</h2>
          <p className="text-lg text-text leading-relaxed mb-10 italic">
            Welcome to Zosterix. This guide will help you navigate the platform and maximize your impact within the global research community.
          </p>
          <div className="glass p-10 rounded-[32px] mb-8 hover:-translate-y-1 group">
            <span className="inline-block px-4 py-1.5 bg-primary text-white rounded-xl text-sm font-bold mb-6 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">1</span>
            <h3 className="text-2xl font-bold mb-4">Initial Access</h3>
            <p className="text-text leading-relaxed">Access Zosterix through the official web portal at zosterix.com or via the Phaenicio ecosystem dashboard.</p>
          </div>
        </section>

        <section id="profile-setup" className="mb-24 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8 border-b border-border pb-6">Profile Setup</h2>
          <p className="text-lg text-text leading-relaxed mb-10 italic">
            Your profile is your academic identity. A complete profile increases your visibility to potential collaborators and supervisors.
          </p>
          <div className="glass p-10 rounded-[32px] mb-8 hover:-translate-y-1 group">
            <span className="inline-block px-4 py-1.5 bg-primary text-white rounded-xl text-sm font-bold mb-6 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">2</span>
            <h3 className="text-2xl font-bold mb-4">Identity Verification</h3>
            <p className="text-text leading-relaxed">Connect your institutional email or ORCID iD to verify your academic status and pull in existing publication data.</p>
          </div>
          <div className="glass p-10 rounded-[32px] mb-8 hover:-translate-y-1 group border-dashed">
            <span className="inline-block px-4 py-1.5 bg-primary text-white rounded-xl text-sm font-bold mb-6 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">3</span>
            <h3 className="text-2xl font-bold mb-4 text-text-h">Expertise Tags</h3>
            <p className="text-text leading-relaxed">Add specific research tags to help our AI engine match you with relevant mentorship and collaboration opportunities.</p>
          </div>
        </section>

        <section id="networking" className="mb-24 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8 border-b border-border pb-6 text-text-h">Research Networking</h2>
          <p className="text-lg text-text leading-relaxed mb-10 italic">
            Zosterix matches you with researchers across institutional boundaries based on shared expertise and research goals.
          </p>
          <div className="glass p-10 rounded-[32px] mb-8 hover:-translate-y-1 group">
            <span className="inline-block px-4 py-1.5 bg-primary text-white rounded-xl text-sm font-bold mb-6 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">4</span>
            <h3 className="text-2xl font-bold mb-4 text-text-h">Discover Mentors</h3>
            <p className="text-text leading-relaxed font-medium">Browse through the supervisor directory or let our AI suggest mentors who align with your current research trajectory.</p>
          </div>
        </section>

        <section id="sharing" className="mb-24 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8 border-b border-border pb-6 text-text-h">Knowledge Sharing</h2>
          <p className="text-lg text-text leading-relaxed mb-10 italic">
            Communicate your findings effectively through the integrated blogging and discussion platform.
          </p>
          <div className="glass p-10 rounded-[32px] mb-8 hover:-translate-y-1 group shadow-[0_20px_50px_rgba(230,57,70,0.05)] border-primary/10">
             <span className="inline-block px-4 py-1.5 bg-primary text-white rounded-xl text-sm font-bold mb-6 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">5</span>
            <h3 className="text-2xl font-bold mb-4 text-text-h">Academic Blogs</h3>
            <p className="text-text leading-relaxed">Publish long-form research updates, methodologies, or meta-analyses that are searchable within the entire ecosystem.</p>
          </div>
        </section>

        <section id="advanced" className="mb-32 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8 border-b border-border pb-6 text-text-h">Advanced Tools</h2>
          <p className="text-lg text-text leading-relaxed mb-10 italic">
            Leverage Phaenicio's core AI intelligence to validate data and analyze research trends.
          </p>
          <div className="glass p-10 rounded-[32px] mb-8 hover:-translate-y-1 group">
             <span className="inline-block px-4 py-1.5 bg-primary text-white rounded-xl text-sm font-bold mb-6 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">6</span>
            <h3 className="text-2xl font-bold mb-4 text-text-h">Validation Engine</h3>
            <p className="text-text leading-relaxed">Submit your datasets or methodologies to the AI-powered validation tool for sanity checks and bias detection.</p>
          </div>
        </section>

          {/* Global footer will be rendered by App.tsx */}
        </main>
    </div>
  );
};

export default UserGuide;
