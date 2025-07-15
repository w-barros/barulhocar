import { Calendar, User, ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/navbar"

// Dados de exemplo para os registros
const registros = [
  {
    id: 1,
    imagem: "/placeholder.svg?height=200&width=300",
    texto:
      "Avistei um lindo bem-te-vi no quintal de casa hoje pela manhã. Ele estava cantando muito alto e parecia estar defendendo seu território.",
    data: "15 de Julho, 2024",
    autor: "Maria Silva",
  },
  {
    id: 2,
    imagem: "/placeholder.svg?height=200&width=300",
    texto:
      "Família de sabiás-laranjeira construiu ninho na mangueira do jardim. É incrível observar como eles cuidam dos filhotes.",
    data: "12 de Julho, 2024",
    autor: "João Santos",
  },
  {
    id: 3,
    imagem: "/placeholder.svg?height=200&width=300",
    texto: "João-de-barro terminou de construir sua casa de barro na cerca. O trabalho deles é impressionante!",
    data: "10 de Julho, 2024",
    autor: "Ana Costa",
  },
  {
    id: 4,
    imagem: "/placeholder.svg?height=200&width=300",
    texto:
      "Bando de tico-ticos visitando o comedouro que instalei na varanda. Eles vêm todos os dias no mesmo horário.",
    data: "8 de Julho, 2024",
    autor: "Pedro Oliveira",
  },
]

export default function RegistrosPage() {
  return (
    <div className="min-h-screen bg-[#283618]">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F39200] mb-4">Ver Registros</h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Confira os avistamentos e registros compartilhados pela nossa comunidade de observadores de aves.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {registros.map((registro, index) => (
            <div key={registro.id}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="md:flex">
                    {/* Imagem */}
                    <div className="md:w-1/3">
                      <img
                        src={registro.imagem || "/placeholder.svg"}
                        alt={`Registro ${registro.id}`}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{registro.data}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{registro.autor}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed text-lg">{registro.texto}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Separador entre registros */}
              {index < registros.length - 1 && <Separator className="my-8" />}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Tem um registro para compartilhar?</h3>
          <p className="text-gray-600 mb-6">Ajude nossa comunidade a conhecer melhor a vida selvagem local!</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfM7uZSq3dv0_6XMHegLfExPrAqbmQprLAAfpJ4Si0MummeA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            <ImageIcon className="h-5 w-5" />
            <span>Enviar Registro</span>
          </a>
        </div>
      </main>
    </div>
  )
}
