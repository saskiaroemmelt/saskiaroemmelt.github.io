"use client"

import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import ScrollAnimation from "@/components/scroll-animation"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"

export default function Hero() {
  const { t } = useLanguage()
  const scrollToSection = useScrollToSection()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <ScrollAnimation type="fade-up">
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{t("hero.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("hero.subtitle")}</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="fade-up" delay={100}>
            <div className="relative aspect-square w-48 md:w-64 overflow-hidden rounded-full border mb-8">
              <Image
                src="/profile.jpg?height=600&width=600"
                alt="Foto de perfil"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="fade-up" delay={200}>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mb-8">{t("hero.description")}</p>
          </ScrollAnimation>

          <ScrollAnimation type="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={() => scrollToSection("contact-section", "contact")}>
                {t("hero.contact")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("projects-section", "projects")}>
                {t("hero.projects")}
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="fade-up" delay={350}>
            <div className="flex gap-6 text-muted-foreground justify-center">
              <a
                href={t("hero.href.crewunited")}
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crew United
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/saskia-r%C3%B6mmelt-8726b630b/"
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href={'/cv_saskia.pdf'}
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum Vitae
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
