import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Database, Globe, Smartphone, Zap, Code, Layers, ArrowRight, CheckCircle, ChevronDown, Target, Play, Server, RefreshCw, Monitor } from 'lucide-react'

export default function HeadlessCMSPage() {
  const pageTitle = 'Headless CMS Development Services - API-First Content Management'
  const pageDescription = 'Professional Headless CMS development in Noida, Delhi NCR. Strapi, Contentful, Sanity integration. Flexible, scalable content management. Multi-channel delivery. Get free consultation!'
  const pageKeywords = 'headless CMS India, Strapi development, Contentful integration, API-first CMS, headless WordPress, content management Noida, multi-channel content delivery'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Web Development', url: '/services/web-development' }, { name: 'Headless CMS', url: '/web-development/headless-cms' }]

  const faqs = [
    { q: 'What is a Headless CMS?', a: 'A Headless CMS is a content management system that separates the backend (content repository) from the frontend (presentation layer). Content is delivered through APIs and can be shown on any platform or device instead of being limited to a particular website layout.' },
    { q: 'Why are businesses moving to Headless CMS?', a: 'Businesses choose headless CMS for faster content delivery, publishing on all channels (web, mobile, apps, IoT), more freedom for developers and marketers, better scalability, reduced security risks, and seamless integration with modern frameworks.' },
    { q: 'Which Headless CMS platforms do you work with?', a: 'We work with popular platforms including Strapi, Contentful, Sanity, and can also create custom headless solutions. We recommend the best platform based on your specific requirements and budget.' },
    { q: 'Can you migrate from traditional CMS to headless?', a: 'Yes, we help businesses migrate from traditional CMS platforms like WordPress to headless CMS without data loss, SEO impact, or downtime. We ensure a smooth transition process.' },
    { q: 'Is headless CMS SEO-friendly?', a: 'Yes! Headless CMS provides faster, performance-optimized content delivery which improves SEO. We maintain clean URLs, structured data, metadata management, and optimized delivery for search-engine friendliness.' }
  ]

  const cmsOptions = [
    { name: 'Strapi', desc: 'Open-source, self-hosted headless CMS', features: ['Open Source', 'Self-Hosted', 'Customizable', 'Free'] },
    { name: 'Contentful', desc: 'Enterprise-grade cloud headless CMS', features: ['Cloud', 'Enterprise', 'Scalable', 'CDN'] },
    { name: 'Sanity', desc: 'Real-time collaborative content platform', features: ['Real-time', 'Collaborative', 'Flexible', 'GROQ'] },
    { name: 'Custom', desc: 'Tailored headless CMS solutions', features: ['Custom API', 'Your Rules', 'Full Control', 'Scalable'] }
  ]

  const services = [
    { icon: Layers, title: 'CMS Architecture & Strategy', desc: 'We analyze your business needs, content workflows, and digital platforms to design a headless CMS architecture that ensures flexibility, performance, and scalability.', features: ['Analysis', 'Planning', 'Architecture', 'Strategy'], color: 'from-violet-500 to-purple-600' },
    { icon: Code, title: 'Custom Headless CMS Development', desc: 'We build customized headless CMS solutions tailored to your content structure, workflows, and user roles, ensuring smooth content management and delivery.', features: ['Custom Build', 'Workflows', 'User Roles', 'Content Structure'], color: 'from-blue-500 to-cyan-600' },
    { icon: Globe, title: 'API Integration & Delivery', desc: 'Our team develops secure APIs to deliver content seamlessly across websites, mobile apps, PWAs, and third-party systems while maintaining performance and reliability.', features: ['REST API', 'GraphQL', 'Multi-channel', 'Secure'], color: 'from-green-500 to-emerald-600' },
    { icon: Monitor, title: 'Frontend Integration', desc: 'We integrate headless CMS with modern frontend technologies to create fast, dynamic, and user-friendly digital experiences without limitations.', features: ['React', 'Next.js', 'Vue', 'Dynamic'], color: 'from-orange-500 to-amber-600' },
    { icon: RefreshCw, title: 'Migration from Traditional CMS', desc: 'We help businesses migrate from traditional CMS platforms to headless CMS without data loss, SEO impact, or downtime.', features: ['WordPress', 'Drupal', 'Data Migration', 'Zero Downtime'], color: 'from-pink-500 to-rose-600' },
    { icon: Zap, title: 'Performance & Scalability', desc: 'Our headless CMS solutions are optimized for speed and designed to scale effortlessly as your content, traffic, and platforms grow.', features: ['Fast Loading', 'CDN', 'Caching', 'Scalable'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '3x', label: 'Faster Delivery' }, { value: '100%', label: 'API Coverage' }, { value: 'Multi', label: 'Channel Ready' }, { value: '99.9%', label: 'Uptime' }]

  const benefits = [
    'Content delivery and performance speeded up remarkably',
    'Publishing on all channels including web, mobile, apps, and IoT',
    'More freedom given to both developers and marketers',
    'Selling businesses getting better scalability',
    'Decoupled architecture leading to less security risks',
    'Modern frameworks and tools getting integrated without any problem'
  ]

  const process = [
    { num: '01', title: 'Discovery', desc: 'Understand your content strategy, technical needs, and future ambitions', icon: Target },
    { num: '02', title: 'Architecture', desc: 'Create robust headless CMS architecture aligned with business goals', icon: Layers },
    { num: '03', title: 'Development', desc: 'Build using latest practices, clean architecture, and API-first design', icon: Code },
    { num: '04', title: 'Launch', desc: 'Rigorous testing for security, performance, and compatibility', icon: Play }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/web-development/headless-cms" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-violet-100 via-purple-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-violet-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-violet-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 text-violet-700 text-sm font-bold'><Database size={16} className='text-violet-500' />API-First Content</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Headless<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600'>CMS</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We offer top-of-the-line <strong>Headless CMS Development</strong> services that enable companies to manage and distribute content quickly, intelligently, and more powerfully across different digital channels.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>In today's digital ecosystem where content is required to be posted on websites, mobile apps, PWAs, and third-party platforms at the same time, classic CMS systems are found to be lacking. Headless CMS overcomes this issue by splitting the management of content from its display.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-violet-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Your Project <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-violet-200 to-purple-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100'>
                  <div className='text-center mb-4'><Database size={40} className='mx-auto text-violet-500 mb-2' /><h3 className='font-bold'>Content Delivery</h3></div>
                  <div className='flex items-center justify-center gap-4 mb-6'>
                    <div className='w-16 h-16 rounded-xl bg-violet-100 flex items-center justify-center'><Database size={24} className='text-violet-600' /></div>
                    <div className='flex flex-col items-center'><ArrowRight size={20} className='text-violet-400 mb-1' /><span className='text-xs text-slate-400'>API</span></div>
                    <div className='space-y-2'>
                      <div className='w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center'><Monitor size={18} className='text-blue-600' /></div>
                      <div className='w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center'><Smartphone size={18} className='text-green-600' /></div>
                      <div className='w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center'><Globe size={18} className='text-orange-600' /></div>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-2'>
                    {['Web', 'Mobile', 'PWA', 'IoT'].map((channel, i) => (<div key={i} className='p-2 bg-slate-50 rounded-lg text-center text-xs font-medium'>{channel}</div>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CMS Options */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Headless CMS <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600'>Platforms</span></h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>We work with leading headless CMS platforms to deliver the best solution for your needs</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {cmsOptions.map((cms, i) => (
                <div key={i} className='bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-violet-200 transition-all'>
                  <h3 className='text-xl font-black text-slate-900 mb-2'>{cms.name}</h3>
                  <p className='text-slate-600 text-sm mb-4'>{cms.desc}</p>
                  <div className='flex flex-wrap gap-2'>
                    {cms.features.map((f, j) => (<span key={j} className='px-2 py-1 bg-violet-50 text-violet-600 text-xs rounded-full'>{f}</span>))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Headless */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Why Businesses Are Moving to <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600'>Headless CMS</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>With the increase in the complexity of digital experiences, the content systems that businesses use must have flexibility and adaptability. The headless CMS presents a number of important benefits compared with the traditional CMS:</p>
                <div className='space-y-3'>
                  {benefits.map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-violet-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-6'>Traditional vs Headless</h3>
                <div className='space-y-4'>
                  <div className='bg-white rounded-xl p-4'>
                    <div className='flex justify-between mb-2'><span className='font-medium'>Flexibility</span><span className='text-violet-600 font-bold'>10x More</span></div>
                    <div className='h-2 bg-slate-200 rounded-full'><div className='h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full w-[95%]' /></div>
                  </div>
                  <div className='bg-white rounded-xl p-4'>
                    <div className='flex justify-between mb-2'><span className='font-medium'>Performance</span><span className='text-violet-600 font-bold'>3x Faster</span></div>
                    <div className='h-2 bg-slate-200 rounded-full'><div className='h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full w-[85%]' /></div>
                  </div>
                  <div className='bg-white rounded-xl p-4'>
                    <div className='flex justify-between mb-2'><span className='font-medium'>Scalability</span><span className='text-violet-600 font-bold'>Unlimited</span></div>
                    <div className='h-2 bg-slate-200 rounded-full'><div className='h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full w-[90%]' /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Headless CMS Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>End-to-end Headless CMS solutions covering strategy, development, integration, and ongoing support.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Development Approach</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>Structured, strategic, and performance-driven headless CMS development</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-violet-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-violet-500 transition-all'><step.icon size={48} className='text-violet-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-violet-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Let's Build a Smarter Content Platform</h2>
            <p className='text-violet-100 text-lg mb-10 max-w-2xl mx-auto'>Your content needs the most flexible, fastest and scalable system. Build a headless CMS solution that grows with your organization.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-violet-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Your Project <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
