export type Project = {
  id: number
  name: string
  year: number
  position: {
    es: string
    en: string
    de: string
  }
  director: string
  production: string
  distributor: string
  awards: {
    es: string[]
    en: string[]
    de: string[]
  }
  notes?: {
    es: string
    en: string
    de: string
  }
  importance: number
  countries: {
    es: string[]
    en: string[]
    de: string[]
  }
  type: {
    es: string
    en: string
    de: string
  }
  channels: string[]
  image?: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Tatort - Das Böse in dir",
    year: 2025,
    position: { es: "Jefa de producción", en: "Unit Production Manager", de: "Produktionsleiterin" },
    director: "Dir. Luzie Loose",
    production: "Bavaria Fiction GmbH",
    distributor: "Unreleased",
    awards: { es: [], en: [], de: [] },
    importance: 8,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["SR"],
    image: "/unreleased.png"
  },
  {
    id: 2,
    name: "Tatort - Das Ende der Nacht",
    year: 2024,
    position: { es: "Jefa de producción", en: "Unit Production Manager", de: "Produktionsleiterin" },
    director: "Dir. Tini Tüllmann",
    production: "Bavaria Fiction GmbH",
    distributor: "TV",
    awards: { es: [], en: [], de: [] },
    importance: 8,
    countries: {
      es: ["Alemania", "Francia"],
      en: ["Germany", "France"],
      de: ["Deutschland", "Frankreich"]
    },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["Degeto", "SR"],
    image: "/tatort_dasenddernacht.jpg"
  },
  {
    id: 3,
    name: "Mord mit Aussicht",
    year: 2023,
    position: { es: "Jefa de producción", en: "Unit Production Manager", de: "Produktionsleiterin" },
    director: "Markus Sehr, Felix Stienz, Oliver Schmitz",
    production: "Claussen+Putz Filmproduktion GmbH",
    distributor: "TV",
    awards: { es: [], en: [], de: [] },
    notes: { es: "Sustitución de dos semanas", en: "Two-week replacement", de: "Zweiwöchige Vertretung" },
    importance: 8,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Serie de TV", en: "TV series", de: "TV-Serie" },
    channels: ["ARD", "WDR"],
    image: "/mordmitaussicht.jpeg"
  },

  /* ------------------------ JEFA DE LOCACIONES ------------------------ */
  {
    id: 4,
    name: "Rose",
    year: 2024,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Dir. Markus Schleinzer",
    production: "Schubert",
    distributor: "Austria (Filmladen Filmverleih GmbH), Alemania (Piffl Medien GmbH)",
    awards: { es: [], en: [], de: [] },
    importance: 4,
    countries: {
      es: ["Alemania", "Austria"],
      en: ["Germany", "Austria"],
      de: ["Deutschland", "Österreich"]
    },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/unreleased.png"
  },
  {
    id: 5,
    name: "Merz gegen Merz - Geheimnisse",
    year: 2024,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Dir. Felix Stienz",
    production: "MadeFor Film GmbH",
    distributor: "TV",
    awards: {
      es: ["Festival des Deutschen Films (Nominada) · Rheingold Audience Award"],
      en: ["Festival des Deutschen Films (Nominated) · Rheingold Audience Award"],
      de: ["Festival des Deutschen Films (Nominiert) · Rheingold Publikumspreis"]
    },
    importance: 5,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["ZDF"],
    image: "/merzgegenmerz.jpg"
  },
  {
    id: 6,
    name: "The Perfect Miss",
    year: 2023,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Sabine Boss, Nicolas Berse-Gilles",
    production: "BTF GmbH, German Motion Picture Fund, Bildundtonfabrik",
    distributor: "Streaming",
    awards: {
      es: ["Jupiter Awards (Nominada) · Best Actress, Best Actor, Best Series (National)"],
      en: ["Jupiter Awards (Nominated) · Best Actress, Best Actor, Best Series (National)"],
      de: ["Jupiter Awards (Nominiert) · Beste Schauspielerin, Bester Schauspieler, Beste Serie (National)"]
    },
    importance: 7,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Serie de TV", en: "TV series", de: "TV-Serie" },
    channels: ["Amazon Prime Video"],
    image: "/perfektverpasst.jpg"
  },
  {
    id: 7,
    name: "Mord mit Aussicht",
    year: 2023,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Dir. Felix Stienz",
    production: "Claussen+Putz Filmproduktion GmbH",
    distributor: "TV",
    awards: { es: [], en: [], de: [] },
    importance: 4,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Serie de TV", en: "TV series", de: "TV-Serie" },
    channels: ["ARD", "WDR"],
    image: "/mordmitaussicht.jpeg"
  },
  {
    id: 8,
    name: "Briefe aus dem Jenseits",
    year: 2022,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Dir. Niki Stein",
    production: "Lailaps Films GmbH",
    distributor: "TV",
    awards: {
      es: ["Filmfest Hamburg (Nominada) · Best German TV Production"],
      en: ["Filmfest Hamburg (Nominated) · Best German TV Production"],
      de: ["Filmfest Hamburg (Nominiert) · Beste deutsche TV-Produktion"]
    },
    importance: 5,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["Arte", "ZDF"],
    image: "/briefeausdemjenseits.jpg"
  },
  {
    id: 9,
    name: "Mi dulce niña",
    year: 2022,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Isabel Kleefeld, Julian Pörksen",
    production: "Constantin Television GmbH",
    distributor: "Streaming",
    awards: {
      es: [
        "International Emmy Awards (Ganadora) · Best TV Movie / Mini-Series",
        "Deutsche Akademie für Fernsehen (Ganadora) · Best Editing TV/Stream, Best Lead Performance",
        "Blauer Panther - TV & Streaming-Award (Nominada) · Best Series",
        "Deutscher Fernsehpreis (Nominada) · Best Drama Series",
        "Deutsche Akademie für Fernsehen (Nominada) · Best Screenplay"
      ],
      en: [
        "International Emmy Awards (Winner) · Best TV Movie / Mini-Series",
        "German Television Academy (Winner) · Best Editing TV/Stream, Best Lead Performance",
        "Blauer Panther - TV & Streaming Award (Nominated) · Best Series",
        "German Television Award (Nominated) · Best Drama Series",
        "German Television Academy (Nominated) · Best Screenplay"
      ],
      de: [
        "International Emmy Awards (Gewinner) · Best TV Movie / Mini-Series",
        "Deutsche Akademie für Fernsehen (Gewinner) · Best Editing TV/Stream, Best Lead Performance",
        "Blauer Panther - TV & Streaming-Award (Nominiert) · Best Series",
        "Deutscher Fernsehpreis (Nominiert) · Best Drama Series",
        "Deutsche Akademie für Fernsehen (Nominiert) · Best Screenplay"
      ]
    },
    importance: 10,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Miniserie", en: "Miniseries", de: "Miniserie" },
    channels: ["Netflix"],
    image: "/liebeskind.jpg"
  },
  {
    id: 10,
    name: "Alice",
    year: 2022,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Dir. Nicole Weegmann",
    production: "Neue Schönhauser Filmproduktion GmbH",
    distributor: "TV",
    awards: {
      es: [
        "Grimme Award (Nominada) · Special Acting Performance",
        "Deutscher Fernsehpreis (Nominada) · Best Actress",
        "Blauer Panther - TV & Streaming-Award (Nominada) · Best Actress",
        "Deutsche Akademie für Fernsehen (Nominada) · Best Casting, Best Protagonist Actress"
      ],
      en: [
        "Grimme Award (Nominated) · Special Acting Performance",
        "German Television Award (Nominated) · Best Actress",
        "Blauer Panther - TV & Streaming Award (Nominated) · Best Actress",
        "German Television Academy (Nominated) · Best Casting, Best Lead Actress"
      ],
      de: [
        "Grimme-Preis (Nominiert) · Besondere schauspielerische Leistung",
        "Deutscher Fernsehpreis (Nominiert) · Beste Schauspielerin",
        "Blauer Panther - TV & Streaming-Award (Nominiert) · Beste Schauspielerin",
        "Deutsche Akademie für Fernsehen (Nominiert) · Bestes Casting, Beste Hauptdarstellerin"
      ]
    },
    importance: 7,
    countries: {
      es: ["Alemania", "Belgica", "Francia"],
      en: ["Germany", "Belgium", "France"],
      de: ["Deutschland", "Belgien", "Frankreich"]
    },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["Degeto", "RBB", "WDR"],
    image: "/alice.jpg"
  },
  {
    id: 11,
    name: "Wo ist meine Schwester?",
    year: 2021,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Dir. Markus Imboden",
    production: "Lailaps Films GmbH",
    distributor: "TV",
    awards: {
      es: ["Filmfest Hamburg (Nominada) · Best German TV Production"],
      en: ["Filmfest Hamburg (Nominated) · Best German TV Production"],
      de: ["Filmfest Hamburg (Nominiert) · Beste deutsche TV-Produktion"]
    },
    importance: 5,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["Arte", "ZDF"],
    image: "/woistmeineschwester.png"
  },
  {
    id: 12,
    name: "Unter anderen Umständen - Dämonen",
    year: 2021,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Dir. Judith Kennel",
    production: "Network Movie Film und Fernsehproduktion GmbH",
    distributor: "TV",
    awards: { es: [], en: [], de: [] },
    importance: 4,
    countries: {
      es: ["Alemania", "Dinamarca"],
      en: ["Germany", "Denmark"],
      de: ["Deutschland", "Dänemark"]
    },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["ZDF"],
    image: "/unteranderenumstanden.jpg"
  },
  {
    id: 13,
    name: "Mittagsstunde",
    year: 2021,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Dir. Lars Jessen",
    production: "Florida Film GmbH",
    distributor: "Austria (Filmladen Filmverleih GmbH), Alemania (Majestic Filmverleih GmbH)",
    awards: {
      es: [
        "Jupiter Awards (Ganadora) · Special Jury Prize",
        "Gilde Filmpreis (Ganadora) · Best National Film",
        "Deutscher Filmpreis (Nominada) · Best Supporting Actress, Best Leading Actor"
      ],
      en: [
        "Jupiter Awards (Winner) · Special Jury Prize",
        "Gilde Film Award (Winner) · Best National Film",
        "German Film Award (Nominated) · Best Supporting Actress, Best Leading Actor"
      ],
      de: [
        "Jupiter Awards (Gewinner) · Spezialpreis der Jury",
        "Gilde Filmpreis (Gewinner) · Bester nationaler Film",
        "Deutscher Filmpreis (Nominiert) · Beste Nebendarstellerin, Bester Hauptdarsteller"
      ]
    },
    importance: 6,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/mitagsstunde.jpg"
  },
  {
    id: 14,
    name: "Faking Hitler",
    year: 2021,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Tobi Baumann, Wolfgang Groos",
    production: "UFA Fiction",
    distributor: "TV",
    awards: {
      es: [
        "The German Television Award (Ganadora) · Best Drama Series, Best Actor",
        "Der Deutsche Fernsehpreis (Nominada) · Best Drama-Serie, Best Musik Fiktion",
        "German Drama Award (Nominada) · Actor/Actress in a comedic role",
        "TeleVisionale (Nominada) · TV Serie"
      ],
      en: [
        "German Television Award (Winner) · Best Drama Series, Best Actor",
        "German Television Award (Nominated) · Best Drama Series, Best Music Fiction",
        "German Drama Award (Nominated) · Actor/Actress in a comedic role",
        "TeleVisionale (Nominated) · TV Series"
      ],
      de: [
        "Deutscher Fernsehpreis (Gewinner) · Beste Drama-Serie, Bester Schauspieler",
        "Deutscher Fernsehpreis (Nominiert) · Beste Drama-Serie, Beste Musik Fiktion",
        "German Drama Award (Nominiert) · Schauspieler/Schauspielerin in komischer Rolle",
        "TeleVisionale (Nominiert) · TV-Serie"
      ]
    },
    importance: 7,
    countries: { es: ["Alemania", "Belgica"], en: ["Germany", "Belgium"], de: ["Deutschland", "Belgien"] },
    type: { es: "Miniserie", en: "Miniseries", de: "Miniserie" },
    channels: ["RTL+", "TVNOW"],
    image: "/fakinghitler.jpg"
  },
  {
    id: 15,
    name: "Ein Mädchen wird vermisst",
    year: 2020,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Markus Imboden",
    production: "Lailaps Films GmbH",
    distributor: "TV",
    awards: { es: [], en: [], de: [] },
    importance: 4,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["Arte", "ZDF"],
    image: "/einmadchenwirdvermisst.jpg"
  },
  {
    id: 16,
    name: "Väter allein zu Haus - Andreas",
    year: 2020,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Esther Gronenborn",
    production: "Bavaria Fiction GmbH",
    distributor: "TV",
    awards: { es: [], en: [], de: [] },
    importance: 4,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["ARD", "Degeto"],
    image: "/vateralleinzuhaus.jpg"
  },
  {
    id: 17,
    name: "Billy Kuckuck - Aber bitte mit Sahne!",
    year: 2019,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Thomas Freundner",
    production: "FFP New Media GmbH",
    distributor: "TV",
    awards: { es: [], en: [], de: [] },
    importance: 4,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["ARD", "SWR"],
    image: "/aberbittemitsahne.webp"
  },
  {
    id: 18,
    name: "Contra",
    year: 2019,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Sönke Wortmann",
    production: "Constantin Film",
    distributor: "Constantin Film, Picture Tree International GmbH",
    awards: {
      es: [
        "Civis Medienpreis (Ganadora) · Civis Cinema Award",
        "Ernst Lubitsch-Preis (Ganadora) · Best Comedic Performance in German Film",
        "Bayerischer Filmpreis 2020 (Ganadora) · Best Actress",
        "German Film Award (Nominada) · Best Feature Film",
        "Jupiter Awards (Nominada) · Best National Film",
        "Festival German Film Ludwigshafen (Nominada) · Rheingold Audience Award"
      ],
      en: [
        "Civis Media Prize (Winner) · Civis Cinema Award",
        "Ernst Lubitsch Award (Winner) · Best Comedic Performance in German Film",
        "Bavarian Film Award 2020 (Winner) · Best Actress",
        "German Film Award (Nominated) · Best Feature Film",
        "Jupiter Awards (Nominated) · Best National Film",
        "Festival German Film Ludwigshafen (Nominated) · Rheingold Audience Award"
      ],
      de: [
        "Civis Medienpreis (Gewinner) · Civis Cinema Award",
        "Ernst-Lubitsch-Preis (Gewinner) · Beste komödiantische Leistung",
        "Bayerischer Filmpreis 2020 (Gewinner) · Beste Schauspielerin",
        "Deutscher Filmpreis (Nominiert) · Bester Spielfilm",
        "Jupiter Awards (Nominiert) · Bester nationaler Film",
        "Festival des deutschen Films Ludwigshafen (Nominiert) · Rheingold Publikumspreis"
      ]
    },
    importance: 7,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/contra.jpg"
  },
  {
    id: 19,
    name: "The Traitor",
    year: 2018,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Marco Bellocchio",
    production:
      "Alemania (Match Factory Productions GmbH, ZDF), Brasil (Gullane), Francia (Ad Vitam, Arte France Cinéma), Italia (IBC Movie, Kavac Film, RAI Cinema)",
    distributor:
      "Alemania (Pandora Film Verleih, The Match Factory GmbH), Francia (Ad Vitam), Italia (01 Distribution)",
    awards: {
      es: [
        "Cannes Film Festival · Preestreno",
        "Cannes Film Festival (Nominada) · 2019 Nominee Palme d'Or",
        "Golden Globes Italy (Ganadora) · Best Original Score, Best Actor, Best Director",
        "Nastro d’Argento (Ganadora) · Best Movie, Best Director, Best Actor, Best Supporting Actor, Best Screenplay, Best Score",
        "David di Donatello Awards (Ganadora) · Best Film, Best Director, Best Actor, Best Supporting Actor, Best Original Screenplay, Best Editing",
        "32nd European Film Awards (Nominada) · Best Director, Best Actor",
        "César Awards (Nominada) · Best Foreign Film",
        "y muchos más en IMDB"
      ],
      en: [
        "Cannes Film Festival · Premiere",
        "Cannes Film Festival (Nominated) · 2019 Palme d'Or",
        "Golden Globes Italy (Winner) · Best Original Score, Best Actor, Best Director",
        "Nastro d’Argento (Winner) · Best Film, Best Director, Best Actor, Best Supporting Actor, Best Screenplay, Best Score",
        "David di Donatello Awards (Winner) · Best Film, Best Director, Best Actor, Best Supporting Actor, Best Original Screenplay, Best Editing",
        "32nd European Film Awards (Nominated) · Best Director, Best Actor",
        "César Awards (Nominated) · Best Foreign Film",
        "and many more on IMDB"
      ],
      de: [
        "Filmfestspiele von Cannes · Premiere",
        "Filmfestspiele von Cannes (Nominiert) · 2019 Palme d'Or",
        "Golden Globes Italy (Gewinner) · Beste Filmmusik, Bester Schauspieler, Beste Regie",
        "Nastro d’Argento (Gewinner) · Bester Film, Beste Regie, Bester Schauspieler, Beste Nebendarsteller, Bestes Drehbuch, Beste Filmmusik",
        "David-di-Donatello-Preis (Gewinner) · Bester Film, Beste Regie, Bester Schauspieler, Beste Nebendarsteller, Bestes Originaldrehbuch, Bester Schnitt",
        "32. Europäischer Filmpreis (Nominiert) · Beste Regie, Bester Schauspieler",
        "César (Nominiert) · Bester ausländischer Film",
        "und viele weitere auf IMDB"
      ]
    },
    importance: 10,
    countries: {
      es: ["Alemania", "Brasil", "Francia", "Italia"],
      en: ["Germany", "Brazil", "France", "Italy"],
      de: ["Deutschland", "Brasilien", "Frankreich", "Italien"]
    },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/iltraditore.jpg"
  },
  {
    id: 20,
    name: "EneMe",
    year: 2017,
    position: { es: "Jefa de locaciones", en: "Location Manager", de: "Location-Managerin" },
    director: "Jakob Gisik",
    production:
      "Alemania (Try Us GmbH, Jakale Film GmbH & Co. KG), Rusia (Enigma Film GmbH, Interfest)",
    distributor: "Cineplex Capitol Kassel",
    awards: {
      es: ["Snowdance Independent Film Festival (Nominada) · Best Feature Film"],
      en: ["Snowdance Independent Film Festival (Nominated) · Best Feature Film"],
      de: ["Snowdance Independent Film Festival (Nominiert) · Bester Spielfilm"]
    },
    importance: 6,
    countries: { es: ["Alemania", "Rusia"], en: ["Germany", "Russia"], de: ["Deutschland", "Russland"] },
    type: { es: "Largometraje independiente", en: "Independent feature", de: "Indie-Spielfilm" },
    channels: [],
    image: "/eneme.jpg"
  },

  /* ---------------------- ASISTENTE DE LOCACIONES --------------------- */
  {
    id: 21,
    name: "Generation Beziehungsunfähig",
    year: 2020,
    position: { es: "Asistente de locaciones", en: "Location Assistant", de: "Locationsassistentin" },
    director: "Helena Hufnagel",
    production:
      "Pantaleon Films GmbH, Warner Bros. Entertainment GmbH, Brainpool TV GmbH",
    distributor: "Warner Bros. Pictures Germany",
    awards: {
      es: ["Jupiter Awards (Nominada) · Best Actor, Best Actress, Best Film"],
      en: ["Jupiter Awards (Nominated) · Best Actor, Best Actress, Best Film"],
      de: ["Jupiter Awards (Nominiert) · Bester Schauspieler, Beste Schauspielerin, Bester Film"]
    },
    importance: 4,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/generationbeziehungsunfahig.jpg"
  },
  {
    id: 22,
    name: "Enkel für Anfänger",
    year: 2019,
    position: { es: "Asistente de locaciones", en: "Location Assistant", de: "Locationsassistentin" },
    director: "Wolfgang Groos",
    production: "Claussen+Putz Filmproduktion GmbH",
    distributor: "Studiocanal GmbH",
    awards: { es: [], en: [], de: [] },
    importance: 3,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/enkelfuranfanger.jpg"
  },
  {
    id: 23,
    name: "Dem Horizont so nah",
    year: 2018,
    position: { es: "Asistente de locaciones", en: "Location Assistant", de: "Locationsassistentin" },
    director: "Tim Trachte",
    production: "Pantaleon Films GmbH, SevenPictures Film GmbH",
    distributor: "Studiocanal GmbH",
    awards: {
      es: [
        "Jupiter Awards (Ganadora) · Best National Actor",
        "Bayerischer Filmpreis 2019 (Ganadora) · Best Young Actress"
      ],
      en: [
        "Jupiter Awards (Winner) · Best National Actor",
        "Bavarian Film Award 2019 (Winner) · Best Young Actress"
      ],
      de: [
        "Jupiter Awards (Gewinner) · Bester nationaler Schauspieler",
        "Bayerischer Filmpreis 2019 (Gewinner) · Beste Nachwuchsschauspielerin"
      ]
    },
    importance: 4,
    countries: { es: ["Alemania", "Portugal"], en: ["Germany", "Portugal"], de: ["Deutschland", "Portugal"] },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/demhorizont.jpg"
  },
  {
    id: 24,
    name: "The Operative",
    year: 2018,
    position: { es: "Asistente de locaciones", en: "Location Assistant", de: "Locationsassistentin" },
    director: "Yuval Adler",
    production:
      "Alemania (Little Shark Entertainment GmbH, Neue Bioskop Film GmbH, Match Factory Productions GmbH), Francia (Le Pacte), Israel (Spiro Films)",
    distributor:
      "Alemania (Weltkino Filmverleih GmbH), EE.UU. (Endeavor Content), Francia (Le Pacte)",
    awards: {
      es: ["International Filmfestspiele Berlin (Nominada) · Official Selection"],
      en: ["Berlin International Film Festival (Nominated) · Official Selection"],
      de: ["Berlinale (Nominiert) · Official Selection"]
    },
    importance: 5,
    countries: {
      es: ["Alemania", "Francia", "Israel"],
      en: ["Germany", "France", "Israel"],
      de: ["Deutschland", "Frankreich", "Israel"]
    },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/theoperative.jpg"
  },
  {
    id: 25,
    name: "Liliane Susewind - Ein tierisches Abenteuer",
    year: 2017,
    position: { es: "Asistente de locaciones", en: "Location Assistant", de: "Locationsassistentin" },
    director: "Joachim Masannek",
    production: "Dreamtool Entertainment GmbH, Deutsche Columbia Pictures",
    distributor:
      "Sony Pictures Entertainment Deutschland GmbH, Arri Media International",
    awards: { es: [], en: [], de: [] },
    importance: 4,
    countries: { es: ["Alemania", "Belgica"], en: ["Germany", "Belgium"], de: ["Deutschland", "Belgien"] },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/lilianesusewind.jpg"
  },

  /* -------------------- ASISTENTE DE PRODUCCIÓN ----------------------- */
  {
    id: 26,
    name: "Ich war noch niemals in New York",
    year: 2018,
    position: { es: "Asistente de producción", en: "Production Assistant", de: "Produktionsassistentin" },
    director: "Philipp Stölzl",
    production: "UFA Fiction",
    distributor: "Universal Pictures International Germany GmbH",
    awards: {
      es: [
        "Bayerischer Filmpreis 2019 (Ganadora) · Sonderpreis",
        "Romy (Ganadora) · Best Actor",
        "Romy (Nominada) · Best Production TV-Fiction, Best Film",
        "Deutscher Filmpreis (Nominada) · Best Scene Picture, Best Costume Image, Best Male Role"
      ],
      en: [
        "Bavarian Film Award 2019 (Winner) · Special Prize",
        "Romy (Winner) · Best Actor",
        "Romy (Nominated) · Best Production TV-Fiction, Best Film",
        "German Film Award (Nominated) · Best Scene Picture, Best Costume Design, Best Actor"
      ],
      de: [
        "Bayerischer Filmpreis 2019 (Gewinner) · Sonderpreis",
        "Romy (Gewinner) · Bester Schauspieler",
        "Romy (Nominiert) · Beste Produktion TV-Fiction, Bester Film",
        "Deutscher Filmpreis (Nominiert) · Bestes Szenenbild, Bestes Kostüm, Bester Darsteller"
      ]
    },
    importance: 3,
    countries: { es: ["Alemania", "Austria"], en: ["Germany", "Austria"], de: ["Deutschland", "Österreich"] },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/ichwarnochniemalsinnewyork.jpg"
  },

  /* --------------------- AYUDANTE DE PRODUCCIÓN ---------------------- */
  {
    id: 27,
    name: "So viel Zeit",
    year: 2017,
    position: { es: "Ayudante de producción", en: "Production Runner", de: "Set-Runner" },
    director: "Philipp Kadelbach",
    production: "UFA Fiction",
    distributor: "Global Screen - A Squareone Brand, Leonine Studios",
    awards: {
      es: ["Film Festival Cologne (Nominada) · Reihe: Made in NRW"],
      en: ["Film Festival Cologne (Nominated) · Section: Made in NRW"],
      de: ["Film Festival Cologne (Nominiert) · Reihe: Made in NRW"]
    },
    importance: 2,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/sovielzeit.jpg"
  },
  {
    id: 28,
    name: "Gladbeck",
    year: 2016,
    position: { es: "Ayudante de producción", en: "Production Runner", de: "Set-Runner" },
    director: "Kilian Riedhof",
    production: "Ziegler Film GmbH & Co. KG",
    distributor: "TV",
    awards: {
      es: [
        "Deutscher Fernsehpreis (Ganadora) · Best Series, Best Editing",
        "Bayerischer Fernsehpreis (Ganadora) · Best Script",
        "Grimme-Preis (Nominada) · Fiction",
        "Deutscher Fernsehpreis (Nominada) · Best Actress"
      ],
      en: [
        "German Television Award (Winner) · Best Series, Best Editing",
        "Bavarian Television Award (Winner) · Best Script",
        "Grimme Award (Nominated) · Fiction",
        "German Television Award (Nominated) · Best Actress"
      ],
      de: [
        "Deutscher Fernsehpreis (Gewinner) · Beste Serie, Bester Schnitt",
        "Bayerischer Fernsehpreis (Gewinner) · Bestes Drehbuch",
        "Grimme-Preis (Nominiert) · Fiktion",
        "Deutscher Fernsehpreis (Nominiert) · Beste Schauspielerin"
      ]
    },
    importance: 2,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Película para TV", en: "Television film", de: "Fernsehfilm" },
    channels: ["ARD", "Degeto"],
    image: "/gladbeck.jpg"
  },

  /* ---------------------------- APRENDIZ ----------------------------- */
  {
    id: 29,
    name: "Unheimlich perfekte Freunde",
    year: 2017,
    position: { es: "Aprendiz", en: "Trainee", de: "Praktikantin" },
    director: "Marcus H. Rosenmüller",
    production: "VIAFILM GmbH & Co. KG",
    distributor: "SquareOne Entertainment, Arri Media International",
    awards: {
      es: [
        "Filmfest München (Ganadora) · Kids Media White Elephant Award",
        "Grimme Preis (Nominada) · Young and Kids",
        "Kindertiger (Nominada) · Best Screenplay"
      ],
      en: [
        "Filmfest München (Winner) · Kids Media White Elephant Award",
        "Grimme Award (Nominated) · Young and Kids",
        "Kindertiger (Nominated) · Best Screenplay"
      ],
      de: [
        "Filmfest München (Gewinner) · Kids Media White Elephant Award",
        "Grimme-Preis (Nominiert) · Kinder und Jugend",
        "Kindertiger (Nominiert) · Bestes Drehbuch"
      ]
    },
    importance: 1,
    countries: { es: ["Alemania"], en: ["Germany"], de: ["Deutschland"] },
    type: { es: "Largometraje cinematográfico", en: "Feature film", de: "Kinospielfilm" },
    channels: [],
    image: "/unheimlichperfektefreunde.jpg"
  }
]

const positionOrders = ["Jefa de producción", "Jefa de locaciones", "Asistente de locaciones", "Asistente de producción", "Ayudante de producción", "Aprendiz"]
function sortByPosition(a: any, b: any): number {
  return positionOrders.indexOf(a.es) - positionOrders.indexOf(b.es);
}

function translatableIndexOf(array: any[], item: any): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i].es == item.es) {
      return i;
    }
  }
  return -1;
}

export const positions = projects.flatMap(p => p.position).filter((value, index, self) => translatableIndexOf(self, value) == index).sort(sortByPosition)

export const projectTypes = projects.flatMap(p => p.type).filter((value, index, self) => translatableIndexOf(self, value) == index)

export const channels = projects.flatMap(p => p.channels).filter((value, index, self) => translatableIndexOf(self, value) == index)
