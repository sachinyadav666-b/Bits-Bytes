import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Palette, Smartphone, Users, Zap, Target, Heart, ArrowRight, CheckCircle, ChevronDown, Play, Layers, Eye, MousePointer, BarChart3 } from 'lucide-react'

export default function AppUIUXPage() {
  const pageTitle = 'App UI/UX Design Services - Mobile App Design | Bits and Bytes'
  const pageDescription = 'Professional mobile app UI/UX design services in Noida, Delhi NCR. User-centric design, intuitive interfaces, conversion-focused layouts. Get free consultation!'
  const pageKeywords = 'app UI UX design India, mobile app design Noida, app interface design, user experience design, app usability Delhi NCR'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'App Development', url: '/services/app-development' }, { name: 'UI/UX Design', url: '/app-development/ui-ux' }]

  const faqs = [
    { q: 'What makes good app UI/UX design?', a: 'Good app UI/UX design focuses on clarity, usability, speed and conversion. Every design should not only look appealing but also assist users in completing their tasks easily while supporting your business goals.' },
    { q: 'How does UI/UX design affect app success?', a: 'A complicated, slow, or poorly designed app will result in users leaving in seconds. Good UI/UX design increases engagement, improves retention rates, and drives conversions by making the user journey smooth and intuitive.' },
    { q: 'Do you design for both iOS and Android?', a: 'Yes, we design for both platforms following their respective design guidelines (Apple Human Interface Guidelines and Google Material Design) while maintaining consistent brand experience across platforms.' },
    { q: 'How long does the design process take?', a: 'UI/UX design typically takes 3-5 weeks including research, wireframing, prototyping, and final designs. Complex apps with many screens may take longer.' },
    { q: 'Do you provide interactive prototypes?', a: 'Yes, we create interactive prototypes that allow you to test the user flow and experience before development begins. This helps validate designs and reduce changes during development.' }
  ]

  const services = [
    { icon: Users, title: 'User Research & Empathy', desc: 'We start with a thorough comprehension of the users - what they think, feel and expect. This ensures designs are based on actual user needs rather than assumptions.', features: ['User Interviews', 'Behavior Analysis', 'Pain Points', 'Personas'], color: 'from-pink-500 to-rose-600' },
    { icon: Layers, title: 'Wireframing & Prototyping', desc: 'We create wireframes and interactive prototypes to define the page layout, transitions, and feature set before visual design begins.', features: ['Wireframes', 'User Flows', 'Interactive', 'Clickable'], color: 'from-blue-500 to-cyan-600' },
    { icon: Palette, title: 'Visual UI Design', desc: 'We create contemporary, neat, and appealing interfaces that represent your brand while ensuring usability and engagement.', features: ['Brand-Aligned', 'Modern', 'Consistent', 'Engaging'], color: 'from-purple-500 to-violet-600' },
    { icon: MousePointer, title: 'Interaction Design', desc: 'We design smooth animations, transitions, and micro-interactions that make your app feel responsive and delightful to use.', features: ['Animations', 'Transitions', 'Feedback', 'Gestures'], color: 'from-orange-500 to-amber-600' },
    { icon: Smartphone, title: 'Responsive Design', desc: 'Our designs adjust to any device and are optimized for different screen sizes and orientations for consistent experience.', features: ['All Devices', 'Orientations', 'Tablet', 'Phone'], color: 'from-green-500 to-emerald-600' },
    { icon: BarChart3, title: 'Usability Testing', desc: 'We test designs with real users to identify issues and validate solutions before development, ensuring the best possible experience.', features: ['User Testing', 'Feedback', 'Iterations', 'Validation'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '40%', label: 'Better Retention' }, { value: '2x', label: 'Engagement' }, { value: '50%', label: 'Less Friction' }, { value: '3x', label: 'Conversions' }]

  const approach = [
    { icon: Target, title: 'Business-Oriented', desc: 'Every design decision supports your business goals - lead generation, sign-ups, inquiries, and sales' },
    { icon: Users, title: 'User-Centric', desc: 'We prioritize user needs, making everything easy, available, and user-friendly' },
    { icon: Zap, title: 'Performance-Focused', desc: 'Fast-loading pages, optimized visuals, and smooth interactions' },
    { icon: Heart, title: 'Engagement-Driven', desc: 'Designs that attract, engage, and convert users into customers' }
  ]

  const designPrinciples = [
    'Clarity over complexity',
    'Intuitive navigation flow',
    'Consistent visual language',
    'Accessibility for all users',
    'Mobile-first approach',
    'Conversion-focused layouts'
  ]

  const process = [
    { num: '01', title: 'Research', desc: 'Understanding your users, business, and competitors', icon: Users },
    { num: '02', title: 'Wireframe', desc: 'Creating structure, layout, and user flows', icon: Layers },
    { num: '03', title: 'Design', desc: 'Visual design with brand integration', icon: Palette },
    { num: '04', title: 'Test', desc: 'Usability testing and refinement', icon: Play }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/app-development/ui-ux" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pink-100 via-rose-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-pink-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-pink-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 text-pink-700 text-sm font-bold'><Palette size={16} className='text-pink-500' />Designed for Growth</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>App UI/UX<span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>Design Services</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>At Bits and Bytes IT Solution, we consider <strong>UI/UX design as a strategic business tool</strong> rather than just a beautiful visual layer. We create user experiences that not only attract but also engage and convert users into customers.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>Today's users are very demanding. A complicated, slow, or poorly designed app will result in users leaving in seconds. Our UI/UX design approach emphasizes clarity, usability, speed and conversion.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-pink-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Your Design <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
              </div>
              <div className='relative flex justify-center'>
                <div className='absolute -inset-4 bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative w-64 bg-slate-900 rounded-[3rem] p-2 shadow-2xl'>
                  <div className='bg-white rounded-[2.5rem] p-4 h-[450px] overflow-hidden'>
                    <div className='h-4 flex justify-center'><div className='w-20 h-3 bg-slate-200 rounded-full' /></div>
                    <div className='mt-4 space-y-3'>
                      <div className='h-20 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center'><Palette size={28} className='text-pink-500' /></div>
                      <div className='grid grid-cols-2 gap-2'>
                        <div className='h-24 bg-slate-100 rounded-xl p-2'><div className='h-8 bg-pink-200 rounded-lg mb-2' /><div className='h-2 bg-slate-200 rounded mb-1' /><div className='h-2 bg-slate-200 rounded w-3/4' /></div>
                        <div className='h-24 bg-slate-100 rounded-xl p-2'><div className='h-8 bg-rose-200 rounded-lg mb-2' /><div className='h-2 bg-slate-200 rounded mb-1' /><div className='h-2 bg-slate-200 rounded w-3/4' /></div>
                      </div>
                      <div className='h-16 bg-slate-100 rounded-xl flex items-center px-4 gap-3'><div className='w-10 h-10 bg-pink-200 rounded-full' /><div className='flex-1'><div className='h-2 bg-slate-200 rounded mb-1' /><div className='h-2 bg-slate-200 rounded w-2/3' /></div></div>
                      <div className='h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white text-sm font-bold'>Get Started</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Design <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>Approach</span></h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>Our UI/UX design process begins with a comprehensive understanding of your business model, potential customers, and competitors.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {approach.map((item, i) => (<div key={i} className='bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-pink-200 transition-all text-center'><item.icon size={36} className='mx-auto mb-4 text-pink-500' /><h4 className='font-bold text-slate-900 mb-2'>{item.title}</h4><p className='text-sm text-slate-600'>{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>User-Centric <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>Design Principles</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>We create UI/UX for actual users. Our priority is to make everything easy, available, and user-friendly no matter if it is a business app, e-commerce app, or admin dashboard.</p>
                <p className='text-slate-600 mb-6 leading-relaxed'>Our designs adjust to any device and are optimized as well, so users will have the same good experience regardless of the screen size and their location.</p>
                <div className='grid grid-cols-2 gap-3'>
                  {designPrinciples.map((item, i) => (<div key={i} className='flex items-center gap-2'><CheckCircle size={18} className='text-pink-500 flex-shrink-0' /><span className='text-sm text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Conversion-Focused Design</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>The business outcomes should always be supported by the design. Our UI/UX Design Services are developed with the intention of generating leads, inquiries, sign-ups, and conversions.</p>
                <p className='text-slate-600 leading-relaxed'>Every single component—buttons, forms, layouts, and content flow—is carefully designed to let users move towards action naturally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our UI/UX Design Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>Comprehensive design services from research to testing, ensuring your app delivers exceptional user experience.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Design Process</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>A systematic approach that ensures every design decision is user-validated and business-aligned.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-pink-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-pink-500 transition-all'><step.icon size={48} className='text-pink-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-pink-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Design That Drives Results</h2>
            <p className='text-pink-100 text-lg mb-10 max-w-2xl mx-auto'>Choosing Bits and Bytes IT Solution signifies selecting a team that understands both design and digital development. Let's create UI/UX that facilitates engagement, conversions, and long-term success.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-pink-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Start Your Design <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
