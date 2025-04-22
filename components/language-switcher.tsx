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
              src="/es.svg?height=16&width=24"
              alt="Español"
              width={24}
              height={16}
              className="rounded-sm"
            />
          )}
          {language === "en" && (
            <Image
              src="/en.svg?height=16&width=24"
              alt="English"
              width={24}
              height={16}
              className="rounded-sm"
            />
          )}
          {language === "de" && (
            <Image
              src="/de.svg?height=16&width=24"
              alt="Deutsch"
              width={24}
              height={16}
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
              src="/es.svg?height=16&width=24"
              alt="Español"
              width={24}
              height={16}
              className="rounded-sm"
            />
            <span>Español</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
          <div className="flex items-center gap-2">
            <Image
              src="/en.svg?height=16&width=24"
              alt="English"
              width={24}
              height={16}
              className="rounded-sm"
            />
            <span>English</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("de")} className="cursor-pointer">
          <div className="flex items-center gap-2">
            <Image
              src="/de.svg?height=16&width=24"
              alt="Deutsch"
              width={24}
              height={16}
              className="rounded-sm"
            />
            <span>Deutsch</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
