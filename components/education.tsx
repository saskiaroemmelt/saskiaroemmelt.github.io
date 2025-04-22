"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Education() {
  const { t } = useLanguage()

  const education = [
    {
      degree: "Licenciatura en Producción Audiovisual",
      institution: "Universidad de Cine y Artes Visuales",
      period: "2006 - 2010",
      description:
        "Especialización en gestión de producción cinematográfica. Proyecto final: Producción de un cortometraje premiado en festivales estudiantiles.",
    },
    {
      degree: "Máster en Gestión Cultural",
      institution: "Instituto de Artes Contemporáneas",
      period: "2011 - 2012",
      description:
        "Enfoque en la gestión de proyectos culturales y cinematográficos. Tesis sobre modelos de financiación en el cine independiente.",
    },
  ]

  const certifications = [
    {
      name: "Certificación en Gestión de Producción Avanzada",
      institution: "Academia de Cine",
      year: "2015",
    },
    {
      name: "Curso de Especialización en Locaciones Cinematográficas",
      institution: "Escuela Internacional de Cine",
      year: "2016",
    },
    {
      name: "Taller de Presupuestos y Financiación para Cine",
      institution: "Fundación Cinematográfica",
      year: "2018",
    },
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
                    <p className="mt-2 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

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
