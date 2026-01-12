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

  // --- 1. FEATURES DATA (Updated with Images) ---
  const features = [
    {
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&q=80",
      title: "Search Ads",
      description: "Capture high-intent buyers actively searching for your products or services on Google. Text ads appear at the top of search results when users search for your target keywords, driving qualified traffic to your website."
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      title: "Display Network",
      description: "Reach millions across 2M+ websites with eye-catching banner and responsive display ads. Perfect for brand awareness, remarketing, and reaching users while they browse their favorite sites."
    },
    {
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
      title: "YouTube Ads",
      description: "Engage 2.5B+ monthly users with skippable, non-skippable, and bumper video ads. Powerful for storytelling, brand building, and reaching audiences during their entertainment time."
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=600&q=80",
      title: "Shopping Ads",
      description: "Showcase your products with images, prices, and reviews right in Google search results. Essential for e-commerce businesses to drive product sales and compete in the digital marketplace."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      title: "Local Service Ads",
      description: "Get verified leads for local businesses with Google Guaranteed badges and pay-per-lead pricing. Perfect for service providers like plumbers, electricians, lawyers, and healthcare professionals."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Performance Max",
      description: "AI-powered campaigns that optimize across all Google properties for maximum conversions. Machine learning finds your best customers across Search, Display, YouTube, Gmail, and Maps."
    }
  ];

  // --- ADDITIONAL SERVICES FOR SEO ---
  const additionalServices = [
    { title: "Conversion Tracking Setup", description: "Proper tracking of calls, forms, purchases, and custom events using Google Tag Manager and GA4.", icon: "📊" },
    { title: "Competitor Analysis", description: "Deep analysis of competitor ad strategies, keywords, and landing pages to identify opportunities.", icon: "🔍" },
    { title: "A/B Testing", description: "Continuous testing of ad copy, landing pages, and audiences to improve performance.", icon: "⚡" },
    { title: "Negative Keyword Management", description: "Strategic blocking of irrelevant searches to prevent wasted spend.", icon: "🚫" },
    { title: "Remarketing Campaigns", description: "Re-engage website visitors with targeted display and search ads.", icon: "🔄" },
    { title: "Landing Page Optimization", description: "Create high-converting landing pages for your Google Ads campaigns.", icon: "📄" }
  ];

  // --- 2. PROCESS DATA ---
  const process = [
    { title: "Account Audit & Research", description: "Deep dive into your industry, competitors, and keyword opportunities. We analyze search volumes, competition levels, and CPC data to build a solid foundation." },
    { title: "Campaign Architecture", description: "Strategic account structure with proper campaign segmentation, ad groups, and keyword matching types for maximum Quality Score and relevance." },
    { title: "Ad Copy & Landing Pages", description: "Compelling ad copy with strong CTAs and conversion-optimized landing pages. We write multiple variations for A/B testing." },
    { title: "Bid Strategy & Launch", description: "Smart bidding strategies, comprehensive conversion tracking setup, and controlled campaign launch with close monitoring." },
    { title: "Continuous Optimization", description: "Ongoing bid adjustments, negative keyword additions, audience refinements, and ad copy testing to improve performance month over month." }
  ];

  const faqs = [
    { question: "How much should I spend on Google Ads?", answer: "Start with ₹50,000-1,00,000/month for meaningful data. Competitive industries may need ₹2-5L+ for significant market share. We'll recommend an optimal budget based on your goals and industry competition." },
    { question: "How do you charge for management?", answer: "We charge 12-18% of ad spend (minimum ₹20,000/month) based on account complexity and services included. This covers strategy, optimization, reporting, and dedicated account management." },
    { question: "How long before I see results?", answer: "Search campaigns can generate leads within days. Optimization for best performance typically takes 4-8 weeks as we gather data and refine targeting. Significant ROI improvements usually occur within 2-3 months." },
    { question: "Do you guarantee results?", answer: "We don't guarantee specific results as they depend on many factors like industry, competition, and landing page quality. However, we do guarantee best-in-class strategy, transparent reporting, and continuous optimization." },
    { question: "Can you help with landing pages?", answer: "Yes! We provide landing page audits and can build high-converting pages optimized for your campaigns. Good landing pages are crucial for Quality Score and conversion rates." },
    { question: "What is Quality Score and why does it matter?", answer: "Quality Score is Google's rating (1-10) of your ad relevance. Higher scores mean lower costs per click and better ad positions. We optimize through relevant keywords, compelling ad copy, and fast-loading landing pages." },
    { question: "What's the difference between Search and Display ads?", answer: "Search ads appear when people actively search for your keywords (high intent). Display ads appear on websites and apps (awareness/retargeting). Most businesses benefit from both, depending on goals." },
    { question: "How do you track conversions?", answer: "We set up comprehensive tracking using Google Tag Manager, Google Analytics 4, and Google Ads conversion tracking. This includes form submissions, phone calls, purchases, and custom events." },
    { question: "Can you target specific locations?", answer: "Yes! Google Ads offers precise geo-targeting from country-level down to radius targeting around specific addresses. Perfect for local businesses or companies with specific service areas." },
    { question: "What reporting do you provide?", answer: "We provide weekly performance updates and comprehensive monthly reports covering impressions, clicks, conversions, cost per conversion, ROAS, and actionable insights with a real-time dashboard." }
  ];

  const techStack = [
    "Google Search", "Google Display", "YouTube Ads", "Google Shopping", "Performance Max", "Discovery Ads", "Google Analytics 4", "Tag Manager", "Looker Studio", "Keyword Planner"
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

        /* --- ✅ CUSTOM CARD STYLES (Features) --- */
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

        /* --- ✅ UNIQUE PROCESS SECTION STYLES --- */
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
              🔍 GOOGLE ADVERTISING
            </div>
            <h1>Dominate Google <br/><span style={{color: '#ffffff'}}>Search & Beyond</span></h1>
            <p>Capture customers at the exact moment they're searching for your products or services.</p>

            <div className="bb-svc-hero-buttons">
              <Link to="/contact-us">
                <button className="bb-svc-btn-primary" style={{background: 'white', color: accentColor, border: 'none'}}>
                  Start Google Ads
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
            <div className="bb-svc-stat-number" style={{color: accentColor}}>₹<AnimatedCounter end={8} suffix="Cr+" /></div>
            <div className="bb-svc-stat-label">Ad Spend Managed</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={500} suffix="%" /></div>
            <div className="bb-svc-stat-label">Avg. ROAS</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={50} suffix="K+" /></div>
            <div className="bb-svc-stat-label">Leads Generated</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={75} suffix="+" /></div>
            <div className="bb-svc-stat-label">Businesses Scaled</div>
          </div>
        </div>
      </section>

      {/* TECH TICKER */}
      <div className="bb-svc-tech-ticker">
        <div style={{textAlign:'center', marginBottom:'1.5rem', textTransform:'uppercase', fontSize:'0.75rem', letterSpacing:'3px', fontWeight:'bold', color: accentColor}}>
          GOOGLE ADS PLATFORMS
        </div>
        <div className="bb-svc-tech-track">
           {[...techStack, ...techStack].map((tech, i) => (
             <span key={i} className="bb-svc-tech-item">{tech}</span>
           ))}
        </div>
      </div>

      {/* ✅ FEATURES SECTION (UPDATED WITH IMAGES) */}
      <section className="bb-svc-features-section">
        <div className="bb-svc-section-header">
          <h2>Full-Funnel Google Advertising</h2>
          <p>From awareness to conversion, we cover every touchpoint.</p>
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

      {/* ✅ UNIQUE PROCESS SECTION (SPLIT LAYOUT) */}
      <section className="bb-process-unique-section">
        <div className="bb-process-split-container">
            
            {/* LEFT SIDE: UNIQUE IMAGE */}
            <div className="bb-process-left-img">
                <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80"
                    alt="Google Ads Strategy Process"
                    className="bb-unique-audit-img"
                />
            </div>

            {/* RIGHT SIDE: TIMELINE CONTENT */}
            <div className="bb-process-right-content">
                <h2>Our Google Ads Process</h2>
                <p className="lead">A systematic approach to profitable advertising. From keyword research to continuous optimization.</p>

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
          <TestimonialCard quote="Our cost per lead dropped by 60% while lead quality improved dramatically. Incredible results!" author="Vikram Joshi" role="Director, PropRealty" avatar="VJ" />
          <TestimonialCard quote="They helped us achieve #1 rankings for our most competitive keywords. ROI has been phenomenal." author="Anita Sharma" role="CEO, EduLearn" avatar="AS" />
          <TestimonialCard quote="The Shopping campaign setup transformed our e-commerce business. Sales doubled in 3 months." author="Raj Malhotra" role="Founder, GadgetStore" avatar="RM" />
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
        <h2>Ready to Grow with Google Ads?</h2>
        <p>Get a free account audit and discover untapped opportunities.</p>
        <Link to="/contact-us">
          <button className="bb-svc-btn-primary" style={{background: 'white', color: accentColor, border: 'none'}}>
            Get Free Account Audit
          </button>
        </Link>
      </section>
    </div>
  );
}