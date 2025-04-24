"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/badge"
import { projects, positions, projectTypes, type Project } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, User, Award, Building, Tv, Globe, Info, Calendar, Film } from "lucide-react"

export default function Projects() {
  const { t, language } = useLanguage()
  const [sortBy, setSortBy] = useState<string>("year")
  const [filterPosition, setFilterPosition] = useState<string>("all")
  const [filterType, setFilterType] = useState<string>("all")

  const getSortedProjects = () => {
    let filteredProjects = [...projects]

    if (filterPosition !== "all") {
      const positionObj = positions.find((pos) => pos[language as keyof typeof pos] === filterPosition)
      if (positionObj) {
        filteredProjects = filteredProjects.filter(
          (project) => project.position[language as keyof typeof project.position] === filterPosition,
        )
      }
    }

    if (filterType !== "all") {
      const typeObj = projectTypes.find((type) => type[language as keyof typeof type] === filterType)
      if (typeObj) {
        filteredProjects = filteredProjects.filter(
          (project) => project.type[language as keyof typeof project.type] === filterType,
        )
      }
    }

    switch (sortBy) {
      case "year":
        return filteredProjects.sort((a, b) => b.year - a.year)
      case "position":
        return filteredProjects.sort((a: any, b: any) => positions.findIndex((p: any) => p[language] === a.position[language]) - positions.findIndex((p: any) => p[language] === b.position[language]))
      case "importance":
        return filteredProjects.sort((a, b) => b.importance - a.importance)
      default:
        return filteredProjects
    }
  }

  const sortedProjects = getSortedProjects()

  const localizedPositions = positions.map((pos) => pos[language as keyof typeof pos])
  const localizedTypes = projectTypes.map((type) => type[language as keyof typeof type])

  return (
    <section id="projects" className="w-full">
      <Card>
        <CardHeader className="space-y-2">
          <div className="space-y-2">
            <CardTitle className="text-2xl">{t("projects.title")}</CardTitle>
            <CardDescription className="text-base">{t("projects.subtitle")}</CardDescription>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="sort-by" className="text-sm font-medium mb-1 block">
                {t("projects.sortBy")}
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort-by">
                  <SelectValue placeholder={t("projects.sortBy")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year">{t("projects.year")}</SelectItem>
                  <SelectItem value="position">{t("projects.position")}</SelectItem>
                  {/*<SelectItem value="importance">{t("projects.importance")}</SelectItem>*/}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="filter-position" className="text-sm font-medium mb-1 block">
                {t("projects.filterPosition")}
              </label>
              <Select value={filterPosition} onValueChange={setFilterPosition}>
                <SelectTrigger id="filter-position">
                  <SelectValue placeholder={t("projects.filterPosition")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("projects.allPositions")}</SelectItem>
                  {localizedPositions.map((position) => (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="filter-type" className="text-sm font-medium mb-1 block">
                {t("projects.filterType")}
              </label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger id="filter-type">
                  <SelectValue placeholder={t("projects.filterType")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("projects.allTypes")}</SelectItem>
                  {localizedTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-10">
            {sortedProjects.length > 0 ? (
              sortedProjects.map((project) => <ProjectCard key={project.id} project={project} />)
            ) : (
              <p className="text-center py-8 text-muted-foreground">{t("projects.noResults")}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { t, language } = useLanguage()
  const hasAwards = project.awards[language as keyof typeof project.awards].length > 0
  const hasNotes = project.notes
  const hasChannels = project.channels && project.channels.length > 0

  const position = project.position[language as keyof typeof project.position]
  const type = project.type[language as keyof typeof project.type]
  const countries = project.countries[language as keyof typeof project.countries]
  const awards = project.awards[language as keyof typeof project.awards]
  const notes = project.notes ? project.notes[language as keyof typeof project.notes] : null

  return (
    <Card className="overflow-hidden border shadow-md hover:shadow-lg transition-shadow">
      <div className="grid md:grid-cols-[425px_1fr] gap-0">
        <div className="relative h-full min-h-[450px] bg-muted overflow-hidden group">
          <Image
            src={project.image || "/placeholder.svg?height=600&width=425"}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                       flex flex-col justify-end p-6 transition-opacity duration-500
                       group-hover:from-black/90 group-hover:via-black/60">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="default">
                <Calendar className="h-3 w-3 mr-1" />{project.year}
              </Badge>
              <Badge variant="default">
                <Film className="h-3 w-3 mr-1" />{type}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:translate-y-0">
              {project.name}
            </h3>
            <p className="text-white/90 font-medium">{position}</p>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Film className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6 flex flex-col">
          <div className="space-y-4 flex-grow">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-2">
                <User className="h-4 w-4 text-muted-foreground mt-1" />
                <div>
                  <span className="font-medium">{t("projects.director")}:</span>
                  <span className="ml-1 break-words">{project.director}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 text-muted-foreground mt-1" />
                <div>
                  <span className="font-medium">{t("projects.production")}:</span>
                  <span className="ml-1 break-words">{project.production}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Globe className="h-4 w-4 text-muted-foreground mt-1" />
                <div>
                  <span className="font-medium">{t("projects.distribution")}:</span>
                  <span className="ml-1 break-words">{project.distributor}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <div>
                  <span className="font-medium">{t("projects.countries")}:</span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {countries.map((country, idx) => (
                      <Badge key={idx} variant="outline">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {hasChannels && (
                <div className="flex items-start gap-2">
                  <Tv className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <span className="font-medium">{t("projects.channels")}:</span>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.channels.map((channel, idx) => (
                        <Badge key={idx} variant="default">
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {hasAwards && (
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-amber-500" />
                  <h4 className="font-medium text-lg">{t("projects.awards")}:</h4>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {awards.map((award, index) => (
                    <div
                      key={index}
                      className="p-2.5 rounded-md bg-primary/5 border border-primary/10 flex items-start gap-2"
                    >
                      <Award className="h-4 w-4 text-amber-500 mt-0.5" />
                      <p className="text-sm">{award}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {hasNotes && (
            <div className="pt-4 border-t mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-muted-foreground" />
                <h4 className="font-medium">{t("projects.additional_notes")}:</h4>
              </div>
              <p className="text-muted-foreground text-sm bg-primary/5 p-3 rounded-md border border-primary/10">
                {notes}
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
