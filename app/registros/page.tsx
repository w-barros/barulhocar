import { Calendar, User, ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";

// Dados de exemplo para os registros.
const registros = [
  {
    id: 1,
    imagem:
      "https://i.imgur.com/Lt0dqzg.jpeg/500px-Great_kiskadee_%2870240%29.jpg?height=200&width=300",
    texto:
      "Um balança-rabo-de- máscara veio inspecionar quando toquei o canto dele :)))",
    data: "	14/08/2025",
    autor: "ROSANA MEDEIROS",
  },
  {
    id: 2,
    imagem:
      "https://i.imgur.com/TVMQkBe.jpeg/placeholder.svg?height=200&width=300",
    texto: "Andanças pelo Guará 2.Mico estrela",
    data: "13/08/2025",
    autor: "Rosângela Medeiros",
  },
  {
    id: 3,
    imagem:
      "https://i.imgur.com/GcVNsYQ.jpeg/placeholder.svg?height=200&width=300",
    texto: "	Durante caminhada no Guará 2..Papagaio lindissimo",
    data: "13/08/2025",
    autor: "Rosângela Medeiros",
  },
  {
    id: 4,
    imagem:
      "https://i.imgur.com/iJSLuMU.jpeg/placeholder.svg?height=200&width=300",
    texto:
      "Bati essa foto de um pica- pau amarelo na minha caminhada diária no Guara 2. DF",
    data: "13/08/2025",
    autor: "Rosângela Medeiros",
  },
  {
    id: 5,
    imagem:
      "https://i.imgur.com/NGs8Nx8.jpeg/placeholder.svg?height=200&width=300",
    texto:
      "Tive uma conversa muito informativa com o serralheiro Raimundo e fomos acompanhados de perto por um canário da terra.",
    data: "11/08/2025",
    autor: "Rosana",
  },
];

export default function RegistrosPage() {
  return (
    <div className="min-h-screen bg-[#283618]">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-[#F39200] mb-4 font-cursive">
            Ver Registros
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Confira os avistamentos e registros compartilhados pela nossa
            comunidade de observadores de aves.
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

                      <p className="text-gray-700 leading-relaxed text-lg">
                        {registro.texto}
                      </p>
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
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Viu algum desses seus vizinhos por aí?
          </h3>
          <p className="text-gray-600 mb-6">
            Compartilhe e ajude a sua comunidade a conhecer melhor a vida
            selvagem local!
          </p>
          <a
            href="https://forms.zohopublic.com/vidavizinha1/form/Envieseuregistro/formperma/IU-7mXWN9XQnURCFwIsJruhID8QpSXGHZ_vSiSKqP4U"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            <Camera className="h-5 w-5" />
            <span>Mande seu Registro</span>
          </a>
        </div>
      </main>
    </div>
  );
}
