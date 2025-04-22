"use client"

import { useCallback } from "react"
import { useTabs } from "@/contexts/tabs-context"

export function useScrollToSection() {
  const { setActiveTab } = useTabs()

  const scrollToSection = useCallback(
    (sectionId: string, tabId?: string) => {
      // Prevenir el comportamiento predeterminado si hay un evento
      if (event) {
        event.preventDefault()
      }

      // Si se proporciona un ID de pestaña, activarla a través del contexto
      if (tabId) {
        setActiveTab(tabId)
      }

      // Desplazarse a la sección con un offset menor para mostrar más contenido
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
