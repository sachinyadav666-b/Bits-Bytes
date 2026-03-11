import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead, { generateFAQSchema } from '../../SEOHead'
import { GitBranch, Zap, Server, Shield, BarChart3, RefreshCw, ArrowRight, CheckCircle, ChevronDown, Target, Play, Box, Code, Rocket } from 'lucide-react'

export default function CICDPage() {
  const pageTitle = 'CI/CD Development Services - Continuous Integration & Deployment'
  const pageDescription = 'Professional CI/CD development services in Noida, Delhi NCR. Automate deployments, GitHub Actions, Docker, Kubernetes. Faster releases, fewer errors. Get free consultation!'
  const pageKeywords = 'CI/CD development India, continuous integration, continuous deployment, GitHub Actions, Docker, Kubernetes, DevOps services Noida, automated deployment'
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Web Development', url: '/services/web-development' }, { name: 'CI/CD', url: '/web-development/ci-cd' }]

  const faqs = [
    { q: 'What is CI/CD?', a: 'CI/CD stands for Continuous Integration and Continuous Deployment (or Delivery). It\'s a DevOps method that automates the process of code integration, testing, and application deployment to production environments.' },
    { q: 'Why is CI/CD essential for modern businesses?', a: 'CI/CD helps businesses get features and updates out to customers quicker, minimize deployment failures, increase application quality with automated testing, build better teamwork between development and operations, and scale development practices efficiently.' },
    { q: 'What tools do you use for CI/CD?', a: 'We work with popular CI/CD tools including GitHub Actions, GitLab CI, Jenkins, Docker, Kubernetes, and cloud-native solutions. We recommend the best tools based on your technology stack and requirements.' },
    { q: 'How does CI/CD improve security?', a: 'We integrate security checks, access controls, and secure configurations into the pipeline to protect code, data, and infrastructure. Our CI/CD solutions minimize risks related to vulnerabilities and unauthorized access.' },
    { q: 'Can you implement CI/CD for existing projects?', a: 'Yes, we can implement CI/CD pipelines for existing projects. We analyze your current development process and design a CI/CD strategy that fits your technical environment and business goals.' }
  ]

  const services = [
    { icon: GitBranch, title: 'CI/CD Pipeline Design & Setup', desc: 'We design custom CI/CD pipelines aligned with your technology stack, team workflow, and deployment requirements. Our pipelines ensure smooth integration, testing, and delivery.', features: ['Custom Design', 'Workflow Aligned', 'Best Practices', 'Documentation'], color: 'from-emerald-500 to-green-600' },
    { icon: Code, title: 'Automated Testing Integration', desc: 'We integrate automated testing into the CI/CD pipeline to detect bugs early and maintain code quality. This includes unit tests, integration tests, and performance checks.', features: ['Unit Tests', 'Integration Tests', 'Performance', 'Quality Gates'], color: 'from-blue-500 to-cyan-600' },
    { icon: Rocket, title: 'Deployment Automation', desc: 'We automate application deployments across environments to reduce manual errors and ensure consistent releases. Our solutions support safe rollouts and rollback mechanisms.', features: ['Auto Deploy', 'Rollback', 'Blue-Green', 'Canary'], color: 'from-purple-500 to-violet-600' },
    { icon: Server, title: 'Infrastructure & Environment', desc: 'We configure development, staging, and production environments to ensure consistency and reliability across the entire deployment lifecycle.', features: ['Dev/Staging/Prod', 'Consistency', 'IaC', 'Containers'], color: 'from-orange-500 to-amber-600' },
    { icon: Box, title: 'Docker & Kubernetes', desc: 'We containerize applications with Docker and orchestrate them with Kubernetes for scalable, reliable deployments across any infrastructure.', features: ['Docker', 'Kubernetes', 'Containers', 'Orchestration'], color: 'from-indigo-500 to-blue-600' },
    { icon: BarChart3, title: 'Monitoring & Performance', desc: 'We implement monitoring and logging solutions to track pipeline performance, deployment health, and application stability after releases.', features: ['Monitoring', 'Logging', 'Alerts', 'Dashboards'], color: 'from-pink-500 to-rose-600' }
  ]

  const stats = [{ value: '80%', label: 'Faster Deployments' }, { value: '90%', label: 'Fewer Errors' }, { value: '10x', label: 'More Releases' }, { value: '99.9%', label: 'Uptime' }]

  const benefits = [
    'Get features and updates out to customers quicker',
    'Minimize deployment failures and system outages',
    'Increase application quality with automated testing',
    'Build better teamwork between development and operations',
    'Grow the development practice in a very efficient manner',
    'Have the same setup in development, staging, and production'
  ]

  const idealFor = [
    { icon: Code, title: 'Web/Mobile Teams', desc: 'Frequent updates' },
    { icon: Server, title: 'SaaS Platforms', desc: 'Continuous releases' },
    { icon: Rocket, title: 'Enterprises', desc: 'Complex deployments' },
    { icon: GitBranch, title: 'DevOps Adoption', desc: 'Modern practices' }
  ]

  const process = [
    { num: '01', title: 'Assess', desc: 'Analyze your development process, tools and infrastructure', icon: Target },
    { num: '02', title: 'Design', desc: 'Create CI/CD strategy aligned with your business goals', icon: GitBranch },
    { num: '03', title: 'Implement', desc: 'Build automated workflows and testing frameworks', icon: Code },
    { num: '04', title: 'Optimize', desc: 'Monitor and continuously improve pipeline performance', icon: BarChart3 }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} keywords={pageKeywords} canonical="/web-development/ci-cd" breadcrumbs={breadcrumbs} structuredData={faqSchema} />
      <main className='bg-white text-slate-900 overflow-hidden'>
        {/* Hero */}
        <section className='relative py-20 lg:py-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-100 via-green-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60' />
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <nav className='mb-8'><ol className='flex items-center gap-2 text-sm text-slate-500 flex-wrap'>{breadcrumbs.map((item, i) => (<li key={i} className='flex items-center gap-2'>{i > 0 && <span>/</span>}{i === breadcrumbs.length - 1 ? (<span className='text-emerald-600 font-medium'>{item.name}</span>) : (<Link to={item.url} className='hover:text-emerald-600 transition-colors'>{item.name}</Link>)}</li>))}</ol></nav>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 text-emerald-700 text-sm font-bold'><GitBranch size={16} className='text-emerald-500' />Automate Your Workflow</div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900'>CI/CD<span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600'>Development</span></h1>
                <p className='text-lg md:text-xl text-slate-600 mb-6 leading-relaxed'>We provide professional <strong>CI/CD Development Services</strong> that automate the software development, testing, and deployment processes. In today's fast-paced digital world, speed, reliability, and uniformity are crucial for delivering quality applications.</p>
                <p className='text-slate-600 mb-8 leading-relaxed'>Our CI/CD solutions facilitate the development workflow, withdraw manual deployment risks, and offer continuous delivery of applications that are stable, secure, and high-performing.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>{stats.map((stat, i) => (<div key={i} className='text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-emerald-200 transition-all'><div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600'>{stat.value}</div><div className='text-xs text-slate-500'>{stat.label}</div></div>))}</div>
                <Link to='/contact-us'><button className='group px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>Automate Now <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' /></button></Link>
              </div>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-emerald-200 to-green-200 rounded-3xl blur-2xl opacity-30' />
                <div className='relative bg-slate-900 rounded-3xl p-6 shadow-2xl'>
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='w-3 h-3 rounded-full bg-red-400' /><div className='w-3 h-3 rounded-full bg-amber-400' /><div className='w-3 h-3 rounded-full bg-green-400' />
                    <span className='text-slate-400 text-xs ml-2'>ci-pipeline.yml</span>
                  </div>
                  <div className='font-mono text-sm text-slate-300 space-y-1'>
                    <div><span className='text-emerald-400'>name:</span> CI/CD Pipeline</div>
                    <div><span className='text-emerald-400'>on:</span> [push, pull_request]</div>
                    <div className='mt-2'><span className='text-emerald-400'>jobs:</span></div>
                    <div className='pl-2'><span className='text-blue-400'>build:</span></div>
                    <div className='pl-4 text-slate-500'>- Checkout code</div>
                    <div className='pl-4 text-slate-500'>- Install dependencies</div>
                    <div className='pl-4 text-slate-500'>- Run tests</div>
                    <div className='pl-2'><span className='text-purple-400'>deploy:</span></div>
                    <div className='pl-4 text-slate-500'>- Build Docker image</div>
                    <div className='pl-4 text-slate-500'>- Push to registry</div>
                    <div className='pl-4 text-slate-500'>- Deploy to K8s</div>
                    <div className='mt-3 flex items-center gap-2'><div className='w-2 h-2 rounded-full bg-green-400 animate-pulse' /><span className='text-green-400 text-xs'>Pipeline Running...</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why CI/CD */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>Why CI/CD Is <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600'>Essential</span></h2>
                <p className='text-lg text-slate-600 mb-6 leading-relaxed'>Manual deployment is tedious, prone to human mistakes, and unable to be widely applied. The difficulties of manual procedures disappear instantly with CI/CD as it brings in automation, consistency, and reliability.</p>
                <p className='text-slate-600 mb-6 leading-relaxed'>CI/CD has the following advantages for companies:</p>
                <div className='space-y-3'>
                  {benefits.map((item, i) => (<div key={i} className='flex items-center gap-3'><CheckCircle size={20} className='text-emerald-500 flex-shrink-0' /><span className='text-slate-700'>{item}</span></div>))}
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {idealFor.map((item, i) => (<div key={i} className='bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-emerald-200 transition-all text-center'><item.icon size={32} className='mx-auto mb-3 text-emerald-500' /><h4 className='font-bold text-slate-900 mb-1'>{item.title}</h4><p className='text-sm text-slate-500'>{item.desc}</p></div>))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4'>Our CI/CD Services</h2>
              <p className='text-slate-600 max-w-2xl mx-auto'>End-to-end CI/CD solutions from strategy and pipeline design to implementation, optimization, and maintenance.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, i) => (<div key={i} className='group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-transparent transition-all'><div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}><service.icon size={26} /></div><h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3><p className='text-slate-600 text-sm mb-4 leading-relaxed'>{service.desc}</p><div className='flex flex-wrap gap-2'>{service.features.map((f, j) => (<span key={j} className='px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200'>{f}</span>))}</div></div>))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className='py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-4'>Our Implementation Approach</h2>
              <p className='text-slate-300 max-w-2xl mx-auto'>A systematic, strategic, and result-oriented approach to CI/CD implementation</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {process.map((step, i) => (<div key={i} className='relative group text-center'>{i < process.length - 1 && <div className='hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-emerald-500 to-transparent' />}<div className='relative inline-block mb-6'><div className='w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-emerald-500 transition-all'><step.icon size={48} className='text-emerald-400' /></div><div className='absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-sm font-black shadow-lg'>{step.num}</div></div><h3 className='text-xl font-bold mb-2'>{step.title}</h3><p className='text-slate-400 text-sm'>{step.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* Security & SEO */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid lg:grid-cols-2 gap-8'>
              <div className='bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white mb-6'><Shield size={28} /></div>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>Security & Reliability in CI/CD</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>Security is a critical aspect of CI/CD implementation. We integrate security checks, access controls, and secure configurations into the pipeline to protect code, data, and infrastructure.</p>
                <p className='text-slate-600 leading-relaxed'>Our CI/CD solutions are designed to ensure reliable deployments while minimizing risks related to vulnerabilities, misconfigurations, and unauthorized access.</p>
              </div>
              <div className='bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white mb-6'><Zap size={28} /></div>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>SEO & Performance Support</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>Although CI/CD is a backend process, it plays a vital role in supporting SEO and performance improvements. Faster deployments enable quick fixes, performance optimizations, and content updates.</p>
                <p className='text-slate-600 leading-relaxed'>Our CI/CD pipelines support continuous optimization and rapid iteration, helping businesses stay aligned with digital growth strategies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-20 bg-slate-50'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-16'><h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Frequently Asked Questions</h2></div>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (<details key={i} className='group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all'><summary className='flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:text-emerald-600 transition-colors'><span className='pr-4'>{faq.q}</span><ChevronDown size={20} className='text-slate-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0' /></summary><div className='px-6 pb-6 text-slate-600 leading-relaxed'>{faq.a}</div></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black mb-6'>Let's Automate Your Development Workflow</h2>
            <p className='text-emerald-100 text-lg mb-10 max-w-2xl mx-auto'>Efficient software delivery is the pillar of digital products. Build CI/CD pipelines that give smooth development, risk reduction, and fast-tracked innovation.</p>
            <Link to='/contact-us'><button className='group px-10 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto'>Get Started <ArrowRight className='group-hover:translate-x-1 transition-transform' /></button></Link>
          </div>
        </section>
      </main>
    </>
  )
}
