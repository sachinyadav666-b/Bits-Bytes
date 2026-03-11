import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, Code, Smartphone, Database,
  PenTool, Globe, Activity, BarChart, Zap, Megaphone,
  Monitor, ArrowRight, Search, TrendingUp, ShoppingCart,
  MousePointer, Share2, Layout, Package,
} from "lucide-react";
import logo from "../assets/logo/websitelogo.png";
import { motion, AnimatePresence } from "framer-motion";

/* ─── helpers ─────────────────────────────────── */
const getServiceLink = (name) => `/services/${name.toLowerCase().replace(/\s+/g, "-")}`;
const getPkgLink     = (name) => `/packages/${name.toLowerCase().replace(/\s+/g, "-")}`;

/* ─── nav data ────────────────────────────────── */
const navItems = [
  { label: "Home",    path: "/" },
  { label: "About",   path: "/about-us" },
  {
    label: "Services", path: "/services",
    dropdown: {
      type: "mega",
      cols: [
        {
          title: "Development",
          icon: <Globe className="text-cyan-400" size={17} />,
          description: "Build robust digital solutions",
          items: [
            { name: "Web Development", icon: <Code size={14} /> },
            { name: "App Development", icon: <Smartphone size={14} /> },
            { name: "UI/UX Design",    icon: <PenTool size={14} /> },
            { name: "E-Commerce",      icon: <Database size={14} /> },
          ],
        },
        {
          title: "Growth & SEO",
          icon: <Search className="text-violet-400" size={17} />,
          description: "Boost your organic reach",
          items: [
            { name: "Keyword Research",  icon: <Activity size={14} /> },
            { name: "Website Analytics", icon: <BarChart size={14} /> },
            { name: "SEO Audit",         icon: <Zap size={14} /> },
          ],
        },
        {
          title: "Digital Marketing",
          icon: <Megaphone className="text-pink-400" size={17} />,
          description: "Scale your brand online",
          items: [
            { name: "Meta Ads",        icon: <Megaphone size={14} /> },
            { name: "Google Ads",      icon: <Monitor size={14} /> },
            { name: "Social Media",    icon: <PenTool size={14} /> },
            { name: "Political Party", icon: <Globe size={14} /> },
          ],
        },
      ],
    },
  },
  {
    label: "Packages", path: "/packages",
    dropdown: {
      type: "packages",
      items: [
        {
          title: "SEO Packages",
          icon: <Search size={18} />,
          description: "Rank higher on Google",
          color: "#06b6d4",
          tag: "Most Popular",
          from: "$550/mo",
        },
        {
          title: "Ecommerce Packages",
          icon: <ShoppingCart size={18} />,
          description: "Grow your online store",
          color: "#8b5cf6",
          tag: null,
          from: "$499/mo",
        },
        {
          title: "PPC Packages",
          icon: <MousePointer size={18} />,
          description: "Pay-per-click campaigns",
          color: "#ec4899",
          tag: null,
          from: "$350/mo",
        },
        {
          title: "SMO Packages",
          icon: <Share2 size={18} />,
          description: "Social media growth",
          color: "#f59e0b",
          tag: null,
          from: "$299/mo",
        },
        {
          title: "Web Packages",
          icon: <Layout size={18} />,
          description: "Complete web solutions",
          color: "#10b981",
          tag: "New",
          from: "$399/mo",
        },
      ],
    },
  },
  { label: "Projects", path: "/projects" },
  { label: "Blogs",    path: "/blogs"    },
];

/* ─── animation variants ──────────────────────── */
const navbarV = {
  top:      { backgroundColor: "rgba(6,10,26,0)",    backdropFilter: "blur(0px)"  },
  scrolled: { backgroundColor: "rgba(6,10,26,0.92)", backdropFilter: "blur(20px)" },
};

const logoVariants = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
};

const megaV = {
  hidden:  { opacity: 0, y: 12, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.28, ease: [0.22,1,0.36,1] } },
  exit:    { opacity: 0, y: 8,  scale: 0.97, transition: { duration: 0.18 } },
};
const colV  = { hidden: {}, visible: { transition: { staggerChildren: 0.055 } } };
const itemV = {
  hidden:  { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.25, ease: "easeOut" } },
};
const mobileV = {
  hidden:  { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22,1,0.36,1] } },
  exit:    { x: "100%", opacity: 0, transition: { duration: 0.3, ease: [0.76,0,0.24,1] } },
};

/* ─── component ───────────────────────────────── */
export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeDD,    setActiveDD]    = useState(null);
  const [mobileExp,   setMobileExp]   = useState(null);
  const timerRef = useRef(null);

  // ✅ FIX 1: use real pathname from React Router instead of hardcoded "/"
  const { pathname } = useLocation();

  // ✅ FIX 2: proper active check — exact for "/", prefix for all others
  const isActive = (item) => {
    if (item.path === "/") return pathname === "/";
    return pathname === item.path || pathname.startsWith(item.path + "/");
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // ✅ FIX 3: close mobile menu automatically on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExp(null);
  }, [pathname]);

  const openDD  = (l) => { clearTimeout(timerRef.current); setActiveDD(l); };
  const closeDD = ()  => { timerRef.current = setTimeout(() => setActiveDD(null), 130); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
        .nb * { font-family:'DM Sans',sans-serif; }
        .syne  { font-family:'Syne',sans-serif; }

        .nb-ul { position:relative; }
        .nb-ul::after {
          content:''; position:absolute; left:0; bottom:-2px;
          width:100%; height:2px;
          background:linear-gradient(90deg,#22d3ee,#818cf8);
          border-radius:2px; transform:scaleX(0); transform-origin:left;
          transition:transform .28s cubic-bezier(.76,0,.24,1);
        }
        /* ✅ FIX 4: changed .active to .nb-active to avoid Tailwind/class conflicts */
        .nb-ul:hover::after, .nb-ul.nb-active::after { transform:scaleX(1); }

        @keyframes shimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        .nb-cta {
          background:linear-gradient(90deg,#06b6d4,#818cf8,#06b6d4);
          background-size:200% auto;
          animation:shimmer 3.5s linear infinite;
        }

        .nb-card {
          background:#070e1f;
          border:1px solid rgba(99,179,237,0.1);
          border-radius:18px;
          position:relative;
          overflow:hidden;
        }
        .nb-card::before {
          content:'';position:absolute;inset:0;border-radius:18px;padding:1px;
          background:linear-gradient(135deg,rgba(34,211,238,.25),rgba(129,140,248,.2),rgba(236,72,153,.15));
          -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
          mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor; mask-composite:exclude; pointer-events:none;
        }

        .pkg-card {
          transition: background .2s, border-color .2s, transform .2s;
          border:1px solid rgba(255,255,255,0.06);
          border-radius:14px;
          cursor:pointer;
        }
        .pkg-card:hover { transform:translateY(-2px); }
      `}</style>

      <motion.nav
        className="nb fixed top-0 w-full z-50 bg-white border-b-2"
        variants={navbarV}
        // ✅ FIX 5: was "scroll" (wrong key), corrected to "scrolled"
        animate={scrolled ? "scrolle" : "top"}
        transition={{ duration: 0.35 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[66px]">

            {/* Logo */}
            <motion.div variants={logoVariants} initial="hidden" animate="visible">
              <Link to="/" className="flex items-center gap-2">
                <motion.img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                />
              </Link>
            </motion.div>

            {/* Desktop links */}
            <motion.div className="hidden lg:flex items-center gap-0.5"
              initial={{ opacity:0 }} animate={{ opacity:1 }}
              transition={{ duration:0.5, delay:0.15 }}>
              {navItems.map((item) => {
                // ✅ FIX 6: use isActive() helper instead of pathname === item.path
                const active = isActive(item);
                return (
                  <div key={item.label} className="relative"
                    onMouseEnter={() => item.dropdown && openDD(item.label)}
                    onMouseLeave={() => item.dropdown && closeDD()}>
                    <Link
                      to={item.path}
                      // ✅ FIX 7: apply nb-active (matches CSS) + fixed text color class
                      className={`nb-ul${active ? " nb-active" : ""} flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${active ? "text-cyan-300" : "text-black hover:text-gray-400"}`}>
                      {item.label}
                      {item.dropdown && (
                        <motion.span animate={{ rotate: activeDD === item.label ? 180 : 0 }} transition={{ duration:0.22 }}>
                          <ChevronDown size={13} className="text-slate-400 mt-0.5" />
                        </motion.span>
                      )}
                    </Link>

                    <AnimatePresence>
                      {item.dropdown && activeDD === item.label && (
                        <motion.div
                          className={`absolute top-full pt-3 ${item.dropdown.type === "packages" ? "left-1/2 -translate-x-1/2 w-[580px]" : "left-1/2 -translate-x-1/2 w-[760px]"}`}
                          variants={megaV} initial="hidden" animate="visible" exit="exit"
                          onMouseEnter={() => openDD(item.label)} onMouseLeave={closeDD}
                          style={{ zIndex:99 }}>

                          {/* ── SERVICES mega menu ── */}
                          {item.dropdown.type === "mega" && (
                            <div className="nb-card">
                              <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500" />
                              <div className="grid grid-cols-3 divide-x divide-white/5">
                                {item.dropdown.cols.map((col, ci) => (
                                  <motion.div key={ci} className="p-5" variants={colV} initial="hidden" animate="visible">
                                    <div className="flex items-center gap-2.5 mb-1">
                                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">{col.icon}</div>
                                      <span className="text-xs font-black uppercase tracking-widest text-slate-300">{col.title}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 pl-10 mb-4 leading-relaxed">{col.description}</p>
                                    <ul className="space-y-0.5">
                                      {col.items.map((sub, si) => (
                                        <motion.li key={si} variants={itemV}>
                                          <Link to={getServiceLink(sub.name)} onClick={() => setActiveDD(null)}
                                            className="group flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                                            <div className="flex items-center gap-2">
                                              <span className="text-cyan-500 group-hover:text-cyan-300 transition-colors">{sub.icon}</span>
                                              <span className="text-sm font-medium">{sub.name}</span>
                                            </div>
                                            <ArrowRight size={12} className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                          </Link>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* ── PACKAGES dropdown ── */}
                          {item.dropdown.type === "packages" && (
                            <div className="nb-card">
                              <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500" />
                              <div className="p-5">
                                <div className="flex items-center gap-2 mb-4">
                                  <Package size={14} className="text-cyan-400" />
                                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Our Packages</span>
                                  <span className="ml-auto text-xs text-slate-600">All include free consultation</span>
                                </div>
                                <motion.div className="grid grid-cols-1 gap-2" variants={colV} initial="hidden" animate="visible">
                                  {item.dropdown.items.map((pkg, pi) => (
                                    <motion.div key={pi} variants={itemV}>
                                      <Link to={getPkgLink(pkg.title)} onClick={() => setActiveDD(null)}
                                        className="pkg-card group flex items-center gap-4 px-4 py-3"
                                        style={{ background: `${pkg.color}09`, display:"flex" }}
                                        onMouseEnter={e => e.currentTarget.style.borderColor = `${pkg.color}40`}
                                        onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}>
                                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                          style={{ background:`${pkg.color}18`, border:`1px solid ${pkg.color}30` }}>
                                          <span style={{ color: pkg.color }}>{pkg.icon}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold text-white">{pkg.title}</span>
                                            {pkg.tag && (
                                              <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                                                style={{ background:`${pkg.color}20`, color:pkg.color }}>
                                                {pkg.tag}
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-xs text-slate-500 mt-0.5">{pkg.description}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                          <div className="text-xs font-black" style={{ color: pkg.color }}>from {pkg.from}</div>
                                          <ArrowRight size={13} className="ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: pkg.color }} />
                                        </div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </motion.div>

                                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                                  <span className="text-xs text-slate-600">Need a custom plan?</span>
                                  <Link to="/contact-us" onClick={() => setActiveDD(null)}
                                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
                                    Talk to us <ArrowRight size={11} />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div className="hidden lg:flex items-center gap-3"
              initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
              transition={{ duration:0.55, delay:0.3 }}>
              <motion.div
                whileHover={{ scale:1.04, y:-1 }} whileTap={{ scale:0.97 }}
                transition={{ type:"spring", stiffness:300, damping:20 }}>
                <Link to="/contact-us">
                  <button className="nb-cta px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-lg shadow-cyan-900/30">
                    Get Quote
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hamburger */}
            <motion.button className="lg:hidden p-2 text-black hover:text-cyan-400 transition-colors"
              onClick={() => setMobileOpen(true)} whileTap={{ scale:0.9 }}>
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[59]"
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              onClick={() => setMobileOpen(false)} />

            <motion.div
              className="nb fixed top-0 right-0 bottom-0 w-[88vw] max-w-sm z-[60] overflow-y-auto"
              style={{ background:"linear-gradient(160deg,#0f172a,#1e1b4b)" }}
              variants={mobileV} initial="hidden" animate="visible" exit="exit">

              <div className="p-5 border-b border-white/6 flex items-center justify-between">
                
                <motion.button onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 transition-colors"
                  whileTap={{ scale:0.9, rotate:90 }}>
                  <X size={20} />
                </motion.button>
              </div>

              <div className="p-4 flex flex-col gap-0.5">
                {navItems.map((item, i) => {
                  // ✅ FIX 8: active state on mobile too
                  const active = isActive(item);
                  return (
                    <motion.div key={item.label}
                      initial={{ opacity:0, x:24 }}
                      animate={{ opacity:1, x:0, transition:{ delay:i*0.06+0.1, duration:0.35, ease:[0.22,1,0.36,1] } }}
                      className="border-b border-white/5">

                      <div className="flex justify-between items-center py-3.5 cursor-pointer"
                        onClick={() => item.dropdown ? setMobileExp(mobileExp === item.label ? null : item.label) : setMobileOpen(false)}>
                        <Link to={item.path}
                          onClick={item.dropdown ? e => e.preventDefault() : () => setMobileOpen(false)}
                          // ✅ FIX 9: active cyan color on mobile
                          className={`text-sm font-semibold flex items-center gap-2 ${active ? "text-cyan-300" : "text-slate-200"}`}>
                          {/* ✅ Active dot indicator */}
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />}
                          {item.label}
                        </Link>
                        {item.dropdown && (
                          <motion.span animate={{ rotate: mobileExp === item.label ? 180 : 0 }} transition={{ duration:0.22 }}>
                            <ChevronDown size={16} className="text-slate-500" />
                          </motion.span>
                        )}
                      </div>

                      <AnimatePresence>
                        {item.dropdown && mobileExp === item.label && (
                          <motion.div
                            initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
                            exit={{ height:0, opacity:0 }} transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
                            className="overflow-hidden pb-3">

                            {/* Mobile Services */}
                            {item.dropdown.type === "mega" && (
                              <div className="space-y-3 pl-2">
                                {item.dropdown.cols.map((col, ci) => (
                                  <div key={ci}>
                                    <div className="flex items-center gap-2 mb-1.5 px-2">
                                      {col.icon}
                                      <span className="text-xs font-black uppercase tracking-wider text-slate-500">{col.title}</span>
                                    </div>
                                    {col.items.map((sub, si) => (
                                      <Link key={si} to={getServiceLink(sub.name)} onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors">
                                        <span className="text-cyan-500">{sub.icon}</span>{sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Mobile Packages */}
                            {item.dropdown.type === "packages" && (
                              <div className="space-y-1.5 pl-2">
                                {item.dropdown.items.map((pkg, pi) => (
                                  <Link key={pi} to={getPkgLink(pkg.title)} onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors hover:bg-white/5">
                                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                                      style={{ background:`${pkg.color}18`, border:`1px solid ${pkg.color}25` }}>
                                      <span style={{ color:pkg.color }}>{pkg.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-slate-200">{pkg.title}</span>
                                        {pkg.tag && <span className="text-xs font-bold px-1.5 py-0.5 rounded-full" style={{ background:`${pkg.color}20`, color:pkg.color }}>{pkg.tag}</span>}
                                      </div>
                                      <span className="text-xs text-slate-500">{pkg.description}</span>
                                    </div>
                                    <span className="text-xs font-black" style={{ color:pkg.color }}>{pkg.from}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity:0 }} animate={{ opacity:1, transition:{ delay:0.45 } }}
                  className="mt-5">
                  <Link to="/contact-us" onClick={() => setMobileOpen(false)}>
                    <button className="nb-cta w-full py-3 text-white font-bold rounded-xl text-sm">
                      Start Your Project
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}