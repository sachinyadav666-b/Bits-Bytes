import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../SEOHead'
import { Globe, Code, Zap, Shield, Server, Layers, Database, GitBranch, ArrowRight, CheckCircle, ChevronDown, Sparkles, Monitor, Smartphone, Cloud, Lock, Gauge, FileCode, Target, Award, Users, Play, Rocket, Eye } from 'lucide-react'

export default function WebDevelopmentPage() {
  const pageTitle = 'Web Development Services in Noida, Delhi NCR - Bits and Bytes IT Solution'
  const pageDescription = 'Professional web development services in Noida, Delhi NCR. We create high-performance, SEO-optimized websites using React, Next.js & modern frameworks. Custom websites, e-commerce, web apps. Get free consultation!'
  const pageKeywords = 'web development Noida, website development Delhi NCR, React development, Next.js development, custom website development India, responsive web design, SEO-friendly websites'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Web Development', url: '/services/web-development' }]

  const faqs = [
    { q: 'What technologies do you use for web development?', a: 'We use modern technologies including React, Next.js, Node.js, MongoDB, PostgreSQL, and cloud platforms like AWS. We select the best technology stack based on your specific business requirements and scalability needs.' },
    { q: 'How long does it take to build a website?', a: 'Timeline depends on complexity. A basic business website takes 2-4 weeks, while complex web applications may take 8-12 weeks. We provide detailed timelines after understanding your requirements.' },
    { q: 'Do you provide SEO-optimized websites?', a: 'Yes, SEO is built into our development process from the start. We ensure clean code, fast load times, mobile-friendly layouts, and search-engine-friendly site structure to boost your visibility.' },
    { q: 'Do you offer post-launch support?', a: 'Yes, we offer technical assistance and maintenance packages after launch to help your business run smoothly and ensure long-term success.' },
    { q: 'Can you redesign my existing website?', a: 'Absolutely! We can redesign and modernize your existing website while preserving SEO rankings and improving performance, user experience, and conversions.' }
  ]

  const services = [
    { icon: Code, title: 'Full Stack Development', desc: 'End-to-end web solutions covering front-end, back-end, databases, and APIs for robust, scalable applications.', link: '/web-development/full-stack', features: ['React/Next.js', 'Node.js', 'MongoDB', 'REST APIs'], color: 'from-blue-500 to-cyan-600' },
    { icon: Smartphone, title: 'Progressive Web Apps', desc: 'Fast, reliable & app-like experiences that work offline and can be installed without app stores.', link: '/web-development/pwa', features: ['Offline Support', 'Push Notifications', 'Installable', 'Fast Loading'], color: 'from-purple-500 to-violet-600' },
    { icon: Gauge, title: 'Web Vitals Optimization', desc: 'Improve Core Web Vitals (LCP, FID, CLS) for better SEO rankings and user experience.', link: '/web-development/web-vitals', features: ['LCP < 2.5s', 'FID < 100ms', 'CLS < 0.1', '90+ Score'], color: 'from-amber-500 to-orange-600' },
    { icon: Shield, title: 'Web Security', desc: 'Protect your website from cyber threats with OWASP compliance, SSL, and penetration testing.', link: '/web-development/security', features: ['OWASP', 'SSL/HTTPS', 'Pen Testing', 'Firewalls'], color: 'from-red-500 to-rose-600' },
    { icon: Database, title: 'Headless CMS', desc: 'Flexible, API-first content management with Strapi, Contentful, or Sanity for multi-channel delivery.', link: '/web-development/headless-cms', features: ['Strapi', 'Contentful', 'API-First', 'Multi-channel'], color: 'from-green-500 to-emerald-600' },
    { icon: GitBranch, title: 'CI/CD & DevOps', desc: 'Automate deployments with CI/CD pipelines for faster, safer, and more reliable releases.', link: '/web-development/ci-cd', features: ['GitHub Actions', 'Docker', 'Kubernetes', 'Auto Deploy'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '200+', label: 'Websites Delivered' }, { value: '99.9%', label: 'Uptime Guarantee' }, { value: '<2s', label: 'Load Time' }, { value: '4.9★', label: 'Client Rating' }]

  const whyChooseUs = [
    { icon: Zap, title: 'High-Performance', desc: 'Fast-loading websites optimized for speed and Core Web Vitals' },
    { icon: Shield, title: 'Security First', desc: 'Enterprise-grade security with SSL, firewalls, and data protection' },
    { icon: Target, title: 'SEO-Optimized', desc: 'Built with SEO best practices for better search visibility' },
    { icon: Layers, title: 'Scalable Architecture', desc: 'Future-proof solutions that grow with your business' },
    { icon: Monitor, title: 'Responsive Design', desc: 'Perfect experience on desktop, tablet, and mobile devices' },
    { icon: Cloud, title: 'Cloud-Ready', desc: 'Deployed on reliable cloud infrastructure for zero downtime' }
  ]

  const process = [
    { num: '01', title: 'Discovery', desc: 'Understanding your business objectives, target market, and technical requirements', icon: Target },
    { num: '02', title: 'Planning', desc: 'Creating wireframes, layouts, and development roadmaps based on requirements', icon: FileCode },
    { num: '03', title: 'Development', desc: 'Building with best coding practices, modern frameworks, and performance optimization', icon: Code },
    { num: '04', title: 'Launch & Support', desc: 'Testing, deployment, and ongoing technical assistance for long-term success', icon: Play }
  ]

  const clientTypes = [
    { icon: Rocket, label: 'Startups', desc: 'Launch your brand online' },
    { icon: Users, label: 'SMEs', desc: 'Expand digital presence' },
    { icon: Globe, label: 'Enterprises', desc: 'Scale your operations' },
    { icon: Award, label: 'Organizations', desc: 'Build custom platforms' }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/services/web-development" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero Section */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-100 via-blue-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-100 via-purple-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'>
              <ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>
                {breadcrumbs.map((item, i) => (
                  <li key={i} className='flex items-center gap-2'>
                    {i > 0 && <span>/</span>}
                    {i === breadcrumbs.length - 1 ? (<span className='text-cyan-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-cyan-600 transition-colors'>{item.name}</Link>)}
                  </li>
                ))}
              </ol>
            </nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 text-cyan-700 text-sm font-bold'>
                  <Globe size={16} className='text-cyan-500' />Professional Web Development
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>
                  Creating Powerful<span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>Digital Experiences</span>
                </h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>
                  We provide <strong>professional web development services</strong> that enable companies to create a robust, trustworthy, and performance-based digital presence. Your website is your strongest marketing source, sales channel, and brand representative.
                </p>
                <p className='text-slate-600 mb-8 leading-relaxed'>
                  Our expertise lies in creating contemporary, scalable, and user-friendly websites that provide excellent user experiences, complement marketing activities, and generate quantifiable business outcomes.
                </p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
                  {stats.map((stat, i) => (
                    <div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-cyan-200 transition-all'>
                      <div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>{stat.value}</div>
                      <div className='text-xs text-slate-500'>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Your Project <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
                  <a href='https://wa.me/919876543210' target='_blank' rel='noopener noreferrer'><button className='px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-cyan-500 hover:text-cyan-600 transition-all'>WhatsApp Us</button></a>
                </div>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100'>
                  <div className='flex items-center gap-2 mb-6'>
                    <div className='w-3 h-3 rounded-full bg-red-400' /><div className='w-3 h-3 rounded-full bg-amber-400' /><div className='w-3 h-3 rounded-full bg-green-400' />
                    <span className='text-slate-400 text-xs ml-2'>bits-and-bytes.dev</span>
                  </div>
                  <div className='space-y-4'>
                    <div className='h-32 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center'><Globe size={48} className='text-cyan-500' /></div>
                    <div className='grid grid-cols-3 gap-2'>
                      <div className='h-16 bg-slate-50 rounded-xl flex items-center justify-center'><Code size={20} className='text-slate-400' /></div>
                      <div className='h-16 bg-slate-50 rounded-xl flex items-center justify-center'><Shield size={20} className='text-slate-400' /></div>
                      <div className='h-16 bg-slate-50 rounded-xl flex items-center justify-center'><Zap size={20} className='text-slate-400' /></div>
                    </div>
                    <div className='flex items-center justify-between p-4 bg-green-50 rounded-xl'>
                      <span className='text-sm font-medium text-slate-700'>Performance Score</span>
                      <span className='text-lg font-black text-green-600'>98/100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section className='py-20 bg-gradient-to-br from-slate-50 to-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='max-w-4xl mx-auto text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6'>
                Realizing the Value of an <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>Effective Website</span>
              </h2>
              <p className='text-lg text-slate-600 leading-relaxed'>
                An expertly designed website fulfills an important function in creating trust, credibility, and presence in the online market. Users desire pages that load quickly, offer easy navigation, are mobile-friendly, and provide secure interactions. Search engines give preference to websites that deliver great user experience and technical performance.
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {whyChooseUs.map((item, i) => (
                <div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-cyan-200 transition-all'>
                  <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform'><item.icon size={26} /></div>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>{item.title}</h3>
                  <p className='text-slate-600 text-sm leading-relaxed'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Who We <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>Work With</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>
                  Our clients are startups and entrepreneurs, small and medium-sized businesses, enterprises, and organizations operating in various industries. We provide web development solutions that suit your business needs and development goals.
                </p>
                <p className='text-slate-600 mb-8 leading-relaxed'>
                  We are team players in our approach; we hold close consultation with our clients to know their vision, challenges, and objectives and transform ideas into working digital solutions.
                </p>
                <div className='space-y-4'>
                  {['Launch a new brand online', 'Expand digital presence', 'Refine existing website', 'Build custom web applications', 'Improve website performance'].map((item, i) => (
                    <div key={i} className='flex items-center gap-3'>
                      <CheckCircle size={20} className='text-cyan-500 flex-shrink-0' />
                      <span className='text-slate-700'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {clientTypes.map((item, i) => (
                  <div key={i} className='bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all'>
                    <item.icon size={32} className='mx-auto mb-3 text-cyan-500' />
                    <div className='text-lg font-bold text-slate-900'>{item.label}</div>
                    <div className='text-sm text-slate-500'>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase'>
                <Sparkles size={14} className='text-cyan-500' /> Our Expertise
              </div>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Web Development Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>End-to-end web development solutions covering every stage of the development lifecycle.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (
                <Link key={i} to={service.link} className='group'>
                  <div className='h-full bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div>
                    <h3 className='text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors'>{service.title}</h3>
                    <p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}
                    </div>
                    <div className='flex items-center gap-2 text-cyan-600 font-semibold text-sm'>Learn More <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' /></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Development Process</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>Our web development process is designed to be clear and aimed at results delivery.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (
                <div key={i} className='relative group text-center'>
                  {i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent' />}
                  <div className='relative inline-block mb-6'>
                    <div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-cyan-500 transition-all'><step.icon size={48} className='text-cyan-400' /></div>
                    <div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>{step.title}</h3>
                  <p className='text-slate-400 text-sm'>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO & Technology */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-8'>
              <div className='bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-6'><Target size={28} /></div>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>SEO Performance-Based Development</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>Our web development focuses on SEO and performance from the start. We deliver clean code, fast load times, mobile-friendly layouts, and search-engine-friendly site structure.</p>
                <p className='text-slate-600 leading-relaxed'>By building with SEO best practices in mind, we boost search visibility, lower bounce rates, and improve user engagement. Your website actively supports your digital marketing goals.</p>
              </div>
              <div className='bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white mb-6'><Server size={28} /></div>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Technology, Security & Scalability</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>We rely on modern technologies and frameworks so your site stays secure, scalable, and ready for the future. From secure hosting and data protection to performance tuning, we prioritize reliability and safety.</p>
                <p className='text-slate-600 leading-relaxed'>Our scalable development approach means your site can handle more traffic, content, and features as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2>
            </div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (
                <details key={i} className='group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'>
                  <summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-cyan-600 transition-colors'>
                    <span className='pr-4'>{faq.q}</span>
                    <ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' />
                  </summary>
                  <div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Ready to Build Your Website?</h2>
            <p className='text-cyan-100 text-lg mb-10 max-w-2xl mx-auto'>Let's build a website that not only looks good but works perfectly and turns visitors into customers.</p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-cyan-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3'>Start Your Project <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
              <a href='tel:+919876543210'><button className='px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all'>Call Us Now</button></a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
