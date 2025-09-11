// lib/schema-issues.ts
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

const PUBLISHER = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Barulho Car",
  // se preferir ImageObject, troque para: { "@type": "ImageObject", url: "..." }
  logo: "https://i.imgur.com/Pd7HvGv.png",
};

const slugify = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
     .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

type BuildLdOptions = {
  /** ex.: (slug) => `${BASE_URL}issues/${slug}` */
  perItemUrl?: (slug: string) => string;
  /** Se true, elimina espaços extras nos textos longos */
  trimLongText?: boolean;
  /** Se quiser adicionar rating global real do app */
  aggregateRating?: { ratingValue: string; ratingCount: number };
};

export function buildLD(data: IssueRow[], opts: BuildLdOptions = {}) {
  const slugCounts = new Map<string, number>();
  const uniqueSlug = (name: string) => {
    const base = slugify(name.trim());
    const n = (slugCounts.get(base) || 0) + 1;
    slugCounts.set(base, n);
    return n > 1 ? `${base}-${n}` : base;
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

  const issueApps = data.map((it) => {
    const name = it.part.trim();
    const sector = it.sector.trim();
    const slug = uniqueSlug(name);
    const itemUrl = opts.perItemUrl ? opts.perItemUrl(slug) : BASE_URL;

    const about = opts.trimLongText ? it.info.replace(/\s+/g, " ").trim() : it.info;

    const node: any = {
      "@type": "WebApplication",
      "@id": `${BASE_URL}#issue/${slug}`,
      // mantém o mesmo “esqueleto” do seu exemplo:
      name: "Barulho Car",
      url: itemUrl,
      applicationCategory: "AutomotiveApplication",
      operatingSystem: "Web",
      description: "Identifique barulhos do carro e veja possíveis causas.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
      publisher: { "@id": ORG_ID },

      // diferenciação por item (herdado de CreativeWork):
      about,                              // texto explicando o problema
      image: it.image,                    // imagem do item
      inLanguage: "pt-BR",
      keywords: [name, sector, "barulho", "carro"],
      isPartOf: { "@id": APP_ID },
      mainEntityOfPage: itemUrl,

      // rótulos úteis:
      alternateName: `${name}`,
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

  return {
    "@context": "https://schema.org",
    "@graph": [PUBLISHER, appRoot, ...issueApps],
  };
}
