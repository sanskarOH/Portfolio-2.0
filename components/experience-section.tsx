import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

type Experience = {
  id: number
  organization: string
  position: string
  period: string
  description: string
  technologies: string[]
  githubUrl?: string
  websiteUrl?: string
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 1,
      organization: "Alexa Developers CLUB SRM",
      position: "Backend Developer",
      period: "Jan 2023 - Present",
      description:
        "Managed full registration backend including payment and registration with continuous integration and deployment. Implemented secure payment processing and user authentication systems.",
      technologies: ["Node.js", "Express", "MongoDB", "CI/CD", "Payment Gateway"],
      githubUrl: "https://www.alexadevsrm.org",
      websiteUrl: "https://alexadevsrm.org"
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            My professional journey and the projects I've contributed to throughout my career.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{experience.organization}</CardTitle>
                    <CardDescription className="text-lg font-medium mt-1">{experience.position}</CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {experience.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{experience.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  {experience.githubUrl && (
                    <Link
                      href={experience.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View Repository
                    </Link>
                  )}
                  {experience.websiteUrl && (
                    <Link
                      href={experience.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit Website
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

