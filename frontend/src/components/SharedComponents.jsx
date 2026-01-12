import React, { useState, useEffect } from 'react';

// Animated Counter Component
export const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Feature Card Component
export const FeatureCard = ({ icon, title, description, color }) => (
  <div className="bb-svc-feature-card" style={{ '--bb-accent': color }}>
    <div className="bb-svc-feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Process Step Component
export const ProcessStep = ({ number, title, description, color }) => (
  <div className="bb-svc-process-step">
    <div className="bb-svc-step-number" style={{ background: color }}>{number}</div>
    <div className="bb-svc-step-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

// Pricing Card Component
export const PricingCard = ({ title, price, features, popular, color }) => (
  <div className={`bb-svc-pricing-card ${popular ? 'bb-svc-popular' : ''}`} style={{ '--bb-accent': color }}>
    {popular && <div className="bb-svc-popular-badge">Most Popular</div>}
    <h3>{title}</h3>
    <div className="bb-svc-price">
      <span className="bb-svc-currency">₹</span>
      <span className="bb-svc-amount">{price}</span>
      <span className="bb-svc-period">/project</span>
    </div>
    <ul className="bb-svc-pricing-features">
      {features.map((feature, index) => (
        <li key={index}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="bb-svc-pricing-btn" style={{ background: color }}>Get Started</button>
  </div>
);

// Testimonial Card Component
export const TestimonialCard = ({ quote, author, role, company, avatar }) => (
  <div className="bb-svc-testimonial-card">
    <div className="bb-svc-quote-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
    </div>
    <p className="bb-svc-quote">{quote}</p>
    <div className="bb-svc-author-info">
      <div className="bb-svc-avatar">{avatar}</div>
      <div>
        <h5>{author}</h5>
        <p>{role}{company && `, ${company}`}</p>
      </div>
    </div>
  </div>
);

// FAQ Item Component
export const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bb-svc-faq-item ${isOpen ? 'bb-svc-open' : ''}`}>
      <div className="bb-svc-faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h4>{question}</h4>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', flexShrink: 0 }}>
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div className="bb-svc-faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

/* ============================================
   SHARED STYLES - ALL SCOPED WITH bb-svc- PREFIX
   These styles ONLY affect service pages
   ============================================ */
export const sharedStyles = `
  /* Service Page Container */
  .service-page {
    min-height: 100vh;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow-x: hidden;
    padding-top: 1px;
    background: #ffffff;
    color: #0f172a;
  }

  @media (min-width: 768px) {
    .service-page { padding-top: 1px; }
  }

  /* HERO */
  .bb-svc-hero-section {
    position: relative;
    padding: 4rem 1rem;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .bb-svc-hero-section { padding: 6rem 2rem; }
  }

  .bb-svc-hero-content {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .bb-svc-hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
  }

  .bb-svc-hero-text { text-align: center; }
  @media (min-width: 1024px) {
    .bb-svc-hero-text { text-align: left; }
  }

  .bb-svc-hero-text h1 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: inherit;
  }
  @media (min-width: 640px) { .bb-svc-hero-text h1 { font-size: 2.5rem; } }
  @media (min-width: 1024px) { .bb-svc-hero-text h1 { font-size: 3rem; } }

  .bb-svc-hero-text p {
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    line-height: 1.6;
    color: inherit;
  }
  @media (min-width: 768px) { .bb-svc-hero-text p { font-size: 1.15rem; } }

  .bb-svc-hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  @media (min-width: 640px) {
    .bb-svc-hero-buttons { flex-direction: row; justify-content: center; }
  }
  @media (min-width: 1024px) {
    .bb-svc-hero-buttons { justify-content: flex-start; }
  }

  .bb-svc-btn-primary, .bb-svc-btn-secondary {
    width: 100%;
    padding: 0.875rem 1.75rem;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
  }
  @media (min-width: 640px) {
    .bb-svc-btn-primary, .bb-svc-btn-secondary {
      width: auto;
      padding: 1rem 2rem;
      font-size: 1rem;
    }
  }

  .bb-svc-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }

  .bb-svc-btn-secondary {
    border: 2px solid currentColor;
    background: transparent;
  }
  .bb-svc-btn-secondary:hover { background: rgba(255,255,255,0.1); }

  .bb-svc-hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .bb-svc-code-preview {
    width: 100%;
    max-width: 450px;
    padding: 1.25rem;
    border-radius: 16px;
    font-family: 'Fira Code', 'Monaco', monospace;
    font-size: 0.7rem;
    line-height: 1.6;
  }
  @media (min-width: 640px) {
    .bb-svc-code-preview { font-size: 0.8rem; padding: 1.5rem; }
  }

  .bb-svc-code-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* STATS */
  .bb-svc-stats-section {
    padding: 2.5rem 1rem;
    background: #ffffff;
  }
  @media (min-width: 768px) { .bb-svc-stats-section { padding: 3.5rem 2rem; } }

  .bb-svc-stats-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media (min-width: 768px) {
    .bb-svc-stats-grid { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
  }

  .bb-svc-stat-card {
    text-align: center;
    padding: 1.25rem 1rem;
    border-radius: 12px;
    background: #f8fafc;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  @media (min-width: 768px) {
    .bb-svc-stat-card { padding: 1.5rem; border-radius: 16px; }
  }
  .bb-svc-stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.08);
  }

  .bb-svc-stat-number {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 0.25rem;
    color: #0f172a;
  }
  @media (min-width: 768px) {
    .bb-svc-stat-number { font-size: 2.5rem; margin-bottom: 0.5rem; }
  }

  .bb-svc-stat-label {
    color: #64748b;
    font-size: 0.7rem;
    font-weight: 500;
  }
  @media (min-width: 768px) { .bb-svc-stat-label { font-size: 0.85rem; } }

  /* TECH TICKER */
  .bb-svc-tech-ticker {
    overflow: hidden;
    background: #f8fafc;
    padding: 2rem 0;
    border-bottom: 1px solid #e2e8f0;
  }
  @media (min-width: 768px) { .bb-svc-tech-ticker { padding: 3rem 0; } }

  @keyframes bb-svc-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .bb-svc-tech-track {
    display: inline-flex;
    white-space: nowrap;
    animation: bb-svc-scroll 25s linear infinite;
  }
  .bb-svc-tech-track:hover { animation-play-state: paused; }

  .bb-svc-tech-item {
    font-size: 1rem;
    font-weight: 700;
    color: #64748b;
    padding: 0.75rem 1.5rem;
    margin: 0 0.5rem;
    background: white;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    transition: all 0.3s;
  }
  @media (min-width: 768px) {
    .bb-svc-tech-item { font-size: 1.1rem; padding: 0.75rem 2rem; margin: 0 0.75rem; }
  }

  /* SECTION HEADER */
  .bb-svc-section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    padding: 0 1rem;
  }
  @media (min-width: 768px) { .bb-svc-section-header { margin: 0 auto 3.5rem; } }

  .bb-svc-section-header h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 0.75rem;
  }
  @media (min-width: 768px) {
    .bb-svc-section-header h2 { font-size: 2.25rem; margin-bottom: 1rem; }
  }

  .bb-svc-section-header p {
    font-size: 0.95rem;
    color: #64748b;
  }
  @media (min-width: 768px) { .bb-svc-section-header p { font-size: 1.05rem; } }

  /* FEATURES */
  .bb-svc-features-section {
    padding: 3.5rem 1rem;
    background: #f8fafc;
  }
  @media (min-width: 768px) { .bb-svc-features-section { padding: 5rem 2rem; } }

  .bb-svc-features-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  @media (min-width: 640px) { .bb-svc-features-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .bb-svc-features-grid { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; } }

  .bb-svc-feature-card {
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    transition: all 0.3s;
    border: 1px solid #e2e8f0;
  }
  @media (min-width: 768px) { .bb-svc-feature-card { padding: 1.75rem; border-radius: 16px; } }
  .bb-svc-feature-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px rgba(0,0,0,0.08);
    border-color: var(--bb-accent, #0EA5E9);
  }

  .bb-svc-feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    background: var(--bb-accent, #0EA5E9);
  }
  @media (min-width: 768px) {
    .bb-svc-feature-icon { width: 56px; height: 56px; border-radius: 12px; margin-bottom: 1.25rem; }
  }

  .bb-svc-feature-card h3 {
    font-size: 1.05rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  @media (min-width: 768px) { .bb-svc-feature-card h3 { font-size: 1.15rem; margin-bottom: 0.75rem; } }

  .bb-svc-feature-card p {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.85rem;
    margin: 0;
  }
  @media (min-width: 768px) { .bb-svc-feature-card p { font-size: 0.9rem; } }

  /* PROCESS */
  .bb-svc-process-section {
    padding: 3.5rem 1rem;
    background: #ffffff;
  }
  @media (min-width: 768px) { .bb-svc-process-section { padding: 5rem 2rem; } }

  .bb-svc-process-grid {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  @media (min-width: 768px) { .bb-svc-process-grid { gap: 1.75rem; } }

  .bb-svc-process-step {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  @media (min-width: 768px) { .bb-svc-process-step { gap: 1.5rem; } }

  .bb-svc-step-number {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    flex-shrink: 0;
  }
  @media (min-width: 768px) { .bb-svc-step-number { width: 44px; height: 44px; font-size: 1.1rem; } }

  .bb-svc-step-content h4 {
    font-size: 1rem;
    color: #1e293b;
    margin-bottom: 0.35rem;
    font-weight: 700;
    margin-top: 0;
  }
  @media (min-width: 768px) { .bb-svc-step-content h4 { font-size: 1.15rem; margin-bottom: 0.5rem; } }

  .bb-svc-step-content p {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.85rem;
    margin: 0;
  }
  @media (min-width: 768px) { .bb-svc-step-content p { font-size: 0.95rem; } }

  /* TESTIMONIALS */
  .bb-svc-testimonials-section {
    padding: 3.5rem 1rem;
    background: #ffffff;
  }
  @media (min-width: 768px) { .bb-svc-testimonials-section { padding: 5rem 2rem; } }

  .bb-svc-testimonials-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  @media (min-width: 768px) { .bb-svc-testimonials-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .bb-svc-testimonials-grid { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; } }

  .bb-svc-testimonial-card {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 14px;
    position: relative;
  }
  @media (min-width: 768px) { .bb-svc-testimonial-card { padding: 1.75rem; border-radius: 16px; } }

  .bb-svc-quote-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #94a3b8;
  }

  .bb-svc-quote {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.7;
    margin-bottom: 1.25rem;
    font-style: italic;
    margin-top: 0;
  }

  .bb-svc-author-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .bb-svc-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .bb-svc-author-info h5 {
    font-size: 0.9rem;
    color: #1e293b;
    font-weight: 600;
    margin: 0;
  }

  .bb-svc-author-info p {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
  }

  /* FAQ */
  .bb-svc-faq-section {
    padding: 3.5rem 1rem;
    background: #f8fafc;
  }
  @media (min-width: 768px) { .bb-svc-faq-section { padding: 5rem 2rem; } }

  .bb-svc-faq-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .bb-svc-faq-item {
    background: #ffffff;
    margin-bottom: 0.75rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  }
  @media (min-width: 768px) { .bb-svc-faq-item { margin-bottom: 1rem; border-radius: 12px; } }

  .bb-svc-faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    cursor: pointer;
    transition: background 0.2s;
    gap: 1rem;
  }
  @media (min-width: 768px) { .bb-svc-faq-question { padding: 1.25rem 1.5rem; } }
  .bb-svc-faq-question:hover { background: #f8fafc; }

  .bb-svc-faq-question h4 {
    font-size: 0.9rem;
    color: #1e293b;
    flex: 1;
    font-weight: 600;
    margin: 0;
  }
  @media (min-width: 768px) { .bb-svc-faq-question h4 { font-size: 0.95rem; } }

  .bb-svc-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .bb-svc-faq-item.bb-svc-open .bb-svc-faq-answer {
    max-height: 300px;
  }

  .bb-svc-faq-answer p {
    padding: 0 1.25rem 1.25rem;
    color: #64748b;
    line-height: 1.6;
    font-size: 0.85rem;
    margin: 0;
  }
  @media (min-width: 768px) { .bb-svc-faq-answer p { padding: 0 1.5rem 1.5rem; font-size: 0.9rem; } }

  /* CTA */
  .bb-svc-cta-section {
    padding: 3.5rem 1rem;
    text-align: center;
  }
  @media (min-width: 768px) { .bb-svc-cta-section { padding: 5rem 2rem; } }

  .bb-svc-cta-section h2 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
    color: white;
    margin-top: 0;
  }
  @media (min-width: 768px) { .bb-svc-cta-section h2 { font-size: 2.25rem; margin-bottom: 1rem; } }

  .bb-svc-cta-section p {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
    color: white;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px) { .bb-svc-cta-section p { font-size: 1.05rem; margin-bottom: 2rem; } }

  /* PRICING */
  .bb-svc-pricing-card {
    background: #ffffff;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    text-align: center;
    position: relative;
    transition: all 0.3s;
  }
  .bb-svc-pricing-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  .bb-svc-pricing-card.bb-svc-popular {
    border-color: var(--bb-accent, #0EA5E9);
    transform: scale(1.05);
  }

  .bb-svc-popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bb-accent, #0EA5E9);
    color: white;
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .bb-svc-pricing-card h3 {
    font-size: 1.25rem;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .bb-svc-price { margin-bottom: 1.5rem; }
  .bb-svc-currency { font-size: 1.5rem; color: #64748b; vertical-align: top; }
  .bb-svc-amount { font-size: 3rem; font-weight: 800; color: #1e293b; }
  .bb-svc-period { font-size: 0.9rem; color: #64748b; }

  .bb-svc-pricing-features {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    text-align: left;
  }
  .bb-svc-pricing-features li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
    color: #475569;
    font-size: 0.9rem;
  }

  .bb-svc-pricing-btn {
    width: 100%;
    padding: 0.875rem;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
  }
  .bb-svc-pricing-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;
