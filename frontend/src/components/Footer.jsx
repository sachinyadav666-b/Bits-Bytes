import React, { useRef, useState } from 'react'
import {
  Facebook, Twitter, Instagram, Linkedin,
  Mail, Phone, ArrowRight, MapPin, Sparkles, Send
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  motion, useInView, useMotionValue, useTransform, AnimatePresence
} from 'framer-motion'
import logo from '../assets/logo/websitelogo.png'

/* ─── data ──────────────────────────────────────────────── */
const socialLinks = [
  { icon: <Facebook size={17}/>,  url: 'https://www.facebook.com/bitsandbytesitsolution',      name: 'Facebook',  color: '#1877F2' },
  { icon: <Twitter size={17}/>,   url: 'https://twitter.com/your-handle',                       name: 'Twitter',   color: '#1DA1F2' },
  { icon: <Instagram size={17}/>, url: 'https://www.instagram.com/bits_and_bytes_it_solution',  name: 'Instagram', color: '#E1306C' },
  { icon: <Linkedin size={17}/>,  url: 'https://in.linkedin.com/company/bits-and-bytes-it-solution', name: 'LinkedIn', color: '#0A66C2' },
]

const quickLinks = [
  { name: 'Home',     path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blogs',    path: '/blogs' },
]

const servicesLinks = [
  { name: 'Web Development', path: '/services/web-development' },
  { name: 'Google Ads',      path: '/services/google-ads' },
  { name: 'App Development', path: '/services/app-development' },
  { name: 'Social Media',    path: '/services/social-media' },
  { name: 'SEO Audit',       path: '/services/seo-audit' },
]

/* ─── animation variants ────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}

const colVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const listVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const listItemVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const bottomBarVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

/* ─── Magnetic Social Button ────────────────────────────── */
const MagneticSocial = ({ icon, url, name, color }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.4)
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.4)
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center
                 bg-white/5 border border-white/10 text-slate-400
                 hover:text-white hover:border-white/20 transition-colors duration-200 group overflow-hidden"
    >
      {/* glow fill on hover */}
      <motion.span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{ background: `radial-gradient(circle at center, ${color}33 0%, transparent 75%)` }}
      />
      <span className="relative z-10">{icon}</span>
    </motion.a>
  )
}

/* ─── Newsletter ─────────────────────────────────────────── */
const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  const handleSubmit = () => {
    if (!email || !email.includes('@')) { setStatus('error'); return }
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus(null), 3500)
  }

  return (
    <div>
      <div className="relative flex items-center mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus(null) }}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="your@email.com"
          className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white
                      placeholder-slate-500 outline-none transition-all duration-200
                      ${status === 'error' ? 'border-red-500/60' : 'border-white/10 focus:border-cyan-500/50'}`}
        />
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="absolute right-2 p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600
                     text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow"
        >
          <Send size={14} />
        </motion.button>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            key="ok"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-cyan-400 mt-2 flex items-center gap-1"
          >
            <Sparkles size={11}/> You're subscribed — welcome aboard!
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            key="err"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-red-400 mt-2"
          >
            Please enter a valid email.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Main Footer ────────────────────────────────────────── */
const Footer = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');
        .ft-root { font-family: 'DM Sans', sans-serif; }
        .ft-brand { font-family: 'Syne', sans-serif; }

        @keyframes ft-beam {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .ft-beam-line::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(34,211,238,0.7), transparent);
          animation: ft-beam 4s ease-in-out infinite;
        }

        @keyframes ft-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        .ft-float { animation: ft-float 6s ease-in-out infinite; }

        .ft-link-line {
          position: relative;
          display: inline-block;
        }
        .ft-link-line::after {
          content: '';
          position: absolute;
          left: 0; bottom: -1px;
          width: 0; height: 1px;
          background: linear-gradient(90deg, #22d3ee, #818cf8);
          transition: width 0.35s cubic-bezier(0.76,0,0.24,1);
        }
        .ft-link-line:hover::after { width: 100%; }

        .ft-grid-bg {
          background-image:
            linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      <footer className="ft-root relative bg-[#060a1a] text-white overflow-hidden ft-grid-bg">

        {/* ── ambient glows ── */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full
                        bg-cyan-500/6 blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full
                        bg-violet-500/6 blur-[90px] pointer-events-none" />

        {/* ── top beam line ── */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent overflow-hidden ft-beam-line" />

        {/* ── BIG watermark text ── */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap">
          <span className="ft-brand text-[clamp(4rem,12vw,9rem)] font-black text-white/[0.025] tracking-tight">
            BITS&amp;BYTES
          </span>
        </div>

        {/* ── main grid ── */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="container mx-auto px-6 py-20 relative z-10
                     grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >

          {/* ── Col 1: Brand ── */}
          <motion.div variants={colVariants}>
            

            <p className="text-slate-400 text-sm leading-relaxed mb-7">
              Building digital products, brands &amp; experiences that connect
              with the future. Let's create something extraordinary together.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <MagneticSocial key={i} {...s} />
              ))}
            </div>

            {/* Contact mini */}
            <div className="mt-8 space-y-3">
              {[
                { icon: <Mail size={14}/>,   href: 'mailto:Info@bitsandbytesitsolution.com', text: 'Info@bitsandbytesitsolution.com' },
                { icon: <Phone size={14}/>,  href: 'tel:+918750788895',                     text: '+91 8750788895' },
                { icon: <MapPin size={14}/>, href: '#',                                     text: 'New Delhi, India' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2.5 text-xs text-slate-500 hover:text-cyan-400
                             transition-colors duration-200 group"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="text-cyan-500 group-hover:text-cyan-300 transition-colors flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.text}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Col 2: Quick Links ── */}
          <motion.div variants={colVariants}>
            <h3 className="ft-brand text-sm font-bold uppercase tracking-widest text-cyan-400 mb-6">
              Quick Links
            </h3>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-3"
            >
              {quickLinks.map((link) => (
                <motion.li key={link.name} variants={listItemVariants}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2.5 text-sm text-slate-400
                               hover:text-white transition-colors duration-200"
                  >
                    <motion.span
                      className="w-5 h-px bg-gradient-to-r from-cyan-500 to-violet-500 flex-shrink-0
                                 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                    <span className="ft-link-line">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── Col 3: Services ── */}
          <motion.div variants={colVariants}>
            <h3 className="ft-brand text-sm font-bold uppercase tracking-widest text-violet-400 mb-6">
              Services
            </h3>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-3"
            >
              {servicesLinks.map((item) => (
                <motion.li key={item.name} variants={listItemVariants}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2.5 text-sm text-slate-400
                               hover:text-white transition-colors duration-200"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0
                                 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-200"
                    />
                    <span className="ft-link-line">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA card */}
            <motion.div
              className="mt-8 p-4 rounded-xl border border-white/8 bg-white/3
                         relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, borderColor: 'rgba(34,211,238,0.25)' }}
              transition={{ duration: 0.25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-xs text-slate-400 mb-2 relative z-10">Ready to build something?</p>
              <Link
                to="/contact-us"
                className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5
                           hover:gap-2.5 transition-all duration-200 relative z-10"
              >
                Start a project <ArrowRight size={14}/>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Col 4: Newsletter ── */}
          <motion.div variants={colVariants}>
            <h3 className="ft-brand text-sm font-bold uppercase tracking-widest text-pink-400 mb-6">
              Stay Updated
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-1">
              Subscribe for the latest tech trends, insights &amp; company news.
            </p>

            <Newsletter />

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'SEO', 'Meta Ads'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.35 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10
                             text-slate-400 hover:text-white hover:border-cyan-500/30
                             transition-colors duration-200 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="relative h-px mx-6">
          <div className="h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          variants={bottomBarVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="container mx-auto px-6 py-6 flex flex-col sm:flex-row
                     items-center justify-between gap-4 relative z-10"
        >
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()}{' '}
            <span className="text-slate-400 font-medium">Bitsandbytesitsolutions</span>.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item, i) => (
              <Link
                key={i}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs text-slate-500 hover:text-cyan-400 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Handcrafted badge */}
          <motion.div
            className="flex items-center gap-1.5 text-xs text-slate-600"
            whileHover={{ color: '#22d3ee' }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="text-pink-500"
            >
              ♥
            </motion.span>
            Handcrafted in India
          </motion.div>
        </motion.div>
      </footer>
    </>
  )
}

export default Footer