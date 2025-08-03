"use client"

import { Menu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"

export default function Header() {
  const { t } = useLanguage()
  const scrollToSection = useScrollToSection()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <div className="w-[100px] md:w-[120px]" />

        <nav className="hidden md:flex gap-4 md:gap-6 justify-center mx-auto">
          <button
            onClick={() => scrollToSection("about-section", "about")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => scrollToSection("experience-section", "experience")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
          >
            {t("nav.experience")}
          </button>
          <button
            onClick={() => scrollToSection("projects-section", "projects")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
          >
            {t("nav.projects")}
          </button>
          <button
            onClick={() => scrollToSection("skills-section", "skills")}
            className="text-muted-foreground hover:text-foreground transition-colors hidden md:inline-block text-sm md:text-base"
          >
            {t("nav.skills")}
          </button>
          <button
            onClick={() => scrollToSection("education-section", "education")}
            className="text-muted-foreground hover:text-foreground transition-colors hidden md:inline-block text-sm md:text-base"
          >
            {t("nav.education")}
          </button>
          <button
            onClick={() => scrollToSection("contact-section", "contact")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
          >
            {t("nav.contact")}
          </button>
        </nav>

        <div className="w-[100px] md:w-[120px] flex items-center justify-center gap-4">
          <LanguageSwitcher />
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => scrollToSection("about-section", "about")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {t("nav.about")}
                </button>
                <button
                  onClick={() => scrollToSection("experience-section", "experience")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {t("nav.experience")}
                </button>
                <button
                  onClick={() => scrollToSection("projects-section", "projects")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {t("nav.projects")}
                </button>
                <button
                  onClick={() => scrollToSection("skills-section", "skills")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {t("nav.skills")}
                </button>
                <button
                  onClick={() => scrollToSection("education-section", "education")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {t("nav.education")}
                </button>
                <button
                  onClick={() => scrollToSection("contact-section", "contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {t("nav.contact")}
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
