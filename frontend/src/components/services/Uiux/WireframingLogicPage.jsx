import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Layers, Grid, ArrowRight, CheckCircle, ChevronDown, Target, Play, FileText, Monitor, Smartphone, GitBranch } from 'lucide-react'

export default function WireframingLogicPage() {
  const faqs = [
    { q: 'What are wireframes?', a: 'Wireframes are low-fidelity visual representations of a page layout. They define structure, hierarchy, and user flows without visual design details like colors or images.' },
    { q: 'Why are wireframes important?', a: 'Wireframes help identify structural issues early, before visual design and development. They save time and money by catching problems in the planning stage.' },
    { q: 'How detailed are your wireframes?', a: 'We create low-fidelity wireframes for initial structure and high-fidelity wireframes with detailed layouts. The level of detail depends on project needs.' }
  ]
  const services = [
    { icon: Grid, title: 'Low-Fidelity Wireframes', desc: 'Quick sketches and basic layouts to explore structure and user flows before detailed design.', features: ['Structure', 'Layout', 'Quick', 'Exploratory'], color: 'from-blue-500 to-cyan-600' },
    { icon: Monitor, title: 'High-Fidelity Wireframes', desc: 'Detailed wireframes with accurate spacing, typography placeholders, and interactive elements.', features: ['Detailed', 'Accurate', 'Interactive', 'Polished'], color: 'from-purple-500 to-violet-600' },
    { icon: GitBranch, title: 'User Flow Diagrams', desc: 'Visual maps of user journeys through your product, identifying all paths and decision points.', features: ['Journeys', 'Paths', 'Decisions', 'Complete'], color: 'from-green-500 to-emerald-600' },
    { icon: Layers, title: 'Information Architecture', desc: 'Organization of content and navigation structure for intuitive user experiences.', features: ['Content', 'Navigation', 'Hierarchy', 'Structure'], color: 'from-orange-500 to-amber-600' },
    { icon: Smartphone, title: 'Responsive Wireframes', desc: 'Wireframes for desktop, tablet, and mobile to ensure consistent experience across devices.', features: ['Desktop', 'Tablet', 'Mobile', 'Responsive'], color: 'from-pink-500 to-rose-600' },
    { icon: FileText, title: 'Documentation', desc: 'Clear documentation of wireframe decisions, annotations, and specifications for development teams.', features: ['Annotations', 'Specs', 'Clear', 'Detailed'], color: 'from-indigo-500 to-blue-600' }
  ]
  const stats = [{ value: '60%', label: 'Faster Design' }, { value: '40%', label: 'Fewer Changes' }, { value: '100%', label: 'Clear Structure' }, { value: '2x', label: 'Better Results' }]
  const process = [{ num: '01', title: 'Define', desc: 'Define page requirements and user goals', icon: Target }, { num: '02', title: 'Structure', desc: 'Create information architecture', icon: Layers }, { num: '03', title: 'Wireframe', desc: 'Build layouts and user flows', icon: Grid }, { num: '04', title: 'Review', desc: 'Validate with stakeholders', icon: Play }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'UI/UX Design', url: '/services/ui-ux-design' }, { name: 'Wireframing & Logic', url: '/ui-ux-design/wireframing-logic' }]

  return (
    <>
      <SEOHead title='Wireframing & Logic Services - UI/UX Design | Bits and Bytes' description='Professional wireframing services in Noida, Delhi NCR. User flows, information architecture, responsive wireframes. Get free consultation!' keywords='wireframing services India, user flow design, information architecture Noida' canonical="/ui-ux-design/wireframing-logic" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 via-cyan-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-blue-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-blue-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 text-sm font-bold'><Layers size={16} className='text-blue-500' />Structure First</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Wireframing &<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>Logic Design</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>Before we add colors and visuals, we focus on <strong>structure and logic</strong>. Wireframing is where we define how your product works—layouts, user flows, and navigation that make sense.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Planning <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Wireframing Services</h2></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Process</h2></div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-blue-500 transition-all'><step.icon size={48} className='text-blue-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>FAQs</h2></div>
            <div className='space-y-4'>{faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-blue-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}</div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Plan Before You Build</h2>
            <p className='text-blue-100 text-lg mb-10 max-w-2xl mx-auto'>Good wireframes lead to better products. Let's plan the structure that makes your product intuitive and effective.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Planning <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
