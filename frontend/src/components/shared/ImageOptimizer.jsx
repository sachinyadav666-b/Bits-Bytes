import React, { useState, useEffect, memo } from 'react'

// ==================== GLOBAL IMAGE CACHE ====================
const imageCache = new Map()

// Preload an image and add to cache
export const preloadImage = (src) => {
  return new Promise((resolve) => {
    if (imageCache.has(src)) {
      resolve(src)
      return
    }
    const img = new Image()
    img.onload = () => {
      imageCache.set(src, true)
      resolve(src)
    }
    img.onerror = () => {
      resolve(src)
    }
    img.src = src
  })
}

// Preload multiple images
export const preloadImages = (images) => {
  return Promise.all(images.map(preloadImage))
}

// Check if image is cached
export const isImageCached = (src) => imageCache.has(src)

// ==================== OPTIMIZED IMAGE COMPONENT ====================
export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '',
  aspectRatio = null,
  priority = false 
}) => {
  const [isLoaded, setIsLoaded] = useState(() => imageCache.has(src))
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (imageCache.has(src)) {
      setIsLoaded(true)
      return
    }

    const img = new Image()
    img.onload = () => {
      imageCache.set(src, true)
      setIsLoaded(true)
    }
    img.onerror = () => {
      setHasError(true)
      setIsLoaded(true)
    }
    img.src = src

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  const aspectStyle = aspectRatio ? { aspectRatio } : {}

  return (
    <div 
      className={`optimized-image-wrapper relative overflow-hidden ${wrapperClassName}`}
      style={aspectStyle}
    >
      {/* Skeleton Loader */}
      {!isLoaded && (
        <div className='absolute inset-0 skeleton-loader' />
      )}
      
      {/* Error State */}
      {hasError && (
        <div className='absolute inset-0 bg-gray-200 flex items-center justify-center'>
          <span className='text-gray-400 text-sm'>Image unavailable</span>
        </div>
      )}
      
      {/* Actual Image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding='async'
        />
      )}
    </div>
  )
})

OptimizedImage.displayName = 'OptimizedImage'

// ==================== SKELETON CARD COMPONENT ====================
export const SkeletonCard = memo(({ height = '320px' }) => (
  <div 
    className='bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col'
    style={{ minHeight: height }}
  >
    <div className='w-full h-40 skeleton-loader' />
    <div className='p-5 flex flex-col flex-grow'>
      <div className='h-6 w-3/4 mx-auto mb-3 skeleton-loader rounded' />
      <div className='h-4 w-full mb-2 skeleton-loader rounded' />
      <div className='h-4 w-5/6 mx-auto mb-4 skeleton-loader rounded' />
      <div className='h-4 w-24 mx-auto skeleton-loader rounded mt-auto' />
    </div>
  </div>
))

SkeletonCard.displayName = 'SkeletonCard'

// ==================== ANIMATED COUNTER ====================
export const AnimatedCounter = memo(({ end, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = React.useRef(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 1500
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.ceil(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
})

AnimatedCounter.displayName = 'AnimatedCounter'

export default OptimizedImage
