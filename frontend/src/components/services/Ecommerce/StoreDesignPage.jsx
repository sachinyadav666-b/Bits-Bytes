import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Palette, Target, ShoppingCart, Smartphone, ArrowRight, ChevronDown, Play, Eye, Zap, MousePointer } from 'lucide-react'

export default function StoreDesignPage() {
  const faqs = [
    { q: 'What makes good e-commerce design?', a: 'Good e-commerce design combines beautiful visuals with conversion-focused layouts—clear navigation, compelling product pages, optimized checkout, and mobile-first responsive design.' },
    { q: 'How does design affect sales?', a: 'Design directly impacts trust, engagement, and conversions. A well-designed store can increase conversion rates by 200-400% compared to poorly designed alternatives.' },
    { q: 'Do you redesign existing stores?', a: 'Yes, we provide redesign services for existing e-commerce stores to improve aesthetics, usability, and conversion rates while maintaining SEO value.' }
  ]
  const services = [
    { icon: Palette, title: 'Custom Store Design', desc: 'Unique, brand-aligned store designs that stand out and create memorable shopping experiences.', features: ['Custom', 'Brand-Aligned', 'Unique', 'Professional'], color: 'from-pink-500 to-rose-600' },
    { icon: Target, title: 'Conversion Optimization', desc: 'Every element designed to convert—strategic CTAs, optimized layouts, and persuasive product pages.', features: ['CTAs', 'Layouts', 'Persuasive', 'Optimized'], color: 'from-green-500 to-emerald-600' },
    { icon: ShoppingCart, title: 'Checkout UX', desc: 'Streamlined checkout flows that reduce cart abandonment and increase completed purchases.', features: ['Streamlined', 'Simple', 'Fast', 'Converting'], color: 'from-blue-500 to-cyan-600' },
    { icon: Smartphone, title: 'Mobile-First Design', desc: 'Responsive designs optimized for mobile shopping—the majority of e-commerce traffic.', features: ['Mobile', 'Responsive', 'Touch', 'Fast'], color: 'from-purple-500 to-violet-600' },
    { icon: Eye, title: 'Product Showcasing', desc: 'Beautiful product pages with galleries, zoom, videos, and compelling descriptions.', features: ['Galleries', 'Zoom', 'Videos', 'Compelling'], color: 'from-orange-500 to-amber-600' },
    { icon: MousePointer, title: 'Intuitive Navigation', desc: 'Clear, logical navigation that helps customers find products quickly and easily.', features: ['Clear', 'Logical', 'Fast', 'Easy'], color: 'from-indigo-500 to-blue-600' }
  ]
  const stats = [{ value: '3x', label: 'Conversions' }, { value: '50%', label: 'Less Bounce' }, { value: '2x', label: 'Engagement' }, { value: '40%', label: 'More Sales' }]
  const process = [{ num: '01', title: 'Research', desc: 'Understand brand and audience', icon: Target }, { num: '02', title: 'Design', desc: 'Create conversion-focused layouts', icon: Palette }, { num: '03', title: 'Build', desc: 'Implement responsive design', icon: Smartphone }, { num: '04', title: 'Optimize', desc: 'Test and refine', icon: Play }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'E-Commerce', url: '/services/e-commerce' }, { name: 'Store Design', url: '/e-commerce/design' }]

  return (
    <>
      <SEOHead title='E-Commerce Store Design Services | Bits and Bytes' description='Professional e-commerce design in Noida, Delhi NCR. Conversion-focused, mobile-first store design. Get free consultation!' keywords='e-commerce design India, online store design Noida, conversion design Delhi NCR' canonical="/e-commerce/design" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pink-100 via-rose-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-pink-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-pink-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 text-pink-700 text-sm font-bold'><Palette size={16} className='text-pink-500' />Design That Sells</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Store Design<span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>& UX</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We create <strong>conversion-focused e-commerce designs</strong> that look beautiful and drive sales with optimized user experiences.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-pink-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Design Your Store <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Design Services</h2></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Process</h2></div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-pink-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-pink-500 transition-all'><step.icon size={48} className='text-pink-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>FAQs</h2></div>
            <div className='space-y-4'>{faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-pink-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}</div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Design That Converts</h2>
            <p className='text-pink-100 text-lg mb-10 max-w-2xl mx-auto'>Beautiful design meets conversion science. Let's create a store customers love.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-pink-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Design Your Store <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
