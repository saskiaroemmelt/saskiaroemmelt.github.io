"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  translations: Record<string, Record<string, any>>
  t: (key: string) => any
}

const translations: Record<string, Record<string, any>> = {
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
      "¡Hola! Soy Saskia Römmelt, una profesional de producción audiovisual germana con mas de 9 años de experiencia en la industria cinematográfica, especializada en la gestión de producción y localización para proyectos de cine y televisión con reconocimientos como un International Emmy Award y una nominación al Cannes Film Festival",
    "hero.contact": "Contáctame",
    "hero.projects": "Ver Proyectos",
    "hero.href.crewunited": "https://www.crew-united.com/es/Saskia-Roemmelt_444329.html",

    // About
    "about.title": "Sobre Mí",
    "about.subtitle": "Un poco sobre mi trayectoria y pasión por el cine",
    // About Me Content
    "about.paragraph":
      `Soy una apasionada profesional de la industria cinematográfica con más de 9 años de experiencia trabajando como jefa de producción y jefa de locaciones en diversos proyectos y múltiples países. Mi carrera me ha permitido colaborar con talentosos directores, productores y equipos creativos en la realización de películas y series.

Mi enfoque se centra en la planificación meticulosa, la resolución eficiente de problemas y la gestión efectiva de recursos para garantizar que cada producción alcance su máximo potencial. Me especializo en coordinar todos los aspectos logísticos de la producción, desde la búsqueda y gestión de locaciones hasta la supervisión del presupuesto y el cronograma.

A lo largo de mi carrera he desarrollado una sólida red de contactos en la industria y un profundo conocimiento de los procesos de producción cinematográfica. Mi objetivo es siempre contribuir a crear un ambiente de trabajo colaborativo donde la visión creativa pueda florecer dentro de los parámetros prácticos de la producción.

Cuando no estoy en un set, me dedico a explorar nuevas locaciones, ampliar mi red profesional y mantenerme actualizada sobre las últimas tendencias y tecnologías en la industria del cine.`,

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.subtitle": "Mi trayectoria en la industria cinematográfica",
    // Experience Content
    "experience.upm.title": "Jefa de producción",
    "experience.upm.company": "Independiente",
    "experience.upm.period": "2023 - Presente",
    "experience.upm.description":
      "Soy responsable de la gestión diaria de la producción, incluyendo la supervisión de presupuestos de hasta €6 M, la coordinación de equipos de alrededor de 150 personas, el armado de call sheets, la resolución de problemas logísticos y el reclutamiento de personal especializado para el departamento de producción",

    "experience.lm.title": "Jefa de locaciones",
    "experience.lm.company": "Independiente",
    "experience.lm.period": "2016 - 2023",
    "experience.lm.description":
      `Me encargué de la búsqueda, negociación y gestión de locaciones para rodajes. Coordiné permisos, logística y relaciones con propietarios y autoridades locales para garantizar rodajes sin contratiempos en más de 200 locaciones a lo largo de múltiples países como Bélgica, Bulgaria, Dinamarca, Alemania, entre otros

Gestioné las locaciones de más de 17 créditos, muchos de los cuales fueron estrenados en cines o en plataformas de streaming como Netflix o Amazon Prime Video; entre ellos Mi Dulce Niña (ganadora del 52º International Emmy Award como Mejor Película de TV / Mini-Serie), así como The Traitor (nominada en el Festival de Cannes 2019 al Palme d'Or), la cual recaudó 9,2 millones de dólares en cines`,

    "experience.al.title": "Asistente de locaciones",
    "experience.al.company": "Independiente",
    "experience.al.period": "2017 - 2020",
    "experience.al.description": "invalid",

    "experience.ap.title": "Asistente de Producción",
    "experience.ap.company": "Independiente",
    "experience.ap.period": "2018 - 2018",
    "experience.ap.description": "invalid",

    "experience.ayp.title": "Ayudante de Producción",
    "experience.ayp.company": "Independiente",
    "experience.ayp.period": "2016 - 2017",
    "experience.ayp.description": "invalid",

    "experience.a.title": "Aprendiz",
    "experience.a.company": "Independiente",
    "experience.a.period": "2017 - 2017",
    "experience.a.description": "invalid",

    // Projects
    "projects.title": "Proyectos y Créditos",
    "projects.subtitle": "Películas y producciones en las que he participado",
    "projects.sortBy": "Ordenar por",
    "projects.filterPosition": "Filtrar por posición",
    "projects.allPositions": "Todas las posiciones",
    "projects.filterType": "Filtrar por tipo",
    "projects.allTypes": "Todos los tipos",
    "projects.year": "Año (más reciente primero)",
    "projects.position": "Posición",
    "projects.importance": "Importancia",
    "projects.noResults": "No se encontraron proyectos con los criterios seleccionados.",
    "projects.director": "Director",
    "projects.production": "Producción",
    "projects.distribution": "Distribución",
    "projects.awards": "Premios y reconocimientos",
    "projects.countries": "Países",
    "projects.channels": "Canales de transmisión",
    "projects.additional_notes": "Información Adicional",

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
    "skills.technical.values": [
      "Gestión de presupuestos",
      "Coordinación de producción",
      "Planificación de rodajes y cronogramas",
      "Busqueda de locaciones",
      "Gestión de locaciones",
      "Permisos y logistica",
      "Contratación y dirección de equipo",
      "Negociación de permisos",
      "Tecnología y software cinematográfico",
    ],
    "skills.soft.values": [
      "Resolución de problemas",
      "Comunicación efectiva",
      "Formación de equipos",
      "Liderazgo de equipos",
      "Trabajo bajo presión",
      "Adaptabilidad",
      "Negociación",
      "Atención al detalle",
      "Gestión del tiempo",
    ],
    "skills.languages.values": [
      { name: "Aleman", level: "Nativo" },
      { name: "Inglés", level: "Fluido" },
      { name: "Español", level: "Fluido" },
    ],

    // Education
    "education.title": "Educación y Formación",
    "education.subtitle": "Estudios académicos",
    "education.formal": "Educación Formal",
    "education.certifications": "Certificaciones",
    "education.continuous": "Formación Continua",
    "education.continuousText":
      "Participo regularmente en talleres, seminarios y conferencias sobre producción cinematográfica, nuevas tecnologías audiovisuales y tendencias en la industria para mantenerme actualizada en un sector en constante evolución.",

    "education.university.degree": "Licenciatura en Administración y Gestión de Medios",
    "education.university.description": "Me especialicé en Gestión de Medios con énfasis en administración, recursos humanos, control de gestión, marketing y planificación de medios, complementando mi educación con conocimientos en derecho, periodismo y producción audiovisual para obtener una visión integral del sector",

    "education.school.degree": "Título de Bachiller",
    "education.school.description": "invalid",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Interesado en trabajar juntos? ¡Contáctame!",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.availability": "Disponible para proyectos internacionales",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin.href": "https://www.linkedin.com/in/saskia-r%C3%B6mmelt-8726b630b/",
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
      "Hello! I am Saskia Römmelt, a German audiovisual production professional with over 9 years of experience in the film industry, specialized in production and location management for film and television projects, with recognitions such as an International Emmy Award and a nomination at the Cannes Film Festival",
    "hero.contact": "Contact Me",
    "hero.projects": "View Projects",
    "hero.href.crewunited": "https://www.crew-united.com/en/Saskia-Roemmelt_444329.html",

    // About
    "about.title": "About Me",
    "about.subtitle": "A bit about my background and passion for cinema",
    // About Me Content
    "about.paragraph":
      `I am a passionate audiovisual professional with over 9 years of experience working as a Unit Production Manager and Location Manager in various projects across multiple countries. My career has allowed me to collaborate with talented directors, producers, and creative teams in the production of films and series.

My approach focuses on meticulous planning, efficient problem-solving, and effective resource management to ensure each production reaches its full potential. I specialize in coordinating all logistical aspects of production, from scouting and managing locations to supervising the budget and schedule.

Throughout my career, I have developed a strong network of industry contacts and a deep understanding of film production processes. My goal is always to help create a collaborative work environment where the creative vision can flourish within the practical parameters of production.

When I am not on set, I dedicate myself to exploring new locations, expanding my professional network, and keeping up to date with the latest trends and technologies in the film industry.`,

    // Experience
    "experience.title": "Professional Experience",
    "experience.subtitle": "My career in the film industry",
    // Experience Content
    "experience.upm.title": "Unit Production Manager",
    "experience.upm.company": "Freelance",
    "experience.upm.period": "2023 - Present",
    "experience.upm.description":
      "Responsible for the daily management of production, including budget supervision, team coordination, and solving logistical problems. I have worked on more than 10 feature films and series during this period.",

    "experience.lm.title": "Location Manager",
    "experience.lm.company": "Freelance",
    "experience.lm.period": "2016 - 2023",
    "experience.lm.description":
      `Responsible for scouting, negotiating, and managing locations for film shoots. Coordinated permits, logistics, and relationships with property owners and local authorities to ensure smooth shoots in over 200 locations across multiple countries, including Belgium, Bulgary, Denmark, Germany, among others

Managed locations on more than 17 credits, many of which were released in cinemas or on streaming platforms such as Netflix and Amazon Prime Video; among them Dear Child (winner of the 52nd International Emmy Award for Best TV Movie / Mini-Series), as well as The Traitor (nominated for the Palme d'Or at the 2019 Cannes Film Festival), which grossed 9.2 million USD at the box office`,

    "experience.al.title": "Assistant Location Manager",
    "experience.al.company": "Freelance",
    "experience.al.period": "2017 - 2020",
    "experience.al.description": "invalid",

    "experience.ap.title": "Assistant Production Manager",
    "experience.ap.company": "Freelance",
    "experience.ap.period": "2018 - 2018",
    "experience.ap.description": "invalid",

    "experience.ayp.title": "Production Runner",
    "experience.ayp.company": "Freelance",
    "experience.ayp.period": "2016 - 2017",
    "experience.ayp.description": "invalid",

    "experience.a.title": "Runner",
    "experience.a.company": "Freelance",
    "experience.a.period": "2017 - 2017",
    "experience.a.description": "invalid",

    // Projects
    "projects.title": "Projects and Credits",
    "projects.subtitle": "Films and productions I have worked on",
    "projects.sortBy": "Sort by",
    "projects.filterPosition": "Filter by position",
    "projects.allPositions": "All positions",
    "projects.filterType": "Filter by type",
    "projects.allTypes": "All types",
    "projects.year": "Year (newest first)",
    "projects.position": "Position",
    "projects.importance": "Importance",
    "projects.noResults": "No projects found with the selected criteria.",
    "projects.director": "Director",
    "projects.production": "Production",
    "projects.distribution": "Distribution",
    "projects.awards": "Awards",
    "projects.countries": "Countries",
    "projects.channels": "Channels",
    "projects.additional_notes": "Notes",

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
    "skills.technical.values": [
      "Budget management",
      "Production coordination",
      "Scheduling",
      "Location scouting",
      "Location management",
      "Permits and logistics",
      "Hiring and supervision of crew",
      "Permits Negotiation",
      "Film software technology"
    ],
    "skills.soft.values": [
      "Problem solving",
      "Effective communication",
      "Team building",
      "Team leadership",
      "Working under pressure",
      "Adaptability",
      "Negotiation",
      "Attention to detail",
      "Time management"
    ],
    "skills.languages.values": [
      { name: "German", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Spanish", level: "Fluent" }
    ],

    // Education
    "education.title": "Education and Training",
    "education.subtitle": "Academic studies",
    "education.formal": "Formal Education",
    "education.certifications": "Certifications",
    "education.continuous": "Continuous Learning",
    "education.continuousText":
      "I regularly participate in workshops, seminars, and conferences on film production, new audiovisual technologies, and industry trends to stay updated in a constantly evolving sector.",

    "education.university.degree": "Bachelor of Arts - BA, Media Management",
    "education.university.description": "I specialized in Media Management with an emphasis on administration, human resources, management control, marketing, and media planning, complementing my education with knowledge in law, journalism, and audiovisual production to gain a comprehensive understanding of the sector",

    "education.school.degree": "High School Diploma",
    "education.school.description": "invalid",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Interested in working together? Get in touch!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.availability": "Available for international projects",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin.href": "https://www.linkedin.com/in/saskia-r%C3%B6mmelt-8726b630b/",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent! Thank you for contacting me, I will respond shortly.",

    // Footer
    "footer.rights": "All rights reserved.",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["es", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): any => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage(): any {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
