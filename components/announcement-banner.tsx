"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

interface AnnouncementBannerProps {
  onVisibilityChange?: (isVisible: boolean) => void
}

interface BannerInfo {
  id: string
  desktopText: string
  mobileText: string
  linkText: string
  linkUrl: string
}

const bannerInfos: BannerInfo[] = [
  {
    id: "accounting-today",
    desktopText: 'Accounting Today (100K) calls TaxOS "Revolutionary" — Automate client communication this tax season',
    mobileText: 'Accounting Today calls CPA OS "Revolutionary"',
    linkText: "Read Article",
    linkUrl: "https://accountingtoday.com/cpa-os-review",
  },
  {
    id: "cpa-practice-advisor",
    desktopText: 'CPA Practice Advisor featured: "AI Task Automation for Tax Pros." TaxOS highlighted as essential.',
    mobileText: 'CPA Practice Advisor: "AI Task Automation for Tax Pros."',
    linkText: "Read CPA Practice Advisor",
    linkUrl: "https://cpapracticeadvisor.com/ai-task-automation",
  },
]

export default function AnnouncementBanner({ onVisibilityChange }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const currentBanner = bannerInfos[currentBannerIndex]

  // Cycle through banners every 8 seconds
  useEffect(() => {
    if (!isVisible || bannerInfos.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentBannerIndex((prev) => (prev + 1) % bannerInfos.length)
        setIsTransitioning(false)
      }, 300) // Half of transition duration
    }, 8000) // 8 seconds per banner

    return () => clearInterval(interval)
  }, [isVisible, isPaused])

  const handleClose = () => {
    setIsVisible(false)
    onVisibilityChange?.(false)
  }

  useEffect(() => {
    onVisibilityChange?.(isVisible)
  }, [isVisible, onVisibilityChange])

  if (!isVisible) return null

  const renderIcon = () => {
    // Show different icons based on banner type
    if (currentBanner.id === "accounting-today") {
      return (
        <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      )
    }

    // Default icon for other content
    return (
      <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    )
  }

  // Simplified transition - just opacity and subtle scale
  const simpleTransition = isTransitioning ? "opacity-0 transform scale-98" : "opacity-100 transform scale-100"

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-black border-b border-white/10">
      {/* Screen reader announcement for banner changes */}
      <div className="sr-only" aria-live="polite" aria-atomic="true" key={currentBanner.id}>
        {currentBanner.desktopText}
      </div>

      <div
        className="flex items-center justify-center px-4 py-2 sm:py-3 max-w-7xl mx-auto min-h-[44px] sm:min-h-[52px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Single unified animation group - gradient bar + content together */}
        <div
          className={`flex items-center gap-3 transition-all duration-600 ease-out motion-reduce:transition-none motion-reduce:transform-none ${simpleTransition}`}
        >
          {/* Gradient accent bar - now part of the main content group */}
          <div
            className={`w-1 h-4 bg-gradient-to-b from-cyan-400 via-orange-400 via-[#D7FF1C] to-pink-400 rounded-full transition-all duration-300 ease-out motion-reduce:transition-none ${
              isTransitioning ? "scale-110 shadow-lg shadow-cyan-400/50" : "scale-100"
            }`}
          ></div>

          {/* Icon with subtle staggered animation */}
          <div
            className={`transition-transform duration-600 ease-out motion-reduce:transition-none motion-reduce:transform-none`}
            style={{
              transitionDelay: isTransitioning ? "50ms" : "100ms",
            }}
          >
            {renderIcon()}
          </div>

          {/* Text content */}
          <a
            href={currentBanner.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 text-xs sm:text-sm cursor-pointer leading-tight"
            style={{
              fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
              fontWeight: 500,
              letterSpacing: "-0.01em",
              lineHeight: "1.3",
            }}
          >
            <span className="hidden sm:inline">{currentBanner.desktopText} → </span>
            <span className="sm:hidden">{currentBanner.mobileText} →</span>
            <span className="text-white hover:text-white/80 transition-colors underline decoration-white/30 hover:decoration-white/60 underline-offset-2">
              {currentBanner.linkText}
            </span>
          </a>
        </div>

        {/* Banner indicators - positioned absolutely to not affect centering */}
        {bannerInfos.length > 1 && (
          <div className="absolute right-16 hidden sm:flex items-center gap-1.5">
            {bannerInfos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out motion-reduce:transition-none ${
                  index === currentBannerIndex ? "bg-white w-6 shadow-sm" : "bg-white/30 hover:bg-white/50 w-1.5"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                aria-label={`Switch to banner ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Close button - positioned absolutely to not affect centering */}
        <button
          onClick={handleClose}
          className="absolute right-4 p-1.5 text-white/50 hover:text-white/80 hover:bg-white/5 rounded-md transition-all duration-200 flex-shrink-0 motion-reduce:transition-none"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
