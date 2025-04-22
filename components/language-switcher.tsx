"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 px-0">
          {language === "es" && (
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Español"
              width={24}
              height={24}
              className="rounded-sm"
            />
          )}
          {language === "en" && (
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="English"
              width={24}
              height={24}
              className="rounded-sm"
            />
          )}
          {language === "de" && (
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Deutsch"
              width={24}
              height={24}
              className="rounded-sm"
            />
          )}
          <span className="sr-only">Cambiar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("es")} className="cursor-pointer">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Español"
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span>Español</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="English"
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span>English</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("de")} className="cursor-pointer">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Deutsch"
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span>Deutsch</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
