"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import ScrollAnimation from "@/components/scroll-animation"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <ScrollAnimation type="fade-up">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{t("hero.title")}</h1>
                <p className="text-xl text-muted-foreground">{t("hero.subtitle")}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={100}>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("hero.description")}</p>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#contact">
                    {t("hero.contact")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">{t("hero.projects")}</Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="flex gap-4 text-muted-foreground">
                <Link
                  href="https://imdb.com"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IMDb
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="https://vimeo.com"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vimeo
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation type="fade-in" delay={200}>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-full border">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Tu foto de perfil"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
