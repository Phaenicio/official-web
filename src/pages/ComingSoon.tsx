
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import '../styles/comingsoon.css';

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="comingsoon-container fade-in">
      <div className="comingsoon-content">
        <FiClock className="comingsoon-icon" />
        <h1 className="comingsoon-title">{title}</h1>
        <p className="comingsoon-text">
          We're currently working on this page. Check back soon for updates.
        </p>
        <Link to="/" className="back-link">
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
