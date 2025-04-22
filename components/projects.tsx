"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { projects, positions, type Project } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

export default function Projects() {
  const { t } = useLanguage()
  const [sortBy, setSortBy] = useState<string>("year")
  const [filterPosition, setFilterPosition] = useState<string>("all")

  const getSortedProjects = () => {
    let filteredProjects = [...projects]

    // Filter by position if needed
    if (filterPosition !== "all") {
      filteredProjects = filteredProjects.filter((project) => project.position === filterPosition)
    }

    // Sort projects
    switch (sortBy) {
      case "year":
        return filteredProjects.sort((a, b) => b.year - a.year)
      case "position":
        return filteredProjects.sort((a, b) => a.position.localeCompare(b.position))
      case "importance":
        return filteredProjects.sort((a, b) => b.importance - a.importance)
      default:
        return filteredProjects
    }
  }

  const sortedProjects = getSortedProjects()

  return (
    <section id="projects" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t("projects.title")}</CardTitle>
          <CardDescription>{t("projects.subtitle")}</CardDescription>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="sort-by" className="text-sm font-medium mb-1 block">
                {t("projects.sortBy")}
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort-by">
                  <SelectValue placeholder="Seleccionar criterio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year">{t("projects.year")}</SelectItem>
                  <SelectItem value="position">{t("projects.position")}</SelectItem>
                  <SelectItem value="importance">{t("projects.importance")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full sm:w-1/2">
              <label htmlFor="filter-position" className="text-sm font-medium mb-1 block">
                {t("projects.filterPosition")}
              </label>
              <Select value={filterPosition} onValueChange={setFilterPosition}>
                <SelectTrigger id="filter-position">
                  <SelectValue placeholder="Seleccionar posición" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("projects.allPositions")}</SelectItem>
                  {positions.map((position) => (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
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
  const { t } = useLanguage()

  return (
    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{project.name}</h3>
            <Badge variant="outline">{project.year}</Badge>
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-medium">{t("projects.position")}:</span> {project.position}
            </p>
            <p>
              <span className="font-medium">{t("projects.director")}:</span> {project.director}
            </p>
            <p>
              <span className="font-medium">{t("projects.production")}:</span> {project.production}
            </p>
            <p>
              <span className="font-medium">{t("projects.distribution")}:</span> {project.distributor}
            </p>

            {project.awards.length > 0 && (
              <div>
                <span className="font-medium">{t("projects.awards")}:</span>
                <ul className="list-disc list-inside ml-2 text-sm">
                  {project.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-muted-foreground text-sm mt-2">{project.comments}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
