import { useState } from "react";
import { Check, X, ArrowRight, ChevronDown, ChevronUp, Sparkles, Users, Megaphone, BarChart2, Repeat2, HeartHandshake, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const plans = [
  {
    id: "basic", name: "Basic", price: "$99", tagline: "Start your presence",
    color: "#34d399", glow: "rgba(52,211,153,0.18)", gradient: "linear-gradient(135deg,#059669,#34d399)",
    icon: Users, tag: null, highlight: false,
    hours: 15, creatives: 5, postings: 5,
    summary: ["15 hrs/month", "5 Monthly Creatives", "5 Monthly Postings", "Organic Promotion"],
  },
  {
    id: "standard", name: "Standard", price: "$199", tagline: "Grow your audience",
    color: "#60a5fa", glow: "rgba(96,165,250,0.18)", gradient: "linear-gradient(135deg,#2563eb,#60a5fa)",
    icon: Megaphone, tag: "Most Popular", highlight: true,
    hours: 40, creatives: 8, postings: 8,
    summary: ["40 hrs/month", "8 Monthly Creatives", "8 Monthly Postings", "Paid Promotion"],
  },
  {
    id: "professional", name: "Professional", price: "$299", tagline: "Dominate socials",
    color: "#fb923c", glow: "rgba(251,146,60,0.18)", gradient: "linear-gradient(135deg,#ea580c,#fb923c)",
    icon: BarChart2, tag: "Full Suite", highlight: false,
    hours: 60, creatives: 12, postings: 12,
    summary: ["60 hrs/month", "12 Monthly Creatives", "12 Monthly Postings", "Remarketing Included"],
  },
  {
    id: "onetime", name: "One-Time Setup", price: "$189", tagline: "Structural foundation",
    color: "#e879f9", glow: "rgba(232,121,249,0.18)", gradient: "linear-gradient(135deg,#a21caf,#e879f9)",
    icon: Repeat2, tag: "One-Time", highlight: false,
    hours: 15, creatives: null, postings: null,
    summary: ["15 hrs audit", "Full Social Analysis", "Strategy & Setup", "Ad Account Creation"],
  },
];

const sections = [
  {
    title: "SMO Activities", icon: "📊",
    rows: [
      { label: "No. of Hours", vals: ["15", "40", "60", "15"] },
      { label: "Monthly Report & Insights", vals: [true, true, true, false] },
      { label: "Next Month's Action Plan", vals: [true, true, true, false] },
    ],
  },
  {
    title: "Organic Promotion", icon: "🌱",
    rows: [
      { label: "Competitor Analysis", vals: [true, true, true, true] },
      { label: "Strategy Formation", vals: [true, true, true, true] },
      { label: "Hashtag Creation & Promotion", vals: [true, true, true, false] },
      { label: "Monthly Creative Creation", vals: ["5", "8", "12", "—"] },
      { label: "Monthly Postings", vals: ["5", "8", "12", "—"] },
      { label: "Analytics Tracking", vals: [true, true, true, false] },
      { label: "Account Management", vals: [true, true, true, false] },
      { label: "Community Engagement", vals: [true, true, true, false] },
      { label: "Network Build-up", vals: [true, true, true, false] },
      { label: "3rd-Party Post Engagement", vals: [true, true, true, false] },
      { label: "Content Optimization", vals: [true, true, true, false] },
      { label: "Profile / Page Creation", vals: [false, false, false, true] },
    ],
  },
  {
    title: "Paid Promotion", icon: "💰",
    rows: [
      { label: "Budget Estimate", vals: [false, true, true, false] },
      { label: "Setting Up Campaigns", vals: [false, true, true, true] },
      { label: "Ad Creative Creation", vals: [false, true, true, false] },
      { label: "Daily Account Optimization", vals: [false, true, true, false] },
      { label: "Sales Funnel Setup", vals: [false, true, true, false] },
      { label: "Conversion Tracking (GA)", vals: [false, true, true, false] },
      { label: "Identifying Suitable Objectives", vals: [false, false, false, true] },
      { label: "Target Audience Identification", vals: [false, false, false, true] },
      { label: "Ad Account Creation", vals: [false, false, false, true] },
    ],
  },
  {
    title: "Remarketing", icon: "🎯",
    rows: [
      { label: "Audience List Creation", vals: [false, false, true, true] },
      { label: "Campaign Setup", vals: [false, false, true, false] },
      { label: "Ad Creative Creation", vals: [false, false, true, false] },
      { label: "Daily Optimization", vals: [false, false, true, false] },
      { label: "Sales Funnel for Conversion", vals: [false, false, true, false] },
      { label: "Conversion Tracking (GA)", vals: [false, false, true, false] },
      { label: "Remarketing Code Install", vals: [false, false, false, true] },
    ],
  },
  {
    title: "Analysis (Setup Plan)", icon: "🔍",
    rows: [
      { label: "Social Media Setup Analysis", vals: [false, false, false, true] },
      { label: "Posts Analysis", vals: [false, false, false, true] },
      { label: "Audience Behaviour Analysis", vals: [false, false, false, true] },
      { label: "Recommendations", vals: [false, false, false, true] },
      { label: "Social Media Strategy", vals: [false, false, false, true] },
    ],
  },
  {
    title: "Customer Support", icon: "💬",
    rows: [
      { label: "Email", vals: [true, true, true, true] },
      { label: "Phone", vals: [true, true, true, true] },
      { label: "Chat", vals: [true, true, true, true] },
    ],
  },
];

const allRows = sections.flatMap(s => s.rows);

const Val = ({ v, color }) => {
  if (v === true)  return <div style={{ display:"flex", justifyContent:"center" }}><div style={{ width:22, height:22, borderRadius:"50%", background:`${color}18`, border:`1px solid ${color}38`, display:"flex", alignItems:"center", justifyContent:"center" }}><Check size={11} style={{ color }} strokeWidth={3} /></div></div>;
  if (v === false) return <div style={{ display:"flex", justifyContent:"center" }}><div style={{ width:22, height:22, borderRadius:"50%", background:"rgba(255,255,255,0.03)", display:"flex", alignItems:"center", justifyContent:"center" }}><X size={10} style={{ color:"#334155" }} strokeWidth={2.5} /></div></div>;
  return <div style={{ display:"flex", justifyContent:"center" }}><span style={{ fontSize:11, fontWeight:700, color:"#94a3b8", textAlign:"center" }}>{v}</span></div>;
};

export default function SmoPackages() {
  const [hovered, setHovered] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [openSections, setOpenSections] = useState({ 0: true, 1: true });

  const toggleSection = i => setOpenSections(s => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .smo * { box-sizing: border-box; margin: 0; padding: 0; }
        .smo { font-family: 'DM Sans', sans-serif; background: #05080f; min-height: 100vh; color: #fff; }
        .bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 1.5px; }

        @keyframes drift { 0%,100%{transform:translateY(0) rotate(0)} 40%{transform:translateY(-10px) rotate(.8deg)} 70%{transform:translateY(-5px) rotate(-.5deg)} }
        @keyframes spin-bg { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(120vh)} }
        @keyframes float-in { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        .drift { animation: drift 7s ease-in-out infinite; }
        .card-lift { transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s; }
        .card-lift:hover { transform: translateY(-6px); }
        .spin-border { background: linear-gradient(90deg,#34d399,#60a5fa,#fb923c,#e879f9,#34d399); background-size:300% 300%; animation: spin-bg 4s linear infinite; }
        .float-in { animation: float-in .5s ease both; }

        .trow { transition: background .15s; }
        .trow:hover td { background: rgba(255,255,255,0.025); }
        .section-header { cursor: pointer; transition: background .15s; }
        .section-header:hover { background: rgba(255,255,255,0.03); }

        ::-webkit-scrollbar { width:3px; height:3px; }
        ::-webkit-scrollbar-thumb { background:#1e293b; border-radius:99px; }

        @media(max-width:860px) { .plan-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:480px) { .plan-grid { grid-template-columns: 1fr !important; } .hero-h1 { font-size:52px !important; } }
      `}</style>

      <div className="smo">

        {/* HERO */}
        <div style={{ position:"relative", overflow:"hidden", padding:"80px 24px 60px" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }} />
          <div style={{ position:"absolute", inset:0, overflow:"hidden", opacity:.025, pointerEvents:"none" }}>
            <div style={{ position:"absolute", width:"100%", height:"2px", background:"#34d399", animation:"scanline 8s linear infinite" }} />
          </div>
          <div style={{ position:"absolute", top:-60, left:"15%", width:500, height:500, background:"radial-gradient(circle,rgba(96,165,250,.08),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", top:0, right:"10%", width:380, height:380, background:"radial-gradient(circle,rgba(52,211,153,.07),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />

          <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center", position:"relative" }}>
            <div className="drift" style={{ display:"flex", justifyContent:"center", gap:12, marginBottom:28 }}>
              {[{ I:Instagram, c:"#e879f9" },{ I:Twitter, c:"#60a5fa" },{ I:Facebook, c:"#34d399" },{ I:Linkedin, c:"#fb923c" }].map(({ I, c }, i) => (
                <div key={i} style={{ width:44, height:44, borderRadius:13, background:`${c}12`, border:`1px solid ${c}28`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 0 20px ${c}18` }}>
                  <I size={18} style={{ color:c }} />
                </div>
              ))}
            </div>

            <div style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"5px 16px", borderRadius:99, marginBottom:20, background:"rgba(52,211,153,.07)", border:"1px solid rgba(52,211,153,.18)", color:"#34d399", fontSize:11, fontWeight:700, letterSpacing:"1.2px" }}>
              <Sparkles size={11} /> Monthly SMO Packages · Brand Trust Experts
            </div>

            <h1 className="bebas hero-h1" style={{ fontSize:76, lineHeight:1, marginBottom:16, color:"#fff" }}>
              Social Media Management<br />
              <span style={{ background:"linear-gradient(135deg,#34d399 20%,#60a5fa 55%,#e879f9 90%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Pricing & Plans
              </span>
            </h1>
            <p style={{ color:"#475569", fontSize:15, lineHeight:1.75, maxWidth:520, margin:"0 auto 32px" }}>
              Billions of people use social media daily. Build your brand's online reputation, community, and social trust with our expert SMO packages.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:20 }}>
              {[["📈","Brand Growth"],["🤝","Community Building"],["🎯","Targeted Campaigns"],["💬","Full Support"]].map(([e,l]) => (
                <span key={l} style={{ display:"flex", alignItems:"center", gap:6, color:"#475569", fontSize:12, fontWeight:500 }}><span>{e}</span>{l}</span>
              ))}
            </div>
          </div>
        </div>

        {/* PLAN CARDS */}
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px 56px" }}>
          <div className="plan-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
            {plans.map((p) => {
              const Icon = p.icon;
              const active = hovered === p.id;
              return (
                <div key={p.id} className="card-lift" style={{ position:"relative" }}
                  onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}>
                  {p.highlight && <div className="spin-border" style={{ position:"absolute", inset:-1.5, borderRadius:22, zIndex:0, opacity:.75 }} />}
                  <div style={{ position:"relative", zIndex:1, borderRadius:20, overflow:"hidden", background:"#0b1120", border:p.highlight ? "none" : "1px solid rgba(255,255,255,0.06)", boxShadow:active ? `0 20px 50px ${p.glow}` : "none", height:"100%", display:"flex", flexDirection:"column" }}>
                    <div style={{ height:3, background:p.gradient }} />
                    {p.tag && (
                      <div style={{ position:"absolute", top:12, right:12 }}>
                        <span style={{ fontSize:9, fontWeight:800, padding:"3px 9px", borderRadius:99, background:`${p.color}18`, border:`1px solid ${p.color}30`, color:p.color, letterSpacing:"0.8px", textTransform:"uppercase" }}>{p.tag}</span>
                      </div>
                    )}
                    <div style={{ padding:"22px 20px", flex:1, display:"flex", flexDirection:"column" }}>
                      <div style={{ width:38, height:38, borderRadius:11, background:`${p.color}15`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>
                        <Icon size={18} style={{ color:p.color }} />
                      </div>
                      <p style={{ fontSize:10, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:p.color, marginBottom:4 }}>{p.tagline}</p>
                      <h3 className="bebas" style={{ fontSize:22, color:"#fff", marginBottom:12 }}>{p.name}</h3>

                      {/* Hours pill */}
                      <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:`${p.color}10`, border:`1px solid ${p.color}25`, borderRadius:99, padding:"4px 10px", marginBottom:14, width:"fit-content" }}>
                        <span style={{ fontSize:11, fontWeight:700, color:p.color }}>{p.hours} hrs</span>
                        <span style={{ fontSize:10, color:"#475569" }}>/ month</span>
                      </div>

                      <div style={{ display:"flex", alignItems:"flex-end", gap:4, paddingBottom:14, marginBottom:14, borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                        <span className="bebas" style={{ fontSize:44, color:"#fff", lineHeight:1 }}>{p.price}</span>
                        <span style={{ fontSize:12, color:"#475569", paddingBottom:6 }}>/mo</span>
                      </div>

                      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:18, flex:1 }}>
                        {p.summary.map((s, i) => (
                          <div key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
                            <div style={{ width:14, height:14, borderRadius:"50%", background:`${p.color}18`, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                              <Check size={8} style={{ color:p.color }} strokeWidth={3} />
                            </div>
                            <span style={{ fontSize:11, color:"#64748b", fontWeight:500 }}>{s}</span>
                          </div>
                        ))}
                      </div>

                      <button style={{ width:"100%", padding:"11px", borderRadius:12, background:active ? p.gradient : "transparent", border:`1.5px solid ${p.color}`, color:active ? "#fff" : p.color, fontWeight:700, fontSize:12, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6, transition:"all .2s", fontFamily:"DM Sans, sans-serif", boxShadow:active ? `0 8px 24px ${p.glow}` : "none" }}>
                        Get Started <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px 80px" }}>
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <h2 className="bebas" style={{ fontSize:42, color:"#fff", marginBottom:6 }}>Full Feature Comparison</h2>
            <p style={{ color:"#475569", fontSize:13 }}>Every detail, side by side — zero hidden extras</p>
          </div>

          <div style={{ borderRadius:22, overflow:"hidden", background:"#080d1b", border:"1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%", minWidth:600, borderCollapse:"collapse" }}>
                <thead>
                  <tr style={{ background:"#0c1322", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                    <th style={{ textAlign:"left", padding:"16px 20px", fontSize:11, fontWeight:600, color:"#334155", width:200 }}>Feature</th>
                    {plans.map(p => (
                      <th key={p.id} style={{ padding:"14px 12px", textAlign:"center" }}>
                        <div style={{ fontSize:10, fontWeight:800, letterSpacing:"0.8px", textTransform:"uppercase", color:p.color, marginBottom:3 }}>{p.name}</div>
                        <div className="bebas" style={{ fontSize:20, color:"#fff" }}>{p.price}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sections.map((section, si) => (
                    <>
                      {/* Section header row */}
                      <tr key={`sec-${si}`} className="section-header" onClick={() => toggleSection(si)} style={{ borderTop:"1px solid rgba(255,255,255,0.07)", background:"rgba(255,255,255,0.02)" }}>
                        <td colSpan={5} style={{ padding:"10px 20px" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                            <span style={{ fontSize:15 }}>{section.icon}</span>
                            <span style={{ fontSize:12, fontWeight:700, color:"#94a3b8", letterSpacing:"0.5px", textTransform:"uppercase" }}>{section.title}</span>
                            <span style={{ marginLeft:"auto", color:"#334155" }}>
                              {openSections[si] ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                            </span>
                          </div>
                        </td>
                      </tr>
                      {/* Section rows */}
                      {openSections[si] !== false && section.rows.map((row, ri) => (
                        <tr key={`${si}-${ri}`} className="trow" style={{ borderTop:"1px solid rgba(255,255,255,0.025)" }}>
                          <td style={{ padding:"10px 20px 10px 32px" }}>
                            <span style={{ fontSize:12, color:"#64748b", fontWeight:500 }}>{row.label}</span>
                          </td>
                          {row.vals.map((v, vi) => (
                            <td key={vi} style={{ padding:"10px 12px", textAlign:"center" }}>
                              <Val v={v} color={plans[vi].color} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div style={{ padding:"0 24px 80px" }}>
          <div style={{ maxWidth:720, margin:"0 auto", position:"relative" }}>
            <div className="spin-border" style={{ position:"absolute", inset:-1.5, borderRadius:26, opacity:.35, filter:"blur(2px)" }} />
            <div style={{ position:"relative", borderRadius:24, overflow:"hidden", padding:"52px 40px", textAlign:"center", background:"linear-gradient(135deg,#090f1e,#0d1629)", border:"1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 50% at 50% 100%,rgba(96,165,250,.12),transparent)", pointerEvents:"none" }} />
              <div className="drift" style={{ width:52, height:52, borderRadius:16, background:"linear-gradient(135deg,#2563eb,#34d399)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", boxShadow:"0 0 40px rgba(37,99,235,.4)" }}>
                <HeartHandshake size={24} style={{ color:"#fff" }} />
              </div>
              <h3 className="bebas" style={{ fontSize:40, color:"#fff", marginBottom:10 }}>Ready to Build Your Community?</h3>
              <p style={{ color:"#475569", fontSize:14, lineHeight:1.7, maxWidth:420, margin:"0 auto 28px" }}>
                Talk to a social media strategist and get a free audit of your current brand presence — no strings attached.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
                <button className="spin-border" style={{ padding:"13px 28px", borderRadius:14, color:"#fff", fontSize:13, fontWeight:800, border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontFamily:"DM Sans, sans-serif" }}>
                  Start Growing <ArrowRight size={14} />
                </button>
                <button style={{ padding:"13px 28px", borderRadius:14, fontSize:13, fontWeight:700, color:"#64748b", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", cursor:"pointer", fontFamily:"DM Sans, sans-serif" }}
                  onMouseEnter={e => e.currentTarget.style.color="#fff"} onMouseLeave={e => e.currentTarget.style.color="#64748b"}>
                  💬 Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}