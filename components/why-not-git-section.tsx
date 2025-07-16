"use client"

import { Button } from "@/components/ui/button"
import { Lightbulb, Save, Users, SeparatorHorizontal, Calendar } from "lucide-react"

interface WhyNotGitSectionProps {
  onOpenInstall?: () => void
}

export default function WhyNotGitSection({ onOpenInstall }: WhyNotGitSectionProps) {
  const features = [
    {
      icon: Save,
      title: "❌ Email gets lost.",
      description: "✅ TaxOS tracks what was sent and whether it was seen.",
    },
    {
      icon: SeparatorHorizontal,
      title: "❌ Docs pile up.",
      description: "✅ Our system requests, organizes, and verifies them automatically.",
    },
    {
      icon: Users,
      title: "❌ Google Sheets don't follow up.",
      description: "✅ Our AI does.",
    },
    {
      icon: Lightbulb,
      title: "Manual tools are built for the past.",
      description: "TaxOS is designed for how modern CPAs operate.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
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
            ❓ Why Not Just Email & Google Sheets?
          </h2>
          <p
            className="max-w-2xl mx-auto text-white/90 mb-8"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "clamp(18px, 3vw, 24px)",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Manual tools are built for the past. CPA OS is designed for how modern CPAs operate.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-orange-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-white font-semibold mb-3"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                      fontSize: "18px",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-white/80"
                    style={{
                      fontFamily: "GeistMono, monospace",
                      fontSize: "15px",
                      lineHeight: "1.5",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p
            className="text-white/80 mb-6 max-w-3xl mx-auto"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            🔥 Stop Drowning in Admin. Start Delivering Value.
          </p>

          {onOpenInstall && (
            <Button
              onClick={onOpenInstall}
              className="bg-white hover:bg-gray-100 text-black font-mono text-sm font-semibold tracking-wider py-3 px-6 rounded-lg border-2 border-transparent hover:border-[#D7FF1C] transition-all duration-300"
              style={{
                fontFamily: "GeistMono, monospace",
                letterSpacing: "0.56px",
                height: "48px",
              }}
            >
              <Calendar className="mr-2 h-4 w-4 stroke-[2.5px]" />
              JOIN THE WAITLIST
            </Button>
          )}
          <p
            className="text-white/60 mt-4 max-w-2xl mx-auto"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            Let AI run the back-office while you focus on tax strategy and client growth.
          </p>
        </div>
      </div>
    </section>
  )
}
