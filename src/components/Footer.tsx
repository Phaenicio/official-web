import { Link } from 'react-router-dom';
import logo from '../assets/phaenicio.svg';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 px-[5%] border-t border-border mt-auto bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-24 max-md:flex-col max-md:gap-16">
          <div className="max-w-xs text-left">
            <div className="flex items-center gap-3 mb-6 font-bold text-xl text-text-h">
              <img src={logo} alt="Phaenicio Logo" className="h-10 w-auto" />
              <span>Phaenicio</span>
            </div>
            <p className="text-text leading-relaxed font-medium">
              The intelligent software platform for modern teams. Built with love using precision engineering.
            </p>
          </div>

          <div className="flex gap-24 max-md:gap-12 text-left">
            <div className="flex flex-col">
              <h4 className="font-bold text-text-h mb-6 uppercase text-xs tracking-[0.2em] opacity-40">Product</h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/features" className="text-text hover:text-primary transition-colors text-sm font-medium">Features</Link></li>
                <li><Link to="/solutions" className="text-text hover:text-primary transition-colors text-sm font-medium">Solutions</Link></li>
                <li><Link to="/pricing" className="text-text hover:text-primary transition-colors text-sm font-medium">Pricing</Link></li>
                <li><Link to="/security" className="text-text hover:text-primary transition-colors text-sm font-medium">Security</Link></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-text-h mb-6 uppercase text-xs tracking-[0.2em] opacity-40">Resources</h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/user-guide" className="text-text hover:text-primary transition-colors text-sm font-medium">User Guide</Link></li>
                <li><Link to="/blog" className="text-text hover:text-primary transition-colors text-sm font-medium">Blog</Link></li>
                <li><Link to="/community" className="text-text hover:text-primary transition-colors text-sm font-medium">Community</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-border text-[10px] text-text/40 font-bold tracking-[0.2em] uppercase max-md:flex-col max-md:gap-6">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Phaenicio. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-primary transition-all">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
