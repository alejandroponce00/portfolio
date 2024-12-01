"use client"
import * as React from "react"
import { FileCode2, User, Mail } from 'lucide-react'
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const menuItems = {
  en: [
    { title: "About Me", icon: User, href: "#about" },
    { title: "Projects", icon: FileCode2, href: "#projects" },
    { title: "Contact Me", icon: Mail, href: "#contact" },
  ],
  es: [
    { title: "Sobre Mí", icon: User, href: "#about" },
    { title: "Proyectos", icon: FileCode2, href: "#projects" },
    { title: "Contáctame", icon: Mail, href: "#contact" },
  ]
}

export function AppSidebar() {
  const { language } = useLanguage()

  const items = language === 'en' ? menuItems.en : menuItems.es

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-xl font-semibold">Alejandro Ponce</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

