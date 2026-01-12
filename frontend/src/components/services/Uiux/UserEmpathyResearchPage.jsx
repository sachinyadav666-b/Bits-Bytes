import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Users, Heart, Search, MessageSquare, Target, FileText, ArrowRight, CheckCircle, ChevronDown, Play, Eye, Brain, Lightbulb } from 'lucide-react'

export default function UserEmpathyResearchPage() {
  const pageTitle = 'User Empathy & Research Services - UI/UX Design | Bits and Bytes'
  const pageDescription = 'Professional user research services in Noida, Delhi NCR. User interviews, behavior analysis, persona creation. Design based on real user insights. Get free consultation!'
  const pageKeywords = 'user research India, user empathy design, UX research Noida, user interviews, persona creation, behavior analysis Delhi NCR'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'UI/UX Design', url: '/services/ui-ux-design' }, { name: 'User Empathy & Research', url: 'services/ui-ux-design/user-empathy-research' }]

  const faqs = [
    { q: 'What is User Empathy in UI/UX Design?', a: 'User empathy is the practice of understanding users on a deeper level—their needs, motivations, frustrations, and behaviors. It forms the foundation of human-centered design and ensures solutions are built for real people, not assumptions.' },
    { q: 'Why is user research important?', a: 'User research validates design decisions with real data. It helps identify pain points, discover opportunities, and ensure the final product meets actual user needs. Skipping research often leads to costly redesigns later.' },
    { q: 'What research methods do you use?', a: 'We use various methods including user interviews, surveys, behavior analytics, competitive analysis, empathy mapping, and persona creation. The methods depend on project requirements and available resources.' },
    { q: 'How long does the research phase take?', a: 'Research typically takes 1-3 weeks depending on scope. Quick discovery may take a week, while comprehensive research for complex products may take longer. We always recommend adequate research time.' },
    { q: 'Do you conduct research for existing products?', a: 'Yes, we conduct research for existing products to identify improvement opportunities, understand user pain points, and validate redesign decisions. Research is valuable at any stage of product development.' }
  ]

  const services = [
    { icon: MessageSquare, title: 'User Interviews', desc: 'Direct conversations with users to understand their needs, frustrations, and expectations. We uncover insights that surveys and analytics cannot reveal.', features: ['In-depth', 'Qualitative', 'Direct', 'Insightful'], color: 'from-pink-500 to-rose-600' },
    { icon: Search, title: 'Behavior Analysis', desc: 'Analysis of how users interact with products—what they click, where they struggle, and where they drop off. Data-driven insights for informed decisions.', features: ['Analytics', 'Heatmaps', 'User Flows', 'Drop-offs'], color: 'from-blue-500 to-cyan-600' },
    { icon: Users, title: 'Persona Creation', desc: 'Creating detailed user personas that represent your target audience. Personas guide design decisions and keep the team aligned on who they\'re designing for.', features: ['Demographics', 'Goals', 'Pain Points', 'Behaviors'], color: 'from-purple-500 to-violet-600' },
    { icon: Heart, title: 'Empathy Mapping', desc: 'Visual representations of what users think, feel, say, and do. Empathy maps help teams understand user perspectives and design with compassion.', features: ['Think', 'Feel', 'Say', 'Do'], color: 'from-green-500 to-emerald-600' },
    { icon: Eye, title: 'Competitive Analysis', desc: 'Understanding what competitors do well and where they fall short. Identify opportunities to differentiate and improve upon existing solutions.', features: ['Competitors', 'Gaps', 'Opportunities', 'Benchmarks'], color: 'from-orange-500 to-amber-600' },
    { icon: FileText, title: 'Research Reports', desc: 'Comprehensive documentation of findings, insights, and recommendations. Clear, actionable reports that guide design and development teams.', features: ['Findings', 'Insights', 'Recommendations', 'Actionable'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '50%', label: 'Fewer Redesigns' }, { value: '2x', label: 'User Satisfaction' }, { value: '40%', label: 'Faster Decisions' }, { value: '3x', label: 'Better Results' }]

  const benefits = ['Design based on real user needs, not assumptions', 'Identify pain points and opportunities early', 'Reduce costly redesigns and development changes', 'Build products that users actually want', 'Create empathy across the entire team', 'Make confident, data-driven design decisions']

  const process = [
    { num: '01', title: 'Plan', desc: 'Define research goals, questions, and methods', icon: Target },
    { num: '02', title: 'Gather', desc: 'Conduct interviews, surveys, and analysis', icon: Search },
    { num: '03', title: 'Synthesize', desc: 'Analyze data and extract key insights', icon: Brain },
    { num: '04', title: 'Document', desc: 'Create personas, maps, and reports', icon: FileText }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/ui-ux-design/user-empathy-research" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pink-100 via-rose-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-pink-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-pink-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 text-pink-700 text-sm font-bold'><Heart size={16} className='text-pink-500' />Understand Your Users</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>User Empathy &<span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>Research</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>At Bits and Bytes IT Solution, we believe that the foundation of great design is <strong>understanding real users</strong>. User Empathy and Research is where every successful digital product begins.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>Before designing a single screen, we invest time in understanding who your users are, what they need, and how they behave. This research-driven approach ensures that every design decision is grounded in real insights.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-pink-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Research <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100'>
                  <div className='text-center mb-4'><Users size={40} className='mx-auto text-pink-500 mb-2' /><h3 className='font-bold'>User Research</h3></div>
                  <div className='space-y-3'>
                    {['User Interviews', 'Behavior Analysis', 'Persona Creation', 'Empathy Mapping'].map((item, i) => (<div key={i} className='flex items-center gap-3 p-3 bg-pink-50 rounded-xl'><CheckCircle size={18} className='text-pink-500' /><span className='text-sm font-medium'>{item}</span></div>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Why User Research <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>Matters</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>Many digital products fail because they are built on assumptions rather than real user insights. User research eliminates guesswork and provides a solid foundation for design decisions.</p>
                <div className='space-y-3'>{benefits.map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-pink-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}</div>
              </div>
              <div className='bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Research Impact</h3>
                <div className='space-y-4'>
                  <div className='bg-white rounded-xl p-4'><div className='flex justify-between mb-2'><span className='font-medium'>User Satisfaction</span><span className='text-pink-600 font-bold'>+85%</span></div><div className='h-2 bg-slate-200 rounded-full'><div className='h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full w-[85%]' /></div></div>
                  <div className='bg-white rounded-xl p-4'><div className='flex justify-between mb-2'><span className='font-medium'>Design Confidence</span><span className='text-pink-600 font-bold'>+90%</span></div><div className='h-2 bg-slate-200 rounded-full'><div className='h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full w-[90%]' /></div></div>
                  <div className='bg-white rounded-xl p-4'><div className='flex justify-between mb-2'><span className='font-medium'>Reduced Redesigns</span><span className='text-pink-600 font-bold'>-50%</span></div><div className='h-2 bg-slate-200 rounded-full'><div className='h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full w-[75%]' /></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Research Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>Comprehensive user research services to understand your audience and inform design decisions.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>

        <section className='py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Research Process</h2><p className='text-slate-300 max-w-2xl mx-auto'>A structured approach to understanding your users</p></div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-pink-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-pink-500 transition-all'><step.icon size={48} className='text-pink-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-pink-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        <section className='py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Design With Empathy</h2>
            <p className='text-pink-100 text-lg mb-10 max-w-2xl mx-auto'>Great design starts with understanding real users. Let's conduct research that leads to products people love.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-pink-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Research <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
