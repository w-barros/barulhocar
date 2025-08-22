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

/** === Utilidades para CSV === */

/** divide linha por vírgulas ignorando as que estão entre aspas */
function safeSplitCSVLine(line: string): string[] {
  const result: string[] = [];
  let cur = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      // aspas duplas dentro do campo ("") -> vira uma aspas
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

/** === Google Drive helpers === */

function getDriveId(url: string | null | undefined): string | null {
  if (!url) return null;
  let m = url.match(/\/d\/([a-zA-Z0-9_-]{10,})/); // /file/d/<id>/view
  if (m?.[1]) return m[1];
  m = url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/); // ?id=<id>
  if (m?.[1]) return m[1];
  return null;
}

/** preferido para <img src> */
function driveDirectViewUrl(id: string) {
  return `https://drive.google.com/uc?export=view&id=${id}`;
}

/** fallback se o direct view falhar */
function driveThumbnailUrl(id: string, size = 1600) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

/** Converte qualquer URL (Drive ou não) para algo exibível em <img> */
function toDirectImageUrl(url: string): string {
  const id = getDriveId(url);
  return id ? driveDirectViewUrl(id) : url;
}

/** === Parser principal === */

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
      photoUrl: toDirectImageUrl(row["Registro (Foto)"]),
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

/** === Página === */

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

            {registros.map((registro, index) => (
              <div key={registro.id}>
                <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="md:flex">
                      {/* Imagem */}
                      <div className="md:w-1/3">
                        <img
                          src={registro.photoUrl || "/placeholder.svg"}
                          alt={`Registro ${registro.id}`}
                          className="w-full h-48 md:h-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            const id = getDriveId(registro.photoUrl);
                            if (id && !el.dataset.fallbackTried) {
                              el.dataset.fallbackTried = "1";
                              el.src = driveThumbnailUrl(id, 1600);
                            } else {
                              el.src = "/placeholder.svg";
                            }
                          }}
                        />
                      </div>

                      {/* Conteúdo */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {registro.addedTime.toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })}
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
            ))}
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
