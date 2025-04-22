"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoUri = `mailto:saskia.roemmelt@gmail.com?` +
      `subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent("Using contact form from: " + formData.name + " (" + formData.email + ").\n\n" + formData.message)}`;

    window.location.href = mailtoUri;

    setIsSubmitting(false)
    setSubmitMessage(t("contact.success"))
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t("contact.title")}</CardTitle>
          <CardDescription>{t("contact.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{t("contact.email")}</h3>
                    <p className="text-sm text-muted-foreground">saskia.roemmelt@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{t("contact.phone")}</h3>
                    <p className="text-sm text-muted-foreground">(+54) 11 6171 7736 <br/> (+49) 176 847 483 34</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Linkedin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{t("contact.linkedin")}</h3>
                    <p className="text-sm text-muted-foreground"><a href={t("contact.linkedin.href")}>/in/Saskia-Roemmelt</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{t("contact.location")}</h3>
                    <p className="text-sm text-muted-foreground">Vicente Lopez, Buenos Aires, Argentina <br/> Köln, Deutschland</p>
                    <p className="text-sm text-muted-foreground"><br/>{t("contact.availability")}</p>
                  </div>
                </div>
              </div>
            </div>


            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t("contact.subject")}</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      {t("contact.sending")}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      {t("contact.send")}
                    </span>
                  )}
                </Button>

                {submitMessage && <p className="text-sm text-green-600 text-center mt-2">{submitMessage}</p>}
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
