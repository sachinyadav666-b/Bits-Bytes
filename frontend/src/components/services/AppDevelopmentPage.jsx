import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../SEOHead'
import { Smartphone, Code, Zap, Shield, Bell, Wifi, ArrowRight, CheckCircle, ChevronDown, Sparkles, Monitor, Cloud, Lock, Target, Award, Users, Play, Palette, Rocket } from 'lucide-react'

export default function AppDevelopmentPage() {
  const pageTitle = 'App Development Services in Noida, Delhi NCR - Bits and Bytes IT Solution'
  const pageDescription = 'Professional mobile app development services in Noida, Delhi NCR. iOS, Android, cross-platform apps. React Native, Flutter. Scalable, secure, high-performance apps. Get free consultation!'
  const pageKeywords = 'app development Noida, mobile app development Delhi NCR, iOS app development, Android app development, React Native, Flutter, cross-platform apps India'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'App Development', url: '/services/app-development' }]

  const faqs = [
    { q: 'What platforms do you develop apps for?', a: 'We develop apps for iOS (iPhone, iPad), Android, and cross-platform solutions using React Native and Flutter. We recommend the best approach based on your target audience and business requirements.' },
    { q: 'How long does it take to develop a mobile app?', a: 'Timeline depends on complexity. A basic app takes 8-12 weeks, while complex apps with advanced features may take 16-24 weeks. We provide detailed timelines after requirement analysis.' },
    { q: 'Do you provide post-launch support?', a: 'Yes, we offer continuous assistance, bug fixes, and enhancements to guarantee that the product remains successful in the long run after launch.' },
    { q: 'What is the difference between native and cross-platform apps?', a: 'Native apps are built specifically for one platform (iOS or Android) offering best performance. Cross-platform apps use a single codebase for both platforms, reducing development time and cost while maintaining good performance.' },
    { q: 'How do you ensure app security?', a: 'We build apps with strong security measures including secure authentication, data encryption, and compliance with platform guidelines. Security is built into the architecture from the start.' }
  ]

  const services = [
    { icon: Smartphone, title: 'Native iOS & Android', desc: 'High-performance mobile apps built specifically for iOS and Android platforms, offering the best user experience and full device feature access.', link: '/app-development/native-ios-android', features: ['Swift/Kotlin', 'Best Performance', 'Full Features', 'Platform-Specific'], color: 'from-blue-500 to-cyan-600' },
    { icon: Code, title: 'Cross-Platform Apps', desc: 'Cost-effective apps that work seamlessly on both Android and iOS using React Native or Flutter, reducing development time and costs.', link: '/app-development/cross-platform', features: ['React Native', 'Flutter', 'Single Codebase', 'Cost-Effective'], color: 'from-purple-500 to-violet-600' },
    { icon: Palette, title: 'App UI/UX Design', desc: 'Intuitive, visually appealing app interfaces that focus on usability, accessibility, and user engagement for delightful experiences.', link: '/app-development/ui-ux', features: ['User-Centric', 'Intuitive', 'Engaging', 'Accessible'], color: 'from-pink-500 to-rose-600' },
    { icon: Wifi, title: 'Offline-First Apps', desc: 'Apps that work reliably without internet, syncing data when connection is restored. Perfect for field work and areas with poor connectivity.', link: '/app-development/offline-first', features: ['Offline Mode', 'Background Sync', 'Reliable', 'Local Storage'], color: 'from-green-500 to-emerald-600' },
    { icon: Bell, title: 'Push Notifications', desc: 'Re-engage users with timely, personalized push notifications that drive repeat visits and improve retention rates.', link: '/app-development/push-notifications', features: ['Engagement', 'Personalized', 'Real-time', 'Retention'], color: 'from-orange-500 to-amber-600' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Enterprise-grade security with secure authentication, encryption, and compliance for apps handling sensitive data.', link: '/app-development/enterprise-security', features: ['Encryption', 'Auth Systems', 'Compliance', 'Data Protection'], color: 'from-red-500 to-rose-600' }
  ]

  const stats = [{ value: '100+', label: 'Apps Delivered' }, { value: '4.8★', label: 'App Store Rating' }, { value: '1M+', label: 'Downloads' }, { value: '99.9%', label: 'Crash-Free' }]

  const whyChooseUs = [
    { icon: Zap, title: 'High Performance', desc: 'Fast, responsive apps optimized for smooth user experience' },
    { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security with data encryption' },
    { icon: Target, title: 'User-Centric', desc: 'Focus on usability and engagement' },
    { icon: Cloud, title: 'Cloud Integration', desc: 'Seamless backend and cloud services' },
    { icon: Monitor, title: 'Cross-Platform', desc: 'Reach users on all devices' },
    { icon: Lock, title: 'Scalable', desc: 'Architecture that grows with your business' }
  ]

  const process = [
    { num: '01', title: 'Discovery', desc: 'Understanding your business objectives, target audience, and technical requirements', icon: Target },
    { num: '02', title: 'Design', desc: 'Creating wireframes, UI/UX designs, and interactive prototypes', icon: Palette },
    { num: '03', title: 'Development', desc: 'Building with cutting-edge technologies and best coding practices', icon: Code },
    { num: '04', title: 'Launch & Support', desc: 'Testing, deployment, and ongoing maintenance for long-term success', icon: Play }
  ]

  const clientTypes = [
    { icon: Rocket, label: 'Startups', desc: 'Launch your first app' },
    { icon: Users, label: 'SMEs', desc: 'Digitize operations' },
    { icon: Award, label: 'Enterprises', desc: 'Scale your reach' },
    { icon: Target, label: 'E-Commerce', desc: 'Mobile shopping' }
  ]

  const integrations = ['Payment Gateways', 'Push Notifications', 'Real-time Sync', 'Analytics Tracking', 'Cloud Backend', 'API Integration']

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/services/app-development" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-100 via-violet-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-100 via-cyan-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-purple-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-purple-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 text-purple-700 text-sm font-bold'><Smartphone size={16} className='text-purple-500' />Professional App Development</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Building Scalable<span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>Mobile Applications</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We offer a complete range of <strong>professional app development services</strong> that aim to turn your ideas into big, user-friendly and high-performing mobile apps.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>In the present day mobile-oriented world, apps are very important for customer engagement, brand visibility, and business growth. Our services are designed to meet the needs of performance, reliability, and long-term value.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-purple-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Your App <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
                  <a href='https://wa.me/919876543210' target='_blank' rel='noopener noreferrer'><button className='px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-purple-500 hover:text-purple-600 transition-all'>WhatsApp Us</button></a>
                </div>
              </div>
              <div className='relative flex justify-center'>
                <div className='absolute -inset-4 bg-gradient-to-r from-purple-200 to-violet-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative w-64 bg-slate-900 rounded-[3rem] p-2 shadow-2xl'>
                  <div className='bg-slate-800 rounded-[2.5rem] p-4 h-[480px] overflow-hidden'>
                    <div className='h-6 flex justify-center'><div className='w-20 h-5 bg-slate-700 rounded-full' /></div>
                    <div className='mt-4 space-y-3'>
                      <div className='h-28 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center'><Smartphone size={36} className='text-white' /></div>
                      <div className='grid grid-cols-3 gap-2'>
                        <div className='h-16 bg-slate-700 rounded-xl flex items-center justify-center'><Code size={18} className='text-purple-400' /></div>
                        <div className='h-16 bg-slate-700 rounded-xl flex items-center justify-center'><Shield size={18} className='text-green-400' /></div>
                        <div className='h-16 bg-slate-700 rounded-xl flex items-center justify-center'><Zap size={18} className='text-amber-400' /></div>
                      </div>
                      <div className='p-3 bg-slate-700 rounded-xl flex items-center gap-3'><Bell size={18} className='text-purple-400' /><span className='text-white text-sm'>New notification</span></div>
                      <div className='p-3 bg-slate-700 rounded-xl flex items-center gap-3'><Wifi size={18} className='text-green-400' /><span className='text-white text-sm'>Works offline</span></div>
                      <div className='h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold'>Get Started</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Mobile Apps Matter */}
        <section className='py-20 bg-gradient-to-br from-slate-50 to-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='max-w-4xl mx-auto text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6'>Why Mobile App Development <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>Matters Today</span></h2>
              <p className='text-lg text-slate-600 leading-relaxed'>Mobile apps are now a vital part of daily life. Users want nothing less than smooth performance, easy-to-use interfaces, quick loading times, and safe transactions. A good application allows a company to maintain customer relationships, enhance experience, and bring in new income streams.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {whyChooseUs.map((item, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all'><div className='w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform'><item.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-2'>{item.title}</h3><p className='text-slate-600 text-sm leading-relaxed'>{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Who We <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>Work With</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>We work with startups, entrepreneurs, SMEs, enterprises, and organizations across various industries. From e-commerce and healthcare to education, logistics, and service-based businesses, our app development services are customized to meet diverse requirements.</p>
                <p className='text-slate-600 mb-6 leading-relaxed'>Our solutions are ideal for businesses that want to:</p>
                <div className='space-y-3'>
                  {['Launch a new mobile application', 'Improve customer engagement and retention', 'Digitize business operations', 'Expand their digital reach', 'Build scalable and future-ready platforms'].map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-purple-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {clientTypes.map((item, i) => (<div key={i} className='bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all'><item.icon size={32} className='mx-auto mb-3 text-purple-500' /><div className='text-lg font-bold text-slate-900'>{item.label}</div><div className='text-sm text-slate-500'>{item.desc}</div></div>))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase'><Sparkles size={14} className='text-purple-500' /> Our Expertise</div>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our App Development Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>End-to-end mobile app development services covering strategy, design, development, testing, deployment, and post-launch support.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<Link key={i} to={service.link} className='group'><div className='h-full bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2 mb-4'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div><div className='flex items-center gap-2 text-purple-600 font-semibold text-sm'>Learn More <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' /></div></div></Link>))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our App Development Process</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>A well-organized, open, and target-oriented development procedure</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-purple-500 transition-all'><step.icon size={48} className='text-purple-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Integration & <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600'>Advanced Features</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>We integrate modern features and third-party services to enhance app functionality and user experience. Our app development services include:</p>
                <div className='grid grid-cols-2 gap-3'>
                  {integrations.map((item, i) => (<div key={i} className='flex items-center gap-3 p-3 bg-slate-50 rounded-xl'><CheckCircle size={18} className='text-purple-500 flex-shrink-0' /><span className='text-slate-700 text-sm'>{item}</span></div>))}
                </div>
              </div>
              <div className='bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Performance & Security Focus</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>Performance and security are core elements of our app development services. We ensure fast loading times, smooth navigation, and optimized resource usage.</p>
                <p className='text-slate-600 leading-relaxed'>Our apps are built with strong security measures, including secure authentication, data encryption, and compliance with platform guidelines. Scalability is built into the architecture to support future growth.</p>
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
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Let's Build Your Mobile App</h2>
            <p className='text-purple-100 text-lg mb-10 max-w-2xl mx-auto'>Your mobile application has the potential to be an influential growth, engagement, and innovation tool. Let's transform your concept into an effective mobile application.</p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3'>Start Your App <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
              <a href='tel:+919876543210'><button className='px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all'>Call Us Now</button></a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
