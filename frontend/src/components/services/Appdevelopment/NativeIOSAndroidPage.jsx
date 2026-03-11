import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Smartphone, Zap, Shield, Bell, Camera, MapPin, ArrowRight, CheckCircle, ChevronDown, Target, Play, Code, Cloud, Award, BarChart3 } from 'lucide-react'

export default function NativeIOSAndroidPage() {
  const pageTitle = 'Native iOS & Android App Development - Bits and Bytes IT Solution'
  const pageDescription = 'Professional native iOS and Android app development in Noida, Delhi NCR. Swift, Kotlin development. High-performance, secure apps. Full device feature access. Get free consultation!'
  const pageKeywords = 'native iOS development India, Android app development Noida, Swift development, Kotlin app, native mobile apps Delhi NCR, iPhone app development'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'App Development', url: '/services/app-development' }, { name: 'Native iOS & Android', url: '/app-development/native-ios-android' }]

  const faqs = [
    { q: 'What is Native App Development?', a: 'Native app development is the process of creating mobile applications tailored exclusively for a specific operating system — iOS apps for Apple devices and Android apps for Android devices using the native programming languages and tools of the platform.' },
    { q: 'Why choose native apps over cross-platform?', a: 'Native apps offer superior performance and speed, greater stability and responsiveness, complete access to device features (camera, GPS, sensors, notifications), and a uniform user experience in accordance with platform standards.' },
    { q: 'What technologies do you use for native development?', a: 'For iOS, we use Swift and SwiftUI. For Android, we use Kotlin and Jetpack Compose. We follow the latest platform guidelines and best practices from Apple and Google.' },
    { q: 'How long does native app development take?', a: 'Timeline varies based on complexity. A standard native app takes 10-14 weeks per platform, while complex apps may take 16-24 weeks. Building for both platforms separately requires more time than cross-platform alternatives.' },
    { q: 'Do you provide ongoing support after launch?', a: 'Yes, we offer maintenance, updates, and optimization as a means of supporting success in the long run after launch. This includes bug fixes, OS updates compatibility, and feature enhancements.' }
  ]

  const nativeAdvantages = [
    { title: 'Superior Performance', desc: 'Maximum speed and responsiveness', icon: Zap },
    { title: 'Full Device Access', desc: 'Camera, GPS, sensors, biometrics', icon: Camera },
    { title: 'Platform Standards', desc: 'Native look and feel users expect', icon: Smartphone },
    { title: 'Better Security', desc: 'Platform-level security features', icon: Shield },
    { title: 'Offline Capability', desc: 'Full offline functionality', icon: Cloud },
    { title: 'Push Notifications', desc: 'Rich, interactive notifications', icon: Bell }
  ]

  const services = [
    { icon: Smartphone, title: 'Native Android Development', desc: 'We develop robust, secure, and scalable Android applications optimized for performance across a wide range of devices. Our Android apps follow platform design standards and deliver smooth functionality.', features: ['Kotlin', 'Jetpack Compose', 'Material Design', 'Multi-device'], color: 'from-green-500 to-emerald-600' },
    { icon: Award, title: 'Native iOS Development', desc: 'Our iOS app development services focus on building elegant, high-performance applications that comply with Apple\'s design, security, and performance guidelines. We ensure seamless experiences across iPhones and iPads.', features: ['Swift', 'SwiftUI', 'iOS Guidelines', 'App Store Ready'], color: 'from-blue-500 to-cyan-600' },
    { icon: Code, title: 'Custom Native Development', desc: 'Every business has unique requirements. We build fully customized native applications aligned with your workflows, branding, and functional needs.', features: ['Custom Features', 'Brand Integration', 'Workflow Aligned', 'Scalable'], color: 'from-purple-500 to-violet-600' },
    { icon: Target, title: 'App UI/UX Design', desc: 'Our UI/UX design process ensures intuitive navigation, visually appealing layouts, and user-friendly interactions. A strong design improves engagement, retention, and overall satisfaction.', features: ['User-Centric', 'Platform Native', 'Intuitive', 'Engaging'], color: 'from-pink-500 to-rose-600' },
    { icon: Cloud, title: 'Backend & API Integration', desc: 'We integrate secure backends, APIs, and third-party services to ensure seamless data flow, real-time updates, and scalable app architecture.', features: ['REST APIs', 'Real-time', 'Cloud Backend', 'Third-party'], color: 'from-orange-500 to-amber-600' },
    { icon: BarChart3, title: 'Analytics & Tracking', desc: 'We integrate analytics and performance tracking to help you understand user behavior, measure success, and continuously improve your app.', features: ['User Analytics', 'Performance', 'Crash Reports', 'A/B Testing'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '50+', label: 'Native Apps' }, { value: '4.8★', label: 'Store Rating' }, { value: '99.9%', label: 'Crash-Free' }, { value: '2M+', label: 'Downloads' }]

  const idealFor = [
    'Applications that require maximum performance',
    'Rich user interfaces and animations',
    'Highly secure data handling and transactions',
    'Apps that need hardware integration at the deepest level',
    'Long-term scalability and stability of the platform'
  ]

  const advancedFeatures = ['Push notifications', 'Payment gateway integration', 'Location and GPS features', 'Camera and media access', 'Analytics and performance tracking', 'Cloud-based backend services']

  const process = [
    { num: '01', title: 'Analysis', desc: 'Identify business goals, target users, and technical needs', icon: Target },
    { num: '02', title: 'Planning', desc: 'Detailed development roadmap with features and timelines', icon: Code },
    { num: '03', title: 'Development', desc: 'Building with best coding practices and platform standards', icon: Smartphone },
    { num: '04', title: 'Launch', desc: 'Testing, deployment, and App Store submission', icon: Play }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/app-development/native-ios-android" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 via-cyan-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-blue-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-blue-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 text-sm font-bold'><Smartphone size={16} className='text-blue-500' />Maximum Performance</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Native iOS &<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>Android Apps</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We specialize in <strong>Native iOS and Android App Development</strong> that enables us to create robust, safe and high-quality mobile applications. Native apps are exclusive to a certain platform, providing the highest performance and best user experience.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>In today's competitive mobile-first environment, enterprises have to invest in applications that are quick, dependable, and can offer uninterrupted experiences.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Your App <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
              </div>
              <div className='relative flex justify-center gap-4'>
                <div className='w-48 bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl -rotate-6'>
                  <div className='bg-slate-800 rounded-[2rem] p-3 h-80'>
                    <div className='h-4 flex justify-center'><div className='w-16 h-3 bg-slate-700 rounded-full' /></div>
                    <div className='mt-3 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center'><Smartphone size={28} className='text-white' /></div>
                    <div className='mt-2 text-center text-white text-xs font-bold'>Android</div>
                    <div className='mt-2 space-y-2'>
                      <div className='h-8 bg-slate-700 rounded-lg' />
                      <div className='h-8 bg-slate-700 rounded-lg' />
                    </div>
                  </div>
                </div>
                <div className='w-48 bg-slate-100 rounded-[2.5rem] p-2 shadow-2xl rotate-6 border-4 border-slate-200'>
                  <div className='bg-white rounded-[2rem] p-3 h-80'>
                    <div className='h-4 flex justify-center'><div className='w-20 h-5 bg-slate-900 rounded-full' /></div>
                    <div className='mt-3 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center'><Award size={28} className='text-white' /></div>
                    <div className='mt-2 text-center text-slate-900 text-xs font-bold'>iOS</div>
                    <div className='mt-2 space-y-2'>
                      <div className='h-8 bg-slate-100 rounded-lg' />
                      <div className='h-8 bg-slate-100 rounded-lg' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Native Advantages */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Why Choose <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>Native Apps</span></h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>Native apps are the perfect solution for companies that need high-end performance, advanced features, and optimized user experience.</p>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-4'>
              {nativeAdvantages.map((item, i) => (<div key={i} className='bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all text-center'><item.icon size={28} className='mx-auto mb-3 text-blue-500' /><h4 className='font-bold text-slate-900 text-sm mb-1'>{item.title}</h4><p className='text-xs text-slate-500'>{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Native Apps Are <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>Best For</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>We partner with startups, small and medium-sized enterprises (SMEs), large corporations, and organizations in diverse sectors. Our native app solutions are particularly suitable for:</p>
                <div className='space-y-3'>
                  {idealFor.map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-blue-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-6'>Advanced Features</h3>
                <p className='text-slate-600 mb-4'>We integrate advanced functionalities to enhance app performance and user engagement:</p>
                <div className='grid grid-cols-2 gap-3'>
                  {advancedFeatures.map((item, i) => (<div key={i} className='flex items-center gap-2 p-2 bg-white rounded-lg'><CheckCircle size={16} className='text-blue-500 flex-shrink-0' /><span className='text-sm text-slate-700'>{item}</span></div>))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Native App Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>End-to-end native mobile app development covering every stage of the app lifecycle.</p>
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
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Development Process</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>Systematic, open, and focused on quality</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-blue-500 transition-all'><step.icon size={48} className='text-blue-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-blue-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Let's Build Your Native Mobile App</h2>
            <p className='text-blue-100 text-lg mb-10 max-w-2xl mx-auto'>The mobile app is your brand's representation in users' palms. Let's work together to create a mobile app that is functional, engaging, and contributes to your business growth.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Your Project <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
