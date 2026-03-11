import React from "react";
import { Link } from "react-router-dom";
import {
  Megaphone,
  Users,
  Target,
  MessageCircle,
  BarChart3,
  ShieldAlert,
  Video,
  Globe,
  CheckCircle2,
  ArrowRight,
  Radio,
  Vote,
  Share2,
  PenTool
} from "lucide-react";

const PoliticalMarketing = () => {
  // --- 1. CORE SERVICES DATA (Mapped from your content) ---
  const strategies = [
    {
      icon: <Share2 size={32} />,
      title: "Political Social Media Marketing",
      desc: "We manage Facebook pages, Instagram reels, YouTube channels, and Twitter/X campaigns to inform, inspire, and influence voters daily.",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100",
    },
    {
      icon: <Target size={32} />,
      title: "Voter Targeting & Audience",
      desc: "Winning campaigns depend on strategy. We segment audiences (Youth, Women, Local Constituency) to ensure your message reaches the right voters.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      icon: <Megaphone size={32} />,
      title: "Election Campaign Advertising",
      desc: " targeted political ad campaigns on Facebook, Instagram & Google. We focus on location-based and issue-based awareness to maximize reach.",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-100",
    },
    {
      icon: <ShieldAlert size={32} />,
      title: "Online Reputation Management",
      desc: "Public image is everything. We monitor online mentions, build a positive image, and handle crisis communication to maintain voter trust.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
    },
    {
      icon: <PenTool size={32} />,
      title: "Content & Messaging Strategy",
      desc: "Content decides perception. We design campaign posters, speech highlights, and creative reels that build an emotional connection with the public.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics & Performance",
      desc: "Data-driven insights. We track reach, video views, audience growth, and engagement to constantly improve campaign effectiveness.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-100",
    },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-400 text-xs font-bold tracking-widest uppercase animate-pulse">
            <Radio size={14} /> Political Marketing in Noida
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Build Influence, Trust & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-400">Voter Connect</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            In today’s digital era, elections are won online. We assist <strong>Political Parties, Leaders, and Aspirants</strong> in Noida to connect with voters, share their vision, and create a strong political identity.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-900/50 transition-all hover:-translate-y-1 flex items-center gap-2">
              Start Your Campaign <Vote size={18} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
              View Strategy
            </button>
          </div>

        </div>
      </section>

      {/* ---------------- STATS STRIP ---------------- */}
      <div className="bg-slate-50 border-b border-gray-200 py-8">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Voters Reached", val: "50 Lakh+" },
            { label: "Parties Managed", val: "10+" },
            { label: "Candidates", val: "25+" },
            { label: "Engagement Rate", val: "High" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-slate-900">{s.val}</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- CAMPAIGN SERVICES GRID ---------------- */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
             Political Party <span className="text-orange-600">Digital Solutions</span>
           </h2>
           <p className="text-slate-600 max-w-2xl mx-auto">
             Strategic, ethical, and result-oriented digital marketing services aimed at boosting voter engagement and public outreach.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((s, i) => (
            <div key={i} className={`group bg-white border ${s.border} rounded-3xl p-8 hover:shadow-xl hover:shadow-gray-200 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full`}>
              
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${s.bg} ${s.color}`}>
                  {s.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="text-gray-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors">
                {s.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                {s.desc}
              </p>

              <div className={`h-1 w-12 rounded-full ${s.bg.replace('bg-', 'bg-')}-500`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- WHO WE HELP (Split Section) ---------------- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-900/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
           
           {/* Left Content: Parties */}
           <div className="space-y-8">
             <div className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold uppercase rounded">
               For Organizations
             </div>
             <h2 className="text-4xl font-black leading-tight">
                For Political <span className="text-orange-500">Parties</span>
             </h2>
             <p className="text-slate-400 text-lg">
                Digital platforms help you communicate your vision, ideology, and achievements directly to the public. We focus on long-term brand building.
             </p>

             <div className="space-y-4">
                {[
                   "Reach lakhs of voters online",
                   "Share party vision & manifesto",
                   "Build trust and credibility",
                   "Control public narrative",
                   "Engage youth and first-time voters"
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span className="font-semibold text-slate-200">{item}</span>
                   </div>
                ))}
             </div>
           </div>

           {/* Right Content: Leaders (Visual Card Style) */}
           <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl relative">
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded mb-6">
                 For Individuals
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                 For Political Leaders & Candidates
              </h3>
              <p className="text-slate-400 mb-6">
                 Your personal brand matters. We help you build a strong, positive, and consistent online image to stay connected with the public 24×7.
              </p>
              
              <ul className="space-y-4">
                 {[
                    "Personal branding on social media",
                    "Profile & Page Optimization",
                    "Content strategy for speeches & rallies",
                    "Direct voter communication campaigns"
                 ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                       <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-blue-400"></div>
                       {item}
                    </li>
                 ))}
              </ul>
           </div>

        </div>
      </section>

      {/* ---------------- COMPREHENSIVE SERVICES (Platforms & Content) ---------------- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Complete <span className="text-orange-600">Digital Ecosystem</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We create content that informs, inspires, and influences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Facebook Political Pages", desc: "Building communities and engaging local voters through dedicated pages.", icon: "📘" },
              { title: "Instagram Reels & Posts", desc: "Connecting with youth voters through short, viral video content.", icon: "📸" },
              { title: "YouTube Channel Management", desc: "Hosting speeches, rallies, and interviews for long-term visibility.", icon: "🎬" },
              { title: "Campaign Posters & Banners", desc: "High-quality visual creatives for festivals and public messages.", icon: "🖼️" },
              { title: "Twitter/X Engagement", desc: "Driving conversations and managing trending topics.", icon: "🐦" },
              { title: "WhatsApp Communication", desc: "Direct outreach to supporters and volunteers.", icon: "💬" },
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ SECTION ---------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-slate-600">Your questions about Political Digital Marketing answered.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Who can use these services?", a: "Our services are ideal for Political Parties, Election Candidates, Aspiring Leaders, Student Unions, and Social Activists." },
              { q: "How do you help with Reputation Management?", a: "We monitor online conversations, suppress negative content with positive storytelling, and manage crisis communications effectively." },
              { q: "Do you provide content in regional languages?", a: "Yes, we create content in Hindi, English, and regional dialects to ensure deep connection with local voters." },
              { q: "Is digital marketing useful for local elections?", a: "Absolutely. With hyper-local targeting, we can reach specific wards and panchayats more effectively than traditional media." },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-24 px-6 text-center bg-orange-50">
        <div className="container mx-auto">
           <h2 className="text-4xl font-black text-slate-900 mb-6">Strengthen Your Campaign with Digital Power</h2>
           <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
             If you are looking to connect with your voter base, create your political image, and increase your popularity on social media, we are here to help.
           </p>
           <Link to="/contact">
             <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all flex items-center gap-3 mx-auto">
               Schedule a Consultation <ArrowRight />
             </button>
           </Link>
        </div>
      </section>

    </div>
  );
};

export default PoliticalMarketing;