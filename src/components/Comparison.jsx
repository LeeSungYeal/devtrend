import './Comparison.css';

function Comparison() {
    return (
        <section className="comparison section" id="comparison">
            <div className="container">
                <div className="comparison-content">
                    <h2 className="section-title">일반 대행사 vs devtrend</h2>
                    <p className="section-description">
                        중개만 하는 대행사와 직접 기획·제작·협업하는 devtrend,<br />
                        차이는 명확합니다
                    </p>

                    <div className="comparison-table">
                        <div className="comparison-header animate-fade-in-up">
                            <div className="header-cell"></div>
                            <div className="header-cell competitor">일반 광고 대행사</div>
                            <div className="header-cell devtrend">devtrend</div>
                        </div>

                        <div className="comparison-row animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="row-label">콘텐츠 제작</div>
                            <div className="row-cell competitor">
                                <span className="icon">❌</span>
                                <p>외주 제작 위주<br />(품질 관리 어려움)</p>
                            </div>
                            <div className="row-cell devtrend">
                                <span className="icon">✅</span>
                                <p>내부 직접 기획 및<br />촬영/편집</p>
                            </div>
                        </div>

                        <div className="comparison-row animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="row-label">인플루언서 관리</div>
                            <div className="row-cell competitor">
                                <span className="icon">❌</span>
                                <p>단순 리스트 전달<br />(중개만)</p>
                            </div>
                            <div className="row-cell devtrend">
                                <span className="icon">✅</span>
                                <p>긴밀한 협업 및<br />풀스택 관리</p>
                            </div>
                        </div>

                        <div className="comparison-row animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="row-label">마케팅 방식</div>
                            <div className="row-cell competitor">
                                <span className="icon">❌</span>
                                <p>단발성 광고 노출<br />(일회성)</p>
                            </div>
                            <div className="row-cell devtrend">
                                <span className="icon">✅</span>
                                <p>반복 노출을 통한<br />트렌드 형성</p>
                            </div>
                        </div>

                        <div className="comparison-row animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="row-label">데이터 피드백</div>
                            <div className="row-cell competitor">
                                <span className="icon">❌</span>
                                <p>노출수 보고에 그침<br />(분석 부재)</p>
                            </div>
                            <div className="row-cell devtrend">
                                <span className="icon">✅</span>
                                <p>타겟/전환 분석 및<br />다음 전략 제언</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comparison;
