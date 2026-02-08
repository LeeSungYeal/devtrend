import './Hero.css';
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

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title animate-fade-in-up">
                        당신의 브랜드를<br />
                        단순한 광고가 아닌<br />
                        '<span className="highlight">트렌드</span>'로 만듭니다
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        데이터 기반의 릴스 바이럴 전략으로<br />
                        고객의 브랜드를 시장의 중심으로
                    </p>

                    <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <MagneticBtn
                            onClick={() => document.getElementById('closing').scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn-primary btn-large"
                        >
                            지금 무료 진단받기
                        </MagneticBtn>
                        <MagneticBtn
                            onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn-secondary btn-large"
                        >
                            성공 사례 확인하기
                        </MagneticBtn>
                    </div>

                    <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <div className="stat-item">
                            <div className="stat-number">300%</div>
                            <div className="stat-label">평균 ROI 증가</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">200+</div>
                            <div className="stat-label">성공 캠페인</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">협력 브랜드</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
