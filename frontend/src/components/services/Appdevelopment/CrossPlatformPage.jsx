import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { 
  Smartphone, 
  Layers, 
  Zap, 
  Code, 
  Repeat, 
  Cpu, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  ChevronDown, 
  Play,
  Monitor,
  Rocket
} from 'lucide-react'

export default function CrossPlatformPage() {
  // --- SEO DATA ---
  const pageTitle = 'Cross-Platform App Development - Flutter & React Native | Bits and Bytes'
  const pageDescription = 'Build high-performance mobile apps for iOS and Android with a single codebase. Expert Flutter and React Native development services with 60fps performance.'
  const pageKeywords = 'Cross-platform app development, Flutter developers India, React Native experts, hybrid app development, single codebase apps'
  const breadcrumbs = [
    { name: 'Home', url: '/' }, 
    { name: 'Services', url: '/services' }, 
    { name: 'App Development', url: '/services/app-development' }, 
    { name: 'Cross-Platform', url: '/app-development/cross-platform' }
  ]

  // --- CONTENT FROM YOUR ORIGINAL PAGE ---
  const faqs = [
    {
      q: "Flutter vs React Native: Which framework is better for my startup?",
      a: "Both are powerful. We recommend **Flutter** for highly customized, brand-first designs due to its independent rendering engine. We suggest **React Native** if you need complex integrations with existing JavaScript infrastructure or rely heavily on third-party native plugins."
    },
    {
      q: "Can Cross-Platform apps achieve 60 FPS Native Performance?",
      a: "Yes. With the new **React Native Architecture (Fabric/TurboModules)** and Flutter's **Impeller Engine**, the bridge bottleneck is removed. We deliver smooth 60fps animations that are indistinguishable from Swift or Kotlin apps."
    },
    {
      q: "What is 'Hot Reload' and how does it reduce development cost?",
      a: "**Hot Reload** allows our developers to inject new code files into the running app without losing state. This speeds up UI iteration by 50%, significantly reducing billable hours and accelerating your **Time-to-Market**."
    },
    {
      q: "How do you handle device features like GPS, Camera, and Bluetooth?",
      a: "We use **Native Modules** and **Platform Channels**. Even though the core logic is shared, we write specific bridges to access native APIs (iOS Camera / Android Location Services) directly, ensuring no functionality is lost."
    },
    {
      q: "Will I need to rewrite the app for future OS updates?",
      a: "No. Since we use a **Single Codebase**, maintenance is streamlined. When iOS or Android releases a new update, we update the framework SDK once, and the changes reflect on both platforms simultaneously."
    }
  ]

  // --- MAPPED FEATURES TO NEW DESIGN CARDS ---
  const services = [
    { 
      icon: Zap, 
      title: 'Hot Reload & Fast Iteration', 
      desc: 'Inject new code instantly without losing state. Speeds up UI iteration by 50%, significantly reducing billable hours and accelerating Time-to-Market.', 
      features: ['Instant Updates', 'Rapid Prototyping', 'Lower Cost', 'Faster Debugging'], 
      color: 'from-cyan-500 to-blue-600' 
    },
    { 
      icon: Layers, 
      title: 'Unified Architecture', 
      desc: 'One codebase for both iOS and Android. We utilize React Native Fabric and Flutter Impeller engines to remove bridge bottlenecks.', 
      features: ['Fabric Engine', 'Impeller', 'Single Codebase', 'Easy Maintenance'], 
      color: 'from-blue-500 to-indigo-600' 
    },
    { 
      icon: Code, 
      title: 'Native Modules Bridge', 
      desc: 'Seamless access to device features. We write specific bridges to access Native APIs like GPS, Camera, and Bluetooth directly.', 
      features: ['Camera Access', 'GPS/Location', 'Bluetooth', 'Biometrics'], 
      color: 'from-teal-500 to-emerald-600' 
    },
    { 
      icon: Smartphone, 
      title: '60 FPS Performance', 
      desc: 'We optimize rendering to deliver smooth 60fps animations that are indistinguishable from native Swift or Kotlin applications.', 
      features: ['Smooth Scroll', 'Native Feel', 'High FPS', 'No Lag'], 
      color: 'from-violet-500 to-purple-600' 
    },
    { 
      icon: Repeat, 
      title: 'Streamlined Updates', 
      desc: 'Future-proof development. When iOS/Android releases updates, we update the framework SDK once for both platforms.', 
      features: ['OS Compatibility', 'Easy Patching', 'Long-term Support', 'Scalable'], 
      color: 'from-cyan-600 to-teal-600' 
    },
    { 
      icon: Monitor, 
      title: 'Custom UI/UX', 
      desc: 'Highly customized, brand-first designs that look identical on both platforms while respecting native navigation patterns.', 
      features: ['Material Design', 'Cupertino', 'Responsive', 'Adaptive'], 
      color: 'from-indigo-500 to-cyan-600' 
    }
  ]

  const stats = [
    { value: '40%', label: 'Cost Savings' }, 
    { value: '2x', label: 'Faster Delivery' }, 
    { value: '60fps', label: 'Performance' }, 
    { value: '100%', label: 'Native Feel' }
  ]

  const approach = [
    { icon: Globe, title: 'Single Codebase', desc: 'Write once, deploy everywhere. Unified logic for iOS, Android, and Web.' },
    { icon: Cpu, title: 'Native Performance', desc: 'Direct compilation to native ARM code for maximum speed.' },
    { icon: Rocket, title: 'Rapid Launch', desc: 'Get your MVP to market in half the time of native development.' },
    { icon: Repeat, title: 'Easy Maintenance', desc: 'Fix bugs in one place and push updates to all users instantly.' }
  ]

  const designPrinciples = [
    'Share up to 90% of code',
    'Platform-specific UI adaptations',
    'Offline-first architecture',
    'Seamless third-party integrations',
    'Automated CI/CD pipelines',
    'Strict type safety (TypeScript/Dart)'
  ]

  const process = [
    { num: '01', title: 'Strategy', desc: 'Selecting the right framework (Flutter vs RN) based on needs', icon: Rocket },
    { num: '02', title: 'Development', desc: 'Building shared logic and UI components', icon: Code },
    { num: '03', title: 'Integration', desc: 'Bridging native modules (Camera, GPS, etc)', icon: Layers },
    { num: '04', title: 'Deploy', desc: 'Publishing to App Store & Play Store simultaneously', icon: Globe }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/app-development/cross-platform" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      
      <main className='bg-white text-slate-900 overflow-hidden font-sans'>
        
        {/* ================= HERO SECTION ================= */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          {/* Background Blob - Adjusted to Cyan/Blue */}
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-100 via-blue-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'>
              <ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>
                {breadcrumbs.map((item, i) => (
                  <li key={i} className='flex items-center gap-2'>
                    {i > 0 && <span>/</span>}
                    {i === breadcrumbs.length - 1 ? (
                      <span className='text-cyan-600 font-medium'>{item.name}</span>
                    ) : (
                      <Link to={item.url} className='hover:text-cyan-600 transition-colors'>{item.name}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 text-cyan-700 text-sm font-bold'>
                  <Smartphone size={16} className='text-cyan-600' />
                  React Native & Flutter Experts
                </div>
                
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>
                  One Codebase.<br />
                  <span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
                    Total Dominance.
                  </span>
                </h1>
                
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>
                  Leverage the power of <strong>Unified Architecture</strong>. We build apps that feel native, run at 60fps, and deploy to iOS & Android simultaneously using <strong>Single Codebase</strong> technology.
                </p>
                
                <p className='text-slate-600 mb-8 leading-relaxed'>
                  Stop splitting your budget between two teams. With our Cross-Platform expertise, you get identical performance to native apps while saving 40% on development costs.
                </p>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
                  {stats.map((stat, i) => (
                    <div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-cyan-200 transition-all'>
                      <div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
                        {stat.value}
                      </div>
                      <div className='text-xs text-slate-500'>{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link to='/contact-us'>
                  <button className='group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>
                    Start Your App 
                    <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
                  </button>
                </Link>
              </div>

              {/* Visual Mockup - Adapted for Code/Tech feel */}
              <div className='relative flex justify-center'>
                <div className='absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative w-64 bg-slate-900 rounded-[3rem] p-2 shadow-2xl'>
                  <div className='bg-[#0f172a] rounded-[2.5rem] p-4 h-[450px] overflow-hidden relative'>
                    {/* Phone Notch */}
                    <div className='h-4 flex justify-center mb-4'>
                      <div className='w-20 h-3 bg-slate-800 rounded-full' />
                    </div>
                    
                    {/* Code Visuals inside phone */}
                    <div className='space-y-4'>
                      <div className='flex items-center gap-2 mb-6'>
                        <div className='w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400'>
                          <Code size={18} />
                        </div>
                        <div className='text-xs text-slate-400'>Unified Codebase</div>
                      </div>

                      {/* Animated Blocks */}
                      <div className='p-3 rounded-xl bg-slate-800/50 border border-slate-700/50'>
                         <div className='flex justify-between items-center mb-2'>
                           <div className='h-2 w-12 bg-cyan-500 rounded-full'></div>
                           <div className='h-2 w-4 bg-slate-600 rounded-full'></div>
                         </div>
                         <div className='h-2 w-full bg-slate-700 rounded-full mb-1 opacity-50'></div>
                         <div className='h-2 w-2/3 bg-slate-700 rounded-full opacity-50'></div>
                      </div>

                      <div className='p-3 rounded-xl bg-slate-800/50 border border-slate-700/50'>
                         <div className='flex justify-between items-center mb-2'>
                           <div className='h-2 w-16 bg-blue-500 rounded-full'></div>
                           <div className='h-2 w-4 bg-slate-600 rounded-full'></div>
                         </div>
                         <div className='h-2 w-full bg-slate-700 rounded-full mb-1 opacity-50'></div>
                         <div className='h-2 w-3/4 bg-slate-700 rounded-full opacity-50'></div>
                      </div>

                      {/* Bottom Action */}
                      <div className='absolute bottom-4 left-4 right-4'>
                        <div className='h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-900/20'>
                          Deploy Everywhere
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className='absolute top-20 -right-8 bg-white p-3 rounded-xl shadow-xl animate-bounce delay-700'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className='w-8 h-8' alt="Flutter" />
                </div>
                <div className='absolute bottom-20 -left-8 bg-white p-3 rounded-xl shadow-xl animate-bounce'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='w-8 h-8' alt="React Native" />
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
                Why Go <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>Cross-Platform?</span>
              </h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>
                Reduce development time and cost without compromising on quality.
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {approach.map((item, i) => (
                <div key={i} className='bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-cyan-200 transition-all text-center'>
                  <item.icon size={36} className='mx-auto mb-4 text-cyan-500' />
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
                  Technical <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>Excellence</span>
                </h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>
                  We don't just wrap webviews. We build robust applications using strictly typed languages like TypeScript and Dart to ensure enterprise-grade stability.
                </p>
                <p className='text-slate-600 mb-6 leading-relaxed'>
                  Our apps are designed to be offline-first, ensuring your users have a seamless experience even with spotty internet connections.
                </p>
                <div className='grid grid-cols-2 gap-3'>
                  {designPrinciples.map((item, i) => (
                    <div key={i} className='flex items-center gap-2'>
                      <CheckCircle size={18} className='text-cyan-500 flex-shrink-0' />
                      <span className='text-sm text-slate-700'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Performance Guarantee</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>
                  <strong>60 FPS or nothing.</strong> With the new React Native Architecture (Fabric) and Flutter's Impeller Engine, we remove the "bridge" bottleneck.
                </p>
                <p className='text-slate-600 leading-relaxed'>
                  This results in smooth animations, rapid startup times, and a touch responsiveness that is indistinguishable from native apps.
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
                Our Tech Capabilities
              </h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>
                Advanced features that power our cross-platform solutions.
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
        <section className='py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Development Lifecycle</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>
                A systematic approach that ensures rapid delivery and stability.
              </p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (
                <div key={i} className='relative group text-center'>
                  {i < process.length - 1 && (
                    <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent' />
                  )}
                  <div className='relative inline-block mb-6'>
                    <div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-cyan-500 transition-all'>
                      <step.icon size={48} className='text-cyan-400' />
                    </div>
                    <div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-black shadow-lg'>
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
                  <summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-cyan-600 transition-colors'>
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
        <section className='py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>
              Ready to Dominate Mobile?
            </h2>
            <p className='text-cyan-100 text-lg mb-10 max-w-2xl mx-auto'>
              Choose Bits and Bytes IT Solution for efficient, high-performance cross-platform development. Let's build your app faster, cheaper, and better.
            </p>
            <Link to='/contact-us'>
              <button className='group px-10 py-4 bg-white text-cyan-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>
                Start Your Project 
                <ArrowRight className='group-hover:translate-x-1 transition-transform' />
              </button>
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}