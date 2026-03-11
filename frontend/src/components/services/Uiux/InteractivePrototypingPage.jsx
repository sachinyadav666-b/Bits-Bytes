import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { MousePointer, Play, Zap, ArrowRight, ChevronDown, Target, Monitor, Smartphone, Share2, Users } from 'lucide-react'

export default function InteractivePrototypingPage() {
  const faqs = [
    { q: 'What is interactive prototyping?', a: 'Interactive prototyping creates clickable, functional mockups that simulate the real user experience. Users can click, tap, and navigate through the design before development begins.' },
    { q: 'Why are prototypes important?', a: 'Prototypes allow testing with real users, stakeholder validation, and identifying usability issues before expensive development work starts. They save time and money.' },
    { q: 'What tools do you use?', a: 'We use industry-standard tools like Figma, Adobe XD, and Framer to create interactive prototypes with realistic animations and transitions.' }
  ]
  const services = [
    { icon: MousePointer, title: 'Clickable Prototypes', desc: 'Fully interactive prototypes that simulate real user flows, clicks, and navigation through your product.', features: ['Interactive', 'Clickable', 'Navigation', 'Realistic'], color: 'from-orange-500 to-amber-600' },
    { icon: Zap, title: 'Micro-Interactions', desc: 'Subtle animations and feedback that make interfaces feel responsive and delightful to use.', features: ['Animations', 'Feedback', 'Responsive', 'Delightful'], color: 'from-blue-500 to-cyan-600' },
    { icon: Users, title: 'User Testing', desc: 'Test prototypes with real users to gather feedback and validate design decisions before development.', features: ['Testing', 'Feedback', 'Validation', 'Iteration'], color: 'from-green-500 to-emerald-600' },
    { icon: Share2, title: 'Stakeholder Reviews', desc: 'Share prototypes with stakeholders for approval and feedback in a collaborative environment.', features: ['Sharing', 'Collaboration', 'Approval', 'Feedback'], color: 'from-purple-500 to-violet-600' },
    { icon: Monitor, title: 'Desktop Prototypes', desc: 'Rich, feature-complete prototypes optimized for desktop viewing and interaction.', features: ['Desktop', 'Full Features', 'Rich', 'Detailed'], color: 'from-pink-500 to-rose-600' },
    { icon: Smartphone, title: 'Mobile Prototypes', desc: 'Touch-optimized prototypes for mobile devices with native-like interactions.', features: ['Mobile', 'Touch', 'Native-like', 'Gestures'], color: 'from-indigo-500 to-blue-600' }
  ]
  const stats = [{ value: '70%', label: 'Fewer Dev Changes' }, { value: '50%', label: 'Faster Approval' }, { value: '3x', label: 'Better Feedback' }, { value: '100%', label: 'Validated Designs' }]
  const process = [{ num: '01', title: 'Link', desc: 'Connect screens with interactions', icon: Share2 }, { num: '02', title: 'Animate', desc: 'Add transitions and micro-interactions', icon: Zap }, { num: '03', title: 'Test', desc: 'Test with users and stakeholders', icon: Users }, { num: '04', title: 'Iterate', desc: 'Refine based on feedback', icon: Play }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'UI/UX Design', url: '/services/ui-ux-design' }, { name: 'Interactive Prototyping', url: '/ui-ux-design/interactive-prototyping' }]

  return (
    <>
      <SEOHead title='Interactive Prototyping Services - UI/UX Design | Bits and Bytes' description='Professional prototyping services in Noida, Delhi NCR. Clickable prototypes, user testing, stakeholder reviews. Validate before development. Get free consultation!' keywords='interactive prototyping India, clickable prototypes Noida, UX prototyping Delhi NCR' canonical="/ui-ux-design/interactive-prototyping" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-100 via-amber-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-orange-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-orange-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700 text-sm font-bold'><MousePointer size={16} className='text-orange-500' />Test Before You Build</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Interactive<span className='block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600'>Prototyping</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We create <strong>interactive, clickable prototypes</strong> that let you experience and test the design before writing a single line of code. Validate ideas, gather feedback, and iterate faster.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-orange-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Prototyping <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Prototyping Services</h2></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Process</h2></div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-orange-500 transition-all'><step.icon size={48} className='text-orange-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>FAQs</h2></div>
            <div className='space-y-4'>{faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-orange-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}</div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Validate Before You Build</h2>
            <p className='text-orange-100 text-lg mb-10 max-w-2xl mx-auto'>Interactive prototypes save time and money by catching issues early. Let's create something you can test and refine.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-orange-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Prototyping <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
