"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  category: string
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "AttendHub",
      description:
        "A full-stack chrome extension to automatically record attendance of a google meeet and upload it to the google sheets automatically.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML & CSS", "Node.js", "MongoDB", "Chrome Web Scripting"],
      demoUrl: "https://sanskaroh.github.io/AttendHub/",
      githubUrl: "https://github.com/sanskarOH/AttendHub",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Quick-Sign",
      description: "A small project to download your signatures on the run, just sign , download and upload.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "quick-sign-nine.vercel.app",
      githubUrl: "https://github.com/sanskarOH/QuickSign",
      category: "frontend",
    },
    {
      id: 3,
      title: "BackAuth",
      description:
        "A simple yet robust JWT authentication system built in node.js",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      demoUrl: "https://github.com/sanskarOH/backauth",
      githubUrl: "https://github.com/sanskarOH/backauth",
      category: "backend",
      
    },
    {
      id: 4,
      title: "Simple Razor",
      description:
        "Integration of razorpay payments for a plug and play payments system.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML & CSS", "MongoDB", "Razorpay", "Node.Js"],
      demoUrl: "https://github.com/sanskarOH/simple-razor",
      githubUrl: "https://github.com/sanskarOH/simple-razor",
      category: "fullstack",
    },
    {
      id: 5,
      
      title: "Portfolio",
      description: "A minimalist portfolio built in next.js and tailwindcss.",
      image: "/image.jpg",
      tags: ["Next.js", "tailwindCss"],
      demoUrl: "https://sanskardiwedi.in",
      githubUrl: "https://github.com/sanskarOH/Portfolio-2.0",
      category: "frontend",
    },
    {
      id: 6,
      title: "Simple Product API",
      description: "A simple product and variat sorter api built in node.js",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "MongoDB", "JavaScript","Express"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/sanskarOH/variant",
      category: "frontend",
    },
  ]

  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-neutral-100/50 dark:bg-neutral-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
              All
            </Button>
            <Button variant={filter === "frontend" ? "default" : "outline"} onClick={() => setFilter("frontend")}>
              Frontend
            </Button>
            <Button variant={filter === "backend" ? "default" : "outline"} onClick={() => setFilter("backend")}>
              Backend
            </Button>
            <Button variant={filter === "fullstack" ? "default" : "outline"} onClick={() => setFilter("fullstack")}>
              Full Stack
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

