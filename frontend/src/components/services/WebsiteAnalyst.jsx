import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FeatureCard,
  TestimonialCard,
  FAQItem,
  AnimatedCounter,
  sharedStyles,
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

  // --- 3. NEW CONTENT DATA ---
  const services = [
    {
      title: "Advanced Website Analytics Setup & Configuration",
      description: "We offer comprehensive website analytics setup to ensure highly accurate and reliable data tracking.",
      features: [
        "Configuration of Google Analytics",
        "Tracking events & goals",
        "Setup Conversion Tracking",
        "Funnel and user journey analysis",
        "e-Commerce & Lead tracking integration"
      ],
      note: "You get clean and meaningful data right from day one, provided it is set up right."
    },
    {
      title: "Website Traffic Analysis & User Behavior Insights",
      description: "Knowing who is visiting your website and how they are behaving is absolutely vital. Our website traffic analysis services can give you all this information.",
      metrics: [
        "Visitors & Sessions - Total",
        "New user vs existing user",
        "Bounce rate and Session duration",
        "Page-wise performance",
        "Device & browser analysis"
      ],
      note: "These result in better content, design, and navigation."
    },
    {
      title: "Conversion Tracking & Performance Measurement",
      description: "Traffic alone is not sufficient, conversions must be considered. On our website, the goal of our conversion analysis is to monitor actions which provide business outcomes.",
      features: [
        "Lead form submissions",
        "Contact & Inquiry Tracking",
        "Button and CTA tracking",
        "Sales and checkout tracking",
        "Funnel Drop-off Analysis"
      ],
      note: "This assists you in the process of optimizing pages which actually contribute to your revenue."
    },
    {
      title: "Marketing Campaign & Source Analytics",
      description: "We analyze where your traffic comes from and how each channel performs.",
      insights: [
        "Organic search performance",
        "Tracking of paid ads & PPC",
        "Social media traffic analysis",
        "Referral and campaign tracking",
        "Return on Investment Measurement"
      ],
      note: "Our Noida digital marketing analytics services will help you invest more in channels that return the best results."
    },
    {
      title: "Website Performance & UX Analytics",
      description: "User experience plays a major role in conversions. Our website performance analytics helps identify usability issues.",
      metrics: [
        "Page load speed analysis",
        "Mobile vs desktop performance",
        "User flow visualization",
        "Heatmap & interaction analysis"
      ],
      note: "Improving UX leads to better engagement and higher conversions."
    },
    {
      title: "Custom Reports & Analytics Dashboards",
      description: "We provide custom analytics dashboards that present data in a simple and visual format.",
      features: [
        "Daily, weekly & monthly reports",
        "Visual charts & graphs",
        "Downloadable analytics reports",
        "Business-focused KPIs",
        "Role-based access"
      ],
      note: "These reports make analytics easy to understand, even for non-technical users."
    }
  ];

  const faqs = [
    { 
      question: "Why do I need Analytics? Isn't looking at sales enough?", 
      answer: "Sales tell you WHAT happened. Analytics tell you WHY. Without it, you don't know if your marketing is working or luck." 
    },
    { 
      question: "Is GA4 difficult to use?", 
      answer: "Yes, GA4 is complex compared to Universal Analytics. We set it up so you only see the reports that matter, not the noise." 
    },
    { 
      question: "Can you track button clicks and form submissions?", 
      answer: "Absolutely. We use Google Tag Manager to track specific interactions, scroll depth, and even video engagement." 
    },
    { 
      question: "Do you offer A/B testing?", 
      answer: "Yes, based on analytics data, we can propose A/B tests (changing headlines, colors) to improve conversion rates." 
    },
    { 
      question: "Will this slow down my website?", 
      answer: "No. We implement tags asynchronously via GTM, ensuring they fire without blocking your page load speed." 
    }
  ];

  // --- 4. MOVING TOOLS TICKER ---
  const analyticsTools = [
    'Google Analytics 4', 'Google Tag Manager', 'Looker Studio', 'Hotjar', 'Microsoft Clarity', 
    'Mixpanel', 'CrazyEgg', 'Segment', 'Amplitude', 'Tableau'
  ];

  return (
    <div className="service-page">
      <style>{sharedStyles}</style>

      {/* --- CUSTOM STYLES --- */}
      <style>{`
        .service-page {
          background: white;
          color: #1f2937;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* HERO SECTION */
        .bb-svc-hero-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          position: relative;
          overflow: hidden;
          padding: 6rem 2rem 4rem;
        }
        
        .bb-svc-hero-section::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 55%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 55%);
          top: 0;
          left: 0;
          z-index: 1;
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
          .bb-svc-hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .bb-svc-hero-text h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #ffffff, ${accentColor});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 768px) {
          .bb-svc-hero-text h1 {
            font-size: 2.5rem;
          }
        }

        .bb-svc-hero-text p {
          font-size: 1.25rem;
          color: #cbd5e1;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .bb-svc-hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .bb-svc-btn-primary {
          background: linear-gradient(135deg, ${dataColor}, #7c3aed);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
        }

        .bb-svc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
        }

        .bb-svc-btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 1rem 2.5rem;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .bb-svc-btn-secondary:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        /* HERO VISUAL: LIVE DATA MONITOR */
        .analytics-dashboard {
          position: relative;
          width: 100%;
          max-width: 450px;
          background: #1e293b;
          border-radius: 20px;
          border: 2px solid #334155;
          padding: 24px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          overflow: hidden;
          margin: 0 auto;
        }
        
        .live-indicator {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.2);
          color: #f87171;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        
        .live-dot {
          width: 8px;
          height: 8px;
          background: #f87171;
          border-radius: 50%;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          50% { opacity: 0; }
        }

        /* Animated Bar Chart */
        .chart-container {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 120px;
          margin-bottom: 24px;
          padding-bottom: 10px;
          border-bottom: 2px solid #334155;
        }
        
        .bar {
          width: 12%;
          background: linear-gradient(to top, ${dataColor}, ${accentColor});
          border-radius: 6px 6px 0 0;
          animation: growBar 2s infinite alternate;
        }
        
        @keyframes growBar {
          0% { height: 20%; opacity: 0.6; }
          100% { height: 90%; opacity: 1; }
        }

        /* Stats Row */
        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        
        .mini-stat {
          background: #0f172a;
          padding: 15px;
          border-radius: 12px;
          border: 2px solid #334155;
          transition: all 0.3s ease;
        }
        
        .mini-stat:hover {
          border-color: ${dataColor};
          transform: translateY(-3px);
        }
        
        .bb-svc-stat-label {
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .stat-val {
          font-size: 24px;
          font-weight: bold;
          color: white;
          margin: 5px 0;
        }
        
        .stat-up {
          font-size: 12px;
          color: #10b981;
          font-weight: 600;
        }

        /* Floating Visitors */
        .visitor-bubble {
          position: absolute;
          background: white;
          color: #0f172a;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: bold;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          animation: floatMap 4s infinite;
          z-index: 10;
          border: 2px solid ${dataColor};
        }
        
        @keyframes floatMap {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }

        /* STATS SECTION */
        .bb-svc-stats-section {
          padding: 4rem 2rem;
          background: white;
        }

        .bb-svc-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bb-svc-stat-card {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, #f8fafc, #ffffff);
          border-radius: 16px;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .bb-svc-stat-card:hover {
          transform: translateY(-5px);
          border-color: ${dataColor};
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
        }

        .bb-svc-stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(to right, ${accentColor}, ${dataColor});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .bb-svc-stat-label {
          font-size: 1.1rem;
          color: #64748b;
          font-weight: 600;
        }

        /* TOOLS TICKER */
        .bb-svc-tech-ticker {
          overflow: hidden;
          background: linear-gradient(90deg, #f8fafc, #ffffff, #f8fafc);
          padding: 3rem 0;
          position: relative;
        }

        .bb-svc-tech-ticker::before,
        .bb-svc-tech-ticker::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
        }

        .bb-svc-tech-ticker::before {
          left: 0;
          background: linear-gradient(to right, #f8fafc, transparent);
        }

        .bb-svc-tech-ticker::after {
          right: 0;
          background: linear-gradient(to left, #f8fafc, transparent);
        }

        .bb-svc-tech-track {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }

        .bb-svc-tech-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .bb-svc-tech-item {
          font-weight: 700;
          color: #475569;
          font-size: 1.5rem;
          margin: 0 2.5rem;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          padding: 0.75rem 1.5rem;
          background: white;
          border-radius: 50px;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .bb-svc-tech-item:hover {
          color: ${dataColor};
          border-color: ${dataColor};
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.15);
        }

        /* FEATURES SECTION */
        .bb-svc-features-section {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #f8fafc, #ffffff);
        }

        .bb-svc-section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .bb-svc-section-header h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .bb-svc-section-header p {
          font-size: 1.25rem;
          color: #64748b;
          line-height: 1.6;
        }

        .bb-svc-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* SERVICE CARDS */
        .service-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 2px solid #f1f5f9;
          transition: all 0.3s ease;
          margin-bottom: 2rem;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: ${dataColor};
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.1);
        }

        .service-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .service-title::before {
          content: '📊';
          font-size: 1.5rem;
        }

        .service-description {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .features-list, .metrics-list, .insights-list {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }

        .feature-item, .metric-item, .insight-item {
          color: #334155;
          margin-bottom: 0.75rem;
          padding-left: 1rem;
          position: relative;
          line-height: 1.6;
        }

        .feature-item::before, .metric-item::before, .insight-item::before {
          content: '✓';
          position: absolute;
          left: -1.5rem;
          color: ${dataColor};
          font-weight: bold;
        }

        .service-note {
          margin-top: 1.5rem;
          padding: 1.25rem;
          background: linear-gradient(135deg, #f5f3ff, #ede9fe);
          border-radius: 12px;
          border-left: 4px solid ${dataColor};
          font-size: 1.05rem;
          color: #5b21b6;
          font-weight: 600;
        }

        /* PROCESS SECTION */
        .bb-process-unique-section {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #ffffff, #f8fafc);
        }

        .bb-process-split-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4rem;
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
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .bb-unique-audit-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .bb-process-left-img:hover .bb-unique-audit-img {
          transform: scale(1.05);
        }
        
        .bb-process-right-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .bb-process-right-content h2 {
          font-size: 2.5rem;
          color: #1e293b;
          margin-bottom: 1rem;
          font-weight: 800;
        }
        
        .bb-process-right-content p.lead {
          font-size: 1.25rem;
          color: #64748b;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .bb-audit-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }
        
        .bb-audit-timeline::before {
          content: '';
          position: absolute;
          left: 21px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: linear-gradient(to bottom, ${dataColor}, ${accentColor});
        }
        
        .bb-audit-step {
          display: flex;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
          align-items: flex-start;
        }
        
        .bb-audit-marker {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, ${dataColor}, #7c3aed);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          flex-shrink: 0;
          border: 4px solid #f8fafc;
          box-shadow: 0 8px 16px rgba(139, 92, 246, 0.3);
          transition: all 0.3s ease;
        }
        
        .bb-audit-step:hover .bb-audit-marker {
          transform: scale(1.1);
          box-shadow: 0 12px 24px rgba(139, 92, 246, 0.4);
        }
        
        .bb-audit-text h3 {
          font-size: 1.25rem;
          margin: 0 0 8px 0;
          color: #1e293b;
          font-weight: 700;
        }
        
        .bb-audit-text p {
          margin: 0;
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* TESTIMONIALS */
        .bb-svc-testimonials-section {
          padding: 6rem 2rem;
          background: white;
        }

        .bb-svc-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* FAQ */
        .bb-svc-faq-section {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #f8fafc, #ffffff);
        }

        .bb-svc-faq-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* CONTENT SECTIONS */
        .content-section {
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(to right, ${accentColor}, ${dataColor});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .highlight-badge {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(14, 165, 233, 0.15));
          color: ${dataColor};
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 2px solid rgba(139, 92, 246, 0.2);
        }

        /* BENEFITS SECTION */
        .benefits-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #ffffff, #f8fafc);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 2rem auto 0;
        }

        .benefit-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          border: 2px solid #f1f5f9;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          border-color: ${dataColor};
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.1);
        }

        .benefit-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .benefit-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .benefit-description {
          color: #475569;
          line-height: 1.6;
        }

        /* CTA SECTION */
        .cta-section {
          padding: 5rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #ffffff, ${dataColor});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-description {
          font-size: 1.25rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .cta-button {
          background: linear-gradient(135deg, ${dataColor}, #7c3aed);
          color: white;
          border: none;
          padding: 1.25rem 3rem;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(139, 92, 246, 0.6);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="bb-svc-hero-section">
  <div className="bb-svc-hero-content">
    
    {/* Left Side - Text Content */}
    <div className="bb-svc-hero-text">
      <div className="highlight-badge">
        📊 WEBSITE ANALYTICS SERVICES IN NOIDA
      </div>
      <h1>Transform Data into <span className="gradient-text">Actionable Insights</span> for Business Growth</h1>
      <p className="hero-subtitle">
        The knowledge about how your website visitors are interacting with your website holds the key to success in online business.
      </p>
      <p>
        At Bits and Bytes IT Solution, we offer comprehensive data analytical solutions to help you measure online traffic, analyze user behavior, and optimize conversions. Our analytics services provide clear understanding of where your website stands and where improvements can be made.
      </p>
      
      <div className="hero-stats-preview">
        <div className="stat-preview">
          <div className="stat-preview-value">95%</div>
          <div className="stat-preview-label">Accuracy Rate</div>
        </div>
        <div className="stat-preview">
          <div className="stat-preview-value">40%</div>
          <div className="stat-preview-label">Avg. ROI Increase</div>
        </div>
        <div className="stat-preview">
          <div className="stat-preview-value">24/7</div>
          <div className="stat-preview-label">Real-time Tracking</div>
        </div>
      </div>

      <div className="bb-svc-hero-buttons">
        <button className="bb-svc-btn-primary">
          <span className="btn-icon">📈</span>
          Get Free Analytics Audit
        </button>
        <button className="bb-svc-btn-secondary">
          <span className="btn-icon">📋</span>
          View Sample Reports
        </button>
      </div>
    </div>

    {/* Right Side - Modern Dashboard Visual */}
    <div className="bb-svc-hero-visual">
      <div className="modern-dashboard">
        
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <div className="dashboard-icon">📊</div>
            <span>Live Performance Dashboard</span>
          </div>
          <div className="dashboard-time">Last 24 hours • Updated just now</div>
        </div>

        {/* Key Metrics Row */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-label">Total Visitors</div>
            <div className="metric-value">8,426</div>
            <div className="metric-trend trend-up">▲ 12.5%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Conversion Rate</div>
            <div className="metric-value">3.8%</div>
            <div className="metric-trend trend-up">▲ 8.2%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Avg. Session</div>
            <div className="metric-value">2m 45s</div>
            <div className="metric-trend trend-up">▲ 0.5%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Bounce Rate</div>
            <div className="metric-value">32.1%</div>
            <div className="metric-trend trend-down">▼ 4.3%</div>
          </div>
        </div>

        {/* Chart Visualization */}
        <div className="chart-visualization">
          <div className="chart-header">
            <div className="chart-title">Traffic Sources Overview</div>
            <div className="chart-legend">
              <span className="legend-item organic">Organic</span>
              <span className="legend-item direct">Direct</span>
              <span className="legend-item social">Social</span>
              <span className="legend-item paid">Paid</span>
            </div>
          </div>
          <div className="chart-bars">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className="chart-day">
                <div className="day-label">{day}</div>
                <div className="day-bars">
                  <div className="bar organic" style={{ height: `${40 + i * 5}%` }}></div>
                  <div className="bar direct" style={{ height: `${30 + i * 3}%` }}></div>
                  <div className="bar social" style={{ height: `${25 + i * 4}%` }}></div>
                  <div className="bar paid" style={{ height: `${20 + i * 2}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="realtime-activity">
          <div className="activity-header">
            <span>Real-time Activity</span>
            <div className="live-pulse">
              <div className="pulse-dot"></div>
              <span>Live</span>
            </div>
          </div>
          <div className="activity-list">
            {[
              { location: 'Noida', action: 'Viewed Pricing', time: '2 min ago' },
              { location: 'Delhi', action: 'Started Checkout', time: '4 min ago' },
              { location: 'Gurgaon', action: 'Added to Cart', time: '5 min ago' },
              { location: 'Mumbai', action: 'Contact Form Submit', time: '7 min ago' }
            ].map((activity, i) => (
              <div key={i} className="activity-item">
                <div className="activity-icon">📍</div>
                <div className="activity-content">
                  <div className="activity-location">{activity.location}</div>
                  <div className="activity-action">{activity.action}</div>
                </div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

  </div>

  <style>{`
    /* Hero Text Improvements */
    .bb-svc-hero-text h1 {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.3rem;
      color: #cbd5e1;
      font-weight: 500;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .bb-svc-hero-text p {
      font-size: 1.1rem;
      color: #94a3b8;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }
    
    /* Stats Preview */
    .hero-stats-preview {
      display: flex;
      gap: 2rem;
      margin: 2rem 0;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .stat-preview {
      text-align: center;
      flex: 1;
    }
    
    .stat-preview-value {
      font-size: 2.2rem;
      font-weight: 800;
      background: linear-gradient(135deg, ${accentColor}, ${dataColor});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.25rem;
    }
    
    .stat-preview-label {
      font-size: 0.9rem;
      color: #94a3b8;
      font-weight: 600;
    }
    
    /* Button Improvements */
    .bb-svc-hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 2rem;
    }
    
    .btn-icon {
      margin-right: 8px;
      font-size: 1.2rem;
    }
    
    /* Modern Dashboard Styling */
    .modern-dashboard {
      background: #1e293b;
      border-radius: 20px;
      padding: 24px;
      border: 2px solid #334155;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
      max-width: 500px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }
    
    .modern-dashboard::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${accentColor}, ${dataColor});
    }
    
    /* Dashboard Header */
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 2px solid #334155;
    }
    
    .dashboard-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      color: white;
      font-size: 1.1rem;
    }
    
    .dashboard-icon {
      font-size: 1.5rem;
    }
    
    .dashboard-time {
      font-size: 0.85rem;
      color: #94a3b8;
    }
    
    /* Metrics Grid */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    
    .metric-card {
      background: #0f172a;
      padding: 16px;
      border-radius: 12px;
      border: 1px solid #334155;
      transition: all 0.3s ease;
    }
    
    .metric-card:hover {
      border-color: ${dataColor};
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(139, 92, 246, 0.2);
    }
    
    .metric-label {
      font-size: 0.85rem;
      color: #94a3b8;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .metric-value {
      font-size: 1.8rem;
      font-weight: 800;
      color: white;
      margin-bottom: 4px;
    }
    
    .metric-trend {
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    .trend-up {
      color: #10b981;
    }
    
    .trend-down {
      color: #ef4444;
    }
    
    /* Chart Visualization */
    .chart-visualization {
      background: #0f172a;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 24px;
      border: 1px solid #334155;
    }
    
    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .chart-title {
      font-weight: 600;
      color: white;
      font-size: 1rem;
    }
    
    .chart-legend {
      display: flex;
      gap: 12px;
    }
    
    .legend-item {
      font-size: 0.75rem;
      color: #94a3b8;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .legend-item::before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 2px;
    }
    
    .legend-item.organic::before { background: ${accentColor}; }
    .legend-item.direct::before { background: #10b981; }
    .legend-item.social::before { background: #f59e0b; }
    .legend-item.paid::before { background: #ef4444; }
    
    .chart-bars {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 120px;
      gap: 8px;
    }
    
    .chart-day {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }
    
    .day-label {
      font-size: 0.75rem;
      color: #94a3b8;
      margin-bottom: 8px;
    }
    
    .day-bars {
      display: flex;
      align-items: flex-end;
      width: 100%;
      height: 100px;
      gap: 2px;
    }
    
    .day-bars .bar {
      flex: 1;
      border-radius: 2px 2px 0 0;
      min-height: 2px;
    }
    
    .bar.organic { background: ${accentColor}; }
    .bar.direct { background: #10b981; }
    .bar.social { background: #f59e0b; }
    .bar.paid { background: #ef4444; }
    
    /* Real-time Activity */
    .realtime-activity {
      background: #0f172a;
      border-radius: 12px;
      padding: 20px;
      border: 1px solid #334155;
    }
    
    .activity-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      color: white;
      font-weight: 600;
    }
    
    .live-pulse {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(239, 68, 68, 0.2);
      color: #f87171;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    .pulse-dot {
      width: 6px;
      height: 6px;
      background: #f87171;
      border-radius: 50%;
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    .activity-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .activity-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .activity-item:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: translateX(4px);
    }
    
    .activity-icon {
      font-size: 1.2rem;
    }
    
    .activity-content {
      flex: 1;
    }
    
    .activity-location {
      font-weight: 600;
      color: white;
      font-size: 0.9rem;
      margin-bottom: 2px;
    }
    
    .activity-action {
      color: #94a3b8;
      font-size: 0.85rem;
    }
    
    .activity-time {
      color: #64748b;
      font-size: 0.8rem;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .bb-svc-hero-text h1 {
        font-size: 2.5rem;
      }
      
      .hero-stats-preview {
        flex-direction: column;
        gap: 1rem;
      }
      
      .metrics-grid {
        grid-template-columns: 1fr;
      }
      
      .bb-svc-hero-buttons {
        flex-direction: column;
      }
      
      .bb-svc-hero-buttons button {
        width: 100%;
      }
    }
    
    @media (max-width: 480px) {
      .chart-bars {
        gap: 4px;
      }
      
      .day-label {
        font-size: 0.7rem;
      }
    }
  `}</style>
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

      {/* WHY WEBSITE ANALYTICS IS IMPORTANT SECTION */}
      <section className="content-section">
        <div style={{ background: 'white', borderRadius: '20px', padding: '3.5rem', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}>
          <h2 className="section-title">
            Why <span className="gradient-text">Website Analytics</span> Is Important
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            A website with no analytics is quite like a business with no reports. Web analytics can help you understand your audience, track performance, and optimize your digital strategy.
          </p>
          
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
            Benefits of Website Analytics:
          </h3>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h4 className="benefit-title">Track Website Traffic</h4>
              <p className="benefit-description">Monitor visitor numbers, sources, and behavior patterns</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h4 className="benefit-title">Identify High-Performing Pages</h4>
              <p className="benefit-description">Discover which content drives the most engagement and conversions</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h4 className="benefit-title">Track Conversions & Goals</h4>
              <p className="benefit-description">Measure success metrics and ROI from your marketing efforts</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">✨</div>
              <h4 className="benefit-title">Enhance User Experience</h4>
              <p className="benefit-description">Identify and fix usability issues for better engagement</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h4 className="benefit-title">Increase ROI</h4>
              <p className="benefit-description">Optimize marketing campaigns based on data-driven insights</p>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', borderRadius: '16px', borderLeft: '6px solid #8B5CF6' }}>
            <p style={{ color: '#5b21b6', fontSize: '1.25rem', fontWeight: '600', margin: 0, lineHeight: '1.7' }}>
              Our website analytics services in Noida ensure that every marketing and design decision is backed up by real data.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS TICKER */}
      <div className="bb-svc-tech-ticker">
        <div style={{textAlign:'center', marginBottom:'2rem', textTransform:'uppercase', fontSize:'0.9rem', letterSpacing:'3px', fontWeight:'bold', color: dataColor}}>
          INTEGRATED DATA SOURCES & TOOLS
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

      {/* SERVICE SECTIONS */}
     <section className="service-content-section">
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
      Our Comprehensive <span className="gradient-text">Analytics Services</span>
    </h2>
    
    {services.map((service, index) => (
      <div key={index} className="analytics-service-card">
        {/* Left Side - Content */}
        <div className="service-content-left">
          <div className="service-header">
            <div className="service-icon">
              {index === 0 && '⚙️'}
              {index === 1 && '📈'}
              {index === 2 && '🎯'}
              {index === 3 && '📊'}
              {index === 4 && '✨'}
              {index === 5 && '📋'}
            </div>
            <h3 className="service-title">{service.title}</h3>
          </div>
          
          <p className="service-description">{service.description}</p>
          
          <div className="service-details">
            {service.features && (
              <div className="detail-section">
                <h4 className="detail-title">Key Features:</h4>
                <div className="detail-list">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="detail-item">
                      <span className="detail-bullet">●</span>
                      <span className="detail-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {service.metrics && (
              <div className="detail-section">
                <h4 className="detail-title">Metrics Tracked:</h4>
                <div className="detail-list">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="detail-item">
                      <span className="detail-bullet">📊</span>
                      <span className="detail-text">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {service.insights && (
              <div className="detail-section">
                <h4 className="detail-title">Insights Provided:</h4>
                <div className="detail-list">
                  {service.insights.map((insight, idx) => (
                    <div key={idx} className="detail-item">
                      <span className="detail-bullet">💡</span>
                      <span className="detail-text">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {service.note && (
            <div className="service-note">
              <div className="note-icon">📝</div>
              <div className="note-content">{service.note}</div>
            </div>
          )}
        </div>

        {/* Right Side - Image/Visual */}
        <div className="service-visual-right">
          {index === 0 && (
            <div className="visual-container">
              <div className="visual-header">
                <span className="visual-badge">Setup Progress</span>
                <div className="visual-progress">
                  <div className="progress-circle">
                    <span className="progress-value">100%</span>
                  </div>
                </div>
              </div>
              <div className="setup-items">
                <div className="setup-item">
                  <span className="setup-icon">✅</span>
                  <span className="setup-text">Google Analytics 4</span>
                </div>
                <div className="setup-item">
                  <span className="setup-icon">✅</span>
                  <span className="setup-text">Conversion Tracking</span>
                </div>
                <div className="setup-item">
                  <span className="setup-icon">✅</span>
                  <span className="setup-text">Event Tracking</span>
                </div>
                <div className="setup-item">
                  <span className="setup-icon">✅</span>
                  <span className="setup-text">E-commerce Setup</span>
                </div>
              </div>
            </div>
          )}

          {index === 1 && (
            <div className="visual-container">
              <div className="visual-header">
                <span className="visual-badge">Traffic Analysis</span>
                <div className="visual-stats">
                  <div className="mini-stat">
                    <div className="mini-value">8,426</div>
                    <div className="mini-label">Visitors</div>
                  </div>
                  <div className="mini-stat">
                    <div className="mini-value">2m 45s</div>
                    <div className="mini-label">Avg. Session</div>
                  </div>
                </div>
              </div>
              <div className="traffic-chart">
                <div className="chart-bar" style={{ height: '80%' }}>
                  <span className="bar-label">Organic</span>
                </div>
                <div className="chart-bar" style={{ height: '60%' }}>
                  <span className="bar-label">Direct</span>
                </div>
                <div className="chart-bar" style={{ height: '45%' }}>
                  <span className="bar-label">Social</span>
                </div>
                <div className="chart-bar" style={{ height: '30%' }}>
                  <span className="bar-label">Paid</span>
                </div>
              </div>
            </div>
          )}

          {index === 2 && (
            <div className="visual-container">
              <div className="visual-header">
                <span className="visual-badge">Conversion Tracking</span>
                <div className="visual-stats">
                  <div className="mini-stat">
                    <div className="mini-value">3.8%</div>
                    <div className="mini-label">Rate</div>
                  </div>
                  <div className="mini-stat">
                    <div className="mini-value">₹85</div>
                    <div className="mini-label">Cost/Lead</div>
                  </div>
                </div>
              </div>
              <div className="conversion-funnel">
                <div className="funnel-step">
                  <span className="step-name">Visitors</span>
                  <span className="step-value">8,426</span>
                </div>
                <div className="funnel-step">
                  <span className="step-name">Engaged</span>
                  <span className="step-value">2,531</span>
                </div>
                <div className="funnel-step">
                  <span className="step-name">Leads</span>
                  <span className="step-value">320</span>
                </div>
                <div className="funnel-step">
                  <span className="step-name">Customers</span>
                  <span className="step-value">85</span>
                </div>
              </div>
            </div>
          )}

          {index === 3 && (
            <div className="visual-container">
              <div className="visual-header">
                <span className="visual-badge">Marketing ROI</span>
                <div className="visual-stats">
                  <div className="mini-stat">
                    <div className="mini-value">4.2x</div>
                    <div className="mini-label">ROAS</div>
                  </div>
                </div>
              </div>
              <div className="roi-channels">
                <div className="channel-row">
                  <span className="channel-name">Google Ads</span>
                  <div className="channel-bar">
                    <div className="channel-fill" style={{ width: '75%' }}></div>
                  </div>
                  <span className="channel-roi">5.1x</span>
                </div>
                <div className="channel-row">
                  <span className="channel-name">Facebook Ads</span>
                  <div className="channel-bar">
                    <div className="channel-fill" style={{ width: '65%' }}></div>
                  </div>
                  <span className="channel-roi">4.2x</span>
                </div>
                <div className="channel-row">
                  <span className="channel-name">SEO</span>
                  <div className="channel-bar">
                    <div className="channel-fill" style={{ width: '90%' }}></div>
                  </div>
                  <span className="channel-roi">8.5x</span>
                </div>
              </div>
            </div>
          )}

          {index === 4 && (
            <div className="visual-container">
              <div className="visual-header">
                <span className="visual-badge">UX Performance</span>
                <div className="visual-stats">
                  <div className="mini-stat">
                    <div className="mini-value">3.2s</div>
                    <div className="mini-label">Load Time</div>
                  </div>
                  <div className="mini-stat">
                    <div className="mini-value">92%</div>
                    <div className="mini-label">Mobile Score</div>
                  </div>
                </div>
              </div>
              <div className="ux-metrics">
                <div className="ux-metric">
                  <span className="metric-name">LCP</span>
                  <div className="metric-score warning">3.2s</div>
                </div>
                <div className="ux-metric">
                  <span className="metric-name">FID</span>
                  <div className="metric-score good">85ms</div>
                </div>
                <div className="ux-metric">
                  <span className="metric-name">CLS</span>
                  <div className="metric-score good">0.08</div>
                </div>
              </div>
            </div>
          )}

          {index === 5 && (
            <div className="visual-container">
              <div className="visual-header">
                <span className="visual-badge">Dashboard Preview</span>
                <div className="visual-stats">
                  <div className="mini-stat">
                    <div className="mini-value">Real-time</div>
                    <div className="mini-label">Updates</div>
                  </div>
                </div>
              </div>
              <div className="dashboard-preview">
                <div className="preview-row">
                  <div className="preview-item">Daily Reports</div>
                  <div className="preview-status active">Active</div>
                </div>
                <div className="preview-row">
                  <div className="preview-item">Custom Dashboards</div>
                  <div className="preview-status active">Active</div>
                </div>
                <div className="preview-row">
                  <div className="preview-item">Visual Charts</div>
                  <div className="preview-status active">Active</div>
                </div>
                <div className="preview-row">
                  <div className="preview-item">Export Options</div>
                  <div className="preview-status active">Active</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>

  <style>{`
    /* Analytics Service Card */
    .analytics-service-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      background: white;
      border-radius: 24px;
      padding: 3rem;
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
      margin-bottom: 3rem;
      transition: all 0.3s ease;
    }

    .analytics-service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 60px rgba(139, 92, 246, 0.1);
      border-color: ${dataColor};
    }

    /* Left Side Styling */
    .service-content-left {
      padding-right: 2rem;
      border-right: 2px solid #f1f5f9;
    }

    .service-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .service-icon {
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, ${dataColor}, #7c3aed);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      box-shadow: 0 10px 25px rgba(139, 92, 246, 0.2);
      flex-shrink: 0;
    }

    .service-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
      line-height: 1.3;
    }

    .service-description {
      font-size: 1.15rem;
      color: #475569;
      line-height: 1.7;
      margin-bottom: 2.5rem;
    }

    .service-details {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 2.5rem;
    }

    .detail-section {
      background: #f8fafc;
      border-radius: 16px;
      padding: 1.5rem;
      border: 1px solid #e2e8f0;
    }

    .detail-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${dataColor};
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .detail-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .detail-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .detail-bullet {
      color: ${dataColor};
      font-weight: bold;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .detail-text {
      color: #334155;
      line-height: 1.6;
      font-size: 1.05rem;
    }

    .service-note {
      background: linear-gradient(135deg, #f5f3ff, #ede9fe);
      border-radius: 16px;
      padding: 1.75rem;
      border-left: 4px solid ${dataColor};
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .note-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 4px;
    }

    .note-content {
      margin: 0;
      color: #5b21b6;
      font-weight: 600;
      line-height: 1.6;
      font-size: 1.1rem;
    }

    /* Right Side Styling */
    .service-visual-right {
      padding-left: 2rem;
      display: flex;
      align-items: center;
    }

    .visual-container {
      background: linear-gradient(135deg, #f8fafc, #ffffff);
      border-radius: 20px;
      padding: 2.5rem;
      border: 1px solid #e2e8f0;
      width: 100%;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    }

    .visual-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 2px solid #f1f5f9;
    }

    .visual-badge {
      background: linear-gradient(135deg, ${dataColor}, #7c3aed);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    /* Setup Progress */
    .visual-progress {
      display: flex;
      align-items: center;
    }

    .progress-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: conic-gradient(${dataColor} 100%, #e2e8f0 0%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .progress-circle::before {
      content: '';
      position: absolute;
      width: 70px;
      height: 70px;
      background: white;
      border-radius: 50%;
    }

    .progress-value {
      font-size: 1.5rem;
      font-weight: 800;
      color: #0f172a;
      position: relative;
      z-index: 1;
    }

    .setup-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .setup-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }

    .setup-item:hover {
      border-color: ${dataColor};
      transform: translateX(5px);
    }

    .setup-icon {
      font-size: 1.2rem;
    }

    .setup-text {
      font-weight: 500;
      color: #334155;
    }

    /* Traffic Analysis */
    .visual-stats {
      display: flex;
      gap: 1.5rem;
    }

    .mini-stat {
      text-align: center;
    }

    .mini-value {
      font-size: 1.8rem;
      font-weight: 800;
      color: ${dataColor};
      margin-bottom: 0.25rem;
    }

    .mini-label {
      font-size: 0.85rem;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .traffic-chart {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 180px;
      gap: 1rem;
    }

    .chart-bar {
      flex: 1;
      background: linear-gradient(to top, ${dataColor}, ${accentColor});
      border-radius: 8px 8px 0 0;
      min-height: 20px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 0.5rem;
      position: relative;
    }

    .bar-label {
      color: white;
      font-size: 0.85rem;
      font-weight: 600;
      transform: rotate(-90deg);
      position: absolute;
      bottom: 1rem;
      white-space: nowrap;
    }

    /* Conversion Funnel */
    .conversion-funnel {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .funnel-step {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      background: white;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }

    .funnel-step:hover {
      border-color: ${dataColor};
      transform: translateX(5px);
    }

    .step-name {
      font-weight: 500;
      color: #334155;
    }

    .step-value {
      font-weight: 700;
      color: ${dataColor};
      font-size: 1.2rem;
    }

    /* ROI Channels */
    .roi-channels {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .channel-row {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .channel-name {
      width: 100px;
      font-weight: 500;
      color: #334155;
    }

    .channel-bar {
      flex: 1;
      height: 10px;
      background: #e2e8f0;
      border-radius: 5px;
      overflow: hidden;
    }

    .channel-fill {
      height: 100%;
      background: linear-gradient(90deg, ${dataColor}, ${accentColor});
      border-radius: 5px;
    }

    .channel-roi {
      width: 60px;
      text-align: right;
      font-weight: 700;
      color: ${dataColor};
    }

    /* UX Metrics */
    .ux-metrics {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .ux-metric {
      background: white;
      padding: 1.25rem;
      border-radius: 12px;
      text-align: center;
      border: 1px solid #e2e8f0;
    }

    .metric-name {
      font-size: 0.9rem;
      color: #64748b;
      font-weight: 600;
      margin-bottom: 0.5rem;
      display: block;
    }

    .metric-score {
      font-size: 1.2rem;
      font-weight: 800;
    }

    .metric-score.good {
      color: #10b981;
    }

    .metric-score.warning {
      color: ${dataColor};
    }

    /* Dashboard Preview */
    .dashboard-preview {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .preview-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: white;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }

    .preview-item {
      font-weight: 500;
      color: #334155;
    }

    .preview-status {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }

    .preview-status.active {
      background: rgba(16, 185, 129, 0.1);
      color: #10b981;
    }

    /* Responsive Design */
    @media (max-width: 992px) {
      .analytics-service-card {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .service-content-left {
        padding-right: 0;
        border-right: none;
        border-bottom: 2px solid #f1f5f9;
        padding-bottom: 2rem;
      }

      .service-visual-right {
        padding-left: 0;
      }
    }

    @media (max-width: 768px) {
      .analytics-service-card {
        padding: 2rem;
      }

      .visual-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }

      .visual-stats {
        width: 100%;
        justify-content: space-between;
      }

      .traffic-chart {
        height: 150px;
      }
    }

    @media (max-width: 480px) {
      .analytics-service-card {
        padding: 1.5rem;
      }

      .service-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .service-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }

      .ux-metrics {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `}</style>
</section>
      {/* FEATURES SECTION */}
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

      {/* PROCESS SECTION */}
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
                <h2>Our Analytics Implementation Process</h2>
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
          <p>See how our analytics services helped businesses make data-driven decisions</p>
        </div>
        <div className="bb-svc-testimonials-grid">
          <TestimonialCard 
            quote="We thought our blog was useless. Their audit showed it drove 40% of our enterprise leads. Huge eye-opener." 
            author="Amit Patel" 
            role="CMO" 
            company="SaaS Flow" 
            avatar="AP" 
          />
          <TestimonialCard 
            quote="The Looker Studio dashboard they built saves me 5 hours of reporting work every week." 
            author="Sarah Kline" 
            role="Marketing Director" 
            company="Retail Co" 
            avatar="SK" 
          />
          <TestimonialCard 
            quote="We fixed a checkout bug they found via Heatmaps that was costing us $2k/month. Best investment ever." 
            author="Mike Ross" 
            role="Founder" 
            company="Ecom Store" 
            avatar="MR" 
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Get Started with Website Analytics in Noida</h2>
          <p className="cta-description">
            In order to know about your website visitors, perform better, and get conversions, 
            our Website Analytics Solutions in Noida are the best suited for you. Right from 
            analyzing your website traffic to tracking conversions and beyond, we offer you all.
          </p>
          <button className="cta-button">
            Get Your Custom Analytics Strategy
          </button>
          <p style={{ marginTop: '2rem', color: '#94a3b8', fontSize: '0.95rem' }}>
            Schedule a free 30-minute consultation and analytics audit
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bb-svc-faq-section">
        <div className="bb-svc-section-header">
          <h2>Analytics FAQ</h2>
          <p>Everything you need to know about our Website Analytics Services</p>
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