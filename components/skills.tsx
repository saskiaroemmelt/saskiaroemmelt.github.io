"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"

export default function Skills() {
  const { t } = useLanguage()

  const technicalSkills = [
    { name: "Gestión de Presupuestos", level: 95 },
    { name: "Coordinación de Producción", level: 90 },
    { name: "Gestión de Locaciones", level: 95 },
    { name: "Planificación de Rodaje", level: 85 },
    { name: "Negociación de Permisos", level: 90 },
    { name: "Software de Producción", level: 80 },
  ]

  const softSkills = [
    "Resolución de problemas",
    "Comunicación efectiva",
    "Liderazgo de equipos",
    "Trabajo bajo presión",
    "Adaptabilidad",
    "Negociación",
    "Atención al detalle",
    "Gestión del tiempo",
  ]

  const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Fluido" },
    { name: "Francés", level: "Intermedio" },
  ]

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
              <h3 className="font-semibold mb-4">{t("skills.technical")}</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t("skills.soft")}</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t("skills.languages")}</h3>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
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
