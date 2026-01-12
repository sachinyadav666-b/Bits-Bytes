import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Gauge, Zap, Image, FileCode, Server, BarChart3, ArrowRight, CheckCircle, ChevronDown, Target, Play, Monitor, Eye, Clock, Layers } from 'lucide-react'

export default function WebVitalsPage() {
  const pageTitle = 'Web Vitals Optimization Services - Core Web Vitals & Page Speed'
  const pageDescription = 'Professional Web Vitals optimization in Noida, Delhi NCR. Improve LCP, FID, CLS scores. Boost SEO rankings and user experience. Get free performance audit!'
  const pageKeywords = 'web vitals optimization India, Core Web Vitals, LCP optimization, page speed optimization Noida, FID improvement, CLS fix, Google PageSpeed'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Web Development', url: '/services/web-development' }, { name: 'Web Vitals', url: '/web-development/web-vitals' }]

  const faqs = [
    { q: 'What Are Web Vitals?', a: 'Google introduced Web Vitals as performance signals to evaluate the user experience on websites. They consist of three metrics: page load time (LCP), page responsiveness (FID), and layout stability (CLS).' },
    { q: 'Why do Web Vitals matter for SEO?', a: 'Web Vitals are direct ranking factors for Google. Good Web Vitals help make Google search rankings go up, lower bounce rates, increase user interaction and session length, and raise conversion rates.' },
    { q: 'What is a good LCP score?', a: 'A good Largest Contentful Paint (LCP) score is 2.5 seconds or less. This measures how quickly the main content of your page loads and becomes visible to users.' },
    { q: 'How do you fix CLS issues?', a: 'We address layout shifts by fixing image dimensions, stabilizing dynamic content, and improving CSS handling to minimize Cumulative Layout Shift (CLS) issues.' },
    { q: 'How long does optimization take?', a: 'Initial improvements can be seen within 1-2 weeks. Comprehensive optimization may take 4-6 weeks depending on your website complexity and current performance state.' }
  ]

  const coreVitals = [
    { metric: 'LCP', name: 'Largest Contentful Paint', desc: 'Measures loading performance - how quickly the main content loads', target: '< 2.5s', color: 'from-green-500 to-emerald-600' },
    { metric: 'FID', name: 'First Input Delay', desc: 'Measures interactivity - how quickly page responds to user input', target: '< 100ms', color: 'from-blue-500 to-cyan-600' },
    { metric: 'CLS', name: 'Cumulative Layout Shift', desc: 'Measures visual stability - how much the page layout shifts', target: '< 0.1', color: 'from-purple-500 to-violet-600' }
  ]

  const services = [
    { icon: Zap, title: 'Performance & Speed Optimization', desc: 'We optimize page load times by improving server response, reducing render-blocking resources, optimizing images, and implementing caching strategies to enhance LCP performance.', features: ['Server Response', 'Render Blocking', 'Image Optimization', 'Caching'], color: 'from-amber-500 to-orange-600' },
    { icon: Clock, title: 'Interactivity & Responsiveness', desc: 'We improve website responsiveness by optimizing JavaScript execution, reducing main-thread blocking, and enhancing user interactions to improve FID and overall usability.', features: ['JS Optimization', 'Thread Blocking', 'User Interactions', 'FID Fix'], color: 'from-blue-500 to-cyan-600' },
    { icon: Layers, title: 'Visual Stability Optimization', desc: 'We address layout shifts by fixing image dimensions, stabilizing dynamic content, and improving CSS handling to minimize CLS issues.', features: ['Image Dimensions', 'Dynamic Content', 'CSS Handling', 'CLS Fix'], color: 'from-purple-500 to-violet-600' },
    { icon: Monitor, title: 'Mobile Web Vitals', desc: 'With mobile-first indexing in place, we focus on mobile performance optimization to ensure fast loading, smooth interactions, and consistent layouts on all screen sizes.', features: ['Mobile-First', 'Touch Response', 'Screen Sizes', 'Mobile Speed'], color: 'from-green-500 to-emerald-600' },
    { icon: Image, title: 'Image & Asset Optimization', desc: 'We compress images, implement lazy loading, serve WebP/AVIF formats, and use CDN for faster asset delivery across all devices.', features: ['Compression', 'Lazy Loading', 'WebP/AVIF', 'CDN'], color: 'from-pink-500 to-rose-600' },
    { icon: BarChart3, title: 'Continuous Monitoring', desc: 'We monitor Web Vitals performance using analytics tools and performance reports to ensure consistent results and long-term improvements.', features: ['Analytics', 'Reports', 'Monitoring', 'Alerts'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '90+', label: 'PageSpeed Score' }, { value: '<2.5s', label: 'LCP Target' }, { value: '<100ms', label: 'FID Target' }, { value: '<0.1', label: 'CLS Target' }]

  const benefits = [
    'Making Google search rankings go up',
    'Lowering bounce rates significantly',
    'User interaction and session length increase',
    'Better performance on mobile and desktop',
    'Raising conversion rates and customer satisfaction',
    'Improved SEO performance and visibility'
  ]

  const process = [
    { num: '01', title: 'Audit', desc: 'Comprehensive performance audit to pinpoint Core Web Vitals bottlenecks', icon: Target },
    { num: '02', title: 'Strategy', desc: 'Develop customized optimization strategy based on your website structure', icon: FileCode },
    { num: '03', title: 'Optimize', desc: 'Implement technical enhancements using best practices and frameworks', icon: Zap },
    { num: '04', title: 'Monitor', desc: 'Continuous monitoring to ensure consistent results and improvements', icon: BarChart3 }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/web-development/web-vitals" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-100 via-orange-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-amber-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-amber-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-700 text-sm font-bold'><Gauge size={16} className='text-amber-500' />Improve Performance & SEO</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Web Vitals<span className='block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600'>Optimization</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We provide superb <strong>Web Vitals Optimization services</strong> that help businesses deliver fast, stable, and nice-looking digital experiences. Website performance directly affects customer satisfaction, search engine ranking, and conversion rates.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>Google's Core Web Vitals are crucial performance metrics that measure user experience in the real world. Our optimization solutions help enhance these metrics and keep your website in excellent working condition.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Get Free Audit <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100'>
                  <div className='text-center mb-6'><Gauge size={48} className='mx-auto text-amber-500 mb-2' /><h3 className='font-bold'>PageSpeed Score</h3></div>
                  <div className='relative w-40 h-40 mx-auto mb-6'>
                    <svg className='w-full h-full' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='none' stroke='#e2e8f0' strokeWidth='8' /><circle cx='50' cy='50' r='45' fill='none' stroke='url(#vitalsGradient)' strokeWidth='8' strokeDasharray='283' strokeDashoffset='28' strokeLinecap='round' transform='rotate(-90 50 50)' /><defs><linearGradient id='vitalsGradient'><stop offset='0%' stopColor='#f59e0b' /><stop offset='100%' stopColor='#ea580c' /></linearGradient></defs></svg>
                    <div className='absolute inset-0 flex items-center justify-center'><span className='text-4xl font-black text-amber-600'>95</span></div>
                  </div>
                  <div className='space-y-2'>
                    {coreVitals.map((vital, i) => (<div key={i} className='flex items-center justify-between p-2 bg-slate-50 rounded-lg'><span className='text-sm font-medium'>{vital.metric}</span><span className='text-xs text-green-600 font-bold'>{vital.target}</span></div>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Web Vitals Explained */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Core Web Vitals <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600'>Explained</span></h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>Understanding the three key metrics that Google uses to measure user experience</p>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
              {coreVitals.map((vital, i) => (
                <div key={i} className='bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all'>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vital.color} flex items-center justify-center text-white mb-4`}>
                    <span className='text-xl font-black'>{vital.metric}</span>
                  </div>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>{vital.name}</h3>
                  <p className='text-slate-600 text-sm mb-4 leading-relaxed'>{vital.desc}</p>
                  <div className='inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold'>
                    <CheckCircle size={16} /> Target: {vital.target}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Why Web Vitals Matter for <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600'>Your Business</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>Web Vitals are more than technical indicators - they are a direct concern for business performance. A slow or poor-performing website can result in customer loss, lower trust, and conversion rates going down.</p>
                <p className='text-slate-600 mb-6 leading-relaxed'>Good Web Vitals are helpful for:</p>
                <div className='space-y-3'>
                  {benefits.map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-amber-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-6'>Performance Impact</h3>
                <div className='space-y-4'>
                  <div className='bg-white rounded-xl p-4'><div className='flex justify-between mb-2'><span className='font-medium'>Search Rankings</span><span className='text-green-600 font-bold'>+40%</span></div><div className='h-2 bg-slate-200 rounded-full'><div className='h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-[85%]' /></div></div>
                  <div className='bg-white rounded-xl p-4'><div className='flex justify-between mb-2'><span className='font-medium'>User Engagement</span><span className='text-green-600 font-bold'>+55%</span></div><div className='h-2 bg-slate-200 rounded-full'><div className='h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-[90%]' /></div></div>
                  <div className='bg-white rounded-xl p-4'><div className='flex justify-between mb-2'><span className='font-medium'>Conversion Rate</span><span className='text-green-600 font-bold'>+32%</span></div><div className='h-2 bg-slate-200 rounded-full'><div className='h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-[75%]' /></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Optimization Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>End-to-end Web Vitals optimization solutions focusing on performance, stability, and responsiveness.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Optimization Approach</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>We utilize a systematic, data-driven and result-oriented approach to optimize Web Vitals.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-amber-500 transition-all'><step.icon size={48} className='text-amber-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-amber-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Ready to Improve Your Web Vitals?</h2>
            <p className='text-amber-100 text-lg mb-10 max-w-2xl mx-auto'>Get a free performance audit and see how we can boost your rankings, engagement, and conversions.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-amber-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Get Free Audit <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
