import { useState } from 'react';
import './Closing.css';
import { useMagnetic } from '../hooks/useMagnetic';

function Closing() {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            companyName: formData.company,
            managerName: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            details: formData.message
        };

        try {
            // Log submission attempt
            console.log('Sending data:', payload);

            const response = await fetch('https://script.google.com/macros/s/AKfycbyW1WLAzfGE4s56PYUIM4qc1DjgKRKFJ-lQfPevDYBG3LsLRkmDeUXLYs0nFilc7mVg/exec', {
                method: 'POST',
                // Google Apps Script usually needs text/plain to avoid CORS preflight issues with simple requests, 
                // or specific headers. Using JSON.stringify directly.
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.result === 'success') {
                alert('devTrend 신청이 완료되었습니다!');

                // Keep local storage logic as backup
                const submissions = JSON.parse(localStorage.getItem('devtrend_submissions') || '[]');
                submissions.push({
                    ...payload,
                    timestamp: new Date().toISOString()
                });
                localStorage.setItem('devtrend_submissions', JSON.stringify(submissions));

                setSubmitted(true);

                // Reset form
                setTimeout(() => {
                    setFormData({
                        company: '',
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                    setSubmitted(false);
                }, 3000);
            } else {
                console.error('Submission failed:', result);
                alert('신청 전송에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('전송 실패:', error);
            alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
    };

    return (
        <section className="closing section" id="closing">
            <div className="container">
                <div className="closing-content">
                    <h2 className="section-title">성장을 경험할 준비가 되셨나요?</h2>
                    <p className="section-description">
                        지금 바로 무료 진단을 받고,<br />
                        당신의 브랜드를 <span className="highlight">트렌드</span>로 만들어보세요
                    </p>

                    <div className="closing-grid">
                        <div className="cta-benefits animate-fade-in-up" style={{ animationDelay: '0s' }}>
                            <h3 className="benefits-title">무료 진단에 포함된 내용</h3>
                            <ul className="benefits-list">
                                <li>
                                    <span className="check-icon">✓</span>
                                    <div>
                                        <strong>타겟 시장 분석</strong>
                                        <p>당신의 제품에 최적화된 고객층 분석</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    <div>
                                        <strong>경쟁사 벤치마킹</strong>
                                        <p>시장 내 포지셔닝 전략 제안</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    <div>
                                        <strong>맞춤 캠페인 전략</strong>
                                        <p>데이터 기반의 릴스 바이럴 로드맵</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    <div>
                                        <strong>예상 ROI 분석</strong>
                                        <p>투자 대비 예상 수익률 시뮬레이션</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="contact-form-wrapper animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {submitted ? (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h3>신청이 완료되었습니다!</h3>
                                    <p>빠른 시일 내에 연락드리겠습니다.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="company">회사명 *</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            placeholder="회사명을 입력하세요"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">담당자명 *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="성함을 입력하세요"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">이메일 *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="email@example.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">전화번호 *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="010-0000-0000"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">문의 내용</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="자세한 문의 내용을 입력해주세요"
                                        ></textarea>
                                    </div>

                                    <MagneticSubmitBtn className="btn btn-primary btn-large submit-btn">
                                        무료 진단 신청하기
                                    </MagneticSubmitBtn>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const MagneticSubmitBtn = ({ children, className }) => {
    const { ref, handleMouseMove, handleMouseLeave } = useMagnetic({ strength: 0.2 });
    return (
        <button
            ref={ref}
            type="submit"
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </button>
    );
};

export default Closing;
