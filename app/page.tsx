"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"
import { useTabs } from "@/contexts/tabs-context"

import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import ScrollAnimation from "@/components/scroll-animation"

export default function Home() {
  const { t } = useLanguage()
  const { activeTab, setActiveTab } = useTabs()

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <main className="min-h-screen bg-background">
      <ScrollAnimation type="fade-in">
        <Hero />
      </ScrollAnimation>

      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 h-auto md:h-10 w-full mb-8">
            <TabsTrigger value="about" className="w-full">{t("nav.about")}</TabsTrigger>
            <TabsTrigger value="experience" className="w-full">{t("nav.experience")}</TabsTrigger>
            <TabsTrigger value="projects" className="w-full">{t("nav.projects")}</TabsTrigger>
            <TabsTrigger value="skills" className="w-full">{t("nav.skills")}</TabsTrigger>
            <TabsTrigger value="education" className="w-full">{t("nav.education")}</TabsTrigger>
            <TabsTrigger value="contact" className="w-full">{t("nav.contact")}</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6" id="about-section">
            <ScrollAnimation threshold={0.05}>
              <AboutMe />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="experience" className="mt-6" id="experience-section">
            <ScrollAnimation threshold={0.05}>
              <Experience />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="projects" className="mt-6" id="projects-section">
            <ScrollAnimation threshold={0.01}>
              <Projects />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="skills" className="mt-6" id="skills-section">
            <ScrollAnimation threshold={0.05}>
              <Skills />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="education" className="mt-6" id="education-section">
            <ScrollAnimation threshold={0.05}>
              <Education />
            </ScrollAnimation>
          </TabsContent>

          <TabsContent value="contact" className="mt-6" id="contact-section">
            <ScrollAnimation threshold={0.05}>
              <Contact />
            </ScrollAnimation>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
