import { useState } from "react";
import { Check, X, Zap, Target, TrendingUp, Flame, ArrowRight, ChevronDown, ChevronUp, Sparkles, MousePointer2, BarChart3, Globe2 } from "lucide-react";

const plans = [
  {
    id: "starter", name: "PPC-STARTER", price: "$339", tagline: "Launch your campaigns",
    color: "#22d3ee", glow: "rgba(34,211,238,0.18)", gradient: "linear-gradient(135deg,#0891b2,#22d3ee)",
    icon: Zap, tag: null, highlight: false,
    summary: ["Setup Fee: $200", "$0–$2,999 Ad Budget", "1 Optimization/mo", "Up to 5 Ad Groups"],
  },
  {
    id: "serious", name: "PPC-SERIOUS", price: "$439", tagline: "Scale your results",
    color: "#a78bfa", glow: "rgba(167,139,250,0.18)", gradient: "linear-gradient(135deg,#7c3aed,#a78bfa)",
    icon: Target, tag: "Most Popular", highlight: true,
    summary: ["Setup Fee: $350", "$3k–$4,999 Ad Budget", "2 Optimizations/mo", "Up to 10 Ad Groups"],
  },
  {
    id: "strategy", name: "PPC-STRATEGY", price: "$639", tagline: "Dominate your niche",
    color: "#fb923c", glow: "rgba(251,146,60,0.18)", gradient: "linear-gradient(135deg,#ea580c,#fb923c)",
    icon: TrendingUp, tag: null, highlight: false,
    summary: ["Setup Fee: $500", "$5k–$7,500 Ad Budget", "3 Optimizations/mo", "Up to 20 Ad Groups"],
  },
  {
    id: "steroid", name: "PPC-STEROID", price: "$939", tagline: "Maximum firepower",
    color: "#f43f5e", glow: "rgba(244,63,94,0.18)", gradient: "linear-gradient(135deg,#be123c,#f43f5e)",
    icon: Flame, tag: "Max Power", highlight: false,
    summary: ["Setup Fee: $750", "$7,500–$10k Ad Budget", "5 Optimizations/mo", "Up to 40 Ad Groups"],
  },
];

const rows = [
  { label: "Setup Fee",           icon: "💳", vals: ["$200", "$350", "$500", "$750"] },
  { label: "Advertising Budget",  icon: "💰", vals: ["$0–$2,999/mo", "$3k–$4,999/mo", "$5k–$7,500/mo", "$7,500–$10k/mo"] },
  { label: "Full Optimizations",  icon: "⚡", vals: ["1 / month", "2 / month", "3 / month", "5 / month"] },
  { label: "Ad Groups",           icon: "📁", vals: ["Up to 5", "Up to 10", "Up to 20", "Up to 40"] },
  { label: "Ads per Ad Group",    icon: "📝", vals: ["2 (No A/B)", "3 (No A/B)", "4 Ads", "6 Ads"] },
  { label: "Keywords",            icon: "🔑", vals: ["Up to 50", "Up to 100", "Up to 200", "Up to 750"] },
  { label: "Negative Keywords",   icon: "🚫", vals: [true, true, true, true] },
  { label: "Conversion Tracking", icon: "📊", vals: [true, true, true, true] },
  { label: "Monthly Reporting",   icon: "📋", vals: [true, true, true, true] },
  { label: "No Contracts",        icon: "🤝", vals: [true, true, true, true] },
  { label: "Ad Networks",         icon: "🌐", vals: ["Google", "Google", "Google & Bing", "Google, Bing & FB"] },
  { label: "Mobile Ads",          icon: "📱", vals: [false, false, false, true] },
  { label: "Call Extensions",     icon: "📞", vals: [true, true, true, true] },
  { label: "Sitelink Extensions", icon: "🔗", vals: [true, true, true, true] },
  { label: "Remarketing",         icon: "🎯", vals: [false, true, true, true] },
  { label: "Conference Calls",    icon: "📅", vals: [false, true, true, true] },
  { label: "Display / Image Ads", icon: "🖼️", vals: [false, false, false, "2 Ads/month"] },
];

const Val = ({ v, color }) => {
  if (v === true)  return <div style={{ display:"flex", justifyContent:"center" }}><div style={{ width:22, height:22, borderRadius:"50%", background:`${color}18`, border:`1px solid ${color}38`, display:"flex", alignItems:"center", justifyContent:"center" }}><Check size={11} style={{ color }} strokeWidth={3} /></div></div>;
  if (v === false) return <div style={{ display:"flex", justifyContent:"center" }}><div style={{ width:22, height:22, borderRadius:"50%", background:"rgba(255,255,255,0.03)", display:"flex", alignItems:"center", justifyContent:"center" }}><X size={10} style={{ color:"#334155" }} strokeWidth={2.5} /></div></div>;
  return <div style={{ display:"flex", justifyContent:"center", padding:"0 4px" }}><span style={{ fontSize:11, fontWeight:600, color:"#94a3b8", textAlign:"center", lineHeight:1.3 }}>{v}</span></div>;
};

export default function PpcPackages() {
  const [hovered, setHovered] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? rows : rows.slice(0, 10);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .ppc * { box-sizing: border-box; margin: 0; padding: 0; }
        .ppc { font-family: 'DM Sans', sans-serif; background: #05080f; min-height: 100vh; color: #fff; }
        .bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 1.5px; }

        @keyframes drift { 0%,100%{transform:translateY(0) rotate(0)} 40%{transform:translateY(-10px) rotate(.8deg)} 70%{transform:translateY(-5px) rotate(-.5deg)} }
        @keyframes spin-bg { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(120vh)} }

        .drift { animation: drift 7s ease-in-out infinite; }
        .card-lift { transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s; }
        .card-lift:hover { transform: translateY(-6px); }
        .spin-border { background: linear-gradient(90deg,#22d3ee,#a78bfa,#fb923c,#f43f5e,#22d3ee); background-size:300% 300%; animation: spin-bg 4s linear infinite; }

        .trow { transition: background .15s; }
        .trow:hover td { background: rgba(255,255,255,0.025); }

        ::-webkit-scrollbar { width:3px; height:3px; }
        ::-webkit-scrollbar-thumb { background:#1e293b; border-radius:99px; }

        @media(max-width:860px) { .plan-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:480px) { .plan-grid { grid-template-columns: 1fr !important; } .hero-h1 { font-size: 52px !important; } }
      `}</style>

      <div className="ppc">

        {/* HERO */}
        <div style={{ position:"relative", overflow:"hidden", padding:"80px 24px 60px" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }} />
          <div style={{ position:"absolute", inset:0, overflow:"hidden", opacity:.025, pointerEvents:"none" }}>
            <div style={{ position:"absolute", width:"100%", height:"2px", background:"#22d3ee", animation:"scanline 8s linear infinite" }} />
          </div>
          <div style={{ position:"absolute", top:-60, left:"15%", width:500, height:500, background:"radial-gradient(circle,rgba(167,139,250,.08),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", top:0, right:"10%", width:380, height:380, background:"radial-gradient(circle,rgba(34,211,238,.07),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />

          <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center", position:"relative" }}>
            <div className="drift" style={{ display:"flex", justifyContent:"center", gap:12, marginBottom:28 }}>
              {[{ I:MousePointer2, c:"#22d3ee" },{ I:BarChart3, c:"#a78bfa" },{ I:Globe2, c:"#fb923c" }].map(({ I, c }, i) => (
                <div key={i} style={{ width:46, height:46, borderRadius:14, background:`${c}12`, border:`1px solid ${c}28`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 0 24px ${c}18` }}>
                  <I size={20} style={{ color:c }} />
                </div>
              ))}
            </div>

            <div style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"5px 16px", borderRadius:99, marginBottom:20, background:"rgba(34,211,238,.07)", border:"1px solid rgba(34,211,238,.18)", color:"#22d3ee", fontSize:11, fontWeight:700, letterSpacing:"1.2px" }}>
              <Sparkles size={11} /> Google Ads Certified · 8+ Years Experience
            </div>

            <h1 className="bebas hero-h1" style={{ fontSize:76, lineHeight:1, marginBottom:16, color:"#fff" }}>
              Cheap PPC Management<br />
              <span style={{ background:"linear-gradient(135deg,#22d3ee 20%,#a78bfa 55%,#f43f5e 90%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Pricing & Plans
              </span>
            </h1>
            <p style={{ color:"#475569", fontSize:15, lineHeight:1.75, maxWidth:500, margin:"0 auto 32px" }}>
              Stop waiting months for organic traffic. Get instant, measurable results with PPC campaigns managed by certified professionals.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:20 }}>
              {[["⚡","Instant Results"],["🎯","Certified Experts"],["📊","Full Transparency"],["🤝","No Contracts"]].map(([e,l]) => (
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
                      <h3 className="bebas" style={{ fontSize:20, color:"#fff", marginBottom:12 }}>{p.name}</h3>
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
                      {/* <button style={{ width:"100%", padding:"11px", borderRadius:12, background:active ? p.gradient : "transparent", border:`1.5px solid ${p.color}`, color:active ? "#fff" : p.color, fontWeight:700, fontSize:12, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6, transition:"all .2s", fontFamily:"DM Sans, sans-serif", boxShadow:active ? `0 8px 24px ${p.glow}` : "none" }}>
                        Get Started <ArrowRight size={12} />
                      </button> */}
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
              <table style={{ width:"100%", minWidth:580, borderCollapse:"collapse" }}>
                <thead>
                  <tr style={{ background:"#0c1322", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                    <th style={{ textAlign:"left", padding:"16px 20px", fontSize:11, fontWeight:600, color:"#334155", width:180 }}>Feature</th>
                    {plans.map(p => (
                      <th key={p.id} style={{ padding:"14px 12px", textAlign:"center" }}>
                        <div style={{ fontSize:10, fontWeight:800, letterSpacing:"0.8px", textTransform:"uppercase", color:p.color, marginBottom:3 }}>{p.name}</div>
                        <div className="bebas" style={{ fontSize:20, color:"#fff" }}>{p.price}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visible.map((row, ri) => (
                    <tr key={ri} className="trow" style={{ borderTop:"1px solid rgba(255,255,255,0.03)" }}>
                      <td style={{ padding:"11px 20px" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                          <span style={{ fontSize:14 }}>{row.icon}</span>
                          <span style={{ fontSize:12, color:"#64748b", fontWeight:500 }}>{row.label}</span>
                        </div>
                      </td>
                      {row.vals.map((v, vi) => (
                        <td key={vi} style={{ padding:"11px 12px", textAlign:"center" }}>
                          <Val v={v} color={plans[vi].color} />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
                    <td colSpan={5} style={{ padding:"12px 20px", textAlign:"center" }}>
                      <button onClick={() => setShowAll(v => !v)} style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:12, fontWeight:700, color:"#475569", background:"none", border:"none", cursor:"pointer", fontFamily:"DM Sans, sans-serif" }}
                        onMouseEnter={e => e.currentTarget.style.color="#94a3b8"} onMouseLeave={e => e.currentTarget.style.color="#475569"}>
                        {showAll ? <><ChevronUp size={14} />Show Less</> : <><ChevronDown size={14} />Show All {rows.length} Features</>}
                      </button>
                    </td>
                  </tr>
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
              <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 50% at 50% 100%,rgba(167,139,250,.12),transparent)", pointerEvents:"none" }} />
              <div className="drift" style={{ width:52, height:52, borderRadius:16, background:"linear-gradient(135deg,#7c3aed,#22d3ee)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", boxShadow:"0 0 40px rgba(124,58,237,.4)" }}>
                <BarChart3 size={24} style={{ color:"#fff" }} />
              </div>
              <h3 className="bebas" style={{ fontSize:40, color:"#fff", marginBottom:10 }}>Ready to Dominate Search?</h3>
              <p style={{ color:"#475569", fontSize:14, lineHeight:1.7, maxWidth:420, margin:"0 auto 28px" }}>
                Talk to a certified Google Ads expert and get a free audit of your current campaigns — no strings attached.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
                <button className="spin-border" style={{ padding:"13px 28px", borderRadius:14, color:"#fff", fontSize:13, fontWeight:800, border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontFamily:"DM Sans, sans-serif" }}>
                  Start Your Campaign <ArrowRight size={14} />
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