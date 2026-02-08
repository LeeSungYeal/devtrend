import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-watermark">DEVTREND</div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links-row">
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
                    </div>

                    <div className="footer-contact-row">
                        <h4 className="footer-title contact-title">연락처</h4>
                        <ul className="contact-list">
                            <li>이메일: devtreand@gmail.com</li>
                            <li>전화: 010-3934-8956</li>
                            <li>주소: 서울특별시 서초구 반포1동 사평대로53길 30</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 devtrend. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
