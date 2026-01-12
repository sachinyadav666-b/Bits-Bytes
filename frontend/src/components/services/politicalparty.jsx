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
  Vote
} from "lucide-react";

const PoliticalMarketing = () => {
  const strategies = [
    {
      icon: <Megaphone size={32} />,
      title: "Social Media War Room",
      desc: "We set up a 24/7 digital war room to control the narrative, counter opposition propaganda, and trend your hashtags instantly.",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100",
    },
    {
      icon: <Target size={32} />,
      title: "Booth-Level Targeting",
      desc: "Micro-target voters based on demographics and location. We deliver different messages to different age groups and areas.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "WhatsApp & SMS Blast",
      desc: "Direct-to-voter connection. Automated broadcast lists, chatbots for voter queries, and bulk SMS campaigns for rally updates.",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-100",
    },
    {
      icon: <ShieldAlert size={32} />,
      title: "Reputation Management (ORM)",
      desc: "Cleaning negative search results, handling crisis situations, and promoting positive news to build a clean leader image.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
    },
    {
      icon: <Video size={32} />,
      title: "Viral Reels & Video PR",
      desc: "High-quality video production, emotional storytelling, and meme marketing to engage the youth and go viral.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Voter Sentiment Analytics",
      desc: "Data-driven insights. We analyze what the public is thinking before you speak, helping you draft the perfect manifesto.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-100",
    },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background for "Crowd" feel */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-400 text-xs font-bold tracking-widest uppercase animate-pulse">
            <Radio size={14} /> Election Campaign Specialist
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Win The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-400">Digital Mandate</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Politics has changed. Rallies draw crowds, but <strong>Digital wins votes.</strong> We build the narrative that turns followers into voters and candidates into leaders.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-900/50 transition-all hover:-translate-y-1 flex items-center gap-2">
              Start Your Campaign <Vote size={18} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
              View Case Studies
            </button>
          </div>

        </div>
      </section>

      {/* ---------------- STATS STRIP ---------------- */}
      <div className="bg-slate-50 border-b border-gray-200 py-8">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Voters Reached", val: "10M+" },
            { label: "Campaigns Won", val: "25+" },
            { label: "Constituencies", val: "50+" },
            { label: "Social Reach", val: "500%" },
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
             Political <span className="text-orange-600">Dominance</span> Suite
           </h2>
           <p className="text-slate-600 max-w-2xl mx-auto">
             A 360-degree digital strategy designed to penetrate every smartphone in your constituency.
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

      {/* ---------------- THE WAR ROOM CONCEPT ---------------- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-900/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
           
           <div className="space-y-8">
              <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded">
                 High Alert
              </div>
              <h2 className="text-4xl font-black leading-tight">
                 We Build Your Digital <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Defense & Offense</span>
              </h2>
              <p className="text-slate-400 text-lg">
                 Elections aren't just won on the ground anymore; they are won on WhatsApp groups, Twitter threads, and YouTube comments. We monitor every mention of your name.
              </p>

              <div className="space-y-4">
                 {[
                    "Real-time Sentiment Tracking",
                    "Competitor Analysis & Counter-Strategy",
                    "Fake News Detection & Removal",
                    "Influencer Mobilization"
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="text-green-500" size={20} />
                       <span className="font-semibold text-slate-200">{item}</span>
                    </div>
                 ))}
              </div>
           </div>

           <div className="relative">
              {/* Visual Representation of a Dashboard */}
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                 <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-2">
                       <Globe size={18} className="text-blue-400" />
                       <span className="font-mono text-sm font-bold">LIVE CONSTITUENCY DATA</span>
                    </div>
                    <div className="flex gap-1">
                       <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                       <span className="text-xs font-bold text-red-500">LIVE</span>
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    {/* Dummy Charts */}
                    <div className="flex items-center gap-4">
                       <div className="w-24 text-xs text-slate-400 font-bold">Positive Sentiment</div>
                       <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full w-[75%] bg-green-500"></div>
                       </div>
                       <div className="text-xs font-bold text-green-400">75%</div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-24 text-xs text-slate-400 font-bold">Engagement</div>
                       <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full w-[90%] bg-blue-500"></div>
                       </div>
                       <div className="text-xs font-bold text-blue-400">High</div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-24 text-xs text-slate-400 font-bold">Reach</div>
                       <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full w-[60%] bg-orange-500"></div>
                       </div>
                       <div className="text-xs font-bold text-orange-400">1.2M</div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </section>

      {/* ---------------- COMPREHENSIVE SERVICES ---------------- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Complete Political <span className="text-orange-600">Digital Ecosystem</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From voter outreach to reputation management, we provide end-to-end digital campaign services for political parties and candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Facebook & Instagram Ads", desc: "Geo-targeted political advertising to reach specific constituencies with customized messaging in regional languages.", icon: "📱" },
              { title: "YouTube Campaign Videos", desc: "Professional video production for campaign ads, rally recordings, and issue-based content in Hindi and regional languages.", icon: "🎬" },
              { title: "Google Ads Campaigns", desc: "Search and display advertising targeting voters searching for political information and election updates.", icon: "🔍" },
              { title: "Influencer Partnerships", desc: "Collaborate with local influencers, community leaders, and celebrities to amplify your message.", icon: "⭐" },
              { title: "Ground-Digital Integration", desc: "Connect online campaigns with ground activities - rally promotions, booth apps, and volunteer coordination.", icon: "🤝" },
              { title: "EC Compliance", desc: "All campaigns fully compliant with Election Commission guidelines including disclaimers and spending reports.", icon: "✅" },
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

      {/* ---------------- ELECTION TYPES ---------------- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Elections We <span className="text-orange-500">Support</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Lok Sabha Elections", desc: "National-level campaigns reaching millions of voters across parliamentary constituencies" },
              { title: "Vidhan Sabha Elections", desc: "State assembly election campaigns with constituency-specific targeting and messaging" },
              { title: "Municipal Corporation", desc: "City-level election campaigns for mayor, councillor, and corporation positions" },
              { title: "Panchayat Elections", desc: "Rural grassroots campaigns for gram panchayat, block, and district level elections" },
              { title: "Student Union Elections", desc: "University and college election campaigns targeting young voters" },
              { title: "Party Building (Year-Round)", desc: "Continuous digital presence and engagement between elections" },
            ].map((type, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors">
                <h3 className="font-bold text-lg text-white mb-2">{type.title}</h3>
                <p className="text-slate-400 text-sm">{type.desc}</p>
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
              Frequently Asked <span className="text-orange-600">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What types of political campaigns do you handle?", a: "We work with national parties, regional parties, individual candidates, municipal elections, panchayat elections, student union elections, and year-round party building activities." },
              { q: "How do you maintain confidentiality?", a: "Strict NDAs with all team members, separate teams for competing clients, secure communication channels, and encrypted data storage." },
              { q: "What languages do you support?", a: "We create content in Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and other regional languages." },
              { q: "How quickly can you set up a campaign?", a: "Basic digital presence within 48-72 hours. Full campaign infrastructure typically takes 1-2 weeks." },
              { q: "Do you handle crisis management?", a: "Yes, we have dedicated ORM specialists who monitor mentions 24/7 and can respond to crises within minutes." },
              { q: "What is the cost?", a: "Packages start from ₹2-5 lakhs for local elections to ₹50 lakhs+ for state-level campaigns." },
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
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto">
           <h2 className="text-4xl font-black text-slate-900 mb-6">Ready to Lead?</h2>
           <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Don't let the opposition control the narrative. Take charge of your digital presence today.
           </p>
           <Link to="/contact">
             <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all flex items-center gap-3 mx-auto">
                Schedule a Private Consultation <ArrowRight />
             </button>
           </Link>
        </div>
      </section>

    </div>
  );
};

export default PoliticalMarketing;