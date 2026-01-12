import React from 'react'
import { Link } from 'react-router-dom'
import {
  FeatureCard,
  TestimonialCard,
  FAQItem,
  AnimatedCounter,
  sharedStyles
} from '../SharedComponents'

export default function KeywordResearchPage({ onNavigate }) {
  // Brand Color + Traffic Orange (High Energy)
  const accentColor = '#0EA5E9'
  const trafficColor = '#F97316'

  // --- 1. FEATURES DATA ---
  const features = [
    {
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2'>
          <circle cx='11' cy='11' r='8' />
          <line x1='21' y1='21' x2='16.65' y2='16.65' />
        </svg>
      ),
      title: 'Long-Tail Discovery',
      description: 'We find specific, low-competition phrases (3+ words) that are easier to rank for and convert better. These keywords have higher purchase intent and lower competition.',
    },
    {
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2'>
          <path d='M12 20V10' />
          <path d='M18 20V4' />
          <path d='M6 20v-4' />
        </svg>
      ),
      title: 'Competitor Gap Analysis',
      description: 'We analyze your competitors to see exactly which keywords drive their traffic, identify gaps in your strategy, and find opportunities to outrank them.',
    },
    {
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2'>
          <circle cx='12' cy='12' r='10' />
          <path d='M16.2 7.8l-2 .4 2 .4' />
          <path d='M7.8 16.2l2-.4-2-.4' />
        </svg>
      ),
      title: 'Search Intent Mapping',
      description: "We classify keywords into 'Informational', 'Navigational', 'Commercial', and 'Transactional' to target buyers at every stage of the funnel.",
    },
    {
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2'>
          <path d='M21.21 15.89A10 10 0 1 1 8 2.83' />
          <path d='M22 12A10 10 0 0 0 12 2v10z' />
        </svg>
      ),
      title: 'Difficulty vs Volume',
      description: "We calculate the 'Golden Ratio'—high search volume with low ranking difficulty (KD%) for quick wins that drive traffic fast.",
    },
    {
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2'>
          <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
          <circle cx='9' cy='7' r='4' />
          <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
          <path d='M16 3.13a4 4 0 0 1 0 7.75' />
        </svg>
      ),
      title: 'Audience Questions',
      description: 'We find exactly what questions your customers are asking (People Also Ask, Quora, Reddit) to create helpful content that answers their needs.',
    },
    {
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2'>
          <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
        </svg>
      ),
      title: 'Trend Spotting',
      description: 'Identify rising topics before they peak using Google Trends and social listening to establish early authority and capture emerging traffic.',
    }
  ]

  // --- 2. PROCESS DATA (Updated for New Layout) ---
  const processPoints = [
    {
      title: 'Niche Audit',
      description: 'Analyzing your current rankings, traffic sources, and identifying industry benchmarks and opportunities.'
    },
    {
      title: 'Data Mining',
      description: 'Scraping millions of keywords using enterprise tools like Ahrefs, SEMrush, and Google Keyword Planner.'
    },
    {
      title: 'Filtering & Clustering',
      description: "Removing irrelevant terms and grouping similar keywords into 'Topic Clusters' for content strategy."
    },
    {
      title: 'Strategy Mapping',
      description: 'Assigning keywords to specific pages (Homepage vs Blog vs Service Pages vs Product Pages).'
    },
    {
      title: 'Content Briefs',
      description: 'Providing detailed roadmaps for writers including target keywords, LSI terms, and content structure.'
    },
    {
      title: 'Ongoing Tracking',
      description: 'Monthly rank tracking and keyword performance monitoring with recommendations for optimization.'
    }
  ]

  const faqs = [
    {
      question: "Why can't I just guess keywords?",
      answer: 'Guessing leads to targeting terms nobody searches for, or terms that are too competitive. Data-driven keyword research guarantees you target terms with actual search volume and achievable rankings.'
    },
    {
      question: 'What tools do you use for keyword research?',
      answer: 'We use a combination of Ahrefs, SEMrush, Moz Pro, Google Keyword Planner, Google Search Console, AnswerThePublic, and custom Python scripts for comprehensive analysis.'
    },
    {
      question: 'Do you guarantee #1 rankings?',
      answer: 'No ethical agency guarantees #1 rankings as many factors affect SEO. However, targeting the right low-competition keywords with proper on-page optimization significantly increases your ranking chances.'
    },
    {
      question: "What is 'Search Intent' and why does it matter?",
      answer: 'Search intent is understanding WHY someone searches. Are they looking to buy (Transactional), research (Commercial), learn (Informational), or find a specific site (Navigational)? We target keywords based on your business goals.'
    },
    {
      question: 'How long does the keyword research take?',
      answer: 'A comprehensive keyword research audit typically takes 5-7 business days for in-depth analysis including competitor research, keyword mapping, and content recommendations.'
    },
    {
      question: 'What deliverables do I receive?',
      answer: 'You receive a comprehensive keyword research report including: prioritized keyword list with metrics, competitor analysis, topic clusters, content calendar recommendations, and technical SEO quick wins.'
    },
    {
      question: 'How many keywords do you research?',
      answer: 'We typically analyze 1,000-10,000+ keywords depending on your industry, then filter down to the most valuable 50-200 target keywords organized by priority and page assignment.'
    },
    {
      question: 'Do you help implement the keywords?',
      answer: 'Yes! We provide detailed content briefs and can work with your content team. We also offer full SEO implementation services including on-page optimization and content creation.'
    },
    {
      question: 'How often should keyword research be updated?',
      answer: 'We recommend quarterly keyword research updates to capture seasonal trends, new opportunities, and adjust strategy based on ranking performance.'
    },
    {
      question: 'What is the cost of keyword research services?',
      answer: 'Our keyword research packages start from ₹15,000 for basic research to ₹50,000+ for comprehensive enterprise-level research with ongoing tracking and strategy.'
    }
  ]

  // --- 4. MOVING TOOLS TICKER ---
  const seoTools = [
    'Ahrefs', 'SEMrush', 'Moz Pro', 'Google Search Console', 'Ubersuggest',
    'SpyFu', 'Majestic', 'Screaming Frog', 'KeywordTool.io', 'AnswerThePublic', 'Google Trends'
  ]

  return (
    <div className='service-page'>
      <style>{sharedStyles}</style>

      {/* --- CUSTOM STYLES (Dark Theme + Data Scanner Visual) --- */}
      <style>{`
        .bb-svc-hero-section {
          background: #0f172a;
          color: white;
          position: relative;
          overflow: hidden;
          padding: 4rem 2rem;
        }
        .bb-svc-hero-section::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(#1e293b 1px, transparent 1px),
          linear-gradient(90deg, #1e293b 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
          top: 0; left: 0;
        }

        .bb-svc-hero-content {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 4rem;
           max-width: 1200px;
           margin: 0 auto;
           position: relative;
           z-index: 2;
           align-items: center;
        }
        
        @media (max-width: 968px) {
           .bb-svc-hero-content { grid-template-columns: 1fr; }
        }

        /* HERO VISUAL: KEYWORD SCANNER */
        .scanner-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          background: #1e293b;
          border-radius: 12px;
          border: 1px solid #334155;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          overflow: hidden;
          padding: 20px;
        }
        
        .search-bar-mock {
          height: 40px;
          background: #0f172a;
          border: 1px solid #475569;
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0 15px;
          margin-bottom: 20px;
          color: white;
          font-family: monospace;
          gap: 10px;
        }
        
        .result-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          border-bottom: 1px solid #334155;
          font-size: 13px;
          opacity: 0;
          animation: fadeInRow 0.5s forwards;
        }
        .result-row:last-child { border-bottom: none; }
        
        .kw-tag { color: #cbd5e1; font-weight: 500; }
        .metric-box { 
          padding: 4px 8px; 
          border-radius: 4px; 
          font-weight: bold; 
          font-size: 11px; 
          min-width: 60px;
          text-align: center;
        }
        .metric-vol { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .metric-kd { background: rgba(16, 185, 129, 0.2); color: #34d399; }
        .metric-kd-hard { background: rgba(239, 68, 68, 0.2); color: #f87171; }

        @keyframes fadeInRow {
          to { opacity: 1; transform: translateY(0); }
        }

        .scan-line {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: ${accentColor};
          box-shadow: 0 0 15px ${accentColor};
          animation: scan 3s linear infinite;
          z-index: 10;
        }
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
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
        .bb-svc-tech-item:hover { color: ${trafficColor}; }
      `}</style>

      {/* HERO SECTION */}
      <section className='bb-svc-hero-section'>
        <div className='bb-svc-hero-content'>
          <div className='bb-svc-hero-text'>
            <div
              style={{
                display: 'inline-block',
                padding: '5px 15px',
                background: 'rgba(249, 115, 22, 0.1)',
                color: trafficColor,
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}
            >
              🔍 UNLOCK HIDDEN TRAFFIC
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1rem' }}>
              Stop Guessing. <br />{' '}
              <span style={{ color: trafficColor }}>Start Ranking.</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2rem' }}>
              We find the high-volume, low-competition "Money Keywords" that
              your competitors are missing.
            </p>
            <div className='bb-svc-hero-buttons' style={{ display: 'flex', gap: '1rem' }}>
              <button className='bb-svc-btn-primary' style={{ background: trafficColor, color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                Get Free Keyword Audit
              </button>
              <button className='bb-svc-btn-secondary' style={{ borderColor: 'rgba(255,255,255,0.3)', background: 'transparent', color: 'white', border: '1px solid', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer' }}>
                See Sample Report
              </button>
            </div>
          </div>

          {/* HERO VISUAL: KEYWORD SCANNER */}
          <div className='bb-svc-hero-visual'>
            <div className='scanner-container'>
              <div className='scan-line'></div>

              {/* Fake Search Bar */}
              <div className='search-bar-mock'>
                <svg width='16' height='16' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                  <circle cx='11' cy='11' r='8' />
                  <line x1='21' y1='21' x2='16.65' y2='16.65' />
                </svg>
                <span>best digital marketing agency</span>
                <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#94a3b8' }}>
                  Analyzing...
                </span>
              </div>

              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px 10px', fontSize: '10px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>
                <span>Keyword</span>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <span>Volume</span>
                  <span>KD %</span>
                </div>
              </div>

              {/* Results */}
              <div className='result-row' style={{ animationDelay: '0.5s' }}>
                <span className='kw-tag'>digital marketing services</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span className='metric-box metric-vol'>12.5K</span>
                  <span className='metric-box metric-kd-hard'>85% (Hard)</span>
                </div>
              </div>

              <div className='result-row' style={{ animationDelay: '1.0s', background: 'rgba(16, 185, 129, 0.05)' }}>
                <span className='kw-tag' style={{ color: '#34d399' }}>affordable seo services india</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span className='metric-box metric-vol'>4.2K</span>
                  <span className='metric-box metric-kd'>12% (Easy)</span>
                </div>
              </div>

              <div className='result-row' style={{ animationDelay: '1.5s', background: 'rgba(16, 185, 129, 0.05)' }}>
                <span className='kw-tag' style={{ color: '#34d399' }}>best web dev agency for startups</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span className='metric-box metric-vol'>1.8K</span>
                  <span className='metric-box metric-kd'>8% (Easy)</span>
                </div>
              </div>

              <div className='result-row' style={{ animationDelay: '2.0s' }}>
                <span className='kw-tag'>marketing agency</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span className='metric-box metric-vol'>50K</span>
                  <span className='metric-box metric-kd-hard'>92% (Hard)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className='bb-svc-stats-section'>
        <div className='bb-svc-stats-grid'>
          <div className='bb-svc-stat-card'>
            <div className='bb-svc-stat-number'><AnimatedCounter end={1} suffix='M+' /></div>
            <div className='bb-svc-stat-label'>Keywords Tracked</div>
          </div>
          <div className='bb-svc-stat-card'>
            <div className='bb-svc-stat-number'><AnimatedCounter end={500} suffix='%' /></div>
            <div className='bb-svc-stat-label'>Traffic Increase</div>
          </div>
          <div className='bb-svc-stat-card'>
            <div className='bb-svc-stat-number'>#1</div>
            <div className='bb-svc-stat-label'>Rankings Achieved</div>
          </div>
          <div className='bb-svc-stat-card'>
            <div className='bb-svc-stat-number'><AnimatedCounter end={100} suffix='+' /></div>
            <div className='bb-svc-stat-label'>Niches Analyzed</div>
          </div>
        </div>
      </section>

      {/* --- MOVING TOOLS TICKER --- */}
      <div className='bb-svc-tech-ticker'>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '3px', fontWeight: 'bold', color: trafficColor }}>
          POWERED BY ENTERPRISE DATA
        </div>
        <div className='bb-svc-tech-track'>
          {seoTools.map((tool, i) => (<span key={`a-${i}`} className='bb-svc-tech-item'>{tool}</span>))}
          {seoTools.map((tool, i) => (<span key={`b-${i}`} className='bb-svc-tech-item'>{tool}</span>))}
        </div>
      </div>

      {/* FEATURES */}
      <section className='bb-svc-features-section'>
        <div className='bb-svc-section-header'>
          <h2>Strategic Keyword Intelligence</h2>
          <p>We go beyond search volume to find what actually sells.</p>
        </div>
        <div className='bb-svc-features-grid'>
          {features.map((feature, index) => (
            <Link key={index} to={feature.link || '#'} style={{ textDecoration: 'none' }}>
              <FeatureCard {...feature} color={accentColor} />
            </Link>
          ))}
        </div>
      </section>

      {/* ======================================================= */}
      {/* ⚠️ NEW SECTION ADDED: IMAGE LEFT / CONTENT RIGHT ⚠️ */}
      {/* ======================================================= */}
      <section className="py-16 bg-slate-50 overflow-hidden" style={{ padding: '4rem 2rem', background: '#f8fafc' }}>
        <div className="container mx-auto px-4 md:px-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Side: Image */}
            <div className="relative group" style={{ position: 'relative' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl opacity-30 blur-lg" style={{ position: 'absolute', inset: '-1rem', background: 'linear-gradient(to right, #0891b2, #9333ea)', opacity: '0.3', filter: 'blur(16px)', borderRadius: '1rem', zIndex: 0 }}></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white" style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: '4px solid white', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', zIndex: 1 }}>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="Keyword Research Analysis" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="space-y-8">
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#0f172a', lineHeight: '1.2', marginBottom: '1rem' }}>
                  Strategic <span style={{ background: 'linear-gradient(to right, #0891b2, #9333ea)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Keyword Research</span> Process
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                  We don't just guess; we use data-driven strategies to find the terms that will actually drive traffic and sales to your business.
                </p>
              </div>

              {/* Process Points List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {processPoints.map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    {/* Icon/Number Circle */}
                    <div style={{ flexShrink: 0, width: '2.5rem', height: '2.5rem', borderRadius: '9999px', background: '#cffafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem' }}>
                      <span style={{ color: '#0e7490', fontWeight: 'bold', fontSize: '1.125rem' }}>{index + 1}</span>
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.25rem' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#475569', lineHeight: '1.625' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className='bb-svc-testimonials-section'>
        <div className='bb-svc-section-header'>
          <h2>Ranking Success</h2>
        </div>
        <div className='bb-svc-testimonials-grid'>
          <TestimonialCard quote='We stopped writing random blogs and started targeting the keywords they found. Traffic tripled in 4 months.' author='Mark Evans' role='CMO' company='TechFlow' avatar='ME' />
          <TestimonialCard quote='Their gap analysis showed us exactly where our competitors were weak. We took their traffic.' author='Sarah Jenkins' role='Owner' company='PetSupply' avatar='SJ' />
          <TestimonialCard quote='The intent mapping was a game changer. We get fewer visitors now, but WAY more sales.' author='David Ross' role='Founder' company='LawFirm SEO' avatar='DR' />
        </div>
      </section>

      {/* FAQ */}
      <section className='bb-svc-faq-section'>
        <div className='bb-svc-section-header'>
          <h2>Keyword FAQ</h2>
        </div>
        <div className='bb-svc-faq-container'>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </section>

    </div>
  )
}