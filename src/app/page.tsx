import React from 'react'
import Image from "next/image"
import { Github, Linkedin, Mail } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import MundoWrapper from "@/components/mundo-wrapper"

const content = {
  en: {
    title: "Full Stack Web Developer",
    about: "I'm a passionate full-stack web developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly web applications.",
    projects: "Projects",
    aboutMe: "About Me",
    skills: "Skills",
    contactMe: "Contact Me",
    ecommerce: {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution using Next.js, Django, and PostgreSQL.",
    },
    taskManager: {
      title: "Task Management App",
      description: "A responsive task management application built with Next.js and Tailwind CSS.",
    },
  },
  es: {
    title: "Desarrollador Web Full Stack",
    about: "Soy un desarrollador web full-stack apasionado con experiencia en tecnologías web modernas. Me encanta crear aplicaciones web eficientes, escalables y fáciles de usar.",
    projects: "Proyectos",
    aboutMe: "Sobre Mí",
    skills: "Habilidades",
    contactMe: "Contáctame",
    ecommerce: {
      title: "Plataforma de Comercio Electrónico",
      description: "Una solución de comercio electrónico full-stack utilizando Next.js, Django y PostgreSQL.",
    },
    taskManager: {
      title: "Aplicación de Gestión de Tareas",
      description: "Una aplicación de gestión de tareas responsiva construida con Next.js y Tailwind CSS.",
    },
  },
}

function ProjectCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <Card className="dark:bg-gray-800">
      <CardContent className="p-4">
        <Image src={image} alt={title} width={300} height={200} className="rounded-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
        <AppSidebar />
        <SidebarInset>
          <main className="flex-1 p-8">
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold">Alejandro Ponce</h1>
              <p className="text-xl mt-2">{content.en.title}</p>
            </header>

            <div className="fixed top-4 right-4 z-50 flex space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <section className="mb-12">
              <MundoWrapper />
            </section>

            <section id="projects" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{content.en.projects}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  title={content.en.ecommerce.title}
                  description={content.en.ecommerce.description}
                  image="/placeholder.svg?height=200&width=300"
                />
                <ProjectCard
                  title={content.en.taskManager.title}
                  description={content.en.taskManager.description}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </section>

            <section id="about" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{content.en.aboutMe}</h2>
              <p className="text-lg mb-4">{content.en.about}</p>
              <h3 className="text-xl font-semibold mb-2">{content.en.skills}</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-lg py-1 px-3">Next.js</Badge>
                <Badge variant="secondary" className="text-lg py-1 px-3">Django</Badge>
                <Badge variant="secondary" className="text-lg py-1 px-3">Tailwind CSS</Badge>
                <Badge variant="secondary" className="text-lg py-1 px-3">PostgreSQL</Badge>
              </div>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-semibold mb-4">{content.en.contactMe}</h2>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon">
                  <a href="https://github.com/alejandroponce" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon">
                  <a href="https://linkedin.com/in/alejandroponce" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon">
                  <a href="mailto:alejandro@example.com">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </section>
          </main>
        </SidebarInset>
      </div>
      <footer className="bg-gray-200 dark:bg-gray-800 py-4 text-center">
        <p>&copy; 2023 Alejandro Ponce. All rights reserved.</p>
      </footer>
    </SidebarProvider>
  )
}

