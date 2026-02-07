import React, { useState, useEffect, useRef } from 'react';
import './SocialProof.css';

const CountUp = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(progress < duration ? end * ease : end);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <span ref={countRef}>
            {Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}
            {suffix}
        </span>
    );
};

function SocialProof() {
    return (
        <section className="social-proof section section-dark" id="social-proof">
            <div className="container">
                <div className="social-proof-content">
                    <h2 className="section-title">데이터로 증명하는 <span className="text-highlight">압도적 성과</span></h2>
                    <p className="section-description">
                        감에 의존하는 마케팅은 이제 그만.<br />
                        devtrend는 오직 숫자로 결과를 증명합니다
                    </p>

                    <div className="metrics-grid">
                        <div className="metric-card glass animate-fade-in-up" style={{ animationDelay: '0s' }}>
                            <div className="metric-icon">🎯</div>
                            <div className="metric-value">
                                <CountUp end={87} suffix="%" />
                            </div>
                            <div className="metric-label">타겟 정확도</div>
                            <p className="metric-description">
                                AI 기반 분석으로 정확한 타겟 고객에게 도달
                            </p>
                        </div>

                        <div className="metric-card glass animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="metric-icon">📊</div>
                            <div className="metric-value">
                                <CountUp end={4.2} suffix="배" />
                            </div>
                            <div className="metric-label">평균 전환율 증가</div>
                            <p className="metric-description">
                                일반 광고 대비 4배 이상의 전환율 개선
                            </p>
                        </div>

                        <div className="metric-card glass animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="metric-icon">💎</div>
                            <div className="metric-value">
                                <CountUp end={92} suffix="%" />
                            </div>
                            <div className="metric-label">고객 만족도</div>
                            <p className="metric-description">
                                50+ 협력 브랜드의 높은 재계약률
                            </p>
                        </div>
                    </div>

                    <div className="growth-chart">
                        <h3 className="chart-title">점진적 확산 그래프</h3>
                        <div className="chart-container">
                            <div className="chart-bar" style={{ height: '20%', animationDelay: '0s' }}>
                                <span className="bar-label">Week 1</span>
                            </div>
                            <div className="chart-bar" style={{ height: '35%', animationDelay: '0.1s' }}>
                                <span className="bar-label">Week 2</span>
                            </div>
                            <div className="chart-bar" style={{ height: '55%', animationDelay: '0.2s' }}>
                                <span className="bar-label">Week 3</span>
                            </div>
                            <div className="chart-bar" style={{ height: '75%', animationDelay: '0.3s' }}>
                                <span className="bar-label">Week 4</span>
                            </div>
                            <div className="chart-bar" style={{ height: '100%', animationDelay: '0.4s' }}>
                                <span className="bar-label">Week 5+</span>
                            </div>
                        </div>
                        <p className="chart-note">
                            KOC를 통한 점진적 노출로 브랜드 인지도가 5주 만에 최대치 도달
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialProof;
