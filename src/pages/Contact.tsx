import nandunImg from '../assets/nandun.jpg';
import hasithaImg from '../assets/hasitha.jpg';
import { FiMail, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  const founders = [
    {
      name: "Nandun Samarasekara",
      role: "Co-founder & Tech Lead",
      email: "nandunneelaka@gmail.com",
      image: nandunImg,
      linkedin: "https://linkedin.com/in/nandun-samarasekara",
    },
    {
      name: "Hasitha Erandika",
      role: "Co-founder & Systems Architect",
      email: "wickramasinghe.erandika@gmail.com",
      image: hasithaImg,
      linkedin: "https://linkedin.com/in/hasitha-erandika",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-32 px-[5%] fade-in pt-[90px] pb-32">
      <header className="mb-24 text-center">
        <div className="badge">
          Direct Line to the Founders
        </div>
        <h1 className="text-6xl leading-[1.1] mb-6 max-md:text-4xl">
          Get in <span className="text-primary">Touch.</span>
        </h1>
        <p className="text-xl text-text max-w-[600px] mx-auto">
          We're always open to collaboration, feedback, and inquiries about the Phaenicio ecosystem and Zosterix.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 text-left items-start">
        <section className="flex flex-col gap-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Co-Founders</h2>
            <p className="text-text">Direct access to the architects behind Phaenicio.</p>
          </div>
          <div className="flex flex-col gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="glass grid grid-cols-[100px_1fr] max-md:grid-cols-1 gap-8 p-8 rounded-[32px] items-center hover:translate-x-2 group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={founder.image}
                    alt={founder.name}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-text-h">{founder.name}</h3>
                  <p className="text-text text-sm mb-4 font-medium">{founder.role}</p>
                  <a href={`mailto:${founder.email}`} className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-mono text-sm underline underline-offset-4">
                    <FiMail /> {founder.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="glass p-12 rounded-[40px] max-md:p-8">
            <div className="mb-12">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6"><FiMessageCircle /></div>
              <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
              <p className="text-text">For partnership proposals, media requests, or support.</p>
            </div>

            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-h/50">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full py-4 bg-transparent border-b border-border focus:outline-none focus:border-primary focus:bg-primary/5 transition-all px-2 placeholder:text-text/20"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-h/50">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full py-4 bg-transparent border-b border-border focus:outline-none focus:border-primary focus:bg-primary/5 transition-all px-2 placeholder:text-text/20"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-text-h/50">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full py-4 bg-transparent border-b border-border focus:outline-none focus:border-primary focus:bg-primary/5 transition-all px-2"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General inquiry">General inquiry</option>
                  <option value="Research partnership">Research partnership</option>
                  <option value="Zosterix feedback">Zosterix feedback</option>
                  <option value="Technical support">Technical support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-h/50">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full py-4 bg-transparent border-b border-border focus:outline-none focus:border-primary focus:bg-primary/5 transition-all px-2 placeholder:text-text/20 min-h-[150px]"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full py-6 bg-primary text-white rounded-2xl font-bold text-lg transition-all hover:bg-primary-hover hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-primary/30">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>

      <footer className="mt-32 pt-12 border-t border-border flex justify-between items-center text-[10px] font-mono tracking-[0.3em] text-text/50 uppercase">
        <div>PHAENICIO-COMMUNICATIONS</div>
        <div>- 2026 -</div>
      </footer>
    </div>
  );
};

export default Contact;
