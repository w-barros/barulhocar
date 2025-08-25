"use client";

import * as React from "react";
import { Calendar, Camera, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";

type Register = {
  addedTime: Date;
  id: number;
  name: string;
  email: string;
  comment: string;
  photoUrl: string;
  status: "Aprovado" | "Pendente" | "Rejeitado" | string;
};

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR3iDYlbrIQelEFX_bPTOc4j4HsRDErFUSNub2V_focul0exKh6eC9F6vISD0SgMCzeJlVqrSIOKbQO/pub?gid=0&single=true&output=csv";

/* ================= Utilidades para CSV ================= */

/** divide linha por vírgulas ignorando as que estão entre aspas */
function safeSplitCSVLine(line: string): string[] {
  const result: string[] = [];
  let cur = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (insideQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (ch === "," && !insideQuotes) {
      result.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result.map((s) => s.trim());
}

/** "14/08/2025 21:20:26" -> Date (timezone do navegador) */
function parseBrDateTime(s: string): Date {
  const m = s.match(
    /^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/
  );
  if (!m) return new Date(s);
  const [, dd, mm, yyyy, HH = "00", MM = "00", SS = "00"] = m;
  return new Date(
    Number(yyyy),
    Number(mm) - 1,
    Number(dd),
    Number(HH),
    Number(MM),
    Number(SS)
  );
}

/* ================= Helpers para imagens (Drive/Photos) ================= */

/** tenta extrair ID do Drive a partir de diferentes formatos de URL */
function extractDriveId(url?: string | null): string | null {
  if (!url) return null;
  // /file/d/ID/...
  let m = url.match(/\/file\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m?.[1]) return m[1];
  // .../d/ID/...
  m = url.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m?.[1]) return m[1];
  // ?id=ID
  m = url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (m?.[1]) return m[1];
  return null;
}

/** gera uma lista de candidatos de URL "diretas" para usar no <img> */
function driveUrlCandidates(raw?: string | null, size = 2000): string[] {
  if (!raw) return ["/placeholder.svg"];
  const id = extractDriveId(raw);
  if (!id) {
    // não é Drive → retorna a própria
    return [raw];
  }

  // candidatos (ordem importa)
  const lh3 = `https://lh3.googleusercontent.com/d/${id}=w${size}-h${size}-no`;
  const view = `https://drive.google.com/uc?export=view&id=${id}`;
  const thumb = `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;

  // Se a original já era lh3, mantém como primeira
  const base = [raw, lh3, view, thumb];
  return Array.from(new Set(base)); // remove duplicadas mantendo a ordem
}

/* ================= Parser principal ================= */

function parseRegistersCSV(csv: string): Register[] {
  const lines = csv.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const headerLine = lines[0].replace(/^\uFEFF/, ""); // remove BOM
  const headers = safeSplitCSVLine(headerLine);

  return lines.slice(1).map((line) => {
    const cells = safeSplitCSVLine(line);
    const row = Object.fromEntries(
      headers.map((h, i) => [h.trim(), (cells[i] ?? "").trim()])
    ) as Record<string, string>;

    return {
      addedTime: parseBrDateTime(row["Added Time"]),
      id: Number(row["ID"]),
      name: row["Seu Nome"],
      email: row["Seu E-mail"],
      comment: row["Fale um pouco sobre seu registro!"],
      photoUrl: row["Registro (Foto)"],
      status: (row["Status"] || "").trim(),
    };
  });
}

async function loadRegisters(): Promise<Register[]> {
  const res = await fetch(CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Falha ao buscar CSV: ${res.status}`);
  const text = await res.text();
  return parseRegistersCSV(text);
}

/* ================= Página ================= */

export default function RegistrosPage() {
  const [registros, setRegistros] = React.useState<Register[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const all = await loadRegisters();
        const approved = all.filter((r) => r.status === "Aprovado");
        if (!cancelled) setRegistros(approved);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Erro ao carregar dados");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // CSS do backdrop do <dialog> (mova para seu CSS global se preferir)
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `dialog::backdrop { background: rgba(0,0,0,.82); }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#283618]">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-[#F39200] mb-4 font-cursive">
            Ver Registros
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Confira os avistamentos e registros compartilhados pela nossa
            comunidade de observadores de aves.
          </p>
        </div>

        {/* Estados */}
        {loading && <p className="text-white/90">carregando registros…</p>}
        {error && <p className="text-red-200">deu ruim: {error}</p>}

        {/* Lista */}
        {!loading && !error && (
          <div className="max-w-4xl mx-auto space-y-8">
            {registros.length === 0 && (
              <Card>
                <CardContent className="p-6 text-center text-gray-700">
                  Nenhum registro aprovado por enquanto.
                </CardContent>
              </Card>
            )}

            {registros.map((registro, index) => {
              const modalId = `dlg-${registro.id}`;
              const srcCandidatesThumb = driveUrlCandidates(
                registro.photoUrl,
                1800
              );
              const srcCandidatesFull = driveUrlCandidates(
                registro.photoUrl,
                2400
              );

              return (
                <div key={registro.id}>
                  <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="md:flex">
                        {/* Imagem */}
                        <div className="md:w-1/3">
                          <img
                            src={srcCandidatesThumb[0] || "/placeholder.svg"}
                            data-try="0"
                            alt={`Registro ${registro.id}`}
                            className="w-full h-48 md:h-full object-cover cursor-zoom-in"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onClick={() => {
                              const dlg = document.getElementById(
                                modalId
                              ) as HTMLDialogElement | null;
                              if (
                                !window.HTMLDialogElement ||
                                !dlg?.showModal
                              ) {
                                // fallback: abre em nova aba se <dialog> não for suportado
                                const currentSrc =
                                  (event?.currentTarget as HTMLImageElement)
                                    ?.src || srcCandidatesFull[0];
                                window.open(
                                  currentSrc,
                                  "_blank",
                                  "noopener,noreferrer"
                                );
                                return;
                              }
                              if (!dlg.open) dlg.showModal();
                            }}
                            onError={(e) => {
                              const el = e.currentTarget as HTMLImageElement & {
                                dataset: any;
                              };
                              const i = Number(el.dataset.try || "0");
                              const tries = srcCandidatesThumb;
                              if (i + 1 < tries.length) {
                                el.dataset.try = String(i + 1);
                                el.src = tries[i + 1];
                              } else {
                                el.src = "/placeholder.svg";
                              }
                            }}
                          />

                          {/* modal nativo */}
                          <dialog
                            id={modalId}
                            className="p-0 bg-transparent"
                            aria-label="Visualização da imagem"
                            onClick={(e) => {
                              // fecha se clicar fora da imagem
                              if (e.target === e.currentTarget)
                                (e.currentTarget as HTMLDialogElement).close();
                            }}
                          >
                            <img
                              src={srcCandidatesFull[0] || "/placeholder.svg"}
                              data-try="0"
                              alt={`Registro ${registro.id}`}
                              className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-lg"
                              loading="eager"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                const el =
                                  e.currentTarget as HTMLImageElement & {
                                    dataset: any;
                                  };
                                const i = Number(el.dataset.try || "0");
                                const tries = srcCandidatesFull;
                                if (i + 1 < tries.length) {
                                  el.dataset.try = String(i + 1);
                                  el.src = tries[i + 1];
                                } else {
                                  el.src = "/placeholder.svg";
                                }
                              }}
                            />
                          </dialog>
                        </div>

                        {/* Conteúdo */}
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {registro.addedTime.toLocaleDateString(
                                  "pt-BR",
                                  {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{registro.name}</span>
                            </div>
                          </div>

                          <p className="text-gray-800 leading-relaxed text-lg">
                            {registro.comment || "—"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Separador entre cards */}
                  {index < registros.length - 1 && (
                    <Separator className="my-8 bg-gray-200" />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
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
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            <Camera className="h-5 w-5" />
            <span>Mande seu Registro</span>
          </a>
        </div>
      </main>
    </div>
  );
}
