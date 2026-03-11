import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FeatureCard,
  ProcessStep,
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
    { 
      title: "On-Page SEO", 
      items: ["Title tags & meta descriptions", "Header hierarchy (H1-H6)", "Keyword optimization", "Internal linking structure", "Image optimization (alt tags, compression)", "URL structure"] 
    },
    { 
      title: "Technical SEO", 
      items: ["Site speed & Core Web Vitals", "Mobile-friendliness", "XML sitemap & robots.txt", "Canonical tags", "Hreflang (for multilingual)", "SSL/HTTPS security"] 
    },
    { 
      title: "Off-Page SEO", 
      items: ["Backlink profile analysis", "Toxic link identification", "Competitor backlink comparison", "Domain authority trends", "Social signals", "Brand mentions"] 
    },
    { 
      title: "Content Audit", 
      items: ["Thin content identification", "Duplicate content issues", "Keyword cannibalization", "Content freshness", "E-E-A-T signals", "User engagement metrics"] 
    }
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

  // --- 3. AUDIT SERVICES CONTENT ---
  const auditServices = [
    {
      title: "Technical SEO Audit",
      description: "We analyze the technical foundation of your website, including:",
      items: [
        "Website speed & performance",
        "Mobile-friendliness",
        "Crawlability & indexability",
        "HTTPS & security issues",
        "XML sitemap & robots.txt"
      ],
      icon: "⚙️"
    },
    {
      title: "On-Page SEO Audit",
      description: "We review all on-page SEO elements such as:",
      items: [
        "Title tags & meta descriptions",
        "Headings (H1–H6) structure",
        "Content quality & keyword usage",
        "Internal linking",
        "Image optimization"
      ],
      icon: "📄"
    },
    {
      title: "Content SEO Audit",
      description: "Content plays a key role in rankings. We evaluate:",
      items: [
        "Duplicate & thin content",
        "Keyword relevance",
        "Content gaps & opportunities",
        "Blog & landing page performance"
      ],
      icon: "📝"
    },
    {
      title: "Off-Page SEO Audit",
      description: "We examine your website's authority and backlink profile:",
      items: [
        "Backlink quality & toxicity",
        "Anchor text analysis",
        "Competitor backlink comparison"
      ],
      icon: "🔗"
    },
    {
      title: "Keyword & Ranking Analysis",
      description: "Our SEO audit services include keyword performance and ranking evaluation. Keyword Audit Insights:",
      items: [
        "Current keyword rankings",
        "High-potential keyword opportunities",
        "Keyword cannibalization issues",
        "Competitor keyword analysis"
      ],
      note: "This helps refine your SEO strategy for better results.",
      icon: "🎯"
    },
    {
      title: "Website UX & Performance Audit",
      description: "User experience directly affects SEO. Our SEO audit in Noida also focuses on UX and performance. UX & Performance Checks:",
      items: [
        "Page load time analysis",
        "Core Web Vitals review",
        "Mobile usability issues",
        "Navigation & site structure"
      ],
      note: "Improving UX leads to better engagement and higher rankings.",
      icon: "✨"
    },
    {
      title: "Local SEO Audit for Business Growth",
      description: "If you target local customers, we provide a Local SEO Audit. Local SEO Audit Includes:",
      items: [
        "Google Business Profile optimization",
        "NAP consistency (Name, Address, Phone)",
        "Local keyword performance",
        "Local citations review"
      ],
      note: "This helps your business rank higher in local search results.",
      icon: "📍"
    }
  ];

  const faqs = [
    { 
      question: "Why do I need an SEO Audit?", 
      answer: "SEO algorithms change constantly. An audit reveals hidden technical issues, content gaps, and backlink problems that are silently killing your rankings and organic traffic." 
    },
    { 
      question: "How long does an SEO audit take?", 
      answer: "A basic audit takes 3-5 business days. A comprehensive deep dive for large e-commerce or enterprise sites can take 7-10 days for thorough analysis." 
    },
    { 
      question: "Do you fix the errors you find?", 
      answer: "We provide a detailed implementation guide for your team. If you don't have developers, we offer implementation services for an additional fee to fix all identified issues." 
    },
    { 
      question: "What tools do you use for the audit?", 
      answer: "We use enterprise-grade tools: Screaming Frog, Ahrefs, SEMrush, Google Search Console, PageSpeed Insights, GTmetrix, Lighthouse, and custom Python scripts." 
    },
    
  ];

  // --- 4. MOVING TOOLS TICKER ---
  const auditTools = [
    'Screaming Frog', 'Google Search Console', 'Ahrefs', 'SEMrush', 'PageSpeed Insights', 'Lighthouse', 'GTmetrix', 'Moz Pro', 'DeepCrawl', 'Majestic', 'Sitebulb'
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
            radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 55%);
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
          background: linear-gradient(135deg, ${auditColor}, #d97706);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);
        }

        .bb-svc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
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

        /* AUDIT CARD VISUAL */
        .audit-visual-container {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-radius: 24px;
          padding: 2rem;
          border: 2px solid #334155;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
        }

        .audit-score-card {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 2px solid ${auditColor};
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .audit-score-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, ${accentColor}, ${auditColor});
        }

        .score-value {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, ${accentColor}, ${auditColor});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .score-label {
          font-size: 1.1rem;
          color: #cbd5e1;
          font-weight: 600;
        }

        .audit-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .audit-metric {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid #334155;
          transition: all 0.3s ease;
        }

        .audit-metric:hover {
          border-color: ${auditColor};
          transform: translateY(-3px);
        }

        .metric-label {
          font-size: 0.9rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .audit-issues {
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-top: 1rem;
        }

        .issues-title {
          color: #f87171;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .issues-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .issue-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        .issue-dot {
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
          flex-shrink: 0;
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
          border-color: ${auditColor};
          box-shadow: 0 10px 30px rgba(245, 158, 11, 0.1);
        }

        .bb-svc-stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(to right, ${accentColor}, ${auditColor});
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
          color: ${auditColor};
          border-color: ${auditColor};
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(245, 158, 11, 0.15);
        }

        /* AUDIT AREAS SECTION */
        .audit-areas-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #f8fafc, #ffffff);
        }

        .audit-areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 3rem auto 0;
        }

        .audit-area-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 2px solid #f1f5f9;
          transition: all 0.3s ease;
          border-top: 4px solid ${auditColor};
        }

        .audit-area-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(245, 158, 11, 0.1);
          border-color: ${auditColor};
        }

        .area-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .area-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .area-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #475569;
          line-height: 1.5;
        }

        .area-item::before {
          content: '✓';
          color: ${auditColor};
          font-weight: bold;
          flex-shrink: 0;
        }

        /* FEATURES SECTION */
        .bb-svc-features-section {
          padding: 6rem 2rem;
          background: white;
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
        .service-content-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #ffffff, #f8fafc);
        }

        .service-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 2px solid #f1f5f9;
          transition: all 0.3s ease;
          margin-bottom: 2rem;
          border-left: 4px solid ${auditColor};
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: ${auditColor};
          box-shadow: 0 20px 40px rgba(245, 158, 11, 0.1);
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

        .service-description {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .service-items {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }

        .service-item {
          color: #334155;
          margin-bottom: 0.75rem;
          padding-left: 1rem;
          position: relative;
          line-height: 1.6;
        }

        .service-item::before {
          content: '✓';
          position: absolute;
          left: -1.5rem;
          color: ${auditColor};
          font-weight: bold;
        }

        .service-note {
          margin-top: 1.5rem;
          padding: 1.25rem;
          background: linear-gradient(135deg, #fffbeb, #fef3c7);
          border-radius: 12px;
          border-left: 4px solid ${auditColor};
          font-size: 1.05rem;
          color: #92400e;
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
          background: linear-gradient(to bottom, ${auditColor}, ${accentColor});
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
          background: linear-gradient(135deg, ${auditColor}, #d97706);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          flex-shrink: 0;
          border: 4px solid #f8fafc;
          box-shadow: 0 8px 16px rgba(245, 158, 11, 0.3);
          transition: all 0.3s ease;
        }
        
        .bb-audit-step:hover .bb-audit-marker {
          transform: scale(1.1);
          box-shadow: 0 12px 24px rgba(245, 158, 11, 0.4);
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
          background: linear-gradient(to right, ${accentColor}, ${auditColor});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .highlight-badge {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(14, 165, 233, 0.15));
          color: ${auditColor};
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 2px solid rgba(245, 158, 11, 0.2);
        }

        /* WHAT IS SEO AUDIT SECTION */
        .what-is-section {
          padding: 5rem 2rem;
          background: white;
        }

        .what-is-content {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          padding: 3.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .benefit-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          border: 2px solid #f1f5f9;
          transition: all 0.3s ease;
          border-top: 4px solid ${auditColor};
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          border-color: ${auditColor};
          box-shadow: 0 15px 35px rgba(245, 158, 11, 0.1);
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
          background: linear-gradient(to right, #ffffff, ${auditColor});
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
          background: linear-gradient(135deg, ${auditColor}, #d97706);
          color: white;
          border: none;
          padding: 1.25rem 3rem;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(245, 158, 11, 0.4);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(245, 158, 11, 0.6);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="bb-svc-hero-section">
        <div className="bb-svc-hero-content">
          
          <div className="bb-svc-hero-text">
            <div className="highlight-badge">
              🔍 SEO AUDIT SERVICES IN NOIDA
            </div>
            <h1>SEO Audit Services in Noida – <span className="gradient-text">Identify Issues, Improve Rankings & Boost Traffic</span></h1>
            <p className="hero-subtitle">
              If your website does not appear on Google or your website is not receiving sufficient traffic, then carrying out an SEO Audit can be the first priority. Our SEO Audit Services in Noida can assist you in recognizing areas in your website that are causing it to rank low in search engines.
            </p>
            <p>
              From Bits and Bytes IT Solution, we conduct detailed, fact-based web analytics SEO audits to provide you with the specific guidance required.
            </p>
            
            <div className="bb-svc-hero-buttons">
              <button className="bb-svc-btn-primary">
                <span className="btn-icon">🔍</span>
                Start Free SEO Audit
              </button>
              <button className="bb-svc-btn-secondary">
                <span className="btn-icon">📋</span>
                View Sample Report
              </button>
            </div>
          </div>

          {/* HERO VISUAL: SEO AUDIT DASHBOARD */}
          <div className="bb-svc-hero-visual">
            <div className="audit-visual-container">
              <div className="audit-score-card">
                <div className="score-value">
                  <AnimatedCounter end={86} suffix="%" />
                </div>
                <div className="score-label">Website Health Score</div>
              </div>

              <div className="audit-metrics">
                <div className="audit-metric">
                  <div className="metric-label">
                    <span>⚡</span> Page Speed
                  </div>
                  <div className="metric-value">3.2s</div>
                </div>
                <div className="audit-metric">
                  <div className="metric-label">
                    <span>📱</span> Mobile Score
                  </div>
                  <div className="metric-value">92/100</div>
                </div>
                <div className="audit-metric">
                  <div className="metric-label">
                    <span>🔗</span> Broken Links
                  </div>
                  <div className="metric-value">12</div>
                </div>
                <div className="audit-metric">
                  <div className="metric-label">
                    <span>📊</span> Core Vitals
                  </div>
                  <div className="metric-value">Good</div>
                </div>
              </div>

              <div className="audit-issues">
                <div className="issues-title">
                  <span>⚠️</span> Critical Issues Found
                </div>
                <div className="issues-list">
                  <div className="issue-item">
                    <div className="issue-dot"></div>
                    <span>Missing meta descriptions on 8 pages</span>
                  </div>
                  <div className="issue-item">
                    <div className="issue-dot"></div>
                    <span>12 broken links affecting user experience</span>
                  </div>
                  <div className="issue-item">
                    <div className="issue-dot"></div>
                    <span>Slow LCP (3.2s) - needs optimization</span>
                  </div>
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

      {/* WHAT IS SEO AUDIT SECTION */}
      <section className="what-is-section">
        <div className="what-is-content">
          <h2 className="section-title">
            What Is <span className="gradient-text">an SEO Audit</span>?
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            An SEO audit is basically a comprehensive health check for your website. It performs an in-depth analysis of how search engines perceive your site, mostly catching problems that affect rankings, traffic, and user experience.
          </p>
          
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
            What an SEO Audit Helps With:
          </h3>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h4 className="benefit-title">Find Technical SEO Errors</h4>
              <p className="benefit-description">Identify and fix technical issues affecting crawlability and indexing</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📄</div>
              <h4 className="benefit-title">Improve On-Page Optimization</h4>
              <p className="benefit-description">Optimize title tags, meta descriptions, and content structure</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🕷️</div>
              <h4 className="benefit-title">Fix Indexing & Crawling Issues</h4>
              <p className="benefit-description">Ensure search engines can properly crawl and index your pages</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🏗️</div>
              <h4 className="benefit-title">Improve Website Structure</h4>
              <p className="benefit-description">Create logical site architecture for better user experience</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h4 className="benefit-title">More Organic Traffic</h4>
              <p className="benefit-description">Increase visibility and drive qualified organic visitors</p>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'linear-gradient(135deg, #fffbeb, #fef3c7)', borderRadius: '16px', borderLeft: '6px solid #F59E0B' }}>
            <p style={{ color: '#92400e', fontSize: '1.25rem', fontWeight: '600', margin: 0, lineHeight: '1.7' }}>
              Our professional SEO audit services in Noida ensure that your website is fully optimized according to the latest guidelines from Google.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS TICKER */}
      <div className="bb-svc-tech-ticker">
        <div style={{textAlign:'center', marginBottom:'2rem', textTransform:'uppercase', fontSize:'0.9rem', letterSpacing:'3px', fontWeight:'bold', color: auditColor}}>
          POWERED BY INDUSTRY STANDARD TOOLS
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

      {/* AUDIT AREAS SECTION */}
      <section className="audit-areas-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Comprehensive <span className="gradient-text">SEO Audit Areas</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#475569', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.7' }}>
            We follow a structured and transparent SEO audit process to ensure no issue is missed.
          </p>
          
          <div className="audit-areas-grid">
            {auditAreas.map((area, index) => (
              <div key={index} className="audit-area-card">
                <h3 className="area-title">
                  {index === 0 && '📄'}
                  {index === 1 && '⚙️'}
                  {index === 2 && '🔗'}
                  {index === 3 && '📝'}
                  {area.title}
                </h3>
                <div className="area-items">
                  {area.items.map((item, idx) => (
                    <div key={idx} className="area-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SEO AUDIT SERVICES */}
    <section className="service-content-section">
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
      Our Comprehensive <span className="gradient-text">SEO Audit Services</span>
    </h2>
    
    {auditServices.map((service, index) => (
      <div key={index} className="service-card-split">
        {/* Left Side - Content */}
        <div className="service-content-left">
          <div className="service-header">
            <div className="service-icon-circle">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
          </div>
          
          <p className="service-description">{service.description}</p>
          
          <div className="service-features">
            {service.items.map((item, idx) => (
              <div key={idx} className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">{item}</span>
              </div>
            ))}
          </div>
          
          {service.note && (
            <div className="service-note">
              <div className="note-icon">💡</div>
              <p>{service.note}</p>
            </div>
          )}
        </div>

        {/* Right Side - Visual/Additional Info */}
        <div className="service-content-right">
          {index === 0 && (
            <div className="service-visual">
              <div className="visual-header">
                <span className="visual-badge">Technical Health Score</span>
                <div className="visual-score">
                  <div className="score-circle">
                    <span className="score-value">92%</span>
                  </div>
                </div>
              </div>
              <div className="visual-metrics">
                <div className="metric">
                  <div className="metric-label">Page Speed</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: '78%' }}></div>
                  </div>
                  <div className="metric-value">3.2s</div>
                </div>
                <div className="metric">
                  <div className="metric-label">Mobile Score</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: '92%' }}></div>
                  </div>
                  <div className="metric-value">92/100</div>
                </div>
                <div className="metric">
                  <div className="metric-label">Crawlability</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: '95%' }}></div>
                  </div>
                  <div className="metric-value">95%</div>
                </div>
              </div>
            </div>
          )}

          {index === 1 && (
            <div className="service-visual">
              <div className="visual-header">
                <span className="visual-badge">On-Page Analysis</span>
                <div className="visual-stats">
                  <div className="stat-item">
                    <div className="stat-value">15+</div>
                    <div className="stat-label">Elements Checked</div>
                  </div>
                </div>
              </div>
              <div className="page-elements">
                <div className="element-row">
                  <span className="element-name">Title Tags</span>
                  <span className="element-status success">Optimized</span>
                </div>
                <div className="element-row">
                  <span className="element-name">Meta Descriptions</span>
                  <span className="element-status warning">Missing (8)</span>
                </div>
                <div className="element-row">
                  <span className="element-name">Header Tags</span>
                  <span className="element-status success">Proper</span>
                </div>
                <div className="element-row">
                  <span className="element-name">Image Alt Text</span>
                  <span className="element-status warning">Partially</span>
                </div>
              </div>
            </div>
          )}

          {index === 2 && (
            <div className="service-visual">
              <div className="visual-header">
                <span className="visual-badge">Content Analysis</span>
                <div className="visual-stats">
                  <div className="stat-item">
                    <div className="stat-value">1.5K</div>
                    <div className="stat-label">Words Avg.</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">4.2</div>
                    <div className="stat-label">Readability</div>
                  </div>
                </div>
              </div>
              <div className="content-metrics">
                <div className="content-metric">
                  <div className="metric-label">Duplicate Content</div>
                  <div className="metric-value-badge low">Low Risk</div>
                </div>
                <div className="content-metric">
                  <div className="metric-label">Keyword Density</div>
                  <div className="metric-value-badge optimal">Optimal</div>
                </div>
                <div className="content-metric">
                  <div className="metric-label">Content Freshness</div>
                  <div className="metric-value-badge moderate">30 days</div>
                </div>
              </div>
            </div>
          )}

          {index === 3 && (
            <div className="service-visual">
              <div className="visual-header">
                <span className="visual-badge">Backlink Profile</span>
                <div className="visual-stats">
                  <div className="stat-item">
                    <div className="stat-value">85%</div>
                    <div className="stat-label">Healthy</div>
                  </div>
                </div>
              </div>
              <div className="backlink-analysis">
                <div className="backlink-metric">
                  <div className="metric-label">Total Backlinks</div>
                  <div className="metric-value">1,248</div>
                </div>
                <div className="backlink-metric">
                  <div className="metric-label">Toxic Links</div>
                  <div className="metric-value bad">12 (1%)</div>
                </div>
                <div className="backlink-metric">
                  <div className="metric-label">Domain Rating</div>
                  <div className="metric-value good">42</div>
                </div>
              </div>
            </div>
          )}

          {index === 4 && (
            <div className="service-visual">
              <div className="visual-header">
                <span className="visual-badge">Keyword Performance</span>
                <div className="visual-stats">
                  <div className="stat-item">
                    <div className="stat-value">250+</div>
                    <div className="stat-label">Keywords</div>
                  </div>
                </div>
              </div>
              <div className="keyword-performance">
                <div className="keyword-metric">
                  <div className="metric-label">Top 3 Positions</div>
                  <div className="metric-value good">38</div>
                </div>
                <div className="keyword-metric">
                  <div className="metric-label">Page 1 Rankings</div>
                  <div className="metric-value moderate">142</div>
                </div>
                <div className="keyword-metric">
                  <div className="metric-label">Opportunities</div>
                  <div className="metric-value high">45</div>
                </div>
              </div>
            </div>
          )}

          {index === 5 && (
            <div className="service-visual">
              <div className="visual-header">
                <span className="visual-badge">UX Performance</span>
                <div className="visual-stats">
                  <div className="stat-item">
                    <div className="stat-value">Core Vitals</div>
                    <div className="stat-label">Status</div>
                  </div>
                </div>
              </div>
              <div className="ux-metrics">
                <div className="ux-metric">
                  <div className="metric-label">LCP (Load Time)</div>
                  <div className="metric-score warning">3.2s</div>
                </div>
                <div className="ux-metric">
                  <div className="metric-label">FID (Interactivity)</div>
                  <div className="metric-score good">85ms</div>
                </div>
                <div className="ux-metric">
                  <div className="metric-label">CLS (Stability)</div>
                  <div className="metric-score good">0.08</div>
                </div>
              </div>
            </div>
          )}

          {index === 6 && (
            <div className="service-visual">
              <div className="visual-header">
                <span className="visual-badge">Local SEO Score</span>
                <div className="visual-stats">
                  <div className="stat-item">
                    <div className="stat-value">Noida</div>
                    <div className="stat-label">Local Rank</div>
                  </div>
                </div>
              </div>
              <div className="local-metrics">
                <div className="local-metric">
                  <div className="metric-label">GBP Optimization</div>
                  <div className="metric-status complete">Complete</div>
                </div>
                <div className="local-metric">
                  <div className="metric-label">NAP Consistency</div>
                  <div className="metric-status complete">Complete</div>
                </div>
                <div className="local-metric">
                  <div className="metric-label">Local Citations</div>
                  <div className="metric-status partial">25/30</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>

  <style>{`
    /* Service Card Split Layout */
    .service-card-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      background: white;
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
      margin-bottom: 2.5rem;
      transition: all 0.3s ease;
    }

    .service-card-split:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 60px rgba(245, 158, 11, 0.1);
      border-color: ${auditColor};
    }

    /* Left Side Styling */
    .service-content-left {
      padding-right: 1.5rem;
      border-right: 2px solid #f1f5f9;
    }

    .service-header {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-bottom: 1.5rem;
    }

    .service-icon-circle {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, ${auditColor}, #d97706);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      box-shadow: 0 8px 20px rgba(245, 158, 11, 0.2);
      flex-shrink: 0;
    }

    .service-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }

    .service-description {
      font-size: 1.1rem;
      color: #475569;
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .service-features {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      margin-bottom: 2rem;
    }

    .feature-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .feature-check {
      color: ${auditColor};
      font-weight: bold;
      font-size: 1.1rem;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .feature-text {
      color: #334155;
      line-height: 1.6;
    }

    .service-note {
      background: linear-gradient(135deg, #fffbeb, #fef3c7);
      border-radius: 12px;
      padding: 1.5rem;
      border-left: 4px solid ${auditColor};
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .note-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .service-note p {
      margin: 0;
      color: #92400e;
      font-weight: 600;
      line-height: 1.6;
    }

    /* Right Side Styling */
    .service-content-right {
      padding-left: 1.5rem;
    }

    .service-visual {
      background: linear-gradient(135deg, #f8fafc, #ffffff);
      border-radius: 16px;
      padding: 2rem;
      border: 1px solid #e2e8f0;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .visual-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #f1f5f9;
    }

    .visual-badge {
      background: linear-gradient(135deg, ${auditColor}, #d97706);
      color: white;
      padding: 0.5rem 1.25rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    /* Score Circle */
    .visual-score {
      display: flex;
      align-items: center;
    }

    .score-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: conic-gradient(${auditColor} 92%, #e2e8f0 0%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .score-circle::before {
      content: '';
      position: absolute;
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 50%;
    }

    .score-value {
      font-size: 1.5rem;
      font-weight: 800;
      color: #0f172a;
      position: relative;
      z-index: 1;
    }

    /* Visual Stats */
    .visual-stats {
      display: flex;
      gap: 1rem;
    }

    .stat-item {
      text-align: center;
    }

    .stat-value {
      font-size: 1.8rem;
      font-weight: 800;
      color: ${auditColor};
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.85rem;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Metrics */
    .visual-metrics {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      flex: 1;
    }

    .metric {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .metric-label {
      width: 100px;
      font-size: 0.95rem;
      color: #475569;
      font-weight: 500;
    }

    .metric-bar {
      flex: 1;
      height: 8px;
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
    }

    .metric-fill {
      height: 100%;
      background: linear-gradient(90deg, ${auditColor}, #d97706);
      border-radius: 4px;
    }

    .metric-value {
      width: 50px;
      text-align: right;
      font-weight: 600;
      color: #0f172a;
      font-size: 0.95rem;
    }

    /* Page Elements */
    .page-elements {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      flex: 1;
    }

    .element-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem;
      background: white;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }

    .element-row:hover {
      border-color: ${auditColor};
      transform: translateX(3px);
    }

    .element-name {
      font-size: 0.95rem;
      color: #334155;
      font-weight: 500;
    }

    .element-status {
      font-size: 0.85rem;
      font-weight: 600;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
    }

    .element-status.success {
      background: rgba(16, 185, 129, 0.1);
      color: #10b981;
    }

    .element-status.warning {
      background: rgba(245, 158, 11, 0.1);
      color: ${auditColor};
    }

    /* Content Metrics */
    .content-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      flex: 1;
    }

    .content-metric {
      background: white;
      padding: 1.25rem;
      border-radius: 12px;
      text-align: center;
      border: 1px solid #e2e8f0;
    }

    .metric-value-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-top: 0.5rem;
    }

    .metric-value-badge.low {
      background: rgba(16, 185, 129, 0.1);
      color: #10b981;
    }

    .metric-value-badge.optimal {
      background: rgba(14, 165, 233, 0.1);
      color: ${accentColor};
    }

    .metric-value-badge.moderate {
      background: rgba(245, 158, 11, 0.1);
      color: ${auditColor};
    }

    /* Backlink Analysis */
    .backlink-analysis {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      flex: 1;
    }

    .backlink-metric {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: white;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }

    .metric-value.good {
      color: #10b981;
      font-weight: 700;
    }

    .metric-value.bad {
      color: #ef4444;
      font-weight: 700;
    }

    /* UX Metrics */
    .ux-metrics {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      flex: 1;
    }

    .ux-metric {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: white;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }

    .metric-score {
      font-weight: 700;
      font-size: 1.1rem;
    }

    .metric-score.good {
      color: #10b981;
    }

    .metric-score.warning {
      color: ${auditColor};
    }

    /* Responsive Design */
    @media (max-width: 992px) {
      .service-card-split {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .service-content-left {
        padding-right: 0;
        border-right: none;
        border-bottom: 2px solid #f1f5f9;
        padding-bottom: 2rem;
      }

      .service-content-right {
        padding-left: 0;
        padding-top: 2rem;
      }
    }

    @media (max-width: 768px) {
      .service-card-split {
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
    }

    @media (max-width: 480px) {
      .service-card-split {
        padding: 1.5rem;
      }

      .service-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .visual-metrics,
      .page-elements,
      .content-metrics,
      .backlink-analysis,
      .ux-metrics {
        gap: 1rem;
      }
    }
  `}</style>
</section>

      {/* FEATURES SECTION */}
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

      {/* PROCESS SECTION */}
      <section className="bb-process-unique-section">
        <div className="bb-process-split-container">
            
            {/* LEFT SIDE: UNIQUE IMAGE */}
            <div className="bb-process-left-img">
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop"
                    alt="SEO Audit Process Dashboard"
                    className="bb-unique-audit-img"
                />
            </div>

            {/* RIGHT SIDE: CONTENT & TIMELINE */}
            <div className="bb-process-right-content">
                <h2>Our SEO Audit Methodology</h2>
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
          <p>See how our SEO audits helped businesses recover rankings and boost traffic</p>
        </div>
        <div className="bb-svc-testimonials-grid">
          <TestimonialCard 
            quote="We lost 50% traffic overnight. Their audit found a 'noindex' tag on our homepage. Traffic recovered in 3 days!" 
            author="James Carter" 
            role="CEO" 
            company="TechNews" 
            avatar="JC" 
          />
          <TestimonialCard 
            quote="The technical audit report was so detailed, our developers knew exactly what to fix without asking questions." 
            author="Anita Roy" 
            role="Product Manager" 
            company="E-Shop" 
            avatar="AR" 
          />
          <TestimonialCard 
            quote="They found 500 toxic backlinks attacking our site. The disavow file they created saved our rankings." 
            author="Mike D" 
            role="Founder" 
            company="Law Firm" 
            avatar="MD" 
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Start with a Professional SEO Audit in Noida</h2>
          <p className="cta-description">
            If you want better rankings, improved traffic, and optimized website performance, 
            our Noida SEO Audit Services can be the ideal starting ground, whether you need 
            assistance with technical SEO, on-page, content, or link-related issues.
          </p>
          <button className="cta-button">
            Get Your Comprehensive SEO Audit
          </button>
          <p style={{ marginTop: '2rem', color: '#94a3b8', fontSize: '0.95rem' }}>
            Schedule a free 30-minute consultation and preliminary website scan
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bb-svc-faq-section">
        <div className="bb-svc-section-header">
          <h2>SEO Audit FAQ</h2>
          <p>Everything you need to know about our SEO Audit Services</p>
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