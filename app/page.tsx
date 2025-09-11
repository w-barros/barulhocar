"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { buildLD, type IssueRow } from "@/lib/schema-issues";
import ISSUES_DATA from "@/data/issues";

type CarIssue = {
  id: number; // id
  part: string; // CarPart
  sector: string; // Sector
  bgColor: string; // Color (hex ou mapeado)
  image: string; // Img
  audioUrl: string; // Sound (Drive)
  info: string; // Info
};

const ld = buildLD(ISSUES_DATA);

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSURYSnQEuzvHd2YaTx5WOz2_SWRz8WSJGR0S1XebMIACvozgZzdF8e9q7FTMZe_EOMu2F_QsW5h1P1/pub?output=csv";

// Mapa de nomes de cor -> hex
const colorMap: Record<string, string> = {
  vermelho: "#B81C1C",
  amarelo: "#EAB308",
  verde: "#16A34A",
  azul: "#2563EB",
  laranja: "#F97316",
  roxo: "#7C3AED",
  cinza: "#6B7280",
  preto: "#111827",
  branco: "#F3F4F6",
};

// Converte links do Drive para link direto
function driveViewToDirect(url: string): string {
  if (!url) return url;
  const m1 = url.match(/\/d\/([a-zA-Z0-9_-]{10,})\//);
  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  const id = (m1 && m1[1]) || (m2 && m2[1]);
  return id ? `https://docs.google.com/uc?export=download&id=${id}` : url;
}

// Split de linha CSV com suporte a aspas/vírgulas
function splitCSVLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

// Parser do CSV
const parseCSV = (csv: string): CarIssue[] => {
  const lines = csv.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const rawHeader = lines[0].replace(/^\uFEFF/, "");
  const headers = splitCSVLine(rawHeader);
  const idx = (n: string) => headers.findIndex((h) => h.trim() === n);

  const idIdx = idx("id");
  const partIdx = idx("CarPart");
  const sectorIdx = idx("Sector");
  const colorIdx = idx("Color");
  const imgIdx = idx("Img");
  const soundIdx = idx("Sound");
  const infoIdx = idx("Info");

  return lines.slice(1).map((line) => {
    const cells = splitCSVLine(line);
    const colorRaw = (cells[colorIdx] || "").toLowerCase();
    const bg =
      colorMap[colorRaw] ||
      (/#([0-9a-f]{3}|[0-9a-f]{6})/i.test(colorRaw) ? colorRaw : "#0F172A");

    return {
      id: Number(cells[idIdx] || 0),
      part: cells[partIdx] || "",
      sector: cells[sectorIdx] || "",
      bgColor: bg,
      image: cells[imgIdx] || "",
      audioUrl: driveViewToDirect((cells[soundIdx] || "").trim()),
      info: cells[infoIdx] || "",
    };
  });
};

async function loadCarIssues(): Promise<CarIssue[]> {
  const res = await fetch(CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Falha ao buscar CSV: ${res.status}`);
  const text = await res.text();
  return parseCSV(text);
}

// generate one schema.org script for each car issue
const schemaScript = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Barulho Car",
      url: "https://www.barulhocar.com.br/",
      description: "Identifique barulhos do carro e veja possíveis causas.",
      publisher: {
        "@type": "Organization",
        name: "Barulho Car",
        logo: "https://i.imgur.com/Pd7HvGv.png",
      },
    },
  ],
};

const schemaScriptIssues = async () => {
  try {
    const issues = await loadCarIssues();
    const issueSchemas = issues.map((it) => ({
      "@type": "CreativeWork",
      name: it.part,
      about: it.info,
      image: it.image,
      url: "https://www.barulhocar.com.br/",
      description: `Barulho no(a) ${it.part} (${it.sector})`,
      inLanguage: "pt-BR",
      keywords: [it.part, it.sector, "barulho", "carro"],
      publisher: {
        "@type": "Organization",
        name: "Barulho Car",
        logo: "https://i.imgur.com/Pd7HvGv.png",
      },
    }));
    schemaScript["@graph"].push(...issueSchemas);
  } catch (e) {
    console.error("Erro ao gerar schema dos issues:", e);
  } finally {
    return JSON.stringify(schemaScript);
  }
};

export default function HomePage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Barulho Car",
    url: "https://www.barulhocar.com.br/",
    applicationCategory: "AutomotiveApplication",
    operatingSystem: "Web",
    description: "Identifique barulhos do carro e veja possíveis causas.",
    // Preencha somente se for verdade:
    // aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: 123 },
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    publisher: {
      "@type": "Organization",
      name: "Barulho Car",
      logo: "https://i.imgur.com/Pd7HvGv.png",
    },
  };

  const [items, setItems] = useState<CarIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

  // ÚNICO <audio> persistente
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [selected, setSelected] = useState<CarIssue | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await loadCarIssues();
        if (!cancelled) setItems(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Erro ao carregar dados");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const playSound = async (id: number, rawUrl: string) => {
    const url = rawUrl?.trim();
    const audio = audioRef.current;
    if (!url || !audio) return;

    // Alterna play/pause do mesmo item
    if (currentlyPlaying === id && !audio.paused) {
      audio.pause();
      setCurrentlyPlaying(null);
      return;
    }

    try {
      // Reinicia, troca src e toca
      audio.pause();
      audio.src = url; // ex.: https://docs.google.com/uc?export=download&id=...
      audio.currentTime = 0;
      audio.onerror = () => {
        setCurrentlyPlaying(null);
        console.error("Falha ao tocar áudio:", url);
        alert(
          "Não consegui tocar este áudio. Verifique se o arquivo está público no Google Drive e em formato suportado (ex.: MP3)."
        );
      };
      audio.onended = () => setCurrentlyPlaying(null);

      await audio.play();
      setCurrentlyPlaying(id);
    } catch (err) {
      console.error("play() falhou:", err);
    }
  };

  const openInfo = (it: CarIssue) => {
    setSelected(it);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-800">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12 lg:text-left lg:mb-16">
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl text-red-500 mb-4">
            Barulho estranho no carro?
          </h1>
          <p className="text-white/80 max-w-2xl">
            Clique no cartão (ou no ícone de informação) para detalhes. Use o
            botão de som para ouvir o ruído.
          </p>
        </div>

        {loading && <p className="text-white/90">Carregando dados…</p>}
        {error && <p className="text-red-200">deu ruim: {error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {items.map((it) => (
              <Card
                key={it.id}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-white/60"
                style={{ backgroundColor: it.bgColor }}
                role="button"
                tabIndex={0}
                onClick={() => openInfo(it)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openInfo(it);
                  }
                }}
                aria-label={`Mais informações sobre ${it.part}`}
              >
                {/* Imagem + botões */}
                <div className="relative aspect-square p-3">
                  <img
                    src={it.image || "/placeholder.svg"}
                    alt={it.part}
                    className="w-full h-full object-cover rounded-xl"
                  />

                  <div className="absolute top-2 left-2 right-2 flex justify-between">
                    {/* Botão Som (toca direto) */}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/10 hover:bg-white/25 border border-white/20 text-white shadow-lg transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation(); // não abrir modal
                        playSound(it.id, it.audioUrl);
                      }}
                      aria-label={
                        currentlyPlaying === it.id
                          ? "Pausar áudio"
                          : "Tocar áudio"
                      }
                      disabled={!it.audioUrl}
                    >
                      {currentlyPlaying === it.id ? (
                        <VolumeOff className="h-4 w-4" />
                      ) : (
                        <Volume2 className="h-4 w-4" />
                      )}
                    </Button>

                    {/* Botão Informação (abre modal) */}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/10 hover:bg-white/25 border border-white/20 text-white shadow-lg transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInfo(it);
                      }}
                      aria-label="Informações"
                      title="Informações"
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Info resumida */}
                <div className="p-3 pt-0 text-center">
                  <h3 className="font-bold text-white text-sm">{it.part}</h3>
                  <p className="text-white text-xs italic opacity-90">
                    {it.sector}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* ÚNICO player persistente (inline ajuda no iOS) */}
        <audio ref={audioRef} preload="none" playsInline className="hidden" />

        {/* Modal de informações */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-lg">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl">{selected.part}</DialogTitle>
                  <DialogDescription className="text-white/70">
                    {selected.sector}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  {selected.image && (
                    <img
                      src={selected.image}
                      alt={selected.part}
                      className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto rounded-lg"
                    />
                  )}
                  <p className="text-sm leading-relaxed text-justify whitespace-pre-line">
                    {selected.info}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
      {/* <Script
        id="ld-webapp"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      /> */}
      <Script
        id="ld-webapp"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </div>
  );
}
