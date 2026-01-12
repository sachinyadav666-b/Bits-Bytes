import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Lightbulb, Grid, FileText, Palette, ArrowRight, ChevronDown, Target, Play, Layers, Book, Package } from 'lucide-react'

export default function DesignSystemsPage() {
  const faqs = [
    { q: 'What is a design system?', a: 'A design system is a collection of reusable components, guidelines, and documentation that ensures consistency across all digital products. It includes UI components, style guides, and usage rules.' },
    { q: 'Why do I need a design system?', a: 'Design systems speed up development, ensure consistency, reduce design debt, and make it easier to scale products. They are essential for teams building multiple products or features.' },
    { q: 'How long does it take to build?', a: 'A basic design system takes 4-6 weeks. Comprehensive systems for large organizations may take 8-12 weeks. We can also help maintain and evolve existing systems.' }
  ]
  const services = [
    { icon: Package, title: 'Component Library', desc: 'Reusable UI components—buttons, forms, cards, modals—designed for flexibility and consistency across products.', features: ['Reusable', 'Flexible', 'Consistent', 'Documented'], color: 'from-green-500 to-emerald-600' },
    { icon: Palette, title: 'Style Guide', desc: 'Colors, typography, spacing, and visual guidelines that define your brand\'s digital appearance.', features: ['Colors', 'Typography', 'Spacing', 'Guidelines'], color: 'from-blue-500 to-cyan-600' },
    { icon: Book, title: 'Documentation', desc: 'Clear documentation for designers and developers on how to use components and follow guidelines.', features: ['Clear', 'Complete', 'Searchable', 'Examples'], color: 'from-purple-500 to-violet-600' },
    { icon: Grid, title: 'Design Tokens', desc: 'Variables for colors, spacing, and typography that can be shared across design tools and code.', features: ['Variables', 'Shared', 'Consistent', 'Scalable'], color: 'from-orange-500 to-amber-600' },
    { icon: Layers, title: 'Pattern Library', desc: 'Common UI patterns—navigation, search, forms—documented with usage guidelines and best practices.', features: ['Patterns', 'Best Practices', 'Usage', 'Examples'], color: 'from-pink-500 to-rose-600' },
    { icon: FileText, title: 'Governance', desc: 'Processes for maintaining, updating, and evolving the design system over time.', features: ['Processes', 'Updates', 'Evolution', 'Ownership'], color: 'from-indigo-500 to-blue-600' }
  ]
  const stats = [{ value: '50%', label: 'Faster Design' }, { value: '100%', label: 'Consistency' }, { value: '3x', label: 'Scalability' }, { value: '40%', label: 'Less Debt' }]
  const process = [{ num: '01', title: 'Audit', desc: 'Audit existing designs and components', icon: Target }, { num: '02', title: 'Define', desc: 'Define tokens and guidelines', icon: Palette }, { num: '03', title: 'Build', desc: 'Create component library', icon: Package }, { num: '04', title: 'Document', desc: 'Document and launch', icon: Book }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'UI/UX Design', url: '/services/ui/ux-design' }, { name: 'Design Systems', url: '/ui-ux/design-systems' }]

  return (
    <>
      <SEOHead title='Design Systems Services - Component Libraries | Bits and Bytes' description='Professional design system services in Noida, Delhi NCR. Component libraries, style guides, documentation. Scalable, consistent design. Get free consultation!' keywords='design systems India, component library Noida, style guide Delhi NCR' canonical="/ui-ux-design/design-systems" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-100 via-emerald-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-green-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-green-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 text-sm font-bold'><Lightbulb size={16} className='text-green-500' />Scale With Consistency</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Design<span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'>Systems</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We build <strong>scalable design systems</strong> that ensure consistency across all your digital products. Components, guidelines, and documentation that grow with your organization.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-green-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Build Your System <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Design System Services</h2></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Process</h2></div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-green-500 transition-all'><step.icon size={48} className='text-green-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>FAQs</h2></div>
            <div className='space-y-4'>{faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-green-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}</div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Scale With Confidence</h2>
            <p className='text-green-100 text-lg mb-10 max-w-2xl mx-auto'>A design system is an investment in efficiency and consistency. Let's build a foundation that grows with your organization.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-green-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Build Your System <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
