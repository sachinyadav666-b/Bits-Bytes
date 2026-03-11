import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { BarChart3, Users, Target, FileText, ArrowRight, ChevronDown, Play, Eye, MessageSquare, TrendingUp } from 'lucide-react'

export default function UsabilityTestingPage() {
  const faqs = [
    { q: 'What is usability testing?', a: 'Usability testing observes real users interacting with your product to identify issues, frustrations, and opportunities for improvement. It validates design decisions with actual user behavior.' },
    { q: 'When should we do usability testing?', a: 'Ideally, test early and often—during wireframing, prototyping, and after launch. Early testing catches issues before development, saving time and money.' },
    { q: 'How many users do you test with?', a: 'Research shows that 5 users can identify about 85% of usability issues. We typically test with 5-8 users per round, with multiple rounds for complex products.' }
  ]
  const services = [
    { icon: Users, title: 'Moderated Testing', desc: 'Live sessions where we guide users through tasks and observe their behavior, gathering rich qualitative insights.', features: ['Live', 'Guided', 'Rich Insights', 'Questions'], color: 'from-indigo-500 to-blue-600' },
    { icon: Eye, title: 'Unmoderated Testing', desc: 'Remote, self-guided tests that scale easily and gather data from diverse users across locations.', features: ['Remote', 'Scalable', 'Diverse', 'Flexible'], color: 'from-blue-500 to-cyan-600' },
    { icon: Target, title: 'Task Analysis', desc: 'Measuring how users complete specific tasks—success rates, time, errors, and satisfaction.', features: ['Success Rate', 'Time', 'Errors', 'Satisfaction'], color: 'from-green-500 to-emerald-600' },
    { icon: TrendingUp, title: 'Heuristic Evaluation', desc: 'Expert review of your product against established usability principles and best practices.', features: ['Expert Review', 'Principles', 'Best Practices', 'Recommendations'], color: 'from-purple-500 to-violet-600' },
    { icon: MessageSquare, title: 'User Feedback', desc: 'Gathering qualitative feedback through interviews, surveys, and feedback forms.', features: ['Interviews', 'Surveys', 'Feedback', 'Qualitative'], color: 'from-orange-500 to-amber-600' },
    { icon: FileText, title: 'Reports & Recommendations', desc: 'Clear, actionable reports with findings, prioritized issues, and recommendations for improvement.', features: ['Findings', 'Priority', 'Recommendations', 'Actionable'], color: 'from-pink-500 to-rose-600' }
  ]
  const stats = [{ value: '85%', label: 'Issues Found' }, { value: '5', label: 'Users Needed' }, { value: '3x', label: 'Better UX' }, { value: '50%', label: 'Less Risk' }]
  const process = [{ num: '01', title: 'Plan', desc: 'Define goals, tasks, and user criteria', icon: Target }, { num: '02', title: 'Recruit', desc: 'Find and screen test participants', icon: Users }, { num: '03', title: 'Test', desc: 'Conduct testing sessions', icon: Play }, { num: '04', title: 'Report', desc: 'Analyze and report findings', icon: FileText }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'UI/UX Design', url: '/services/ui-ux-design' }, { name: 'Usability Testing', url: '/ui-ux-design/usability-testing' }]

  return (
    <>
      <SEOHead title='Usability Testing Services - User Testing | Bits and Bytes' description='Professional usability testing in Noida, Delhi NCR. User testing, task analysis, heuristic evaluation. Validate designs with real users. Get free consultation!' keywords='usability testing India, user testing Noida, UX testing Delhi NCR' canonical="/ui-ux-design/usability-testing" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-100 via-blue-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-indigo-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-indigo-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 text-indigo-700 text-sm font-bold'><BarChart3 size={16} className='text-indigo-500' />Test With Real Users</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Usability<span className='block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600'>Testing</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We validate designs with <strong>real users</strong> to identify issues and improve experiences before launch. Usability testing reduces risk and builds confidence in design decisions.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Testing <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Testing Services</h2></div>
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
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Confidence in Your Design</h2>
            <p className='text-indigo-100 text-lg mb-10 max-w-2xl mx-auto'>User testing reduces risk and validates your design decisions. Let's ensure your product works for real people.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Testing <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
