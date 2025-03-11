"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Backend Developer"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration with neutral colors instead of blue */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-200/40 rounded-full blur-3xl dark:bg-neutral-800/20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-300/40 rounded-full blur-3xl dark:bg-neutral-700/20" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary">Sanskar Diwedi</span>
            </h1>
            <div className="h-8 md:h-10">
              <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                {typedText}
                <span className="animate-blink">|</span>
              </p>
            </div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I design and develop scalable, efficient, and secure backend systems using modern technologies to power
              high-performance applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/sanskarOH" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/sanskardiwedi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://twitter.com/https_sanskar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

