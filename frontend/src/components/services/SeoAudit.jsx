import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FeatureCard, // We will use custom card layout instead, but keeping import
  ProcessStep, // We will use custom layout instead, but keeping import
  TestimonialCard,
  FAQItem,
  AnimatedCounter,
  sharedStyles
} from '../SharedComponents';

export default function SeoAuditPage({ onNavigate }) {
  // Brand Color + Audit Amber (Warning/Diagnostic Feel)
  const accentColor = '#0EA5E9'; 
  const auditColor = '#F59E0B';

  // --- 1. FEATURES DATA (Updated with Images) ---
  const features = [
    {
      // Replace these URLs with your local images e.g., '/img/seo-tech.jpg'
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
      title: "Technical Health Check",
      description: "We crawl your site like Google does to find broken links (404s), redirect chains, duplicate content, server errors, and indexing issues that hurt rankings."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Backlink Toxicity Analysis",
      description: "Not all links are good. We identify toxic backlinks from spammy sites that might be triggering a Google penalty and recommend disavow actions."
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      title: "Content Gap Analysis",
      description: "Are you answering what users are asking? We analyze thin content, keyword cannibalization, and identify missing keyword opportunities vs competitors."
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
      title: "Core Web Vitals Audit",
      description: "Google hates slow sites. We analyze LCP, FID/INP, and CLS scores, providing specific recommendations to pass the Core Web Vitals assessment."
    },
    {
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=600&q=80",
      title: "Mobile Usability Audit",
      description: "We check for mobile-friendliness issues including clickable elements spacing, text readability, viewport configuration, and responsive design problems."
    },
    {
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
      title: "Schema & Structured Data",
      description: "We ensure search engines understand your content through proper schema markup (Reviews, FAQs, Products, LocalBusiness) to trigger Rich Snippets."
    }
  ];

  // --- AUDIT AREAS FOR SEO ---
  const auditAreas = [
    { title: "On-Page SEO", items: ["Title tags & meta descriptions", "Header hierarchy (H1-H6)", "Keyword optimization", "Internal linking structure", "Image optimization (alt tags, compression)", "URL structure"] },
    { title: "Technical SEO", items: ["Site speed & Core Web Vitals", "Mobile-friendliness", "XML sitemap & robots.txt", "Canonical tags", "Hreflang (for multilingual)", "SSL/HTTPS security"] },
    { title: "Off-Page SEO", items: ["Backlink profile analysis", "Toxic link identification", "Competitor backlink comparison", "Domain authority trends", "Social signals", "Brand mentions"] },
    { title: "Content Audit", items: ["Thin content identification", "Duplicate content issues", "Keyword cannibalization", "Content freshness", "E-E-A-T signals", "User engagement metrics"] }
  ];

  // --- 2. PROCESS DATA ---
  const processSteps = [
    { title: "Deep Crawl", description: "Scanning every single URL, image, script, and resource on your website using Screaming Frog and custom crawlers." },
    { title: "Manual Review", description: "Our SEO experts manually check UX, navigation, content quality, and conversion paths - not just automated tool outputs." },
    { title: "Competitor Benchmarking", description: "Comparing your site health, backlinks, and rankings against top 3-5 competitors in your niche." },
    { title: "Prioritized Action Plan", description: "We don't just give you a list of errors. We rank them by 'Impact vs Effort' so you know what to fix first." },
    { title: "Implementation Support", description: "We can work with your developers or use our team to implement technical fixes and track improvements." },
    { title: "Follow-Up Audit", description: "After 30 days, we re-crawl to verify fixes were implemented correctly and measure the impact." }
  ];

  const faqs = [
    { question: "Why do I need an SEO Audit?", answer: "SEO algorithms change constantly. An audit reveals hidden technical issues, content gaps, and backlink problems that are silently killing your rankings and organic traffic." },
    { question: "How long does an SEO audit take?", answer: "A basic audit takes 3-5 business days. A comprehensive deep dive for large e-commerce or enterprise sites can take 7-10 days for thorough analysis." },
    { question: "Do you fix the errors you find?", answer: "We provide a detailed implementation guide for your team. If you don't have developers, we offer implementation services for an additional fee to fix all identified issues." },
    { question: "What tools do you use for the audit?", answer: "We use enterprise-grade tools: Screaming Frog, Ahrefs, SEMrush, Google Search Console, PageSpeed Insights, GTmetrix, Lighthouse, and custom Python scripts." },
    { question: "Will I lose traffic during fixes?", answer: "No. Proper implementation actually improves traffic. We ensure all changes follow Google's guidelines and are implemented safely without risking existing rankings." },
    { question: "How often should I get an SEO audit?", answer: "We recommend a comprehensive audit annually and quarterly mini-audits to catch issues early. Sites with frequent changes should audit more often." },
    { question: "What deliverables do I receive?", answer: "You receive a 40-100+ page audit report including: executive summary, prioritized issues list, competitor analysis, technical recommendations, content strategy, and 90-day action plan." },
    { question: "Can you audit competitor websites?", answer: "Yes! Competitor audits help understand their SEO strategy, identify their top-performing content, and find link building opportunities. This is included in our Pro packages." },
    { question: "What's the difference between basic and comprehensive audits?", answer: "Basic audits cover technical issues and on-page SEO. Comprehensive audits add backlink analysis, competitor research, content audit, and detailed strategy recommendations." },
    { question: "How much does an SEO audit cost?", answer: "Basic audits start at ₹15,000. Comprehensive audits for larger sites range from ₹35,000-75,000 depending on site size, complexity, and depth of analysis required." }
  ];

  // --- 4. MOVING TOOLS TICKER ---
  const auditTools = [
    'Screaming Frog', 'Google Search Console', 'Ahrefs', 'SEMrush', 'PageSpeed Insights', 'Lighthouse', 'GTmetrix', 'Moz Pro', 'DeepCrawl', 'Majestic', 'Sitebulb'
  ];

  return (
    <div className="service-page">
      <style>{sharedStyles}</style>

      {/* --- CUSTOM STYLES (Dark Theme + Health Scanner Visual) --- */}
      <style>{`
        .bb-svc-hero-section {
          background: #0f172a; /* Dark Theme */
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
          opacity: 0.5;
        }

        /* HERO VISUAL: SITE HEALTH SCANNER */
        .audit-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: #1e293b;
          border-radius: 20px;
          border: 1px solid #334155;
          padding: 30px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Circular Progress Bar */
        .progress-circle {
          position: relative;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: conic-gradient(${auditColor} var(--progress, 0%), #334155 0%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          animation: loadProgress 3s ease-out forwards;
          box-shadow: 0 0 30px ${auditColor}40;
        }
        .progress-inner {
          width: 150px;
          height: 150px;
          background: #1e293b;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .score-text {
          font-size: 48px;
          font-weight: 900;
          color: white;
        }
        .score-label {
          font-size: 12px;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 1px;
        }

        @property --progress {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 0%;
        }
        @keyframes loadProgress {
          to { --progress: 72%; }
        }

        /* Checklist Items */
        .check-list { width: 100%; display: flex; flex-direction: column; gap: 12px; }
        .check-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #0f172a;
          padding: 10px 15px;
          border-radius: 8px;
          border: 1px solid #334155;
          font-size: 13px;
          color: #cbd5e1;
          opacity: 0;
          animation: slideUp 0.5s forwards;
        }
        .status-badge {
          font-size: 10px;
          font-weight: bold;
          padding: 2px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .status-fail { background: rgba(239, 68, 68, 0.2); color: #f87171; }
        .status-pass { background: rgba(16, 185, 129, 0.2); color: #34d399; }
        .status-warn { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Scan Line Overlay */
        .scan-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: ${auditColor};
          box-shadow: 0 0 15px ${auditColor};
          animation: radarScan 4s linear infinite;
          opacity: 0.5;
          z-index: 5;
        }
        @keyframes radarScan {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* --- TICKER ANIMATION --- */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bb-svc-tech-ticker {
          overflow: hidden;
          background: #f8fafc;
          padding: 3rem 0;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
        }
        .bb-svc-tech-track {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 25s linear infinite;
        }
        .bb-svc-tech-track:hover { animation-play-state: paused; }
        .bb-svc-tech-item {
          font-weight: 800;
          color: #94a3b8;
          font-size: 1.8rem;
          margin: 0 3rem;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.3s;
        }
        .bb-svc-tech-item:hover { color: ${auditColor}; }

        /* --- ✅ FEATURES CARD STYLES (FROM WEB DEV PAGE) --- */
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
        .bb-card-link {
            margin-top: auto;
            color: ${accentColor};
            font-weight: 600;
            font-size: 0.85rem;
            display: inline-flex;
            align-items: center;
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
        /* Vertical Line */
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
            background: ${auditColor};
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
            border: 4px solid #f8fafc; /* Ring effect */
            box-shadow: 0 4px 6px rgba(245, 158, 11, 0.2);
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
            <div style={{ display: 'inline-block', padding: '5px 15px', background: 'rgba(245, 158, 11, 0.1)', color: auditColor, borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '15px' }}>
              ⚠️ IS YOUR WEBSITE BROKEN?
            </div>
            <h1>Fix Hidden Errors. <br/> <span style={{ color: auditColor }}>Boost Google Rank.</span></h1>
            <p>Our deep-dive SEO Audit reveals technical issues, toxic backlinks, and speed problems that are holding your website back.</p>
            <div className="bb-svc-hero-buttons">
              <button className="bb-svc-btn-primary" style={{background: auditColor, color: 'white', border: 'none'}}>
                Start Free Scan
              </button>
              <button className="bb-svc-btn-secondary" style={{borderColor: 'rgba(255,255,255,0.3)'}}>
                View Sample Report
              </button>
            </div>
          </div>

          {/* HERO VISUAL: SITE HEALTH SCANNER */}
          <div className="bb-svc-hero-visual">
            <div className="audit-card">
              <div className="scan-overlay"></div>
              
              {/* Progress Gauge */}
              <div className="progress-circle">
                <div className="progress-inner">
                  <div className="score-text"><AnimatedCounter end={72} /></div>
                  <div className="score-label">Health Score</div>
                </div>
              </div>

              {/* Checklist */}
              <div className="check-list">
                <div className="check-item" style={{animationDelay: '0.5s'}}>
                  <span>SSL Security Certificate</span>
                  <span className="status-badge status-pass">Passed</span>
                </div>
                <div className="check-item" style={{animationDelay: '1.0s'}}>
                  <span>Mobile Friendliness</span>
                  <span className="status-badge status-pass">Passed</span>
                </div>
                <div className="check-item" style={{animationDelay: '1.5s', borderColor: 'rgba(245, 158, 11, 0.3)'}}>
                  <span>Page Load Speed (LCP)</span>
                  <span className="status-badge status-warn">3.2s (Slow)</span>
                </div>
                <div className="check-item" style={{animationDelay: '2.0s', borderColor: 'rgba(239, 68, 68, 0.3)'}}>
                  <span>Broken Links (404)</span>
                  <span className="status-badge status-fail">12 Found</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bb-svc-stats-section">
        <div className="bb-svc-stats-grid">
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number"><AnimatedCounter end={500} suffix="+" /></div>
            <div className="bb-svc-stat-label">Sites Audited</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number"><AnimatedCounter end={15} suffix="K+" /></div>
            <div className="bb-svc-stat-label">Errors Fixed</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number"><AnimatedCounter end={300} suffix="%" /></div>
            <div className="bb-svc-stat-label">Avg. Traffic Boost</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number">100<span style={{fontSize:'2rem'}}>%</span></div>
            <div className="bb-svc-stat-label">Manual Review</div>
          </div>
        </div>
      </section>

      {/* --- MOVING TOOLS TICKER --- */}
      <div className="bb-svc-tech-ticker">
        <div style={{textAlign:'center', marginBottom:'1.5rem', textTransform:'uppercase', fontSize:'0.8rem', letterSpacing:'3px', fontWeight:'bold', color: auditColor}}>
          POWERED BY INDUSTRY STANDARDS
        </div>
        <div className="bb-svc-tech-track">
           {auditTools.map((tool, i) => (
             <span key={`a-${i}`} className="bb-svc-tech-item">{tool}</span>
           ))}
           {auditTools.map((tool, i) => (
             <span key={`b-${i}`} className="bb-svc-tech-item">{tool}</span>
           ))}
        </div>
      </div>

      {/* FEATURES (UPDATED WITH CUSTOM CARDS & IMAGES) */}
      <section className="bb-svc-features-section">
        <div className="bb-svc-section-header">
          <h2>Technical Deep Dive</h2>
          <p>We check over 200+ ranking factors to ensure your site is perfect.</p>
        </div>
        <div className="bb-svc-features-grid">
          {features.map((feature, index) => (
            <div className='bb-img-card' key={index}>
                <div className='bb-card-image-box'>
                  <img src={feature.image} alt={feature.title} className='bb-card-img' />
                </div>
                <div className='bb-card-content'>
                  <h3 className='bb-card-title'>{feature.title}</h3>
                  <p className='bb-card-desc'>{feature.description}</p>
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
                    // Replace with your local image: src="/img/audit-process.jpg"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop"
                    alt="SEO Audit Process Dashboard"
                    className="bb-unique-audit-img"
                />
            </div>

            {/* RIGHT SIDE: CONTENT & TIMELINE */}
            <div className="bb-process-right-content">
                <h2>Our Audit Methodology</h2>
                <p className="lead">From initial scan to full recovery. We don't just find errors; we provide a roadmap to fix them.</p>

                <div className="bb-audit-timeline">
                    {processSteps.map((step, index) => (
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

      {/* TESTIMONIALS */}
      <section className="bb-svc-testimonials-section">
        <div className="bb-svc-section-header">
          <h2>Recovery Stories</h2>
        </div>
        <div className="bb-svc-testimonials-grid">
          <TestimonialCard quote="We lost 50% traffic overnight. Their audit found a 'noindex' tag on our homepage. Traffic recovered in 3 days!" author="James Carter" role="CEO" company="TechNews" avatar="JC" />
          <TestimonialCard quote="The technical audit report was so detailed, our developers knew exactly what to fix without asking questions." author="Anita Roy" role="Product Manager" company="E-Shop" avatar="AR" />
          <TestimonialCard quote="They found 500 toxic backlinks attacking our site. The disavow file they created saved our rankings." author="Mike D" role="Founder" company="Law Firm" avatar="MD" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bb-svc-faq-section">
        <div className="bb-svc-section-header">
          <h2>Audit FAQ</h2>
        </div>
        <div className="bb-svc-faq-container">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </section>

    </div>
  );
}