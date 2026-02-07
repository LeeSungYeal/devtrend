import './Intro.css';

function Intro() {
    return (
        <section className="intro section" id="intro">
            <div className="container">
                <div className="intro-content">
                    <h2 className="section-title">왜 지금 릴스 바이럴인가?</h2>
                    <p className="section-description">
                        지금 이 순간, 마케팅의 중심은 <strong>릴스(Reels)</strong>로 이동했습니다.<br />
                        단순한 광고가 아닌, 진짜 바이럴을 경험하세요.
                    </p>

                    <div className="intro-grid">
                        <div className="intro-card animate-fade-in-up" style={{ animationDelay: '0s' }}>
                            <div className="card-icon">🚀</div>
                            <h3 className="card-title">알고리즘 최적화</h3>
                            <p className="card-description">
                                인스타그램 릴스 알고리즘을 분석하여
                                가장 효과적인 노출 전략을 수립합니다.
                            </p>
                        </div>
                        <div className="intro-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="card-icon">🎯</div>
                            <h3 className="card-title">정밀 타겟팅</h3>
                            <p className="card-description">
                                단순 노출이 아닌, 구매 가능성이 높은
                                진성 고객에게 도달합니다.
                            </p>
                        </div>
                        <div className="intro-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="card-icon">📈</div>
                            <h3 className="card-title">데이터 기반 성장</h3>
                            <p className="card-description">
                                감으로 하는 마케팅은 그만.
                                철저한 데이터 분석으로 성과를 증명합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
