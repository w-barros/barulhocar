// lib/schema-giant.ts
export type IssueRow = {
  part: string;     // CarPart
  sector: string;   // Sector
  image: string;    // Img
  sound?: string;   // Sound (opcional)
  info: string;     // Info
};

const BASE_URL = "https://www.barulhocar.com.br/";
const ORG_ID = `${BASE_URL}#org`;
const APP_ID = `${BASE_URL}#app`;

const slugify = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
     .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

type BuildOpts = {
  perItemUrl?: (slug: string) => string; // ex.: slug => `${BASE_URL}issues/${slug}`
  trimLongText?: boolean;                // normaliza espaços em info
  aggregateRating?: { ratingValue: string; ratingCount: number }; // se for real
};

export function makeGiantLDString(data: IssueRow[], opts: BuildOpts = {}) {
  const slugCounts = new Map<string, number>();
  const uniqueSlug = (name: string) => {
    const base = slugify(name.trim());
    const n = (slugCounts.get(base) || 0) + 1;
    slugCounts.set(base, n);
    return n > 1 ? `${base}-${n}` : base;
  };

  // Nós “base” (publisher + app raiz) para não repetir campos em cada item
  const publisher = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Barulho Car",
    logo: "https://i.imgur.com/Pd7HvGv.png",
  };

  const appRoot: any = {
    "@type": "WebApplication",
    "@id": APP_ID,
    name: "Barulho Car",
    url: BASE_URL,
    applicationCategory: "AutomotiveApplication",
    operatingSystem: "Web",
    description: "Identifique barulhos do carro e veja possíveis causas.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    publisher: { "@id": ORG_ID },
  };

  if (opts.aggregateRating) {
    appRoot.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: opts.aggregateRating.ratingValue,
      ratingCount: opts.aggregateRating.ratingCount,
    };
  }

  // Um WebApplication por “issue” (seguindo o formato que você pediu)
  const items = data.map((it) => {
    const name = it.part.trim();
    const sector = it.sector.trim();
    const slug = uniqueSlug(name);
    const itemUrl = opts.perItemUrl ? opts.perItemUrl(slug) : BASE_URL;
    const about = opts.trimLongText ? it.info.replace(/\s+/g, " ").trim() : it.info;

    const node: any = {
      "@type": "WebApplication",
      "@id": `${BASE_URL}#issue/${slug}`,
      name: "Barulho Car",
      url: itemUrl,
      applicationCategory: "AutomotiveApplication",
      operatingSystem: "Web",
      description: "Identifique barulhos do carro e veja possíveis causas.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
      publisher: { "@id": ORG_ID },

      // diferenciação por item
      about,
      image: it.image,
      inLanguage: "pt-BR",
      keywords: [name, sector, "barulho", "carro"],
      isPartOf: { "@id": APP_ID },
      mainEntityOfPage: itemUrl,
      alternateName: name,
      additionalType: "https://schema.org/CreativeWork",
    };

    if (it.sound) {
      node.audio = {
        "@type": "AudioObject",
        contentUrl: it.sound,
        encodingFormat: "audio/mpeg",
        inLanguage: "pt-BR",
      };
    }
    return node;
  });

  const doc = { "@context": "https://schema.org", "@graph": [publisher, appRoot, ...items] };

  // MINIFICADO: sem espaços/linhas extras (ideal pro “gigante”)
  return JSON.stringify(doc);
}
