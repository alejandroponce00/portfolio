"use client"
import { useLanguage } from "@/contexts/LanguageContext"
import React from 'react'
import Image from "next/image"
import { Github, Linkedin, Mail, Globe, Code } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import MundoWrapper from "@/components/mundo-wrapper"

const content = {
  en: {
    title: "Full Stack Web Developer",
    about: "Hello, I am a fullstack developer with experience creating high-performance web applications. My focus is on building attractive and efficient web solutions using a variety of cutting-edge technologies. My goal is to combine design and functionality to deliver exceptional digital experiences.",
    projects: "Projects",
    aboutMe: "About Me",
    skills: "Skills",
    contactMe: "Contact Me",
    visitWebsite: "Visit Website",
    viewCode: "View Code",
    halloween: {
      title: "Halloween Wallpapers <Hackaton Cloudinary>",
      description: "change the background of your photo for a halloween one, made with nextjs, tailwind and cloudinari",
      website: "https://halloween-photo.vercel.app/",
      github: "https://github.com/alejandroponce00/halloween_photo",
    },
    turnos: {
      title: "Manage shifts in a mechanical workshop: record vehicles, owners, repairs and entry hours. Frontend deployed in vercel and backend in railway ",
      description: "A responsive task management app built with Next.js and Tailwind CSS.",
      website: "https://taller-frontend-beta.vercel.app/",
      github: "https://github.com/alejandroponce00/taller_frontend",
    },
    panel_mecanicos: {
      title: "Mechanical Panel",
      description: "This is another front connected to the back of turnos_taller. It is designed to be used by mechanics",
      website: "https://panel-mecanico.vercel.app/",
      github: "https://github.com/alejandroponce00/panel_mecanico",
    },
  },
  es: {
    title: "Desarrollador Web Full Stack",
    about: " Hola, soy un desarrollador fullstack con experiencia en la creación de aplicaciones web de alto rendimiento.Mi enfoque se centra en la construcción de soluciones web atractivas y eficientes utilizando una variedad de tecnologías de vanguardia. Mi objetivo es combinar diseño y funcionalidad para ofrecer experiencias digitales excepcionales.",
    projects: "Proyectos",
    aboutMe: "Sobre Mí",
    skills: "Habilidades",
    contactMe: "Contáctame",
    visitWebsite: "Visitar Sitio Web",
    viewCode: "Ver Código",
    halloween: {
      title: "Fondos de Halloween <Hackaton Cloudinary",
      description: "cambia el fondo de tu foto por uno de halloween,hecho con nextjs,tailwind y cloudinari",
      website: "https://halloween-photo.vercel.app/",
      github: "https://github.com/alejandroponce00/halloween_photo",
    },
    turnos: {
      title: "Gestiona turnos en un taller mecánico: registra vehículos,dueños,reparaciones y horas de ingreso. Frontend desplegado en vercel y backend en railway ",
      description: "Una aplicación de gestión de tareas responsiva construida con Next.js y Tailwind CSS.",
      website: "https://taller-frontend-beta.vercel.app/",
      github: "https://github.com/alejandroponce00/taller_frontend",
    },
    panel_mecanicos: {
      title: "Panel Mecanicos",
      description: "Este es otro front conectado al back de turnos_taller.Está pensado para que lo utilicen los mecanicos ",
      website: "https://panel-mecanico.vercel.app/",
      github: "https://github.com/alejandroponce00/panel_mecanico",
    },
  },
}

function ProjectCard({ 
  title, 
  description, 
  image, 
  websiteUrl, 
  githubUrl, 
  visitWebsiteText, 
  viewCodeText 
}: { 
  title: string; 
  description: string; 
  image: string;
  websiteUrl: string;
  githubUrl: string;
  visitWebsiteText: string;
  viewCodeText: string;
}) {
  return (
    <Card className="dark:bg-gray-800">
      <CardContent className="p-4">
        <Image src={image} alt={title} width={300} height={200} className="rounded-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 h-4 w-4" />
            {visitWebsiteText}
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Code className="mr-2 h-4 w-4" />
            {viewCodeText}
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}


  export default function Home() {
    const { language } = useLanguage()
    const t = content[language]
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
              <h2 className="text-2xl font-semibold mb-4">{t.projects}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  title={t.halloween.title}
                  description={t.halloween.description}
                  image="/imagenes/photo-halloween.png"
                  websiteUrl={t.halloween.website}
                  githubUrl={t.halloween.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.turnos.title}
                  description={t.turnos.description}
                  image="/imagenes/taller_front.webp"
                  websiteUrl={t.turnos.website}
                  githubUrl={t.turnos.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.panel_mecanicos.title}
                  description={t.panel_mecanicos.description}
                  image="/imagenes/panel_mecanicos.png"
                  websiteUrl={t.panel_mecanicos.website}
                  githubUrl={t.panel_mecanicos.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
              </div>
            </section>

            <section id="about" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t.aboutMe}</h2>
              <p className="text-lg mb-4">{t.about}</p>
              <h3 className="text-xl font-semibold mb-2">{t.skills}</h3>
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
                  <a href="https://github.com/alejandroponce00" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon">
                  <a href="https://www.linkedin.com/in/alberto-alejandro-ponce-2b832926b/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon">
                  <a href="mailto:alejandroponce00@gmail.com">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </section>
          </main>
        </SidebarInset>
      </div>
      
    </SidebarProvider>
  )
}

