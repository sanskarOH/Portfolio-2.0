import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold">
              DevPortfolio
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Sanskar Diwedi. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="#home" className="text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#experience" className="text-sm hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
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
                href="https://instagram.com/sanskar.mainz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

