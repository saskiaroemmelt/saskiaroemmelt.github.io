"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import References from "@/components/references"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import ScrollAnimation from "@/components/scroll-animation"

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <ScrollAnimation type="fade-in">
        <Hero />
      </ScrollAnimation>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-8">
            <TabsTrigger value="about">{t("nav.about")}</TabsTrigger>
            <TabsTrigger value="experience">{t("nav.experience")}</TabsTrigger>
            <TabsTrigger value="projects">{t("nav.projects")}</TabsTrigger>
            <TabsTrigger value="references">{t("nav.references")}</TabsTrigger>
            <TabsTrigger value="skills">{t("nav.skills")}</TabsTrigger>
            <TabsTrigger value="education">{t("nav.education")}</TabsTrigger>
            <TabsTrigger value="contact">{t("nav.contact")}</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <ScrollAnimation>
              <AboutMe />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="experience" className="mt-6">
            <ScrollAnimation>
              <Experience />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <ScrollAnimation>
              <Projects />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="references" className="mt-6">
            <ScrollAnimation>
              <References />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <ScrollAnimation>
              <Skills />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <ScrollAnimation>
              <Education />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <ScrollAnimation>
              <Contact />
            </ScrollAnimation>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
