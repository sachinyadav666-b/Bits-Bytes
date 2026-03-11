import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Truck, MapPin, Clock, Globe, ArrowRight, ChevronDown, Target, Play, Package, Bell } from 'lucide-react'

export default function ShippingPage() {
  const faqs = [
    { q: 'Which shipping carriers do you integrate?', a: 'We integrate with major carriers including Delhivery, BlueDart, Shiprocket, FedEx, DHL, and more. We can also integrate with multiple carriers for best rate shopping.' },
    { q: 'Can customers track their orders?', a: 'Yes, we implement real-time tracking with automatic status updates and notifications via email/SMS at every stage of delivery.' },
    { q: 'Do you support international shipping?', a: 'Yes, we support international shipping with customs documentation, duties calculation, and multi-carrier integration for global deliveries.' }
  ]
  const services = [
    { icon: Truck, title: 'Carrier Integration', desc: 'Seamless integration with Delhivery, BlueDart, Shiprocket, FedEx, and other major shipping providers.', features: ['Delhivery', 'BlueDart', 'Shiprocket', 'FedEx'], color: 'from-orange-500 to-amber-600' },
    { icon: MapPin, title: 'Real-Time Tracking', desc: 'Live order tracking with automatic status updates and customer notifications at every stage.', features: ['Live', 'Updates', 'Notifications', 'Transparent'], color: 'from-blue-500 to-cyan-600' },
    { icon: Clock, title: 'Rate Calculation', desc: 'Automatic shipping rate calculation based on weight, dimensions, and destination with best rate shopping.', features: ['Automatic', 'Weight-Based', 'Best Rates', 'Accurate'], color: 'from-green-500 to-emerald-600' },
    { icon: Globe, title: 'International Shipping', desc: 'Global shipping support with customs documentation, duties calculation, and international carrier integration.', features: ['Global', 'Customs', 'Duties', 'International'], color: 'from-purple-500 to-violet-600' },
    { icon: Package, title: 'Label Generation', desc: 'Automated shipping label generation with barcode and tracking information for efficient processing.', features: ['Labels', 'Barcodes', 'Automated', 'Efficient'], color: 'from-pink-500 to-rose-600' },
    { icon: Bell, title: 'Delivery Notifications', desc: 'Automated customer notifications via email and SMS at key delivery milestones.', features: ['Email', 'SMS', 'Automated', 'Milestones'], color: 'from-indigo-500 to-blue-600' }
  ]
  const stats = [{ value: '10+', label: 'Carriers' }, { value: 'Real-Time', label: 'Tracking' }, { value: 'Auto', label: 'Labels' }, { value: 'Global', label: 'Reach' }]
  const process = [{ num: '01', title: 'Assess', desc: 'Evaluate shipping requirements', icon: Target }, { num: '02', title: 'Select', desc: 'Choose optimal carriers', icon: Truck }, { num: '03', title: 'Integrate', desc: 'Connect shipping systems', icon: MapPin }, { num: '04', title: 'Launch', desc: 'Test and go live', icon: Play }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'E-Commerce', url: '/services/e-commerce' }, { name: 'Shipping', url: '/e-commerce/shipping' }]

  return (
    <>
      <SEOHead title='Shipping & Logistics Integration | Bits and Bytes' description='E-commerce shipping integration in Noida, Delhi NCR. Carrier integration, real-time tracking, label generation. Get free consultation!' keywords='shipping integration India, e-commerce logistics Noida, order tracking Delhi NCR' canonical="/e-commerce/shipping" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-100 via-amber-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-orange-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-orange-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700 text-sm font-bold'><Truck size={16} className='text-orange-500' />Deliver Seamlessly</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Shipping &<span className='block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600'>Logistics</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We integrate <strong>comprehensive shipping solutions</strong> with carrier connections, real-time tracking, and automated logistics management.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-orange-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Setup Shipping <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Shipping Services</h2></div>
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
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Deliver With Confidence</h2>
            <p className='text-orange-100 text-lg mb-10 max-w-2xl mx-auto'>Reliable shipping builds customer trust. Let's set up logistics that work.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-orange-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Setup Shipping <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
