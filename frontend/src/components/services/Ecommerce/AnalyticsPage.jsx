import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { BarChart3, TrendingUp, Users, Target, ArrowRight, ChevronDown, Play, Eye, DollarSign, Activity } from 'lucide-react'

export default function AnalyticsPage() {
  const faqs = [
    { q: 'What analytics do you implement?', a: 'We implement comprehensive e-commerce analytics including sales tracking, customer behavior, conversion funnels, product performance, and marketing attribution.' },
    { q: 'Which analytics platforms do you use?', a: 'We work with Google Analytics 4, Mixpanel, Hotjar, and platform-specific analytics. We also build custom dashboards for specific business needs.' },
    { q: 'How does analytics improve sales?', a: 'Analytics reveals what works and what does not—which products sell, where customers drop off, which marketing channels convert. Data-driven decisions improve ROI.' }
  ]
  const services = [
    { icon: BarChart3, title: 'Sales Analytics', desc: 'Comprehensive sales tracking—revenue, orders, average order value, and trends over time.', features: ['Revenue', 'Orders', 'AOV', 'Trends'], color: 'from-indigo-500 to-blue-600' },
    { icon: Users, title: 'Customer Insights', desc: 'Understand your customers—demographics, behavior, lifetime value, and purchase patterns.', features: ['Demographics', 'Behavior', 'LTV', 'Patterns'], color: 'from-green-500 to-emerald-600' },
    { icon: TrendingUp, title: 'Conversion Funnels', desc: 'Track customer journey from visit to purchase, identify drop-offs, and optimize conversions.', features: ['Journey', 'Drop-offs', 'Optimization', 'Funnels'], color: 'from-purple-500 to-violet-600' },
    { icon: Target, title: 'Marketing Attribution', desc: 'Know which marketing channels and campaigns drive sales with multi-touch attribution.', features: ['Channels', 'Campaigns', 'ROI', 'Attribution'], color: 'from-orange-500 to-amber-600' },
    { icon: Eye, title: 'Product Performance', desc: 'Track product-level metrics—views, add-to-carts, purchases, and revenue by product.', features: ['Views', 'Carts', 'Purchases', 'Revenue'], color: 'from-pink-500 to-rose-600' },
    { icon: Activity, title: 'Real-Time Dashboards', desc: 'Live dashboards showing key metrics and alerts for immediate insights and action.', features: ['Real-Time', 'Alerts', 'KPIs', 'Live'], color: 'from-cyan-500 to-blue-600' }
  ]
  const stats = [{ value: 'Real-Time', label: 'Data' }, { value: '360°', label: 'View' }, { value: 'Custom', label: 'Dashboards' }, { value: 'ROI', label: 'Tracking' }]
  const process = [{ num: '01', title: 'Audit', desc: 'Assess current tracking', icon: Target }, { num: '02', title: 'Plan', desc: 'Define KPIs and metrics', icon: BarChart3 }, { num: '03', title: 'Implement', desc: 'Setup tracking and dashboards', icon: Activity }, { num: '04', title: 'Optimize', desc: 'Continuous improvement', icon: Play }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'E-Commerce', url: '/services/e-commerce' }, { name: 'Analytics', url: '/e-commerce/analytics' }]

  return (
    <>
      <SEOHead title='E-Commerce Analytics & Reporting | Bits and Bytes' description='E-commerce analytics services in Noida, Delhi NCR. Sales tracking, customer insights, conversion optimization. Get free consultation!' keywords='e-commerce analytics India, sales reporting Noida, conversion tracking Delhi NCR' canonical="/e-commerce/analytics" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-100 via-blue-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-indigo-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-indigo-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 text-indigo-700 text-sm font-bold'><BarChart3 size={16} className='text-indigo-500' />Data-Driven Decisions</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Analytics &<span className='block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600'>Reporting</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We implement <strong>comprehensive e-commerce analytics</strong> that turn data into actionable insights for better business decisions.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Setup Analytics <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Analytics Services</h2></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Process</h2></div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-indigo-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-indigo-500 transition-all'><step.icon size={48} className='text-indigo-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>FAQs</h2></div>
            <div className='space-y-4'>{faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-indigo-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}</div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Know Your Numbers</h2>
            <p className='text-indigo-100 text-lg mb-10 max-w-2xl mx-auto'>Data-driven businesses win. Let's setup analytics that guide growth.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Setup Analytics <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
