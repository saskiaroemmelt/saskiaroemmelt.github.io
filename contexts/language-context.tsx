"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en" | "de"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  translations: Record<string, Record<string, string>>
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.references": "Referencias",
    "nav.skills": "Habilidades",
    "nav.education": "Educación",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Saskia Römmelt",
    "hero.subtitle": "Jefa de Producción & Jefa de Locaciones",
    "hero.description":
      "¡Hola! Soy Saskia Römmelt, una profesional de producción audiovisual germano-argentina con mas de 9 años de experiencia en la industria cinematográfica, especializada en la gestión de producción y localización para proyectos de cine y televisión",
    "hero.contact": "Contáctame",
    "hero.projects": "Ver Proyectos",

    // About
    "about.title": "Sobre Mí",
    "about.subtitle": "Un poco sobre mi trayectoria y pasión por el cine",
    // About Me Content
    "about.paragraph1":
      "Soy un apasionado profesional de la industria cinematográfica con más de [X] años de experiencia trabajando como Unit Production Manager y Location Manager en diversos proyectos. Mi carrera me ha permitido colaborar con talentosos directores, productores y equipos creativos en la realización de películas, series y documentales que han dejado huella en el público.",
    "about.paragraph2":
      "Mi enfoque se centra en la planificación meticulosa, la resolución eficiente de problemas y la gestión efectiva de recursos para garantizar que cada producción alcance su máximo potencial. Me especializo en coordinar todos los aspectos logísticos de la producción, desde la búsqueda y gestión de locaciones hasta la supervisión del presupuesto y el cronograma.",
    "about.paragraph3":
      "A lo largo de mi carrera, he desarrollado una sólida red de contactos en la industria y un profundo conocimiento de los procesos de producción cinematográfica. Mi objetivo es siempre contribuir a crear un ambiente de trabajo colaborativo donde la visión creativa pueda florecer dentro de los parámetros prácticos de la producción.",
    "about.paragraph4":
      "Cuando no estoy en un set, me dedico a explorar nuevas locaciones, ampliar mi red profesional y mantenerme actualizado sobre las últimas tendencias y tecnologías en la industria del cine.",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.subtitle": "Mi trayectoria en la industria cinematográfica",
    // Experience Content
    "experience.upm.title": "Unit Production Manager",
    "experience.upm.company": "Productora Ejemplo",
    "experience.upm.period": "2018 - Presente",
    "experience.upm.description":
      "Responsable de la gestión diaria de la producción, incluyendo la supervisión del presupuesto, la coordinación del equipo y la resolución de problemas logísticos. He trabajado en más de 10 largometrajes y series durante este periodo.",

    "experience.lm.title": "Location Manager",
    "experience.lm.company": "Cine Internacional",
    "experience.lm.period": "2015 - 2018",
    "experience.lm.description":
      "Encargado de la búsqueda, negociación y gestión de locaciones para rodajes. Coordiné permisos, logística y relaciones con propietarios y autoridades locales para garantizar rodajes sin contratiempos.",

    "experience.pa.title": "Asistente de Producción",
    "experience.pa.company": "Estudios Cinematográficos",
    "experience.pa.period": "2012 - 2015",
    "experience.pa.description":
      "Apoyé al equipo de producción en diversas tareas, desde la coordinación de casting hasta la gestión de documentación y logística diaria del set.",

    "experience.ad.title": "Asistente de Dirección",
    "experience.ad.company": "Producciones Independientes",
    "experience.ad.period": "2010 - 2012",
    "experience.ad.description":
      "Colaboré estrechamente con directores en la planificación de rodajes, coordinación de actores y supervisión del plan de trabajo diario.",

    // Projects
    "projects.title": "Proyectos y Créditos",
    "projects.subtitle": "Películas y producciones en las que he participado",
    "projects.sortBy": "Ordenar por",
    "projects.filterPosition": "Filtrar por posición",
    "projects.allPositions": "Todas las posiciones",
    "projects.year": "Año (más reciente primero)",
    "projects.position": "Posición",
    "projects.importance": "Importancia",
    "projects.noResults": "No se encontraron proyectos con los criterios seleccionados.",
    "projects.director": "Director",
    "projects.production": "Producción",
    "projects.distribution": "Distribución",
    "projects.awards": "Premios",

    // References
    "references.title": "Referencias Profesionales",
    "references.subtitle": "Colegas de la industria que pueden dar fe de mi trabajo",
    "references.contact": "Contacto",

    // Skills
    "skills.title": "Habilidades",
    "skills.subtitle": "Competencias técnicas y personales",
    "skills.technical": "Habilidades Técnicas",
    "skills.soft": "Habilidades Personales",
    "skills.languages": "Idiomas",

    // Education
    "education.title": "Educación y Formación",
    "education.subtitle": "Estudios académicos y certificaciones profesionales",
    "education.formal": "Educación Formal",
    "education.certifications": "Certificaciones",
    "education.continuous": "Formación Continua",
    "education.continuousText":
      "Participo regularmente en talleres, seminarios y conferencias sobre producción cinematográfica, nuevas tecnologías audiovisuales y tendencias en la industria para mantenerme actualizado en un sector en constante evolución.",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Interesado en trabajar juntos? ¡Contáctame!",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.availability": "Disponible para proyectos internacionales",
    "contact.schedule": "Horario de Contacto",
    "contact.weekdays": "Lunes a Viernes: 9:00 - 18:00",
    "contact.weekends": "Fines de semana: Disponible para emergencias de producción",
    "contact.name": "Nombre",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.success": "¡Mensaje enviado! Gracias por contactarme, responderé a la brevedad.",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Navigation
    "nav.about": "About Me",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.references": "References",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Saskia Römmelt",
    "hero.subtitle": "Unit Production Manager & Location Manager",
    "hero.description":
      "Hi! I'm Saskia Römmelt, a German‑Argentine audiovisual production professional with over 9 years of experience in the film industry, specialized in production management and location management for film and television projects",
    "hero.contact": "Contact Me",
    "hero.projects": "View Projects",

    // About
    "about.title": "About Me",
    "about.subtitle": "A bit about my background and passion for cinema",
    // About Me Content
    "about.paragraph1":
      "I am a passionate film industry professional with over [X] years of experience working as a Unit Production Manager and Location Manager on various projects. My career has allowed me to collaborate with talented directors, producers, and creative teams in the making of films, series, and documentaries that have left a mark on audiences.",
    "about.paragraph2":
      "My approach focuses on meticulous planning, efficient problem-solving, and effective resource management to ensure that each production reaches its full potential. I specialize in coordinating all logistical aspects of production, from finding and managing locations to supervising the budget and schedule.",
    "about.paragraph3":
      "Throughout my career, I have developed a solid network of industry contacts and a deep understanding of film production processes. My goal is always to contribute to creating a collaborative work environment where creative vision can flourish within the practical parameters of production.",
    "about.paragraph4":
      "When I'm not on a set, I dedicate myself to exploring new locations, expanding my professional network, and staying updated on the latest trends and technologies in the film industry.",

    // Experience
    "experience.title": "Professional Experience",
    "experience.subtitle": "My career in the film industry",
    // Experience Content
    "experience.upm.title": "Unit Production Manager",
    "experience.upm.company": "Example Productions",
    "experience.upm.period": "2018 - Present",
    "experience.upm.description":
      "Responsible for the daily management of production, including budget supervision, team coordination, and solving logistical problems. I have worked on more than 10 feature films and series during this period.",

    "experience.lm.title": "Location Manager",
    "experience.lm.company": "International Cinema",
    "experience.lm.period": "2015 - 2018",
    "experience.lm.description":
      "In charge of searching, negotiating, and managing locations for shoots. I coordinated permits, logistics, and relationships with owners and local authorities to ensure smooth filming.",

    "experience.pa.title": "Production Assistant",
    "experience.pa.company": "Film Studios",
    "experience.pa.period": "2012 - 2015",
    "experience.pa.description":
      "I supported the production team in various tasks, from casting coordination to document management and daily set logistics.",

    "experience.ad.title": "Assistant Director",
    "experience.ad.company": "Independent Productions",
    "experience.ad.period": "2010 - 2012",
    "experience.ad.description":
      "I worked closely with directors in planning shoots, coordinating actors, and supervising the daily work plan.",

    // Projects
    "projects.title": "Projects and Credits",
    "projects.subtitle": "Films and productions I have worked on",
    "projects.sortBy": "Sort by",
    "projects.filterPosition": "Filter by position",
    "projects.allPositions": "All positions",
    "projects.year": "Year (newest first)",
    "projects.position": "Position",
    "projects.importance": "Importance",
    "projects.noResults": "No projects found with the selected criteria.",
    "projects.director": "Director",
    "projects.production": "Production",
    "projects.distribution": "Distribution",
    "projects.awards": "Awards",

    // References
    "references.title": "Professional References",
    "references.subtitle": "Industry colleagues who can vouch for my work",
    "references.contact": "Contact",

    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Technical and personal competencies",
    "skills.technical": "Technical Skills",
    "skills.soft": "Soft Skills",
    "skills.languages": "Languages",

    // Education
    "education.title": "Education and Training",
    "education.subtitle": "Academic studies and professional certifications",
    "education.formal": "Formal Education",
    "education.certifications": "Certifications",
    "education.continuous": "Continuous Learning",
    "education.continuousText":
      "I regularly participate in workshops, seminars, and conferences on film production, new audiovisual technologies, and industry trends to stay updated in a constantly evolving sector.",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Interested in working together? Get in touch!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.availability": "Available for international projects",
    "contact.schedule": "Contact Hours",
    "contact.weekdays": "Monday to Friday: 9:00 AM - 6:00 PM",
    "contact.weekends": "Weekends: Available for production emergencies",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent! Thank you for contacting me, I will respond shortly.",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  de: {
    // Navigation
    "nav.about": "Über Mich",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.references": "Referenzen",
    "nav.skills": "Fähigkeiten",
    "nav.education": "Bildung",
    "nav.contact": "Kontakt",

    // Hero
    "hero.title": "Saskia Römmelt",
    "hero.subtitle": "1. Aufnahmeleiterin & Motivaufnahmeleiterin",
    "hero.description":
      "Hallo! Ich bin Saskia Römmelt, eine deutsch‑argentinische Fachkraft für audiovisuelle Produktion mit mehr als neun Jahren Erfahrung in der Filmbranche, spezialisiert auf Produktions‑ und Location‑Management für Kino‑ und TV‑Projekte",
    "hero.contact": "Kontaktiere Mich",
    "hero.projects": "Projekte Ansehen",

    // About
    "about.title": "Über Mich",
    "about.subtitle": "Ein wenig über meinen Hintergrund und meine Leidenschaft für das Kino",
    // About Me Content
    "about.paragraph1":
      "Ich bin ein leidenschaftlicher Filmbranchenprofi mit über [X] Jahren Erfahrung als Unit Production Manager und Location Manager bei verschiedenen Projekten. Meine Karriere hat es mir ermöglicht, mit talentierten Regisseuren, Produzenten und Kreativteams bei der Erstellung von Filmen, Serien und Dokumentationen zusammenzuarbeiten, die beim Publikum Eindruck hinterlassen haben.",
    "about.paragraph2":
      "Mein Ansatz konzentriert sich auf akribische Planung, effiziente Problemlösung und effektives Ressourcenmanagement, um sicherzustellen, dass jede Produktion ihr volles Potenzial ausschöpft. Ich bin spezialisiert auf die Koordination aller logistischen Aspekte der Produktion, von der Suche und Verwaltung von Drehorten bis zur Überwachung des Budgets und des Zeitplans.",
    "about.paragraph3":
      "Im Laufe meiner Karriere habe ich ein solides Netzwerk von Branchenkontakten und ein tiefes Verständnis für Filmproduktionsprozesse entwickelt. Mein Ziel ist es immer, zu einer kollaborativen Arbeitsumgebung beizutragen, in der kreative Vision innerhalb der praktischen Parameter der Produktion gedeihen kann.",
    "about.paragraph4":
      "Wenn ich nicht an einem Set bin, widme ich mich der Erkundung neuer Drehorte, dem Ausbau meines beruflichen Netzwerks und halte mich über die neuesten Trends und Technologien in der Filmindustrie auf dem Laufenden.",

    // Experience
    "experience.title": "Berufserfahrung",
    "experience.subtitle": "Meine Karriere in der Filmindustrie",
    // Experience Content
    "experience.upm.title": "Unit Production Manager",
    "experience.upm.company": "Beispiel Produktionen",
    "experience.upm.period": "2018 - Gegenwart",
    "experience.upm.description":
      "Verantwortlich für das tägliche Management der Produktion, einschließlich Budgetüberwachung, Teamkoordination und Lösung logistischer Probleme. Ich habe in dieser Zeit an mehr als 10 Spielfilmen und Serien gearbeitet.",

    "experience.lm.title": "Location Manager",
    "experience.lm.company": "Internationales Kino",
    "experience.lm.period": "2015 - 2018",
    "experience.lm.description":
      "Zuständig für die Suche, Verhandlung und Verwaltung von Drehorten. Ich koordinierte Genehmigungen, Logistik und Beziehungen zu Eigentümern und lokalen Behörden, um reibungslose Dreharbeiten zu gewährleisten.",

    "experience.pa.title": "Produktionsassistent",
    "experience.pa.company": "Filmstudios",
    "experience.pa.period": "2012 - 2015",
    "experience.pa.description":
      "Ich unterstützte das Produktionsteam bei verschiedenen Aufgaben, von der Casting-Koordination bis zum Dokumentenmanagement und der täglichen Set-Logistik.",

    "experience.ad.title": "Regieassistent",
    "experience.ad.company": "Unabhängige Produktionen",
    "experience.ad.period": "2010 - 2012",
    "experience.ad.description":
      "Ich arbeitete eng mit Regisseuren bei der Planung von Dreharbeiten, der Koordination von Schauspielern und der Überwachung des täglichen Arbeitsplans zusammen.",

    // Projects
    "projects.title": "Projekte und Credits",
    "projects.subtitle": "Filme und Produktionen, an denen ich mitgewirkt habe",
    "projects.sortBy": "Sortieren nach",
    "projects.filterPosition": "Filtern nach Position",
    "projects.allPositions": "Alle Positionen",
    "projects.year": "Jahr (neueste zuerst)",
    "projects.position": "Position",
    "projects.importance": "Wichtigkeit",
    "projects.noResults": "Keine Projekte mit den ausgewählten Kriterien gefunden.",
    "projects.director": "Regisseur",
    "projects.production": "Produktion",
    "projects.distribution": "Vertrieb",
    "projects.awards": "Auszeichnungen",

    // References
    "references.title": "Professionelle Referenzen",
    "references.subtitle": "Kollegen aus der Branche, die für meine Arbeit bürgen können",
    "references.contact": "Kontakt",

    // Skills
    "skills.title": "Fähigkeiten",
    "skills.subtitle": "Technische und persönliche Kompetenzen",
    "skills.technical": "Technische Fähigkeiten",
    "skills.soft": "Soft Skills",
    "skills.languages": "Sprachen",

    // Education
    "education.title": "Bildung und Ausbildung",
    "education.subtitle": "Akademische Studien und berufliche Zertifizierungen",
    "education.formal": "Formale Bildung",
    "education.certifications": "Zertifizierungen",
    "education.continuous": "Kontinuierliches Lernen",
    "education.continuousText":
      "Ich nehme regelmäßig an Workshops, Seminaren und Konferenzen über Filmproduktion, neue audiovisuelle Technologien und Branchentrends teil, um in einem sich ständig weiterentwickelnden Sektor auf dem neuesten Stand zu bleiben.",

    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Interesse an einer Zusammenarbeit? Nehmen Sie Kontakt auf!",
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",
    "contact.location": "Standort",
    "contact.availability": "Verfügbar für internationale Projekte",
    "contact.schedule": "Kontaktzeiten",
    "contact.weekdays": "Montag bis Freitag: 9:00 - 18:00 Uhr",
    "contact.weekends": "Wochenenden: Verfügbar für Produktionsnotfälle",
    "contact.name": "Name",
    "contact.subject": "Betreff",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht Senden",
    "contact.sending": "Wird gesendet...",
    "contact.success": "Nachricht gesendet! Vielen Dank für Ihre Kontaktaufnahme, ich werde in Kürze antworten.",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["es", "en", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
