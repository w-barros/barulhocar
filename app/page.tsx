"use client";

import { useEffect, useRef, useState, createRef } from "react";
import { Volume2, Camera, VolumeOff, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";

type Bird = {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  backgroundColor: string;
  audioUrl: string;
};

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRJLyYcCjsMSNc342wAvjS2Z1L1ii4-QsBT4Qkr25ADtm_ig4PjZkL6TTZCfHyIQA/pub?gid=1009587917&single=true&output=csv";

// parser simples (se tiver vírgulas dentro dos campos, considere PapaParse depois)
const parseCSV = (csv: string): Bird[] => {
  const [rawHeader, ...lines] = csv.split(/\r?\n/).filter(Boolean);
  const headerLine = rawHeader.replace(/^\uFEFF/, ""); // remove BOM
  const headers = headerLine.split(",");
  return lines.map((line) => {
    const cells = line.split(",");
    const row = Object.fromEntries(
      headers.map((h, i) => [h.trim(), (cells[i] || "").trim()])
    ) as any;
    return {
      id: Number(row.id),
      name: row.name,
      scientificName: row.scientificName,
      image: row.image,
      backgroundColor: row.backgroundColor || "#000000",
      audioUrl: row.audioUrl,
    };
  });
};

const saveLocallyThenRedirect = (file: File, url: string) => {
  const blobUrl = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = `registro-${Date.now()}.jpg`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(blobUrl);
  // pequeno delay para não interromper o download
  setTimeout(() => (window.location.href = url), 400);
};

async function loadBirds(): Promise<Bird[]> {
  const res = await fetch(CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Falha ao buscar CSV: ${res.status}`);
  const text = await res.text();
  return parseCSV(text);
}

export default function HomePage() {
  const [birds, setBirds] = useState<Bird[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await loadBirds();
        if (!cancelled) setBirds(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Erro ao carregar dados");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
      // pausa se sair da página
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const playBirdSound = (birdId: number, audioUrl: string) => {
    if (!audioUrl) return;
    if (currentlyPlaying === birdId) {
      audioRef.current?.pause();
      setCurrentlyPlaying(null);
    } else {
      audioRef.current?.pause();
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play().catch(console.error);
      setCurrentlyPlaying(birdId);
      audioRef.current.onended = () => setCurrentlyPlaying(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#283618]">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
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

        {/* Estados de carregamento/erro */}
        {loading && <p className="text-white/90">carregando espécies…</p>}
        {error && <p className="text-red-200">deu ruim: {error}</p>}

        {/* Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {birds.map((bird) => {
              const fileInputRef = createRef<HTMLInputElement>();
              const handleUpload = () => fileInputRef.current?.click();

              return (
                <Card
                  key={bird.id}
                  className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: bird.backgroundColor }}
                >
                  {/* Imagem + botões */}
                  <div className="relative aspect-square p-3">
                    <img
                      src={bird.image || "/placeholder.svg"}
                      alt={bird.name}
                      className="w-full h-full object-cover rounded-xl cursor-pointer"
                      onClick={() => playBirdSound(bird.id, bird.audioUrl)}
                    />

                    <div className="absolute top-2 left-2 right-2 flex justify-between">
                      {/* Som / Mudo */}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/10 hover:bg-white/25 border border-white/20 text-white shadow-lg transition-colors duration-200"
                        onClick={() => playBirdSound(bird.id, bird.audioUrl)}
                        aria-label={
                          currentlyPlaying === bird.id
                            ? "Pausar áudio"
                            : "Tocar áudio"
                        }
                      >
                        {currentlyPlaying === bird.id ? (
                          <VolumeOff className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </Button>

                      {/* Enviar Foto */}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/10 hover:bg-white/25 border border-white/20 text-white shadow-lg transition-colors duration-200"
                        onClick={handleUpload}
                        aria-label="Enviar foto"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        capture="environment"
                        className="hidden"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          saveLocallyThenRedirect(
                            file,
                            "https://forms.zohopublic.com/vidavizinha1/form/Envieseuregistro/formperma/IU-7mXWN9XQnURCFwIsJruhID8QpSXGHZ_vSiSKqP4U"
                          );
                        }}
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3 pt-0 text-center">
                    <h3 className="font-bold text-white text-sm">
                      {bird.name}
                    </h3>
                    <p className="text-white text-xs italic opacity-90">
                      {bird.scientificName}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

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
