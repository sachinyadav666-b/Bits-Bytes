import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { 
  Shield, 
  Lock, 
  Fingerprint, 
  FileCheck, 
  Server, 
  Eye, 
  Key, 
  ArrowRight, 
  CheckCircle, 
  ChevronDown, 
  AlertTriangle,
  Globe,
  FileKey
} from 'lucide-react'

export default function EnterpriseSecurityPage() {
  // --- SEO DATA ---
  const pageTitle = 'Enterprise Mobile App Security - HIPAA, GDPR & AES-256 | Bits and Bytes'
  const pageDescription = 'Bank-grade mobile app security services. We implement SSL Pinning, Biometric Auth, and AES-256 encryption to ensure GDPR & HIPAA compliance.'
  const pageKeywords = 'Mobile app security, SSL pinning, AES-256 encryption, HIPAA compliant app development, biometric authentication, secure mobile architecture'
  const breadcrumbs = [
    { name: 'Home', url: '/' }, 
    { name: 'Services', url: '/services' }, 
    { name: 'App Development', url: '/services/app-development' }, 
    { name: 'Enterprise Security', url: '/app-development/security' }
  ]

  // --- CONTENT FROM YOUR ORIGINAL PAGE (Enhanced) ---
  const faqs = [
    {
      q: "How do you ensure data encryption (at rest & in transit)?",
      a: "We use **AES-256 Bit Encryption** for storing sensitive data in the device's Secure Enclave (Keychain/Keystore). For network transmission, we enforce **TLS 1.3** ensuring no data can be intercepted."
    },
    {
      q: "What is 'SSL Pinning' and why do we need it?",
      a: "**SSL Pinning** prevents Man-in-the-Middle (MITM) attacks. We hardcode the server's certificate into the app, so if a hacker tries to intercept the API traffic using a fake certificate, the app immediately blocks the connection."
    },
    {
      q: "Do you support Biometric Authentication?",
      a: "Yes. We integrate native **FaceID** and **TouchID** APIs. This allows users to log in securely without typing passwords, utilizing the device's hardware-backed security modules."
    },
    {
      q: "Is the app compliant with GDPR and HIPAA?",
      a: "Absolutely. We follow **Privacy-by-Design** principles. This includes features like 'Right to be Forgotten' (Data Deletion), Anonymization of user analytics, and strict role-based access control (RBAC) to meet **GDPR, HIPAA, and SOC2** standards."
    },
    {
      q: "How do you handle source code protection?",
      a: "We use advanced **Code Obfuscation** techniques (like ProGuard/R8 for Android and compiler optimizations for iOS) to make reverse engineering extremely difficult for attackers."
    }
  ]

  // --- MAPPED FEATURES TO NEW DESIGN CARDS ---
  const services = [
    { 
      icon: Lock, 
      title: 'AES-256 Encryption', 
      desc: 'Military-grade encryption for all data stored locally. We utilize the hardware-backed Secure Enclave (iOS) and Keystore (Android).', 
      features: ['Data at Rest', 'Secure Enclave', 'Keychain', 'Zero Leakage'], 
      color: 'from-indigo-500 to-violet-600' 
    },
    { 
      icon: Shield, 
      title: 'SSL Pinning', 
      desc: 'We prevent Man-in-the-Middle (MITM) attacks by pinning server certificates, ensuring the app only talks to your trusted servers.', 
      features: ['Anti-MITM', 'Cert Validation', 'TLS 1.3', 'Network Safety'], 
      color: 'from-violet-500 to-purple-600' 
    },
    { 
      icon: Fingerprint, 
      title: 'Biometric Login', 
      desc: 'Seamless and secure authentication using FaceID, TouchID, and Android Biometrics, reducing reliance on weak passwords.', 
      features: ['FaceID', 'TouchID', 'Hardware Auth', 'Convenience'], 
      color: 'from-fuchsia-500 to-pink-600' 
    },
    { 
      icon: FileCheck, 
      title: 'Compliance Ready', 
      desc: 'Built-in features to meet global standards. We handle data anonymization, consent management, and audit logs.', 
      features: ['GDPR', 'HIPAA', 'SOC 2', 'CCPA'], 
      color: 'from-blue-500 to-indigo-600' 
    },
    { 
      icon: Eye, 
      title: 'Code Obfuscation', 
      desc: 'We protect your intellectual property by obfuscating the source code, making it nearly impossible to reverse-engineer or tamper with.', 
      features: ['ProGuard', 'R8', 'Anti-Tamper', 'Source Protection'], 
      color: 'from-slate-600 to-slate-800' 
    },
    { 
      icon: Key, 
      title: 'Secure API Integration', 
      desc: 'Implementation of OAuth 2.0, JWT refreshing logic, and strict token management to ensure API sessions remain uncompromised.', 
      features: ['OAuth 2.0', 'JWT', 'Token Rotation', 'Session Mgmt'], 
      color: 'from-emerald-500 to-teal-600' 
    }
  ]

  const stats = [
    { value: '256-bit', label: 'Encryption' }, 
    { value: '0', label: 'Data Breaches' }, 
    { value: '100%', label: 'Compliant' }, 
    { value: '24/7', label: 'Monitoring' }
  ]

  const approach = [
    { icon: Shield, title: 'Zero Trust', desc: 'Never trust, always verify. Every request is authenticated.' },
    { icon: Lock, title: 'Defense in Depth', desc: 'Multiple layers of security redundancy.' },
    { icon: FileKey, title: 'Privacy First', desc: 'Data is anonymized and encrypted by default.' },
    { icon: AlertTriangle, title: 'Proactive Testing', desc: 'Regular penetration testing and vulnerability scans.' }
  ]

  const designPrinciples = [
    'Hardware-backed key storage',
    'Strict Role-Based Access (RBAC)',
    'End-to-End Encryption (E2EE)',
    'Automatic session timeouts',
    'Jailbreak/Root detection',
    'Certificate Transparency'
  ]

  const process = [
    { num: '01', title: 'Audit', desc: 'Identifying vulnerabilities and compliance needs', icon: Eye },
    { num: '02', title: 'Architect', desc: 'Designing secure data flows and storage', icon: Server },
    { num: '03', title: 'Harden', desc: 'Implementing encryption and SSL pinning', icon: Lock },
    { num: '04', title: 'Monitor', desc: 'Continuous security updates and patching', icon: Shield }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/app-development/security" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      
      <main className='bg-white text-slate-900 overflow-hidden font-sans'>
        
        {/* ================= HERO SECTION ================= */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          {/* Background Blob - Indigo/Violet */}
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-100 via-violet-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'>
              <ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>
                {breadcrumbs.map((item, i) => (
                  <li key={i} className='flex items-center gap-2'>
                    {i > 0 && <span>/</span>}
                    {i === breadcrumbs.length - 1 ? (
                      <span className='text-indigo-600 font-medium'>{item.name}</span>
                    ) : (
                      <Link to={item.url} className='hover:text-indigo-600 transition-colors'>{item.name}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-200 text-indigo-700 text-sm font-bold'>
                  <Shield size={16} className='text-indigo-600' />
                  Bank-Grade Protection
                </div>
                
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>
                  Fortify Your <br />
                  <span className='block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600'>
                    Digital Assets
                  </span>
                </h1>
                
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>
                  Security isn't an afterthought; it's our foundation. We implement military-grade encryption, biometric layers, and compliance protocols to ensure your enterprise data remains <strong>Unbreachable</strong>.
                </p>
                
                <p className='text-slate-600 mb-8 leading-relaxed'>
                  From FinTech to Healthcare, we build applications that meet the strictest global security standards (GDPR, HIPAA, SOC2).
                </p>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
                  {stats.map((stat, i) => (
                    <div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all'>
                      <div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600'>
                        {stat.value}
                      </div>
                      <div className='text-xs text-slate-500'>{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link to='/contact-us'>
                  <button className='group px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>
                    Secure Your App
                    <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
                  </button>
                </Link>
              </div>

              {/* Visual Mockup - Security Theme */}
              <div className='relative flex justify-center'>
                <div className='absolute -inset-4 bg-gradient-to-r from-indigo-200 to-violet-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative w-64 bg-slate-900 rounded-[3rem] p-2 shadow-2xl'>
                  <div className='bg-[#0f172a] rounded-[2.5rem] p-4 h-[450px] overflow-hidden relative flex flex-col items-center pt-12'>
                    
                    {/* Scanner Visual */}
                    <div className='relative w-32 h-32 rounded-full border-2 border-indigo-500 flex items-center justify-center mb-6 overflow-hidden'>
                      <Fingerprint size={64} className='text-indigo-400 opacity-50' />
                      {/* Scanning Animation Line */}
                      <div className='absolute top-0 w-full h-1 bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,1)] animate-[scan_2s_ease-in-out_infinite]' />
                    </div>

                    <div className='text-center'>
                      <div className='text-white font-bold text-lg mb-1'>Access Granted</div>
                      <div className='text-slate-400 text-xs'>Identity Verified</div>
                    </div>

                    {/* Security Badges List */}
                    <div className='mt-8 w-full space-y-3'>
                       <div className='flex items-center gap-3 bg-slate-800 p-2 rounded-lg border border-slate-700/50'>
                          <Shield size={16} className='text-green-400' />
                          <div className='text-xs text-slate-300'>Connection Encrypted</div>
                       </div>
                       <div className='flex items-center gap-3 bg-slate-800 p-2 rounded-lg border border-slate-700/50'>
                          <CheckCircle size={16} className='text-green-400' />
                          <div className='text-xs text-slate-300'>Certificate Pinned</div>
                       </div>
                       <div className='flex items-center gap-3 bg-slate-800 p-2 rounded-lg border border-slate-700/50'>
                          <FileCheck size={16} className='text-green-400' />
                          <div className='text-xs text-slate-300'>GDPR Compliant</div>
                       </div>
                    </div>

                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className='absolute top-20 -right-8 bg-white p-3 rounded-xl shadow-xl animate-bounce delay-1000'>
                   <div className='flex items-center gap-2'>
                      <Lock size={16} className='text-indigo-600' />
                      <span className='text-xs font-bold text-slate-800'>AES-256</span>
                   </div>
                </div>
                <div className='absolute bottom-20 -left-8 bg-white p-3 rounded-xl shadow-xl animate-bounce'>
                   <div className='flex items-center gap-2'>
                      <Globe size={16} className='text-violet-600' />
                      <span className='text-xs font-bold text-slate-800'>ISO 27001</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= APPROACH GRID ================= */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>
                Our Security <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600'>Philosophy</span>
              </h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>
                We adopt a "Defense in Depth" strategy, layering multiple security measures to protect your users.
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {approach.map((item, i) => (
                <div key={i} className='bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all text-center'>
                  <item.icon size={36} className='mx-auto mb-4 text-indigo-500' />
                  <h4 className='font-bold text-slate-900 mb-2'>{item.title}</h4>
                  <p className='text-sm text-slate-600'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRINCIPLES SECTION ================= */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>
                  Privacy by <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600'>Design</span>
                </h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>
                  We ensure compliance with GDPR, HIPAA, and CCPA by integrating privacy features directly into the architecture. Features like "Right to be Forgotten" and "Data Anonymization" are standard in our builds.
                </p>
                <p className='text-slate-600 mb-6 leading-relaxed'>
                  Your user's trust is your most valuable asset. We help you protect it by ensuring that personal data is encrypted both in transit (TLS 1.3) and at rest (AES-256).
                </p>
                <div className='grid grid-cols-2 gap-3'>
                  {designPrinciples.map((item, i) => (
                    <div key={i} className='flex items-center gap-2'>
                      <CheckCircle size={18} className='text-indigo-500 flex-shrink-0' />
                      <span className='text-sm text-slate-700'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Secure Enclave</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>
                  <strong>Hardware-Level Protection.</strong>
                </p>
                <p className='text-slate-600 leading-relaxed'>
                  We utilize the dedicated hardware security modules on modern smartphones (Apple's Secure Enclave and Android's Titan M). This ensures that cryptographic keys are never exposed to the application processor or operating system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES GRID (Tech Features) ================= */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>
                Security Protocols
              </h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>
                Advanced measures we implement to mitigate risks and vulnerabilities.
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (
                <div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon size={26} />
                  </div>
                  <h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3>
                  <p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p>
                  <div className='flex flex-wrap gap-2'>
                    {service.features.map((f, j) => (
                      <span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS SECTION ================= */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Security Lifecycle</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>
                Continuous monitoring and hardening of your application ecosystem.
              </p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (
                <div key={i} className='relative group text-center'>
                  {i < process.length - 1 && (
                    <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-indigo-500 to-transparent' />
                  )}
                  <div className='relative inline-block mb-6'>
                    <div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-indigo-500 transition-all'>
                      <step.icon size={48} className='text-indigo-400' />
                    </div>
                    <div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-sm font-black shadow-lg'>
                      {step.num}
                    </div>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>{step.title}</h3>
                  <p className='text-slate-400 text-sm'>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2>
            </div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (
                <details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'>
                  <summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-indigo-600 transition-colors'>
                    <span className='pr-4'>{faq.q}</span>
                    <ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' />
                  </summary>
                  <div className='px-6 pb-6 text-slate-600 leading-relaxed'>
                    {/* Render HTML content for bold tags in answer */}
                    <div dangerouslySetInnerHTML={{ 
                      __html: faq.a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    }} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className='py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>
              Don't Compromise on Security
            </h2>
            <p className='text-indigo-100 text-lg mb-10 max-w-2xl mx-auto'>
              Protect your users and your reputation. Build compliant, secure, and hack-proof applications with Bits and Bytes IT Solution.
            </p>
            <Link to='/contact-us'>
              <button className='group px-10 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>
                Start Your Secure Project 
                <ArrowRight className='group-hover:translate-x-1 transition-transform' />
              </button>
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}