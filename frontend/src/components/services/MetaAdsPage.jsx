import React from 'react';
import { Link } from 'react-router-dom';
import {
  FeatureCard,
  TestimonialCard,
  FAQItem,
  AnimatedCounter,
  sharedStyles
} from '../SharedComponents';

export default function MetaAdsPage() {
  const accentColor = '#0866FF'; // Meta Blue

  // --- 1. FEATURES DATA (Updated with Your Specific Content) ---
  const features = [
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      title: "For Business Owners",
      description: "Get regular inquiries, calls, and online sales. We focus on ROI—not just 'likes'—to generate quality leads at low cost and boost conversion rates."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      title: "Local Business Targeting",
      description: "Perfect for businesses in Noida & Delhi NCR. We use location-based targeting to drive walk-ins, local inquiries, and Call/WhatsApp clicks."
    },
    {
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80",
      title: "Startups & Brand Awareness",
      description: "Build trust and recognition with high-reach campaigns. We use engaging Story, Reel, and Feed promotions to ensure strong brand recall."
    },
    {
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
      title: "E-Commerce Solutions",
      description: "Turn visitors into buyers with Product Catalog ads, Dynamic Retargeting, Cart Abandonment campaigns, and Sale/Offer promotions."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Smart Audience Strategy",
      description: "We research and create the right audience using Interest-based targeting, Custom audiences (leads/visitors), and Lookalike audiences."
    },
    {
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=600&q=80",
      title: "Creative Ads That Convert",
      description: "Good targeting needs great creatives. We design eye-catching images, videos, and clear ad copy with strong CTAs that stop users from scrolling."
    }
  ];

  // --- 2. PROCESS DATA (Aligned with your Analytics & Strategy) ---
  const process = [
    { title: "Audience Research", description: "We identify your ideal customers using Interest-based, Behavior-based, and Location-based targeting (Noida/Delhi NCR)." },
    { title: "Creative Design", description: "Designing visually appealing ads (Images, Videos, Reels) with clear simple copy and strong Call-to-Actions." },
    { title: "Campaign Setup", description: "Setting up the right campaign type—whether for Lead Gen, Sales, or Local Footfall—optimized for your goals." },
    { title: "Smart Retargeting", description: "Implementing retargeting strategies to bring back warm users and website visitors who didn't convert initially." },
    { title: "Analytics Tracking", description: "We track Reach, Clicks, Engagement, Cost per Lead/Sale, and Audience Performance to ensure transparency." },
    { title: "Optimization", description: "Continuous monitoring and tweaking to ensure you get the best Return on Investment (ROI) and business growth." }
  ];

  const faqs = [
    { question: "For which audiences are Meta Ads best?", answer: "Meta Ads are ideal for Small & Medium businesses, Startups, E-Commerce brands, Real Estate, Coaching institutes, and Local Service providers." },
    { question: "How do you help local businesses in Noida?", answer: "We use precise location-based targeting around Noida and Delhi NCR, along with Call & WhatsApp click ads to drive local inquiries and walk-ins." },
    { question: "Do you focus on Likes or Sales?", answer: "Our focus is strictly on Return on Investment (ROI). We create campaigns to generate quality leads, inquiries, and sales, not just vanity metrics like 'likes'." },
    { question: "What is your Retargeting Strategy?", answer: "We create Custom Audiences from your website visitors and leads to show them specific ads (Warm Users), increasing the chance of conversion." },
  ];

  const techStack = [
    "Facebook Ads", "Instagram Ads", "Meta Business Suite", "Lookalike Audiences", "Retargeting", "Catalog Ads", "Reels Ads", "Lead Forms", "WhatsApp Ads"
  ];

  return (
    <div className="service-page">
      <style>{sharedStyles}</style>
      <style>{`
        .bb-svc-hero-section {
          background: linear-gradient(135deg, #0866FF 0%, #1877F2 50%, #0064E0 100%);
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

        .meta-logo {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* --- CUSTOM CARD STYLES --- */
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
            box-shadow: 0 4px 6px rgba(8, 102, 255, 0.2);
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
              📱 META ADS SERVICES IN NOIDA
            </div>
            <h1>Reach the Right Audience <br/><span style={{color: '#ffffff'}}>on Facebook & Instagram</span></h1>
            <p>If your business needs immediate leads, increased sales, and a strong brand presence, Meta Ads are the best option for you.</p>

            <div className="bb-svc-hero-buttons">
              <Link to="/contact-us">
                <button className="bb-svc-btn-primary" style={{background: 'white', color: accentColor, border: 'none'}}>
                  Start Advertising
                </button>
              </Link>
              <Link to="/projects">
                <button className="bb-svc-btn-secondary" style={{borderColor: 'rgba(255,255,255,0.5)', color: 'white'}}>
                  View Case Studies
                </button>
              </Link>
            </div>
          </div>

          <div className="bb-svc-hero-visual">
            <div className="meta-logo">
              <svg width="50" height="50" viewBox="0 0 24 24" fill={accentColor}>
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bb-svc-stats-section">
        <div className="bb-svc-stats-grid">
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={100} suffix="%" /></div>
            <div className="bb-svc-stat-label">Audience Focus</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={10} suffix="X" /></div>
            <div className="bb-svc-stat-label">Better Targeting</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={24} suffix="/7" /></div>
            <div className="bb-svc-stat-label">Campaign Monitoring</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={500} suffix="+" /></div>
            <div className="bb-svc-stat-label">Leads Generated</div>
          </div>
        </div>
      </section>

      {/* TECH TICKER */}
      <div className="bb-svc-tech-ticker">
        <div style={{textAlign:'center', marginBottom:'1.5rem', textTransform:'uppercase', fontSize:'0.75rem', letterSpacing:'3px', fontWeight:'bold', color: accentColor}}>
          PLATFORMS & STRATEGIES
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
          <h2>Why Choose Our Meta Ads?</h2>
          <p>We emphasize audience-based advertising to ensure your ad appears only to those likely to convert.</p>
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
                    src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1080&q=80"
                    alt="Meta Ads Strategy Process"
                    className="bb-unique-audit-img"
                />
            </div>

            {/* RIGHT SIDE: TIMELINE CONTENT */}
            <div className="bb-process-right-content">
                <h2>Analytics & Tracking</h2>
                <p className="lead">We create Meta ad campaigns with a focus on Return on Investment (ROI), ensuring performance and transparency.</p>

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
          <TestimonialCard quote="Bits and Bytes IT Solution helped us target local customers in Noida. The walk-ins to our store increased significantly." author="Ramesh Gupta" role="Shop Owner" company="Noida Retail" avatar="RG" />
          <TestimonialCard quote="As a startup, we needed brand awareness. Their Instagram Reels strategy got us thousands of impressions and new followers." author="Anjali Verma" role="Co-Founder" company="StyleUp" avatar="AV" />
          <TestimonialCard quote="The E-commerce retargeting ads were a game changer. We recovered so many abandoned carts thanks to their strategy." author="Vikram Singh" role="Director" company="Online Mart" avatar="VS" />
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
      <section className="bb-svc-cta-section" style={{background: `linear-gradient(135deg, ${accentColor}, #1877F2)`}}>
        <h2>Start Meta Ads for Your Target Audience</h2>
        <p>If you wish to target the correct audience, develop quality leads, and expand at a faster rate, let us help you.</p>
        <Link to="/contact-us">
          <button className="bb-svc-btn-primary" style={{background: 'white', color: accentColor, border: 'none'}}>
            Get Started Today
          </button>
        </Link>
      </section>
    </div>
  );
}