import '../styles/contact.css';
import nandunImg from '../assets/nandun.jpg';
import hasithaImg from '../assets/hasitha.jpg';

const Contact = () => {
  const founders = [
    {
      name: "Nandun Samarasekara",
      role: "Co-founder & Developer",
      email: "nandunneelaka@gmail.com",
      image: nandunImg,
    },
    {
      name: "Hasitha Erandika",
      role: "Co-founder & Developer",
      email: "wickramasinghe.erandika@gmail.com",
      image: hasithaImg,
    },
  ];

  return (
    <div className="contact-container fade-in">
      <header className="contact-header">
        <div className="badge">
          Direct Access to Developers
        </div>
        <h1 className="hero-title">
          Get in Touch
        </h1>
        <p className="contact-tagline">
          We'd love to hear from you. Reach out directly or drop us a message.
        </p>
        <p className="response-note">
          We typically respond within 2 business days.
        </p>
      </header>

      <section className="team-grid">
        {founders.map((founder, index) => (
          <div key={index} className="team-card">
            <img
              src={founder.image}
              alt={founder.name}
              className="founder-img"
            />
            <h3 className="founder-name">{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-email">{founder.email}</p>
            <a
              href={`mailto:${founder.email}`}
              className="btn-send-email"
            >
              Send email
            </a>
          </div>
        ))}
      </section>

      <section className="inquiry-section">
        <h2 className="inquiry-title">General Inquiry</h2>
        <form
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Ex: Nandun Samarasekara"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Ex: abc@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              className="form-select"
              required
            >
              <option value="">Select a subject</option>
              <option value="General inquiry">General inquiry</option>
              <option value="Supervisor partnership">Supervisor partnership</option>
              <option value="Premium subscription">Premium subscription</option>
              <option value="Report content / moderation">Report content / moderation</option>
              <option value="Technical issue">Technical issue</option>
              <option value="Press & media">Press & media</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Your collaboration proposal or query..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </section>

      <footer className="about-footer">
        <div className="about-footer-text">
          ZOSTERIX-SUPPORT-UNIT
        </div>
        <div className="about-footer-text">
          - 2026 -
        </div>
      </footer>
    </div>
  );
};

export default Contact;
