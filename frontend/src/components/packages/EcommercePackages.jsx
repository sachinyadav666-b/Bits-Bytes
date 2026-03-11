import { useState } from "react";
import {
  Check, X, ShoppingCart, ChevronDown, ChevronUp,
  TrendingUp, Package, Globe, Video, MapPin, DollarSign,
  HeadphonesIcon, Zap, Star, ArrowRight, Shield, Clock
} from "lucide-react";

const plans = [
  {
    id: "basic", name: "Basic", price: "$499", period: "/mo",
    color: "#38bdf8", glow: "rgba(56,189,248,0.15)",
    gradient: "linear-gradient(135deg,#0ea5e9,#38bdf8)",
    tag: null, highlight: false,
    stats: { keywords: 50, pages: 20, hours: 150, backlinks: 70 },
    tagline: "Perfect for new stores",
  },
  {
    id: "standard", name: "Standard", price: "$1,099", period: "/mo",
    color: "#a78bfa", glow: "rgba(167,139,250,0.15)",
    gradient: "linear-gradient(135deg,#7c3aed,#a78bfa)",
    tag: "Popular", highlight: false,
    stats: { keywords: 100, pages: 15, hours: 170, backlinks: 120 },
    tagline: "Growing brands",
  },
  {
    id: "professional", name: "Pro", price: "$2,099", period: "/mo",
    color: "#fb923c", glow: "rgba(251,146,60,0.2)",
    gradient: "linear-gradient(135deg,#ea580c,#fb923c)",
    tag: "Best Value", highlight: true,
    stats: { keywords: 200, pages: 5, hours: 200, backlinks: 200 },
    tagline: "Scaling businesses",
  },
  {
    id: "enterprise", name: "Enterprise", price: "$3,599", period: "/mo",
    color: "#34d399", glow: "rgba(52,211,153,0.15)",
    gradient: "linear-gradient(135deg,#059669,#34d399)",
    tag: null, highlight: false,
    stats: { keywords: 500, pages: 10, hours: 250, backlinks: 400 },
    tagline: "Market dominators",
  },
];

const sections = [
  {
    title: "Initial Review & Analysis", icon: TrendingUp, color: "#38bdf8",
    rows: [
      { label: "Website Analysis",          vals: [true, true, true, true] },
      { label: "Content Duplicacy Check",   vals: [true, true, true, true] },
      { label: "Initial Backlinks Analysis",vals: [true, true, true, true] },
      { label: "Google Penalty Check",      vals: [true, true, true, true] },
      { label: "Competition Analysis",      vals: [true, true, true, true] },
      { label: "Keyword Research",          vals: [true, true, true, true] },
    ],
  },
  {
    title: "On Page Optimization", icon: Globe, color: "#a78bfa",
    rows: [
      { label: "Title Tags Optimization",           vals: [true, true, true, true] },
      { label: "Category/Products META Tags",       vals: [true, true, true, true] },
      { label: "Content Optimization",              vals: [true, true, true, true] },
      { label: "Site Architecture Recommendations", vals: [true, true, true, true] },
      { label: "PHP Code Optimization",             vals: [true, true, true, true] },
      { label: "Product Markup – Schema Tags",      vals: [true, true, true, true] },
      { label: "Page Speed Analysis",               vals: [true, true, true, true] },
      { label: "Product Image Optimization",        vals: [true, true, true, true] },
      { label: "Rich Snippets Optimization",        vals: [true, true, true, true] },
      { label: "Internal Linking Optimization",     vals: [true, true, true, true] },
      { label: "Canonicalization / 301 Redirect",   vals: [true, true, true, true] },
      { label: "Robots.txt Creation/Optimization",  vals: [true, true, true, true] },
      { label: "XML Sitemap Creation",              vals: [true, true, true, true] },
      { label: "Google Webmaster Tools Setup",      vals: [true, true, true, true] },
      { label: "Bing Webmaster Tools Setup",        vals: [true, true, true, true] },
      { label: "Google Analytics Setup",            vals: [true, true, true, true] },
      { label: "Shopping Cart Funnel Analysis",     vals: [true, true, true, true] },
    ],
  },
  {
    title: "Content Marketing", icon: Package, color: "#fb923c",
    rows: [
      { label: "Guest Blogging / Webpages",        vals: ["2", "5", "10", "20"] },
      { label: "Blog Posts on Client's Website",   vals: [false, false, "1", "2"] },
      { label: "Informative Article Writing",      vals: ["1", "1", "3", "5"] },
      { label: "Custom Graphics for Blogs",        vals: [true, true, true, true] },
      { label: "Infographics Creation",            vals: [false, false, "6th Month", "3rd Month"] },
      { label: "Premium Press Release",            vals: [false, false, false, "6th Month"] },
      { label: "Search Engine Submissions",        vals: ["3", "5", "10", "25"] },
      { label: "Social Bookmarking Links",         vals: ["20", "40", "100", "210"] },
      { label: "Classified Submissions",           vals: ["10", "20", "30", "60"] },
      { label: "Facebook Profile Promotion",       vals: ["10", "15", "25", "60"] },
      { label: "Twitter Profile Promotion",        vals: ["10", "15", "25", "50"] },
      { label: "Image Submission",                 vals: ["1", "2", "6", "12"] },
      { label: "Article Submission",               vals: [false, "10", "40", "20"] },
      { label: "PDF Submissions",                  vals: [false, "20", "30", "20"] },
      { label: "Web 2.0 Profile Creation",         vals: [false, false, "20", "4"] },
      { label: "Press Release Writing",            vals: [false, false, false, "1"] },
      { label: "Coupon Distribution / Offers",     vals: ["3", "5", "10", "20"] },
      { label: "Product Feed Submissions",         vals: [false, false, true, true] },
      { label: "Product Image Submissions",        vals: ["1", "2", "6", "12"] },
      { label: "Product Video Submissions",        vals: ["1", "2", "6", "12"] },
    ],
  },
  {
    title: "Local Optimization", icon: MapPin, color: "#34d399",
    rows: [
      { label: "Location Optimization",          vals: ["1", "2", "4", "8"] },
      { label: "NAP Syndication",                vals: [true, true, true, true] },
      { label: "Google Business Page Creation",  vals: [true, true, true, true] },
      { label: "Bing Local Listing Creation",    vals: [true, true, true, true] },
      { label: "hCard Integration",              vals: [false, false, false, true] },
      { label: "Customer Reviews / Ratings",     vals: [false, false, false, true] },
    ],
  },
  {
    title: "Video Marketing", icon: Video, color: "#f472b6",
    rows: [
      { label: "YouTube Account Setup",        vals: [true, true, true, true] },
      { label: "Vimeo Account Setup",          vals: [true, true, true, true] },
      { label: "Dailymotion Account Setup",    vals: ["16", true, true, true] },
      { label: "Video / PPT Creation",         vals: [false, false, "6th Month", "3rd Month"] },
      { label: "Video / PPT Distribution",     vals: [false, false, true, true] },
      { label: "Share Videos on Social Media", vals: [false, false, true, true] },
    ],
  },
  {
    title: "Paid Optimization & Setup", icon: DollarSign, color: "#fbbf24",
    rows: [
      { label: "Facebook Store Set-up",                     vals: [false, true, true, true] },
      { label: "Product Description Writing",               vals: [false, "35", "70", "150"] },
      { label: "Email Automation",                          vals: [false, false, true, true] },
      { label: "App Install Ads (Google/FB/LinkedIn)",      vals: [false, false, true, true] },
      { label: "Google News Listing",                       vals: [false, false, true, true] },
      { label: "Remarketing (Google & Facebook)",           vals: [false, false, false, true] },
    ],
  },
  {
    title: "Customer Support", icon: HeadphonesIcon, color: "#818cf8",
    rows: [
      { label: "Email Support", vals: [true, true, true, true] },
      { label: "Phone Support", vals: [true, true, true, true] },
      { label: "Chat Support",  vals: [true, true, true, true] },
    ],
  },
];

const Val = ({ v, color }) => {
  if (v === true)  return <div className="flex justify-center"><div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background:`${color}20` }}><Check size={11} style={{ color }} strokeWidth={3} /></div></div>;
  if (v === false) return <div className="flex justify-center"><X size={12} className="text-slate-700" strokeWidth={2.5} /></div>;
  return <div className="flex justify-center"><span className="text-xs font-black px-1.5 py-0.5 rounded-md" style={{ color, background:`${color}15` }}>{v}</span></div>;
};

export default function EcommercePackages() {
  const [openSec, setOpenSec] = useState({ "Initial Review & Analysis": false });
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const toggle = (t) => setOpenSec(s => ({ ...s, [t]: !s[t] }));

  return (
    <div className="min-h-screen" style={{ background: "#060912", fontFamily: "'DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Clash+Display:wght@600;700&family=Syne:wght@700;800&display=swap');
        .clash { font-family: 'Syne', sans-serif; }
        ::-webkit-scrollbar { height: 3px; width: 3px; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 99px; }

        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity:.6; } 100% { transform: scale(1.5); opacity:0; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }

        .shimmer-btn {
          background: linear-gradient(90deg, #7c3aed, #db2777, #0ea5e9, #7c3aed);
          background-size: 300% auto;
          animation: shimmer 4s linear infinite;
        }
        .float-icon { animation: float 3s ease-in-out infinite; }
        .plan-glow { transition: all .3s cubic-bezier(.16,1,.3,1); }
        .plan-glow:hover { transform: translateY(-6px) scale(1.01); }
        .sec-header:hover { background: rgba(255,255,255,0.03); }
        .data-row:hover td { background: rgba(255,255,255,0.018); }
        .tag-badge {
          background: linear-gradient(135deg, rgba(251,146,60,.2), rgba(234,88,12,.1));
          border: 1px solid rgba(251,146,60,.3);
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background:"radial-gradient(circle, rgba(124,58,237,.12), transparent 70%)", filter:"blur(40px)" }} />
        <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background:"radial-gradient(circle, rgba(219,39,119,.08), transparent 70%)", filter:"blur(40px)" }} />

        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
          {/* Floating cart icon */}
          <div className="inline-flex mb-6 float-icon">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background:"linear-gradient(135deg,#7c3aed,#db2777)", boxShadow:"0 0 40px rgba(124,58,237,.4)" }}>
              <ShoppingCart size={28} className="text-white" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 border text-xs font-bold uppercase tracking-widest" style={{ background:"rgba(124,58,237,.1)", borderColor:"rgba(124,58,237,.3)", color:"#a78bfa" }}>
            <Zap size={11} /> Ecommerce SEO Packages
          </div>

          <h1 className="clash text-4xl sm:text-6xl font-black text-white mb-4 leading-none tracking-tight">
            Turn Visitors Into<br />
            <span style={{ background:"linear-gradient(135deg,#a78bfa,#f472b6,#fb923c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Loyal Customers
            </span>
          </h1>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-10">
            Specialized ecommerce SEO strategies that drive qualified traffic, improve product visibility, and grow your revenue month after month.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {[[ <Shield size={14}/>, "Guaranteed Results"],[ <Clock size={14}/>, "Monthly Reports"],[ <Star size={14}/>, "5★ Rated Agency"]].map(([icon,label],i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="text-violet-400">{icon}</span>{label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PLAN CARDS ── */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((p, pi) => (
            <div key={p.id} className="plan-glow relative rounded-3xl overflow-hidden cursor-pointer"
              style={{
                background: hoveredPlan === p.id ? `${p.glow}` : "#0d1424",
                border: p.highlight ? `1px solid ${p.color}50` : "1px solid rgba(255,255,255,0.06)",
                boxShadow: hoveredPlan === p.id ? `0 20px 60px ${p.glow}, 0 0 0 1px ${p.color}30` : "none",
              }}
              onMouseEnter={() => setHoveredPlan(p.id)}
              onMouseLeave={() => setHoveredPlan(null)}>

              {/* Top gradient bar */}
              <div className="h-1 w-full" style={{ background: p.gradient }} />

              {p.tag && (
                <div className="absolute top-4 right-4">
                  <span className="tag-badge text-xs font-black px-2.5 py-1 rounded-full" style={{ color: p.color }}>
                    {p.tag}
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Plan name */}
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: p.color }}>{p.tagline}</p>
                  <h3 className="clash text-2xl font-black text-white">{p.name}</h3>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-5">
                  <span className="clash text-4xl font-black text-white leading-none">{p.price}</span>
                  <span className="text-slate-500 text-sm mb-1">{p.period}</span>
                </div>

                {/* Stats */}
                <div className="space-y-2.5 mb-6 p-3 rounded-2xl" style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.05)" }}>
                  {[["🎯 Keywords", p.stats.keywords],["📄 Landing Pages", p.stats.pages],["⏱ Hours/mo", p.stats.hours],["🔗 Backlinks/mo", p.stats.backlinks]].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs">{label}</span>
                      <span className="text-xs font-black text-white">{val}</span>
                    </div>
                  ))}
                </div>

                {/* <button className="w-full py-2.5 rounded-2xl text-sm font-black text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: p.gradient, boxShadow:`0 8px 24px ${p.glow}` }}>
                  Get Started <ArrowRight size={14} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COMPARISON TABLE ── */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="clash text-2xl sm:text-3xl font-black text-white mb-2">Detailed Feature Breakdown</h2>
          <p className="text-slate-500 text-sm">Click any section to expand / collapse</p>
        </div>

        <div className="rounded-3xl border border-slate-800 overflow-hidden" style={{ background:"#080f1e" }}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              {/* Sticky plan header */}
              <thead>
                <tr style={{ background:"#0d1424", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-slate-600 w-56">Feature</th>
                  {plans.map(p => (
                    <th key={p.id} className="px-3 py-4 text-center w-24">
                      <div className="inline-flex flex-col items-center gap-1">
                        <span className="text-xs font-black" style={{ color: p.color }}>{p.name}</span>
                        <span className="clash text-sm font-black text-white">{p.price}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {sections.map(sec => {
                  const Icon = sec.icon;
                  const isOpen = openSec[sec.title] !== false;
                  return [
                    /* Section header row */
                    <tr key={`h-${sec.title}`} onClick={() => toggle(sec.title)}
                      className="sec-header cursor-pointer select-none transition-colors"
                      style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
                      <td colSpan={5} className="px-5 py-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ background:`${sec.color}18`, border:`1px solid ${sec.color}30` }}>
                              <Icon size={12} style={{ color: sec.color }} />
                            </div>
                            <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{sec.title}</span>
                            <span className="text-xs text-slate-700 font-medium">{sec.rows.length} features</span>
                          </div>
                          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background:"rgba(255,255,255,0.04)" }}>
                            {isOpen ? <ChevronUp size={11} className="text-slate-500" /> : <ChevronDown size={11} className="text-slate-500" />}
                          </div>
                        </div>
                      </td>
                    </tr>,

                    /* Feature rows */
                    ...(isOpen ? sec.rows.map((row, ri) => (
                      <tr key={`${sec.title}-${ri}`} className="data-row transition-colors"
                        style={{ borderTop:"1px solid rgba(255,255,255,0.03)" }}>
                        <td className="px-5 py-2.5 text-xs text-slate-500 font-medium pl-14">{row.label}</td>
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

      {/* ── CTA STRIP ── */}
      <div className="px-4 pb-20">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center"
          style={{ background:"linear-gradient(135deg,#0d0a1e,#150d2e)", border:"1px solid rgba(124,58,237,.2)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,.12), transparent)" }} />
          <div className="relative">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="clash text-2xl sm:text-3xl font-black text-white mb-3">
              Not sure which plan is right?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mb-7 max-w-lg mx-auto leading-relaxed">
              Our ecommerce SEO specialists will analyze your store and recommend the perfect package — completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="shimmer-btn px-8 py-3 rounded-2xl text-white text-sm font-black shadow-2xl flex items-center justify-center gap-2">
                Book Free Strategy Call <ArrowRight size={14} />
              </button>
              <button className="px-8 py-3 rounded-2xl text-sm font-bold text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2"
                style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)" }}>
                💬 WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}