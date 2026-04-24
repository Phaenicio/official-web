import { Link } from 'react-router-dom';
import logo from '../assets/phaenicio.svg';
import automatedImg from '../assets/automated-pana.svg'; // Using as placeholder for AI Validation
import analyticsImg from '../assets/Setup Analytics-rafiki.svg'; // Using for Analytics
import documentationImg from '../assets/Online document-bro.svg'; // Using for Knowledge Sharing

const Home = () => {
  return (
    <div className="flex flex-col fade-in pt-[78px]">
      {/* Hero Section - Organization Focused */}
      <section className="pt-10 pb-20 px-[5%] max-md:pt-7 max-md:pb-14 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
          <div className="text-left">
            <div className="badge">
              Advancing Global Research Infrastructure
            </div>
            <h1 className="text-5xl leading-[1.08] mb-2 max-md:text-4xl">
              Engineering the <br /> <span className="text-primary">Future of Knowledge.</span>
            </h1>
            <p className="text-lg text-text leading-relaxed mb-8 max-w-xl">
              Phaenicio is an organization dedicated to building precision-driven digital infrastructure. We create specialized platforms that empower researchers, students, and professionals to push the boundaries of human understanding.
            </p>
            <div className="flex gap-3.5">
              <a href="#zosterix" className="px-7 py-3.5 bg-primary text-white rounded-lg font-semibold transition-all hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
                Discover Zosterix
              </a>
              <Link to="/about" className="px-7 py-3.5 glass text-text-h rounded-lg font-semibold transition-all hover:-translate-y-0.5">
                Our Mission
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-[32px] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.8),rgba(255,255,255,0.55))] shadow-[0_20px_50px_rgba(15,23,42,0.14)] p-9 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)]">
              <div className="absolute inset-0 rounded-[32px] border border-slate-700/5 pointer-events-none"></div>
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary/15 via-transparent to-slate-500/10 blur-2xl pointer-events-none"></div>
              <img src={logo} alt="Phaenicio Logo" className="relative z-10 w-full max-w-[320px] mx-auto drop-shadow-[0_10px_16px_rgba(15,23,42,0.22)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Spotlight - Zosterix */}
      <section id="zosterix" className="py-24 bg-white/5 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-[5%] relative z-10 text-left">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 bg-text-h text-bg text-xs font-bold uppercase tracking-wider rounded mb-4">Flagship Product</div>
            <h2 className="text-4xl font-semibold mb-5">Zosterix</h2>
            <p className="text-lg text-text max-w-2xl">
              A global research networking platform designed for the next generation of discovery.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass p-10 rounded-[30px] flex gap-10 items-center max-md:flex-col max-md:p-7 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.14)]">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-5 text-text-h">Global Research Networking</h3>
                <p className="text-base text-text leading-relaxed mb-6">
                  Connect with students, researchers, and supervisors worldwide. Zosterix breaks down institutional silos, enabling seamless collaboration across borders and disciplines.
                </p>
                <ul className="flex flex-col gap-4 text-text-h font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Direct Mentorship Opportunities
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Structured Academic Discussions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Cross-Institutional Collaboration
                  </li>
                </ul>
              </div>
              <div className="w-1/3 max-md:w-full opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={documentationImg} alt="Networking" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {[
                { icon: automatedImg, title: "AI-Powered Validation", text: "Ensure the integrity of your research with advanced AI tools for data validation and bias detection." },
                { icon: documentationImg, title: "Knowledge Ecosystem", text: "Share insights through professional blogs and discover curated research content tailored to your field." },
                { icon: analyticsImg, title: "Advanced Analytics", text: "Gain deep insights into your research impact and network growth with built-in analytics tools." }
              ].map((feature, i) => (
                <div key={i} className="glass p-7 rounded-2xl hover:border-primary/40 hover:-translate-y-0.5 group">
                  <div className="w-14 h-14 mb-5 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-text-h">{feature.title}</h4>
                  <p className="text-sm text-text leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://zosterix.com" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-text-h text-bg rounded-xl font-semibold text-base transition-all hover:bg-primary hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30">
              Explore Zosterix
            </a>
          </div>
        </div>
      </section>

      {/* Organization Vision Section */}
      <section className="py-24 px-[5%] text-left border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Why We Build</h2>
          <p className="text-xl text-text leading-relaxed font-light italic">
            "At Phaenicio, we believe that the tools of discovery should be as advanced as the research they support. By leveraging AI-powered orchestration and modern digital architecture, we bridge the gap between complex academic challenges and elegant, scalable solutions."
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 px-[5%] border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-center">
          <div className="col-span-7 max-md:col-span-12 text-left">
            <h2 className="text-3xl font-semibold mb-5">Resources</h2>
            <p className="text-lg text-text mb-8">
              Everything you need to get started with the Phaenicio ecosystem and Zosterix.
            </p>

            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              <Link to="/user-guide" className="glass p-7 rounded-2xl hover:border-primary/40 hover:-translate-y-0.5 group">
                <h4 className="text-lg font-semibold mb-2.5 group-hover:text-primary transition-colors">User Guide</h4>
                <p className="text-sm text-text">Step-by-step guides for setting up your profile and maximizing your research impact.</p>
              </Link>
              <Link to="/contact" className="glass p-7 rounded-2xl hover:border-primary/40 hover:-translate-y-0.5 group">
                <h4 className="text-lg font-semibold mb-2.5 group-hover:text-primary transition-colors">Partnerships</h4>
                <p className="text-sm text-text">Learn how institutions and supervisors can collaborate with the Phaenicio team.</p>
              </Link>
            </div>
          </div>
          <div className="col-span-5 max-md:hidden opacity-20 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-1000">
            <img src={documentationImg} alt="Documentation Illustration" className="w-full" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-[5%] text-center relative overflow-hidden bg-text-h text-bg">
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold mb-5 text-bg">Join the Future of Research</h2>
          <p className="text-lg text-bg/70 mb-9 max-w-2xl mx-auto italic">Be part of a growing ecosystem dedicated to scientific and academic excellence.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-primary text-white rounded-xl font-semibold text-base transition-all hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(230,57,70,0.28)]">Get in touch</Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-primary/15 blur-[150px] rounded-full pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Home;
