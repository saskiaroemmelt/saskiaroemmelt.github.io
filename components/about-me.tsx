"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function AboutMe() {
  const { t } = useLanguage()

  return (
    <section id="about" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t("about.title")}</CardTitle>
          <CardDescription>{t("about.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <p>{t("about.paragraph3")}</p>
          <p>{t("about.paragraph4")}</p>
        </CardContent>
      </Card>
    </section>
  )
}
