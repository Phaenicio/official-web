import { Link } from 'react-router-dom';
import logo from '../assets/phaenicio.svg';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-[5%] border-t border-border/80 mt-auto bg-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16 max-md:flex-col max-md:gap-12">
          <div className="max-w-xs text-left">
            <div className="flex items-center gap-3 mb-5 font-semibold text-lg text-text-h">
              <img src={logo} alt="Phaenicio Logo" className="h-9 w-auto" />
              <span>Phaenicio</span>
            </div>
            <p className="text-sm text-text leading-relaxed font-medium">
              The intelligent software platform for modern teams. Built with love using precision engineering.
            </p>
          </div>

          <div className="flex gap-16 max-md:gap-10 text-left">
            <div className="flex flex-col">
              <h4 className="font-semibold text-text-h mb-5 uppercase text-[11px] tracking-[0.12em] opacity-60">Product</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/features" className="text-text hover:text-primary transition-colors text-sm font-medium">Features</Link></li>
                <li><Link to="/solutions" className="text-text hover:text-primary transition-colors text-sm font-medium">Solutions</Link></li>
                <li><Link to="/pricing" className="text-text hover:text-primary transition-colors text-sm font-medium">Pricing</Link></li>
                <li><Link to="/security" className="text-text hover:text-primary transition-colors text-sm font-medium">Security</Link></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-text-h mb-5 uppercase text-[11px] tracking-[0.12em] opacity-60">Resources</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/user-guide" className="text-text hover:text-primary transition-colors text-sm font-medium">User Guide</Link></li>
                <li><Link to="/blog" className="text-text hover:text-primary transition-colors text-sm font-medium">Blog</Link></li>
                <li><Link to="/community" className="text-text hover:text-primary transition-colors text-sm font-medium">Community</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-7 border-t border-border text-[11px] text-text/50 font-semibold tracking-[0.1em] uppercase max-md:flex-col max-md:gap-4">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Phaenicio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
