"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Education() {
  const { t } = useLanguage()

  const education = [
    {
      degree: t("education.university.degree"),
      institution: "Rheinische Fachhochschule Köln",
      period: "2014 - 2017",
      description: t("education.university.description")
    },
    {
      degree: t("education.school.degree"),
      institution: "Freiherr-vom-Stein-Schule Fulda",
      period: "2005 - 2013",
      description: t("education.school.description")
    },
  ]

  const certifications = [
    // {
    //   name: "Sample text",
    //   institution: "Sample place",
    //   year: "1234",
    // },
  ]

  return (
    <section id="education" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t("education.title")}</CardTitle>
          <CardDescription>{t("education.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                {t("education.formal")}
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 pl-4 pb-2">
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} | {edu.period}
                    </p>
                    {edu.description != 'invalid' ? <p className="mt-2 text-sm">{edu.description}</p> : null}
                  </div>
                ))}
              </div>
            </div>

            {
              certifications.length ?
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    {t("education.certifications")}
                  </h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-sm">{cert.name}</h4>
                          <p className="text-xs text-muted-foreground">{cert.institution}</p>
                        </div>
                        <Badge variant="outline">{cert.year}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                : null
            }

            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {t("education.continuous")}
              </h3>
              <p className="text-sm">{t("education.continuousText")}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
