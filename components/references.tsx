"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useLanguage } from "@/contexts/language-context"

export default function References() {
  const { t } = useLanguage()

  const references = [
    {
      name: "Test One",
      position: "Position One",
      company: "Company One",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue orci ac augue imperdiet luctus. Donec placerat rutrum quam, dictum tempor augue semper in. Cras ac mi mattis, dignissim arcu non, viverra turpis. In ac fringilla ipsum",
        // "He trabajado con este profesional en tres proyectos diferentes y siempre ha demostrado una capacidad excepcional para resolver problemas y mantener la producción en marcha incluso en las circunstancias más difíciles.",
      contact: "(+12) 345 678 90",
    },
    {
      name: "Test Two",
      position: "Position Two",
      company: "Company Two",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue orci ac augue imperdiet luctus. Donec placerat rutrum quam, dictum tempor augue semper in. Cras ac mi mattis, dignissim arcu non, viverra turpis. In ac fringilla ipsum",
        // "Su conocimiento de locaciones y capacidad para negociar permisos complejos fue fundamental para el éxito de nuestra película. Altamente recomendado para cualquier producción que busque eficiencia y profesionalismo.",
      contact: "Disponible bajo petición",
    },
    {
      name: "Test Three",
      position: "Position Three",
      company: "Company Three",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue orci ac augue imperdiet luctus. Donec placerat rutrum quam, dictum tempor augue semper in. Cras ac mi mattis, dignissim arcu non, viverra turpis. In ac fringilla ipsum",
        // "Un colaborador excepcional que entiende tanto los aspectos creativos como logísticos de la producción cinematográfica. Su atención al detalle y capacidad para anticipar problemas nos ahorró tiempo y recursos valiosos.",
      contact: "(+54) 01 2345 6789",
    },
  ]

  return (
    <section id="references" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t("references.title")}</CardTitle>
          <CardDescription>{t("references.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {references.map((ref, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <Avatar className="h-16 w-16 mb-4">
                      <AvatarFallback>
                        {ref.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">{ref.name}</h3>
                    <p className="text-sm text-muted-foreground">{ref.position}</p>
                    <p className="text-sm text-muted-foreground">{ref.company}</p>
                  </div>
                  <blockquote className="text-sm italic border-l-2 pl-4 my-4">"{ref.quote}"</blockquote>
                  <p className="text-xs text-muted-foreground mt-4">
                    {t("references.contact")}: {ref.contact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
