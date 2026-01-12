import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Package, BarChart3, Bell, RefreshCw, ArrowRight, ChevronDown, Target, Play, Warehouse, TrendingUp } from 'lucide-react'

export default function InventoryPage() {
  const faqs = [
    { q: 'What inventory features do you implement?', a: 'We implement real-time stock tracking, low-stock alerts, multi-warehouse support, batch tracking, automated reordering, and comprehensive reporting.' },
    { q: 'Can you integrate with existing systems?', a: 'Yes, we integrate inventory management with your existing ERP, accounting software, and supplier systems for seamless operations.' },
    { q: 'Do you support multi-location inventory?', a: 'Yes, we support multi-warehouse and multi-location inventory management with transfer tracking and location-based stock visibility.' }
  ]
  const services = [
    { icon: Package, title: 'Real-Time Tracking', desc: 'Live stock levels updated instantly with every sale, return, or adjustment across all channels.', features: ['Live Updates', 'Multi-Channel', 'Accurate', 'Instant'], color: 'from-purple-500 to-violet-600' },
    { icon: Bell, title: 'Low Stock Alerts', desc: 'Automated notifications when stock reaches reorder points to prevent stockouts.', features: ['Alerts', 'Notifications', 'Automated', 'Configurable'], color: 'from-orange-500 to-amber-600' },
    { icon: Warehouse, title: 'Multi-Warehouse', desc: 'Manage inventory across multiple warehouses and locations with transfer tracking.', features: ['Multi-Location', 'Transfers', 'Visibility', 'Tracking'], color: 'from-blue-500 to-cyan-600' },
    { icon: RefreshCw, title: 'Auto Reordering', desc: 'Automated purchase orders when stock falls below thresholds with supplier integration.', features: ['Automated', 'PO Generation', 'Supplier', 'Thresholds'], color: 'from-green-500 to-emerald-600' },
    { icon: BarChart3, title: 'Analytics & Reports', desc: 'Comprehensive inventory reports—turnover, aging, forecasting, and performance metrics.', features: ['Reports', 'Forecasting', 'Turnover', 'Insights'], color: 'from-pink-500 to-rose-600' },
    { icon: TrendingUp, title: 'Demand Forecasting', desc: 'Predict future demand based on historical data and trends for better planning.', features: ['Prediction', 'Trends', 'Planning', 'Optimization'], color: 'from-indigo-500 to-blue-600' }
  ]
  const stats = [{ value: '99%', label: 'Accuracy' }, { value: 'Real-Time', label: 'Updates' }, { value: 'Multi', label: 'Warehouse' }, { value: 'Auto', label: 'Reorder' }]
  const process = [{ num: '01', title: 'Audit', desc: 'Assess current inventory processes', icon: Target }, { num: '02', title: 'Design', desc: 'Plan inventory system architecture', icon: Package }, { num: '03', title: 'Implement', desc: 'Build and integrate system', icon: RefreshCw }, { num: '04', title: 'Train', desc: 'Train team and launch', icon: Play }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'E-Commerce', url: '/services/e-commerce' }, { name: 'Inventory', url: '/e-commerce/inventory' }]

  return (
    <>
      <SEOHead title='Inventory Management System Development | Bits and Bytes' description='Professional inventory management solutions in Noida, Delhi NCR. Real-time tracking, multi-warehouse, automated reordering. Get free consultation!' keywords='inventory management India, stock management system Noida, e-commerce inventory Delhi NCR' canonical="/e-commerce/inventory" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-100 via-violet-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-purple-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-purple-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 text-purple-700 text-sm font-bold'><Package size={16} className='text-purple-500' />Track Everything</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Inventory<span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>Management</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We build <strong>comprehensive inventory management systems</strong> with real-time tracking, automated alerts, and intelligent features to streamline your operations.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-purple-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Build Inventory System <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Inventory Services</h2></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Process</h2></div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-purple-500 transition-all'><step.icon size={48} className='text-purple-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>FAQs</h2></div>
            <div className='space-y-4'>{faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-purple-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}</div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Take Control of Your Inventory</h2>
            <p className='text-purple-100 text-lg mb-10 max-w-2xl mx-auto'>Accurate inventory management drives profitability. Let's build a system that works.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Build Inventory System <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
