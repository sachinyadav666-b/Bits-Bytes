import React from 'react'
import { Link } from 'react-router-dom'
import {
  FeatureCard,
  TestimonialCard,
  FAQItem,
  AnimatedCounter,
  sharedStyles
} from '../SharedComponents'
import { 
  CheckCircle, Search, TrendingUp, Target, BarChart3, Users, Globe, Zap, 
  ArrowRight, Shield, Award, PieChart, MessageSquare, Briefcase, MapPin, MousePointer
} from 'lucide-react'

export default function KeywordResearchPage({ onNavigate }) {
  // --- COLOR PALETTE (Light & Fresh) ---
  const primaryBlue = '#2563EB' // Royal Blue
  const secondaryPurple = '#7C3AED' // Deep Purple
  const trafficOrange = '#F97316' // Action Orange
  const bgLight = '#F8FAFC' // Very Light Slate
  const textDark = '#1E293B' // Slate 800

  // --- 1. FEATURES DATA ---
  const features = [
    {
      icon: <Search size={24} />,
      title: 'Long-Tail Discovery',
      description: 'We find specific, low-competition phrases (3+ words) that are easier to rank for and convert better. These keywords have higher purchase intent.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Competitor Gap Analysis',
      description: 'We analyze your competitors to see exactly which keywords drive their traffic, identify gaps in your strategy, and find opportunities to outrank them.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: <Target size={24} />,
      title: 'Search Intent Mapping',
      description: "We classify keywords into 'Informational', 'Navigational', 'Commercial', and 'Transactional' to target buyers at every stage of the funnel.",
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Difficulty vs Volume',
      description: "We calculate the 'Golden Ratio'—high search volume with low ranking difficulty (KD%) for quick wins that drive traffic fast.",
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      icon: <Users size={24} />,
      title: 'Audience Questions',
      description: 'We find exactly what questions your customers are asking (People Also Ask, Quora, Reddit) to create helpful content that answers their needs.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      icon: <Globe size={24} />,
      title: 'Trend Spotting',
      description: 'Identify rising topics before they peak using Google Trends and social listening to establish early authority and capture emerging traffic.',
      color: 'text-pink-600',
      bg: 'bg-pink-50'
    }
  ]

  // --- 2. PROCESS DATA ---
  const processPoints = [
    {
      title: 'Business & Industry Analysis',
      description: 'We begin with understanding your business model, industry, competition, and target audience.',
      icon: <Briefcase size={20} />
    },
    {
      title: 'Keyword Discovery',
      description: 'We uncover several hundred likely keywords using sophisticated SEO tools and market insights.',
      icon: <Search size={20} />
    },
    {
      title: 'Search Intent Analysis',
      description: 'We organize keywords into Informational, Commercial, Transactional and Navigational intent categories.',
      icon: <Target size={20} />
    },
    {
      title: 'Competition & Difficulty Analysis',
      description: 'We identify competition level and ranking potential for each target keyword.',
      icon: <Shield size={20} />
    },
    {
      title: 'Final Keyword Mapping',
      description: 'Keywords are assigned to specific pages for optimal on-page optimization.',
      icon: <MapPin size={20} />
    },
    {
      title: 'Strategy Implementation',
      description: 'We provide content briefs and ongoing tracking with monthly optimization recommendations.',
      icon: <Zap size={20} />
    }
  ]

  // --- 3. TYPES OF KEYWORDS DATA ---
  const keywordTypes = [
    {
      title: 'Short-Tail Keywords',
      description: 'High search volume keywords (1-2 words) ideal for brand awareness and top-of-funnel traffic.',
      stats: 'High Volume, High Competition',
      accent: '#EF4444', // Red
      gradient: 'linear-gradient(135deg, #FEF2F2, #FEE2E2)'
    },
    {
      title: 'Long-Tail Keywords',
      description: 'Specific phrases (3+ words) with lower competition but higher conversion rates for lead generation.',
      stats: 'Lower Volume, Higher Conversion',
      accent: '#10B981', // Emerald
      gradient: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)'
    },
    {
      title: 'Local SEO Keywords',
      description: 'Geographically targeted keywords perfect for businesses targeting Noida, Delhi NCR and surrounding areas.',
      stats: 'Local Intent, High Relevance',
      accent: '#3B82F6', // Blue
      gradient: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)'
    },
    {
      title: 'Service & Product Keywords',
      description: 'Commercial keywords that directly generate inquiries and sales for your specific offerings.',
      stats: 'High Commercial Intent',
      accent: '#8B5CF6', // Purple
      gradient: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)'
    }
  ]

  // --- 4. MARKETING GOALS DATA ---
  const marketingGoals = [
    {
      title: 'SEO Keyword Research',
      description: 'For long-term organic traffic and higher Google rankings with sustainable growth strategies.',
      icon: <TrendingUp className="text-blue-500" />
    },
    {
      title: 'Content Marketing',
      description: 'To plan blogs, articles, landing pages and FAQs that rank well and engage target audiences.',
      icon: <MessageSquare className="text-pink-500" />
    },
    {
      title: 'E-Commerce Optimization',
      description: 'To optimize product pages, category pages and filters for higher sales and conversions.',
      icon: <PieChart className="text-orange-500" />
    },
    {
      title: 'PPC & Google Ads',
      description: 'To reduce ad spend and increase ROI with high-converting paid keywords and ad campaigns.',
      icon: <MousePointer className="text-green-500" />
    }
  ]

  // --- 5. TOOLS DATA ---
  const seoTools = [
    'Ahrefs', 'SEMrush', 'Moz Pro', 'Google Keyword Planner', 'Google Search Console',
    'SpyFu', 'Majestic', 'Ubersuggest', 'AnswerThePublic', 'Google Trends', 'KeywordTool.io'
  ]

  // --- 6. FAQs ---
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
    
  ]

  return (
    <div className='service-page font-sans bg-white'>
      <style>{sharedStyles}</style>

      {/* --- CUSTOM LIGHT THEME STYLES --- */}
      <style>{`
        /* GENERAL UTILS */
        .section-padding { padding: 80px 20px; }
        .max-w-container { max-width: 1200px; margin: 0 auto; }
        .text-gradient {
          background: linear-gradient(90deg, ${primaryBlue}, ${secondaryPurple});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* HERO SECTION */
        .hero-light {
          background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%);
          position: relative;
          overflow: hidden;
          padding-top: 140px;
          padding-bottom: 80px;
        }
        .hero-shape {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.4;
          filter: blur(80px);
        }

        /* SCANNER VISUAL (LIGHT MODE) */
        .scanner-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          overflow: hidden;
          position: relative;
        }
        .scanner-header {
          background: #f8fafc;
          padding: 12px 20px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .scanner-body { padding: 0; }
        .keyword-row {
          display: flex;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #f1f5f9;
          align-items: center;
          animation: slideIn 0.5s forwards;
          opacity: 0;
        }
        .keyword-row:last-child { border-bottom: none; }
        
        .badge-pill {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .badge-easy { background: #ecfdf5; color: #059669; }
        .badge-hard { background: #fef2f2; color: #dc2626; }
        
        .scan-beam {
          position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: ${trafficOrange};
          box-shadow: 0 0 15px ${trafficOrange};
          animation: scanDown 3s linear infinite;
          z-index: 10;
        }
        @keyframes scanDown {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes slideIn { to { opacity: 1; transform: translateY(0); } }

        /* CARDS & GRIDS */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }
        .clean-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .clean-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
          border-color: ${primaryBlue}30;
        }

        /* PROCESS TIMELINE */
        .process-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .process-item {
          display: flex;
          gap: 24px;
          padding: 24px;
          background: white;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: 0.3s;
        }
        .process-item:hover {
          border-color: ${primaryBlue};
          background: #f8fbff;
        }
        .step-circle {
          width: 50px;
          height: 50px;
          background: ${primaryBlue};
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          flex-shrink: 0;
          box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4);
        }

        /* TYPE CARDS */
        .type-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .type-card {
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: 0.3s;
        }
        .type-card:hover { transform: scale(1.02); }

        /* CTA BOX */
        .cta-box {
          background: linear-gradient(135deg, ${primaryBlue}, ${secondaryPurple});
          border-radius: 24px;
          padding: 60px 20px;
          text-align: center;
          color: white;
          box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.5);
        }

        /* TICKER */
        .tools-scroller {
          background: white;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          padding: 40px 0;
          overflow: hidden;
        }
        .ticker-track {
          display: flex;
          gap: 60px;
          animation: ticker 30s linear infinite;
          width: max-content;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tool-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #cbd5e1;
          white-space: nowrap;
        }

        /* STATS */
        .stats-light {
          background: white;
          border-bottom: 1px solid #f1f5f9;
          padding: 60px 0;
        }
        .stat-item { text-align: center; }
        .stat-val { font-size: 3rem; font-weight: 800; color: ${primaryBlue}; margin-bottom: 5px; }
        .stat-lbl { font-size: 1.1rem; color: #64748b; font-weight: 500; }

        /* RESPONSIVE */
        @media (max-width: 968px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-light { text-align: center; }
          .hero-btns { justify-content: center; }
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="hero-light">
        {/* Background blobs */}
        <div className="hero-shape" style={{ top: '-10%', left: '-5%', width: '500px', height: '500px', background: '#dbeafe' }}></div>
        <div className="hero-shape" style={{ bottom: '10%', right: '-5%', width: '400px', height: '400px', background: '#f3e8ff' }}></div>

        <div className="max-w-container px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center hero-grid">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                <Search size={14} /> Keyword Research Services in Noida
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Build SEO Strategies That <span className="text-gradient">Actually Rank</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Keyword research is the backbone of any successful SEO campaign. 
                At Bits and Bytes IT Solution, we deliver data-driven research to help you 
                rank higher, attract the right audience, and convert visitors into customers.
              </p>
              <div className="flex flex-wrap gap-4 hero-btns">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                  Get Free Audit <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all">
                  View Sample Report
                </button>
              </div>
            </div>

            {/* Right Visual - Light Mode Dashboard */}
            <div className="relative">
              <div className="scanner-card">
                <div className="scan-beam"></div>
                
                {/* Mock Header */}
                <div className="scanner-header">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-md px-3 py-1 text-sm text-slate-500 flex justify-between items-center">
                    <span>keyword research services noida...</span>
                    <Search size={14} />
                  </div>
                </div>

                {/* Mock Body */}
                <div className="scanner-body">
                  <div className="bg-slate-50 px-5 py-2 flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>Keyword</span>
                    <div className="flex gap-8">
                      <span>Vol</span>
                      <span>KD%</span>
                    </div>
                  </div>

                  <div className="keyword-row" style={{ animationDelay: '0.2s' }}>
                    <span className="font-medium text-slate-700">seo services noida</span>
                    <div className="flex gap-6 items-center w-32 justify-end">
                      <span className="text-slate-600">5.2K</span>
                      <span className="badge-pill badge-hard">78%</span>
                    </div>
                  </div>

                  <div className="keyword-row bg-blue-50/50" style={{ animationDelay: '0.8s' }}>
                    <span className="font-medium text-blue-700">best digital agency sector 62</span>
                    <div className="flex gap-6 items-center w-32 justify-end">
                      <span className="text-slate-600">1.8K</span>
                      <span className="badge-pill badge-easy">15%</span>
                    </div>
                  </div>

                  <div className="keyword-row bg-blue-50/50" style={{ animationDelay: '1.4s' }}>
                    <span className="font-medium text-blue-700">affordable seo near me</span>
                    <div className="flex gap-6 items-center w-32 justify-end">
                      <span className="text-slate-600">3.4K</span>
                      <span className="badge-pill badge-easy">22%</span>
                    </div>
                  </div>

                  <div className="keyword-row" style={{ animationDelay: '2.0s' }}>
                    <span className="font-medium text-slate-700">digital marketing</span>
                    <div className="flex gap-6 items-center w-32 justify-end">
                      <span className="text-slate-600">165K</span>
                      <span className="badge-pill badge-hard">95%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Decoration */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                 <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full text-green-600">
                     <TrendingUp size={20} />
                   </div>
                   <div>
                     <div className="text-xs text-slate-400">Potential Traffic</div>
                     <div className="font-bold text-slate-800">+245%</div>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="stats-light">
        <div className="max-w-container px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat-item">
            <div className="stat-val"><AnimatedCounter end={1000} suffix="+" /></div>
            <div className="stat-lbl">Keywords Mapped</div>
          </div>
          <div className="stat-item">
            <div className="stat-val"><AnimatedCounter end={85} suffix="%" /></div>
            <div className="stat-lbl">Ranking Boost</div>
          </div>
          <div className="stat-item">
            <div className="stat-val"><AnimatedCounter end={200} suffix="+" /></div>
            <div className="stat-lbl">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-val"><AnimatedCounter end={98} suffix="%" /></div>
            <div className="stat-lbl">Retention Rate</div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="section-padding bg-white">
        <div className="max-w-container px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Strategic Keyword Intelligence</h2>
            <p className="text-lg text-slate-500">We go beyond simple search volume. We find keywords that actually drive revenue.</p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="clean-card group">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-container px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             
             {/* Sticky Content */}
             <div className="sticky top-24">
               <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Our Methodology</span>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                 A Structured Approach to <br/> SEO Success
               </h2>
               <p className="text-lg text-slate-600 mb-8">
                 We don't guess. We use a 6-step data-driven process to identify, analyze, and map the most profitable keywords for your specific niche.
               </p>
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                 alt="Data Analysis" 
                 className="rounded-2xl shadow-2xl border-4 border-white w-full object-cover h-64"
               />
             </div>

             {/* Steps List */}
             <div className="process-list">
               {processPoints.map((point, i) => (
                 <div key={i} className="process-item group">
                   <div className="step-circle group-hover:bg-indigo-600 transition-colors">
                     {i + 1}
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                       {point.title}
                     </h3>
                     <p className="text-slate-600 leading-relaxed">
                       {point.description}
                     </p>
                   </div>
                 </div>
               ))}
             </div>

           </div>
        </div>
      </section>

      {/* --- TYPES OF KEYWORDS --- */}
      <section className="section-padding bg-white">
        <div className="max-w-container px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Types of Keywords We Research</h2>
            <p className="text-lg text-slate-500">Comprehensive coverage for every stage of your customer's journey.</p>
          </div>

          <div className="type-grid">
            {keywordTypes.map((type, index) => (
              <div key={index} className="type-card" style={{ background: type.gradient }}>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{type.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{type.description}</p>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white shadow-sm"
                  style={{ color: type.accent }}
                >
                  {type.stats}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MARKETING GOALS & IMPORTANCE --- */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-container px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-14">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Keyword Research Matters?</h2>
                <div className="space-y-4">
                  {[
                    'Higher search engine ranking',
                    'Targeted organic traffic',
                    'Better content planning',
                    'Increased conversion rate',
                    'Strong competitive advantage'
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle size={20} className="text-green-500 shrink-0" />
                       <span className="text-slate-700 font-medium">{item}</span>
                     </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg text-blue-800 text-sm font-medium">
                  "Our research ensures every page on your site targets a specific intent."
                </div>
              </div>

              <div className="bg-slate-50 p-10 md:p-14 border-l border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Aligned with Your Goals</h3>
                <div className="grid grid-cols-1 gap-4">
                  {marketingGoals.map((goal, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                      <div className="mt-1">{goal.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-800">{goal.title}</h4>
                        <p className="text-xs text-slate-500 mt-1">{goal.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TOOLS TICKER --- */}
      <section className="tools-scroller">
        <div className="max-w-container px-6 mb-6 text-center">
           <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Powered by Premium Enterprise Tools</p>
        </div>
        <div className="ticker-track">
          {[...seoTools, ...seoTools].map((tool, i) => (
            <span key={i} className="tool-name">{tool}</span>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-container px-6">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Client Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote='Their keyword research helped us target the right audience. Our organic traffic increased by 300%!' 
              author='Rahul Sharma' 
              role='Marketing Head' 
              company='E-Commerce Store' 
              avatar='RS' 
            />
            <TestimonialCard 
              quote='The search intent analysis was revolutionary. We now create content that actually answers customer questions.' 
              author='Priya Mehta' 
              role='Content Manager' 
              company='EdTech Startup' 
              avatar='PM' 
            />
            <TestimonialCard 
              quote='Local SEO keywords they provided helped us dominate the Noida market. Best investment ever!' 
              author='Vikram Singh' 
              role='Business Owner' 
              company='Local Service Company' 
              avatar='VS' 
            />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="section-padding bg-white">
        <div className="max-w-container px-6">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className='bb-svc-faq-container max-w-3xl mx-auto'>
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-container px-6">
          <div className="cta-box">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Ranking with Smart Research</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Stop guessing. Start dominating the search results in Noida with a custom keyword strategy tailored to your business.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-orange-50 transition-colors flex items-center gap-2 mx-auto">
              Get Your Custom Strategy <Zap size={20} className="text-orange-500"/>
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}