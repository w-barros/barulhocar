"use client"

import { useState, useRef } from "react"
import { Play, Pause, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/navbar"

// Array de aves com suas informações
const birds = [
  {
    id: 1,
    name: "Bem-te-vi",
    scientificName: "Pitangus sulphuratus",
    image: "/placeholder.svg?height=150&width=150",
    backgroundColor: "#8B7355",
    audioUrl: "/audio/bem-te-vi.mp3",
  },
  {
    id: 2,
    name: "Sabiá-laranjeira",
    scientificName: "Turdus rufiventris",
    image: "/placeholder.svg?height=150&width=150",
    backgroundColor: "#A0522D",
    audioUrl: "/audio/sabia-laranjeira.mp3",
  },
  {
    id: 3,
    name: "João-de-barro",
    scientificName: "Furnarius rufus",
    image: "/placeholder.svg?height=150&width=150",
    backgroundColor: "#CD853F",
    audioUrl: "/audio/joao-de-barro.mp3",
  },
  {
    id: 4,
    name: "Curió",
    scientificName: "Sporophila angolensis",
    image: "/placeholder.svg?height=150&width=150",
    backgroundColor: "#8FBC8F",
    audioUrl: "/audio/curio.mp3",
  },
  {
    id: 5,
    name: "Canário-da-terra",
    scientificName: "Sicalis flaveola",
    image: "/placeholder.svg?height=150&width=150",
    backgroundColor: "#DAA520",
    audioUrl: "/audio/canario-da-terra.mp3",
  },
  {
    id: 6,
    name: "Sabiá-poca",
    scientificName: "Turdus amaurochalinus",
    image: "/placeholder.svg?height=150&width=150",
    backgroundColor: "#696969",
    audioUrl: "/audio/sabia-poca.mp3",
  },
  {
    id: 7,
    name: "Tico-tico",
    scientificName: "Zonotrichia capensis",
    image: "/placeholder.svg?height=150&width=150",
    backgroundColor: "#8B4513",
    audioUrl: "/audio/tico-tico.mp3",
  },
  {
    id: 8,
    name: "Pardal",
    scientificName: "Passer domesticus",
    image: "/placeholder.svg?height=150&width=150",
    backgroundColor: "#A0522D",
    audioUrl: "/audio/pardal.mp3",
  },
]

export default function HomePage() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playBirdSound = (birdId: number, audioUrl: string) => {
    if (currentlyPlaying === birdId) {
      // Pausar se já estiver tocando
      if (audioRef.current) {
        audioRef.current.pause()
        setCurrentlyPlaying(null)
      }
    } else {
      // Parar áudio anterior se houver
      if (audioRef.current) {
        audioRef.current.pause()
      }

      // Tocar novo áudio
      audioRef.current = new Audio(audioUrl)
      audioRef.current.play().catch(console.error)
      setCurrentlyPlaying(birdId)

      // Reset quando terminar
      audioRef.current.onended = () => {
        setCurrentlyPlaying(null)
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#283618]">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:text-left lg:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F39200] mb-4 font-serif italic cursive">
            Conheça seus
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F39200] mb-6 font-serif italic cursive">
            Vizinhos
          </h1>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
              Estas e outras espécies vivem aqui neste jardim e pela vizinhança.
            </p>
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">Quantos você consegue encontrar?</p>
            <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-orange-800 font-medium">• Cada árvore é um lar. Todo verde importa •</p>
              <p className="text-orange-700 text-sm mt-1">♡ Espalhe vida, plante uma árvore ♡</p>
            </div>
          </div>
        </div>

        {/* Birds Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {birds.map((bird) => (
            <Card
              key={bird.id}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              style={{ backgroundColor: bird.backgroundColor }}
              onClick={() => playBirdSound(bird.id, bird.audioUrl)}
            >
              <div className="aspect-square p-3">
                <div className="relative h-full w-full">
                  <img
                    src={bird.image || "/placeholder.svg"}
                    alt={bird.name}
                    className="w-full h-full object-cover rounded-xl"
                  />

                  {/* Play/Pause Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {currentlyPlaying === bird.id ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bird Info */}
              <div className="p-3 pt-0">
                <h3 className="font-bold text-white text-sm mb-1 text-center">{bird.name}</h3>
                <p className="text-white text-xs text-center opacity-90 italic">{bird.scientificName}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Viu alguma dessas aves por aí?</h3>
          <p className="text-gray-600 mb-6">
            Compartilhe conosco e ajude nossa comunidade a conhecer melhor a vida selvagem local!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfM7uZSq3dv0_6XMHegLfExPrAqbmQprLAAfpJ4Si0MummeA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            <Send className="h-5 w-5" />
            <span>Mande seu Registro</span>
          </a>
        </div>
      </main>
    </div>
  )
}
