import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from './SEOHead'
import {
  Target,
  Globe,
  ArrowRight,
  CheckCircle2,
  History,
  ShieldCheck,
  Rocket,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react'

const About = () => {
  // SEO Data
  const pageTitle = 'About Us - Digital Marketing Agency in Noida'
  const pageDescription = 'Bits and Bytes IT Solution is a full-service online marketing company in Noida dedicated to helping companies develop a robust internet presence, generate qualified leads, and grow sustainably. Our team of digital marketers, strategists, analysts, creatives and technology experts deliver high-performance solutions.'
  const pageKeywords = 'about bits and bytes IT solution, digital marketing agency Noida, digital marketing company Delhi NCR, SEO company India, web development agency, performance marketing, online marketing services, digital transformation partner'

  // Breadcrumbs for SEO
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' }
  ]

  // Structured Data for About Page
  const aboutStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Bits and Bytes IT Solution',
      'description': 'Bits and Bytes IT Solution is a full-service online marketing company dedicated to helping companies develop a robust internet presence, generate qualified leads, and grow sustainably in an ever-competitive online environment.',
      'foundingDate': '2020',
      'slogan': 'Powering Digital Growth with Strategy, Innovation & Performance',
      'knowsAbout': [
        'Digital Marketing',
        'SEO',
        'Google Ads',
        'Meta Ads',
        'Web Development',
        'App Development',
        'UI/UX Design'
      ],
      'numberOfEmployees': {
        '@type': 'QuantitativeValue',
        'minValue': 10,
        'maxValue': 50
      }
    }
  }

  // Core values from PDF
  const coreValues = [
    { 
      title: 'Tailored Strategies', 
      desc: 'We don\'t adhere to generic marketing formulae. We create tailored digital marketing roadmaps based on your specific business interests.',
      icon: Target
    },
    { 
      title: 'Data-Driven Decisions', 
      desc: 'Every move is backed by real insights. We use performance statistics, research, and tested practices to guarantee sustainability and scalability.',
      icon: TrendingUp
    },
    { 
      title: 'Transparent Processes', 
      desc: 'We deliver actionable reports on performance, ensuring our clients are always aware of how their investments are performing.',
      icon: ShieldCheck
    },
    { 
      title: '24/7 Dedicated Support', 
      desc: 'We stay with you at every step. Your growth is our success, and we\'re committed to building long-term partnerships.',
      icon: Users
    }
  ]

  // Services we offer (from PDF)
  const services = [
    'Search Engine Optimization (SEO) to enhance organic visibility and rankings',
    'Instant traffic and lead campaigns using Google Ads and PPCs',
    'Meta Ads (Facebook and Instagram Ads) to target the audience and develop the brand',
    'Social Media Marketing and engagement/trust-building content strategy',
    'Competitor analysis and strategic planning research of keywords',
    'Conversion Rate Optimization (CRO) to boost sales and performance',
    'Data-based decisions based on website performance and analytics',
    'SEO audit and technical optimization to grow in the long run',
    'Digital marketing to reach out to political campaigners'
  ]

  return (
    <>
      {/* SEO Head Component */}
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical="/about-us"
        breadcrumbs={breadcrumbs}
        structuredData={aboutStructuredData}
        ogImage="https://www.bitsandbytesitsolution.com/img/about-og.jpg"
      />

      <div className="bg-white text-slate-900 font-sans overflow-x-hidden">

        {/* ---------------- HERO SECTION ---------------- */}
        <section className="relative pt-32 pb-24">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-cyan-50 to-purple-50 rounded-bl-[200px] -z-10 opacity-70"></div>

          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-slate-700 text-xs font-bold">
                <Sparkles size={14} className="text-amber-500" />
                Since 2020
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 leading-[1.1]">
                Powering Digital Growth
              </h1>

              <h2 className="text-xl md:text-2xl text-slate-700 font-semibold">
                Strategy, Innovation & Performance
              </h2>

              <p className="text-lg md:text-xl text-slate-600 max-w-lg">
                Bits and Bytes IT Solution is a full-service online marketing company dedicated to helping companies develop a robust internet presence, generate qualified leads, and grow sustainably in an ever-competitive online environment.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link to="/contact-us" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 flex items-center gap-2 transition-all">
                  Start Your Journey <ArrowRight size={18} />
                </Link>

                <Link to="/projects" className="px-8 py-4 bg-white border rounded-full font-bold hover:bg-slate-50 transition-all">
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                
                <div className="col-span-7">
                  <div className="rounded-3xl overflow-hidden bg-white p-2 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                      className="w-full h-full object-contain rounded-2xl"
                      alt="Bits and Bytes IT Solution Team - Digital Marketing Experts"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="col-span-5 pt-12">
                  <div className="rounded-3xl overflow-hidden bg-white p-2 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                      className="w-full h-full object-contain rounded-2xl"
                      alt="Digital Marketing Strategy Session"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border max-w-[200px]">
                <div className="text-4xl font-black text-cyan-600">500+</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Projects Delivered</div>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- WHO WE ARE SECTION (From PDF) ---------------- */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Who We Are</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A Team Driven by Digital Excellence
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team comprises enthusiastic <strong>digital marketers, strategists, analysts, creatives and technology experts</strong> who believe in the power of digital transformation. We possess skills in SEO, paid advertising, social media, analytics, and conversion optimization to develop comprehensive digital marketing strategies based on the business interests of a specific client.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  We know that each business is different at Bits and Bytes IT Solution. This is the reason why we do not adhere to generic marketing formulae. Rather, we go the extra mile to learn your brand, industry, audience and competitors and create a tailored digital marketing roadmap that ensures success within your own aims.
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-2 border-white"></div>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold">Expert Team</div>
                    <div className="text-sm text-slate-500">Developers, Designers & Marketers</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-white p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                    className="w-full h-full object-cover rounded-2xl"
                    alt="Digital Marketing Strategy Planning"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- WHAT WE DO SECTION (From PDF) ---------------- */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">What We Do</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Performance-Driven Digital Marketing Solutions
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
              <p className="text-lg text-slate-300 mb-8 max-w-3xl">
                Our digital marketing services deliver end-to-end solutions to businesses and assist them in attracting, engaging, and converting their target market. The services are tailored to help a business at any point of its digital presence - from brand recognition to lead generation and sales.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                    <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- WHY CHOOSE US (From PDF) ---------------- */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Your Trusted Digital Partner"
                  loading="lazy"
                />
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="font-bold">100% Secure</div>
                  <p className="text-xs text-slate-500">Certified Agency</p>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-black mb-6">Our Approach: Transparent, Targeted & Result-Focused</h2>

              <p className="text-lg text-slate-600 mb-8">
                We operate on a strategy-based approach with transparency and results. Effective digital marketing does not require guesswork; rather, it is an informed decision based on data and insights.
              </p>

              <div className="space-y-6">
                {coreValues.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600 h-fit">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- MISSION + VISION (From PDF) ---------------- */}
        <section className="py-28 container mx-auto px-6 grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div className="lg:sticky lg:top-32 self-start">
            <h2 className="text-5xl font-black mb-6">
              From Startup to <span className="text-cyan-600">Global</span> Scale.
            </h2>

            <p className="text-lg text-slate-600 mb-8">
              We started small and now empower businesses across Noida, Delhi NCR, and all of India.
            </p>

            <div className="rounded-2xl overflow-hidden bg-white p-2 shadow-lg mb-8">
              <img
                src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover rounded-xl"
                alt="Our Digital Marketing Journey"
                loading="lazy"
              />
            </div>

            <div className="p-8 bg-blue-50 rounded-3xl mb-6">
              <h3 className="text-xl font-bold flex gap-2 mb-3">
                <Target className="text-blue-600" /> Our Mission
              </h3>
              <p className="text-slate-600">
                To empower businesses with innovative, ethical, and performance-oriented digital marketing solutions that enhance brand visibility, drive meaningful engagement, and deliver measurable ROI in a rapidly evolving digital ecosystem.
              </p>
            </div>

            <div className="p-8 bg-purple-50 rounded-3xl">
              <h3 className="text-xl font-bold flex gap-2 mb-3">
                <Globe className="text-purple-600" /> Our Vision
              </h3>
              <p className="text-slate-600">
                To become a globally trusted digital marketing agency known for delivering impactful strategies, transparent processes, and sustainable growth for businesses across industries.
              </p>
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative border-l-4 border-slate-100 pl-12 space-y-16">
            {[
              { year: '2018', title: 'Startup Phase', desc: 'Small team with a big vision for digital transformation.' },
              { year: '2020', title: 'Early Growth', desc: 'Clients started trusting our work. Officially founded Bits and Bytes IT Solution.' },
              { year: '2022', title: 'Service Expansion', desc: 'Added comprehensive SEO, Google Ads, Meta Ads, and social media marketing services.' },
              { year: '2024', title: 'Scaling Up', desc: 'Expanded team with developers, designers, and digital marketers. Serving businesses across India.' },
              { year: '2025', title: 'Industry Leader', desc: 'Delivering unmatched results with 300%+ ROI for clients in Noida, Delhi NCR, and All India.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[61px] top-1 w-8 h-8 rounded-full bg-white border-4 border-cyan-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <span className="px-4 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-full border inline-block font-bold">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold mt-3">{item.title}</h3>
                <p className="text-slate-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

        </section>

{/* ---------------- TEAM SECTION ---------------- */}
<section className="py-24 bg-slate-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4">Meet The Experts</h2>
      <p className="text-slate-500">The innovators behind our success.</p>
    </div>

    <div className="grid md:grid-cols-4 gap-10">
      {[
        { name: 'Ranjan Kumar', role: 'Sr. SEO Executive', img: 'img/Ranjan.jpeg' },
        { name: 'Vishal Kumar', role: 'Full Stack Developer', img: 'img/vishal.jpeg' },
        { name: 'Anjali Chaudhary', role: 'App Developer', img: 'img/anjali.jpeg' },
        { name: 'Nisha Yadav', role: 'Backend Developer', img: 'img/nisha.jpeg' },
      ].map((member, i) => (
        <div key={i} className="text-center group flex flex-col items-center">
          {/* Image container with proper aspect ratio */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={member.img}
                alt={`${member.name} - ${member.role} at Bits and Bytes IT Solution`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full">
                      <span class="text-white text-4xl font-bold">${member.name.charAt(0)}</span>
                    </div>
                  `;
                }}
              />
            </div>
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
          
          <div className="mt-6 px-2">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-cyan-600 text-sm font-bold uppercase tracking-wider mt-1">
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* ---------------- CTA SECTION ---------------- */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-white mb-4">Let's Grow Together</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              At Bits and Bytes IT Solution, we believe that digital success comes from collaboration, consistency, and continuous improvement. Whether you are a startup looking to establish your brand or an established business aiming to scale, we are here to help you grow smarter, faster, and stronger in the digital world.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact-us" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 flex items-center gap-2 transition-all">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all">
                View Services
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default About
