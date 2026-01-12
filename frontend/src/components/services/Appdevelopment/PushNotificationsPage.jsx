import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { Bell, Users, Zap, Target, BarChart3, MessageSquare, ArrowRight, CheckCircle, ChevronDown, Play, Send, Smartphone, Globe, Clock } from 'lucide-react'

export default function PushNotificationsPage() {
  const pageTitle = 'Push Notification Services - Mobile App Engagement'
  const pageDescription = 'Professional push notification services in Noida, Delhi NCR. Re-engage users, drive retention. Personalized, segmented notifications. Get free consultation!'
  const pageKeywords = 'push notifications India, mobile app notifications, user engagement, app retention Noida, push notification services Delhi NCR'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'App Development', url: '/services/app-development' }, { name: 'Push Notifications', url: '/app-development/push-notifications' }]

  const faqs = [
    { q: 'What are Push Notifications and how do they work?', a: 'Push notifications are brief, interactive messages transmitted from an application or web platform to a user\'s mobile device or browser. They can be updates, reminders, announcements, offers, or vital information. They reach users even when offline or not using the app.' },
    { q: 'Why are push notifications important for businesses?', a: 'Push notifications help businesses cut through the noise and reach users instantly. They play a crucial role in increasing daily active users, improving retention rates, and driving repeat engagement, especially in competitive markets like Noida.' },
    { q: 'How do you ensure notifications are not intrusive?', a: 'We use segmentation, timing, and message clarity. Users are informed based on their behavior, preferences, and engagement history. This raises open rates, decreases uninstalls, and ensures campaigns perform better.' },
    { q: 'What types of notifications can you implement?', a: 'We implement promotional notifications for offers, transactional alerts like confirmations, reminder notifications for retention, engagement messages to re-activate users, and informational updates for announcements.' },
    { q: 'Do push notifications work on both mobile and web?', a: 'Yes, we implement push notifications for both mobile applications and web platforms. Mobile push promotes app engagement, while web push enables website users to stay connected even when not on the site.' }
  ]

  const notificationTypes = [
    { icon: Target, title: 'Promotional', desc: 'Offers and campaign notifications', color: 'from-orange-500 to-amber-600' },
    { icon: CheckCircle, title: 'Transactional', desc: 'Confirmations and updates', color: 'from-blue-500 to-cyan-600' },
    { icon: Clock, title: 'Reminders', desc: 'Improve retention rates', color: 'from-purple-500 to-violet-600' },
    { icon: Users, title: 'Engagement', desc: 'Re-activate inactive users', color: 'from-green-500 to-emerald-600' },
    { icon: MessageSquare, title: 'Informational', desc: 'Announcements and news', color: 'from-pink-500 to-rose-600' },
    { icon: Zap, title: 'Real-time', desc: 'Instant alerts and updates', color: 'from-indigo-500 to-blue-600' }
  ]

  const services = [
    { icon: Bell, title: 'Push Notification Strategy', desc: 'We develop push notification strategies that are part of your whole digital marketing approach. Notifications have a specific role in campaigns, promotions, and user journeys.', features: ['Campaign Planning', 'User Journeys', 'Timing Strategy', 'Goals Aligned'], color: 'from-orange-500 to-amber-600' },
    { icon: Users, title: 'User Segmentation', desc: 'Users are informed based on their behavior, preferences, and engagement history. This raises open rates and ensures notifications are relevant and valuable.', features: ['Behavior-Based', 'Preferences', 'History', 'Personalized'], color: 'from-blue-500 to-cyan-600' },
    { icon: Send, title: 'Rich Notifications', desc: 'We implement rich push notifications with images, action buttons, and deep links for higher engagement and better user experience.', features: ['Images', 'Action Buttons', 'Deep Links', 'Interactive'], color: 'from-purple-500 to-violet-600' },
    { icon: Smartphone, title: 'Mobile Push', desc: 'Push notifications for iOS and Android apps that promote engagement, share updates, and drive repeat visits to your mobile application.', features: ['iOS', 'Android', 'Native', 'FCM/APNs'], color: 'from-green-500 to-emerald-600' },
    { icon: Globe, title: 'Web Push', desc: 'Web push notifications enable website users to stay connected even when not on the site. Great for e-commerce, news, and content platforms.', features: ['Browser Support', 'Opt-in', 'No App Needed', 'Wide Reach'], color: 'from-pink-500 to-rose-600' },
    { icon: BarChart3, title: 'Analytics & Optimization', desc: 'Track notification performance, open rates, and conversions. Continuously optimize timing, content, and targeting for better results.', features: ['Open Rates', 'CTR', 'Conversions', 'A/B Testing'], color: 'from-indigo-500 to-blue-600' }
  ]

  const stats = [{ value: '10x', label: 'Re-engagement' }, { value: '50%', label: 'Higher Retention' }, { value: '4x', label: 'More Visits' }, { value: '90%', label: 'Delivery Rate' }]

  const benefits = [
    'Keep communication lines open with users',
    'Reach even inactive users on their device',
    'Positively influence customer retention',
    'Increase app usage and repeat visits',
    'Help marketing campaigns effectively',
    'Real-time communication channel'
  ]

  const process = [
    { num: '01', title: 'Strategy', desc: 'Define notification strategy aligned with business goals', icon: Target },
    { num: '02', title: 'Setup', desc: 'Implement notification infrastructure and integration', icon: Bell },
    { num: '03', title: 'Segment', desc: 'Create user segments based on behavior and preferences', icon: Users },
    { num: '04', title: 'Optimize', desc: 'Analyze performance and continuously improve', icon: BarChart3 }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/app-development/push-notifications" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-100 via-amber-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-orange-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-orange-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700 text-sm font-bold'><Bell size={16} className='text-orange-500' />Re-engage Your Users</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>Push<span className='block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600'>Notifications</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>In today's highly dynamic digital world, keeping communication open with users is vital. <strong>Push Notifications</strong> are among the most effective ways to send instant communications that reach users in real-time.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>Our push notification services are based on a digital marketing approach, facilitating customer engagement and providing measurable growth in Noida, Delhi NCR, and all over India.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-orange-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Get Started <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-orange-200 to-amber-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100'>
                  <div className='text-center mb-4'><Bell size={40} className='mx-auto text-orange-500 mb-2' /><h3 className='font-bold'>Notification Center</h3></div>
                  <div className='space-y-3'>
                    <div className='p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500'><div className='text-xs text-orange-600 mb-1'>🔔 Promotional</div><p className='text-sm font-medium'>Flash Sale! 50% off on all items</p><span className='text-xs text-slate-400'>Just now</span></div>
                    <div className='p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500'><div className='text-xs text-blue-600 mb-1'>✓ Transactional</div><p className='text-sm font-medium'>Your order has been shipped</p><span className='text-xs text-slate-400'>2 min ago</span></div>
                    <div className='p-4 bg-green-50 rounded-xl border-l-4 border-green-500'><div className='text-xs text-green-600 mb-1'>👋 Engagement</div><p className='text-sm font-medium'>We miss you! Come back for rewards</p><span className='text-xs text-slate-400'>1 hour ago</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notification Types */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Types of Push <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600'>Notifications</span></h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>Push notifications can be customized based on business needs. Each type is carefully designed to match user intent and business goals.</p>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-4'>
              {notificationTypes.map((type, i) => (<div key={i} className='bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-lg hover:border-orange-200 transition-all text-center'><div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center text-white mx-auto mb-3`}><type.icon size={22} /></div><h4 className='font-bold text-slate-900 text-sm mb-1'>{type.title}</h4><p className='text-xs text-slate-500'>{type.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* Why Notifications */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Why Push Notifications Are <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600'>Important</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>User attention is limited, and competition is high—especially in markets like Noida. Push notifications help businesses cut through the noise and reach users instantly.</p>
                <div className='space-y-3'>
                  {benefits.map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-orange-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8'>
                <h3 className='text-2xl font-black text-slate-900 mb-6'>Digital Marketing Integration</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>At Bits and Bytes IT Solution, push notifications are not just a part but the whole of a digital marketing strategy. They have a specific role in campaigns, promotions, and user journeys.</p>
                <p className='text-slate-600 leading-relaxed'>Key elements are segmentation, timing, and message clarity. This targeted approach makes it possible to amplify the effect of each notification.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our Push Notification Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>Comprehensive push notification services for mobile apps and web platforms.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Approach</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>A strategic approach to push notifications that drives engagement and conversions.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-orange-500 transition-all'><step.icon size={48} className='text-orange-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-orange-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Engage Your Users Effectively</h2>
            <p className='text-orange-100 text-lg mb-10 max-w-2xl mx-auto'>Push notifications serve as the primary communication channel that keeps your brand visible and relevant. Let's implement a strategy that drives real engagement.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-orange-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Get Started <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
