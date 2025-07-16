"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

const faqs = [
  {
    question: "Can I use this without switching systems?",
    answer: (
      <>
        Yes — it integrates with your existing tools and fills the gaps in your current workflow.
        <br />
        <br />
        Works alongside QuickBooks, Xero, Drake, Lacerte, and your current email setup.
      </>
    ),
  },
  {
    question: "Will it spam my clients?",
    answer: (
      <>
        No — all messaging is human-checked before sending to ensure professional communication.
        <br />
        <br />
        You control the tone, timing, and frequency of all client outreach.
      </>
    ),
  },
  {
    question: "Where is my data stored?",
    answer: (
      <>
        Securely in encrypted cloud storage, fully audit-logged for compliance.
        <br />
        <br />
        Bank-level security with SOC 2 Type II certification and full HIPAA compliance.
      </>
    ),
  },
  {
    question: "Is it free to try?",
    answer: (
      <>
        Yes. No credit card required for the free trial.
        <br />
        <br />
        Start with 50 client communications per month, then upgrade as you grow.
      </>
    ),
  },
  {
    question: "Does it work for small firms?",
    answer: (
      <>
        It's made for solos, side hustlers, and multi-partner setups alike.
        <br />
        <br />
        Scales from 1 client to 10,000+ with the same intelligent automation.
      </>
    ),
  },
]

interface FAQSectionProps {
  onOpenInstall?: () => void
}

export default function FAQSection({ onOpenInstall }: FAQSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          className="text-center mb-12 md:mb-16 font-semibold"
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
          FAQ (For Real Tax Professionals)
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-lg bg-white/5 overflow-hidden"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <span
                  className="text-left font-medium text-white"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                    fontSize: "18px",
                  }}
                >
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 pt-0">
                <p
                  className="text-white/80"
                  style={{
                    fontFamily:
                      'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Call to action */}
        <div className="mt-12 md:mt-16 text-center">
          <p
            className="text-white/80 mb-6"
            style={{
              fontFamily:
                'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            Still unsure? Try it for 60 seconds — you'll never do tax work without it again.
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
        </div>
      </div>
    </section>
  )
}
