"use client";

import Link from "next/link";
import {
  Home,
  Mail,
  Bird,
  Camera,
  Images,
  Car,
  CarFront,
  Share,
  Share2,
  Shield,
  Info,
  Handshake,
  BookCheck,
  Scroll,
  LayoutGrid,
  FileCheck,
} from "lucide-react";
import { useState } from "react";
// shadcn/ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    // { href: "/", label: "Compartilhar", icon: Share2 },
    {
      href: "/",
      label: "Barulhos",
      icon: LayoutGrid,
    },
    {
      href: "/guia-compra-e-venda",
      label: "Guia de Compra e Venda",
      icon: BookCheck,
    },
    {
      href: "/formulario-contrato",
      label: "Modelo Contrato",
      icon: Scroll,
    },
    {
      href: "/guia-compra-e-venda",
      label: "Modelo Vistoria",
      icon: FileCheck,
    },
    // { href: "/", label: "WhatsApp", icon: Share2 },
    // { href: "/", label: "Instagram", icon: Share2 },
    // { href: "/", label: "Início", icon: Home },
    // { href: "/especies", label: "Espécies", icon: Bird },
    { href: "/sobre", label: "Sobre", icon: Info },
    // este vira o trigger do modal
    // { label: "Mande seu Registro", icon: Camera, modal: true },
    // { href: "/registros", label: "Ver Registros", icon: Images },
    { href: "/privacidade", label: "Privacidade", icon: Shield },
    { href: "/contato", label: "Contato", icon: Mail },
  ];

  return (
    <>
      <nav className="bg-red-500  sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <CarFront className="h-7 w-7 text-[#FFFFFF]" />
              </div>
              <span className="font-bold text-white text-3xl md:text-3xl ">
                Barulho Car
              </span>
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon as any;

                if ("modal" in item && item.modal) {
                  return (
                    <Dialog key={item.label} open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors">
                          <Icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-[90vw] p-0 overflow-hidden">
                        <DialogHeader className="px-4 pt-4">
                          <DialogTitle>Envie seu registro</DialogTitle>
                        </DialogHeader>
                        <div className="px-4 pb-4">
                          <div className="rounded-xl overflow-hidden border">
                            <iframe
                              title="Envie seu registro"
                              aria-label="Envie seu registro"
                              src="https://forms.zohopublic.com/vidavizinha1/form/Envieseuregistro/formperma/IU-7mXWN9XQnURCFwIsJruhID8QpSXGHZ_vSiSKqP4U?zf_enablecamera=true"
                              allow="camera;"
                              // tamanho responsivo: ocupa a largura, e altura confortável
                              style={{
                                width: "100%",
                                height: "70vh",
                                border: "none",
                              }}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                }

                // Não há mais links externos

                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="flex items-center space-x-2 text-white hover:text-red-100 transition-colors font-semibold"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile (ícones) */}
            <div className="flex md:hidden items-center space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon as any;

                if ("modal" in item && item.modal) {
                  return (
                    <Dialog key={item.label} open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <button
                          className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                          title={item.label}
                        >
                          <Icon className="h-5 w-5" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-[95vw] p-0 overflow-hidden">
                        <DialogHeader className="px-4 pt-4">
                          <DialogTitle>Envie seu registro</DialogTitle>
                        </DialogHeader>
                        <div className="px-4 pb-4">
                          <div className="rounded-xl overflow-hidden border">
                            <iframe
                              title="Envie seu registro"
                              aria-label="Envie seu registro"
                              src="https://forms.zohopublic.com/vidavizinha1/form/Envieseuregistro/formperma/IU-7mXWN9XQnURCFwIsJruhID8QpSXGHZ_vSiSKqP4U?zf_enablecamera=true"
                              allow="camera;"
                              style={{
                                width: "100%",
                                height: "75vh",
                                border: "none",
                              }}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                }

                // Não há mais links externos

                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="p-2 text-white hover:text-white transition-colors"
                    title={item.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
