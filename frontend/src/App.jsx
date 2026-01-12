import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Layout
import MainLayout from './components/MainLayout'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './components/Home'
import About from './components/AboutUs'
import Services from './components/Services'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import BlogDetail from './components/BlogDetail';
import Contact from './components/ContactUs'
import Auth from './components/Auth'
import AdminPanel from './components/Dashboard'

// Service Pages - Development
import WebDevelopmentPage from './components/services/WebDevelopmentPage'
import AppDevelopmentPage from './components/services/AppDevelopmentPage'
import ECommercePage from './components/services/ECommercePage'
import UIUXDesignPage from './components/services/UIUXDesignPage'

// Service Pages - SEO & Growth
import KeywordResearch from './components/services/KeywordResearch'
import WebsiteAnalyst from './components/services/WebsiteAnalyst'
import SeoAudit from './components/services/SeoAudit'

// Service Pages - Digital Marketing (NEW)
import MetaAdsPage from './components/services/MetaAdsPage'
import GoogleAdsPage from './components/services/GoogleAdsPage'
import SocialMediaPage from './components/services/SocialMediaPage'
import politicalparty from './components/services/politicalparty'

import CrossPlatformPage from './components/services/AppDevelopment/CrossPlatformPage'
import AppUIUXPage from './components/services/Appdevelopment/AppUIUXPage'
import OfflineFirstPage from './components/services/AppDevelopment/OfflineFirstPage'
import PushNotificationsPage from './components/services/Appdevelopment/PushNotificationsPage'
import EnterpriseSecurityPage from './components/services/AppDevelopment/EnterpriseSecurityPage'
import NativeIOSAndroidPage from './components/services/Appdevelopment/NativeIOSAndroidPage'

import FullStackPage from './components/services/Webdevelopment/FullStackPage'
import CICDPage from './components/services/Webdevelopment/CICDPage'
import PWAPage from './components/services/Webdevelopment/PWAPage'
import HeadlessCMSPage from './components/services/Webdevelopment/HeadlessCMSPage'
import SecurityPage from './components/services/Webdevelopment/SecurityPage'
import WebVitalsPage from './components/services/Webdevelopment/WebVitalsPage'

import UserEmpathyResearchPage from './components/services/Uiux/UserEmpathyResearchPage'
import WireframingLogicPage from './components/services/Uiux/WireframingLogicPage'
import VisualUIDesignPage from './components/services/Uiux/VisualUIDesignPage'
import InteractivePrototypingPage from './components/services/Uiux/InteractivePrototypingPage'
import DesignSystemsPage from './components/services/Uiux/DesignSystemsPage'
import UsabilityTestingPage from './components/services/Uiux/UsabilityTestingPage'

import AnalyticsPage from './components/services/Ecommerce/AnalyticsPage'
import CustomStorePage from './components/services/Ecommerce/CustomStorePage'
import InventoryPage from './components/services/Ecommerce/InventoryPage'
import PaymentGatewayPage from './components/services/Ecommerce/PaymentGatewayPage'
import ShippingPage from './components/services/Ecommerce/ShippingPage'
import StoreDesignPage from './components/services/Ecommerce/StoreDesignPage'




function App () {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* MainLayout ke andar wo pages rahenge jinme Navbar/Footer dikhana hai */}
          <Route element={<MainLayout />}>
            <Route
              path='/'
              element={
                <>
                  <div className='relative z-10'>
                    <Home />
                  </div>
                </>
              }
            />

            <Route path='/about-us' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path='/contact-us' element={<Contact />} />

            {/* Development Services */}
            <Route
              path='/services/web-development'
              element={<WebDevelopmentPage />}
            />
            <Route
              path='/services/app-development'
              element={<AppDevelopmentPage />}
            />
            <Route
              path='/services/app-development'
              element={<AppDevelopmentPage />}
            />
            <Route
              path='/app-development/native-ios-android'
              element={<NativeIOSAndroidPage />}
            />

            <Route
              path='/app-development/cross-platform'
              element={<CrossPlatformPage />}
            />

            <Route path='/app-development/ui-ux' element={<AppUIUXPage />} />

            <Route
              path='/app-development/offline-first'
              element={<OfflineFirstPage />}
            />

            <Route
              path='/app-development/push-notifications'
              element={<PushNotificationsPage />}
            />

            <Route
              path='/app-development/enterprise-security'
              element={<EnterpriseSecurityPage />}
            />
            <Route
              path='/web-development/full-stack'
              element={<FullStackPage />}
            />
            <Route path='/web-development/pwa' element={<PWAPage />} />
            <Route
              path='/web-development/web-vitals'
              element={<WebVitalsPage />}
            />
            <Route
              path='/web-development/security'
              element={<SecurityPage />}
            />
            <Route
              path='/web-development/headless-cms'
              element={<HeadlessCMSPage />}
            />
            <Route path='/web-development/ci-cd' element={<CICDPage />} />

            <Route
              path='/ui-ux-design/user-empathy-research'
              element={<UserEmpathyResearchPage />}
            />
            <Route
              path='/ui-ux-design/wireframing-logic'
              element={<WireframingLogicPage />}
            />
            <Route
              path='/ui-ux-design/visual-ui-design'
              element={<VisualUIDesignPage />}
            />
            <Route
              path='/ui-ux-design/interactive-prototyping'
              element={<InteractivePrototypingPage />}
            />
            <Route
              path='/ui-ux-design/design-systems'
              element={<DesignSystemsPage />}
            />
            <Route
              path='/ui-ux-design/usability-testing'
              element={<UsabilityTestingPage />}
            />
            <Route
              path='/e-commerce/design'
              element={<StoreDesignPage />}
            />
            <Route
              path='/e-commerce/payment-gateway'
              element={<PaymentGatewayPage />}
            />
            <Route
              path='/e-commerce/shipping'
              element={<ShippingPage />}
            />
            <Route
              path='/e-commerce/inventory'
              element={<InventoryPage />}
            />
            <Route
              path='/e-commerce/custom-store'
              element={<CustomStorePage />}
            />
            <Route
              path='/e-commerce/analytics'
              element={<AnalyticsPage />}
            />
            <Route path='/services/e-commerce' element={<ECommercePage />} />
            <Route path='/services/ui/ux-design' element={<UIUXDesignPage />} />

            {/* SEO & Growth Services */}
            <Route
              path='/services/keyword-research'
              element={<KeywordResearch />}
            />
            <Route
              path='/services/website-analytics'
              element={<WebsiteAnalyst />}
            />
            <Route path='/services/seo-audit' element={<SeoAudit />} />

            {/* Digital Marketing Services (NEW) */}
            <Route path='/services/meta-ads' element={<MetaAdsPage />} />
            <Route path='/services/google-ads' element={<GoogleAdsPage />} />
            <Route
              path='/services/social-media'
              element={<SocialMediaPage />}
            />
            <Route
              path='/services/political-party'
              element={<SocialMediaPage />}
            />
          </Route>

          <Route path='/projects' element={<Projects />} />
          <Route path='/admin' element={<AdminPanel />} />

          {/* Auth Routes */}
          <Route path='/login' element={<Auth />} />
          {/* <Route path="/signup" element={<Auth />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
