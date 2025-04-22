"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  type?: "fade-up" | "fade-in"
  delay?: 0 | 100 | 200 | 300 | 400 | 500
}

export default function ScrollAnimation({
  children,
  className = "",
  type = "fade-up",
  delay = 0,
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
        rootMargin: "0px",
        threshold: 0.1,
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
  }, [])

  const animationClass = `animate-${type}`
  const delayClass = delay > 0 ? `animate-delay-${delay}` : ""

  return (
    <div ref={ref} className={`${animationClass} ${delayClass} ${className}`}>
      {children}
    </div>
  )
}
