import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';


import UserGuide from './pages/UserGuide';
import { Features, Solutions, Pricing, Security, Blog, Community } from './pages/OtherPages';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <Router>
      <ParticleBackground />
      <Navbar />
      <main className="min-h-[calc(100vh-90px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="/features" element={<Features />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/security" element={<Security />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
