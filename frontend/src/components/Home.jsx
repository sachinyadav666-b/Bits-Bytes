import './Home.css'
import './HeroSlider.css'
import React, { useState, useEffect, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Rocket,
  Globe,
  ArrowRight,
  Code,
  CheckCircle,
  Users,
  Award,
  ShieldCheck,
  Mail,
  Search,
  Palette,
  MessageSquare,
  Smartphone,
  TrendingUp,
  Star,
  Settings,
  Headphones,
  Sparkles,
  Target,
  BarChart3,
  Layers,
  Clock,
  Heart,
  CircleCheck,
  ArrowUpRight,
  ShoppingCart,
  Monitor,
  Building2,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Store,
  Factory,
  Plane,
  Car,
  Home as HomeIcon,
  ChevronRight,
  ChevronDown,
  BadgeCheck,
  Trophy,
  Lightbulb,
  Gauge,
  Lock,
  RefreshCw,
  MousePointer,
  Layout,
  Apple,
  PlayCircle,
  DollarSign,
  PieChart,
  Cloud
} from 'lucide-react'
import { OptimizedImage, SkeletonCard, preloadImages } from './shared/ImageOptimizer'

const BASE_API = 'https://bitsandbytes-sb2k.onrender.com'

// ==================== SEO STRUCTURED DATA ====================
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bits and Bytes IT Solution",
  "description": "Full-service digital marketing company delivering web development, app development, SEO, and performance marketing solutions in Noida, India.",
  "url": "https://bitsandbytesitsolution.com",
  "logo": "https://bitsandbytesitsolution.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/bitsandbytesitsolution",
    "https://www.instagram.com/bitsandbytesitsolution",
    "https://www.linkedin.com/company/bitsandbytesitsolution"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "India"
  }
}

// ==================== SIMPLIFIED HERO DATA ====================
const HERO_SLIDES = [
  {
    id: 1,
    badge: 'Digital Transformation',
    headline: 'Transform Your Business',
    highlightText: 'Into a Digital Powerhouse',
    description: 'We combine cutting-edge technology with creative strategies to deliver websites, apps, and marketing campaigns that drive real business growth.',
    cta: 'Start Your Journey',
    ctaLink: '/contact-us',
    secondaryCta: 'View Our Work',
    secondaryLink: '/portfolio',
    bgColor: 'bg-gradient-to-r from-blue-700 to-purple-700',
    accentColor: 'blue'
  },
  {
    id: 2,
    badge: 'Web Development',
    headline: 'Websites That',
    highlightText: 'Convert & Perform',
    description: 'High-performance websites built with React, Next.js & modern technologies. Lightning-fast, SEO-optimized, and designed to turn visitors into customers.',
    cta: 'Build Your Website',
    ctaLink: '/services/web-development',
    secondaryCta: 'See Examples',
    secondaryLink: '/portfolio',
    bgColor: 'bg-gradient-to-r from-green-700 to-blue-700',
    accentColor: 'green'
  },
  {
    id: 3,
    badge: 'App Development',
    headline: 'Mobile Apps That',
    highlightText: 'Users Love',
    description: 'Native iOS, Android & cross-platform apps built with Flutter & React Native. Stunning design, smooth performance, and features that engage users.',
    cta: 'Build Your App',
    ctaLink: '/services/app-development',
    secondaryCta: 'View Apps',
    secondaryLink: '/portfolio',
    bgColor: 'bg-gradient-to-r from-purple-700 to-pink-700',
    accentColor: 'purple'
  }
]

// ==================== SIMPLE HERO SLIDER COMPONENT ====================
const SimpleHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const slide = HERO_SLIDES[currentSlide]

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Simple Gradient Background */}
      <div className={`absolute inset-0 ${slide.bgColor} transition-all duration-700`} />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
        <div className="max-w-3xl pt-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            <Sparkles size={14} />
            {slide.badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {slide.headline}{' '}
            <span className="block text-yellow-300 mt-2">
              {slide.highlightText}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to={slide.ctaLink}>
              <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                {slide.cta}
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link to={slide.secondaryLink}>
              <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                {slide.secondaryCta}
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-300" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-300" />
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-blue-300" />
              <span>30+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-white' 
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Simple Service Quick Links */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Globe, label: 'Web Dev', link: '/services/web-development' },
              { icon: Smartphone, label: 'App Dev', link: '/services/app-development' },
              { icon: Target, label: 'Meta Ads', link: '/services/meta-ads' },
              { icon: BarChart3, label: 'Google Ads', link: '/services/google-ads' },
              { icon: Search, label: 'SEO', link: '/services/seo-services' }
            ].map((service, i) => (
              <Link 
                key={i} 
                to={service.link}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <service.icon size={16} />
                <span>{service.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== STATIC DATA ====================
const SERVICES_DATA = [
  {
    image: 'img/webdevelop.jpg',
    title: 'Web Development',
    desc: 'High-performance websites built with React, Next.js & modern frameworks for speed and SEO.',
    color: 'text-cyan-600',
    gradient: 'from-cyan-500 to-blue-500',
    bgLight: 'bg-cyan-50',
    border: 'border-cyan-100',
    icon: Globe,
    link: '/services/web-development',
    features: ['Full-Stack', 'PWA', 'Web Vitals']
  },
  {
    image: 'img/appdev.webp',
    title: 'App Development',
    desc: 'Native & cross-platform mobile applications (Flutter/React Native) built for performance.',
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500',
    bgLight: 'bg-purple-50',
    border: 'border-purple-100',
    icon: Smartphone,
    link: '/services/app-development',
    features: ['Native Apps', 'Cross-Platform', 'Offline-First']
  },
  {
    image: 'img/uiuxx.jpg',
    title: 'UI/UX Design',
    desc: 'Award-winning interfaces that deliver seamless user experiences and modern aesthetics.',
    color: 'text-pink-600',
    gradient: 'from-pink-500 to-rose-500',
    bgLight: 'bg-pink-50',
    border: 'border-pink-100',
    icon: Palette,
    link: '/services/ui-ux-design',
    features: ['User Research', 'Prototyping', 'Design Systems']
  },
  {
    image: 'img/ecomerce.webp',
    title: 'E-Commerce',
    desc: 'Custom online stores with secure payment gateways, inventory management & dashboards.',
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50',
    border: 'border-orange-100',
    icon: ShoppingCart,
    link: '/services/e-commerce',
    features: ['Custom Stores', 'Payment Gateway', 'Mobile-First']
  },
  {
    image: 'img/meta.jfif',
    title: 'Meta Ads',
    desc: 'High-converting Facebook & Instagram ad campaigns targeting your ideal customer base.',
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-indigo-500',
    bgLight: 'bg-blue-50',
    border: 'border-blue-100',
    icon: Target,
    link: '/services/meta-ads',
    features: ['Lead Gen', 'Retargeting', '5X ROAS']
  },
  {
    image: 'img/google.jpg',
    title: 'Google Ads',
    desc: 'Search, Display & YouTube ads optimized for maximum ROI and brand visibility.',
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-500',
    bgLight: 'bg-green-50',
    border: 'border-green-100',
    icon: BarChart3,
    link: '/services/google-ads',
    features: ['Search Ads', 'Display', 'YouTube']
  },
  {
    image: 'img/socialme.jpg',
    title: 'Social Media',
    desc: 'Reels, content creation, branding & organic account growth strategies.',
    color: 'text-rose-600',
    gradient: 'from-rose-500 to-red-500',
    bgLight: 'bg-rose-50',
    border: 'border-rose-100',
    icon: Users,
    link: '/services/social-media',
    features: ['Content', 'Engagement', 'Growth']
  },
  {
    image: 'img/seoo.jpg',
    title: 'SEO Services',
    desc: 'Keyword research, technical SEO & on-page optimization to rank #1 on Google.',
    color: 'text-teal-600',
    gradient: 'from-teal-500 to-cyan-500',
    bgLight: 'bg-teal-50',
    border: 'border-teal-100',
    icon: Search,
    link: '/services/seo-services',
    features: ['Technical SEO', 'On-Page', 'Link Building']
  },
  {
    image: 'img/research.jpg',
    title: 'Keyword Research',
    desc: 'In-depth analysis to find high-volume, low-competition keywords that drive targeted traffic.',
    color: 'text-amber-600',
    gradient: 'from-amber-500 to-yellow-500',
    bgLight: 'bg-amber-50',
    border: 'border-amber-100',
    icon: TrendingUp,
    link: '/services/keyword-research',
    features: ['Competitor Analysis', 'Long-tail', 'Intent Mapping']
  },
  {
    image: 'img/websiteanal.jpg',
    title: 'Website Analytics',
    desc: 'Comprehensive data tracking, user behavior analysis, and conversion rate optimization.',
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-violet-500',
    bgLight: 'bg-indigo-50',
    border: 'border-indigo-100',
    icon: PieChart,
    link: '/services/website-analytics',
    features: ['GA4 Setup', 'Heatmaps', 'CRO']
  },
  {
    image: 'img/politics.jpg',
    title: 'Political Marketing',
    desc: 'Digital war rooms, voter sentiment analysis & election campaign management.',
    color: 'text-red-600',
    gradient: 'from-red-500 to-rose-500',
    bgLight: 'bg-red-50',
    border: 'border-red-100',
    icon: Award,
    link: '/services/political-party',
    features: ['War Room', 'Sentiment Analysis', 'Campaigns']
  }
]

// ==================== WEB DEVELOPMENT DETAILS ====================
const WEB_DEV_FEATURES = [
  {
    icon: Code,
    title: 'Modern Tech Stack',
    desc: 'React, Next.js, Vue.js, Node.js - we use cutting-edge technologies that scale.'
  },
  {
    icon: Gauge,
    title: 'Lightning Fast',
    desc: '90+ PageSpeed scores guaranteed. Optimized for Core Web Vitals.'
  },
  {
    icon: Search,
    title: 'SEO-First Architecture',
    desc: 'Built-in SEO optimization, schema markup, and search engine friendly structure.'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    desc: 'SSL, HTTPS, secure authentication, and protection against common vulnerabilities.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Responsive design that looks stunning on every device and screen size.'
  },
  {
    icon: RefreshCw,
    title: 'Easy to Manage',
    desc: 'Custom CMS integration for effortless content updates without coding.'
  }
]

const WEB_DEV_TYPES = [
  { name: 'Corporate Websites', icon: Building2 },
  { name: 'Landing Pages', icon: Layout },
  { name: 'E-Commerce Platforms', icon: ShoppingCart },
  { name: 'Web Applications', icon: Monitor },
  { name: 'Portfolio Sites', icon: Briefcase },
  { name: 'Blog & News Portals', icon: MessageSquare }
]

// ==================== APP DEVELOPMENT DETAILS ====================
const APP_DEV_FEATURES = [
  {
    icon: Smartphone,
    title: 'Native Performance',
    desc: 'iOS (Swift) and Android (Kotlin) apps that feel natural and responsive.'
  },
  {
    icon: Layers,
    title: 'Cross-Platform Excellence',
    desc: 'Flutter & React Native apps - one codebase, two platforms, zero compromise.'
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    desc: 'AWS, Firebase, Azure - seamless backend integration for scalable apps.'
  },
  {
    icon: Lock,
    title: 'Secure by Design',
    desc: 'Biometric auth, encryption, and secure API communication.'
  },
  {
    icon: TrendingUp,
    title: 'Analytics Built-In',
    desc: 'Track user behavior, crashes, and performance in real-time.'
  }
]

const APP_DEV_TYPES = [
  { name: 'Consumer Apps', icon: Users },
  { name: 'Enterprise Solutions', icon: Building2 },
  { name: 'E-Commerce Apps', icon: ShoppingCart },
  { name: 'Social Networking', icon: MessageSquare },
  { name: 'Healthcare Apps', icon: Stethoscope }
]

// ==================== BUSINESS GROWTH DATA ====================
const GROWTH_METRICS = [
  {
    value: '300%',
    label: 'Average Lead Increase',
    desc: 'Our clients see 3x more qualified leads within 90 days',
    icon: TrendingUp,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    value: '5X',
    label: 'Return on Ad Spend',
    desc: 'For every ₹1 spent on ads, clients earn ₹5 back',
    icon: DollarSign,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    value: '40%',
    label: 'Cost Reduction',
    desc: 'Lower customer acquisition costs through optimization',
    icon: PieChart,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    value: '2X',
    label: 'Conversion Rate',
    desc: 'Double your website visitors-to-customers ratio',
    icon: Target,
    gradient: 'from-orange-500 to-red-500'
  }
]

const GROWTH_PILLARS = [
  {
    title: 'Visibility',
    desc: 'Get found by your target audience through SEO, paid ads, and social media presence.',
    icon: Globe,
    color: 'text-cyan-500',
    gradient: 'from-cyan-500 to-blue-500',
    metrics: ['Page 1 Rankings', '10X Organic Traffic', 'Brand Recognition']
  },
  {
    title: 'Engagement',
    desc: 'Convert visitors into leads with compelling content, UX design, and targeted messaging.',
    icon: MousePointer,
    color: 'text-purple-500',
    gradient: 'from-purple-500 to-pink-500',
    metrics: ['Higher CTR', 'Lower Bounce Rate', 'More Time on Site']
  },
  {
    title: 'Conversion',
    desc: 'Turn leads into customers with optimized funnels, retargeting, and persuasive CTAs.',
    icon: Target,
    color: 'text-orange-500',
    gradient: 'from-orange-500 to-red-500',
    metrics: ['2X Conversions', 'Lower CPL', 'Higher AOV']
  },
  {
    title: 'Retention',
    desc: 'Keep customers coming back with email marketing, loyalty programs, and exceptional UX.',
    icon: Heart,
    color: 'text-pink-500',
    gradient: 'from-pink-500 to-rose-500',
    metrics: ['Repeat Purchases', 'Brand Loyalty', 'Referrals']
  }
]

// ==================== INDUSTRY SOLUTIONS ====================
const INDUSTRIES = [
  { name: 'Healthcare', icon: Stethoscope, color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'E-Commerce', icon: ShoppingCart, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'Real Estate', icon: HomeIcon, color: 'text-green-500', bg: 'bg-green-50' },
  { name: 'Education', icon: GraduationCap, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'Manufacturing', icon: Factory, color: 'text-slate-500', bg: 'bg-slate-50' },
  { name: 'Travel & Tourism', icon: Plane, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { name: 'Automotive', icon: Car, color: 'text-purple-500', bg: 'bg-purple-50' },
  { name: 'Retail & FMCG', icon: Store, color: 'text-pink-500', bg: 'bg-pink-50' }
]

// ==================== TECHNOLOGY STACK ====================
const TECH_STACK = {
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' }
  ],
  backend: [
    { name: 'Node.js', icon: '💚' },
    { name: 'Python', icon: '🐍' },
    { name: 'PHP/Laravel', icon: '🐘' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' }
  ],
  mobile: [
    { name: 'Flutter', icon: '💙' },
    { name: 'React Native', icon: '⚛️' },
    { name: 'Swift', icon: '🍎' },
    { name: 'Kotlin', icon: '🤖' },
    { name: 'Firebase', icon: '🔥' }
  ],
  cloud: [
    { name: 'AWS', icon: '☁️' },
    { name: 'Google Cloud', icon: '🌐' },
    { name: 'Azure', icon: '📦' },
    { name: 'Vercel', icon: '▲' }
  ]
}

// ==================== CASE STUDY HIGHLIGHTS ====================
const CASE_STUDIES = [
  {
    client: 'TechStart India',
    industry: 'SaaS',
    challenge: 'Low online visibility and poor lead quality',
    solution: 'Complete digital overhaul with SEO + Google Ads',
    results: [
      { metric: '300%', label: 'Lead Increase' },
      { metric: '₹15', label: 'Cost Per Lead' },
      { metric: 'Page 1', label: 'Google Rankings' }
    ],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    client: 'StyleHub',
    industry: 'E-Commerce',
    challenge: 'Manual order processing, no mobile presence',
    solution: 'Custom e-commerce platform + mobile app',
    results: [
      { metric: '10K+', label: 'Monthly Orders' },
      { metric: '50K', label: 'App Downloads' },
      { metric: '4.8★', label: 'App Rating' }
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    client: 'GrowthCo',
    industry: 'B2B Services',
    challenge: 'High ad spend with low conversions',
    solution: 'Meta Ads optimization + landing page redesign',
    results: [
      { metric: '5X', label: 'ROAS Achieved' },
      { metric: '40%', label: 'Lower CPL' },
      { metric: '2X', label: 'Conversions' }
    ],
    gradient: 'from-orange-500 to-red-500'
  }
]

const BRANDS = [
  'img/aceo.png',
  'img/ahana.webp',
  'img/bioburg.png',
  'img/medigoza.jpeg',
  'img/microlab.png',
  'img/Shree Rame.svg',
  'img/vasu.webp'
]

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart India',
    quote: 'BitsAndBytes transformed our online presence. Our leads increased by 300% within 3 months!',
    avatar: 'RK',
    rating: 5,
    company: 'TechStart',
    result: '+300% Leads'
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, StyleHub',
    quote: 'The e-commerce solution they built handles 10,000+ orders monthly without any issues.',
    avatar: 'PS',
    rating: 5,
    company: 'StyleHub',
    result: '10K+ Orders/Month'
  },
  {
    name: 'Amit Patel',
    role: 'Marketing Head, GrowthCo',
    quote: "Their Meta Ads campaigns delivered 5x ROAS. Best digital marketing partner we've worked with.",
    avatar: 'AP',
    rating: 5,
    company: 'GrowthCo',
    result: '5X ROAS'
  },
  {
    name: 'Neha Gupta',
    role: 'Owner, FoodieExpress',
    quote: 'From app development to SEO, they handle everything. Our app has 50K+ downloads now!',
    avatar: 'NG',
    rating: 5,
    company: 'FoodieExpress',
    result: '50K+ Downloads'
  },
  {
    name: 'Dr. Sanjay Mehta',
    role: 'Director, MediCare Clinics',
    quote: 'Their healthcare marketing expertise helped us reach 3x more patients. Professional team!',
    avatar: 'SM',
    rating: 5,
    company: 'MediCare',
    result: '3X Patient Reach'
  },
  {
    name: 'Vikram Singh',
    role: 'MD, BuildRight Realty',
    quote: 'Lead quality improved dramatically. We now get serious buyers, not just inquiries.',
    avatar: 'VS',
    rating: 5,
    company: 'BuildRight',
    result: '70% Better Leads'
  }
]

const PROCESS_STEPS = [
  { 
    num: '01', 
    title: 'Discovery & Research', 
    desc: 'Deep-dive into your business, competitors, audience & market trends.',
    icon: Search,
    color: 'from-cyan-500 to-blue-500'
  },
  { 
    num: '02', 
    title: 'Strategy & Planning', 
    desc: 'Craft custom digital strategy, UI/UX layouts & technical roadmap.',
    icon: Target,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    num: '03', 
    title: 'Development & Testing', 
    desc: 'Build with clean, scalable code. Rigorous testing for perfection.',
    icon: Code,
    color: 'from-orange-500 to-red-500'
  },
  { 
    num: '04', 
    title: 'Launch & Optimize', 
    desc: 'Deploy & continuously optimize for growth and maximum ROI.',
    icon: Rocket,
    color: 'from-green-500 to-emerald-500'
  }
]

const WHY_CHOOSE_US = [
  { icon: Award, title: '5+ Years Experience', desc: 'Delivering excellence since 2020', gradient: 'from-cyan-500 to-blue-500', stat: '50+', statLabel: 'Projects' },
  { icon: Users, title: 'Expert Team', desc: 'Developers, designers & marketers', gradient: 'from-purple-500 to-pink-500', stat: '15+', statLabel: 'Experts' },
  { icon: TrendingUp, title: 'Fast Delivery', desc: 'Agile methodology, quick turnaround', gradient: 'from-orange-500 to-red-500', stat: '2-4', statLabel: 'Weeks' },
  { icon: ShieldCheck, title: '100% Secure', desc: 'Enterprise-grade data protection', gradient: 'from-green-500 to-emerald-500', stat: '99.9%', statLabel: 'Uptime' },
  { icon: Headphones, title: '24/7 Support', desc: 'Always available when you need', gradient: 'from-blue-500 to-indigo-500', stat: '24/7', statLabel: 'Available' },
  { icon: TrendingUp, title: 'ROI Focused', desc: 'Measurable business outcomes', gradient: 'from-pink-500 to-rose-500', stat: '300%', statLabel: 'Avg ROI' }
]

const FAQS = [
  { q: 'What services does Bits and Bytes IT Solution provide?', a: 'We offer comprehensive digital solutions including SEO, Google Ads, Meta Ads, Social Media Management, Web Development, App Development, UI/UX Design, E-Commerce solutions, Keyword Research, Website Analytics, and Political Campaign Marketing.' },
  { q: 'How long does it take to build a website?', a: 'A standard business website takes 2-4 weeks. E-commerce platforms take 4-6 weeks. Complex web applications can take 8-12 weeks. We follow agile methodology for faster delivery without compromising quality.' },
  { q: 'Do you develop mobile apps for both iOS and Android?', a: 'Yes! We develop native apps for iOS (Swift) and Android (Kotlin), as well as cross-platform apps using Flutter and React Native. Cross-platform development saves 40% cost while maintaining native performance.' },
  { q: 'How long does it take to see results from digital marketing?', a: 'SEO takes 2–3 months for stable results, while Google Ads & Meta Ads can generate qualified leads within 24–48 hours of campaign launch. We provide weekly reports so you can track progress.' },
  { q: 'Do you provide website and app maintenance?', a: 'Yes! We offer comprehensive monthly and yearly maintenance plans including security updates, bug fixes, performance optimization, and feature additions. 24/7 support is available for all clients.' },
  { q: 'Can you help scale ads and improve ROI?', a: 'Absolutely! We specialize in performance marketing with proven strategies to reduce Cost Per Lead (CPL) and maximize Return on Investment (ROI). Our average client sees 5X ROAS within 90 days.' },
  { q: 'What technologies do you use for web development?', a: 'We use modern technologies including React, Next.js, Vue.js for frontend; Node.js, Python, PHP/Laravel for backend; PostgreSQL, MongoDB for databases; and AWS, Google Cloud, Vercel for hosting.' },
  { q: 'How do I get started with Bits and Bytes IT Solution?', a: "Contact us through our website, WhatsApp, phone, or email for a free consultation. We'll understand your needs and create a custom strategy for your business within 48 hours." }
]

const STATS = [
  { value: '50+', label: 'Projects Delivered', icon: Rocket },
  { value: '30+', label: 'Happy Clients', icon: Heart },
  { value: '5+', label: 'Years Experience', icon: Clock },
  { value: '4.9', label: 'Client Rating', icon: Star }
]

// ==================== MEMOIZED COMPONENTS ====================
const ServiceCard = memo(({ service, index }) => {
  const IconComponent = service.icon
  return (
    <Link to={service.link} className='group block h-full service-card-wrapper'>
      <article className='service-card bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full'>
        {/* Image with Overlay */}
        <div className='relative overflow-hidden'>
          <OptimizedImage
            src={service.image}
            alt={`${service.title} - Bits and Bytes IT Solution`}
            wrapperClassName='w-full h-48 bg-slate-50'
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
          
          {/* Icon Badge */}
          <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform`}>
            <IconComponent size={22} />
          </div>
        </div>
        
        {/* Content */}
        <div className='p-6 flex flex-col flex-grow'>
          <h3 className='text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 transition-all'>
            {service.title}
          </h3>
          <p className='text-slate-500 text-sm leading-relaxed mb-4 flex-grow'>
            {service.desc}
          </p>
          
          {/* Feature Tags */}
          <div className='flex flex-wrap gap-2 mb-4'>
            {service.features.map((feature, i) => (
              <span key={i} className='px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-full font-medium'>
                {feature}
              </span>
            ))}
          </div>
          
          <div className={`flex items-center gap-2 font-semibold text-sm ${service.color} group-hover:gap-3 transition-all`}>
            Explore Service
            <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
          </div>
        </div>
      </article>
    </Link>
  )
})

ServiceCard.displayName = 'ServiceCard'

const TestimonialCard = memo(({ testimonial }) => (
  <article className='testimonial-card bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all min-w-[320px]'>
    {/* Rating & Result */}
    <div className='flex items-center justify-between mb-4'>
      <div className='flex items-center gap-1 text-amber-400'>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} fill='currentColor' />
        ))}
      </div>
      <span className='px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full'>
        {testimonial.result}
      </span>
    </div>
    
    <blockquote className='text-slate-600 text-sm leading-relaxed mb-6'>
      "{testimonial.quote}"
    </blockquote>
    
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg'>
        {testimonial.avatar}
      </div>
      <div>
        <cite className='font-bold text-slate-900 not-italic'>{testimonial.name}</cite>
        <div className='text-xs text-slate-500'>{testimonial.role}</div>
      </div>
    </div>
  </article>
))

TestimonialCard.displayName = 'TestimonialCard'

const FAQItem = memo(({ faq, index }) => (
  <details className='group faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden'>
    <summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 text-lg hover:bg-slate-50 transition-colors'>
      <span className='pr-4'>{faq.q}</span>
      <ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' />
    </summary>
    <div className='px-6 pb-6 text-slate-600 leading-relaxed'>
      {faq.a}
    </div>
  </details>
))

FAQItem.displayName = 'FAQItem'

const StatCard = memo(({ stat }) => (
  <div className='text-center group'>
    <div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform'>
      <stat.icon size={28} />
    </div>
    <div className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 mb-1'>
      {stat.value}
    </div>
    <div className='text-sm text-slate-500 font-medium'>{stat.label}</div>
  </div>
))

StatCard.displayName = 'StatCard'

const GrowthMetricCard = memo(({ metric }) => (
  <div className='group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all'>
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
      <metric.icon size={24} />
    </div>
    <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient} mb-2`}>
      {metric.value}
    </div>
    <div className='text-lg font-bold text-slate-900 mb-1'>{metric.label}</div>
    <p className='text-sm text-slate-500'>{metric.desc}</p>
  </div>
))

GrowthMetricCard.displayName = 'GrowthMetricCard'

const CaseStudyCard = memo(({ study }) => (
  <div className='group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all'>
    <div className='flex items-center justify-between mb-4'>
      <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${study.gradient} text-white`}>
        {study.industry}
      </span>
      <div className='flex items-center gap-1 text-amber-400'>
        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill='currentColor' />)}
      </div>
    </div>
    
    <h3 className='text-xl font-bold text-slate-900 mb-2'>{study.client}</h3>
    
    <div className='space-y-3 mb-6'>
      <div>
        <span className='text-xs font-bold text-slate-400 uppercase'>Challenge</span>
        <p className='text-sm text-slate-600'>{study.challenge}</p>
      </div>
      <div>
        <span className='text-xs font-bold text-slate-400 uppercase'>Solution</span>
        <p className='text-sm text-slate-600'>{study.solution}</p>
      </div>
    </div>
    
    <div className='grid grid-cols-3 gap-3'>
      {study.results.map((result, i) => (
        <div key={i} className='text-center p-3 bg-slate-50 rounded-xl'>
          <div className={`text-xl font-black text-transparent bg-clip-text bg-gradient-to-r ${study.gradient}`}>
            {result.metric}
          </div>
          <div className='text-xs text-slate-500'>{result.label}</div>
        </div>
      ))}
    </div>
  </div>
))

CaseStudyCard.displayName = 'CaseStudyCard'

// ==================== MAIN HOME COMPONENT ====================
const Home = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [imagesReady, setImagesReady] = useState(false)

  // Preload critical images
  useEffect(() => {
    const allImages = [
      ...SERVICES_DATA.map(s => s.image),
      ...BRANDS,
      'img/details.webp'
    ]
    
    preloadImages(allImages).then(() => {
      setImagesReady(true)
    })

    // Add preload links for critical images
    SERVICES_DATA.slice(0, 4).forEach(service => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = service.image
      document.head.appendChild(link)
    })

    // Add structured data for SEO
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const res = await axios.post(`${BASE_API}/api/contact/submit`, formData)
      if (res.data.success) {
        setSuccess("Message sent successfully! We'll get back to you within 24 hours.")
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        setError(res.data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Server error, please try again later.')
    }
    setLoading(false)
  }, [formData])

  return (
    <main className='home-page' itemScope itemType='https://schema.org/WebPage'>
      {/* ==================== SIMPLIFIED HERO SLIDER ==================== */}
      <SimpleHeroSlider />

      {/* ==================== BRAND SLIDER ==================== */}
      <section className='brand-section py-12 bg-white border-b border-slate-100' aria-label='Trusted Partners'>
        <div className='text-center mb-8'>
          <span className='text-xs font-bold uppercase tracking-[0.3em] text-slate-400'>
            Trusted by Innovative Companies Across India
          </span>
        </div>
        <div className='brand-ticker-wrapper'>
          <div className='brand-track'>
            {[...BRANDS, ...BRANDS, ...BRANDS].map((logo, i) => (
              <img 
                key={i} 
                src={logo} 
                alt='Trusted Partner' 
                loading='eager' 
                className='brand-logo' 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className='py-16 bg-gradient-to-b from-white to-slate-50' aria-label='Statistics'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {STATS.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BUSINESS GROWTH SECTION ==================== */}
      <section className='py-20 bg-white' aria-label='Business Growth'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            
            {/* Left Content */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-green-50 text-green-600 text-xs font-bold tracking-widest uppercase'>
                <TrendingUp size={14} /> Proven Results
              </div>
              <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>
                Accelerate Your Business Growth
              </h2>
              <p className='text-slate-600 max-w-3xl mb-6 text-lg'>
                Our data-driven strategies have helped 30+ businesses achieve measurable results. Here's what our clients typically experience within the first 90 days.
              </p>

              {/* Growth Metrics */}
              <div className='grid sm:grid-cols-2 gap-6 mb-8'>
                {GROWTH_METRICS.map((metric, i) => (
                  <GrowthMetricCard key={i} metric={metric} />
                ))}
              </div>

              <div className='bg-slate-50 rounded-2xl p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <Target className='text-green-500' size={24} />
                  <h3 className='text-xl font-bold text-slate-900'>Guaranteed Results</h3>
                </div>
                <p className='text-slate-600'>
                  We work on performance-based models. If we don't deliver results, you don't pay.
                </p>
              </div>
            </div>

            {/* Right Image - Growth Chart */}
            <div className='relative'>
              <div className='absolute -top-6 -right-6 w-40 h-40 bg-green-500/10 rounded-full blur-3xl' />
              <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 shadow-lg'>
                <div className='text-center mb-6'>
                  <div className='inline-flex items-center gap-2 px-4 py-2 mb-2 bg-white rounded-full text-green-600 text-sm font-bold'>
                    📈 Growth Timeline
                  </div>
                  <h3 className='text-xl font-bold text-slate-900'>Typical Growth Journey</h3>
                </div>
                
                {/* Timeline Visualization */}
                <div className='space-y-6'>
                  {[
                    { month: 'Month 1', metric: '20-30%', desc: 'Traffic Increase' },
                    { month: 'Month 2', metric: '40-50%', desc: 'Lead Generation' },
                    { month: 'Month 3', metric: '70-100%', desc: 'Revenue Growth' },
                    { month: 'Month 6', metric: '200-300%', desc: 'ROI Achieved' }
                  ].map((item, i) => (
                    <div key={i} className='flex items-center gap-4'>
                      <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg'>
                        {item.month}
                      </div>
                      <div className='flex-1'>
                        <div className='text-2xl font-black text-green-600'>{item.metric}</div>
                        <div className='text-slate-600'>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Growth Pillars - Full Width Below */}
          <div className='mt-20'>
            <div className='bg-slate-900 rounded-3xl p-8 md:p-12'>
              <div className='text-center mb-12'>
                <h3 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                  The 4 Pillars of Digital Growth
                </h3>
                <p className='text-slate-400'>Our holistic approach covers every stage of your customer journey</p>
              </div>
              
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {GROWTH_PILLARS.map((pillar, i) => (
                  <div key={i} className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all'>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      <pillar.icon size={24} />
                    </div>
                    <h4 className='text-xl font-bold text-white mb-2'>{pillar.title}</h4>
                    <p className='text-slate-400 text-sm mb-4'>{pillar.desc}</p>
                    <div className='space-y-2'>
                      {pillar.metrics.map((metric, j) => (
                        <div key={j} className='flex items-center gap-2 text-xs text-slate-300'>
                          <CircleCheck size={14} className={pillar.color} />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VALUE PROPOSITION ==================== */}
      <section className='py-20 bg-slate-50' aria-label='About Us'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            
            {/* Content - Left */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold tracking-widest uppercase'>
                <Sparkles size={14} /> About Bits and Bytes
              </div>
              <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight'>
                Your One-Stop Digital
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600'> Growth Partner</span>
              </h2>
              <p className='text-slate-600 text-lg leading-relaxed mb-6'>
                Bits and Bytes IT Solution is a full-service digital agency that combines cutting-edge technology with creative marketing strategies. We don't just build websites and apps — we create digital ecosystems that drive measurable business growth.
              </p>
              
              {/* Key Points */}
              <div className='grid sm:grid-cols-2 gap-4 mb-8'>
                {[
                  'End-to-End Digital Solutions',
                  'Data-Driven Decision Making',
                  'Transparent Weekly Reporting',
                  '24/7 Dedicated Support'
                ].map((point, i) => (
                  <div key={i} className='flex items-center gap-3'>
                    <CircleCheck className='text-cyan-500 flex-shrink-0' size={20} />
                    <span className='text-slate-700 font-medium'>{point}</span>
                  </div>
                ))}
              </div>
              
              <Link to='/about-us'>
                <button className='group flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all'>
                  Learn More About Us
                  <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
                </button>
              </Link>
            </div>

            {/* Image - Right */}
            <div className='relative'>
              <div className='absolute -top-8 -left-8 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl' />
              <div className='absolute -bottom-8 -right-8 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl' />
              
              <div className='relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200'>
                <OptimizedImage
                  src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800'
                  alt='Bits and Bytes IT Solution Team'
                  className='w-full h-64 object-cover'
                />
                <div className='bg-white p-6'>
                  <div className='grid grid-cols-3 gap-4 mb-4'>
                    <div className='text-center'>
                      <div className='text-2xl font-black text-cyan-600'>15+</div>
                      <div className='text-xs text-slate-500'>Experts</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-2xl font-black text-purple-600'>50+</div>
                      <div className='text-xs text-slate-500'>Projects</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-2xl font-black text-green-600'>30+</div>
                      <div className='text-xs text-slate-500'>Clients</div>
                    </div>
                  </div>
                  <div className='text-center text-slate-600 text-sm'>
                    Our team of developers, designers, and marketers working together
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className='py-20 bg-white services-section' aria-label='Our Services' id='services'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-purple-50 text-purple-600 text-xs font-bold tracking-widest uppercase'>
              <Layers size={14} /> Our Expertise
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>
              Complete Digital Solutions Under One Roof
            </h2>
            <p className='text-slate-600 max-w-3xl mx-auto'>
              From development to marketing, we provide 11 specialized services designed to cover every aspect of your digital journey. No more juggling multiple agencies.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {SERVICES_DATA.map((service, i) => (
              imagesReady ? (
                <ServiceCard key={service.title} service={service} index={i} />
              ) : (
                <SkeletonCard key={service.title} />
              )
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link to='/services'>
              <button className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2 mx-auto'>
                View All Services
                <ArrowUpRight size={18} className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WEB DEVELOPMENT DEEP DIVE ==================== */}
      <section className='py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' aria-label='Web Development'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Content */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold tracking-widest uppercase'>
                <Globe size={14} /> Web Development
              </div>
              <h2 className='text-3xl md:text-4xl font-black mb-6 leading-tight'>
                Websites That Convert Visitors Into
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'> Paying Customers</span>
              </h2>
              <p className='text-slate-300 text-lg leading-relaxed mb-6'>
                Your website is your 24/7 salesperson. We build high-performance, SEO-optimized websites that not only look stunning but are engineered to convert. Every pixel, every line of code is designed with your business goals in mind.
              </p>
              <p className='text-slate-400 leading-relaxed mb-8'>
                Using modern technologies like React, Next.js, and Node.js, we create websites that load in under 2 seconds, rank higher on Google, and provide an exceptional user experience across all devices.
              </p>

              {/* Features Grid */}
              <div className='grid sm:grid-cols-2 gap-4 mb-8'>
                {WEB_DEV_FEATURES.map((feature, i) => (
                  <div key={i} className='flex items-start gap-3 bg-white/5 rounded-xl p-4'>
                    <div className='w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0'>
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <div className='font-bold text-white text-sm'>{feature.title}</div>
                      <div className='text-xs text-slate-400'>{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link to='/services/web-development'>
                <button className='group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all'>
                  Explore Web Development
                  <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
                </button>
              </Link>
            </div>

            {/* Visual */}
            <div className='relative'>
              <div className='absolute -top-10 -right-10 w-60 h-60 bg-cyan-500/20 blur-[100px] rounded-full' />
              
              <div className='relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8'>
                <div className='text-sm font-bold text-slate-400 mb-4'>We Build</div>
                <div className='grid grid-cols-2 gap-4'>
                  {WEB_DEV_TYPES.map((type, i) => (
                    <div key={i} className='flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer'>
                      <type.icon size={20} className='text-cyan-400' />
                      <span className='text-sm font-medium text-white'>{type.name}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Preview */}
                <div className='mt-8 pt-6 border-t border-white/10'>
                  <div className='text-sm font-bold text-slate-400 mb-3'>Technologies We Use</div>
                  <div className='flex flex-wrap gap-2'>
                    {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'].map((tech, i) => (
                      <span key={i} className='px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full font-medium'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className='grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10'>
                  <div className='text-center'>
                    <div className='text-2xl font-black text-cyan-400'>90+</div>
                    <div className='text-xs text-slate-400'>PageSpeed</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-black text-cyan-400'>2-4</div>
                    <div className='text-xs text-slate-400'>Week Delivery</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-black text-cyan-400'>100%</div>
                    <div className='text-xs text-slate-400'>Responsive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== APP DEVELOPMENT DEEP DIVE ==================== */}
      <section className='py-20 bg-white' aria-label='App Development'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Visual - Left Side */}
            <div className='relative order-2 lg:order-1'>
              <div className='absolute -top-10 -left-10 w-60 h-60 bg-purple-500/10 blur-[100px] rounded-full' />
              
              <div className='relative'>
                {/* Phone Mockup */}
                <div className='relative mx-auto w-72'>
                  <div className='bg-slate-900 rounded-[3rem] p-3 shadow-2xl'>
                    <div className='bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-[2.5rem] p-6 min-h-[500px] flex flex-col'>
                      <div className='w-20 h-1 bg-white/30 rounded-full mx-auto mb-6' />
                      
                      <div className='text-center mb-8'>
                        <div className='w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center'>
                          <Smartphone size={32} className='text-white' />
                        </div>
                        <div className='text-white font-bold'>Your App</div>
                        <div className='text-white/60 text-sm'>Built by B&B</div>
                      </div>

                      <div className='space-y-3 flex-grow'>
                        {['Native Performance', 'Offline Support', 'Push Notifications', 'Secure Auth'].map((feature, i) => (
                          <div key={i} className='flex items-center gap-3 bg-white/10 rounded-xl p-3'>
                            <CircleCheck size={18} className='text-white' />
                            <span className='text-white text-sm'>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className='mt-6 flex justify-center gap-4'>
                        <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                          <Apple size={24} className='text-white' />
                        </div>
                        <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                          <PlayCircle size={24} className='text-white' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className='absolute top-10 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                      <TrendingUp size={20} className='text-green-600' />
                    </div>
                    <div>
                      <div className='text-sm font-bold text-slate-900'>50K+</div>
                      <div className='text-xs text-slate-500'>Downloads</div>
                    </div>
                  </div>
                </div>

                <div className='absolute bottom-20 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-float-delay'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center'>
                      <Star size={20} className='text-amber-500' fill='currentColor' />
                    </div>
                    <div>
                      <div className='text-sm font-bold text-slate-900'>4.8★</div>
                      <div className='text-xs text-slate-500'>App Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className='order-1 lg:order-2'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-50 text-purple-600 text-xs font-bold tracking-widest uppercase'>
                <Smartphone size={14} /> App Development
              </div>
              <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight'>
                Mobile Apps That Users
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'> Love & Recommend</span>
              </h2>
              <p className='text-slate-600 text-lg leading-relaxed mb-6'>
                In a mobile-first world, having a powerful app can transform your business. We build native iOS, Android, and cross-platform applications that deliver exceptional user experiences and drive real engagement.
              </p>
              <p className='text-slate-500 leading-relaxed mb-8'>
                Whether you need a consumer-facing app, an enterprise solution, or an e-commerce mobile platform, our team combines technical expertise with user-centric design to create apps that stand out in crowded app stores.
              </p>

              {/* Features Grid */}
              <div className='grid sm:grid-cols-2 gap-4 mb-8'>
                {APP_DEV_FEATURES.map((feature, i) => (
                  <div key={i} className='flex items-start gap-3 bg-slate-50 rounded-xl p-4'>
                    <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0'>
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <div className='font-bold text-slate-900 text-sm'>{feature.title}</div>
                      <div className='text-xs text-slate-500'>{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* App Types */}
              <div className='bg-slate-50 rounded-2xl p-6 mb-8'>
                <div className='text-sm font-bold text-slate-400 mb-3'>Apps We Develop</div>
                <div className='flex flex-wrap gap-2'>
                  {APP_DEV_TYPES.map((type, i) => (
                    <span key={i} className='px-3 py-2 bg-white text-slate-700 text-sm rounded-xl font-medium shadow-sm flex items-center gap-2'>
                      <type.icon size={16} className='text-purple-500' />
                      {type.name}
                    </span>
                  ))}
                </div>
              </div>

              <Link to='/services/app-development'>
                <button className='group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all'>
                  Explore App Development
                  <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGY STACK ==================== */}
      <section className='py-20 bg-slate-50' aria-label='Technology Stack'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            
            {/* Content - Left */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase'>
                <Code size={14} /> Our Tech Stack
              </div>
              <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight'>
                Built With Modern Technologies
              </h2>
              <p className='text-slate-600 text-lg leading-relaxed mb-6'>
                We use cutting-edge technologies and frameworks that ensure your digital products are fast, scalable, and future-proof.
              </p>

              {/* Tech Categories */}
              <div className='grid grid-cols-2 gap-6 mb-8'>
                {Object.entries(TECH_STACK).map(([category, techs]) => (
                  <div key={category} className='bg-white rounded-2xl p-6 border border-slate-100 shadow-sm'>
                    <div className='text-sm font-bold text-slate-400 uppercase tracking-wider mb-4'>
                      {category}
                    </div>
                    <div className='space-y-3'>
                      {techs.slice(0, 3).map((tech, i) => (
                        <div key={i} className='flex items-center gap-3 bg-slate-50 rounded-xl p-3'>
                          <span className='text-xl'>{tech.icon}</span>
                          <span className='font-medium text-slate-700'>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual - Right */}
            <div className='relative'>
              <div className='absolute -top-6 -right-6 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl' />
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100'>
                <div className='text-center mb-6'>
                  <div className='inline-flex items-center gap-2 px-4 py-2 mb-2 bg-white rounded-full text-indigo-600 text-sm font-bold'>
                    🚀 Technology Ecosystem
                  </div>
                  <h3 className='text-xl font-bold text-slate-900'>Integrated Tech Stack</h3>
                </div>
                
                {/* Tech Visualization */}
                <div className='relative h-64'>
                  {/* Center Circle */}
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl'>
                    Core
                  </div>
                  
                  {/* Orbiting Tech Circles */}
                  {[
                    { tech: 'React', color: 'from-cyan-500 to-blue-500', position: 'top-4 left-1/4' },
                    { tech: 'Node.js', color: 'from-green-500 to-emerald-500', position: 'top-4 right-1/4' },
                    { tech: 'Flutter', color: 'from-blue-500 to-indigo-500', position: 'bottom-4 left-1/4' },
                    { tech: 'AWS', color: 'from-orange-500 to-amber-500', position: 'bottom-4 right-1/4' }
                  ].map((item, i) => (
                    <div key={i} className={`absolute ${item.position} w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                      {item.tech}
                    </div>
                  ))}
                </div>
                
                <div className='text-center mt-6 text-slate-600 text-sm'>
                  Seamless integration of frontend, backend, mobile, and cloud technologies
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== CASE STUDIES ==================== */}
      <section className='py-20 bg-white' aria-label='Case Studies'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase'>
              <Trophy size={14} /> Success Stories
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>
              Real Results From Real Clients
            </h2>
            <p className='text-slate-600 max-w-2xl mx-auto'>
              Don't just take our word for it. See how we've helped businesses across industries achieve extraordinary growth.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {CASE_STUDIES.map((study, i) => (
              <CaseStudyCard key={i} study={study} />
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link to='/portfolio'>
              <button className='group px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2 mx-auto'>
                View All Case Studies
                <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRY SOLUTIONS ==================== */}
      <section className='py-20 bg-slate-50' aria-label='Industry Solutions'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase'>
              <Building2 size={14} /> Industries We Serve
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>
              Tailored Solutions for Every Industry
            </h2>
            <p className='text-slate-600 max-w-2xl mx-auto'>
              We understand that each industry has unique challenges. Our team has deep experience creating customized digital solutions across diverse sectors.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {INDUSTRIES.map((industry, i) => (
              <div key={i} className={`group ${industry.bg} rounded-2xl p-6 text-center hover:shadow-lg transition-all cursor-pointer`}>
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-white flex items-center justify-center ${industry.color} group-hover:scale-110 transition-transform shadow-sm`}>
                  <industry.icon size={28} />
                </div>
                <div className='font-bold text-slate-900'>{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className='py-20 bg-slate-900 text-white relative overflow-hidden' aria-label='Why Choose Us'>
        {/* Background Effect */}
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full' />
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full' />
        </div>

        <div className='container mx-auto px-4 md:px-6 relative z-10'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase'>
              <Award size={14} /> Why Choose Us
            </div>
            <h2 className='text-3xl md:text-4xl font-black mb-4'>
              Your Trusted Digital Partner
            </h2>
            <p className='text-slate-400 max-w-2xl mx-auto'>
              We deliver performance-driven digital solutions tailored for long-term success.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={i} className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all'>
                <div className='flex items-start gap-4'>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-1'>{item.title}</h3>
                    <p className='text-slate-400 text-sm mb-3'>{item.desc}</p>
                    <div className='flex items-baseline gap-2'>
                      <span className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>
                        {item.stat}
                      </span>
                      <span className='text-xs text-slate-500'>{item.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section className='py-20 bg-white' aria-label='Our Process'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            
            {/* Content - Left */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold tracking-widest uppercase'>
                <Settings size={14} /> Our Approach
              </div>
              <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight'>
                Transparent, Targeted & Result-Focused
              </h2>
              <p className='text-slate-600 text-lg leading-relaxed mb-6'>
                Our structured 4-step process ensures faster delivery, higher accuracy, and sustainable long-term growth.
              </p>

              {/* Process Steps List */}
              <div className='space-y-6'>
                {PROCESS_STEPS.map((step, i) => (
                  <div key={i} className='flex items-start gap-4 group'>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {step.num}
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-slate-900 mb-2'>{step.title}</h3>
                      <p className='text-slate-500'>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual - Right */}
            <div className='relative'>
              <div className='absolute -top-6 -right-6 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl' />
              <div className='bg-gradient-to-br from-slate-50 to-cyan-50 rounded-3xl p-8 border border-slate-100'>
                <div className='text-center mb-6'>
                  <div className='inline-flex items-center gap-2 px-4 py-2 mb-2 bg-white rounded-full text-cyan-600 text-sm font-bold'>
                    📋 Process Timeline
                  </div>
                  <h3 className='text-xl font-bold text-slate-900'>From Idea to Launch</h3>
                </div>
                
                {/* Timeline Visualization */}
                <div className='relative'>
                  {/* Vertical Line */}
                  <div className='absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500' />
                  
                  {/* Timeline Items */}
                  <div className='space-y-10 ml-12'>
                    {[
                      { week: 'Week 1-2', phase: 'Discovery & Planning', desc: 'Requirements gathering & strategy' },
                      { week: 'Week 3-4', phase: 'Design & Prototyping', desc: 'UI/UX design & wireframes' },
                      { week: 'Week 5-8', phase: 'Development', desc: 'Coding & implementation' },
                      { week: 'Week 9-10', phase: 'Testing & Launch', desc: 'QA, deployment & handover' }
                    ].map((item, i) => (
                      <div key={i} className='relative'>
                        <div className='absolute -left-16 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-cyan-500' />
                        <div className='bg-white rounded-xl p-4 shadow-sm'>
                          <div className='font-bold text-slate-900 mb-1'>{item.week}</div>
                          <div className='text-sm font-medium text-cyan-600 mb-1'>{item.phase}</div>
                          <div className='text-sm text-slate-500'>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className='text-center mt-8 text-slate-600 text-sm'>
                  Average project completion: 8-10 weeks
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className='py-20 bg-slate-50 overflow-hidden' aria-label='Testimonials'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-pink-50 text-pink-600 text-xs font-bold tracking-widest uppercase'>
              <MessageSquare size={14} /> Client Testimonials
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>
              What Our Clients Say
            </h2>
            <p className='text-slate-500 max-w-2xl mx-auto'>
              Real feedback from real clients. See why businesses trust us with their digital growth.
            </p>
          </div>

          <div className='testimonial-wrapper'>
            <div className='testimonial-track'>
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              ))}
            </div>
          </div>

          {/* Reviews Summary */}
          <div className='mt-12 flex flex-wrap items-center justify-center gap-8'>
            <div className='flex items-center gap-3'>
              <div className='flex -space-x-2'>
                {['RK', 'PS', 'AP', 'NG', 'SM'].map((initials, i) => (
                  <div key={i} className='w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white border-2 border-white'>
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className='flex items-center gap-1 text-amber-400'>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill='currentColor' />)}
                </div>
                <div className='text-sm text-slate-600'>4.9/5 from 30+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section className='py-20 bg-white' aria-label='Contact Us' id='contact'>
        <div className='container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center'>
          {/* Image */}
          <div className='relative'>
            <div className='absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl' />
            <div className='absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl' />
            <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200'
                alt='Contact Bits and Bytes IT Solution'
                className='w-full h-full object-cover'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent' />
              <div className='absolute bottom-6 left-6 text-white'>
                <div className='text-2xl font-bold mb-1'>Let's Talk Growth</div>
                <div className='text-sm opacity-80'>Free strategy consultation within 24 hours</div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className='absolute -right-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                  <Mail size={18} className='text-green-600' />
                </div>
                <div>
                  <div className='text-xs text-slate-500'>Email Us</div>
                  <div className='text-sm font-bold text-slate-900'>hello@bitsandbytes.in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase'>
              <Mail size={14} /> Get In Touch
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-2'>
              Let's Build Something Great Together
            </h2>
            <p className='text-slate-600 mb-8'>Share your vision, we'll turn it into reality. Get a free consultation and custom strategy within 48 hours!</p>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <input name='name' value={formData.name} onChange={handleChange} placeholder='Your Name *' required className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all' />
                <input name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone Number *' required className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all' />
              </div>
              <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder='Email Address *' required className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all' />
              <select name='service' value={formData.service} onChange={handleChange} className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all'>
                <option value=''>Select a Service</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>UI/UX Design</option>
                <option>E-Commerce</option>
                <option>Meta Ads</option>
                <option>Google Ads</option>
                <option>Social Media Marketing</option>
                <option>SEO Services</option>
                <option>Keyword Research</option>
                <option>Website Analytics</option>
                <option>Political Marketing</option>
              </select>
              <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Tell us about your project... (Budget, timeline, goals)' rows={4} className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none' />

              {success && <p className='text-green-600 font-semibold bg-green-50 p-3 rounded-lg'>{success}</p>}
              {error && <p className='text-red-600 font-semibold bg-red-50 p-3 rounded-lg'>{error}</p>}

              <button type='submit' disabled={loading} className='w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50'>
                {loading ? 'Sending...' : 'Get Free Strategy Call'}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className='py-20 bg-slate-50' id='faqs' aria-label='FAQs'>
        <div className='container mx-auto px-4 md:px-6 max-w-3xl'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold tracking-widest uppercase'>
              FAQs
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-slate-500'>Quick answers to common questions about our services.</p>
          </div>

          <div className='space-y-4'>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className='py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full' />
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full' />
        </div>
        
        <div className='container mx-auto px-4 md:px-6 text-center relative z-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase'>
            <Rocket size={14} /> Ready to Grow?
          </div>
          <h2 className='text-4xl md:text-5xl font-black mb-6'>
            Let's Build Your Digital Empire
          </h2>
          <p className='text-slate-300 text-lg mb-4 max-w-2xl mx-auto'>
            Whether you need a stunning website, a powerful mobile app, or marketing strategies that convert — we've got you covered.
          </p>
          <p className='text-slate-400 mb-10 max-w-xl mx-auto'>
            Join 30+ businesses who have transformed their digital presence with Bits and Bytes IT Solution.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link to='/contact-us'>
              <button className='group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-3'>
                Start Your Project Today
                <ArrowRight className='group-hover:translate-x-1 transition-transform' />
              </button>
            </Link>
            <a href='https://wa.me/919876543210?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services' target='_blank' rel='noopener noreferrer'>
              <button className='px-10 py-4 border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 .13 5.25.13 11.88a11.82 11.82 0 0 0 1.62 6L0 24l6.27-1.63a11.86 11.86 0 0 0 5.73 1.47h.01c6.63 0 11.87-5.24 11.87-11.87a11.77 11.77 0 0 0-3.36-8.49Z' />
                </svg>
                WhatsApp Us
              </button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className='mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400'>
            <div className='flex items-center gap-2'>
              <BadgeCheck size={18} className='text-cyan-400' />
              <span>Free Consultation</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock size={18} className='text-cyan-400' />
              <span>Response in 24 Hours</span>
            </div>
            <div className='flex items-center gap-2'>
              <ShieldCheck size={18} className='text-cyan-400' />
              <span>No Obligation Quote</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHATSAPP BUTTON ==================== */}
      <a
        href='https://wa.me/919876543210?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services'
        target='_blank'
        rel='noopener noreferrer'
        className='whatsapp-btn fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110'
        aria-label='Chat on WhatsApp'
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 .13 5.25.13 11.88a11.82 11.82 0 0 0 1.62 6L0 24l6.27-1.63a11.86 11.86 0 0 0 5.73 1.47h.01c6.63 0 11.87-5.24 11.87-11.87a11.77 11.77 0 0 0-3.36-8.49Zm-8.52 17a9.83 9.83 0 0 1-5-.14l-.36-.14-3.72.97 1-3.63-.17-.37a9.82 9.82 0 1 1 8.25 5.31Zm5.43-7.39c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.66.15-.76.97-.93 1.17-.34.22-.63.07a7.93 7.93 0 0 1-2.33-1.44 8.7 8.7 0 0 1-1.61-2c-.17-.3 0-.46.13-.61s.3-.34.44-.52c.15-.17.2-.3.3-.5s.05-.37 0-.52-.66-1.57-.9-2.15c-.24-.57-.48-.5-.66-.5h-.56a1.08 1.08 0 0 0-.76.36 3.2 3.2 0 0 0-1 2.37c0 1.39 1 2.74 1.13 2.93s1.91 3.1 4.67 4.31a15.71 15.71 0 0 0 1.57.58 3.82 3.82 0 0 0 1.75.11c.57-.08 1.77-.72 2-1.42s.25-1.3.18-1.42-.27-.22-.57-.37Z' />
        </svg>
      </a>
    </main>
  )
}

export default Home;