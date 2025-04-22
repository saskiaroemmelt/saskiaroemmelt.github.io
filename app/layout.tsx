import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { TabsProvider } from "@/contexts/tabs-context"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,
            %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E
              %3Ctext x='50%25' y='50%25'
                    dominant-baseline='central'
                    text-anchor='middle'
                    font-size='96'%3E%F0%9F%8E%AC%3C/text%3E
            %3C/svg%3E"
        />
        <title>Saskia Römmelt</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <TabsProvider>
              <div className="min-h-screen flex flex-col bg-background">
                <Header />
                <div className="flex-grow">{children}</div>
                <Footer />
              </div>
            </TabsProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  generator: 'v0.dev'
};
