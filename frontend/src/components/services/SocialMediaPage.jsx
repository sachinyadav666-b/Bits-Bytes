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
  const accentColor = '#0EA5E9'; // ✅ Updated to Brand Blue

  // --- 1. FEATURES DATA (Updated with Images) ---
  const features = [
    {
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
      title: "Content Strategy",
      description: "Data-driven content calendars aligned with your brand voice and audience preferences. We research trending topics, optimal posting times, and content formats that drive maximum engagement for your industry."
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      title: "Creative Design",
      description: "Scroll-stopping graphics, reels, stories, and carousels that drive engagement. Our design team creates professional visual content that stands out in crowded feeds and represents your brand beautifully."
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      title: "Community Management",
      description: "Active engagement with your audience through comments, DMs, and mentions. We build relationships with your followers, respond promptly to inquiries, and nurture your online community."
    },
    {
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=600&q=80",
      title: "Influencer Marketing",
      description: "Strategic collaborations with relevant influencers to amplify your brand reach. We identify, negotiate, and manage influencer partnerships that deliver authentic engagement and measurable results."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Analytics & Reporting",
      description: "Comprehensive monthly reports with insights on growth, engagement, reach, and ROI metrics. Track your social media performance with actionable data and recommendations for improvement."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      title: "Reputation Management",
      description: "Monitor and manage your brand's online reputation across all platforms. We track mentions, respond to reviews, handle negative feedback professionally, and protect your brand image."
    }
  ];

  // --- PLATFORM DETAILS FOR SEO ---
  const platformDetails = [
    { name: "Instagram", users: "500M+ daily users in India", best: "Visual brands, lifestyle, fashion, food, travel" },
    { name: "Facebook", users: "400M+ users in India", best: "Local businesses, community building, events" },
    { name: "LinkedIn", users: "100M+ professionals in India", best: "B2B, recruiting, thought leadership" },
    { name: "YouTube", users: "500M+ users in India", best: "Tutorials, reviews, entertainment, education" },
    { name: "Twitter/X", users: "25M+ users in India", best: "News, customer service, real-time engagement" },
    { name: "Pinterest", users: "Growing in India", best: "DIY, home decor, fashion, weddings" }
  ];

  // --- CONTENT TYPES ---
  const contentTypes = [
    { type: "Static Posts", description: "High-quality images with engaging captions optimized for each platform" },
    { type: "Reels & Short Videos", description: "Trending format videos under 90 seconds for maximum reach and virality" },
    { type: "Stories", description: "Daily ephemeral content with polls, questions, and interactive stickers" },
    { type: "Carousels", description: "Multi-slide educational and storytelling content that increases save rates" },
    { type: "Live Sessions", description: "Real-time engagement through Q&As, product launches, and behind-the-scenes" },
    { type: "User-Generated Content", description: "Curating and sharing customer content to build social proof" }
  ];

  // --- 2. PROCESS DATA ---
  const process = [
    { title: "Brand Audit", description: "We analyze your current social presence, competitors, audience demographics, and identify growth opportunities across all relevant platforms." },
    { title: "Strategy Development", description: "Custom content strategy, posting schedule, hashtag strategy, and engagement tactics tailored to your specific business goals and target audience." },
    { title: "Content Creation", description: "Our creative team produces high-quality graphics, videos, reels, and copy that resonates with your target audience and represents your brand." },
    { title: "Publish & Engage", description: "Strategic posting at optimal times, active community management, responding to comments and DMs, and continuous optimization." },
    { title: "Analyze & Optimize", description: "Monthly performance reviews, A/B testing, strategy refinement based on data, and continuous improvement for better results." }
  ];

  const faqs = [
    { question: "Which platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, Twitter/X, YouTube, Pinterest, and emerging platforms like Threads. We'll recommend the best platforms based on your business, industry, and target audience." },
    { question: "How much does social media management cost?", answer: "Our packages start from ₹25,000/month for basic management (2 platforms, 15 posts) to ₹1,00,000+/month for comprehensive multi-platform management with daily content, reels, and influencer outreach." },
    { question: "How many posts do you create per month?", answer: "Depending on the package: Starter (15 posts/month), Growth (25 posts/month + 4 reels), Premium (40+ posts/month + 8 reels + stories). All packages include a content calendar for approval." },
    { question: "Do you provide content only or also post and manage?", answer: "We provide end-to-end service: strategy development, content creation, scheduling, posting, community management, engagement, and monthly reporting. You approve, we execute." },
    { question: "How do you measure success?", answer: "We track follower growth, engagement rate, reach, impressions, website traffic from social, lead generation, and ultimately ROI based on your specific goals. Monthly reports show all KPIs." },
    { question: "Do you create video content and reels?", answer: "Yes! Video content is essential today. We create professional reels, short videos, stories, and can manage YouTube content. Our team handles scripting, shooting guides, and editing." },
    { question: "Can you handle negative comments and reviews?", answer: "Absolutely. Our community managers are trained in reputation management. We respond professionally to negative feedback, escalate issues when needed, and protect your brand image." },
    { question: "Do you work with influencers?", answer: "Yes! We identify relevant influencers in your niche, negotiate partnerships, manage campaigns, and track performance. Influencer marketing is available in our Growth and Premium packages." },
    { question: "What industries do you specialize in?", answer: "We have experience across e-commerce, education, healthcare, real estate, hospitality, B2B services, and more. Each industry gets customized content strategies based on audience behavior." },
    { question: "How quickly can you start?", answer: "Once onboarded, we can begin content creation within 1 week. The first month involves strategy development and setting up content workflows. Full execution starts from month 2." }
  ];

  const platforms = [
    "Instagram", "Facebook", "LinkedIn", "Twitter/X", "YouTube", "Pinterest", "Threads", "WhatsApp Business"
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
              📱 SOCIAL MEDIA MARKETING
            </div>
            <h1>Build Your Brand on <br/><span style={{color: accentColor}}>Social Media</span></h1>
            <p>Strategic social media management that grows your audience, builds community, and drives real business results.</p>

            <div className="bb-svc-hero-buttons">
              <Link to="/contact-us">
                <button className="bb-svc-btn-primary" style={{background: `linear-gradient(135deg, ${accentColor}, #3b82f6)`, color: 'white', border: 'none'}}>
                  Get Started
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
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={5} suffix="M+" /></div>
            <div className="bb-svc-stat-label">Followers Grown</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={100} suffix="+" /></div>
            <div className="bb-svc-stat-label">Brands Managed</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={500} suffix="K+" /></div>
            <div className="bb-svc-stat-label">Engagements/Month</div>
          </div>
          <div className="bb-svc-stat-card">
            <div className="bb-svc-stat-number" style={{color: accentColor}}><AnimatedCounter end={8} suffix="%" /></div>
            <div className="bb-svc-stat-label">Avg. Engagement Rate</div>
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

      {/* ✅ FEATURES SECTION (UPDATED WITH IMAGES) */}
      <section className="bb-svc-features-section">
        <div className="bb-svc-section-header">
          <h2>Complete Social Media Solution</h2>
          <p>Everything you need to dominate social media.</p>
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
                    src="https://images.unsplash.com/photo-1611926653458-09294b3019dc?auto=format&fit=crop&w=1080&q=80"
                    alt="Social Media Strategy Process"
                    className="bb-unique-audit-img"
                />
            </div>

            {/* RIGHT SIDE: TIMELINE CONTENT */}
            <div className="bb-process-right-content">
                <h2>Our Process</h2>
                <p className="lead">A strategic approach to social media success. Consistent growth through proven methods.</p>

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
          <TestimonialCard quote="Our Instagram grew from 5K to 50K followers in 6 months. The content quality is exceptional!" author="Nisha Agarwal" role="Founder, StyleQueen" avatar="NA" />
          <TestimonialCard quote="They transformed our LinkedIn presence. We now generate 20+ qualified leads monthly from social." author="Karan Singh" role="CEO, B2B Solutions" avatar="KS" />
          <TestimonialCard quote="The team's creativity and consistency has made us a recognizable brand in our industry." author="Meera Patel" role="Marketing Director, FoodieHub" avatar="MP" />
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
        <h2>Ready to Go Viral?</h2>
        <p>Let's build a social media presence that converts followers into customers.</p>
        <Link to="/contact-us">
          <button className="bb-svc-btn-primary" style={{background: 'white', color: accentColor, border: 'none'}}>
            Get Free Strategy Call
          </button>
        </Link>
      </section>
    </div>
  );
}