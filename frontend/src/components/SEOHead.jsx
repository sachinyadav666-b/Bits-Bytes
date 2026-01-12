import React from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * SEO Head Component for Bits and Bytes IT Solution
 * Handles dynamic meta tags, Open Graph, Twitter Cards, and Structured Data
 */
const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://www.bitsandbytesitsolution.com/img/og-default.jpg',
  ogType = 'website',
  structuredData,
  noindex = false,
  breadcrumbs = [],
  articleMeta = null,
  serviceMeta = null,
  localBusinessMeta = null
}) => {
  const siteUrl = 'https://www.bitsandbytesitsolution.com'
  const siteName = 'Bits and Bytes IT Solution'
  const defaultTitle =
    'Bits and Bytes IT Solution | Digital Marketing Agency in Noida, Delhi NCR & All India'
  const defaultDescription =
    'Bits and Bytes IT Solution is a full-service digital marketing agency in Noida offering SEO, Google Ads, Meta Ads, Web Development, App Development, UI/UX Design, and E-commerce solutions. Drive 300% ROI with our performance-driven strategies.'

  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle
  const finalDescription = description || defaultDescription
  const finalCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl
  const finalKeywords =
    keywords ||
    'digital marketing agency Noida, SEO services India, Google Ads management, Meta Ads Facebook Instagram, web development company Delhi NCR, app development India, UI/UX design services, e-commerce development, full stack development, PWA development, political campaign marketing'

  // Generate BreadcrumbList structured data
  const generateBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${item.url}`
      }))
    }
  }

  // Generate Service structured data
  const generateServiceSchema = () => {
    if (!serviceMeta) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: serviceMeta.serviceType,
      provider: {
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/img/logo.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          addressCountry: 'IN'
        }
      },
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      description: serviceMeta.description,
      offers: serviceMeta.offers || {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'INR'
        }
      }
    }
  }

  // Generate FAQ structured data
  const generateFAQSchema = faqs => {
    if (!faqs || faqs.length === 0) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  }

  // Organization Schema (always present)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bits and Bytes IT Solution',
    alternateName: 'BitsAndBytesIT',
    url: siteUrl,
    logo: `${siteUrl}/img/logo.png`,
    description:
      'Bits and Bytes IT Solution is a full-service online marketing company dedicated to helping companies develop a robust internet presence, generate qualified leads, and grow sustainably. We are experts in developing high-performance digital marketing solutions that provide quantifiable outcomes and long-term value.',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201301',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5355',
      longitude: '77.3910'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-XXXXXXXXXX',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-XXXXXXXXXX',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
      }
    ],
    sameAs: [
      'https://www.facebook.com/bitsandbytesitsolution',
      'https://www.instagram.com/bitsandbytesitsolution',
      'https://www.linkedin.com/company/bitsandbytesitsolution',
      'https://twitter.com/bitsandbytesit'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Search Engine Optimization (SEO)',
            description:
              'Enhance organic visibility and rankings with our comprehensive SEO services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Ads & PPC',
            description:
              'Instant traffic and lead campaigns using Google Ads and PPCs'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Meta Ads (Facebook & Instagram)',
            description:
              'Target your audience and develop your brand with Meta advertising'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description:
              'Full-stack, PWA, and headless CMS development services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'App Development',
            description:
              'Native iOS/Android and cross-platform mobile app development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
            description:
              'User-centric design services for websites and mobile apps'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Commerce Solutions',
            description:
              'Scalable e-commerce development for online business growth'
          }
        }
      ]
    }
  }

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bits and Bytes IT Solution - Digital Marketing Agency',
    image: `${siteUrl}/img/logo.png`,
    url: siteUrl,
    telephone: '+91-XXXXXXXXXX',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Noida',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201301',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5355',
      longitude: '77.3910'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Noida'
      },
      {
        '@type': 'City',
        name: 'Delhi'
      },
      {
        '@type': 'State',
        name: 'Delhi NCR'
      },
      {
        '@type': 'Country',
        name: 'India'
      }
    ]
  }

  // WebSite Schema for sitelinks search
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  const breadcrumbSchema = generateBreadcrumbSchema()
  const serviceSchema = generateServiceSchema()

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name='description' content={finalDescription} />
      <meta name='keywords' content={finalKeywords} />
      <meta name='author' content='Bits and Bytes IT Solution' />
      <meta
        name='robots'
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        }
      />
      <meta name='language' content='English' />
      <meta name='revisit-after' content='7 days' />
      <meta name='rating' content='general' />
      <meta name='distribution' content='global' />

      {/* Canonical URL */}
      <link rel='canonical' href={finalCanonical} />

      {/* Alternate languages */}
      <link rel='alternate' hrefLang='en-in' href={finalCanonical} />
      <link rel='alternate' hrefLang='x-default' href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={ogType} />
      <meta property='og:url' content={finalCanonical} />
      <meta property='og:title' content={finalTitle} />
      <meta property='og:description' content={finalDescription} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:locale' content='en_IN' />

      {/* Twitter Card */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={finalCanonical} />
      <meta name='twitter:title' content={finalTitle} />
      <meta name='twitter:description' content={finalDescription} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:site' content='@bitsandbytesit' />
      <meta name='twitter:creator' content='@bitsandbytesit' />

      {/* Geo Tags for Local SEO */}
      <meta name='geo.region' content='IN-UP' />
      <meta name='geo.placename' content='Noida, Uttar Pradesh' />
      <meta name='geo.position' content='28.5355;77.3910' />
      <meta name='ICBM' content='28.5355, 77.3910' />

      {/* Mobile & App Links */}
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='BitsAndBytesIT' />

      {/* Structured Data */}
      <script type='application/ld+json'>
        {JSON.stringify(organizationSchema)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Service Schema */}
      {serviceSchema && (
        <script type='application/ld+json'>
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {/* Custom Structured Data */}
      {structuredData && (
        <script type='application/ld+json'>
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

// Export helper functions for FAQ Schema generation
export const generateFAQSchema = faqs => {
  if (!faqs || faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a
      }
    }))
  }
}

// Export helper for HowTo Schema
export const generateHowToSchema = (steps, name, description) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description || step.desc
    }))
  }
}

export default SEOHead
