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

  // --- 1. FEATURES DATA (Updated with Images) ---
  const features = [
    {
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
      title: "Facebook & Instagram Ads",
      description: "Reach 3 billion+ users across Meta's platforms with highly targeted campaigns. From feed ads to Stories and Reels, we optimize for maximum engagement and conversions on both Facebook and Instagram."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Custom Audience Targeting",
      description: "Target users by demographics, interests, behaviors, and lookalike audiences. We build custom audiences from your customer data, website visitors, and app users for precise targeting and higher ROI."
    },
    {
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80",
      title: "Carousel & Video Ads",
      description: "Eye-catching creative formats that tell your brand story and drive 10x more engagement. Professional video ads, carousel showcases, collection ads, and interactive content optimized for each placement."
    },
    {
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=600&q=80",
      title: "Retargeting Campaigns",
      description: "Re-engage website visitors and cart abandoners with personalized ads that bring them back. Dynamic retargeting shows users exactly what they viewed on your site with compelling offers."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Advanced Pixel Tracking",
      description: "Complete Meta Pixel and Conversions API setup for accurate tracking. Track every action from page views to purchases, enabling data-driven optimization and attribution."
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      title: "A/B Creative Testing",
      description: "Continuously optimize campaigns with split testing on creatives, copy, audiences, and placements. We find what works and scale winners fast for maximum ROAS."
    }
  ];

  // --- CAMPAIGN TYPES FOR SEO ---
  const campaignTypes = [
    { title: "Awareness Campaigns", description: "Maximize reach and brand recall among your target audience. Perfect for product launches, brand building, and market entry.", icon: "📢" },
    { title: "Traffic Campaigns", description: "Drive quality visitors to your website or landing pages. Optimized for engagement and time on site.", icon: "🌐" },
    { title: "Lead Generation", description: "Capture leads directly within Facebook/Instagram using native lead forms. No website required.", icon: "📝" },
    { title: "Conversion Campaigns", description: "Optimize for specific actions like purchases, sign-ups, or form submissions using Meta Pixel.", icon: "💰" },
    { title: "Catalog Sales", description: "Dynamic product ads for e-commerce showing relevant products from your catalog to interested shoppers.", icon: "🛒" },
    { title: "App Install Campaigns", description: "Drive app downloads and engagement with targeted campaigns optimized for installs and in-app actions.", icon: "📱" }
  ];

  // --- 2. PROCESS DATA ---
  const process = [
    { title: "Strategy & Audit", description: "We analyze your business, competitors, target audience, and existing ad accounts to build a comprehensive winning strategy tailored to your goals." },
    { title: "Pixel & Tracking Setup", description: "Complete Meta Pixel installation, Conversions API setup, custom event tracking, and analytics integration for accurate data and optimization." },
    { title: "Audience Research", description: "Deep audience analysis to create custom audiences, lookalike audiences, and interest-based targeting segments that reach your ideal customers." },
    { title: "Creative Development", description: "Design scroll-stopping ad creatives including images, videos, carousels, and Stories optimized for each placement and audience segment." },
    { title: "Campaign Launch", description: "Strategic campaign structure with proper budget allocation, bidding strategy, and controlled rollout for optimal learning and performance." },
    { title: "Optimize & Scale", description: "Continuous optimization based on data - scaling winners, testing new audiences, and improving ROAS month over month." }
  ];

  const faqs = [
    { question: "How much should I budget for Meta Ads?", answer: "We recommend starting with ₹30,000-50,000/month for meaningful testing. Once we identify winning campaigns and audiences, you can scale to ₹1-5 lakhs+ for maximum results. The key is having enough budget to gather statistically significant data." },
    { question: "How long before I see results?", answer: "Most campaigns start showing initial data within 3-7 days. The learning phase typically takes 7-14 days. Full optimization for best performance usually takes 2-4 weeks as we test audiences, creatives, and placements." },
    { question: "Do you create the ad creatives?", answer: "Yes! Our design team creates scroll-stopping images, carousels, and video ads tailored to your brand and audience. We produce multiple variations for A/B testing and continuous improvement." },
    { question: "What's your management fee?", answer: "We charge 15-20% of ad spend (minimum ₹15,000/month) which includes strategy, setup, creative production, optimization, and detailed reporting. Larger accounts may qualify for reduced rates." },
    { question: "Can you run ads for my e-commerce store?", answer: "Absolutely! We specialize in e-commerce advertising with catalog ads, dynamic retargeting, conversion optimization, and full funnel strategies that drive sales and maximize ROAS." },
    { question: "What is the Meta Pixel and why do I need it?", answer: "The Meta Pixel is code on your website that tracks user actions. It's essential for conversion tracking, building retargeting audiences, and optimizing campaigns for specific actions like purchases or leads." },
    { question: "Can you target my competitors' audiences?", answer: "Yes! We can target users who follow your competitors, have interests related to competitor brands, and create lookalike audiences based on competitor customer profiles for market share growth." },
    { question: "What reporting do you provide?", answer: "We provide weekly performance snapshots and comprehensive monthly reports covering impressions, reach, engagement, conversions, cost metrics, ROAS, and actionable insights with a real-time dashboard." },
    { question: "Do you handle both Facebook and Instagram?", answer: "Yes! We manage campaigns across all Meta placements including Facebook Feed, Stories, Reels, Instagram Feed, Stories, Reels, Messenger, and the Audience Network with optimization based on performance." },
    { question: "What industries do you work with?", answer: "We've successfully run Meta Ads for e-commerce, education, real estate, healthcare, B2B services, local businesses, and more. Our strategies are customized for each industry's unique audience and conversion cycle." }
  ];

  const techStack = [
    "Facebook Ads", "Instagram Ads", "Meta Business Suite", "Meta Pixel", "Conversion API", "Advantage+", "Reels Ads", "Stories Ads", "Messenger Ads", "WhatsApp Ads"
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
              📱 META ADVERTISING
            </div>
            <h1>Reach Billions on <br/><span style={{color: '#ffffff'}}>Facebook & Instagram</span></h1>
            <p>Turn scrollers into buyers with data-driven Meta Ads campaigns that deliver measurable ROI.</p>

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
            <div className="bb-svc-stat-number" style={{color: accentColor}}>₹<AnimatedCounter end={5} suffix="Cr+" /></div>
            <div className="bb-svc-stat-label">Ad Spend Managed</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={300} suffix="%" /></div>
            <div className="bb-svc-stat-label">Avg. ROAS</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={10} suffix="M+" /></div>
            <div className="bb-svc-stat-label">Impressions Delivered</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={50} suffix="+" /></div>
            <div className="bb-svc-stat-label">Brands Scaled</div>
          </div>
        </div>
      </section>

      {/* TECH TICKER */}
      <div className="bb-svc-tech-ticker">
        <div style={{textAlign:'center', marginBottom:'1.5rem', textTransform:'uppercase', fontSize:'0.75rem', letterSpacing:'3px', fontWeight:'bold', color: accentColor}}>
          PLATFORMS & TOOLS WE USE
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
          <h2>Why Our Meta Ads Convert</h2>
          <p>Strategic campaigns built on data, creativity, and continuous optimization.</p>
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
                    src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1080&q=80"
                    alt="Meta Ads Strategy Process"
                    className="bb-unique-audit-img"
                />
            </div>

            {/* RIGHT SIDE: TIMELINE CONTENT */}
            <div className="bb-process-right-content">
                <h2>Our Campaign Process</h2>
                <p className="lead">A proven framework for Meta Ads success. From pixel perfect setup to scaling winning creatives.</p>

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
          <TestimonialCard quote="Our ROAS went from 1.5x to 4.2x in just 2 months. The team's targeting strategy is incredible." author="Sneha Gupta" role="Founder, FashionHub" avatar="SG" />
          <TestimonialCard quote="We scaled from ₹50K to ₹5L monthly ad spend while maintaining profitability. Highly recommended!" author="Rahul Mehra" role="CEO, TechGadgets" avatar="RM" />
          <TestimonialCard quote="Their creative team produces ads that actually stop the scroll. Our CTR improved by 150%." author="Priya Singh" role="Marketing Head, BeautyBox" avatar="PS" />
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
        <h2>Ready to Scale with Meta Ads?</h2>
        <p>Get a free audit of your current campaigns or start fresh with a winning strategy.</p>
        <Link to="/contact-us">
          <button className="bb-svc-btn-primary" style={{background: 'white', color: accentColor, border: 'none'}}>
            Get Free Ad Audit
          </button>
        </Link>
      </section>
    </div>
  );
}