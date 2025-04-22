export type Project = {
  id: number
  name: string
  year: number
  position: string
  director: string
  production: string
  distributor: string
  awards: string[]
  comments: string
  importance: number // 1-10, 10 being most important
}

export const projects: Project[] = [
  {
    id: 1,
    name: "El Camino del Destino",
    year: 2022,
    position: "Unit Production Manager",
    director: "María González",
    production: "Producciones Cinematográficas",
    distributor: "Distribuidora Internacional",
    awards: [
      "Festival de Cine de San Sebastián - Selección Oficial",
      "Premio a Mejor Película - Festival Latinoamericano",
    ],
    comments:
      "Película dramática rodada en locaciones remotas con un presupuesto ajustado. Logré optimizar recursos y cumplir con el cronograma a pesar de las dificultades logísticas.",
    importance: 9,
  },
  {
    id: 2,
    name: "Sombras del Pasado",
    year: 2021,
    position: "Location Manager",
    director: "Carlos Ruiz",
    production: "Estudios Nacionales",
    distributor: "Plataforma de Streaming",
    awards: ["Nominación a Mejor Fotografía - Premios Nacionales"],
    comments:
      "Thriller psicológico que requirió locaciones específicas con características arquitectónicas particulares. Coordiné más de 15 locaciones diferentes en 3 ciudades.",
    importance: 7,
  },
  {
    id: 3,
    name: "Historias Cruzadas",
    year: 2020,
    position: "Unit Production Manager",
    director: "Laura Martínez",
    production: "Productora Independiente",
    distributor: "Distribuidora Nacional",
    awards: ["Premio del Público - Festival de Cine Independiente"],
    comments:
      "Película de bajo presupuesto con múltiples líneas narrativas. Gestioné un equipo reducido pero muy eficiente que logró completar el rodaje en tiempo récord.",
    importance: 8,
  },
  {
    id: 4,
    name: "El Último Viaje",
    year: 2019,
    position: "Location Manager",
    director: "Roberto Sánchez",
    production: "Coproducciones Internacionales",
    distributor: "Distribuidora Europea",
    awards: ["Mejor Dirección Artística - Premios de la Academia Nacional"],
    comments:
      "Road movie que requirió coordinar permisos en múltiples jurisdicciones y trabajar con comunidades locales para acceder a locaciones únicas.",
    importance: 6,
  },
  {
    id: 5,
    name: "Secretos de Familia",
    year: 2018,
    position: "Assistant Director",
    director: "Elena Vidal",
    production: "Televisión Nacional",
    distributor: "Canal de Televisión",
    awards: [],
    comments:
      "Serie de televisión de 8 episodios con un ritmo de producción acelerado. Coordiné el trabajo de más de 50 actores a lo largo de la temporada.",
    importance: 5,
  },
  {
    id: 6,
    name: "La Ciudad Perdida",
    year: 2017,
    position: "Location Manager",
    director: "Javier López",
    production: "Estudios Internacionales",
    distributor: "Distribuidora Global",
    awards: ["Nominación a Mejor Película - Festival de Cine de Aventura"],
    comments:
      "Película de aventuras filmada en locaciones remotas y de difícil acceso. Gestioné la logística para un equipo de más de 100 personas en condiciones desafiantes.",
    importance: 8,
  },
  {
    id: 7,
    name: "Voces del Silencio",
    year: 2016,
    position: "Production Assistant",
    director: "Ana Torres",
    production: "Documentales Sociales",
    distributor: "Festivales de Cine",
    awards: ["Mejor Documental - Festival Internacional de Documentales"],
    comments:
      "Documental sobre comunidades indígenas que requirió un enfoque sensible y respetuoso. Apoyé en la coordinación de entrevistas y en la gestión de permisos especiales.",
    importance: 4,
  },
  {
    id: 8,
    name: "Noches de Verano",
    year: 2015,
    position: "Assistant Director",
    director: "Pedro Ramírez",
    production: "Productora Joven",
    distributor: "Plataforma Digital",
    awards: [],
    comments:
      "Comedia romántica juvenil con un presupuesto limitado. Ayudé a coordinar escenas con extras y a mantener el ritmo de producción.",
    importance: 3,
  },
]

export const positions = ["Unit Production Manager", "Location Manager", "Assistant Director", "Production Assistant"]
