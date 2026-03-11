import { useState } from "react";
import { Check, X, Zap, TrendingUp, Award, Building2, ChevronDown, ChevronUp, Search } from "lucide-react";

const plans = [
  {
    id: "basic", name: "Basic", price: "$550", period: "/Month",
    icon: Zap, color: "#06b6d4", bg: "from-cyan-500 to-cyan-600",
    highlight: false, tag: null,
    stats: { keywords: 30, pages: 5, backlinks: 120 },
  },
  {
    id: "standard", name: "Standard", price: "$800", period: "/Month",
    icon: TrendingUp, color: "#8b5cf6", bg: "from-violet-500 to-violet-600",
    highlight: false, tag: "Popular",
    stats: { keywords: 40, pages: 10, backlinks: 210 },
  },
  {
    id: "professional", name: "Professional", price: "$1,100", period: "/Month",
    icon: Award, color: "#f59e0b", bg: "from-amber-500 to-orange-500",
    highlight: true, tag: "Best Value",
    stats: { keywords: 50, pages: 15, backlinks: 300 },
  },
  {
    id: "enterprise", name: "Enterprise", price: "$1,800", period: "/Month",
    icon: Building2, color: "#10b981", bg: "from-emerald-500 to-emerald-600",
    highlight: false, tag: null,
    stats: { keywords: 100, pages: 20, backlinks: 600 },
  },
];

const sections = [
  {
    title: "First Hand SEO Analysis",
    rows: [
      { label: "Pre-Optimization Website Analysis", vals: [true, true, true, true] },
      { label: "Competitor Analysis", vals: [true, true, true, true] },
      { label: "Keyword Research & Analysis", vals: [true, true, true, true] },
      { label: "Baseline Ranking Check", vals: [true, true, true, true] },
      { label: "Duplicate Content Check", vals: [true, true, true, true] },
      { label: "Google Penalty Check", vals: [true, true, true, true] },
      { label: "Back Link Analysis", vals: [false, false, true, true] },
    ],
  },
  {
    title: "On-page Optimization",
    rows: [
      { label: "Website Canonical Check", vals: [true, true, true, true] },
      { label: "Title Tag Optimization", vals: [true, true, true, true] },
      { label: "META Tags Optimization", vals: [true, true, true, true] },
      { label: "Heading Tags Optimization", vals: [false, false, true, true] },
      { label: "Image Alt Tags Optimization", vals: [true, true, true, true] },
      { label: "Content Optimization", vals: [true, true, true, true] },
      { label: "SEO Friendly URL Setup", vals: [true, true, true, true] },
      { label: "Site Navigation Analysis", vals: [false, false, true, true] },
      { label: "404 Page Implementation", vals: [true, true, true, true] },
      { label: "Broken Links Check", vals: [false, false, true, true] },
      { label: "Website Speed Check", vals: [true, true, true, true] },
      { label: "Google Indexed Pages Check", vals: [true, true, true, true] },
      { label: "Robots.txt Creation", vals: [true, true, true, true] },
      { label: "Google XML Sitemap", vals: [true, true, true, true] },
      { label: "php Sitemap Setup", vals: [false, false, false, true] },
      { label: "Google Webmasters Tool Setup", vals: [true, true, true, true] },
      { label: "Google Analytics Setup", vals: [true, true, true, true] },
      { label: "Structured Data Setup", vals: [false, false, false, true] },
      { label: "On Site Blog Section Creation", vals: [true, true, true, true] },
      { label: "Blog Posting (from 3rd month)", vals: ["1", "1", "2", "3"] },
    ],
  },
  {
    title: "Off-page Optimization",
    rows: [
      { label: "Search Engine Submission", vals: ["10", "20", "30", "40"] },
      { label: "Article Writing", vals: ["1", "2", "3", "6"] },
      { label: "Article Posting", vals: ["1", "2", "3", "6"] },
      { label: "Article Bookmarking", vals: ["10", "20", "30", "40"] },
      { label: "Classified Submissions", vals: ["10", "20", "30", "80"] },
      { label: "Business Listing", vals: ["5", "6", "7", "10"] },
      { label: "Blog Writing", vals: ["1", "2", "3", "6"] },
      { label: "Blog Posting", vals: ["1", "2", "3", "6"] },
      { label: "Blog Bookmarking", vals: ["10", "20", "30", "80"] },
      { label: "On Page Blog", vals: ["1", "2", "3", "6"] },
      { label: "On Page Blog Bookmarking", vals: ["5", "10", "15", "80"] },
      { label: "Image Sharing", vals: ["5", "10", "15", "40"] },
      { label: "PPT Submissions", vals: ["1", "2", "3", "8"] },
      { label: "PPT Bookmarking", vals: ["10", "20", "30", "40"] },
      { label: "Social Bookmarking", vals: ["30", "40", "50", "80"] },
      { label: "PDF Sharing", vals: ["1", "2", "3", "6"] },
      { label: "PDF Bookmarking", vals: ["5", "10", "15", "40"] },
      { label: "Profile Creation", vals: ["5", "6", "7", "10"] },
      { label: "Quora Answering", vals: ["1", "2", "3", "10"] },
      { label: "Info Graphic Creation", vals: ["1", "2", "3", "6"] },
      { label: "Info Graphic Bookmarking", vals: ["5", "10", "15", "50"] },
      { label: "Video Marketing", vals: [true, true, true, true] },
      { label: "Press Release", vals: [true, true, true, true] },
    ],
  },
  {
    title: "SMO — Facebook",
    rows: [
      { label: "Facebook Profile Creation", vals: [false, true, true, true] },
      { label: "Facebook Fan Page Creation", vals: [false, true, true, true] },
      { label: "Facebook Posting & Sharing", vals: [false, "4", "8", "16"] },
    ],
  },
  {
    title: "SMO — Instagram",
    rows: [
      { label: "Instagram Business Profile", vals: [false, true, true, true] },
      { label: "Branded Hashtag Creation", vals: [false, true, true, true] },
      { label: "Instagram Posting", vals: [false, "4", "8", "16"] },
    ],
  },
  {
    title: "SMO — Twitter & Pinterest",
    rows: [
      { label: "Twitter Profile Creation", vals: [false, true, true, true] },
      { label: "Twitter Post", vals: [false, "4", "8", "16"] },
      { label: "Pinterest Account Management", vals: [false, false, true, true] },
      { label: "Pinterest Followers", vals: [false, false, true, true] },
      { label: "Updating Pin Boards", vals: [false, false, "4", "8"] },
      { label: "Pins (Client Images)", vals: [false, false, true, true] },
    ],
  },
  {
    title: "Reports & Support",
    rows: [
      { label: "Monthly Website Analytics Report", vals: [true, true, true, true] },
      { label: "Monthly Keywords Ranking Report", vals: [true, true, true, true] },
      { label: "Monthly Off Page Submission Report", vals: [true, true, true, true] },
      { label: "Email Support", vals: [true, true, true, true] },
      { label: "Phone Support", vals: [true, true, true, true] },
      { label: "Chat Support", vals: [true, true, true, true] },
    ],
  },
];

const Val = ({ v, color }) => {
  if (v === true) return <Check size={15} style={{ color }} className="mx-auto" strokeWidth={2.5} />;
  if (v === false) return <X size={14} className="mx-auto text-slate-300" strokeWidth={2} />;
  return <span style={{ color }} className="text-xs font-bold">{v}</span>;
};

export default function SeoPackage() {
  const [active, setActive] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const toggleSection = (t) => setOpenSections(s => ({ ...s, [t]: !s[t] }));

  return (
    <div className="min-h-screen bg-slate-950" style={{ fontFamily: "'DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        .syne{font-family:'Syne',sans-serif}
        .card-hover{transition:transform .25s,box-shadow .25s}
        .card-hover:hover{transform:translateY(-4px)}
        ::-webkit-scrollbar{height:4px;width:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#334155;border-radius:99px}
      `}</style>

      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 pt-16 pb-12 px-4 text-center border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6,182,212,.12), transparent)" }} />
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-5">
          <Search size={13} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">SEO Packages</span>
        </div>
        <h1 className="syne text-3xl sm:text-5xl font-black text-white mb-3">
          Rank Higher.<br />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Grow Faster.</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
          Transparent, results-driven SEO packages for ecommerce & business websites across India and globally.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="px-4 py-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.id} onClick={() => setActive(active === p.id ? null : p.id)}
                className={`card-hover relative rounded-2xl p-5 cursor-pointer border transition-all ${
                  active === p.id
                    ? "border-transparent ring-2"
                    : p.highlight
                    ? "border-amber-500/40 bg-amber-500/5"
                    : "border-slate-800 bg-slate-900"
                }`}
                style={active === p.id ? { ringColor: p.color, background: `${p.color}10`, borderColor: "transparent", boxShadow: `0 0 0 2px ${p.color}` } : {}}
              >
                {p.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`bg-gradient-to-r ${p.bg} text-white text-xs font-black px-3 py-0.5 rounded-full shadow-lg whitespace-nowrap`}>{p.tag}</span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4 mt-1">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}18`, border: `1px solid ${p.color}30` }}>
                    <Icon size={17} style={{ color: p.color }} />
                  </div>
                  <span className="syne text-white font-black text-base">{p.name}</span>
                </div>

                <div className="mb-4">
                  <span className="syne text-2xl font-black" style={{ color: p.color }}>{p.price}</span>
                  <span className="text-slate-500 text-xs ml-1">{p.period}</span>
                </div>

                <div className="space-y-2 mb-5">
                  {[["Keywords", p.stats.keywords], ["Landing Pages", p.stats.pages], ["Backlinks/mo", p.stats.backlinks]].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs">{label}</span>
                      <span className="text-xs font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>

                {/* <button className={`w-full py-2 rounded-xl text-sm font-bold transition-all bg-gradient-to-r ${p.bg} text-white shadow-sm`}>
                  Get Started
                </button> */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Comparison Table */}
      <div className="px-4 pb-16 max-w-6xl mx-auto">
        <h2 className="syne text-xl font-black text-white mb-6 text-center">Full Feature Comparison</h2>

        <div className="rounded-2xl border border-slate-800 overflow-hidden">
          {/* Sticky header */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead className="bg-slate-900 sticky top-0 z-10">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 w-48">Feature</th>
                  {plans.map(p => (
                    <th key={p.id} className="px-3 py-3 text-center w-24">
                      <span className="text-xs font-black" style={{ color: p.color }}>{p.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {sections.map((sec) => {
                  const isOpen = openSections[sec.title] !== false;
                  return [
                    <tr key={`h-${sec.title}`} onClick={() => toggleSection(sec.title)}
                      className="bg-slate-900/80 cursor-pointer select-none border-t border-slate-800 hover:bg-slate-800/60 transition-colors">
                      <td colSpan={5} className="px-4 py-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-slate-300 uppercase tracking-wider">{sec.title}</span>
                          {isOpen ? <ChevronUp size={13} className="text-slate-500" /> : <ChevronDown size={13} className="text-slate-500" />}
                        </div>
                      </td>
                    </tr>,
                    ...(isOpen ? sec.rows.map((row, ri) => (
                      <tr key={`${sec.title}-${ri}`} className="border-t border-slate-800/60 hover:bg-slate-900/40 transition-colors">
                        <td className="px-4 py-2.5 text-xs text-slate-400 font-medium">{row.label}</td>
                        {row.vals.map((v, vi) => (
                          <td key={vi} className="px-3 py-2.5 text-center">
                            <Val v={v} color={plans[vi].color} />
                          </td>
                        ))}
                      </tr>
                    )) : [])
                  ];
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 pb-16 text-center">
        <div className="max-w-xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="syne text-xl font-black text-white mb-2">Not sure which plan fits?</h3>
          <p className="text-slate-400 text-sm mb-5">Book a free 30-min consultation and we'll recommend the perfect package for your goals.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-bold shadow-lg shadow-cyan-900/30">
              Book Free Consultation
            </button>
            <button className="px-6 py-2.5 rounded-xl border border-slate-600 text-slate-300 text-sm font-semibold hover:bg-slate-700 transition-colors">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}