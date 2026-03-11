import React from 'react';
import { Link } from 'react-router-dom';
import {
  FeatureCard,
  TestimonialCard,
  FAQItem,
  AnimatedCounter,
  sharedStyles
} from '../SharedComponents';

export default function SocialMediaPage() {
  const accentColor = '#0EA5E9'; // Brand Blue

  // --- 1. FEATURES DATA (Updated with Your Specific Services) ---
  const features = [
    {
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
      title: "Get Instagram Followers",
      description: "Grow a real and relevant audience. Our strategy includes profile optimization, reels, stories, and engagement targeting to get followers genuinely interested in your brand."
    },
    {
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80",
      title: "Get Facebook Followers",
      description: "Increase page likes and follower growth with targeted audiences. We use local interest-based targeting and video promotions to turn followers into customers."
    },
    {
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80",
      title: "Get YouTube Subscribers",
      description: "The best platform for long-term visibility. We optimize your channel and videos to drive consistent subscriber growth and improve watch-time engagement."
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      title: "Startup Brand Building",
      description: "For new brands, social media is the quickest way to get noticed. We create your brand identity, content calendar, and growth campaigns to establish credibility from day one."
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      title: "Content Creation Strategy",
      description: "Content is at the heart of success. We handle creative posts, banners, reels, and educational content that resonates with your audience based on trends."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Paid Social Media Ads",
      description: "Speed up your growth with ROI-focused Instagram, Facebook, and YouTube Ads. We drive faster follower growth, better reach, and high-quality leads."
    }
  ];

  // --- PLATFORMS ---
  const platforms = [
    "Instagram", "Facebook", "YouTube", "LinkedIn", "Twitter/X", "Pinterest", "Snapchat", "Threads"
  ];

  // --- 2. PROCESS DATA (Aligned with your Tracking & Strategy) ---
  const process = [
    { title: "Strategy & Identity", description: "We select the right platforms (Insta, FB, YouTube) and create a branding identity tailored to your business goals." },
    { title: "Content Planning", description: "Developing a content calendar including Creative Posts, Reels, Stories, and Promotional content that resonates." },
    { title: "Organic Growth", description: "Implementing profile optimization, hashtag research, and community engagement to build a loyal following naturally." },
    { title: "Paid Acceleration", description: "Running targeted Ads for faster follower growth, better reach, and generating leads or traffic." },
    { title: "Performance Tracking", description: "We track everything—Follower growth, Reach, Engagement, and Campaign ROI—giving you clear reports with real numbers." }
  ];

  const faqs = [
    { question: "How does Social Media Marketing help my business?", answer: "It raises brand awareness, develops trust with customers, attracts website traffic, and allows you to promote products directly to your audience." },
    { question: "Do you provide real Instagram followers?", answer: "Yes. Our 'Get Instagram Followers Service' focuses on organic growth strategies and targeted engagement to attract real, relevant users, not bots." },
    { question: "Can you help grow my YouTube channel?", answer: "Absolutely. Our 'Get YouTube Subscribers Service' includes video optimization, audience targeting, and watch-time improvement strategies." },
    { question: "I am a startup. How can you help?", answer: "We specialize in helping startups establish an online presence from scratch, creating a professional brand identity and initial follower base to build credibility." },
    
  ];

  return (
    <div className="service-page">
      <style>{sharedStyles}</style>
      <style>{`
        /* --- Standard Blue Hero Section --- */
        .bb-svc-hero-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .bb-svc-hero-section::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.5;
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

        /* Social Icons Visual in Hero */
        .social-icons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
          animation: float 3s ease-in-out infinite;
        }
        .social-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: transform 0.3s;
          background: #1e293b; /* Dark bg for icons */
          border: 1px solid #334155;
        }
        .social-icon:hover {
          transform: scale(1.1) translateY(-5px);
          border-color: ${accentColor};
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
            box-shadow: 0 4px 6px rgba(14, 165, 233, 0.2);
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
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '0.05em' }}>
              📱 SOCIAL MEDIA MARKETING IN NOIDA
            </div>
            <h1>Grow Your Brand, Followers & <br/><span style={{color: accentColor}}>Online Influence</span></h1>
            <p>If brand visibility, trust, and daily engagement are what you want, our social media strategies for Instagram, Facebook, and YouTube are the most powerful solution.</p>

            <div className="bb-svc-hero-buttons">
              <Link to="/contact-us">
                <button className="bb-svc-btn-primary" style={{background: `linear-gradient(135deg, ${accentColor}, #3b82f6)`, color: 'white', border: 'none'}}>
                  Grow Your Brand
                </button>
              </Link>
              <Link to="/projects">
                <button className="bb-svc-btn-secondary" style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white'}}>
                  See Our Work
                </button>
              </Link>
            </div>
          </div>

          <div className="bb-svc-hero-visual">
            <div className="social-icons">
              <div className="social-icon">
                <span style={{color: '#E1306C'}}>📸</span>
              </div>
              <div className="social-icon">
                <span style={{color: '#1877F2'}}>👍</span>
              </div>
              <div className="social-icon">
                <span style={{color: '#0A66C2'}}>💼</span>
              </div>
              <div className="social-icon">
                <span style={{color: 'white'}}>𝕏</span>
              </div>
              <div className="social-icon">
                <span style={{color: '#FF0000'}}>▶️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bb-svc-stats-section">
        <div className="bb-svc-stats-grid">
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={100} suffix="%" /></div>
            <div className="bb-svc-stat-label">Brand Growth</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={10} suffix="X" /></div>
            <div className="bb-svc-stat-label">Better Engagement</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={24} suffix="/7" /></div>
            <div className="bb-svc-stat-label">Active Presence</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={500} suffix="+" /></div>
            <div className="bb-svc-stat-label">Clients Served</div>
          </div>
        </div>
      </section>

      {/* PLATFORMS TICKER */}
      <div className="bb-svc-tech-ticker">
        <div style={{textAlign:'center', marginBottom:'1.5rem', textTransform:'uppercase', fontSize:'0.75rem', letterSpacing:'3px', fontWeight:'bold', color: accentColor}}>
          PLATFORMS WE MANAGE
        </div>
        <div className="bb-svc-tech-track">
           {[...platforms, ...platforms].map((tech, i) => (
             <span key={i} className="bb-svc-tech-item">{tech}</span>
           ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="bb-svc-features-section">
        <div className="bb-svc-section-header">
          <h2>Organic & Paid Growth Services</h2>
          <p>Comprehensive solutions to get Instagram followers, Facebook likes, and YouTube subscribers.</p>
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
                    src="https://media.istockphoto.com/id/1521121126/photo/group-of-happy-traditional-indian-women-standing-in-queue-showing-their-finger-marked-with.jpg?s=612x612&w=0&k=20&c=kiT9EwcW_1Qdj_ZniNPialfI7PkrIoJ29pZo_O2Wwz8="
                    alt="Social Media Strategy Process"
                    className="bb-unique-audit-img"
                />
            </div>

            {/* RIGHT SIDE: TIMELINE CONTENT */}
            <div className="bb-process-right-content">
                <h2>Our Strategy</h2>
                <p className="lead">Good content + correct strategy = excellent growth. We develop and manage content that resonates with your audience.</p>

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
          <TestimonialCard quote="Our Instagram followers doubled in 3 months! The reel content they create is engaging and viral-worthy." author="Priya Sharma" role="Fashion Blogger" company="TrendSetter" avatar="PS" />
          <TestimonialCard quote="We needed YouTube subscribers for our tech channel. Their optimization strategy helped us cross 10K subs fast." author="Rohan Das" role="YouTuber" company="Tech Reviews" avatar="RD" />
          <TestimonialCard quote="As a new startup in Noida, their social media branding gave us the initial push we desperately needed." author="Amit Verma" role="Founder" company="Noida Startups" avatar="AV" />
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
      <section className="bb-svc-cta-section" style={{background: `linear-gradient(135deg, ${accentColor}, #1e3a8a)`}}>
        <h2>Grow Faster with Social Media Marketing</h2>
        <p>Whether you need Instagram Followers, Facebook Followers, or YouTube Subscribers, we have the right solution for you.</p>
        <Link to="/contact-us">
          <button className="bb-svc-btn-primary" style={{background: 'white', color: accentColor, border: 'none'}}>
            Start Growing Today
          </button>
        </Link>
      </section>
    </div>
  );
}