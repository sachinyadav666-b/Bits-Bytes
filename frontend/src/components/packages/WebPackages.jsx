import { useState } from "react";
import { Check, X, Monitor, Layers, Globe, ShoppingBag, Shield, Mail, ArrowRight, Zap, Star, Code2, Cpu, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const plans = [
  {
    id: "basic", name: "Basic", price: "$850", period: "/mo",
    color: "#22d3ee", glow: "rgba(34,211,238,0.18)",
    gradient: "linear-gradient(135deg,#0891b2,#22d3ee)",
    tag: null, highlight: false,
    tagline: "Launch your presence",
    features: ["Partial Custom Design", "1 Iteration", "25 Hosted Emails", "5 hrs/mo Maintenance"],
  },
  {
    id: "standard", name: "Standard", price: "$1,650", period: "/mo",
    color: "#c084fc", glow: "rgba(192,132,252,0.18)",
    gradient: "linear-gradient(135deg,#9333ea,#c084fc)",
    tag: "Most Popular", highlight: true,
    tagline: "Grow with confidence",
    features: ["Custom Design", "2 Iterations", "50 Hosted Emails", "10 hrs/mo Maintenance"],
  },
  {
    id: "professional", name: "Professional", price: "$3,499", period: "/mo",
    color: "#fb923c", glow: "rgba(251,146,60,0.18)",
    gradient: "linear-gradient(135deg,#ea580c,#fb923c)",
    tag: "Full Suite", highlight: false,
    tagline: "Enterprise-grade power",
    features: ["Custom Design", "4 Iterations", "200 Hosted Emails", "25 hrs/mo Maintenance"],
  },
];

const rows = [
  { label: "Design",                  icon: "🎨", vals: ["Partial Custom (1 iteration)", "Custom (2 iterations)", "Custom (4 iterations)"] },
  { label: "Layered Sliders",         icon: "🖼️", vals: [true, true, true] },
  { label: "Responsive Site",         icon: "📱", vals: [true, true, true] },
  { label: "New Logo Design",         icon: "✏️", vals: [false, false, false] },
  { label: "PHP Email Templates",     icon: "📧", vals: [false, false, true] },
  { label: "Letterhead Design",       icon: "📄", vals: [true, false, true] },
  { label: "CMS Platform",            icon: "⚙️", vals: ["WP / Joomla / C5 / Drupal", "WP / Joomla / Magento / Shopify / BigCommerce", "Custom Framework + All Platforms"] },
  { label: "Custom Blog",             icon: "📝", vals: [false, true, true] },
  { label: "CMS Updates",             icon: "🔄", vals: [false, "Up to 6 months", "Up to 12 months"] },
  { label: "Front-End User Mgmt",     icon: "👤", vals: [false, true, true] },
  { label: "Back-End User Mgmt",      icon: "🔧", vals: [true, true, true] },
  { label: "Social Logins",           icon: "🔗", vals: [false, true, true] },
  { label: "Added Site Security",     icon: "🔒", vals: [false, true, true] },
  { label: "GUI Admin Panel",         icon: "🖥️", vals: [true, true, true] },
  { label: "Shopping Cart",           icon: "🛒", vals: [false, true, true] },
  { label: "Dealer / Affiliate",      icon: "🤝", vals: [false, false, true] },
  { label: "SE Friendly Structure",   icon: "🔍", vals: [true, true, true] },
  { label: "Newsletter Module",       icon: "📨", vals: [false, true, true] },
  { label: "Google eComm Tracking",   icon: "📊", vals: [false, false, true] },
  { label: "Conversion Forms",        icon: "📋", vals: ["Up to 3", "Up to 7", "Up to 12"] },
  { label: "Content Migration",       icon: "📦", vals: [true, true, true] },
  { label: "Products Migration",      icon: "🏷️", vals: ["N/A", "Up to 500", "Up to 2,000"] },
  { label: "Order Migration",         icon: "📬", vals: ["N/A", false, true] },
  { label: "User Migration",          icon: "👥", vals: ["N/A", false, true] },
  { label: "New Domain (optional)",   icon: "🌐", vals: [false, true, true] },
  { label: "Web Hosting",             icon: "☁️", vals: [true, true, true] },
  { label: "Hosted Emails",           icon: "✉️", vals: ["25", "50", "200"] },
  { label: "Web Maintenance",         icon: "🛠️", vals: ["5 hrs/month", "10 hrs/month", "25 hrs/month"] },
];

const Val = ({ v, color }) => {
  if (v === true)  return <div className="flex justify-center"><div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background:`${color}20`, border:`1px solid ${color}40` }}><Check size={12} style={{ color }} strokeWidth={3} /></div></div>;
  if (v === false) return <div className="flex justify-center"><div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background:"rgba(255,255,255,0.03)" }}><X size={11} className="text-slate-700" strokeWidth={2.5} /></div></div>;
  return (
    <div className="flex justify-center px-1">
      <span className="text-xs font-semibold text-center leading-tight" style={{ color:"#94a3b8" }}>{v}</span>
    </div>
  );
};

export default function WebPackages() {
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(null);
  const visibleRows = showAll ? rows : rows.slice(0, 10);

  return (
    <div className="min-h-screen" style={{ background:"#04080f", fontFamily:"'DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        .syne { font-family:'Syne',sans-serif; }
        ::-webkit-scrollbar { height:3px; width:3px; }
        ::-webkit-scrollbar-thumb { background:#1e293b; border-radius:99px; }

        @keyframes drift {
          0%,100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(1deg); }
          66% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes glow-pulse {
          0%,100% { opacity:.5; }
          50% { opacity:1; }
        }
        @keyframes border-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .drift { animation: drift 6s ease-in-out infinite; }
        .card-lift { transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s; }
        .card-lift:hover { transform: translateY(-8px); }

        .animated-border {
          background: linear-gradient(90deg,#22d3ee,#c084fc,#fb923c,#22d3ee);
          background-size: 300% 300%;
          animation: border-spin 4s linear infinite;
        }

        .glass-row:hover td { background: rgba(255,255,255,0.02); }

        .tag-pill {
          background: linear-gradient(135deg, rgba(192,132,252,.25), rgba(147,51,234,.15));
          border: 1px solid rgba(192,132,252,.35);
        }

        .cta-shine {
          background: linear-gradient(90deg,#0ea5e9,#9333ea,#ea580c,#0ea5e9);
          background-size: 300% auto;
          animation: border-spin 5s linear infinite;
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden pt-20 pb-16 px-4">
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:"radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize:"32px 32px",
        }} />
        {/* Scanline */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity:.03 }}>
          <div style={{ position:"absolute", width:"100%", height:"2px", background:"#22d3ee", animation:"scanline 6s linear infinite" }} />
        </div>
        {/* Glow blobs */}
        <div className="absolute pointer-events-none" style={{ top:"-80px", left:"20%", width:"500px", height:"500px", background:"radial-gradient(circle,rgba(147,51,234,.1),transparent 65%)", filter:"blur(60px)" }} />
        <div className="absolute pointer-events-none" style={{ top:"0", right:"15%", width:"400px", height:"400px", background:"radial-gradient(circle,rgba(14,165,233,.08),transparent 65%)", filter:"blur(60px)" }} />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Floating icon cluster */}
          <div className="flex justify-center gap-3 mb-8 drift">
            {[{ icon: Code2, c:"#22d3ee" },{ icon: Monitor, c:"#c084fc" },{ icon: Cpu, c:"#fb923c" }].map(({ icon: Icon, c }, i) => (
              <div key={i} className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background:`${c}15`, border:`1px solid ${c}30`, boxShadow:`0 0 20px ${c}20` }}>
                <Icon size={20} style={{ color:c }} />
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest" style={{ background:"rgba(34,211,238,.08)", border:"1px solid rgba(34,211,238,.2)", color:"#22d3ee" }}>
            <Sparkles size={11} /> Web Development Packages
          </div>

          <h1 className="syne text-4xl sm:text-6xl font-black text-white mb-4 leading-none tracking-tight">
            Build Something<br />
            <span style={{ background:"linear-gradient(135deg,#22d3ee 20%,#c084fc 50%,#fb923c 80%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Extraordinary
            </span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10">
            From a stunning launch site to a full ecommerce powerhouse — we build web experiences that convert, scale, and last.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            {[["⚡","Fast Delivery"],["🔐","Secure & Scalable"],["🏆","Award-Winning Design"],["📞","Dedicated Support"]].map(([e,l]) => (
              <span key={l} className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                <span>{e}</span>{l}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PLAN CARDS ── */}
      <div className="max-w-5xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.id} className="card-lift relative"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}>

              {/* Animated border wrapper for popular */}
              {p.highlight && (
                <div className="absolute -inset-[1.5px] rounded-3xl animated-border opacity-70" style={{ zIndex:0 }} />
              )}

              <div className="relative rounded-3xl overflow-hidden flex flex-col h-full"
                style={{
                  background: "#0b1120",
                  border: p.highlight ? "none" : "1px solid rgba(255,255,255,0.06)",
                  zIndex: 1,
                  boxShadow: hovered === p.id ? `0 24px 60px ${p.glow}` : "none",
                }}>

                {/* Color top bar */}
                <div className="h-1" style={{ background: p.gradient }} />

                {p.tag && (
                  <div className="absolute top-4 right-4">
                    <span className="tag-pill text-xs font-black px-3 py-1 rounded-full" style={{ color: p.color }}>{p.tag}</span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: p.color }}>{p.tagline}</p>
                    <h3 className="syne text-2xl font-black text-white">{p.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-1 mb-5 pb-5" style={{ borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                    <span className="syne text-4xl font-black text-white leading-none">{p.price}</span>
                    <span className="text-slate-600 text-sm mb-1">{p.period}</span>
                  </div>

                  {/* Feature highlights */}
                  <div className="space-y-2.5 mb-6 flex-1">
                    {p.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:`${p.color}18` }}>
                          <Check size={9} style={{ color: p.color }} strokeWidth={3} />
                        </div>
                        <span className="text-slate-400 text-xs font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* <button className="w-full py-3 rounded-2xl text-sm font-black text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:gap-3"
                    style={{ background: p.gradient, boxShadow:`0 8px 28px ${p.glow}` }}>
                    Get Started <ArrowRight size={14} />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COMPARISON TABLE ── */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="syne text-2xl sm:text-3xl font-black text-white mb-2">Compare Every Feature</h2>
          <p className="text-slate-600 text-xs">Transparent breakdown — no hidden extras</p>
        </div>

        <div className="rounded-3xl overflow-hidden" style={{ background:"#080e1b", border:"1px solid rgba(255,255,255,0.05)" }}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px]">

              {/* Sticky header */}
              <thead>
                <tr style={{ background:"#0d1424", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-slate-600 w-52">Feature</th>
                  {plans.map(p => (
                    <th key={p.id} className="px-4 py-4 text-center">
                      <div>
                        <div className="text-xs font-black mb-0.5" style={{ color: p.color }}>{p.name}</div>
                        <div className="syne text-base font-black text-white">{p.price}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {visibleRows.map((row, ri) => (
                  <tr key={ri} className="glass-row transition-colors" style={{ borderTop:"1px solid rgba(255,255,255,0.03)" }}>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-base leading-none">{row.icon}</span>
                        <span className="text-xs text-slate-400 font-medium">{row.label}</span>
                      </div>
                    </td>
                    {row.vals.map((v, vi) => (
                      <td key={vi} className="px-4 py-3 text-center">
                        <Val v={v} color={plans[vi].color} />
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Show more / less */}
                <tr style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
                  <td colSpan={4} className="px-5 py-3 text-center">
                    <button onClick={() => setShowAll(!showAll)}
                      className="inline-flex items-center gap-2 text-xs font-bold transition-colors hover:text-white"
                      style={{ color:"#64748b" }}>
                      {showAll
                        ? <><ChevronUp size={14} /> Show Less</>
                        : <><ChevronDown size={14} /> Show All {rows.length} Features</>}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="px-4 pb-20">
        <div className="max-w-3xl mx-auto relative">
          {/* Outer glow */}
          <div className="absolute -inset-1 rounded-3xl cta-shine opacity-30 blur-sm" />
          <div className="relative rounded-3xl overflow-hidden p-10 text-center" style={{ background:"linear-gradient(135deg,#090f1e,#0f1729)", border:"1px solid rgba(255,255,255,0.07)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 70% 60% at 50% 110%,rgba(147,51,234,.15),transparent)" }} />
            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center drift" style={{ background:"linear-gradient(135deg,#9333ea,#22d3ee)", boxShadow:"0 0 40px rgba(147,51,234,.4)" }}>
                  <Globe size={26} className="text-white" />
                </div>
              </div>
              <h3 className="syne text-2xl sm:text-3xl font-black text-white mb-3">Ready to Build Your Dream Site?</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto mb-7 leading-relaxed">
                Get a free consultation with our web specialists and find the perfect package tailored to your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="cta-shine px-8 py-3 rounded-2xl text-white text-sm font-black flex items-center justify-center gap-2 shadow-2xl">
                  Start Your Project <ArrowRight size={14} />
                </button>
                <button className="px-8 py-3 rounded-2xl text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)" }}>
                  💬 WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}