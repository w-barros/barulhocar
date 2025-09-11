// lib/schema-issues.ts
export type IssueRow = {
  part: string;     // CarPart
  sector: string;   // Sector
  image: string;    // Img
  sound?: string;   // Sound (opcional)
  info: string;     // Info
};

const BASE_URL = "https://www.barulhocar.com.br/";
const PUBLISHER = {
  "@type": "Organization",
  name: "Barulho Car",
  logo: "https://i.imgur.com/Pd7HvGv.png",
};

const slugify = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export function buildLD(data: IssueRow[]) {
  const slugCounts = new Map<string, number>();
  const uniqueSlug = (name: string) => {
    const base = slugify(name.trim());
    const n = (slugCounts.get(base) || 0) + 1;
    slugCounts.set(base, n);
    return n > 1 ? `${base}-${n}` : base;
  };

  const websiteNode = {
    "@type": "WebSite",
    name: "Barulho Car",
    url: BASE_URL,
    description: "Identifique barulhos do carro e veja possíveis causas.",
    publisher: PUBLISHER,
  };

  const works = data.map((it) => {
    const name = it.part.trim();
    const sector = it.sector.trim();
    const slug = uniqueSlug(name);
    const id = `${BASE_URL}#issue/${slug}`;

    const node: any = {
      "@type": "CreativeWork",
      "@id": id,
      name,
      about: it.info,
      image: it.image,
      url: BASE_URL, // troque para `${BASE_URL}issues/${slug}` se tiver página por item
      description: `Barulho no(a) ${name} (${sector})`,
      inLanguage: "pt-BR",
      keywords: [name, sector, "barulho", "carro"],
      publisher: PUBLISHER,
      mainEntityOfPage: BASE_URL,
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
    "@graph": [websiteNode, ...works],
  };
}
