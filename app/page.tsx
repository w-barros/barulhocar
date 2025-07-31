"use client";

import { useState, useRef } from "react";
import { Play, Pause, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";

const birds = [
  {
    id: 1,
    name: "andorinha pequena de casa",
    scientificName: "Pygochelidon cyanoleuca",
    image: "https://i.imgur.com/4eMGOmp.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/531/135462_a59a25ae326ea52f5c8d85e154688dbc.mp3",
  },
  {
    id: 2,
    name: "andorinhão-do-buriti",
    scientificName: "Tachornis squamata",
    image: "https://i.imgur.com/8zhdUWQ.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/32/23911_fab862ef7b6099a9255fa860296a1108.mp3",
  },
  {
    id: 3,
    name: "anu branco",
    scientificName: "Guira guira",
    image: "https://i.imgur.com/kwuoKkU.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/932/239590_d30b85a134f1b8a3bc36208868580581.mp3",
  },
  {
    id: 4,
    name: "anu preto",
    scientificName: "Crotophaga ani",
    image: "https://i.imgur.com/lOQgg5O.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/431/134166_2fbcc3e0ff3c8e30c6ae88f0b3db87b0.mp3",
  },
  {
    id: 5,
    name: "arara canindé",
    scientificName: "Ara ararauna",
    image: "https://i.imgur.com/Qq20dJq.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/121/121738_9e3d7eb8c6ee0bf2aaecdb0a2099fca2.mp3",
  },
  {
    id: 6,
    name: "alma-de-gato",
    scientificName: "Piaya cayana",
    image: "https://i.imgur.com/TbzPGF1.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/091/190305_1ac48d69544199d8e073fef8580ad1ff.mp3",
  },
  {
    id: 7,
    name: "asa-branca",
    scientificName: "Patagioenas picazuro",
    image: "https://i.imgur.com/gvhYjRP.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/95/59223_b61a9a97c40f3f6566e40fd7eca31d61.mp3",
  },
  {
    id: 8,
    name: "baiano",
    scientificName: "Sporophila nigricollis",
    image: "https://i.imgur.com/sKSOlAI.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/95/59240_73f88a24562d7a5b76dcf9bf4e0f79b4.mp3",
  },
  {
    id: 9,
    name: "balança rabo de máscara",
    scientificName: "Polioptila dumicola",
    image: "https://i.imgur.com/3WMH7R0.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/881/188880_f83e2a627ece95dc090bb56cdb6b8ae9.mp3",
  },
  {
    id: 10,
    name: "beija flor tesoura",
    scientificName: "Eupetomena macroura",
    image: "https://i.imgur.com/8RFLpcK.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/85/58806_c6e22554811469a186b9a7c9f9fa05e2.mp3",
  },
  {
    id: 11,
    name: "beija-flor de gargante verde",
    scientificName: "Chionomesa fimbriata",
    image: "https://i.imgur.com/LTtbXp3.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/281/182130_aca0e1e52475674c9164ed1c6dce7f61.mp3",
  },
  {
    id: 12,
    name: "bem-te-vi",
    scientificName: "Pitangus sulphuratus",
    image: "https://i.imgur.com/Zb8cf93.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/52/25828_c87d5028235f4ca91e815d436b1ced18.mp3",
  },
  {
    id: 13,
    name: "cambacica",
    scientificName: "Coereba flaveola",
    image: "https://i.imgur.com/jJ0rIH4.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/52/25845_36a458be2f0059bfd4268f7a5a366585.mp3",
  },
  {
    id: 14,
    name: "canário da terra",
    scientificName: "Sicalis flaveola",
    image: "https://i.imgur.com/mFcHpMK.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/221/122476_5ed1d7842d2f179a53091e450aa5dd2f.mp3",
  },
  {
    id: 15,
    name: "canário rasteiro",
    scientificName: "Sicalis citrina",
    image: "https://i.imgur.com/pyZOPxw.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/852/258206_e471cf76c93c5be5ef5ec14fd60eeb61.mp3",
  },
  {
    id: 16,
    name: "carcará",
    scientificName: "Caracara plancus",
    image: "https://i.imgur.com/dEfNmp0.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/34/43969_59ffbb35b8f7a6e7a84287f121972fff.mp3",
  },
  {
    id: 17,
    name: "chupim",
    scientificName: "Molothrus bonariensis",
    image: "https://i.imgur.com/7spP6Bz.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/993/399972_22279d39132a5e8bd1dd738ce8c33b9a.mp3",
  },
  {
    id: 18,
    name: "corruira",
    scientificName: "Troglodytes aedon",
    image: "https://i.imgur.com/JHmdwkV.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/84/48966_d519d3c1c1e6b1e4d94ca1ed97006a27.mp3",
  },
  {
    id: 19,
    name: "coruja buraqueira",
    scientificName: "Athene cunicularia",
    image: "https://i.imgur.com/0H5Y2XH.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/44/44030_af64b0a274613c8d9326d539d742dad2.mp3",
  },
  {
    id: 20,
    name: "curicaca",
    scientificName: "Theristicus caudatus",
    image: "https://i.imgur.com/JTFVQ8O.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/93/39428_2d98afd68af6e08b43a27ab266f49868.mp3",
  },
  {
    id: 21,
    name: "encontro",
    scientificName: "Icterus pyrrhopterus",
    image: "https://i.imgur.com/FCjsPLf.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/85/58857_bb91bdc6e3abb3f1da8738bb39eeaa8c.mp3",
  },
  {
    id: 22,
    name: "falcão de coleira",
    scientificName: "Falco femoralis",
    image: "https://i.imgur.com/6xIzFmN.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/77/77956_45510e8d0e2335a9469b34670499dae9.mp3",
  },
  {
    id: 23,
    name: "gaturamo verdadeiro",
    scientificName: "Euphonia violacea",
    image: "https://i.imgur.com/FhAcBcF.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/22/22174_a3c425cefc7b796774eda6bf8b98135f.mp3",
  },
  {
    id: 24,
    name: "joão-de-barro",
    scientificName: "Furnarius rufus",
    image: "https://i.imgur.com/QQFGlOd.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/64/46276_1cb15a237990c19c94ebe3e719f1dcc8.mp3",
  },
  {
    id: 25,
    name: "pardal",
    scientificName: "Passer domesticus",
    image: "https://i.imgur.com/q0swVnA.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/931/139300_475ebd5e2692c88245389aa4cc4ac0e1.mp3",
  },
  {
    id: 26,
    name: "periquito de encontro amarelo",
    scientificName: "Brotogeris chiriri",
    image: "https://i.imgur.com/9SSmhk8.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/601/106184_ec09a57850832c0298e034a01d209244.mp3",
  },
  {
    id: 27,
    name: "periquito maracanã",
    scientificName: "Psittacara leucophthalmus",
    image: "https://i.imgur.com/QHKDPgW.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/781/187809_c3e00262fdd00720e8f67e97ae49b402.mp3",
  },
  {
    id: 28,
    name: "pica-pau verde barrado",
    scientificName: "Colaptes melanochloros",
    image: "https://i.imgur.com/zwFmh8s.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/14/41454_376222a676e136ce9a0d8ee08983a653.mp3",
  },
  {
    id: 29,
    name: "pitiguari",
    scientificName: "Cyclarhis gujanensis",
    image: "https://i.imgur.com/oEJ2f8r.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/311/113498_d707060a612bd5e22a49062708d61ecf.mp3",
  },
  {
    id: 30,
    name: "pomba galega",
    scientificName: "Patagioenas cayennensis",
    image: "https://i.imgur.com/BUSHn2i.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/54/45066_7b19c63ea9522da415e6dc7f584f2646.mp3",
  },
  {
    id: 31,
    name: "pombo doméstico",
    scientificName: "Columba livia",
    image: "https://i.imgur.com/2cmlH9x.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/706/607232_7be764bf051530bcfa33d0d3710dc466.mp3",
  },
  {
    id: 32,
    name: "rolinha roxa",
    scientificName: "Columbina talpacoti",
    image: "https://i.imgur.com/oO2JdRE.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/85/58792_ad14e7f3ea245c3926706385b84340a4.mp3",
  },
  {
    id: 33,
    name: "sabiá barranco",
    scientificName: "Turdus leucomelas",
    image: "https://i.imgur.com/ad7Cd8H.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/95/59262_19ac945396f16c6ebe133eff764cc9f0.mp3",
  },
  {
    id: 34,
    name: "sabiá do campo",
    scientificName: "Mimus saturninus",
    image: "https://i.imgur.com/X94HGJ8.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/31/13648_26127025a5fd9736e055c9500267dfae.mp3",
  },
  {
    id: 35,
    name: "sabiá laranjeira",
    scientificName: "Turdus rufiventris",
    image: "https://i.imgur.com/ebNjEqC.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/95/59269_c3a95f9da82f9313c2bee7184bb3b8ff.mp3",
  },
  {
    id: 36,
    name: "sabiá-poca",
    scientificName: "Turdus amaurochalinus",
    image: "https://i.imgur.com/khgHcYw.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/73/37506_d39ef33315698f112000df5fefeeb242.mp3",
  },
  {
    id: 37,
    name: "calango do cerrado",
    scientificName: "Tropidurus torquatus",
    image: "https://i.imgur.com/FK9jEDI.png?height=150&width=150",
    backgroundColor: "#7a644bff",
    audioUrl: "",
  },
  {
    id: 38,
    name: "sai andorinha",
    scientificName: "Tersina viridis",
    image: "https://i.imgur.com/R6gE1nq.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/56/65071_9e9c27284a52a6ac40ee93e99c8f7e06.mp3",
  },
  {
    id: 39,
    name: "sai azul",
    scientificName: "Dacnis cayana",
    image: "https://i.imgur.com/kSKziCP.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/85/58796_01d9914c8c29b1fd40cde778a13bc56a.mp3",
  },
  {
    id: 40,
    name: "saira amarela",
    scientificName: "Tangara cayana",
    image: "https://i.imgur.com/8AS1Zoz.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/116/611061_2c8420de3f3d023377844789b0291509.mp3",
  },
  {
    id: 41,
    name: "sanhaço cinzento",
    scientificName: "Thraupis sayaca",
    image: "https://i.imgur.com/bNnJklU.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/34/43298_592e98fe5df71fefabe57a2c15af3289.mp3",
  },
  {
    id: 42,
    name: "suiriri",
    scientificName: "Tyrannus melancholicus",
    image: "https://i.imgur.com/0c0coSW.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/89/98693_83dcb76eb36e56bd2ed9b22956de9d71.mp3",
  },
  {
    id: 43,
    name: "tesourinha",
    scientificName: "Tyrannus savana",
    image: "https://i.imgur.com/Q8xIK4A.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/76/67300_095c2e88291ca4417eeaae1d7f5c2582.mp3",
  },
  {
    id: 44,
    name: "tico-tico",
    scientificName: "Zonotrichia capensis",
    image: "https://i.imgur.com/Zijv8XB.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/71/17166_158b29b0366895727ec5ca5a8f533486.mp3",
  },
  {
    id: 45,
    name: "urubu de cabeça preta",
    scientificName: "Coragyps atratus",
    image: "https://i.imgur.com/KRnHW22.png?height=150&width=150",
    backgroundColor: "#606C38",
    audioUrl:
      "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/87/78686_db4ffb1dd72f1003811e44b2036419b8.mp3",
  },
  {
    id: 46,
    name: "sarue",
    scientificName: "Didelphis aurita",
    image: "https://i.imgur.com/sgUQOy1.png?height=150&width=150",
    backgroundColor: "#7a644bff",
    audioUrl: "",
  },
];

export default function HomePage() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playBirdSound = (birdId: number, audioUrl: string) => {
    if (currentlyPlaying === birdId) {
      // Pausar se já estiver tocando
      if (audioRef.current) {
        audioRef.current.pause();
        setCurrentlyPlaying(null);
      }
    } else {
      // Parar áudio anterior se houver
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Tocar novo áudio
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play().catch(console.error);
      setCurrentlyPlaying(birdId);

      // Reset quando terminar
      audioRef.current.onended = () => {
        setCurrentlyPlaying(null);
      };
    }
  };

  return (
    <div className="min-h-screen bg-[#283618]">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:text-left lg:mb-16">
          <h1 className="font-cursive text-4xl md:text-6xl lg:text-7xl text-[#F39200] mb-4 ">
            Conheça seus
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#F39200] mb-6 font-cursive">
            Vizinhos
          </h1>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
              Estas e outras espécies vivem aqui neste jardim e pela vizinhança.
            </p>
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
              Quantos você consegue encontrar?
            </p>
            <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-orange-800 font-medium">
                • Cada árvore é um lar. Todo verde importa •
              </p>
              <p className="text-orange-700 text-sm mt-1">
                ♡ Espalhe vida, plante uma árvore ♡
              </p>
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
                      {currentlyPlaying === bird.id ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bird Info */}
              <div className="p-3 pt-0">
                <h3 className="font-bold text-white text-sm mb-1 text-center">
                  {bird.name}
                </h3>
                <p className="text-white text-xs text-center opacity-90 italic">
                  {bird.scientificName}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Viu alguma dessas aves por aí?
          </h3>
          <p className="text-gray-600 mb-6">
            Compartilhe conosco e ajude nossa comunidade a conhecer melhor a
            vida selvagem local!
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
  );
}
