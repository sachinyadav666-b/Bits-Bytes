import React from 'react'
import { Link } from 'react-router-dom'
import {
  Cpu, Shield, Rocket, Zap, Layers, Satellite, ArrowRight, MoveRight, Code2, Cloud,
  Sparkles, CheckCircle, Target, BarChart3, Globe, Smartphone, Palette, ShoppingCart,
  Search, TrendingUp, Users, Award, Monitor, Database, Lock, Megaphone, PieChart, FileSearch
} from 'lucide-react'

// ==================== STATIC DATA ====================
const SERVICES_DATA = [
  {
    title: 'Web Development',
    desc: 'High-performance websites built with React, Next.js & modern frameworks for speed and SEO.',
    color: 'text-cyan-600',
    gradient: 'from-cyan-500 to-blue-600',
    bgLight: 'bg-cyan-50',
    border: 'border-cyan-200',
    icon: Globe,
    secondaryIcon: Code2,
    link: '/services/web-development'
  },
  {
    title: 'App Development',
    desc: 'Native & cross-platform mobile applications (Flutter/React Native) built for performance.',
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-violet-600',
    bgLight: 'bg-purple-50',
    border: 'border-purple-200',
    icon: Smartphone,
    secondaryIcon: Layers,
    link: '/services/app-development'
  },
  {
    title: 'UI/UX Design',
    desc: 'Award-winning interfaces that deliver seamless user experiences and modern aesthetics.',
    color: 'text-pink-600',
    gradient: 'from-pink-500 to-rose-600',
    bgLight: 'bg-pink-50',
    border: 'border-pink-200',
    icon: Palette,
    secondaryIcon: Sparkles,
    link: '/services/ui/ux-design'
  },
  {
    title: 'E-Commerce',
    desc: 'Custom online stores with secure payment gateways, inventory management & dashboards.',
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-amber-600',
    bgLight: 'bg-orange-50',
    border: 'border-orange-200',
    icon: ShoppingCart,
    secondaryIcon: Database,
    link: '/services/e-commerce'
  },
  {
    title: 'Meta Ads',
    desc: 'High-converting Facebook & Instagram ad campaigns targeting your ideal customer base.',
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50',
    border: 'border-blue-200',
    icon: Target,
    secondaryIcon: Users,
    link: '/services/meta-ads'
  },
  {
    title: 'Google Ads',
    desc: 'Search, Display & YouTube ads optimized for maximum ROI and brand visibility.',
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-600',
    bgLight: 'bg-green-50',
    border: 'border-green-200',
    icon: BarChart3,
    secondaryIcon: TrendingUp,
    link: '/services/google-ads'
  },
  {
    title: 'Social Media',
    desc: 'Reels, content creation, branding & organic account growth strategies.',
    color: 'text-rose-600',
    gradient: 'from-rose-500 to-red-600',
    bgLight: 'bg-rose-50',
    border: 'border-rose-200',
    icon: Users,
    secondaryIcon: Megaphone,
    link: '/services/social-media'
  },
  {
    title: 'SEO Services',
    desc: 'Keyword research, technical SEO & on-page optimization to rank #1 on Google.',
    color: 'text-teal-600',
    gradient: 'from-teal-500 to-cyan-600',
    bgLight: 'bg-teal-50',
    border: 'border-teal-200',
    icon: Search,
    secondaryIcon: FileSearch,
    link: '/services/seo-audit'
  },
  {
    title: 'Keyword Research',
    desc: 'In-depth analysis to find high-volume, low-competition keywords that drive targeted traffic.',
    color: 'text-amber-600',
    gradient: 'from-amber-500 to-yellow-600',
    bgLight: 'bg-amber-50',
    border: 'border-amber-200',
    icon: TrendingUp,
    secondaryIcon: Search,
    link: '/services/keyword-research'
  },
  {
    title: 'Website Analytics',
    desc: 'Comprehensive data tracking, user behavior analysis, and conversion rate optimization.',
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-violet-600',
    bgLight: 'bg-indigo-50',
    border: 'border-indigo-200',
    icon: PieChart,
    secondaryIcon: BarChart3,
    link: '/services/website-analytics'
  },
  {
    title: 'Political Marketing',
    desc: 'Digital war rooms, voter sentiment analysis & election campaign management.',
    color: 'text-red-600',
    gradient: 'from-red-500 to-rose-600',
    bgLight: 'bg-red-50',
    border: 'border-red-200',
    icon: Award,
    secondaryIcon: Megaphone,
    link: '/services/political-party'
  }
]

const WHY_TRUST_US = [
  { icon: Cpu, title: 'High-Performance Tech', desc: 'Systems optimized for speed & scalability.', gradient: 'from-cyan-500 to-blue-500' },
  { icon: Shield, title: 'Security First', desc: 'Enterprise-grade data protection.', gradient: 'from-green-500 to-emerald-500' },
  { icon: Rocket, title: 'Fast Delivery', desc: 'Agile workflow for quicker outputs.', gradient: 'from-purple-500 to-pink-500' },
  { icon: Layers, title: 'Modular Design', desc: 'Reusable, future-proof structure.', gradient: 'from-orange-500 to-amber-500' },
  { icon: Zap, title: 'Automation Ready', desc: 'AI-powered workflow systems.', gradient: 'from-yellow-500 to-orange-500' },
  { icon: Satellite, title: 'Global-Ready', desc: 'Cloud architecture, zero downtime.', gradient: 'from-indigo-500 to-purple-500' }
]

const WORKFLOW_STEPS = [
  { step: '01', title: 'Discovery', desc: 'Understanding your goals & market.', gradient: 'from-cyan-500 to-blue-500' },
  { step: '02', title: 'Strategy', desc: 'Planning architecture & UI flows.', gradient: 'from-purple-500 to-pink-500' },
  { step: '03', title: 'Execution', desc: 'Building, integrating & testing.', gradient: 'from-orange-500 to-red-500' },
  { step: '04', title: 'Growth', desc: 'Optimization, scaling & deployment.', gradient: 'from-green-500 to-emerald-500' }
]

// ==================== SERVICE CARD (Icon-based, no images) ====================
const ServiceCard = ({ service }) => {
  const IconComponent = service.icon
  const SecondaryIcon = service.secondaryIcon

  return (
    <Link to={service.link} className='group block h-full'>
      <div className={`h-full bg-white border ${service.border} rounded-3xl overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-500 flex flex-col`}>
        {/* Icon Visual Area */}
        <div className={`relative h-48 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
          {/* Background Pattern */}
          <div className='absolute inset-0 opacity-20'>
            <div className='absolute top-4 left-4 w-24 h-24 border-2 border-white/30 rounded-full' />
            <div className='absolute bottom-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rounded-full' />
          </div>
          
          {/* Main Icon */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='relative'>
              <div className='w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg'>
                <IconComponent size={48} className='text-white' strokeWidth={1.5} />
              </div>
              {/* Secondary Icon */}
              <div className='absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg'>
                <SecondaryIcon size={20} className={service.color} />
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className='absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center'>
            <Sparkles size={14} className='text-white' />
          </div>
        </div>

        {/* Content */}
        <div className='flex-1 p-6 flex flex-col'>
          <h3 className='text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${service.gradient} transition-all'>
            {service.title}
          </h3>
          <p className='text-slate-600 text-sm leading-relaxed flex-1'>{service.desc}</p>
          
          {/* Link */}
          <div className='mt-4 flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-slate-900 transition-colors'>
            <span>Learn More</span>
            <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
          </div>
        </div>
      </div>
    </Link>
  )
}

// ==================== TRUST CARD ====================
const TrustCard = ({ item, index }) => {
  const IconComponent = item.icon
  return (
    <div className='group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-transparent transition-all duration-300'>
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
        <IconComponent size={28} />
      </div>
      <h3 className='text-xl font-bold text-slate-900 mb-2'>{item.title}</h3>
      <p className='text-slate-600'>{item.desc}</p>
    </div>
  )
}

// ==================== WORKFLOW STEP ====================
const WorkflowStep = ({ step, index }) => (
  <div className='relative group'>
    {/* Connector Line */}
    {index < 3 && (
      <div className='hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent z-0' />
    )}
    
    <div className='relative z-10 bg-white border border-slate-100 rounded-2xl p-8 text-center hover:shadow-xl hover:border-transparent transition-all'>
      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${step.gradient} text-white text-3xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
        {step.step}
      </div>
      <h3 className='text-xl font-bold text-slate-900 mb-2'>{step.title}</h3>
      <p className='text-slate-600 text-sm'>{step.desc}</p>
    </div>
  </div>
)

// ==================== MAIN SERVICES COMPONENT ====================
function Services() {
  return (
    <div className='bg-slate-50 min-h-screen'>
      {/* ==================== HERO ==================== */}
      <section className='relative pt-32 pb-20 overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0 bg-gradient-to-b from-white to-slate-50' />
        <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-100 via-blue-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
        <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100 via-pink-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 opacity-60' />

        <div className='container mx-auto px-6 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase shadow-sm'>
                <Sparkles size={14} className='text-cyan-500' /> Our Services
              </div>
              
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight'>
                Complete Digital
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600'>
                  Solutions
                </span>
              </h1>
              
              <p className='text-lg text-slate-600 mb-8 leading-relaxed'>
                From web development to digital marketing, we provide <strong>end-to-end solutions</strong> that help businesses grow in the digital age.
              </p>

              <div className='flex flex-wrap gap-4 mb-8'>
                <Link to='/contact-us'>
                  <button className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2'>
                    Get Started 
                    <MoveRight size={18} className='group-hover:translate-x-1 transition-transform' />
                  </button>
                </Link>
                <Link to='/projects'>
                  <button className='px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md'>
                    View Work
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className='flex flex-wrap items-center gap-6 pt-4'>
                {[
                  { icon: CheckCircle, text: '200+ Projects', color: 'text-green-500' },
                  { icon: Users, text: '100+ Clients', color: 'text-purple-500' },
                  { icon: Award, text: '5+ Years', color: 'text-cyan-500' }
                ].map((item, i) => (
                  <div key={i} className='flex items-center gap-2 text-sm text-slate-600'>
                    <item.icon size={16} className={item.color} />
                    <span className='font-medium'>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className='relative hidden lg:block h-[500px]'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/30 to-purple-400/30 blur-[100px] rounded-full' />
              
              <div className='relative w-full h-full flex items-center justify-center'>
                <div className='absolute w-[350px] h-[400px] bg-white rounded-3xl border border-slate-100 shadow-2xl rotate-[-6deg] translate-x-[-20px] z-10 opacity-60 scale-90' />
                <div className='absolute w-[350px] h-[400px] bg-white rounded-3xl border border-slate-200 shadow-2xl rotate-[-3deg] translate-x-[-10px] z-20 opacity-80' />
                
                <div className='absolute w-[350px] h-[420px] bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl z-30 flex flex-col p-8 justify-between hover:scale-105 transition-transform duration-500'>
                  <div className='flex justify-between items-start'>
                    <div className='w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg'>
                      <Code2 size={28} />
                    </div>
                    <div className='px-3 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full'>Active</div>
                  </div>
                  
                  <div className='space-y-3'>
                    <div className='h-2 w-2/3 bg-slate-100 rounded-full' />
                    <div className='h-2 w-full bg-slate-100 rounded-full' />
                    <div className='h-2 w-4/5 bg-slate-100 rounded-full' />
                  </div>
                  
                  <div className='p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100'>
                    <div className='flex items-center gap-3 mb-3'>
                      <div className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600'>
                        <Zap size={20} />
                      </div>
                      <span className='font-bold text-slate-700'>Performance</span>
                    </div>
                    <div className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600'>+127%</div>
                    <div className='text-sm text-slate-500'>Improvement Rate</div>
                  </div>
                </div>

                <div className='absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl z-40'>
                  <Cloud className='text-cyan-500' size={24} />
                </div>
                <div className='absolute bottom-20 left-0 bg-white p-4 rounded-2xl shadow-xl z-40'>
                  <Shield className='text-purple-500' size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES GRID ==================== */}
      <section className='py-20 relative z-10'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase shadow-sm'>
              <Sparkles size={14} className='text-cyan-500' /> Our Expertise
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Full-Cycle Digital Solutions</h2>
            <p className='text-slate-600 max-w-2xl mx-auto'>Everything your business needs to grow and succeed in the digital world.</p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {SERVICES_DATA.map((service, i) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY TRUST US ==================== */}
      <section className='py-20 bg-white relative z-10'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-purple-50 text-purple-600 text-xs font-bold tracking-widest uppercase'>
              <Award size={14} /> Why Choose Us
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>
              Why Clients <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>Trust Us</span>
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>We deliver performance-driven digital solutions tailored for long-term success.</p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {WHY_TRUST_US.map((item, i) => (
              <TrustCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WORKFLOW ==================== */}
      <section className='py-20 relative z-10'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold tracking-widest uppercase'>
              <Rocket size={14} /> Our Process
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>
              Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>Workflow</span>
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>A proven process that delivers results every time.</p>
          </div>

          <div className='grid md:grid-cols-4 gap-6'>
            {WORKFLOW_STEPS.map((step, i) => (
              <WorkflowStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className='py-20 relative z-10'>
        <div className='container mx-auto px-6'>
          <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden'>
            <div className='absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full' />
            <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full' />
            
            <div className='relative z-10'>
              <h2 className='text-4xl md:text-5xl font-black mb-6'>Ready to Start Your Project?</h2>
              <p className='text-slate-300 text-lg mb-10 max-w-2xl mx-auto'>
                Let's build something amazing together. Get in touch today and transform your digital presence!
              </p>
              <Link to='/contact-us'>
                <button className='group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>
                  Contact Us <ArrowRight className='group-hover:translate-x-1 transition-transform' />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
