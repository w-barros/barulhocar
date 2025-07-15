"use client"

import Link from "next/link"
import { Home, Send, List, Mail, Bird } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Início", icon: Home },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfM7uZSq3dv0_6XMHegLfExPrAqbmQprLAAfpJ4Si0MummeA/viewform",
      label: "Mande seu Registro",
      icon: Send,
      external: true,
    },
    { href: "/registros", label: "Ver Registros", icon: List },
    { href: "mailto:contato@vidavizinha.com.br", label: "Fale Conosco", icon: Mail, external: true },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#283618] rounded-full flex items-center justify-center">
              <Bird className="h-5 w-5 text-[#F39200]" />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-800">Vida Vizinha</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                )
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Navigation - Icons only */}
          <div className="flex md:hidden items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon
              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
                    title={item.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
                  title={item.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
