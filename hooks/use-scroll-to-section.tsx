"use client"

import { useCallback } from "react"
import { useTabs } from "@/contexts/tabs-context"

export function useScrollToSection() {
  const { setActiveTab } = useTabs()

  const scrollToSection = useCallback(
    (sectionId: string, tabId?: string) => {
      if (event) {
        event.preventDefault()
      }

      if (tabId) {
        setActiveTab(tabId)
      }

      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          const headerHeight = 80 // Altura del header + un poco más de espacio
          const top = section.getBoundingClientRect().top + window.scrollY - headerHeight

          window.scrollTo({
            top,
            behavior: "smooth",
          })
        }
      }, 100)
    },
    [setActiveTab],
  )

  return scrollToSection
}
