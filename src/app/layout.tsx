import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/LanguageContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alejandro Ponce - Full Stack Web Developer',
  description: 'Portfolio of Alejandro Ponce, a full stack web developer specializing in Next.js, Django, Tailwind CSS, and PostgreSQL.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <footer className="bg-gray-200 dark:bg-gray-800 py-4 text-center">
        <p>&copy; 2023 Alejandro Ponce. All rights reserved.</p>
      </footer>
      </body>
    </html>
  )
}
