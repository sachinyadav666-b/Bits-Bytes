import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { ShoppingCart, Palette, Code, Zap, ArrowRight, CheckCircle, ChevronDown, Target, Play, Shield, Settings } from 'lucide-react'

export default function CustomStorePage() {
  const faqs = [
    { q: 'What is a custom e-commerce store?', a: 'A custom e-commerce store is built from scratch to match your exact requirements—unique design, custom features, and tailored functionality that off-the-shelf platforms cannot provide.' },
    { q: 'When should I choose custom over platforms?', a: 'Choose custom when you need unique features, complex business logic, complete design freedom, or when existing platforms cannot meet your specific requirements.' },
    { q: 'How long does custom development take?', a: 'Custom stores typically take 10-16 weeks depending on complexity. We provide detailed timelines after understanding your requirements.' }
  ]
  const services = [
    { icon: Palette, title: 'Custom Design', desc: 'Unique, brand-aligned designs that stand out from template-based stores and create memorable shopping experiences.', features: ['Unique', 'Brand-Aligned', 'Memorable', 'Professional'], color: 'from-emerald-500 to-green-600' },
    { icon: Code, title: 'Custom Features', desc: 'Build any feature you need—custom product configurators, unique checkout flows, special pricing rules, and more.', features: ['Any Feature', 'Configurators', 'Custom Flows', 'Flexible'], color: 'from-blue-500 to-cyan-600' },
    { icon: Settings, title: 'Custom Integration', desc: 'Integrate with your existing systems—ERP, CRM, inventory, accounting—for seamless business operations.', features: ['ERP', 'CRM', 'Inventory', 'Accounting'], color: 'from-purple-500 to-violet-600' },
    { icon: Zap, title: 'Performance Optimization', desc: 'Custom-built for speed with optimized code, efficient databases, and fast loading times.', features: ['Fast', 'Optimized', 'Efficient', 'Scalable'], color: 'from-orange-500 to-amber-600' },
    { icon: Shield, title: 'Security & Compliance', desc: 'Enterprise-grade security built from the ground up with PCI compliance and data protection.', features: ['PCI Compliant', 'Secure', 'Protected', 'Enterprise'], color: 'from-red-500 to-rose-600' },
    { icon: Target, title: 'Conversion Focus', desc: 'Every element designed to convert—optimized user flows, strategic CTAs, and persuasive layouts.', features: ['Optimized', 'Strategic', 'Persuasive', 'Converting'], color: 'from-indigo-500 to-blue-600' }
  ]
  const stats = [{ value: '100%', label: 'Custom' }, { value: 'Unlimited', label: 'Features' }, { value: '3x', label: 'Conversions' }, { value: 'Full', label: 'Control' }]
  const process = [{ num: '01', title: 'Discovery', desc: 'Understand your unique requirements', icon: Target }, { num: '02', title: 'Design', desc: 'Create custom UI/UX design', icon: Palette }, { num: '03', title: 'Develop', desc: 'Build with custom code', icon: Code }, { num: '04', title: 'Launch', desc: 'Test, deploy, and support', icon: Play }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'E-Commerce', url: '/services/e-commerce' }, { name: 'Custom Store', url: '/e-commerce/custom-store' }]

  return (
    <>
      <SEOHead title='Custom E-Commerce Store Development | Bits and Bytes' description='Custom e-commerce development in Noida, Delhi NCR. Unique designs, custom features, tailored solutions. Get free consultation!' keywords='custom e-commerce India, custom online store Noida, bespoke e-commerce Delhi NCR' canonical="/e-commerce/custom-store" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-100 via-green-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-emerald-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-emerald-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 text-emerald-700 text-sm font-bold'><ShoppingCart size={16} className='text-emerald-500' />Built For You</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Custom E-Commerce<span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600'>Store Development</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>When off-the-shelf platforms don't fit, we build <strong>custom e-commerce solutions</strong> tailored to your exact requirements. Unique design, custom features, and complete control.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-emerald-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Custom Build <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Custom Store Services</h2></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Process</h2></div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-emerald-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-emerald-500 transition-all'><step.icon size={48} className='text-emerald-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>FAQs</h2></div>
            <div className='space-y-4'>{faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-emerald-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}</div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Build Something Unique</h2>
            <p className='text-emerald-100 text-lg mb-10 max-w-2xl mx-auto'>Don't settle for templates. Let's build a custom e-commerce store that's truly yours.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Custom Build <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
