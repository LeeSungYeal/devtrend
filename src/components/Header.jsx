import { useState, useEffect } from 'react';
import './Header.css';
import { useMagnetic } from '../hooks/useMagnetic';

const MagneticBtn = ({ children, className, onClick }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic({ strength: 0.3 });
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-dev">dev</span>
            <span className="logo-trend">trend</span>
            <svg className="logo-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>

          <nav className="nav">
            <a onClick={() => scrollToSection('intro')} className="nav-link">왜 릴스인가</a>
            <a onClick={() => scrollToSection('solution')} className="nav-link">차별점</a>
            <a onClick={() => scrollToSection('process')} className="nav-link">프로세스</a>
            <a onClick={() => scrollToSection('comparison')} className="nav-link">비교</a>
          </nav>

          <MagneticBtn
            onClick={() => scrollToSection('closing')}
            className="btn btn-primary btn-cta"
          >
            상담 신청
          </MagneticBtn>
        </div>
      </div>
    </header>
  );
}

export default Header;
