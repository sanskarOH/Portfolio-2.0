import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Server, Terminal, Layers, Cloud, GitBranch } from "lucide-react"

type Skill = {
  name: string
  icon: React.ReactNode
  items: string[]
}

export function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Frontend",
      icon: <Layout className="h-8 w-8 text-primary" />,
      items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      name: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: ["Node.js", "Express", "REST APIs"],
    },
    {
      name: "Databases",
      icon: <Database className="h-8 w-8 text-primary" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"],
    },
    {
      name: "DevOps",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      items: ["CI/CD", "Vercel", "Netlify"],
    },
    {
      name: "Tools",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            I've worked with a variety of technologies and tools in the web development ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-bold">My Development Process</h3>
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-4 space-y-2">
                <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Planning</h4>
                <p className="text-sm text-muted-foreground">Requirements gathering and architecture design</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 space-y-2">
                <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Microservices Design</h4>
                <p className="text-sm text-muted-foreground">Designing microservices suited best</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 space-y-2">
                <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Development</h4>
                <p className="text-sm text-muted-foreground">Clean, maintainable code with best practices</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 space-y-2">
                <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Deployment</h4>
                <p className="text-sm text-muted-foreground">Testing, CI/CD, and monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

