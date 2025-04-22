import type React from "react"

interface BadgeProps {
  variant?: "default" | "outline"
  children: React.ReactNode
}

export function Badge({ variant = "default", children }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    outline: "border border-muted-foreground/20 text-foreground",
  }

  return <span className={`${baseClasses} ${variantClasses[variant]}`}>{children}</span>
}
