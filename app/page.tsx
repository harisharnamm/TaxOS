"use client"

import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroImage from "@/components/hero-image"
import FeatureVideo from "@/components/feature-video"
import Navbar from "@/components/navbar"
import WaitlistModal from "@/components/waitlist-modal"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"
import SaveReviewRestoreSection from "@/components/save-review-restore-section"
import AgenticAISearchSection from "@/components/agentic-ai-search-section"
import WhyNotGitSection from "@/components/why-not-git-section"
import TestimonialsSection from "@/components/testimonials-section"
import VibeCodingTweetsSection from "@/components/vibe-coding-tweets-section"
import CalBooking from "@/components/cal-booking"
import { useState } from "react"
import AnnouncementBanner from "@/components/announcement-banner"

// Direct Vercel Blob URLs for videos
const VIDEO_URLS = {
  savePreview:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/save-review-restore-g3BK0sricXTSPMzxK4iGrmXBUwPt11.mp4",
  crossClient: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cross-ides-PZyN9x34tNJsgQrbFkY3UUaatEaePh.mp4",
}

export default function Home() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true)
  }

  return (
    <div
      className={`min-h-screen bg-black text-white font-geist transition-all duration-300 ${isBannerVisible ? "pt-[108px] sm:pt-28" : "pt-20"}`}
    >
      {/* Announcement Banner */}
      <AnnouncementBanner onVisibilityChange={setIsBannerVisible} />

      {/* Navigation */}
      <Navbar isBannerVisible={isBannerVisible} />

      {/* Rest of the content remains the same... */}
      <div className="max-w-[1920px] mx-auto relative px-6 md:px-8">
        {/* Hero Section */}
        <section className="relative rounded-[16px] rounded-all-devices mt-2 mb-6 md:h-[calc(100vh-144px)] font-geist text-white flex flex-col">
          {/* Gradient Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[16px]">
            <div
              className="absolute inset-0 w-full h-full rounded-[16px]"
              style={{
                background: "linear-gradient(135deg, #22D3EE 0%, #ff5c28 50%, #ff5c9d 100%)",
              }}
            />
            <div
              className="absolute inset-0 w-full h-full rounded-[16px] opacity-10"
              style={{
                background: "radial-gradient(circle at 20% 80%, #D7FF1C 0%, transparent 50%)",
              }}
            />
            <div
              className="absolute inset-0 w-full h-full rounded-[16px]"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-[38px] sm:pt-[50px] pb-8 md:pt-[70px] md:pb-12 z-10 flex flex-col h-full">
            {/* Mobile Layout (Stack: Text -> Image -> Buttons) */}
            <div className="flex flex-col md:hidden">
              <div className="mb-4">
                <h1
                  className="font-semibold mb-2 overflow-visible select-text heading-with-selection"
                  style={{
                    fontSize: "clamp(36px, 8vw, 154px)",
                    lineHeight: "1.1",
                    letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
                    fontFamily: 'var(--font-geist-sans), "GeistSans Fallback", sans-serif',
                    height: "auto",
                    maxWidth: "100%",
                    paddingBottom: "0",
                    marginBottom: "0.2em",
                    color: "#FFFFFF",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                  aria-label="TaxOS"
                >
                  TaxOS
                </h1>
                <p
                  className="mx-auto h-auto select-text mb-3"
                  style={{
                    fontFamily:
                      'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                    fontSize: "clamp(14px, 4vw, 22px)",
                    lineHeight: "1.3",
                    fontWeight: "400",
                    letterSpacing: "normal",
                    maxWidth: "2xl",
                    color: "#FFFFFF",
                    backgroundColor: "transparent",
                    "--selection-text-color": "#FFFFFF",
                    "--selection-background-color": "#000000",
                  }}
                >
                  Never lose client work. Preview changes safely. Restore files instantly.
                </p>
              </div>

              {/* Image in the middle for mobile */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-full">
                  <HeroImage />
                </div>
              </div>

              {/* Buttons at the bottom for mobile */}
              <div>
                <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                  <Button
                    className="bg-white hover:bg-gray-100 flex items-center justify-center px-4 sm:px-6 w-full rounded-lg shadow-lg font-mono text-xs sm:text-sm md:text-base font-semibold tracking-wider text-black h-[50px] sm:h-[60px] border-2 border-transparent hover:border-[#D7FF1C] transition-all duration-300"
                    onClick={openWaitlistModal}
                  >
                    <Calendar className="mr-2 h-4 w-4" /> JOIN THE WAITLIST
                  </Button>
                  <CalBooking className="bg-black hover:bg-black/80 flex items-center justify-center px-4 sm:px-6 w-full rounded-lg shadow-lg font-mono text-xs sm:text-sm md:text-base font-semibold tracking-wider text-white h-[50px] sm:h-[60px] border border-white/10 hover:border-[#D7FF1C] transition-all duration-300">
                    <Phone className="mr-2 h-4 w-4" />
                    BOOK A CALL
                  </CalBooking>
                </div>
              </div>
            </div>

            {/* Desktop Layout (Original) */}
            <div className="hidden md:flex md:flex-col md:flex-grow">
              <h1
                className="font-semibold mb-2 whitespace-nowrap overflow-visible select-text heading-with-selection"
                style={{
                  fontSize: "clamp(36px, 8vw, 154px)",
                  lineHeight: "1.1",
                  letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
                  fontFamily: 'var(--font-geist-sans), "GeistSans Fallback", sans-serif',
                  height: "auto",
                  maxWidth: "100%",
                  paddingBottom: "0",
                  marginBottom: "0.2em",
                  color: "#FFFFFF",
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
                aria-label="TaxOS"
              >
                TaxOS
              </h1>
              <p
                className="mb-6 sm:mb-8 mx-auto h-auto select-text"
                style={{
                  fontFamily:
                    'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                  fontSize: "clamp(16px, 4vw, 24px)",
                  lineHeight: "1.3",
                  fontWeight: "400",
                  letterSpacing: "normal",
                  maxWidth: "2xl",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                  "--selection-text-color": "#FFFFFF",
                  "--selection-background-color": "#000000",
                }}
              >
                AI Operating System for Modern Accountants | Automate Everything, Miss Nothing
              </p>
              <div className="flex flex-row justify-center gap-3 md:gap-4 mb-8">
                <Button
                  className="bg-white hover:bg-gray-100 flex items-center justify-center px-4 md:px-6 lg:px-8 rounded-lg shadow-lg font-mono text-sm md:text-base font-semibold tracking-wider text-black h-[50px] md:h-[60px] min-w-[180px] md:min-w-[220px] border-2 border-transparent hover:border-[#D7FF1C] transition-all duration-300"
                  onClick={openWaitlistModal}
                >
                  <Calendar className="mr-2 h-4 w-4 stroke-[2.5px]" />
                  JOIN THE WAITLIST
                </Button>
                <CalBooking className="bg-black hover:bg-black/80 flex items-center justify-center px-4 md:px-6 lg:px-8 rounded-lg shadow-lg font-mono text-sm md:text-base font-semibold tracking-wider text-white h-[50px] md:h-[60px] min-w-[180px] md:min-w-[220px] border border-white/10 hover:border-[#D7FF1C] transition-all duration-300">
                  <Phone className="mr-2 h-4 w-4 stroke-[2.5px]" />
                  BOOK A CALL
                </CalBooking>
              </div>
              <div className="relative w-full flex-grow flex items-center justify-center rounded-md overflow-hidden">
                <div className="w-full sm:w-[85%] md:max-w-[1200px] mx-auto">
                  <HeroImage />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section className="pb-12 md:pb-16 bg-black mt-[60px] md:mt-[112px]">
          <div className="container mx-auto px-4 text-center">
            <p
              className="uppercase mb-6 md:mb-8"
              style={{
                fontFamily:
                  'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "400",
                letterSpacing: "0.5px",
                color: "#999999",
              }}
            >
              Integrates with your existing tools
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 sm:gap-y-12 gap-x-6 md:gap-x-8 mb-8 md:mb-12 max-w-6xl mx-auto">
              <CompanyName name="QuickBooks" />
              <CompanyName name="Xero" />
              <CompanyName name="Drake Tax" />
              <CompanyName name="Lacerte" />
              <CompanyName name="ProSeries" />
              <CompanyName name="TaxWise" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 sm:gap-y-12 gap-x-6 md:gap-x-8 max-w-2xl mx-auto">
              <CompanyName name="Gmail" />
              <CompanyName name="Outlook" />
              <CompanyName name="Slack" />
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12">
            <h2
              className="mb-4 font-semibold"
              style={{
                backgroundImage: "linear-gradient(rgb(245, 245, 245), rgb(245, 245, 245) 29%, rgb(153, 153, 153))",
                color: "transparent",
                fontFamily: "GeistSans, sans-serif",
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 600,
                letterSpacing: "clamp(-1.5px, -0.04em, -2.08px)",
                lineHeight: "1.15",
                textAlign: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              1,500+ CPAs Trust TaxOS
            </h2>
            <p
              className="max-w-3xl mx-auto text-white/80"
              style={{
                fontFamily: "GeistMono, monospace",
                fontSize: "clamp(16px, 3vw, 22px)",
                lineHeight: "1.4",
                textAlign: "center",
              }}
            >
              From solo practices to multi-partner firms — trusted nationwide for intelligent task automation.
            </p>
          </div>

          <div className="space-y-8 overflow-hidden">
            <div className="relative">
              <div className="flex animate-scroll-left whitespace-nowrap">
                <div className="flex">
                  {[
                    "New York",
                    "Los Angeles",
                    "Chicago",
                    "Houston",
                    "Phoenix",
                    "Philadelphia",
                    "San Antonio",
                    "San Diego",
                    "Dallas",
                    "San Jose",
                    "Austin",
                    "Jacksonville",
                    "Fort Worth",
                    "Columbus",
                    "Charlotte",
                    "San Francisco",
                    "Indianapolis",
                    "Seattle",
                    "Denver",
                    "Washington DC",
                  ]
                    .concat([
                      "New York",
                      "Los Angeles",
                      "Chicago",
                      "Houston",
                      "Phoenix",
                      "Philadelphia",
                      "San Antonio",
                      "San Diego",
                      "Dallas",
                      "San Jose",
                      "Austin",
                      "Jacksonville",
                      "Fort Worth",
                      "Columbus",
                      "Charlotte",
                      "San Francisco",
                      "Indianapolis",
                      "Seattle",
                      "Denver",
                      "Washington DC",
                    ])
                    .map((city, index) => (
                      <span
                        key={index}
                        style={{
                          fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          letterSpacing: "normal",
                          color: "#999999",
                          whiteSpace: "nowrap",
                          padding: "0 1rem",
                        }}
                      >
                        {city}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex animate-scroll-right whitespace-nowrap">
                <div className="flex">
                  {[
                    "Mumbai",
                    "Delhi",
                    "Bangalore",
                    "Chennai",
                    "Kolkata",
                    "Hyderabad",
                    "Pune",
                    "Ahmedabad",
                    "Surat",
                    "Jaipur",
                    "Lucknow",
                    "Kanpur",
                    "Nagpur",
                    "Indore",
                    "Thane",
                    "Bhopal",
                    "Visakhapatnam",
                    "Pimpri",
                    "Patna",
                    "Vadodara",
                  ]
                    .concat([
                      "Mumbai",
                      "Delhi",
                      "Bangalore",
                      "Chennai",
                      "Kolkata",
                      "Hyderabad",
                      "Pune",
                      "Ahmedabad",
                      "Surat",
                      "Jaipur",
                      "Lucknow",
                      "Kanpur",
                      "Nagpur",
                      "Indore",
                      "Thane",
                      "Bhopal",
                      "Visakhapatnam",
                      "Pimpri",
                      "Patna",
                      "Vadodara",
                    ])
                    .map((city, index) => (
                      <span
                        key={index}
                        style={{
                          fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          letterSpacing: "normal",
                          color: "#999999",
                          whiteSpace: "nowrap",
                          padding: "0 1rem",
                        }}
                      >
                        {city}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SaveReviewRestoreSection onOpenInstall={openWaitlistModal} />
        <AgenticAISearchSection onOpenInstall={openWaitlistModal} />
        <FeatureVideoSection
          title="Cross-Client Workflow Intelligence"
          description="Switch between clients, deadlines, or document types — and the system keeps you on track with intelligent suggestions."
          videoSrc="https://res.cloudinary.com/dsf0g0xih/video/upload/v1752258269/Cross-Client_akey7a.mp4"
          fallbackVideoSrc={VIDEO_URLS.crossClient}
          gradientClass="gradient-yellow-red-diagonal"
        />
        <WhyNotGitSection onOpenInstall={openWaitlistModal} />
        <VibeCodingTweetsSection onOpenInstall={openWaitlistModal} />
        <TestimonialsSection />
        <FAQSection onOpenInstall={openWaitlistModal} />
        <Footer />
      </div>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </div>
  )
}

function CompanyName({
  name,
  noWrapDesktop = false,
  className = "",
}: { name: string; noWrapDesktop?: boolean; className?: string }) {
  return (
    <div className={`flex justify-center items-center h-10 px-2 ${className}`}>
      <span
        className={`text-[#999999] text-center ${noWrapDesktop ? "md:whitespace-nowrap" : ""}`}
        style={{
          fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: "700",
          letterSpacing: "normal",
        }}
      >
        {name}
      </span>
    </div>
  )
}

function FeatureVideoSection({
  title,
  description,
  videoSrc,
  fallbackVideoSrc,
  gradientClass,
}: {
  title: string
  description: string
  videoSrc: string
  fallbackVideoSrc?: string
  gradientClass: string
}) {
  return (
    <div className="my-24">
      <div className="text-center mb-6 md:mb-12 px-4">
        <h2
          className="mb-4 font-semibold"
          style={{
            backgroundImage: "linear-gradient(rgb(245, 245, 245), rgb(245, 245, 245) 29%, rgb(153, 153, 153))",
            color: "transparent",
            fontFamily: "GeistSans, sans-serif",
            fontSize: "clamp(32px, 6vw, 52px)",
            fontWeight: 600,
            letterSpacing: "clamp(-1.5px, -0.04em, -2.08px)",
            lineHeight: "1.15",
            textAlign: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {title}
        </h2>
        <p
          className="max-w-2xl mx-auto"
          style={{
            color: "#f5f5f5",
            fontFamily: "GeistMono, monospace",
            fontSize: "clamp(16px, 3vw, 22px)",
            lineHeight: "1.3",
            textAlign: "center",
          }}
        >
          {description}
        </p>
      </div>

      <div className="flex justify-center">
        <div className={`gradient-container ${gradientClass} max-w-[1296px] w-full`}>
          <div className="absolute inset-0 bg-black/35 rounded-[16px]"></div>
          <div className="noise-texture"></div>
          <div className="relative z-10 pt-4 sm:pt-12 md:pt-16 pb-0 px-4 sm:px-6 md:px-12">
            <div className="rounded-t-lg overflow-hidden shadow-2xl max-w-4xl mx-auto border border-white/10 border-b-0">
              <FeatureVideo src={videoSrc} alt={title} fallbackSrc={fallbackVideoSrc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
