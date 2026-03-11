import React from 'react';
import { Link } from 'react-router-dom';
import {
  FeatureCard,
  TestimonialCard,
  FAQItem,
  AnimatedCounter,
  sharedStyles
} from '../SharedComponents';

export default function GoogleAdsPage() {
  const accentColor = '#4285F4'; // Google Blue

  // --- 1. FEATURES DATA (Updated with Your Content) ---
  const features = [
    {
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&q=80",
      title: "Google Search Ads",
      description: "Capture ready-to-buy customers. We run keyword-focused campaigns to target high-converting terms, ensuring you appear at the top of Google results when intent is highest."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      title: "Local Business Targeting",
      description: "Focus on Noida & Delhi NCR. We use city & pin-code targeting, call-only ads, and Google Maps integration to attract nearby customers for clinics, shops, and service providers."
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      title: "Google Display Ads",
      description: "Build brand awareness across the web. Ideal for remarketing, banner ads on websites/apps, and visual promotions to keep your brand in front of your audience."
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=600&q=80",
      title: "E-Commerce & Shopping Ads",
      description: "Generate direct product sales. We utilize Shopping Ads, product listings, and dynamic remarketing to convert search traffic into revenue for online sellers."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Smart Audience Targeting",
      description: "We don't waste budget. We use keyword intent targeting, custom audiences, and remarketing to website visitors to ensure ads reach users most likely to convert."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      title: "Conversion Tracking & Analytics",
      description: "Performance matters. We track calls, form submissions, sales, and ROAS (Return on Ad Spend) to provide transparent reports with actionable insights."
    }
  ];

  // --- 2. PROCESS DATA (Aligned with Your Optimization Process) ---
  const process = [
    { title: "Campaign Strategy", description: "We analyze your business goals to choose the right mix of Search, Display, or Shopping ads targeting Noida or Global markets." },
    { title: "Keyword Optimization", description: "Continuous research to find high-intent keywords and rigorous Negative Keyword filtering to stop wasted spend." },
    { title: "Ad Copy & A/B Testing", description: "Writing compelling ad copies and testing different variations to improve Click-Through Rates (CTR) and Quality Scores." },
    { title: "Smart Bidding", description: "Using advanced bid strategies and budget optimization to ensure you get the maximum leads for your spend." },
    { title: "Audience Remarketing", description: "Re-engaging visitors who didn't convert the first time using strategic display and search remarketing lists." },
    { title: "Performance Tracking", description: "Tracking every action—Calls, Leads, Sales—and providing detailed reports on your Return on Ad Spend (ROAS)." }
  ];

  const faqs = [
    { question: "Who should use Google Ads?", answer: "Any business seeking immediate visibility and leads. It's perfect for Service-based businesses, Local shops in Noida, E-Commerce stores, and B2B companies." },
    { question: "How does it help local businesses in Noida?", answer: "We use location-based targeting (Pin-codes/City), Call-only ads, and Google Maps integration to ensure you appear when locals search for your services." },
    { question: "What is Google Search Ads?", answer: "Search Ads allow you to appear at the top of Google results when users search for specific keywords. It captures users with strong buying intent." },
    { question: "Do you track phone calls and leads?", answer: "Yes. We track Calls, WhatsApp clicks, Form submissions, and Sales to measure the exact ROI of your campaigns." },
    { question: "What is the difference between Search and Display ads?", answer: "Search Ads capture active intent (people searching for you). Display Ads build awareness (showing banners while people browse other sites)." },
    { question: "How do you control the budget?", answer: "We use bid management, daily budget caps, and negative keyword lists to ensure your money is spent only on high-quality clicks." },
    { question: "Can E-Commerce businesses benefit?", answer: "Absolutely. We use Google Shopping Ads and Dynamic Remarketing to show your exact products to interested buyers, driving direct online sales." }
  ];

  const techStack = [
    "Google Search", "Google Display", "YouTube Ads", "Google Shopping", "Google Maps", "Gmail Ads", "Google Analytics 4", "Tag Manager", "Looker Studio", "Keyword Planner"
  ];

  return (
    <div className="service-page">
      <style>{sharedStyles}</style>
      <style>{`
        .bb-svc-hero-section {
          background: linear-gradient(135deg, #1a73e8 0%, #4285F4 50%, #174ea6 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .bb-svc-hero-section::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.3;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bb-svc-tech-ticker {
          overflow: hidden;
          background: var(--bg-secondary, #f8fafc);
          padding: 2rem 0;
          border-bottom: 1px solid var(--border-color, #e2e8f0);
        }
        @media (min-width: 768px) {
          .bb-svc-tech-ticker { padding: 3rem 0; }
        }
        .bb-svc-tech-track {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 25s linear infinite;
        }
        .bb-svc-tech-track:hover { animation-play-state: paused; }
        .bb-svc-tech-item {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-secondary, #64748b);
          padding: 0.75rem 1.5rem;
          margin: 0 0.5rem;
          background: var(--card-bg, white);
          border-radius: 8px;
          border: 1px solid var(--border-color, #e2e8f0);
          transition: all 0.3s;
        }
        .bb-svc-tech-item:hover {
          color: ${accentColor};
          border-color: ${accentColor};
        }

        .google-logo {
          display: flex;
          gap: 4px;
          animation: float 3s ease-in-out infinite;
        }
        .google-letter {
          font-size: 3rem;
          font-weight: 700;
          text-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* --- CUSTOM CARD STYLES (Features) --- */
        .bb-svc-features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        @media (min-width: 768px) {
          .bb-svc-features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .bb-svc-features-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .bb-img-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .bb-img-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.1);
            border-color: ${accentColor};
        }
        .bb-card-image-box {
            width: 100%;
            height: 150px;
            position: relative;
        }
        .bb-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        .bb-card-content {
            padding: 1.25rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .bb-card-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 0.5rem;
        }
        .bb-card-desc {
            font-size: 0.9rem;
            color: #64748b;
            line-height: 1.5;
            margin-bottom: 1rem;
        }

        /* --- UNIQUE PROCESS SECTION STYLES --- */
        .bb-process-unique-section {
          padding: 80px 20px;
          background: #f8fafc;
        }
        .bb-process-split-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 50px;
            align-items: flex-start;
        }
        @media (min-width: 992px) {
            .bb-process-split-container {
                flex-direction: row;
                align-items: stretch;
            }
        }
        .bb-process-left-img {
            flex: 1;
            width: 100%;
            min-height: 400px;
            position: relative;
        }
        .bb-unique-audit-img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            object-fit: cover;
        }
        .bb-process-right-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .bb-process-right-content h2 {
            font-size: 2.25rem;
            color: #1e293b;
            margin-bottom: 1rem;
        }
        .bb-process-right-content p.lead {
            font-size: 1.1rem;
            color: #64748b;
            margin-bottom: 2rem;
            line-height: 1.6;
        }
        .bb-audit-timeline {
            display: flex;
            flex-direction: column;
            gap: 20px;
            position: relative;
        }
        .bb-audit-timeline::before {
            content: '';
            position: absolute;
            left: 20px;
            top: 10px;
            bottom: 10px;
            width: 2px;
            background: #e2e8f0;
        }
        .bb-audit-step {
            display: flex;
            gap: 20px;
            position: relative;
            z-index: 1;
        }
        .bb-audit-marker {
            width: 42px;
            height: 42px;
            background: ${accentColor};
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
            border: 4px solid #f8fafc;
            box-shadow: 0 4px 6px rgba(66, 133, 244, 0.2);
        }
        .bb-audit-text h3 {
            font-size: 1.1rem;
            margin: 0 0 5px 0;
            color: #1e293b;
        }
        .bb-audit-text p {
            margin: 0;
            font-size: 0.95rem;
            color: #64748b;
            line-height: 1.4;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="bb-svc-hero-section">
        <div className="bb-svc-hero-content">
          <div className="bb-svc-hero-text">
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255, 255, 255, 0.15)', color: 'white', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '0.05em' }}>
              🔍 GOOGLE ADS SERVICES IN NOIDA
            </div>
            <h1>Reach High-Intent <br/><span style={{color: '#ffffff'}}>Customers Instantly</span></h1>
            <p>Our Google Ads Services in Noida are built for businesses that want to appear exactly when customers are searching for their products or services.</p>

            <div className="bb-svc-hero-buttons">
              <Link to="/contact-us">
                <button className="bb-svc-btn-primary" style={{background: 'white', color: accentColor, border: 'none'}}>
                  Get Instant Leads
                </button>
              </Link>
              <Link to="/projects">
                <button className="bb-svc-btn-secondary" style={{borderColor: 'rgba(255,255,255,0.5)', color: 'white'}}>
                  View Results
                </button>
              </Link>
            </div>
          </div>

          <div className="bb-svc-hero-visual">
            <div className="google-logo">
              <span className="google-letter" style={{color: '#4285F4'}}>G</span>
              <span className="google-letter" style={{color: '#EA4335'}}>o</span>
              <span className="google-letter" style={{color: '#FBBC05'}}>o</span>
              <span className="google-letter" style={{color: '#4285F4'}}>g</span>
              <span className="google-letter" style={{color: '#34A853'}}>l</span>
              <span className="google-letter" style={{color: '#EA4335'}}>e</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bb-svc-stats-section">
        <div className="bb-svc-stats-grid">
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={100} suffix="%" /></div>
            <div className="bb-svc-stat-label">Instant Visibility</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={500} suffix="%" /></div>
            <div className="bb-svc-stat-label">Higher ROI</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={50} suffix="K+" /></div>
            <div className="bb-svc-stat-label">Qualified Leads</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={24} suffix="/7" /></div>
            <div className="bb-svc-stat-label">Performance Tracking</div>
          </div>
        </div>
      </section>

      {/* TECH TICKER */}
      <div className="bb-svc-tech-ticker">
        <div style={{textAlign:'center', marginBottom:'1.5rem', textTransform:'uppercase', fontSize:'0.75rem', letterSpacing:'3px', fontWeight:'bold', color: accentColor}}>
          GOOGLE ADS ECOSYSTEM
        </div>
        <div className="bb-svc-tech-track">
           {[...techStack, ...techStack].map((tech, i) => (
             <span key={i} className="bb-svc-tech-item">{tech}</span>
           ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="bb-svc-features-section">
        <div className="bb-svc-section-header">
          <h2>Google Ads Solutions</h2>
          <p>We build audience-focused, keyword-driven campaigns that deliver measurable ROI.</p>
        </div>
        <div className="bb-svc-features-grid">
          {features.map((f, i) => (
            <div className='bb-img-card' key={i}>
                <div className='bb-card-image-box'>
                  <img src={f.image} alt={f.title} className='bb-card-img' />
                </div>
                <div className='bb-card-content'>
                  <h3 className='bb-card-title'>{f.title}</h3>
                  <p className='bb-card-desc'>{f.description}</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* UNIQUE PROCESS SECTION */}
      <section className="bb-process-unique-section">
        <div className="bb-process-split-container">
            
            {/* LEFT SIDE: UNIQUE IMAGE */}
            <div className="bb-process-left-img">
                <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80"
                    alt="Google Ads Optimization Process"
                    className="bb-unique-audit-img"
                />
            </div>

            {/* RIGHT SIDE: TIMELINE CONTENT */}
            <div className="bb-process-right-content">
                <h2>Our Optimization Process</h2>
                <p className="lead">Running ads is not enough—optimization is key. We keep your Google Ads campaigns profitable with a rigorous process.</p>

                <div className="bb-audit-timeline">
                    {process.map((step, index) => (
                        <div className="bb-audit-step" key={index}>
                            <div className="bb-audit-marker">
                                {index + 1}
                            </div>
                            <div className="bb-audit-text">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bb-svc-testimonials-section">
        <div className="bb-svc-section-header">
          <h2>Client Success Stories</h2>
        </div>
        <div className="bb-svc-testimonials-grid">
          <TestimonialCard quote="Bits and Bytes IT Solution transformed our local clinic's visibility. We get daily calls from patients in Noida." author="Dr. Amit Verma" role="Dentist" company="Smile Care" avatar="AV" />
          <TestimonialCard quote="Their Shopping Ads strategy helped us scale our online store. Our ROAS has never been higher." author="Pooja Singh" role="Founder" company="Fashion Kart" avatar="PS" />
          <TestimonialCard quote="Call-only ads worked wonders for our plumbing business. We are fully booked thanks to their targeting." author="Rakesh Kumar" role="Owner" company="Quick Fix" avatar="RK" />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bb-svc-faq-section">
        <div className="bb-svc-section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="bb-svc-faq-container">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bb-svc-cta-section" style={{background: `linear-gradient(135deg, ${accentColor}, #1a73e8)`}}>
        <h2>Start Google Ads for Your Business in Noida</h2>
        <p>If you want immediate visibility, qualified leads, and scalable growth, we are the right choice.</p>
        <Link to="/contact-us">
          <button className="bb-svc-btn-primary" style={{background: 'white', color: accentColor, border: 'none'}}>
            Get Started Now
          </button>
        </Link>
      </section>
    </div>
  );
}