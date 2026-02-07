import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-watermark">DEVTREND</div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                            <span className="logo-dev">dev</span>
                            <span className="logo-trend">trend</span>
                            <svg className="logo-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                        <p className="footer-tagline">
                            당신의 브랜드를 트렌드로 만드는<br />
                            릴스 바이럴 마케팅 전문가
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-title">서비스</h4>
                            <ul>
                                <li><a href="#intro">릴스 마케팅</a></li>
                                <li><a href="#solution">KOC 마케팅</a></li>
                                <li><a href="#process">제작 프로세스</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">회사</h4>
                            <ul>
                                <li><a href="#hero">소개</a></li>
                                <li><a href="#closing">문의하기</a></li>
                                <li><a href="#comparison">차별점</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">연락처</h4>
                            <ul>
                                <li>이메일: devtreand@gmail.com</li>
                                <li>전화: 010-3934-8956</li>
                                <li>주소: 서울특별시 서초구 반포1동 사평대로53길 30</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 devtrend. All rights reserved.</p>
                    <div className="footer-social">
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="YouTube">📹</a>
                        <a href="#" aria-label="Facebook">📘</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
