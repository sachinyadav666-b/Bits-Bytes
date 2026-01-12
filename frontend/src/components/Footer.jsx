import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom' // Import Link for internal navigation
import logo from '../assets/logo/websitelogo.png'

const Footer = () => {
  // 1. Social Media Data (Yahan apne asli links dalein)
  const socialLinks = [
    { icon: <Facebook size={18} />, url: 'https://www.facebook.com/bitsandbytesitsolution', name: 'Facebook' },
    { icon: <Twitter size={18} />, url: 'https://twitter.com/your-handle', name: 'Twitter' },
    { icon: <Instagram size={18} />, url: 'https://www.instagram.com/bits_and_bytes_it_solution', name: 'Instagram' },
    { icon: <Linkedin size={18} />, url: 'https://in.linkedin.com/company/bits-and-bytes-it-solution', name: 'LinkedIn' }
  ]

  // 2. Quick Links Data (Internal Paths)
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' }
  ]

  // 3. Services Data (Internal Paths)
  const servicesLinks = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Google Ads', path: '/services/google-ads' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'Social Media', path: '/services/social-media' },
    { name: 'SEO Audit', path: '/services/seo-audit' }
  ]

  return (
    <footer className='relative bg-white text-black border-t border-black/10 overflow-hidden'>
      {/* Decorative Glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50'></div>

      <div className='container mx-auto px-6 py-16 relative z-10'>
        <div className='grid md:grid-cols-4 gap-12'>
          
          {/* Column 1: Brand Info */}
          <div>
            <div className='flex items-center'>
              <Link to="/">
                <img
                  src={logo}
                  alt='BitsBytes Logo'
                  className='h-18 w-auto object-contain scale-125 cursor-pointer'
                  style={{ transformOrigin: 'left center' }}
                />
              </Link>
            </div>
            <p className='text-gray-700 text-sm leading-relaxed mb-6'>
              Building digital products, brands, and experiences that connect
              with the future. Let's create something extraordinary.
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security best practice
                  aria-label={social.name}
                  className='w-10 h-10 rounded-full bg-black/5 text-black flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className='text-lg font-bold mb-6 text-cyan-600'>
              Quick Links
            </h3>
            <ul className='space-y-4 text-gray-700 text-sm'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* Link component use kiya hai internal navigation ke liye */}
                  <Link
                    to={link.path}
                    className='hover:text-black transition-colors flex items-center gap-2 group'
                  >
                    <span className='w-0 group-hover:w-2 h-[1px] bg-cyan-600 transition-all duration-300'></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className='text-lg font-bold mb-6 text-purple-600'>Services</h3>
            <ul className='space-y-4 text-gray-700 text-sm'>
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className='hover:text-black cursor-pointer transition-colors block'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h3 className='text-lg font-bold mb-6'>Stay Updated</h3>
            <p className='text-gray-700 text-sm mb-4'>
              Subscribe to our newsletter for the latest tech trends.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className='relative'>
              <input
                type='email'
                placeholder='Enter email address'
                className='w-full bg-black/5 border border-black/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-cyan-600 transition-colors'
              />
              <button type="submit" className='absolute right-2 top-2 p-1.5 bg-cyan-600 text-black rounded hover:bg-cyan-500 transition-colors'>
                <ArrowRight size={16} />
              </button>
            </form>

            <div className='mt-8 space-y-2 text-sm text-gray-700'>
              {/* Email Link */}
              <a href="mailto:hello@bitsandbytes.com" className='flex items-center gap-2 hover:text-cyan-600 transition-colors'>
                <Mail size={16} className='text-cyan-600' />{' '}
                Info@bitsandbytesitsolution.com
              </a>
              {/* Phone Link */}
              <a href="tel:+919876543210" className='flex items-center gap-2 hover:text-cyan-600 transition-colors'>
                <Phone size={16} className='text-cyan-600' /> +91 8750788895
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-black/5 py-6 text-center text-gray-600 text-xs'>
        <p>
          &copy; {new Date().getFullYear()} Bitsandbytesitsolutions. All rights
          reserved. | {' '}
          <Link to="/privacy-policy" className='hover:text-cyan-600'>
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer