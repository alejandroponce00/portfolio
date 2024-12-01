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
    saludo: "Hi, I'm Alejandro Ponce",
    subtitle:"Full Stack Web Developer",
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
    subtitulador: {
      title: "Real Time Video Subtitler",
      description: "This project is a web application built in Django that allows you to generate subtitles in the original language of a video and translate them into Spanish. You just have to upload the video, and the system takes care of the rest! 🌍",
      website: "git@github.com:alejandroponce00/video_traductor_django.git",
      github: "git@github.com:alejandroponce00/video_traductor_django.git",
    },
    turnos: {
      title: "Mechanical workshop shifts",
      description: "Manage shifts in a mechanical workshop: record vehicles, owners, repairs and entry hours. Frontend deployed in vercel and backend in railway ",
      website: "https://taller-frontend-beta.vercel.app/",
      github: "https://github.com/alejandroponce00/taller_frontend",
    },
    panel_mecanicos: {
      title: "Mechanical Panel",
      description: "This is another front connected to the back of turnos_taller. It is designed to be used by mechanics",
      website: "https://panel-mecanico.vercel.app/",
      github: "https://github.com/alejandroponce00/panel_mecanico",
    },
    todo_app: {
      title: "Todo app",
      description: "CRUD task application using Next.js and Django. Allows you to create, list, edit and delete tasks with a modern interface thanks to Shadcn",
      website: "https://client-todo-rho.vercel.app/",
      github: "https://github.com/alejandroponce00/client_todo",
    },
    clon_spotify: {
      title: "Clon spotify",
      description: "spotify clone created with nextjs and tailwind",
      website: "https://clon-spotify-tjoi.vercel.app/",
      github: "https://github.com/alejandroponce00/clon-spotify",
    },
    cocinero_virtual: {
      title: "Virtual Chef <Hackaton Vercel>",
      description: "Show him the ingredients you have and he will help you cook something, created with nextjs, vercel sdk and perplexity api. Vercel displayed",
      website: "https://tu-cocinero.vercel.app/",
      github: "https://github.com/alejandroponce00/tu_cocinero",
    },
    chatbot_minecraft: {
      title: "Minecraft Chatbot  <Hackaton Vercel>",
      description: "Minecraft chatbot created so my son doesn't have to google minecraft commands and cheats. Made with nextjs, vercel sdk and perplexity api.",
      website: "https://minecraft-asistente.vercel.app/",
      github: "https://github.com/alejandroponce00/minecraft_asistente",
    },
    clon_twitter: {
      title: "X Clon (twitter)",
      description: "Twitter clone created with nextjs and shadcn ",
      website: "https://twitter-clon-nu.vercel.app//",
      github: "https://github.com/alejandroponce00/twitter_clon",
    },Caja_comentarios: {
      title: "Comment box",
      description: "Created with django connected to a postgres database and deployed to railway",
      website: "https://comentariosrender-production.up.railway.app/",
      github: "https://github.com/alejandroponce00/comentarios_render",
    },
    Snake_juego: {
      title: "Snake(game)",
      description: "popular snake game created with react and deployed in vercel",
      website: "https://snake-react-alpha.vercel.app/",
      github: "https://github.com/alejandroponce00/Snake-react",
    },
    ojos: {
      title: "Eyes of Heaven Art",
      description: "Page created for a plastic artist and illustrator, displayed on Netlify",
      website: "https://ojosdecieloarte.netlify.app/",
      github: "https://github.com/alejandroponce00/ojos-de-cielo",
    },
    marvel: {
      title: "Marvel Api",
      description: "Page created to consume a marvel api using nextjs and axios",
      website: "https://marvel-api-ale.netlify.app/",
      github: "https://github.com/alejandroponce00/api-marvel",
    },
    artesana: {
      title: "ArteSana Mosaics",
      description: "Page created for a mosaic artist displayed on github pages",
      website: "https://alejandroponce00.github.io/ArteSanaMosaicos/",
      github: "https://github.com/alejandroponce00/ArteSanaMosaicos",
    },
  },
  es: {
    title: "Desarrollador Web Full Stack",
    saludo: "Hola,soy Alejandro Ponce",
    subtitle:"Desarrollador Web Full Stack ",
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
    subtitulador: {
      title: "Subtitulador de Videos en Tiempo Real",
      description: "Este proyecto es una aplicación web construida en Django que permite generar subtítulos en el idioma original de un video y traducirlos al español. Solo debes subir el video, ¡y el sistema se encarga del resto! 🌍",
      website: "git@github.com:alejandroponce00/video_traductor_django.git",
      github: "git@github.com:alejandroponce00/video_traductor_django.git",
    },
    turnos: {
      title: "Turnos Taller",
      description: " Gestiona turnos en un taller mecánico: registra vehículos,dueños,reparaciones y horas de ingreso. Frontend desplegado en vercel y backend en railway ",
      website: "https://taller-frontend-beta.vercel.app/",
      github: "https://github.com/alejandroponce00/taller_frontend",
    },
    panel_mecanicos: {
      title: "Panel Mecanicos",
      description: "Este es otro front conectado al back de turnos_taller.Está pensado para que lo utilicen los mecanicos ",
      website: "https://panel-mecanico.vercel.app/",
      github: "https://github.com/alejandroponce00/panel_mecanico",
    },
    todo_app: {
      title: "Todo app",
      description: "Aplicación CRUD de tareas usando Next.js y Django.Permite crear, listar, editar y eliminar tareas con una interfaz moderna gracias a Shadcn",
      website: "https://client-todo-rho.vercel.app/",
      github: "https://github.com/alejandroponce00/client_todo",
    },
    clon_spotify: {
      title: "Clon spotify",
      description: "Clon de Spotify creado con nextjs y taildwind",
      website: "https://clon-spotify-tjoi.vercel.app/",
      github: "https://github.com/alejandroponce00/clon-spotify",
    },
    cocinero_virtual: {
      title: "Cocinero Virtual <Hackaton Vercel>",
      description: "Muestrale los ingredientes que tienes y te ayudará a cocinar algo,creado con nextjs,vercel sdk y api de perplexity. Desplegado en vercel",
      website: "https://tu-cocinero.vercel.app/",
      github: "https://github.com/alejandroponce00/tu_cocinero",
    },
    chatbot_minecraft: {
      title: "Chatbot de Minecraft <Hackaton Vercel>",
      description: "Chatbot de Minecraft creado para que mi hijo no tenga que googlear los comandos y trucos de minecraft.Hecho con nextjs,vercel sdk y api de perplexity.",
      website: "https://minecraft-asistente.vercel.app/",
      github: "https://github.com/alejandroponce00/minecraft_asistente",
    },
    clon_twitter: {
      title: "Clon de X (twitter)",
      description: "Clon de twitter creado con nextjs y shadcn ",
      website: "https://twitter-clon-nu.vercel.app//",
      github: "https://github.com/alejandroponce00/twitter_clon",
    },
   Caja_comentarios: {
      title: "Caja de comentarios",
      description: "Creada con django conectada a una base de datos postgres y desplegada en railway",
      website: "https://comentariosrender-production.up.railway.app/",
      github: "https://github.com/alejandroponce00/comentarios_render",
    },
    Snake_juego: {
      title: "Snake(juego)",
      description: "popular juego de la serpiente creado con react y desplegado en vercel",
      website: "https://snake-react-alpha.vercel.app/",
      github: "https://github.com/alejandroponce00/Snake-react",
    },ojos: {
      title: "Ojos de Cielo Arte",
      description: "Pagina creada para una artista plastica y dibujante,desplegada en Netlify ",
      website: "https://ojosdecieloarte.netlify.app/",
      github: "https://github.com/alejandroponce00/ojos-de-cielo",
    },
    marvel: {
      title: "Marvel Api",
      description: "Pagina creada para consumir una api de marvel usando nextjs y axios ",
      website: "https://marvel-api-ale.netlify.app/",
      github: "https://github.com/alejandroponce00/api-marvel",
    },
    artesana: {
      title: "ArteSana Mosaicos",
      description: "Pagina creada para una artista de mosaiquismo desplegada en github pages  ",
      website: "https://alejandroponce00.github.io/ArteSanaMosaicos/",
      github: "https://github.com/alejandroponce00/ArteSanaMosaicos",
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
              <h1 className="text-4xl font-bold">{t.saludo}</h1>
              <p className="text-xl mt-2">{t.subtitle}</p>
            </header>

            <div className="fixed top-4 right-4 z-50 flex space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <section className="mb-12">
              <MundoWrapper />
            </section>
            <section id="about" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center">{t.aboutMe}</h2>
              <p className="text-lg mb-4">{t.about}</p>
              <h3 className="text-xl font-semibold mb-2">{t.skills}</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-lg py-1 px-3">Next.js</Badge>
                <Badge variant="secondary" className="text-lg py-1 px-3">Django</Badge>
                <Badge variant="secondary" className="text-lg py-1 px-3">Tailwind CSS</Badge>
                <Badge variant="secondary" className="text-lg py-1 px-3">PostgreSQL</Badge>
              </div>
            </section>

            <section id="projects" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center">{t.projects}</h2>
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
                <ProjectCard
                  title={t.subtitulador.title}
                  description={t.subtitulador.description}
                  image="/imagenes/subtitulador.png"
                  websiteUrl={t.subtitulador.website}
                  githubUrl={t.subtitulador.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.todo_app.title}
                  description={t.todo_app.description}
                  image="/imagenes/todoapp.jpg"
                  websiteUrl={t.todo_app.website}
                  githubUrl={t.todo_app.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.clon_spotify.title}
                  description={t.clon_spotify.description}
                  image="/imagenes/spotify-preview.png"
                  websiteUrl={t.clon_spotify.website}
                  githubUrl={t.clon_spotify.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.cocinero_virtual.title}
                  description={t.cocinero_virtual.description}
                  image="/imagenes/tu_cocinero.png"
                  websiteUrl={t.cocinero_virtual.website}
                  githubUrl={t.cocinero_virtual.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.chatbot_minecraft.title}
                  description={t.chatbot_minecraft.description}
                  image="/imagenes/minecraft.png"
                  websiteUrl={t.chatbot_minecraft.website}
                  githubUrl={t.chatbot_minecraft.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.clon_twitter.title}
                  description={t.clon_twitter.description}
                  image="/imagenes/twiterclonprev.png"
                  websiteUrl={t.clon_twitter.website}
                  githubUrl={t.clon_twitter.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.Caja_comentarios.title}
                  description={t.Caja_comentarios.description}
                  image="/imagenes/coment.png"
                  websiteUrl={t.Caja_comentarios.website}
                  githubUrl={t.Caja_comentarios.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.Snake_juego.title}
                  description={t.Snake_juego.description}
                  image="/imagenes/snake.png"
                  websiteUrl={t.Snake_juego.website}
                  githubUrl={t.Snake_juego.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.ojos.title}
                  description={t.ojos.description}
                  image="/imagenes/vistaprev-ojos.png"
                  websiteUrl={t.ojos.website}
                  githubUrl={t.ojos.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.marvel.title}
                  description={t.marvel.description}
                  image="/imagenes/marvel.png"
                  websiteUrl={t.marvel.website}
                  githubUrl={t.marvel.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.artesana.title}
                  description={t.artesana.description}
                  image="/imagenes/elefante.png"
                  websiteUrl={t.artesana.website}
                  githubUrl={t.artesana.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
              </div>
            </section>

            

            <section id="contact">
              <h2 className="text-2xl font-semibold mb-4 text-center">{t.contactMe}</h2>
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

