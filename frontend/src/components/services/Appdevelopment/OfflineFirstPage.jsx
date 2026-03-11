import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { 
  Database, 
  WifiOff, 
  RefreshCw, 
  Zap, 
  Shield, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  ChevronDown, 
  Server, 
  Smartphone, 
  Lock,
  HardDrive
} from 'lucide-react'

export default function OfflineFirstPage() {
  // --- SEO DATA ---
  const pageTitle = 'Offline-First App Development - Local Database & Sync | Bits and Bytes'
  const pageDescription = 'Build resilient mobile apps that work without internet. Expert Offline-First development using SQLite, Realm, and WatermelonDB with intelligent sync.'
  const pageKeywords = 'Offline first apps, local database android ios, SQLite React Native, WatermelonDB, Realm database, background sync app development'
  const breadcrumbs = [
    { name: 'Home', url: '/' }, 
    { name: 'Services', url: '/services' }, 
    { name: 'App Development', url: '/services/app-development' }, 
    { name: 'Offline-First', url: '/app-development/offline-first' }
  ]

  // --- CONTENT FROM YOUR ORIGINAL PAGE (Plus enhancements) ---
  const faqs = [
    {
      q: "What happens to data when the user is offline?",
      a: "We implement a **Local Database** (like SQLite, Realm, or WatermelonDB) directly on the device. All user actions are saved locally first, ensuring instant performance with zero latency, regardless of internet speed."
    },
    {
      q: "How do you handle 'Data Conflicts' when syncing back?",
      a: "We design intelligent **Conflict Resolution Strategies** (e.g., 'Last-Write-Wins' or 'Merge Logic'). When the device reconnects, the app compares local data with the server and merges changes without overwriting critical updates."
    },
    {
      q: "What is 'Optimistic UI' and why is it important?",
      a: "**Optimistic UI** updates the screen immediately when a user performs an action (like 'Liking' a post), assuming the server request will succeed. This makes the app feel **Lightning Fast** because the user doesn't wait for a loading spinner."
    },
    {
      q: "Does this drain the phone battery?",
      a: "No. We use efficient **Background Fetch APIs** and batch synchronization. Instead of constantly pinging the server, the app queues data and syncs it in a single efficient burst when connectivity is stable."
    },
    {
      q: "Is offline data secure?",
      a: "Absolutely. We encrypt the local database (using SQLCipher or Realm Encryption) so that sensitive user data remains protected even if the device is lost or compromised."
    }
  ]

  // --- MAPPED FEATURES TO NEW DESIGN CARDS ---
  const services = [
    { 
      icon: Database, 
      title: 'Local Database Integration', 
      desc: 'We embed powerful engines like SQLite, Realm, or WatermelonDB directly into the app, allowing users to access gigabytes of data with zero latency.', 
      features: ['SQLite', 'Realm', 'WatermelonDB', 'Zero Latency'], 
      color: 'from-violet-500 to-purple-600' 
    },
    { 
      icon: RefreshCw, 
      title: 'Intelligent Sync', 
      desc: 'Our sync engines automatically detect network status. Data is queued when offline and quietly uploaded in the background when connection returns.', 
      features: ['Auto-Retry', 'Queue Management', 'Background Fetch', 'Bandwidth Saver'], 
      color: 'from-purple-500 to-fuchsia-600' 
    },
    { 
      icon: Zap, 
      title: 'Optimistic UI Updates', 
      desc: 'Eliminate loading spinners. The UI updates instantly upon user interaction, while the server request handles itself in the background.', 
      features: ['Instant Feedback', 'No Spinners', 'Better UX', 'Perceived Speed'], 
      color: 'from-fuchsia-500 to-pink-600' 
    },
    { 
      icon: Layers, 
      title: 'Conflict Resolution', 
      desc: 'We implement advanced logic (Last-Write-Wins, differential merging) to handle scenarios where data is modified on both server and device simultaneously.', 
      features: ['Data Integrity', 'Merge Logic', 'Version Control', 'Error Handling'], 
      color: 'from-indigo-500 to-violet-600' 
    },
    { 
      icon: Lock, 
      title: 'Encrypted Local Storage', 
      desc: 'Security is paramount. We encrypt local databases to ensure that offline data meets enterprise security standards (GDPR/HIPAA).', 
      features: ['SQLCipher', 'AES-256', 'Secure Key', 'Compliance'], 
      color: 'from-slate-600 to-slate-800' 
    },
    { 
      icon: WifiOff, 
      title: 'Network Agnostic', 
      desc: 'Your app functions perfectly on 2G, on airplanes, or in basements. The user experience remains consistent regardless of signal strength.', 
      features: ['Offline Mode', 'Poor Network', 'Airplane Mode', 'Stability'], 
      color: 'from-blue-500 to-indigo-600' 
    }
  ]

  const stats = [
    { value: '0ms', label: 'Read Latency' }, 
    { value: '100%', label: 'Uptime' }, 
    { value: '50%', label: 'Less Data Use' }, 
    { value: '4.8★', label: 'User Rating' }
  ]

  const approach = [
    { icon: Smartphone, title: 'Local First', desc: 'The device is the primary source of truth for the UI.' },
    { icon: Server, title: 'Server Second', desc: ' The cloud acts as a backup and synchronization point.' },
    { icon: RefreshCw, title: 'Silent Sync', desc: 'Data moves in the background without interrupting the user.' },
    { icon: Shield, title: 'Data Safety', desc: 'Updates are never lost, even if the app crashes or battery dies.' }
  ]

  const designPrinciples = [
    'Offline-first architecture',
    'Background synchronization',
    'Conflict resolution strategies',
    'Database encryption',
    'Delta updates (Sync changes only)',
    'Battery efficient protocols'
  ]

  const process = [
    { num: '01', title: 'Schema', desc: 'Designing efficient local data models', icon: Database },
    { num: '02', title: 'Logic', desc: 'Implementing CRUD operations on device', icon: Smartphone },
    { num: '03', title: 'Bridge', desc: 'Building the sync engine & API connectors', icon: RefreshCw },
    { num: '04', title: 'Secure', desc: 'Encrypting data & testing edge cases', icon: Shield }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/app-development/offline-first" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      
      <main className='bg-white text-slate-900 overflow-hidden font-sans'>
        
        {/* ================= HERO SECTION ================= */}
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          {/* Background Blob - Violet/Purple */}
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-violet-100 via-purple-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'>
              <ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>
                {breadcrumbs.map((item, i) => (
                  <li key={i} className='flex items-center gap-2'>
                    {i > 0 && <span>/</span>}
                    {i === breadcrumbs.length - 1 ? (
                      <span className='text-violet-600 font-medium'>{item.name}</span>
                    ) : (
                      <Link to={item.url} className='hover:text-violet-600 transition-colors'>{item.name}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 text-violet-700 text-sm font-bold'>
                  <WifiOff size={16} className='text-violet-600' />
                  No Internet? No Problem.
                </div>
                
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>
                  Unstoppable<br />
                  <span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600'>
                    Offline-First Apps
                  </span>
                </h1>
                
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>
                  Network instability shouldn't break your user experience. We engineer robust <strong>Local-First Architectures</strong> that allow your app to function perfectly offline and sync intelligently when connection returns.
                </p>
                
                <p className='text-slate-600 mb-8 leading-relaxed'>
                  Users expect apps to work instantly. By storing data locally, we eliminate loading times and server dependencies for critical interactions.
                </p>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
                  {stats.map((stat, i) => (
                    <div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-violet-200 transition-all'>
                      <div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600'>
                        {stat.value}
                      </div>
                      <div className='text-xs text-slate-500'>{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link to='/contact-us'>
                  <button className='group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>
                    Build Reliable Apps
                    <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
                  </button>
                </Link>
              </div>

              {/* Visual Mockup - Database/Sync Theme */}
              <div className='relative flex justify-center'>
                <div className='absolute -inset-4 bg-gradient-to-r from-violet-200 to-purple-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative w-64 bg-slate-900 rounded-[3rem] p-2 shadow-2xl'>
                  <div className='bg-[#0f172a] rounded-[2.5rem] p-4 h-[450px] overflow-hidden relative flex flex-col'>
                    {/* Phone Notch */}
                    <div className='h-4 flex justify-center mb-6'>
                      <div className='w-20 h-3 bg-slate-800 rounded-full' />
                    </div>
                    
                    {/* Connection Status Indicator */}
                    <div className='mx-auto bg-red-500/20 border border-red-500/50 px-3 py-1 rounded-full flex items-center gap-2 mb-6'>
                      <WifiOff size={12} className='text-red-400' />
                      <span className='text-[10px] text-red-300 font-bold tracking-wider'>OFFLINE MODE</span>
                    </div>

                    {/* Database Visual */}
                    <div className='flex-1 flex flex-col items-center justify-center relative'>
                       {/* Floating Cards */}
                       <div className='absolute w-full space-y-3 px-2'>
                          <div className='bg-slate-800 p-3 rounded-xl border border-slate-700 flex items-center gap-3 opacity-100 transform transition-all hover:scale-105'>
                             <div className='w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400'>
                                <CheckCircle size={16} />
                             </div>
                             <div>
                                <div className='text-xs text-slate-400'>Order #2049</div>
                                <div className='text-sm font-bold text-white'>Saved Locally</div>
                             </div>
                          </div>

                          <div className='bg-slate-800 p-3 rounded-xl border border-slate-700 flex items-center gap-3 opacity-100 transform transition-all hover:scale-105'>
                             <div className='w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400'>
                                <CheckCircle size={16} />
                             </div>
                             <div>
                                <div className='text-xs text-slate-400'>User Profile</div>
                                <div className='text-sm font-bold text-white'>Updated</div>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Bottom Database Icon */}
                    <div className='mt-auto pt-6 flex justify-center'>
                       <div className='w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-900/50 relative z-10'>
                          <Database size={32} className='text-white' />
                       </div>
                       {/* Sync Lines */}
                       <div className='absolute bottom-10 w-40 h-40 border-t border-dashed border-slate-700 rounded-full animate-pulse'></div>
                    </div>

                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className='absolute top-20 -right-8 bg-white p-3 rounded-xl shadow-xl animate-bounce delay-1000'>
                  <Database className='w-8 h-8 text-violet-500' />
                </div>
                <div className='absolute bottom-20 -left-8 bg-white p-3 rounded-xl shadow-xl animate-bounce'>
                  <RefreshCw className='w-8 h-8 text-purple-500' />
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
                Why <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600'>Offline First?</span>
              </h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>
                Reliability is the #1 feature users expect. We ensure your app never fails.
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {approach.map((item, i) => (
                <div key={i} className='bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-violet-200 transition-all text-center'>
                  <item.icon size={36} className='mx-auto mb-4 text-violet-500' />
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
                  Architecture <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600'>Insights</span>
                </h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>
                  We move the database from the server to the user's pocket. By integrating <strong>SQLite, Realm, or WatermelonDB</strong>, we enable sub-millisecond data access.
                </p>
                <p className='text-slate-600 mb-6 leading-relaxed'>
                  This architecture not only improves speed but drastically reduces server costs by offloading read operations to the device itself.
                </p>
                <div className='grid grid-cols-2 gap-3'>
                  {designPrinciples.map((item, i) => (
                    <div key={i} className='flex items-center gap-2'>
                      <CheckCircle size={18} className='text-violet-500 flex-shrink-0' />
                      <span className='text-sm text-slate-700'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Optimistic UI</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>
                  <strong>Perceived Speed Actual Speed.</strong>
                </p>
                <p className='text-slate-600 leading-relaxed'>
                  When a user taps "Like", the heart turns red instantly. We don't wait for the server to say "Okay". We assume success and update the UI immediately. If the network fails, we retry in the background. This makes your app feel magically fast.
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
                Core Technologies
              </h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>
                The stack that powers resilient, always-on applications.
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
        <section className='py-20 bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Sync Lifecycle</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>
                How we ensure data consistency across devices and servers.
              </p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (
                <div key={i} className='relative group text-center'>
                  {i < process.length - 1 && (
                    <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-violet-500 to-transparent' />
                  )}
                  <div className='relative inline-block mb-6'>
                    <div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-violet-500 transition-all'>
                      <step.icon size={48} className='text-violet-400' />
                    </div>
                    <div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-sm font-black shadow-lg'>
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
                  <summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-violet-600 transition-colors'>
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
        <section className='py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>
              Ready to Go Offline?
            </h2>
            <p className='text-violet-100 text-lg mb-10 max-w-2xl mx-auto'>
              Don't let bad internet ruin your user experience. Build apps that work everywhere with Bits and Bytes IT Solution.
            </p>
            <Link to='/contact-us'>
              <button className='group px-10 py-4 bg-white text-violet-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>
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