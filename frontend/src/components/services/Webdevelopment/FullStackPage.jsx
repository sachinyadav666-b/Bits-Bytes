import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Code, Server, Database, Globe, Layers, Shield, Zap, ArrowRight, CheckCircle, ChevronDown, Target, Play, Monitor, Cloud, Lock, GitBranch } from 'lucide-react'

export default function FullStackPage() {
  const pageTitle = 'Full Stack Web Development Services - Bits and Bytes IT Solution'
  const pageDescription = 'End-to-end full stack web development services in Noida, Delhi NCR. Front-end, back-end, databases, APIs. React, Node.js, MongoDB. Custom web applications. Get free consultation!'
  const pageKeywords = 'full stack development India, full stack web development Noida, React Node.js development, custom web application, MERN stack development, web app development Delhi NCR'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Web Development', url: '/services/web-development' }, { name: 'Full Stack', url: '/web-development/full-stack' }]

  const faqs = [
    { q: 'What is Full Stack Web Development?', a: 'Full stack web development covers both the client side (front end) and the server side (back end) of a web application. That means user interfaces, server logic, databases, APIs, and overall system architecture.' },
    { q: 'What technologies do you use?', a: 'We use modern technologies including React, Next.js for front-end, Node.js, Express for back-end, MongoDB, PostgreSQL for databases, and cloud platforms like AWS for deployment.' },
    { q: 'How long does a full stack project take?', a: 'Timeline varies based on complexity. Simple web apps take 4-6 weeks, while complex enterprise platforms may take 12-16 weeks. We provide detailed estimates after requirement analysis.' },
    { q: 'Do you provide ongoing support?', a: 'Yes, we offer long-term support and maintenance to ensure your application runs smoothly and stays updated with the latest security patches and features.' },
    { q: 'Can you work with existing systems?', a: 'Absolutely! We can upgrade existing systems, integrate with third-party services, and modernize legacy applications while maintaining data integrity.' }
  ]

  const services = [
    { icon: Monitor, title: 'Front-End Development', desc: 'We create engaging, responsive, and user-friendly interfaces that deliver an exceptional user experience. Our front-end development focuses on clean design, smooth navigation, fast loading, and mobile responsiveness.', features: ['React/Next.js', 'Responsive Design', 'Fast Loading', 'Mobile-First'], color: 'from-blue-500 to-cyan-600' },
    { icon: Server, title: 'Back-End Development', desc: 'Our back-end solutions are built for performance, security, and scalability. We develop powerful server-side systems that handle business logic, authentication, data processing, and integrations efficiently.', features: ['Node.js', 'Express', 'REST APIs', 'Authentication'], color: 'from-purple-500 to-violet-600' },
    { icon: Database, title: 'Database Design & Management', desc: 'We design and manage secure, scalable databases that ensure smooth data handling, fast queries, and reliable performance. Our database solutions support both structured and unstructured data requirements.', features: ['MongoDB', 'PostgreSQL', 'Redis', 'Data Modeling'], color: 'from-green-500 to-emerald-600' },
    { icon: Globe, title: 'API & Third-Party Integration', desc: 'We build and integrate secure APIs to connect your web application with payment gateways, CRM systems, ERP platforms, analytics tools, and other third-party services.', features: ['REST APIs', 'GraphQL', 'Payment Gateways', 'CRM/ERP'], color: 'from-orange-500 to-amber-600' },
    { icon: Layers, title: 'Custom Web Applications', desc: 'From dashboards and admin panels to complex enterprise platforms, we develop custom web applications that streamline operations, automate processes, and improve productivity.', features: ['Dashboards', 'Admin Panels', 'Enterprise Apps', 'Automation'], color: 'from-pink-500 to-rose-600' },
    { icon: Cloud, title: 'Cloud Deployment', desc: 'We deploy your applications on reliable cloud infrastructure ensuring high availability, scalability, and security. Our cloud solutions support zero downtime deployments.', features: ['AWS', 'Docker', 'CI/CD', 'Auto-scaling'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '100+', label: 'Apps Delivered' }, { value: '99.9%', label: 'Uptime' }, { value: '<500ms', label: 'Response Time' }, { value: '4.9★', label: 'Client Rating' }]

  const whyChooseUs = [
    { icon: Code, title: 'End-to-End Expertise', desc: 'Full stack development under one roof' },
    { icon: Target, title: 'Custom Solutions', desc: 'Aligned with your business goals' },
    { icon: Shield, title: 'Secure Architecture', desc: 'Enterprise-grade security built-in' },
    { icon: Zap, title: 'High Performance', desc: 'Optimized for speed and scalability' },
    { icon: Lock, title: 'SEO-Friendly', desc: 'Mobile-optimized development' },
    { icon: GitBranch, title: 'Long-term Support', desc: 'Maintenance and updates included' }
  ]

  const process = [
    { num: '01', title: 'Discovery', desc: 'Learning your business goals, user needs, and technical challenges', icon: Target },
    { num: '02', title: 'Architecture', desc: 'Designing scalable system architecture and setting milestones', icon: Layers },
    { num: '03', title: 'Development', desc: 'Building with best practices, clean code, and agile methods', icon: Code },
    { num: '04', title: 'Testing & Launch', desc: 'Thorough testing for security, performance, and compatibility', icon: Play }
  ]

  const idealFor = ['End-to-end development under one roof', 'Faster development cycles', 'Scalable, future-ready web applications', 'Secure, performance-optimized systems']

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/web-development/full-stack" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 via-cyan-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-blue-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-blue-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 text-sm font-bold'><Code size={16} className='text-blue-500' />End-to-End Solutions</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Full Stack<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>Web Development</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We provide <strong>full stack web development services</strong> that cover every part of modern web app development — from clear, user-friendly front ends to solid back-end systems.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>In today's competitive digital world, a business needs more than just a website. It needs complete web solutions that are fast, secure, easy to use, and able to scale as the business grows.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Your Project <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
                </div>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100'>
                  <div className='h-8 bg-slate-100 rounded-lg flex items-center px-3 mb-4'><div className='flex gap-1.5'><div className='w-3 h-3 rounded-full bg-red-400' /><div className='w-3 h-3 rounded-full bg-amber-400' /><div className='w-3 h-3 rounded-full bg-green-400' /></div><span className='text-xs text-slate-400 ml-3'>full-stack-app.js</span></div>
                  <div className='font-mono text-sm space-y-2 text-slate-600'>
                    <div><span className='text-purple-600'>const</span> stack = {'{'}</div>
                    <div className='pl-4'><span className='text-blue-600'>frontend:</span> <span className='text-green-600'>'React/Next.js'</span>,</div>
                    <div className='pl-4'><span className='text-blue-600'>backend:</span> <span className='text-green-600'>'Node.js/Express'</span>,</div>
                    <div className='pl-4'><span className='text-blue-600'>database:</span> <span className='text-green-600'>'MongoDB/PostgreSQL'</span>,</div>
                    <div className='pl-4'><span className='text-blue-600'>deploy:</span> <span className='text-green-600'>'AWS/Docker'</span></div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Who We <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>Work With</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>We partner with startups, entrepreneurs, SMEs, enterprises, and organizations across industries. Whether you're creating a new digital product, upgrading an existing system, or launching a complex web app, our full stack services are tailored to your business needs.</p>
                <p className='text-slate-600 mb-6 leading-relaxed'>These solutions are ideal for businesses that want:</p>
                <div className='space-y-3'>
                  {idealFor.map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-blue-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {whyChooseUs.map((item, i) => (<div key={i} className='bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all'><item.icon size={28} className='text-blue-500 mb-3' /><h4 className='font-bold text-slate-900 mb-1'>{item.title}</h4><p className='text-sm text-slate-500'>{item.desc}</p></div>))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Full Stack Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>Complete full stack development solutions covering planning, design, development, testing, deployment, and ongoing support.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Development Approach</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>At Bits and Bytes IT Solution, our approach is clear, transparent, and focused on results.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-blue-500 transition-all'><step.icon size={48} className='text-blue-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* SEO & Security */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-8'>
              <div className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white mb-6'><Target size={28} /></div>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>SEO-Ready & Performance-Optimized</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>Our full stack development services are built with SEO and performance in mind. We ensure clean URL structures, optimized page speed, mobile responsiveness, and search-engine-friendly architecture.</p>
                <p className='text-slate-600 leading-relaxed'>By aligning development with SEO best practices, we help businesses improve visibility, reduce bounce rates, and deliver better user experiences.</p>
              </div>
              <div className='bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white mb-6'><Shield size={28} /></div>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Security & Scalability Focus</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>Security and scalability are core to our full stack development process. We implement secure authentication systems, data protection measures, and performance optimization techniques.</p>
                <p className='text-slate-600 leading-relaxed'>Our scalable architecture ensures that your web application can handle increased traffic, data, and feature expansion as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-blue-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Let's Build a Complete Web Solution</h2>
            <p className='text-blue-100 text-lg mb-10 max-w-2xl mx-auto'>Your digital platform needs a solid technical foundation. Let's build a scalable, secure, high-performing web application that grows with your business.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Your Project <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
