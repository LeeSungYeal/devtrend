import './Solution.css';
import { useTilt } from '../hooks/useTilt';

const TiltCard = ({ children, className, delay }) => {
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

function Solution() {
    return (
        <section className="solution section" id="solution">
            <div className="container">
                <div className="solution-content">
                    <h2 className="section-title">devtrend만의 차별화된 접근</h2>
                    <p className="section-description">
                        우리는 단순 광고가 아닌, 알고리즘과 트렌드를 이해하는<br />
                        <strong>전략적 바이럴 마케팅</strong>을 제공합니다
                    </p>

                    <div className="solution-cards">
                        <TiltCard className="solution-card glass-dark animate-fade-in-up" delay="0s">
                            <div className="card-number">01</div>
                            <h3 className="solution-card-title">
                                조회수만 높으면 팔릴까요?
                            </h3>
                            <p className="solution-card-description">
                                우리는 <span className="highlight-gradient">'구매 전환'</span>을 부르는
                                알고리즘을 설계합니다. 단순 조회수가 아닌, 실제 액션으로 이어지는
                                타겟팅과 콘텐츠 최적화가 핵심입니다.
                            </p>
                            <div className="card-badge">데이터 기반 전략</div>
                        </TiltCard>

                        <TiltCard className="solution-card glass-dark animate-fade-in-up" delay="0.2s">
                            <div className="card-number">02</div>
                            <h3 className="solution-card-title">
                                유명 인플루언서 한 명 vs KOC 10명
                            </h3>
                            <p className="solution-card-description">
                                유명 인플루언서 한 명보다, 타겟에 맞는 <span className="highlight-gradient">KOC(Key Opinion Consumer) 10명</span>이
                                브랜드를 <strong>'대세'</strong>로 만듭니다. 진짜 바이럴은 점진적 확산에서 시작됩니다.
                            </p>
                            <div className="card-badge">KOC 마케팅</div>
                        </TiltCard>
                        <TiltCard className="solution-card glass-dark animate-fade-in-up" delay="0.4s">
                            <div className="card-number">03</div>
                            <h3 className="solution-card-title">
                                오늘 뜬 포멧, 내일 바로 광고가 됩니다!
                            </h3>
                            <p className="solution-card-description">
                                콘텐츠 포멧이 바뀌면 알고리즘도 바뀝니다. 우리는 하루에도 수백 개의 <span className="highlight-gradient">레퍼런스</span>를 분석하고,
                                최신 릴스 광고는 즉시 벤치마킹합니다.
                                <span className="highlight-gradient"> 유행을 기다리지 않고, 바로 씁니다</span>.
                            </p>
                            <div className="card-badge">실시간 트렌드 반영</div>
                        </TiltCard>

                        <TiltCard className="solution-card glass-dark animate-fade-in-up" delay="0.6s">
                            <div className="card-number">04</div>
                            <h3 className="solution-card-title">
                                프로세스 전과정 공유
                            </h3>
                            <p className="solution-card-description">
                                최고의 노출 전략을 위해 고객, 크리에이터, 시청자와의 소통을 멈추지 않습니다.
                                대학생 200명에게 캠페인을 <span className="highlight-gradient">즉시 피드백</span> 받고,
                                모든 데이터들을 공식화하여 모두가 <span className="highlight-gradient">함께 아이디어를 공유</span>합니다.
                            </p>
                            <div className="card-badge">투명한 소통</div>
                        </TiltCard>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Solution;
