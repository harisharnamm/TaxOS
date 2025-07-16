"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Mail, User, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
}

interface SubmissionState {
  status: "idle" | "loading" | "success" | "error"
  message: string
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" })
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle", message: "" })
  const modalRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", email: "" })
      setSubmission({ status: "idle", message: "" })
      // Focus name input after modal animation
      setTimeout(() => {
        nameInputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Close modal with escape key or outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear any previous error when user starts typing
    if (submission.status === "error") {
      setSubmission({ status: "idle", message: "" })
    }
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setSubmission({ status: "error", message: "Please enter your name" })
      nameInputRef.current?.focus()
      return false
    }

    if (!formData.email.trim()) {
      setSubmission({ status: "error", message: "Please enter your email" })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmission({ status: "error", message: "Please enter a valid email address" })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setSubmission({ status: "loading", message: "" })

    try {
      const response = await fetch("https://n8n.projectascend.in/webhook/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          source: "CPA OS Landing Page",
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmission({
          status: "success",
          message: `Thanks ${formData.name.split(" ")[0]}! You're on the waitlist. We'll be in touch soon.`,
        })
        // Auto-close after 3 seconds on success
        setTimeout(() => {
          onClose()
        }, 3000)
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      setSubmission({
        status: "error",
        message: "Something went wrong. Please try again or email us directly.",
      })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-black border border-white/10 rounded-[16px] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2
            className="text-xl font-semibold text-white"
            style={{
              fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
              letterSpacing: "-0.02em",
            }}
          >
            Join the Waitlist
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submission.status === "success" ? (
            // Success State
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <p
                className="text-white text-lg mb-2"
                style={{
                  fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                  fontWeight: 600,
                }}
              >
                You're In! 🎉
              </p>
              <p
                className="text-white/80 mb-4"
                style={{
                  fontFamily: "GeistMono, monospace",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {submission.message}
              </p>
              <p
                className="text-white/60 text-sm"
                style={{
                  fontFamily: "GeistMono, monospace",
                }}
              >
                Closing automatically...
              </p>
            </div>
          ) : (
            // Form State
            <>
              <p
                className="text-white/80 mb-6 text-center"
                style={{
                  fontFamily: "GeistMono, monospace",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                Be the first to know when TaxOS launches. Get early access and exclusive updates.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-white/90 text-sm font-medium"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                    }}
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all"
                      style={{
                        fontFamily: "GeistMono, monospace",
                        fontSize: "14px",
                      }}
                      disabled={submission.status === "loading"}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-white/90 text-sm font-medium"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                    }}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all"
                      style={{
                        fontFamily: "GeistMono, monospace",
                        fontSize: "14px",
                      }}
                      disabled={submission.status === "loading"}
                    />
                  </div>
                </div>

                {/* Error Message */}
                {submission.status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <p
                      className="text-red-400 text-sm"
                      style={{
                        fontFamily: "GeistMono, monospace",
                      }}
                    >
                      {submission.message}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={submission.status === "loading"}
                  className="w-full bg-white hover:bg-gray-100 text-black font-mono text-sm font-semibold tracking-wider py-3 px-6 rounded-lg border-2 border-transparent hover:border-[#D7FF1C] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "GeistMono, monospace",
                    letterSpacing: "0.56px",
                    height: "48px",
                  }}
                >
                  {submission.status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining Waitlist...
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </Button>
              </form>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p
                  className="text-white/50 text-xs text-center"
                  style={{
                    fontFamily: "GeistMono, monospace",
                    lineHeight: "1.4",
                  }}
                >
                  We respect your privacy. No spam, just updates about TaxOS launch and early access opportunities.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
