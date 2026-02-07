import { useEffect, useRef } from 'react';
import './Process.css';

function Process() {
    const timelineRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current || !lineRef.current) return;

            const timelineRect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.5; // Trigger at center screen

            // Calculate how much of the timeline is "past" the trigger point
            // timelineRect.top is the distance from viewport top to timeline top
            // if timelineRect.top is 500, and triggerPoint is 500, we are at 0 progress
            // if timelineRect.top is -500, we are 1000px into the timeline

            const scrollDistance = triggerPoint - timelineRect.top;
            const maxHeight = timelineRef.current.offsetHeight;

            let height = Math.max(0, Math.min(scrollDistance, maxHeight));

            lineRef.current.style.height = `${height}px`;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="process section section-dark" id="process">
            <div className="container">
                <div className="process-content">
                    <h2 className="section-title">4단계 제작 프로세스</h2>
                    <p className="section-description">
                        체계적인 프로세스로 브랜드의 성공을 설계합니다
                    </p>

                    <div className="process-timeline" ref={timelineRef}>
                        <div className="timeline-line">
                            <div className="timeline-progress" ref={lineRef}></div>
                        </div>
                        <div className="process-step animate-fade-in-up" style={{ animationDelay: '0s' }}>
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3 className="step-title">타겟 데이터 분석</h3>
                                <p className="step-description">
                                    고객사 제품의 시장 위치와 타겟 고객의 취향을 면밀히 분석합니다.
                                    데이터 기반으로 최적의 바이럴 전략을 수립합니다.
                                </p>
                                <div className="step-tags">
                                    <span className="tag">시장 분석</span>
                                    <span className="tag">타겟팅</span>
                                    <span className="tag">경쟁사 조사</span>
                                </div>
                            </div>
                        </div>

                        <div className="process-step animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3 className="step-title">크리에이터 큐레이션</h3>
                                <p className="step-description">
                                    브랜드 핏에 맞는 인플루언서 및 KOC를 직접 선별합니다.
                                    단순 팔로워 수가 아닌, 진짜 영향력을 기준으로 선정합니다.
                                </p>
                                <div className="step-tags">
                                    <span className="tag">인플루언서 매칭</span>
                                    <span className="tag">KOC 선정</span>
                                    <span className="tag">브랜드 핏 분석</span>
                                </div>
                            </div>
                        </div>

                        <div className="process-step animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3 className="step-title">풀스택 콘텐츠 제작</h3>
                                <p className="step-description">
                                    devtrend가 직접 기획, 촬영, 편집하여 퀄리티를 완벽하게 컨트롤합니다.
                                    외주가 아닌, 인하우스 제작으로 최고의 품질을 보장합니다.
                                </p>
                                <div className="step-tags">
                                    <span className="tag">콘텐츠 기획</span>
                                    <span className="tag">촬영/편집</span>
                                    <span className="tag">품질 관리</span>
                                </div>
                            </div>
                        </div>

                        <div className="process-step animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3 className="step-title">알고리즘 최적화 노출</h3>
                                <p className="step-description">
                                    타겟 시청자에게 반복 노출시켜 하나의 '유행'으로 정착시킵니다.
                                    데이터를 분석하고 다음 캠페인에 대한 전략을 제언합니다.
                                </p>
                                <div className="step-tags">
                                    <span className="tag">알고리즘 최적화</span>
                                    <span className="tag">데이터 분석</span>
                                    <span className="tag">다음 전략 수립</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;
