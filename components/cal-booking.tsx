"use client"

import type React from "react"
import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

interface CalBookingProps {
  children: React.ReactNode
  className?: string
  calLink?: string
  namespace?: string
  onClick?: () => void
}

export default function CalBooking({
  children,
  className = "",
  calLink = "team-nurahex.ai/cpaos",
  namespace = "cpaos",
  onClick,
}: CalBookingProps) {
  useEffect(() => {
    ;(async () => {
      try {
        const cal = await getCalApi({ namespace })
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: "dark",
        })
      } catch (error) {
        console.error("Cal.com initialization error:", error)
      }
    })()
  }, [namespace])

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick()
    }
    // The data attributes will handle the popup automatically
  }

  return (
    <button
      className={className}
      onClick={handleClick}
      data-cal-namespace={namespace}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      type="button"
    >
      {children}
    </button>
  )
}
