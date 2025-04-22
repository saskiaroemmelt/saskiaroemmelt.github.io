"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.upm.title"),
      company: t("experience.upm.company"),
      period: t("experience.upm.period"),
      description: t("experience.upm.description"),
    },
    {
      title: t("experience.lm.title"),
      company: t("experience.lm.company"),
      period: t("experience.lm.period"),
      description: t("experience.lm.description"),
    },
    {
      title: t("experience.pa.title"),
      company: t("experience.pa.company"),
      period: t("experience.pa.period"),
      description: t("experience.pa.description"),
    },
    {
      title: t("experience.ad.title"),
      company: t("experience.ad.company"),
      period: t("experience.ad.period"),
      description: t("experience.ad.description"),
    },
  ]

  return (
    <section id="experience" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t("experience.title")}</CardTitle>
          <CardDescription>{t("experience.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    {exp.company} | {exp.period}
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
