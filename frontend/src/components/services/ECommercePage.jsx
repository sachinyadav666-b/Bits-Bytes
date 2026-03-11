import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../SEOHead'
import { ShoppingCart, CreditCard, Package, Truck, Shield, BarChart3, ArrowRight, CheckCircle, ChevronDown, Sparkles, Target, Zap, Globe, Users, Play, Settings, Palette } from 'lucide-react'

export default function ECommercePage() {
  const pageTitle = 'E-Commerce Development Services in Noida, Delhi NCR - Bits and Bytes IT Solution'
  const pageDescription = 'Professional e-commerce development services in Noida, Delhi NCR. Custom online stores, Shopify, WooCommerce. Payment integration, inventory management. Get free consultation!'
  const pageKeywords = 'e-commerce development Noida, online store development Delhi NCR, Shopify development India, WooCommerce development, custom e-commerce solutions'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'E-Commerce', url: '/services/e-commerce' }]

  const faqs = [
    { q: 'What e-commerce platforms do you work with?', a: 'We work with major platforms including Shopify, WooCommerce, Magento, and custom solutions. We recommend the best platform based on your business size, product catalog, and growth plans.' },
    { q: 'How long does it take to build an e-commerce store?', a: 'Timeline depends on complexity. A basic store takes 4-6 weeks, while complex stores with custom features may take 10-14 weeks. We provide detailed timelines after understanding your requirements.' },
    { q: 'Can you integrate payment gateways?', a: 'Yes, we integrate all major payment gateways including Razorpay, PayU, Stripe, PayPal, and more. We ensure secure transactions and seamless checkout experiences.' },
    { q: 'Do you provide inventory management?', a: 'Yes, we implement comprehensive inventory management systems with real-time stock tracking, low-stock alerts, multi-warehouse support, and automated reordering.' },
    { q: 'Can you help with existing stores?', a: 'Absolutely! We provide optimization, redesign, and enhancement services for existing e-commerce stores to improve performance, conversions, and user experience.' }
  ]

  const services = [
    { icon: ShoppingCart, title: 'Custom E-Commerce Stores', desc: 'Fully customized online stores built to match your brand, product catalog, and business requirements with unique features and design.', link: '/e-commerce/custom-store', features: ['Custom Design', 'Unique Features', 'Brand-Aligned', 'Scalable'], color: 'from-emerald-500 to-green-600' },
    { icon: CreditCard, title: 'Payment Gateway Integration', desc: 'Secure integration with all major payment gateways—Razorpay, PayU, Stripe, PayPal—for smooth, secure transactions.', link: '/e-commerce/payment-gateway', features: ['Razorpay', 'Stripe', 'PayPal', 'Secure'], color: 'from-blue-500 to-cyan-600' },
    { icon: Package, title: 'Inventory Management', desc: 'Comprehensive inventory systems with real-time tracking, low-stock alerts, multi-warehouse support, and automated reordering.', link: '/e-commerce/inventory', features: ['Real-time', 'Alerts', 'Multi-warehouse', 'Automated'], color: 'from-purple-500 to-violet-600' },
    { icon: Truck, title: 'Shipping & Logistics', desc: 'Integration with shipping providers, automated tracking, rate calculation, and delivery management systems.', link: '/e-commerce/shipping', features: ['Tracking', 'Rate Calc', 'Multi-carrier', 'Automated'], color: 'from-orange-500 to-amber-600' },
    { icon: Palette, title: 'Store Design & UX', desc: 'Conversion-focused store design with intuitive navigation, beautiful product pages, and optimized checkout flows.', link: '/e-commerce/design', features: ['Conversion', 'Beautiful', 'Intuitive', 'Optimized'], color: 'from-pink-500 to-rose-600' },
    { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Comprehensive analytics dashboards with sales reports, customer insights, and performance tracking.', link: '/e-commerce/analytics', features: ['Sales Reports', 'Insights', 'Dashboards', 'Tracking'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '50+', label: 'Stores Built' }, { value: '₹10Cr+', label: 'Sales Generated' }, { value: '99.9%', label: 'Uptime' }, { value: '4.9★', label: 'Client Rating' }]

  const whyChooseUs = [
    { icon: Zap, title: 'High Performance', desc: 'Fast-loading stores optimized for conversions' },
    { icon: Shield, title: 'Secure Transactions', desc: 'PCI-compliant payment processing' },
    { icon: Target, title: 'Conversion-Focused', desc: 'Design that drives sales' },
    { icon: Globe, title: 'SEO-Optimized', desc: 'Built for search visibility' },
    { icon: Settings, title: 'Easy Management', desc: 'User-friendly admin panels' },
    { icon: Users, title: 'Customer Support', desc: 'Ongoing maintenance and help' }
  ]

  const process = [
    { num: '01', title: 'Discovery', desc: 'Understanding your products, audience, and business goals', icon: Target },
    { num: '02', title: 'Design', desc: 'Creating conversion-focused store design and UX', icon: Palette },
    { num: '03', title: 'Development', desc: 'Building with performance and security in mind', icon: Settings },
    { num: '04', title: 'Launch & Support', desc: 'Testing, deployment, and ongoing maintenance', icon: Play }
  ]

  const platforms = [
    { name: 'Shopify', desc: 'Best for quick launch and ease of use' },
    { name: 'WooCommerce', desc: 'Best for WordPress integration' },
    { name: 'Magento', desc: 'Best for large catalogs and enterprise' },
    { name: 'Custom', desc: 'Best for unique requirements' }
  ]

  const clientTypes = [
    { icon: Target, label: 'Startups', desc: 'Launch your first store' },
    { icon: Users, label: 'SMEs', desc: 'Scale your online presence' },
    { icon: Globe, label: 'Enterprises', desc: 'Complex e-commerce needs' },
    { icon: Package, label: 'D2C Brands', desc: 'Direct-to-consumer sales' }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/services/e-commerce" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-100 via-green-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-100 via-blue-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-emerald-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-emerald-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 text-emerald-700 text-sm font-bold'><ShoppingCart size={16} className='text-emerald-500' />Sell Online Successfully</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>E-Commerce<span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600'>Development</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We provide <strong>professional e-commerce development services</strong> that help businesses sell online successfully. From custom stores to platform solutions, we build e-commerce experiences that convert visitors into customers.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>In today's digital marketplace, having a well-designed, fast, and secure online store is essential for business growth. Our e-commerce solutions are built for performance, scalability, and conversions.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-emerald-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Start Your Store <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
                  <a href='https://wa.me/919876543210' target='_blank' rel='noopener noreferrer'><button className='px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all'>WhatsApp Us</button></a>
                </div>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-emerald-200 to-green-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100'>
                  <div className='flex items-center gap-2 mb-4'><div className='w-3 h-3 rounded-full bg-red-400' /><div className='w-3 h-3 rounded-full bg-amber-400' /><div className='w-3 h-3 rounded-full bg-green-400' /></div>
                  <div className='space-y-4'>
                    <div className='h-24 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center'><ShoppingCart size={36} className='text-emerald-500' /></div>
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='h-20 bg-slate-50 rounded-xl p-3'><div className='h-10 w-full bg-emerald-200 rounded mb-2' /><div className='h-2 bg-slate-200 rounded mb-1' /><div className='text-emerald-600 font-bold text-sm'>₹999</div></div>
                      <div className='h-20 bg-slate-50 rounded-xl p-3'><div className='h-10 w-full bg-green-200 rounded mb-2' /><div className='h-2 bg-slate-200 rounded mb-1' /><div className='text-emerald-600 font-bold text-sm'>₹1,499</div></div>
                    </div>
                    <div className='h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold'>Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why E-Commerce */}
        <section className='py-20 bg-gradient-to-br from-slate-50 to-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='max-w-4xl mx-auto text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6'>Why Choose Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600'>E-Commerce Solutions</span></h2>
              <p className='text-lg text-slate-600 leading-relaxed'>We build e-commerce stores that are fast, secure, and optimized for conversions. Our solutions focus on user experience, performance, and business growth.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {whyChooseUs.map((item, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all'><div className='w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform'><item.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-2'>{item.title}</h3><p className='text-slate-600 text-sm leading-relaxed'>{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* Platforms */}
       <section className='py-20 bg-white'>
  <div className='container mx-auto px-4 md:px-6'>
    <div className='grid lg:grid-cols-2 gap-12 items-center'>
      <div>
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>
          E-Commerce <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600'>Platforms We Work With</span>
        </h2>
        <p className='text-lg text-slate-600 mb-6 leading-relaxed'>
          We work with all major e-commerce platforms and can help you choose the best one for your business. Whether you need quick launch or custom capabilities, we have you covered.
        </p>
        <div className='grid grid-cols-2 gap-4'>
          {platforms.map((platform, i) => (
            <div key={i} className='bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-emerald-100'>
              <h4 className='font-bold text-slate-900 mb-2 text-lg'>{platform.name}</h4>
              <p className='text-sm text-slate-600'>{platform.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* UPDATED CARDS WITH INCREASED SIZE - Emerald/Green Theme */}
      <div className='grid grid-cols-2 gap-5'>
        {clientTypes.map((item, i) => (
          <div 
            key={i} 
            className='bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-7 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-100 hover:border-emerald-300 group'
          >
            {/* Icon Container - Bigger */}
            <div className='mb-5 p-4 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <item.icon size={38} className='text-emerald-600' />
            </div>
            
            {/* Title - Bigger */}
            <div className='text-xl font-black text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors'>
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
      <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase'>
        <Sparkles size={14} className='text-emerald-500' /> Our Expertise
      </div>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>
        Our E-Commerce Services
      </h2>
      <p className='text-slate-600 max-w-2xl mx-auto'>
        End-to-end e-commerce development services from store setup to ongoing optimization and support.
      </p>
    </div>

    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {services.map((service, i) => (
        <Link
          key={i}
          to={service.link}
          className='group h-full bg-white rounded-2xl p-6 border border-slate-200
                     hover:shadow-xl hover:border-transparent transition-all
                     block cursor-pointer'
        >
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color}
                        flex items-center justify-center text-white mb-4
                        group-hover:scale-110 transition-transform`}
          >
            <service.icon size={26} />
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors'>
            {service.title}
          </h3>

          <p className='text-slate-600 text-sm mb-4 leading-relaxed'>
            {service.desc}
          </p>

          <div className='flex flex-wrap gap-2'>
            {service.features.map((f, j) => (
              <span
                key={j}
                className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'
              >
                {f}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


        {/* Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Development Process</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>A systematic approach to building successful e-commerce stores.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-emerald-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-emerald-500 transition-all'><step.icon size={48} className='text-emerald-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-emerald-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Ready to Sell Online?</h2>
            <p className='text-emerald-100 text-lg mb-10 max-w-2xl mx-auto'>Let's build an e-commerce store that drives sales, builds trust, and grows your business. Start selling online today.</p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3'>Start Your Store <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
              <a href='tel:+919876543210'><button className='px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all'>Call Us Now</button></a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
