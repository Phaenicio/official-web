import { Link } from 'react-router-dom';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-[90px] fade-in pb-32">
      <div className="text-center max-w-lg glass p-16 max-md:p-8 rounded-[40px] mx-[5%] relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <FiClock className="text-7xl text-primary mb-8 animate-pulse" />
          <h1 className="text-4xl font-bold mb-6 text-text-h tracking-tight">{title}</h1>
          <p className="text-lg text-text mb-12 leading-relaxed">
            We're currently working on this specialized infrastructure. Check back soon for updates.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group">
            <FiArrowLeft className="group-hover:scale-110 transition-transform" /> <span className="border-b-2 border-transparent group-hover:border-primary transition-all">Back to Home</span>
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-12 translate-x-12 blur-2xl"></div>
      </div>
    </div>
  );
};

export default ComingSoon;
