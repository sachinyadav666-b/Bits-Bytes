import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Smartphone, Zap, Wifi, Bell, Download, Shield, ArrowRight, CheckCircle, ChevronDown, Target, Play, Globe, ShoppingCart, Rocket, Server } from 'lucide-react'

export default function PWAPage() {
  const pageTitle = 'Progressive Web App Development Services - Bits and Bytes IT Solution'
  const pageDescription = 'Professional PWA development services in Noida, Delhi NCR. Fast, reliable, app-like experiences that work offline. Installable without app stores. Get free consultation!'
  const pageKeywords = 'PWA development India, progressive web app Noida, PWA services Delhi NCR, offline web app, installable web app, mobile web app development'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Web Development', url: '/services/web-development' }, { name: 'Progressive Web Apps', url: '/web-development/pwa' }]

  const faqs = [
    { q: 'What is a Progressive Web App (PWA)?', a: 'A Progressive Web App is a web application made with modern web technologies that feels like a native mobile app. PWAs load quickly, work offline or with poor network connections, send push notifications, and can be installed on a device without visiting an app store.' },
    { q: 'Why should businesses choose PWA technology?', a: 'PWAs speed up page loads, lower bounce rates, boost engagement, and improve conversion rates. They are easy to maintain, work across devices, and deliver smooth experiences even on poor networks. For companies wanting to grow digital reach without juggling separate mobile apps, PWAs are powerful and scalable.' },
    { q: 'Can PWAs work offline?', a: 'Yes! PWAs are built to work offline or in low-network conditions using intelligent caching strategies. This ensures uninterrupted user experiences and faster load times even without internet connectivity.' },
    { q: 'Are PWAs SEO-friendly?', a: 'Unlike native mobile apps, Progressive Web Apps can be found and indexed by search engines. We build PWAs with SEO best practices to improve visibility, speed up indexing, and boost rankings.' },
    { q: 'How much does PWA development cost?', a: 'PWA development is typically more cost-effective than building separate native apps for iOS and Android. Costs vary based on complexity and features. Contact us for a detailed estimate based on your requirements.' }
  ]

  const services = [
    { icon: Smartphone, title: 'Custom PWA Development', desc: 'We build custom PWAs tailored to your brand, business goals, and user requirements. Our solutions are designed for speed, usability, and scalability while maintaining a consistent brand experience.', features: ['Brand-Aligned', 'Scalable', 'Fast Loading', 'User-Centric'], color: 'from-purple-500 to-violet-600' },
    { icon: Wifi, title: 'Offline Functionality', desc: 'Our PWAs are built to work offline or in low-network conditions using intelligent caching strategies. This ensures uninterrupted user experiences and faster load times.', features: ['Offline Mode', 'Smart Caching', 'Background Sync', 'Reliable'], color: 'from-blue-500 to-cyan-600' },
    { icon: Download, title: 'App-Like Experience', desc: 'We design PWAs with smooth navigation, intuitive interfaces, and app-like interactions. Users can install the PWA on their devices and access it like a native app.', features: ['Installable', 'Full-Screen', 'Smooth Navigation', 'Native Feel'], color: 'from-green-500 to-emerald-600' },
    { icon: Bell, title: 'Push Notifications', desc: 'We integrate push notifications to help businesses re-engage users, share updates, and drive repeat visits. This feature improves user retention and customer interaction.', features: ['Re-engagement', 'Updates', 'Repeat Visits', 'Retention'], color: 'from-orange-500 to-amber-600' },
    { icon: ShoppingCart, title: 'PWA for E-Commerce', desc: 'We develop PWA solutions for e-commerce websites, dashboards, and business platforms that deliver fast loading, smooth checkout experiences, and higher conversions.', features: ['Fast Checkout', 'Higher Conversions', 'Smooth UX', 'Mobile-First'], color: 'from-pink-500 to-rose-600' },
    { icon: Zap, title: 'Performance Optimization', desc: 'Every PWA we build is optimized for speed and performance. We ensure fast loading, smooth animations, and responsive interactions across all devices.', features: ['Fast Loading', 'Optimized', 'Responsive', 'Smooth'], color: 'from-amber-500 to-yellow-600' }
  ]

  const stats = [{ value: '3x', label: 'Faster Loading' }, { value: '50%', label: 'More Engagement' }, { value: '70%', label: 'Less Data Usage' }, { value: '2x', label: 'Conversion Rate' }]

  const benefits = [
    'Faster page loads and lower bounce rates',
    'Boost engagement and improve conversion rates',
    'Easy to maintain and work across devices',
    'Smooth experience even on poor networks',
    'No app store downloads required',
    'Cost-effective alternative to native apps'
  ]

  const idealFor = [
    { icon: ShoppingCart, title: 'E-Commerce', desc: 'Faster mobile shopping experiences' },
    { icon: Globe, title: 'Service Companies', desc: 'Boost engagement and retention' },
    { icon: Rocket, title: 'Startups', desc: 'Build scalable digital platforms' },
    { icon: Server, title: 'Enterprises', desc: 'Better performance and user retention' }
  ]

  const process = [
    { num: '01', title: 'Strategy', desc: 'Review business goals, target audience, and technical needs', icon: Target },
    { num: '02', title: 'Design', desc: 'Create PWA strategy matching objectives and performance', icon: Smartphone },
    { num: '03', title: 'Development', desc: 'Build using modern frameworks and proven practices', icon: Zap },
    { num: '04', title: 'Testing & Launch', desc: 'Test across devices, browsers, and operating systems', icon: Play }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/web-development/pwa" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-100 via-violet-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-purple-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-purple-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 text-purple-700 text-sm font-bold'><Smartphone size={16} className='text-purple-500' />App-Like Web Experience</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Progressive<span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>Web Apps</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We build <strong>Progressive Web Apps (PWAs)</strong> that combine the best of websites and mobile apps. PWAs deliver fast, engaging, and reliable experiences across devices without needing app store downloads.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>In a mobile-first world, users expect speed, convenience, and smooth performance. PWAs let businesses meet those expectations by offering app-like features right through the web.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-purple-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Build Your PWA <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
                </div>
              </div>
              <div className='relative flex justify-center'>
                <div className='absolute -inset-4 bg-gradient-to-r from-purple-200 to-violet-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative w-64 bg-slate-900 rounded-[3rem] p-2 shadow-2xl'>
                  <div className='bg-slate-800 rounded-[2.5rem] p-4 h-[450px] overflow-hidden'>
                    <div className='h-6 flex justify-center'><div className='w-20 h-5 bg-slate-700 rounded-full' /></div>
                    <div className='mt-4 space-y-3'>
                      <div className='h-24 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center'><Smartphone size={32} className='text-white' /></div>
                      <div className='p-3 bg-slate-700 rounded-xl flex items-center gap-3'><Wifi size={18} className='text-green-400' /><span className='text-white text-sm'>Works Offline</span></div>
                      <div className='p-3 bg-slate-700 rounded-xl flex items-center gap-3'><Bell size={18} className='text-purple-400' /><span className='text-white text-sm'>Push Notifications</span></div>
                      <div className='p-3 bg-slate-700 rounded-xl flex items-center gap-3'><Download size={18} className='text-blue-400' /><span className='text-white text-sm'>Installable</span></div>
                      <div className='h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold'>Install App</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why PWA */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Why Businesses Choose <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>PWA Technology</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>Progressive Web Apps are changing how businesses reach users. Compared with traditional websites and native apps, PWAs offer several clear benefits for modern digital strategies.</p>
                <div className='space-y-3'>
                  {benefits.map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-purple-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {idealFor.map((item, i) => (<div key={i} className='bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-purple-200 transition-all text-center'><item.icon size={32} className='mx-auto mb-3 text-purple-500' /><h4 className='font-bold text-slate-900 mb-1'>{item.title}</h4><p className='text-sm text-slate-500'>{item.desc}</p></div>))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our PWA Development Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>End-to-end PWA development services covering strategy, design, development, testing, deployment, and ongoing support.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our PWA Development Approach</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>Our PWA development process is clear, focused, and performance-driven.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-purple-500 transition-all'><step.icon size={48} className='text-purple-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* SEO & Security */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-8'>
              <div className='bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white mb-6'><Target size={28} /></div>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>SEO-Friendly, Performance-First</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>Unlike native mobile apps, Progressive Web Apps can be found and indexed by search engines. We build PWAs with SEO best practices in mind to improve visibility, speed up indexing, and boost rankings.</p>
                <p className='text-slate-600 leading-relaxed'>We emphasize clean code, fast load times, mobile optimization, and well-structured architecture so your PWA performs well in search results and delivers a great user experience.</p>
              </div>
              <div className='bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white mb-6'><Shield size={28} /></div>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Security & Scalability Built In</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>Security is a key part of our PWA work. We use HTTPS, data protection measures, and performance optimizations to protect user data and keep functionality reliable.</p>
                <p className='text-slate-600 leading-relaxed'>Our scalable approach means your PWA can handle higher traffic, new features, and business growth without performance problems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-purple-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Let's Build a Smarter Web Experience</h2>
            <p className='text-purple-100 text-lg mb-10 max-w-2xl mx-auto'>Progressive Web Apps are the future of web and mobile. Create a PWA that delivers app-like performance with web-level reach.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Your PWA Project <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
