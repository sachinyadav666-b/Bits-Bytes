import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { CreditCard, Shield, Zap, Globe, ArrowRight, ChevronDown, Target, Play, Lock, CheckCircle } from 'lucide-react'

export default function PaymentGatewayPage() {
  const faqs = [
    { q: 'Which payment gateways do you integrate?', a: 'We integrate all major gateways including Razorpay, PayU, Stripe, PayPal, Paytm, CCAvenue, and more. We recommend the best option based on your business needs.' },
    { q: 'Is the payment integration secure?', a: 'Yes, all integrations are PCI-DSS compliant with encrypted transactions, secure tokenization, and fraud prevention measures.' },
    { q: 'Can you integrate multiple gateways?', a: 'Yes, we can integrate multiple payment options to give customers choice—cards, UPI, wallets, net banking, and international payments.' }
  ]
  const services = [
    { icon: CreditCard, title: 'Gateway Integration', desc: 'Seamless integration with Razorpay, Stripe, PayPal, PayU, and other major payment gateways.', features: ['Razorpay', 'Stripe', 'PayPal', 'PayU'], color: 'from-blue-500 to-cyan-600' },
    { icon: Shield, title: 'PCI Compliance', desc: 'All integrations follow PCI-DSS standards for secure payment processing and data protection.', features: ['PCI-DSS', 'Encrypted', 'Tokenized', 'Secure'], color: 'from-green-500 to-emerald-600' },
    { icon: Globe, title: 'Multi-Currency', desc: 'Accept payments in multiple currencies for international customers and global reach.', features: ['Multi-Currency', 'International', 'Global', 'Flexible'], color: 'from-purple-500 to-violet-600' },
    { icon: Zap, title: 'UPI & Wallets', desc: 'Integration with UPI, Paytm, Google Pay, PhonePe, and other popular payment methods.', features: ['UPI', 'Paytm', 'Google Pay', 'PhonePe'], color: 'from-orange-500 to-amber-600' },
    { icon: Lock, title: 'Fraud Prevention', desc: 'Built-in fraud detection and prevention measures to protect your business and customers.', features: ['Fraud Detection', 'Prevention', '3D Secure', 'Risk Analysis'], color: 'from-red-500 to-rose-600' },
    { icon: Target, title: 'Checkout Optimization', desc: 'Streamlined checkout flows that reduce cart abandonment and increase conversions.', features: ['Optimized', 'Fast', 'Simple', 'Converting'], color: 'from-indigo-500 to-blue-600' }
  ]
  const stats = [{ value: '99.9%', label: 'Uptime' }, { value: '100%', label: 'Secure' }, { value: '10+', label: 'Gateways' }, { value: '<3s', label: 'Processing' }]
  const process = [{ num: '01', title: 'Assess', desc: 'Evaluate payment requirements', icon: Target }, { num: '02', title: 'Select', desc: 'Choose best gateways', icon: CreditCard }, { num: '03', title: 'Integrate', desc: 'Secure implementation', icon: Shield }, { num: '04', title: 'Test', desc: 'Thorough testing', icon: Play }]
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'E-Commerce', url: '/services/e-commerce' }, { name: 'Payment Gateway', url: '/e-commerce/payment-gateway' }]

  return (
    <>
      <SEOHead title='Payment Gateway Integration Services | Bits and Bytes' description='Professional payment gateway integration in Noida, Delhi NCR. Razorpay, Stripe, PayPal integration. Secure, PCI-compliant. Get free consultation!' keywords='payment gateway integration India, Razorpay integration Noida, Stripe integration Delhi NCR' canonical="/e-commerce/payment-gateway" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 via-cyan-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-blue-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-blue-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 text-sm font-bold'><CreditCard size={16} className='text-blue-500' />Secure Payments</div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Payment Gateway<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>Integration</span></h1>
              <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We integrate <strong>secure, reliable payment gateways</strong> that give your customers multiple payment options while keeping transactions safe and smooth.</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
              <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Integrate Payments <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
            </div>
          </div>
        </section>
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Payment Services</h2></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Process</h2></div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-blue-500 transition-all'><step.icon size={48} className='text-blue-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>FAQs</h2></div>
            <div className='space-y-4'>{faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-blue-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}</div>
          </div>
        </section>
        <section className='py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Accept Payments Securely</h2>
            <p className='text-blue-100 text-lg mb-10 max-w-2xl mx-auto'>Let's integrate payment solutions that your customers trust and love to use.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Integrate Payments <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
