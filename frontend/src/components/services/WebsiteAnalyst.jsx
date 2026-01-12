import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FeatureCard,
  TestimonialCard,
  FAQItem,
  AnimatedCounter,
  sharedStyles
} from '../SharedComponents';

export default function WebsiteAnalyticsPage({ onNavigate }) {
  // Brand Color + Insight Violet (Data Feel)
  const accentColor = '#0EA5E9'; 
  const dataColor = '#8B5CF6';

  // --- 1. FEATURES DATA (Updated with Images) ---
  const features = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Conversion Funnels",
      description: "We visualize where your users drop off. Is it the Cart? The Signup form? We pinpoint the leak so you can fix it."
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      title: "User Journey Mapping",
      description: "See the exact path a user takes from 'Landing' to 'Purchase'. Understand the logic behind their clicks."
    },
    {
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
      title: "Heatmaps & Recordings",
      description: "Watch real screen recordings of users interacting with your site. See where they get stuck or frustrated."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      title: "Cross-Device Tracking",
      description: "Accurately track users switching between Mobile, Desktop, and Tablet without losing data attribution."
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      title: "Custom Dashboards",
      description: "Forget complex GA4 reports. We build clean, one-page Looker Studio dashboards that show ROI instantly."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      title: "Attribution Modeling",
      description: "Know exactly which marketing channel (Ads vs SEO vs Social) deserves credit for the sale."
    }
  ];

  // --- 2. PROCESS DATA ---
  const processSteps = [
    { title: "Audit & Cleanup", description: "We check your existing setup for double-counting, spam traffic, and broken tags." },
    { title: "Tag Implementation", description: "Setting up Google Tag Manager (GTM) to track custom events like 'Button Clicks' and 'Video Views'." },
    { title: "Dashboard Creation", description: "Building a visual command center customized for your KPIs (Sales, Leads, Retention)." },
    { title: "Data Collection", description: "Gathering 30 days of clean data to identify trends and anomalies." },
    { title: "Optimization Report", description: "Delivering actionable insights: 'Change this button color', 'Shorten this form', etc." }
  ];

  const faqs = [
    { question: "Why do I need Analytics? Isn't looking at sales enough?", answer: "Sales tell you WHAT happened. Analytics tell you WHY. Without it, you don't know if your marketing is working or luck." },
    { question: "Is GA4 difficult to use?", answer: "Yes, GA4 is complex compared to Universal Analytics. We set it up so you only see the reports that matter, not the noise." },
    { question: "Can you track button clicks and form submissions?", answer: "Absolutely. We use Google Tag Manager to track specific interactions, scroll depth, and even video engagement." },
    { question: "Do you offer A/B testing?", answer: "Yes, based on analytics data, we can propose A/B tests (changing headlines, colors) to improve conversion rates." },
    { question: "Will this slow down my website?", answer: "No. We implement tags asynchronously via GTM, ensuring they fire without blocking your page load speed." }
  ];

  // --- 4. MOVING TOOLS TICKER ---
  const analyticsTools = [
    'Google Analytics 4', 'Google Tag Manager', 'Looker Studio', 'Hotjar', 'Microsoft Clarity', 'Mixpanel', 'CrazyEgg', 'Segment', 'Amplitude', 'Tableau'
  ];

  return (
    <div className="service-page">
      <style>{sharedStyles}</style>

      {/* --- CUSTOM STYLES --- */}
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

        /* HERO VISUAL: LIVE DATA MONITOR */
        .analytics-dashboard {
          position: relative;
          width: 100%;
          max-width: 450px;
          background: #1e293b;
          border-radius: 16px;
          border: 1px solid #334155;
          padding: 20px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          overflow: hidden;
          margin: 0 auto;
        }
        
        .live-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(239, 68, 68, 0.2);
          color: #f87171;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .live-dot {
          width: 6px; height: 6px; background: #f87171; border-radius: 50%;
          animation: blink 1s infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        /* Animated Bar Chart */
        .chart-container {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 100px;
          margin-bottom: 20px;
          padding-bottom: 5px;
          border-bottom: 1px solid #334155;
        }
        .bar {
          width: 12%;
          background: linear-gradient(to top, ${dataColor}, ${accentColor});
          border-radius: 4px 4px 0 0;
          animation: growBar 2s infinite alternate;
        }
        @keyframes growBar {
          0% { height: 20%; opacity: 0.6; }
          100% { height: 90%; opacity: 1; }
        }

        /* Stats Row */
        .stats-row {
          display: grid;
          grid-cols-2;
          gap: 15px;
        }
        .mini-stat {
          background: #0f172a;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #334155;
        }
        .bb-svc-stat-label { font-size: 10px; color: #94a3b8; text-transform: uppercase; }
        .stat-val { font-size: 18px; font-weight: bold; color: white; }
        .stat-up { font-size: 10px; color: #10b981; }

        /* Floating Visitors */
        .visitor-bubble {
          position: absolute;
          background: white;
          color: black;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: bold;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          animation: floatMap 4s infinite;
          z-index: 10;
        }
        @keyframes floatMap {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
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
        .bb-svc-tech-item:hover { color: ${dataColor}; }

        /* --- ✅ CUSTOM CARD STYLES (Same as Web Dev Page) --- */
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
            background: ${dataColor}; /* Violet for Analytics */
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
            border: 4px solid #f8fafc;
            box-shadow: 0 4px 6px rgba(139, 92, 246, 0.2);
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
            <div style={{ display: 'inline-block', padding: '5px 15px', background: 'rgba(139, 92, 246, 0.2)', color: dataColor, borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '15px' }}>
              📊 TURN DATA INTO DECISIONS
            </div>
            <h1>Don't Just Track.<br/> <span style={{ color: dataColor }}>Understand Why.</span></h1>
            <p>We transform messy data into clear, actionable insights. Know exactly where your customers come from and why they leave.</p>
            <div className="bb-svc-hero-buttons">
              <button className="bb-svc-btn-primary" style={{background: dataColor, color: 'white', border: 'none'}}>
                Audit My Data
              </button>
              <button className="bb-svc-btn-secondary" style={{borderColor: 'rgba(255,255,255,0.3)'}}>
                View Sample Dashboard
              </button>
            </div>
          </div>

          {/* HERO VISUAL: LIVE DATA MONITOR */}
          <div className="bb-svc-hero-visual">
            <div className="analytics-dashboard">
              
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'15px'}}>
                <div className="live-indicator">
                  <div className="live-dot"></div> Live Users
                </div>
                <div style={{fontSize:'24px', fontWeight:'black', color:'white'}}>842</div>
              </div>

              <div className="chart-container">
                <div className="bar" style={{height:'40%', animationDelay:'0s'}}></div>
                <div className="bar" style={{height:'70%', animationDelay:'0.2s'}}></div>
                <div className="bar" style={{height:'50%', animationDelay:'0.4s'}}></div>
                <div className="bar" style={{height:'90%', animationDelay:'0.1s'}}></div>
                <div className="bar" style={{height:'60%', animationDelay:'0.5s'}}></div>
                <div className="bar" style={{height:'80%', animationDelay:'0.3s'}}></div>
                <div className="bar" style={{height:'45%', animationDelay:'0.6s'}}></div>
              </div>

              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
                <div className="mini-stat">
                  <div className="bb-svc-stat-label">Conversion Rate</div>
                  <div className="stat-val">3.2%</div>
                  <div className="stat-up">▲ 12% vs last week</div>
                </div>
                <div className="mini-stat">
                  <div className="bb-svc-stat-label">Avg. Session</div>
                  <div className="stat-val">2m 45s</div>
                  <div className="stat-up">▲ 0.5% vs last week</div>
                </div>
              </div>

              <div className="visitor-bubble" style={{top:'10%', right:'-10px', animationDelay:'1s'}}>
                📍 Mumbai
              </div>
              <div className="visitor-bubble" style={{bottom:'20%', left:'-10px', animationDelay:'2s'}}>
                🛒 Checkout
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bb-svc-stats-section">
        <div className="bb-svc-stats-grid">
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number"><AnimatedCounter end={50} suffix="M+" /></div>
            <div className="bb-svc-stat-label">Events Tracked</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number"><AnimatedCounter end={100} suffix="+" /></div>
            <div className="bb-svc-stat-label">Audits Completed</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number"><AnimatedCounter end={30} suffix="%" /></div>
            <div className="bb-svc-stat-label">Avg. CRO Uplift</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number"><AnimatedCounter end={24} suffix="h" /></div>
            <div className="bb-svc-stat-label">Data Freshness</div>
          </div>
        </div>
      </section>

      {/* --- MOVING TOOLS TICKER --- */}
      <div className="bb-svc-tech-ticker">
        <div style={{textAlign:'center', marginBottom:'1.5rem', textTransform:'uppercase', fontSize:'0.8rem', letterSpacing:'3px', fontWeight:'bold', color: dataColor}}>
          INTEGRATED DATA SOURCES
        </div>
        <div className="bb-svc-tech-track">
           {analyticsTools.map((tool, i) => (
             <span key={`a-${i}`} className="bb-svc-tech-item">{tool}</span>
           ))}
           {analyticsTools.map((tool, i) => (
             <span key={`b-${i}`} className="bb-svc-tech-item">{tool}</span>
           ))}
        </div>
      </div>

      {/* FEATURES (UPDATED WITH CUSTOM CARDS & IMAGES) */}
      <section className="bb-svc-features-section">
        <div className="bb-svc-section-header">
          <h2>Intelligence Beyond Pageviews</h2>
          <p>We dig deeper than standard reports to find profit-generating insights.</p>
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

      {/* ✅ PROCESS (UNIQUE SPLIT LAYOUT) */}
      <section className="bb-process-unique-section">
        <div className="bb-process-split-container">
            
            {/* LEFT SIDE: UNIQUE IMAGE */}
            <div className="bb-process-left-img">
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop"
                    alt="Data Analytics Process Dashboard"
                    className="bb-unique-audit-img"
                />
            </div>

            {/* RIGHT SIDE: TIMELINE CONTENT */}
            <div className="bb-process-right-content">
                <h2>Data Maturity Model</h2>
                <p className="lead">How we take you from "Messy Data" to "Marketing Science". A structured path to growth.</p>

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
          <h2>Data Success Stories</h2>
        </div>
        <div className="bb-svc-testimonials-grid">
          <TestimonialCard quote="We thought our blog was useless. Their audit showed it drove 40% of our enterprise leads. Huge eye-opener." author="Amit Patel" role="CMO" company="SaaS Flow" avatar="AP" />
          <TestimonialCard quote="The Looker Studio dashboard they built saves me 5 hours of reporting work every week." author="Sarah Kline" role="Marketing Director" company="Retail Co" avatar="SK" />
          <TestimonialCard quote="We fixed a checkout bug they found via Heatmaps that was costing us $2k/month. Best investment ever." author="Mike Ross" role="Founder" company="Ecom Store" avatar="MR" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bb-svc-faq-section">
        <div className="bb-svc-section-header">
          <h2>Analytics FAQ</h2>
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