"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { CheckCircle2 } from "lucide-react"

export default function Skills() {
  const { t } = useLanguage()

  const technicalSkills = t("skills.technical.values")

  const softSkills = t("skills.soft.values")

  const languages = t("skills.languages.values")

  return (
    <section id="skills" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t("skills.title")}</CardTitle>
          <CardDescription>{t("skills.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-6">{t("skills.technical")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {technicalSkills.map((skill: any, index: any) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent/10 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary/70" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t("skills.soft")}</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill: any, index: any) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t("skills.languages")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((lang: any, index: any) => (
                  <div key={index} className="flex flex-col items-center p-4 rounded-lg border text-center">
                    <span className="text-lg font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
