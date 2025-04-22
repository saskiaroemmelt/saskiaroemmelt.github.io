"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import LanguageSwitcher from "@/components/language-switcher"

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl px-4 md:px-0">
          Portfolio Cinematográfico
        </Link>

        <nav className="hidden md:flex gap-6 mx-6">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.experience")}
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.projects")}
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild className="md:hidden ml-2">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.about")}
                </Link>
                <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.experience")}
                </Link>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.projects")}
                </Link>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.contact")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
