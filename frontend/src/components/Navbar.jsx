import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Database,
  PenTool,
  Globe,
  Activity,
  BarChart,
  Zap,
  Megaphone,
  Monitor,
  ArrowRight,
  Search
} from 'lucide-react'

import logo from '../assets/logo/websitelogo.png'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about-us' },
    {
      label: 'Services',
      path: '/services',
      dropdown: [
        {
          title: 'Development',
          icon: <Globe className='text-cyan-500' size={20} />,
          description: 'Build robust digital solutions',
          items: [
            { name: 'Web Development', icon: <Code size={16} /> },
            { name: 'App Development', icon: <Smartphone size={16} /> },
            { name: 'UI/UX Design', icon: <PenTool size={16} /> },
            { name: 'E-Commerce', icon: <Database size={16} /> }
          ]
        },
        {
          title: 'Growth & SEO',
          icon: <Search className='text-purple-500' size={20} />,
          description: 'Boost your organic reach',
          items: [
            { name: 'Keyword Research', icon: <Activity size={16} /> },
            { name: 'Website Analytics', icon: <BarChart size={16} /> },
            { name: 'SEO Audit', icon: <Zap size={16} /> }
          ]
        },
        {
          title: 'Digital Marketing',
          icon: <Megaphone className='text-pink-500' size={20} />,
          description: 'Scale your brand online',
          items: [
            { name: 'Meta Ads', icon: <Megaphone size={16} /> },
            { name: 'Google Ads', icon: <Monitor size={16} /> },
            { name: 'Social Media', icon: <PenTool size={16} /> },
            { name: 'Political Party', icon: <PenTool size={16} /> }
          ]
        }
      ]
    },
    { label: 'Projects', path: '/projects' },
    { label: 'Blogs', path: '/blogs' }
  ]

  const getServiceLink = name =>
    `/services/${name.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <>
      {/* CLEAN PLAIN NAVBAR - IMPROVED */}
      <nav className='fixed top-0 w-full bg-white border-b z-50 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>

            {/* LOGO - Adjusted Size */}
            <Link to='/'>
              <img 
                src={logo} 
                alt='Logo' 
                className='h-10 w-auto object-contain' 
              />
            </Link>

            {/* DESKTOP MENU - Improved Spacing */}
            <div className='hidden lg:flex items-center gap-8'>
              {navItems.map(item => {
                const active = location.pathname === item.path

                return (
                  <div key={item.label} className='relative group'>
                    <Link
                      to={item.path}
                      className={`text-[15px] font-medium flex items-center gap-1.5 transition-colors duration-200 ${
                        active 
                          ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1' 
                          : 'text-gray-700 hover:text-cyan-600'
                      }`}
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown size={16} className='mt-0.5' />}
                    </Link>

                    {/* SERVICES MEGA MENU - IMPROVED WIDTH */}
                    {item.dropdown && (
                      <div className='absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[800px]'>
                        <div className='bg-white border rounded-xl shadow-lg overflow-hidden'>

                          <div className='h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500'></div>

                          <div className='grid grid-cols-3 divide-x'>
                            {item.dropdown.map((section, idx) => (
                              <div key={idx} className='p-5 hover:bg-gray-50 transition-colors duration-150'>

                                <div className='mb-5'>
                                  <div className='flex items-center gap-3 mb-2'>
                                    <div className='p-2 rounded-lg border bg-white shadow-sm'>
                                      {section.icon}
                                    </div>
                                    <h4 className='text-sm font-bold uppercase tracking-wide text-gray-800'>
                                      {section.title}
                                    </h4>
                                  </div>
                                  <p className='text-xs text-gray-500 pl-12 leading-relaxed'>
                                    {section.description}
                                  </p>
                                </div>

                                <ul className='space-y-1.5'>
                                  {section.items.map((subItem, sIdx) => (
                                    <li key={sIdx}>
                                      <Link
                                        to={getServiceLink(subItem.name)}
                                        className='flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-600 hover:text-cyan-700 hover:bg-cyan-50 transition-all duration-150'
                                      >
                                        <div className='flex items-center gap-3'>
                                          <div className='text-cyan-500'>
                                            {subItem.icon}
                                          </div>
                                          <span className='text-sm font-medium'>
                                            {subItem.name}
                                          </span>
                                        </div>
                                        <ArrowRight size={14} className='text-cyan-500 opacity-0 group-hover:opacity-100 transition-all' />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* RIGHT CTA - IMPROVED STYLING */}
            <div className='hidden lg:flex items-center gap-4'>
              <Link to='/contact-us'>
                <button className='px-6 py-2.5 bg-cyan-600 text-white text-sm font-semibold rounded-lg hover:bg-cyan-700 transition-colors duration-200 shadow-sm hover:shadow'>
                  Get Quote
                </button>
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(true)}
              className='lg:hidden p-2 text-gray-700 hover:text-cyan-600'
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU - IMPROVED */}
      <div
        className={`fixed inset-0 bg-white z-[60] p-6 transition-all duration-300 overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center mb-8'>
          <Link to='/' onClick={() => setMobileOpen(false)}>
            <img 
              src={logo} 
              alt='Logo' 
              className='h-10 w-auto object-contain' 
            />
          </Link>
          <button 
            onClick={() => setMobileOpen(false)}
            className='p-2 hover:bg-gray-100 rounded-full'
          >
            <X size={28} />
          </button>
        </div>

        <div className='flex flex-col gap-1'>
          {navItems.map(item => (
            <div key={item.label} className='border-b py-4'>
              <Link
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className='text-lg font-semibold text-gray-800 flex justify-between items-center'
              >
                {item.label}
                {item.dropdown && <ChevronDown size={20} />}
              </Link>

              {item.dropdown && (
                <div className='pl-4 mt-3 space-y-1'>
                  {item.dropdown.map((section, idx) => (
                    <div key={idx} className='mb-4'>
                      <div className='flex items-center gap-2 mb-2'>
                        {section.icon}
                        <h4 className='text-sm font-bold text-cyan-600'>
                          {section.title}
                        </h4>
                      </div>
                      <p className='text-xs text-gray-500 mb-3'>
                        {section.description}
                      </p>
                      <div className='space-y-1'>
                        {section.items.map((subItem, j) => (
                          <Link
                            key={j}
                            to={getServiceLink(subItem.name)}
                            onClick={() => setMobileOpen(false)}
                            className='flex items-center gap-3 text-sm text-gray-700 py-2.5 px-3 rounded-lg hover:bg-gray-100'
                          >
                            <span className='text-cyan-500'>
                              {subItem.icon}
                            </span>
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to='/contact-us'
            onClick={() => setMobileOpen(false)}
            className='w-full mt-8 py-3.5 bg-cyan-600 text-white text-center font-semibold rounded-lg hover:bg-cyan-700 transition-colors'
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar