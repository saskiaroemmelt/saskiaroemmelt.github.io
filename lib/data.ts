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
  importance: number // 1-10 / 10 best
}

export const projects: Project[] = [
  {
    id: 0,
    name: "Tatort – Das Böse in dir",
    year: 2025,
    position: "Jefa de producción",
    director: "Dir. Luzie Loose",
    production: "Bavaria Fiction GmbH",
    distributor: "",
    awards: [],
    comments: "Película para TV (franquicia Tatort) · Canal SR (Alemania). Rodaje en Alemania.",
    importance: 8,
  },
  {
    id: 0,
    name: "Tatort – Das Ende der Nacht",
    year: 2024,
    position: "Jefa de producción",
    director: "Dir. Tini Tüllmann",
    production: "Bavaria Fiction GmbH",
    distributor: "",
    awards: [],
    comments: "Película para TV (franquicia Tatort) · Canal Degeto y Canal SR (Alemania). Rodaje en Alemania y Francia.",
    importance: 8,
  },
  {
    id: 0,
    name: "Mord mit Aussicht",
    year: 2023,
    position: "Jefa de producción",
    director: "Markus Sehr, Felix Stienz, Oliver Schmitz",
    production: "Claussen+Putz Filmproduktion GmbH",
    distributor: "",
    awards: [],
    comments: "Serie de TV · Canal ARD y WDR (Alemania). Rodaje en Alemania. 13 episodios (Ep. 46‑58). Sustitución de 2 semanas.",
    importance: 8,
  },
  {
    id: 0,
    name: "Rose",
    year: 2024,
    position: "Jefa de locaciones",
    director: "Dir. Markus Schleinzer",
    production: "Schubert",
    distributor: "Austria (Filmladen Filmverleih GmbH), Alemania (Piffl Medien GmbH)",
    awards: [],
    comments: "Largometraje cinematográfico rodado en Alemania y Austria.",
    importance: 4,
  },
  {
    id: 0,
    name: "Merz gegen Merz – Geheimnisse",
    year: 2024,
    position: "Jefa de locaciones",
    director: "Dir. Felix Stienz",
    production: "MadeFor Film GmbH",
    distributor: "",
    awards: [
      "Festival des Deutschen Films (Nominada) · Rheingold Audience Award"
    ],
    comments:
      "Película para TV (franquicia Merz gegen Merz) · Canal ZDF (Alemania). Rodaje en Alemania.",
      importance: 5,
  },
  {
    id: 0,
    name: "The Perfect Miss",
    year: 2023,
    position: "Jefa de locaciones",
    director: "Sabine Boss, Nicolas Berse‑Gilles",
    production:
      "BTF GmbH, German Motion Picture Fund, Bildundtonfabrik",
    distributor: "",
    awards: [
      "Jupiter Awards (Nominada) · Best Actress, Best Actor, Best Series (National)"
    ],
    comments:
      "Serie de TV para Amazon Prime Video rodada en Alemania.",
    importance: 7
  },
  {
    id: 0,
    name: "Mord mit Aussicht",
    year: 2023,
    position: "Jefa de locaciones",
    director: "Dir. Felix Stienz",
    production: "Claussen+Putz Filmproduktion GmbH",
    distributor: "",
    awards: [],
    comments:
      "Serie de TV · Canal ARD y WDR (Alemania). Rodaje en Alemania. 13 episodios (Ep. 46‑58).",
    importance: 4
  },
  {
    id: 0,
    name: "Briefe aus dem Jenseits",
    year: 2022,
    position: "Jefa de locaciones",
    director: "Dir. Niki Stein",
    production: "Lailaps Films GmbH",
    distributor: "",
    awards: [
      "Filmfest Hamburg (Nominada) · Best German TV Production"
    ],
    comments:
      "Película para TV · Canal Arte (Alemania/Francia) y ZDF (Alemania). Rodaje en Alemania.",
    importance: 5
  },
  {
    id: 0,
    name: "Mi dulce niña",
    year: 2022,
    position: "Jefa de locaciones",
    director: "Isabel Kleefeld, Julian Pörksen",
    production: "Constantin Television GmbH",
    distributor: "",
    awards: [
      "International Emmy Awards (Ganadora) · Best TV Movie / Mini-Series",
      "Deutsche Akademie für Fernsehen (Ganadora) · Best Editing TV/Stream, Best Lead Performance",
      "Blauer Panther - TV & Streaming-Award (Nominada) · Best Series",
      "Deutscher Fernsehpreis (Nominada) · Best Drama Series",
      "Deutsche Akademie für Fernsehen (Nominada) · Best Screenplay"
    ],
    comments: "Miniserie lanzada en Netflix.",
    importance: 10
  },
  {
    id: 0,
    name: "Alice",
    year: 2022,
    position: "Jefa de locaciones",
    director: "Dir. Nicole Weegmann",
    production: "Neue Schönhauser Filmproduktion GmbH",
    distributor: "",
    awards: [
      "Grimme Award (Nominada) · Special Acting Performance",
      "Deutscher Fernsehpreis (Nominada) · Best Actress",
      "Blauer Panther - TV & Streaming-Award (Nominada) · Best Actress",
      "Deutsche Akademie für Fernsehen (Nominada) · Best Casting, Best Protagonist Actress"
    ],
    comments:
      "Película para TV · Canales Degeto, RBB y WDR (Alemania). Rodaje en Alemania, Bélgica y Francia.",
    importance: 7
  },
  {
    id: 0,
    name: "Wo ist meine Schwester?",
    year: 2021,
    position: "Jefa de locaciones",
    director: "Dir. Markus Imboden",
    production: "Lailaps Films GmbH",
    distributor: "",
    awards: [
      "Filmfest Hamburg (Nominada) · Best German TV Production"
    ],
    comments:
      "Película para TV · Canal Arte (Alemania/Francia) y ZDF (Alemania). Rodaje en Alemania.",
    importance: 5
  },
  {
    id: 0,
    name: "Unter anderen Umständen – Dämonen",
    year: 2021,
    position: "Jefa de locaciones",
    director: "Dir. Judith Kennel",
    production:
      "Network Movie Film und Fernsehproduktion GmbH",
    distributor: "",
    awards: [],
    comments:
      "Película para TV · Canal ZDF (Alemania). Rodaje en Alemania y Dinamarca.",
    importance: 4
  },
  {
    id: 0,
    name: "Mittagsstunde",
    year: 2021,
    position: "Jefa de locaciones",
    director: "Dir. Lars Jessen",
    production: "Florida Film GmbH",
    distributor:
      "Austria (Filmladen Filmverleih GmbH), Alemania (Majestic Filmverleih GmbH)",
    awards: [
      "Jupiter Awards (Ganadora) · Special Jury Prize",
      "Gilde Filmpreis (Ganadora) · Best National Film",
      "Deutscher Filmpreis (Nominada) · Best Supporting Actress, Best Leading Actor"
    ],
    comments:
      "Largometraje cinematográfico rodado en Alemania.",
    importance: 6
  },
  {
    id: 0,
    name: "Faking Hitler",
    year: 2021,
    position: "Jefa de locaciones",
    director: "Tobi Baumann, Wolfgang Groos",
    production: "UFA Fiction",
    distributor: "",
    awards: [
      "The German Television Award (Ganadora) · Best Drama Series, Best Actor",
      "Der Deutsche Fernsehpreis (Nominada) · Best Drama-Serie, Best Musik Fiktion",
      "German Drama Award (Nominada) · Actor/Actress in a comedic role",
      "TeleVisionale - Film and Series Festival Baden-Baden (Nominada) · TV Serie"
    ],
    comments:
      "Miniserie · Canales RTL+ y TVNOW (Alemania). Rodaje en Alemania y Bélgica.",
    importance: 7
  },
  {
    id: 0,
    name: "Ein Mädchen wird vermisst",
    year: 2020,
    position: "Jefa de locaciones",
    director: "Markus Imboden",
    production: "Lailaps Films GmbH",
    distributor: "",
    awards: [],
    comments:
      "Película para TV · Canal Arte (Alemania/Francia) y ZDF (Alemania). Rodaje en Alemania.",
    importance: 4
  },
  {
    id: 0,
    name: "Väter allein zu Haus – Andreas",
    year: 2020,
    position: "Jefa de locaciones",
    director: "Esther Gronenborn",
    production: "Bavaria Fiction GmbH",
    distributor: "",
    awards: [],
    comments:
      "Película para TV · Canales ARD y Degeto (Alemania). Rodaje en Alemania.",
    importance: 4
  },
  {
    id: 0,
    name: "Billy Kuckuck – Aber bitte mit Sahne!",
    year: 2019,
    position: "Jefa de locaciones",
    director: "Thomas Freundner",
    production: "FFP New Media GmbH",
    distributor: "",
    awards: [],
    comments:
      "Película para TV · Canales ARD y SWR (Alemania). Rodaje en Alemania.",
    importance: 4
  },
  {
    id: 0,
    name: "Contra",
    year: 2019,
    position: "Jefa de locaciones",
    director: "Sönke Wortmann",
    production: "Constantin Film",
    distributor:
      "Constantin Film, Picture Tree International GmbH",
    awards: [
      "Civis Medienpreis (Ganadora) · Civis Cinema Award",
      "Ernst Lubitsch-Preis (Ganadora) · Best Comedic Performance in German Film",
      "Bayerischer Filmpreis 2020 (Ganadora) · Best Actress",
      "German Film Award (Nominada) · Best Feature Film",
      "Jupiter Awards (Nominada) · Best National Film",
      "Festival German Film Ludwigshafen (Nominada) · Rheingold Audience Award"
    ],
    comments:
      "Largometraje cinematográfico rodado en Alemania.",
    importance: 7
  },
  {
    id: 0,
    name: "The Traitor",
    year: 2018,
    position: "Jefa de locaciones",
    director: "Marco Bellocchio",
    production:
      "Alemania (Match Factory Productions GmbH, ZDF), Brasil (Gullane), Francia (Ad Vitam, Arte France Cinéma), Italia (IBC Movie, Kavac Film, RAI Cinema)",
    distributor:
      "Alemania (Pandora Film Verleih, The Match Factory GmbH), Francia (Ad Vitam), Italia (01 Distribution)",
    awards: [
      "Cannes Film Festival · Preestreno",
      "Cannes Film Festival (Nominada) · 2019 Nominee Palme d'Or",
      "Golden Globes Italy (Ganadora) · Best Original Score, Best Actor, Best Director",
      "Nastro d’Argento (Ganadora) · Best Movie, Best Director, Best Actor, Best Supporting Actor, Best Screenplay, Best Score",
      "David di Donatello Awards (Ganadora) · Best Film, Best Director, Best Actor, Best Supporting Actor, Best Original Screenplay, Best Editing",
      "32nd European Film Awards (Nominada) · Best Director, Best Actor",
      "César Awards (Nominada) · Best Foreign Film",
      "y muchos más en: IMDB"
    ],
    comments:
      "Largometraje cinematográfico rodado en Alemania, Brasil, Francia e Italia.",
    importance: 10
  },
  {
    id: 0,
    name: "EneMe",
    year: 2017,
    position: "Jefa de locaciones",
    director: "Jakob Gisik",
    production:
      "Alemania (Try Us GmbH, Jakale Film GmbH & Co. KG), Rusia (Enigma Film GmbH, Interfest)",
    distributor: "",
    awards: [
      "Snowdance Independent Film Festival (Nominada) · Best Feature Film"
    ],
    comments:
      "Largometraje independiente rodado en Alemania y Rusia.",
    importance: 6
  },

  // ---------- ASISTENTE DE LOCACIONES ----------
  {
    id: 0,
    name: "Generation Beziehungsunfähig",
    year: 2020,
    position: "Asistente de locaciones",
    director: "Helena Hufnagel",
    production:
      "Pantaleon Films GmbH, Warner Bros. Entertainment GmbH, Brainpool TV GmbH",
    distributor: "Warner Bros. Pictures Germany",
    awards: [
      "Jupiter Awards (Nominada) · Best Actor, Best Actress, Best Film"
    ],
    comments:
      "Largometraje cinematográfico rodado en Alemania.",
    importance: 4
  },
  {
    id: 0,
    name: "Enkel für Anfänger",
    year: 2019,
    position: "Asistente de locaciones",
    director: "Wolfgang Groos",
    production: "Claussen+Putz Filmproduktion GmbH",
    distributor: "Studiocanal GmbH",
    awards: [],
    comments:
      "Largometraje cinematográfico rodado en Alemania.",
    importance: 3
  },
  {
    id: 0,
    name: "Dem Horizont so nah",
    year: 2018,
    position: "Asistente de locaciones",
    director: "Tim Trachte",
    production:
      "Pantaleon Films GmbH, SevenPictures Film GmbH",
    distributor: "Studiocanal GmbH",
    awards: [
      "Jupiter Awards (Ganadora) · Best National Actor",
      "Bayerischer Filmpreis 2019 (Ganadora) · Best Young Actress"
    ],
    comments:
      "Largometraje cinematográfico rodado en Alemania y Portugal.",
    importance: 4
  },
  {
    id: 0,
    name: "Infiltrada",
    year: 2018,
    position: "Asistente de locaciones",
    director: "Yuval Adler",
    production:
      "Alemania (Little Shark Entertainment GmbH, Neue Bioskop Film GmbH, Match Factory Productions GmbH), Francia (Le Pacte), Israel (Spiro Films)",
    distributor:
      "Alemania (Weltkino Filmverleih GmbH), EE.UU. (Endeavor Content), Francia (Le Pacte)",
    awards: [
      "International Filmfestspiele Berlin (Nominada) · Official Selection"
    ],
    comments:
      "Largometraje cinematográfico rodado en Alemania, Francia e Israel.",
    importance: 5
  },
  {
    id: 0,
    name: "La pequeña traviesa",
    year: 2017,
    position: "Asistente de locaciones",
    director: "Joachim Masannek",
    production:
      "Dreamtool Entertainment GmbH, Deutsche Columbia Pictures",
    distributor:
      "Sony Pictures Entertainment Deutschland GmbH, Arri Media International",
    awards: [],
    comments:
      "Largometraje cinematográfico rodado en Alemania y Bélgica.",
    importance: 4,
  },

  // ---------- ASISTENTE DE PRODUCCIÓN ----------
  {
    id: 0,
    name: "Ich war noch niemals in New York",
    year: 2018,
    position: "Asistente de producción",
    director: "Philipp Stölzl",
    production: "UFA Fiction",
    distributor:
      "Universal Pictures International Germany GmbH",
    awards: [
      "Bayerischer Filmpreis 2019 (Ganadora) · Sonderpreis",
      "Romy (Ganadora) · Best Actor",
      "Romy (Nominada) · Best Production TV-Fiction, Best Film",
      "Deutscher Filmpreis (Nominada) · Best Scene Picture, Best Costume Image, Best Male Role"
    ],
    comments:
      "Largometraje cinematográfico rodado en Alemania y Austria.",
    importance: 3
  },

  // ---------- AYUDANTE DE PRODUCCIÓN ----------
  {
    id: 0,
    name: "So viel Zeit",
    year: 2017,
    position: "Ayudante de producción",
    director: "Philipp Kadelbach",
    production: "UFA Fiction",
    distributor:
      "Global Screen - A Squareone Brand, Leonine Studios",
    awards: [
      "Film Festival Cologne (Nominada) · Reihe: Made in NRW"
    ],
    comments:
      "Largometraje cinematográfico rodado en Alemania.",
    importance: 2
  },
  {
    id: 0,
    name: "Gladbeck",
    year: 2016,
    position: "Ayudante de producción",
    director: "Kilian Riedhof",
    production: "Ziegler Film GmbH & Co. KG",
    distributor: "",
    awards: [
      "Deutscher Fernsehpreis (Ganadora) · Best Series, Best Editing",
      "Bayerischer Fernsehpreis (Ganadora) · Best Script",
      "Grimme-Preis (Nominada) · Fiction",
      "Deutscher Fernsehpreis (Nominada) · Best Actress"
    ],
    comments:
      "Película para TV · Canal ARD y Degeto (Alemania). Rodaje en Alemania.",
    importance: 2
  },

  // ---------- APRENDIZ ----------
  {
    id: 0,
    name: "Unheimlich perfekte Freunde",
    year: 2017,
    position: "Aprendiz",
    director: "Marcus H. Rosenmüller",
    production: "VIAFILM GmbH & Co. KG",
    distributor:
      "SquareOne Entertainment, Arri Media International",
    awards: [
      "Filmfest München (Ganadora) · Kids Media White Elephant Award",
      "Grimme Preis (Nominada) · Young and Kids",
      "Kindertiger (Nominada) · Best Screenplay"
    ],
    comments:
      "Largometraje cinematográfico rodado en Alemania.",
    importance: 1
  }
]

for (let i = 0; i < projects.length; i++) {
  projects[i].id = i
}

export const positions = ["Aprendiz", "Ayudante de producción", "Asistente de producción", "Asistente de locaciones", "Jefa de locaciones", "Jefa de producción"].reverse()
