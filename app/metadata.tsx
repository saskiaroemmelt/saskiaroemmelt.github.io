"use client"

import { useLanguage } from "@/contexts/language-context"

export function useMetadata() {
  const { language } = useLanguage()

  const titles = {
    es: "Portfolio Cinematográfico",
    en: "Film Portfolio",
    de: "Filmportfolio",
  }

  const descriptions = {
    es: "Portfolio profesional de experiencia en la industria cinematográfica",
    en: "Professional portfolio of experience in the film industry",
    de: "Professionelles Portfolio mit Erfahrung in der Filmindustrie",
  }

  return {
    title: titles[language],
    description: descriptions[language],
  }
}
