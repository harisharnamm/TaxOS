"use client"

import type React from "react"

import { useState } from "react"

interface Tweet {
  text: string
  handle: string
  name: string
  url: string
  profileImage: string
  isHighlighted?: boolean
  isRetweet?: boolean
  originalTweet?: {
    text: string
    handle: string
    name: string
  }
  stats?: {
    views?: string
    likes?: string
    retweets?: string
  }
}

const tweets: Tweet[] = [
  {
    text: "I used to forget follow-ups constantly. Now TaxOS emails clients before I even remember.",
    handle: "@priya_cpa_nyc",
    name: "Priya Patel, CPA",
    url: "https://t.co/PriyaCPANYC",
    profileImage: "/images/profiles/priya.jpg",
    stats: {
      views: "45.2K",
      likes: "289",
      retweets: "18",
    },
  },
  {
    text: "The 1099 hub alone saves me hours during filing season.",
    handle: "@michael_y_dallas",
    name: "Michael Y., Dallas",
    url: "https://x.com/michael_y_dallas/status/1907293098557809124",
    profileImage: "/images/profiles/michael.jpg",
    stats: {
      views: "156.3K",
      likes: "2.1K",
      retweets: "145",
    },
  },
  {
    text: "I used to manually track CPE credits. This thing handles it better than my admin ever could.",
    handle: "@jordan_l_toronto",
    name: "Jordan L., Toronto",
    url: "https://t.co/JordanLToronto",
    profileImage: "/images/profiles/jordan.jpg",
    stats: {
      views: "123.4K",
      likes: "3.2K",
      retweets: "187",
    },
  },
  {
    text: "Client communication used to be chaos. Now everything is tracked and professional.",
    handle: "@sarah_cpa_miami",
    name: "Sarah Chen, CPA",
    url: "https://t.co/SarahCPAMiami",
    profileImage: "/images/profiles/sarah.jpg",
    stats: {
      views: "27.8K",
      likes: "256",
      retweets: "21",
    },
  },
  {
    text: "The AI chat feature knows my clients better than I do sometimes. Scary good.",
    handle: "@david_tax_pro",
    name: "David Rodriguez, EA",
    url: "https://x.com/david_tax_pro/status/1902151456645640595",
    profileImage: "/images/profiles/david.jpg",
    stats: {
      views: "34.5K",
      likes: "456",
      retweets: "34",
    },
  },
  {
    text: "Today was amazing! TaxOS automatically sent W-9 reminders to 50 clients and I got 30 responses by lunch. This is the future.",
    handle: "@lisa_cpa_boston",
    name: "Lisa Wang, CPA",
    url: "https://x.com/lisa_cpa_boston/status/1902379748501880934",
    profileImage: "/images/profiles/lisa.jpg",
    stats: {
      likes: "98",
      retweets: "12",
    },
  },
  {
    text: "Tax software is scary for clients. TaxOS makes the whole process feel human and professional.",
    handle: "@alex_accounting",
    name: "Alex Thompson",
    url: "https://x.com/alex_accounting/status/1902412183096717334",
    profileImage: "/images/profiles/alex.jpg",
    stats: {
      views: "789",
      likes: "15",
    },
  },
]

interface VibeCodingTweetsSectionProps {
  onOpenInstall?: () => void
}

export default function VibeCodingTweetsSection({ onOpenInstall }: VibeCodingTweetsSectionProps) {
  const [expandedTweets, setExpandedTweets] = useState<Set<number>>(new Set())

  const toggleExpanded = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedTweets((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const truncateText = (text: string, maxLength = 200) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + "..."
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header - Outside gradient like other sections */}
        <div className="text-center mb-6 md:mb-12 px-4">
          <h2
            className="mb-6 font-semibold"
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
            ⚡ Tax Workflows Are Exploding — So Are the Headaches
          </h2>
          <p
            className="max-w-3xl mx-auto text-white/80 mb-4"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "clamp(16px, 3vw, 20px)",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Don't take our word for it. Here's what professionals are saying:
          </p>
        </div>

        {/* Gradient Container - Matching other sections */}
        <div className="flex justify-center">
          <div
            className="gradient-container max-w-[1296px] w-full relative"
            style={{ background: "linear-gradient(135deg, #22d3ee 0%, #ff5c28 50%, #ff5c9d 100%)" }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35 rounded-[16px]"></div>

            {/* Noise Overlay */}
            <div className="noise-texture"></div>

            {/* Content */}
            <div className="relative z-10 pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6 md:px-12">
              {/* Enhanced Tweets Layout */}
              <div className="space-y-6 sm:space-y-8">
                {/* Featured Tweet - Most relevant */}
                <div className="max-w-4xl mx-auto">
                  <a
                    href={tweets[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative transition-all duration-300 cursor-pointer rounded-[16px] sm:rounded-[20px] p-3 sm:p-6 md:p-10 bg-white/15 border border-white/30 sm:border-2 hover:border-white/50 hover:bg-white/20 backdrop-blur-sm"
                  >
                    {/* Tweet Content */}
                    <div className="mb-3 sm:mb-4 md:mb-8">
                      <p
                        className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
                        style={{
                          fontFamily: "GeistMono, monospace",
                          lineHeight: "1.6",
                          textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        {expandedTweets.has(0)
                          ? tweets[0].text.split("\n").map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < tweets[0].text.split("\n").length - 1 && <br />}
                              </span>
                            ))
                          : truncateText(tweets[0].text, 150)}
                        {tweets[0].text.length > 150 && (
                          <button
                            onClick={(e) => toggleExpanded(0, e)}
                            className="ml-2 text-white/70 hover:text-white underline text-sm"
                            style={{ fontFamily: "GeistMono, monospace" }}
                          >
                            {expandedTweets.has(0) ? "show less" : "read more"}
                          </button>
                        )}
                      </p>
                    </div>

                    {/* Author Info - Enhanced */}
                    <div className="flex items-center justify-between flex-col sm:flex-row gap-2 sm:gap-4 sm:gap-0">
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full overflow-hidden border border-white/30 sm:border-2 bg-white/10">
                          <img
                            src={tweets[0].profileImage || "/placeholder.svg"}
                            alt={`${tweets[0].name} profile`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p
                            className="text-white font-semibold text-sm sm:text-base md:text-lg"
                            style={{
                              fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            {tweets[0].name}
                          </p>
                          <p
                            className="text-white/70 text-xs sm:text-sm"
                            style={{
                              fontFamily: "GeistMono, monospace",
                              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            {tweets[0].handle}
                          </p>
                        </div>
                      </div>

                      {/* Enhanced engagement indicators */}
                      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-white/60 w-full sm:w-auto justify-center sm:justify-end">
                        {tweets[0].stats?.views && (
                          <div className="flex items-center gap-1 sm:gap-2 bg-white/10 px-2 py-1 rounded-full">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                            </svg>
                            <span className="text-xs sm:text-sm font-mono font-bold text-white">45.2K</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 sm:gap-2 bg-white/10 px-2 py-1 rounded-full">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span className="text-xs sm:text-sm font-mono font-bold text-white">289</span>
                        </div>
                        <svg
                          className="h-4 w-4 sm:h-6 sm:w-6 text-white opacity-50 group-hover:opacity-80 transition-opacity"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Enhanced Stats Bar */}
                <div className="flex justify-center">
                  <div className="bg-white/15 border-2 border-white/30 rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 flex items-center gap-4 sm:gap-6 md:gap-12 backdrop-blur-sm shadow-xl">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg sm:text-xl md:text-2xl font-mono">500K+</div>
                      <div className="text-white/70 text-xs sm:text-sm font-mono uppercase tracking-wider">Views</div>
                    </div>
                    <div className="w-px h-8 sm:h-10 bg-white/40"></div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg sm:text-xl md:text-2xl font-mono">8.5K+</div>
                      <div className="text-white/70 text-xs sm:text-sm font-mono uppercase tracking-wider">Likes</div>
                    </div>
                    <div className="w-px h-8 sm:h-10 bg-white/40"></div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg sm:text-xl md:text-2xl font-mono">420+</div>
                      <div className="text-white/70 text-xs sm:text-sm font-mono uppercase tracking-wider">
                        Retweets
                      </div>
                    </div>
                  </div>
                </div>

                {/* Masonry Grid for remaining tweets */}
                <div className="columns-1 lg:columns-2 xl:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                  {tweets.slice(1).map((tweet, index) => {
                    const actualIndex = index + 1
                    return (
                      <a
                        key={actualIndex}
                        href={tweet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block relative transition-all duration-300 cursor-pointer rounded-[16px] p-4 sm:p-6 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 break-inside-avoid mb-4 sm:mb-6 backdrop-blur-sm"
                        style={{
                          transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)`,
                        }}
                      >
                        {/* Tweet Content with truncation */}
                        <div className="mb-6">
                          <p
                            className="text-white/95 leading-relaxed"
                            style={{
                              fontFamily: "GeistMono, monospace",
                              fontSize: "15px",
                              lineHeight: "1.6",
                              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            {expandedTweets.has(actualIndex)
                              ? tweet.text.split("\n").map((line, i) => (
                                  <span key={i}>
                                    {line}
                                    {i < tweet.text.split("\n").length - 1 && <br />}
                                  </span>
                                ))
                              : truncateText(tweet.text, 120)}
                            {tweet.text.length > 120 && (
                              <button
                                onClick={(e) => toggleExpanded(actualIndex, e)}
                                className="ml-2 text-white/60 hover:text-white underline text-xs"
                                style={{ fontFamily: "GeistMono, monospace" }}
                              >
                                {expandedTweets.has(actualIndex) ? "less" : "more"}
                              </button>
                            )}
                          </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                          <div className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/30 bg-white/10">
                              <img
                                src={tweet.profileImage || "/placeholder.svg"}
                                alt={`${tweet.name} profile`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p
                                className="text-white font-medium"
                                style={{
                                  fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                                  fontSize: "14px",
                                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                                }}
                              >
                                {tweet.name}
                              </p>
                              <p
                                className="text-white/70"
                                style={{
                                  fontFamily: "GeistMono, monospace",
                                  fontSize: "12px",
                                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                                }}
                              >
                                {tweet.handle}
                              </p>
                            </div>
                          </div>

                          {/* Enhanced engagement stats for smaller tweets */}
                          <div className="flex items-center gap-2 sm:gap-3 text-white/50 w-full sm:w-auto justify-center sm:justify-end">
                            {tweet.stats?.likes && (
                              <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                <span className="text-xs font-mono font-bold text-white">{tweet.stats.likes}</span>
                              </div>
                            )}
                            <svg
                              className="h-4 w-4 text-white opacity-40 group-hover:opacity-70 transition-opacity"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
