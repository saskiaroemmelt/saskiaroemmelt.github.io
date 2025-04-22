"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  type?: "fade-up" | "fade-in"
  delay?: 0 | 100 | 200 | 300 | 400 | 500
  threshold?: number // Nuevo prop para controlar el umbral de activación
}

export default function ScrollAnimation({
  children,
  className = "",
  type = "fade-up",
  delay = 0,
  threshold = 0.1, // Valor predeterminado más bajo para activar antes
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px", // Activar la animación cuando el elemento está un 10% dentro de la ventana
        threshold, // Usar el umbral proporcionado
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  const animationClass = `animate-${type}`
  const delayClass = delay > 0 ? `animate-delay-${delay}` : ""

  return (
    <div ref={ref} className={`${animationClass} ${delayClass} ${className}`}>
      {children}
    </div>
  )
}
