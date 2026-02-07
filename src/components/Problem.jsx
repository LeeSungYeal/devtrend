import './Problem.css';
import { useTilt } from '../hooks/useTilt';

const TiltItem = ({ children, className, delay }) => {
    const { ref, handleMouseMove, handleMouseLeave } = useTilt({ max: 5, scale: 1.02 });

    return (
        <div
            ref={ref}
            className={className}
            style={{ animationDelay: delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

function Problem() {
    return (
        <section className="problem section section-dark" id="problem">
            <div className="container">
                <div className="problem-content">
                    <h2 className="section-title">기존 대행사의 <span className="text-highlight">한계</span></h2>
                    <p className="section-description">
                        단순 노출에만 급급한 기존 방식으로는<br />
                        진짜 성과를 만들 수 없습니다
                    </p>

                    <div className="problem-grid">
                        <TiltItem className="problem-item animate-fade-in-up" delay="0s">
                            <div className="problem-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <h3 className="problem-title">데이터 없는 예산 낭비</h3>
                            <p className="problem-description">
                                단순히 "팔로워가 많다"는 것만으로는 절대 제품이 팔리지 않습니다.
                                바이럴 분석 없이 진행되는 캠페인은 비용만 소모할 뿐입니다.
                            </p>
                        </TiltItem>

                        <TiltItem className="problem-item animate-fade-in-up" delay="0.1s">
                            <div className="problem-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="2 17 2 7 12 7"></polyline></svg>
                            </div>
                            <h3 className="problem-title">단발성 노출의 한계</h3>
                            <p className="problem-description">
                                릴스 알고리즘은 '지속성'을 중요하게 평가합니다.
                                한 번의 광고로 끝나는 캠페인은 브랜드 자산이 되지 않습니다.
                            </p>
                        </TiltItem>

                        <TiltItem className="problem-item animate-fade-in-up" delay="0.2s">
                            <div className="problem-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3 className="problem-title">중개 수수료 거품</h3>
                            <p className="problem-description">
                                인플루언서 리스트만 전달하고 끝? 실제 기획과 전략 없이
                                단순 중개 수수료만 챙기는 구조를 탈피해야 합니다.
                            </p>
                        </TiltItem>

                        <TiltItem className="problem-item animate-fade-in-up" delay="0.3s">
                            <div className="problem-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </div>
                            <h3 className="problem-title">사후 관리 전무</h3>
                            <p className="problem-description">
                                캠페인 종료 후 보고서 한 장으로 끝나는 관계.
                                다음 스텝을 위한 데이터 분석과 전략 제언이 필요합니다.
                            </p>
                        </TiltItem>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Problem;

