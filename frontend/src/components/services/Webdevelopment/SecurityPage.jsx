import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Shield, Lock, Eye, AlertTriangle, Server, FileSearch, ArrowRight, CheckCircle, ChevronDown, Target, Play, Bug, RefreshCw, Globe } from 'lucide-react'

export default function SecurityPage() {
  const pageTitle = 'Website Security Services - OWASP Compliance & Protection'
  const pageDescription = 'Professional website security services in Noida, Delhi NCR. OWASP compliance, SSL/HTTPS, malware protection, penetration testing. Protect your digital assets. Get free security audit!'
  const pageKeywords = 'website security India, OWASP compliance, SSL certificate, penetration testing Noida, malware protection, web application security, cyber security services'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Web Development', url: '/services/web-development' }, { name: 'Security', url: '/web-development/security' }]

  const faqs = [
    { q: 'Why is website security crucial for businesses?', a: 'A secure site not only safeguards the business but also the clients. Users want their personal information, payment methods and browsing habits confidential and secured. Search engines like Google may warn or penalize insecure sites, affecting your visibility and traffic.' },
    { q: 'What security vulnerabilities do you protect against?', a: 'We protect against common vulnerabilities including SQL injection, cross-site scripting (XSS), unauthorized access, malware infections, brute-force attacks, and data breaches. Our approach covers the complete OWASP Top 10 security risks.' },
    { q: 'How often should I conduct security audits?', a: 'We recommend quarterly security audits for most businesses. High-risk sites handling sensitive data or payments should have monthly audits. We also recommend immediate audits after any major site update or security incident.' },
    { q: 'Does security affect website performance?', a: 'Security should never slow down your website. Our security implementations are optimized to maintain fast loading speeds, smooth functionality, and seamless navigation while keeping your site protected.' },
    { q: 'Do you offer ongoing security monitoring?', a: 'Yes, we offer continuous monitoring services including real-time threat detection, automatic backups, security patch management, and 24/7 alerts for any suspicious activity.' }
  ]

  const threats = [
    { title: 'SQL Injection', desc: 'Malicious SQL code inserted into queries', icon: Bug },
    { title: 'XSS Attacks', desc: 'Cross-site scripting vulnerabilities', icon: AlertTriangle },
    { title: 'Brute Force', desc: 'Automated password cracking attempts', icon: Lock },
    { title: 'Malware', desc: 'Malicious code and virus infections', icon: Bug },
    { title: 'Data Breaches', desc: 'Unauthorized access to sensitive data', icon: Eye },
    { title: 'DDoS Attacks', desc: 'Distributed denial of service attacks', icon: Server }
  ]

  const services = [
    { icon: FileSearch, title: 'Security Audit & Risk Assessment', desc: 'We start with a detailed security audit to identify vulnerabilities, misconfigurations, outdated software, and potential attack points. This assessment helps us design a customized security strategy for your website.', features: ['Vulnerability Scan', 'Risk Analysis', 'Compliance Check', 'Report'], color: 'from-red-500 to-rose-600' },
    { icon: Bug, title: 'Malware Protection & Removal', desc: 'We protect your website from malware infections and malicious code. If your site is already compromised, we clean and restore it while implementing measures to prevent future attacks.', features: ['Malware Scan', 'Removal', 'Cleanup', 'Prevention'], color: 'from-orange-500 to-amber-600' },
    { icon: Server, title: 'Secure Hosting & Server Config', desc: 'We optimize server and hosting configurations to enhance security, performance, and reliability. This includes firewall setup, access control, and secure server environments.', features: ['Firewall', 'Access Control', 'Server Hardening', 'Monitoring'], color: 'from-blue-500 to-cyan-600' },
    { icon: Lock, title: 'SSL & HTTPS Implementation', desc: 'We implement and configure SSL certificates to ensure encrypted communication between users and your website. HTTPS not only improves security but also builds trust and supports SEO performance.', features: ['SSL Setup', 'HTTPS', 'Encryption', 'Trust Badges'], color: 'from-green-500 to-emerald-600' },
    { icon: Shield, title: 'Web Application Security', desc: 'We secure web applications against common vulnerabilities such as SQL injection, cross-site scripting (XSS), and unauthorized access. Our approach ensures safe data handling and system integrity.', features: ['OWASP Top 10', 'Input Validation', 'Auth Security', 'Data Protection'], color: 'from-purple-500 to-violet-600' },
    { icon: RefreshCw, title: 'Updates & Patch Management', desc: 'Outdated software is one of the biggest security risks. We ensure your website, plugins, and frameworks are regularly updated with the latest security patches.', features: ['Auto Updates', 'Patch Management', 'Version Control', 'Backup'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '100%', label: 'OWASP Compliant' }, { value: '24/7', label: 'Monitoring' }, { value: 'A+', label: 'SSL Rating' }, { value: '99.9%', label: 'Threat Prevention' }]

  const benefits = [
    'Safeguard vital customer and business information',
    'Block hacking, malware, and unauthorized access',
    'Keep up brand reputation and customer trust',
    'Avoid system unavailability and business disruption',
    'Follow security and privacy requirements',
    'Enhance SEO trust signals and user confidence'
  ]

  const idealFor = [
    { icon: Globe, title: 'Business Websites', desc: 'Handle customer data' },
    { icon: Lock, title: 'E-Commerce', desc: 'Online payments' },
    { icon: Server, title: 'Web Applications', desc: 'Secure databases' },
    { icon: Shield, title: 'Enterprises', desc: 'Compliance needs' }
  ]

  const process = [
    { num: '01', title: 'Audit', desc: 'Comprehensive security audit to identify vulnerabilities', icon: FileSearch },
    { num: '02', title: 'Plan', desc: 'Design customized security strategy for your website', icon: Target },
    { num: '03', title: 'Implement', desc: 'Deploy security measures and configurations', icon: Shield },
    { num: '04', title: 'Monitor', desc: 'Continuous monitoring and threat protection', icon: Eye }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/web-development/security" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-100 via-rose-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-red-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-red-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 text-red-700 text-sm font-bold'><Shield size={16} className='text-red-500' />Protect Your Digital Assets</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Website<span className='block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600'>Security</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We offer top-notch <strong>Website Security Services</strong> aimed at safeguarding your digital assets from cyber threats, data breaches, and malicious attacks. Website security is a prerequisite for establishing trust and ensuring business continuity.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>The increasing number of cyberattacks puts businesses of all sizes at serious risk. Our security solutions focus on protecting your website, applications, and user data through a proactive, multi-layered security strategy.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-red-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Get Security Audit <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-red-200 to-rose-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100'>
                  <div className='text-center mb-6'><Shield size={48} className='mx-auto text-red-500 mb-2' /><h3 className='font-bold'>Security Status</h3></div>
                  <div className='space-y-3'>
                    {['SSL Certificate', 'Firewall Active', 'Malware Scan', 'DDoS Protection', 'Data Encryption'].map((item, i) => (
                      <div key={i} className='flex items-center justify-between p-3 bg-green-50 rounded-xl'>
                        <span className='text-sm font-medium'>{item}</span>
                        <CheckCircle size={18} className='text-green-500' />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Threats We Protect Against */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Threats We <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600'>Protect Against</span></h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>Comprehensive protection against all major cyber security threats</p>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-4'>
              {threats.map((threat, i) => (
                <div key={i} className='bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-lg hover:border-red-200 transition-all text-center'>
                  <threat.icon size={28} className='mx-auto mb-3 text-red-500' />
                  <h4 className='font-bold text-slate-900 text-sm mb-1'>{threat.title}</h4>
                  <p className='text-xs text-slate-500'>{threat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Security Matters */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Why Website Security Is <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600'>Crucial</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>A secure site not only safeguards the business but also the clients. Users are adamant about keeping their personal information, payment methods and browsing habits confidential and secured.</p>
                <p className='text-slate-600 mb-6 leading-relaxed'>Powerful website security enables you to:</p>
                <div className='space-y-3'>
                  {benefits.map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-red-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {idealFor.map((item, i) => (<div key={i} className='bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all'><item.icon size={32} className='mx-auto mb-3 text-red-500' /><h4 className='font-bold text-slate-900 mb-1'>{item.title}</h4><p className='text-sm text-slate-500'>{item.desc}</p></div>))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Security Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>End-to-end website security solutions covering prevention, protection, monitoring, and recovery.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Security Process</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>A systematic approach to protecting your digital assets</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-red-500 transition-all'><step.icon size={48} className='text-red-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-red-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-red-600 to-rose-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Build Trust with a Secure Website</h2>
            <p className='text-red-100 text-lg mb-10 max-w-2xl mx-auto'>Your website is one of the most important assets of your business. Let's protect your site, secure your data, and gain trust online.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-red-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Get Security Audit <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
