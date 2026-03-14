"use client"
import { useLanguage } from "@/contexts/LanguageContext"
import React from 'react'
import Image from "next/image"
import { Github, Linkedin, Mail, Globe, Code } from 'lucide-react'

import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

import AuroraBackgroundDemo from "@/components/ui/aurora-background-demo"

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
    DeporteScan: {
      title: "DeporteScan",
      description: "A frontend web application developed with Next.js that displays offers of sports products from multiple stores, connected to a Node.js backend with a database in Firebase Firestore.",
      website: "https://scrap-ofertas-front.vercel.app/",
      github: "https://github.com/alejandroponce00/scrap_ofertas_front",
    },
    Ropa_shop: {
      title: "Final project for the Reactjs course at Talento Tech",
      description: "It is an e-commerce application developed with React and Vite.js, connected to a custom backend deployed on Vercel for managing products and users, and it uses Firebase as a cloud database to ensure data persistence and real-time synchronization.",
      website: "https://preentrega-alejandro-ponce.vercel.app/",
      github: "https://github.com/alejandroponce00/preentrega-Alejandro-Ponce",
    },
    Productos: {
      title: "Final project for the Node.js course at Talento Tech",
      description: "REST API built with Node.js and Express, connected to Firebase Firestore, and deployed on Railway, with a Vercel frontend. It implements a layered architecture, CORS handling for local/production, and credential management using environment variables. It includes full CRUD operations on products.",
      website: "https://front-proy-final-node.vercel.app/",
      github: "https://github.com/alejandroponce00/proy_final_node",
    },
    Estacionamiento: {
      title: "Parking Registration",
      description: "Proyect in Next.js to register vehicles, license plates, and location. Connected to a Django backend, styled with Tailwind CSS, and includes validation. Deployed on Vercel with a PostgreSQL DB on Railway. 🚀",
      website: "https://parking-frontend-theta.vercel.app//",
      github: "https://github.com/alejandroponce00/parking_frontend",
    },
    halloween: {
      title: "Halloween Wallpapers <Hackaton Cloudinary>",
      description: "change the background of your photo for a halloween one, made with nextjs, tailwind and cloudinari",
      website: "https://halloween-photo.vercel.app/",
      github: "https://github.com/alejandroponce00/halloween_photo",
    },
    subtitulador: {
      title: "Real Time Video Subtitler",
      description: "This project is a web application built in Django that allows you to generate subtitles in the original language of a video and translate them into Spanish. You just have to upload the video, and the system takes care of the rest! 🌍",
      website: "https://github.com/alejandroponce00/video_subtitulador",
      github: "https://github.com/alejandroponce00/video_subtitulador",
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
    DeporteScan: {
      title: "DeporteScan",
      description: "Aplicación web frontend desarrollada con Next.js que muestra ofertas de productos deportivos desde múltiples tiendas, conectada a un backend Node.js con base de datos en Firebase Firestore.",
      website: "https://scrap-ofertas-front.vercel.app/",
      github: "https://github.com/alejandroponce00/scrap_ofertas_front",
    },
    Ropa_shop: {
      title: "Proyecto final del curso de Reactjs en Talento Tech",
      description: "Es una aplicación de comercio electrónico desarrollada con React y Vite.js, conectada a un backend personalizado desplegado en Vercel para la gestión de productos y usuarios, y utiliza Firebase como base de datos en la nube para garantizar la persistencia de datos y la sincronización en tiempo real.",
      website: "https://preentrega-alejandro-ponce.vercel.app/",
      github: "https://github.com/alejandroponce00/preentrega-Alejandro-Ponce",
    },
    Productos: {
      title: "Proyecto final del curso de Node.js en Talento Tech",
      description: "API REST construida con Node.js y Express, conectada a Firebase Firestore y desplegada en Railway, con frontend en Vercel. Implementa arquitectura en capas, manejo de CORS para local/producción y gestión de credenciales mediante variables de entorno. Incluye operaciones CRUD completas sobre productos.",
      website: "https://front-proy-final-node.vercel.app/",
      github: "https://github.com/alejandroponce00/proy_final_node",
    },
    Estacionamiento: {
      title: "Registro de Estacionamiento ",
      description: "Proyecto en Next.js para ingresar vehículos, patente y ubicación. Conexión con backend Django, estilizado con Tailwind CSS y validación. Frontend desplegado en Vercel y backend con BD PostgreSQL en Railway. 🚀",
      website: "https://parking-frontend-theta.vercel.app//",
      github: "https://github.com/alejandroponce00/parking_frontend",
    },
    halloween: {
      title: "Fondos de Halloween <Hackaton Cloudinary",
      description: "cambia el fondo de tu foto por uno de halloween,hecho con nextjs,tailwind y cloudinari",
      website: "https://halloween-photo.vercel.app/",
      github: "https://github.com/alejandroponce00/halloween_photo",
    },
    subtitulador: {
      title: "Subtitulador de Videos en Tiempo Real",
      description: "Este proyecto es una aplicación web construida en Django que permite generar subtítulos en el idioma original de un video y traducirlos al español. Solo debes subir el video, ¡y el sistema se encarga del resto! 🌍",
      website: "https://github.com/alejandroponce00/video_subtitulador",
      github: "https://github.com/alejandroponce00/video_subtitulador",
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
    
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-800 dark:border-white/[0.2] border-black/[0.1] w-full h-[400px] sm:h-[450px] rounded-xl p-4 border flex flex-col">
        <CardItem translateZ="50" className="w-full">
          <Image
            src={image}
            alt={title}
            width={500}
            height={350}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="70"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex-grow overflow-hidden line-clamp-3"
        >
          {description}
        </CardItem>
        <div className="flex justify-between items-center mt-auto">
          <CardItem
            translateZ={20}
            as="a"
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Globe className="inline mr-2 h-4 w-4" />
            {visitWebsiteText}
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Code className="inline mr-2 h-4 w-4" />
            {viewCodeText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
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
              
            <AuroraBackgroundDemo />
            <header className="mb-12 text-center">
            <div className="flex items-center justify-center  gap-4">
  <h1 className="text-4xl font-bold">{t.saludo}</h1>
  
</div>


              <p className="text-xl mt-2">{t.subtitle}</p>
            </header>

            <div className="fixed top-4 right-4 z-50 flex space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
              <ProjectCard
                  title={t.DeporteScan.title}
                  description={t.DeporteScan.description}
                  image="/imagenes/deporteScan.png"
                  websiteUrl={t.DeporteScan.website}
                  githubUrl={t.DeporteScan.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
              <ProjectCard
                  title={t.Ropa_shop.title}
                  description={t.Ropa_shop.description}
                  image="/imagenes/mi_ropa.png"
                  websiteUrl={t.Ropa_shop.website}
                  githubUrl={t.Ropa_shop.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
              <ProjectCard
                  title={t.Productos.title}
                  description={t.Productos.description}
                  image="/imagenes/products.webp"
                  websiteUrl={t.Productos.website}
                  githubUrl={t.Productos.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.Estacionamiento.title}
                  description={t.Estacionamiento.description}
                  image="/imagenes/fronten_captura.webp"
                  websiteUrl={t.Estacionamiento.website}
                  githubUrl={t.Estacionamiento.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                <ProjectCard
                  title={t.halloween.title}
                  description={t.halloween.description}
                  image="/imagenes/photo-halloween.webp"
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
                  image="/imagenes/panel_mecanicos.webp"
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
                  image="/imagenes/minecraft.webp"
                  websiteUrl={t.chatbot_minecraft.website}
                  githubUrl={t.chatbot_minecraft.github}
                  visitWebsiteText={t.visitWebsite}
                  viewCodeText={t.viewCode}
                />
                
                
                <ProjectCard
                  title={t.Snake_juego.title}
                  description={t.Snake_juego.description}
                  image="/imagenes/snake.webp"
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
                  title={t.artesana.title}
                  description={t.artesana.description}
                  image="/imagenes/elefante.webp"
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
                  <a href="https://www.linkedin.com/in/alejandro-ponce-2b832926b/" target="_blank" rel="noopener noreferrer">
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

