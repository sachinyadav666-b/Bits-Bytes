import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../SEOHead'
import { Palette, Users, Layers, MousePointer, Eye, BarChart3, ArrowRight, CheckCircle, ChevronDown, Sparkles, Target, Heart, Zap, Play, Lightbulb } from 'lucide-react'

export default function UIUXDesignPage() {
  const pageTitle = 'UI/UX Design Services in Noida, Delhi NCR - Bits and Bytes IT Solution'
  const pageDescription = 'Professional UI/UX design services in Noida, Delhi NCR. User research, wireframing, visual design, prototyping. Conversion-focused designs that engage users. Get free consultation!'
  const pageKeywords = 'UI UX design Noida, user experience design Delhi NCR, interface design India, wireframing, prototyping, usability testing, design systems'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'UI/UX Design', url: '/services/ui-ux-design' }]

  const faqs = [
    { q: 'What is UI/UX Design and why does it matter?', a: 'UI (User Interface) design focuses on visual elements and aesthetics, while UX (User Experience) design focuses on user journey and satisfaction. Together, they create digital experiences that are both beautiful and functional, driving engagement and conversions.' },
    { q: 'How does UI/UX design affect business results?', a: 'Good UI/UX design directly impacts user engagement, retention, and conversion rates. A well-designed interface reduces friction, builds trust, and guides users toward taking desired actions like sign-ups, purchases, or inquiries.' },
    { q: 'What is your design process?', a: 'Our design process includes research and empathy mapping, wireframing and user flows, visual design and prototyping, usability testing, and design system creation. We ensure every design decision is user-validated and business-aligned.' },
    { q: 'Do you design for both web and mobile?', a: 'Yes, we provide UI/UX design services for websites, web applications, mobile apps (iOS and Android), and cross-platform solutions. Our designs are responsive and optimized for all screen sizes.' },
    { q: 'How long does the design process take?', a: 'Design timelines vary based on project complexity. A typical website design takes 3-5 weeks, while complex applications may take 6-10 weeks. We provide detailed timelines after understanding your requirements.' }
  ]

  const services = [
    { icon: Users, title: 'User Empathy & Research', desc: 'We start with understanding real users - their needs, behaviors, and pain points. This ensures designs are based on actual user insights, not assumptions.', link: '/ui-ux-design/user-empathy-research', features: ['User Interviews', 'Behavior Analysis', 'Pain Points', 'Personas'], color: 'from-pink-500 to-rose-600' },
    { icon: Layers, title: 'Wireframing & Logic', desc: 'We create wireframes that define page layouts, user flows, and navigation structures before visual design begins.', link: '/ui-ux-design/wireframing-logic', features: ['Wireframes', 'User Flows', 'IA', 'Structure'], color: 'from-blue-500 to-cyan-600' },
    { icon: Palette, title: 'Visual UI Design', desc: 'Modern, clean, and appealing interface designs that represent your brand while ensuring usability and engagement.', link: '/ui-ux-design/visual-ui-design', features: ['Brand-Aligned', 'Modern', 'Typography', 'Color'], color: 'from-purple-500 to-violet-600' },
    { icon: MousePointer, title: 'Interactive Prototyping', desc: 'Interactive prototypes that allow you to test user flows and experiences before development begins.', link: '/ui-ux-design/interactive-prototyping', features: ['Clickable', 'Animations', 'Testing', 'Validation'], color: 'from-orange-500 to-amber-600' },
    { icon: Lightbulb, title: 'Design Systems', desc: 'Scalable design systems with reusable components, style guides, and documentation for consistent experiences.', link: '/ui-ux-design/design-systems', features: ['Components', 'Style Guide', 'Documentation', 'Scalable'], color: 'from-green-500 to-emerald-600' },
    { icon: BarChart3, title: 'Usability Testing', desc: 'Test designs with real users to identify issues and validate solutions before development.', link: '/ui-ux-design/usability-testing', features: ['User Testing', 'Feedback', 'Iterations', 'Validation'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '40%', label: 'Better Retention' }, { value: '2x', label: 'Engagement' }, { value: '50%', label: 'Less Friction' }, { value: '3x', label: 'Conversions' }]

  const whyChooseUs = [
    { icon: Target, title: 'Business-Oriented', desc: 'Designs that support lead generation, sign-ups, and sales' },
    { icon: Users, title: 'User-Centric', desc: 'Focus on user needs and behavior' },
    { icon: Zap, title: 'Performance-Focused', desc: 'Fast-loading, optimized designs' },
    { icon: Heart, title: 'Engagement-Driven', desc: 'Designs that attract and convert' },
    { icon: Eye, title: 'Accessibility', desc: 'Inclusive designs for all users' },
    { icon: Palette, title: 'Brand-Aligned', desc: 'Consistent visual identity' }
  ]

  const process = [
    { num: '01', title: 'Research', desc: 'Understanding your users, business goals, and competitors', icon: Users },
    { num: '02', title: 'Wireframe', desc: 'Creating structure, layouts, and user flows', icon: Layers },
    { num: '03', title: 'Design', desc: 'Visual design with brand integration', icon: Palette },
    { num: '04', title: 'Test & Refine', desc: 'Usability testing and iterations', icon: Play }
  ]

  const clientTypes = [
    { icon: Target, label: 'Startups', desc: 'Launch with great design' },
    { icon: Users, label: 'SMEs', desc: 'Improve conversions' },
    { icon: Heart, label: 'Enterprises', desc: 'Elevate user experience' },
    { icon: Zap, label: 'E-Commerce', desc: 'Boost sales' }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/services/ui-ux-design" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pink-100 via-rose-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100 via-violet-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-pink-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-pink-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 text-pink-700 text-sm font-bold'><Palette size={16} className='text-pink-500' />Human-Centered Design</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Creating Engaging<span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>Digital Experiences</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We offer <strong>professional UI/UX Design services</strong> that place the user at the center of every decision. A great user experience is about understanding how real people think, feel, and behave.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>Our UI/UX design services are designed to help businesses build digital products that are not only visually attractive but also user-friendly, easy to access, and performance-driven.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-pink-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Your Project <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
                  <a href='https://wa.me/919876543210' target='_blank' rel='noopener noreferrer'><button className='px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-pink-500 hover:text-pink-600 transition-all'>WhatsApp Us</button></a>
                </div>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100'>
                  <div className='flex items-center gap-2 mb-4'><div className='w-3 h-3 rounded-full bg-red-400' /><div className='w-3 h-3 rounded-full bg-amber-400' /><div className='w-3 h-3 rounded-full bg-green-400' /></div>
                  <div className='space-y-4'>
                    <div className='h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center'><Palette size={36} className='text-pink-500' /></div>
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='h-20 bg-slate-50 rounded-xl p-3'><div className='h-6 w-16 bg-pink-200 rounded mb-2' /><div className='h-2 bg-slate-200 rounded mb-1' /><div className='h-2 bg-slate-200 rounded w-3/4' /></div>
                      <div className='h-20 bg-slate-50 rounded-xl p-3'><div className='h-6 w-16 bg-purple-200 rounded mb-2' /><div className='h-2 bg-slate-200 rounded mb-1' /><div className='h-2 bg-slate-200 rounded w-3/4' /></div>
                    </div>
                    <div className='h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white text-sm font-bold'>Get Started</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why UI/UX Matters */}
        <section className='py-20 bg-gradient-to-br from-slate-50 to-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='max-w-4xl mx-auto text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6'>The Importance of <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>Good Design</span></h2>
              <p className='text-lg text-slate-600 leading-relaxed'>In today's competitive digital landscape, good design is not a luxury—it's a necessity. Users form opinions about your brand within seconds. A poorly designed interface can drive users away, while a well-crafted experience builds trust and encourages action.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {whyChooseUs.map((item, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-pink-200 transition-all'><div className='w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform'><item.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-2'>{item.title}</h3><p className='text-slate-600 text-sm leading-relaxed'>{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
      <section className='py-20 bg-white'>
  <div className='container mx-auto px-4 md:px-6'>
    <div className='grid lg:grid-cols-2 gap-12 items-center'>
      <div>
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>
          Who We <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'>Work With</span>
        </h2>
        <p className='text-lg text-slate-600 mb-6 leading-relaxed'>
          We partner with startups, SMEs, enterprises, and organizations across industries. Our UI/UX design services are customized to meet diverse requirements—from launching a new product to redesigning an existing platform.
        </p>
        <p className='text-slate-600 mb-6 leading-relaxed'>
          Our solutions are ideal for businesses that want to:
        </p>
        <div className='space-y-3'>
          {['Create user-friendly digital products', 'Improve conversion rates and engagement', 'Build consistent brand experiences', 'Reduce user friction and drop-offs', 'Launch market-ready designs faster'].map((item, i) => (
            <div key={i} className='flex items-center gap-3'>
              <CheckCircle size={20} className='text-pink-500 flex-shrink-0' />
              <span className='text-slate-700'>{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* UPDATED CARDS WITH INCREASED SIZE - Pink/Rose Theme */}
      <div className='grid grid-cols-2 gap-5'>
        {clientTypes.map((item, i) => (
          <div 
            key={i} 
            className='bg-gradient-to-br from-white to-pink-50/20 rounded-2xl p-7 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-100 hover:border-pink-300 group'
          >
            {/* Icon Container - Bigger */}
            <div className='mb-5 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <item.icon size={38} className='text-pink-600' />
            </div>
            
            {/* Title - Bigger */}
            <div className='text-xl font-black text-slate-900 mb-3 group-hover:text-pink-700 transition-colors'>
              {item.label}
            </div>
            
            {/* Description - Bigger */}
            <div className='text-base text-slate-600 leading-relaxed'>
              {item.desc}
            </div>
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
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase'><Sparkles size={14} className='text-pink-500' /> Our Expertise</div>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our UI/UX Design Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>End-to-end design services from research to testing, ensuring your digital products deliver exceptional user experiences.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<Link key={i} to={service.link} className='group'><div className='h-full bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2 mb-4'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div><div className='flex items-center gap-2 text-pink-600 font-semibold text-sm'>Learn More <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' /></div></div></Link>))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Design Process</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>A systematic, research-driven approach that ensures every design decision is user-validated and business-aligned.</p>
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
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Let's Create Something Beautiful</h2>
            <p className='text-pink-100 text-lg mb-10 max-w-2xl mx-auto'>Great design is not just about how it looks—it's about how it works. Let's build digital experiences that engage, convert, and delight your users.</p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-pink-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3'>Start Your Project <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
              <a href='tel:+919876543210'><button className='px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all'>Call Us Now</button></a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
