// app/components/SeletorEstado.tsx
"use client";

const URL_POR_UF: Record<string, string> = {
  AC: "https://sefaznet.ac.gov.br/sefazonline/servlet/wcnd",
  AL: "https://contribuinte.sefaz.al.gov.br/certidao/",
  AP: "https://www.sefaz.ap.gov.br/",
  AM: "https://www.sefaz.am.gov.br/",
  BA: "https://servicos.sefaz.ba.gov.br/sistemas/IPVAA/Modulos/IPVAA/certidoes_ipva.aspx",
  CE: "https://portalservicos.sefaz.ce.gov.br/",
  DF: "https://receita.fazenda.df.gov.br/",
  ES: "https://sefaz.es.gov.br/emissao-de-certidoes",
  GO: "https://www.sefaz.go.gov.br/certidao/emissao/",
  MA: "https://sistemas1.sefaz.ma.gov.br/portalsefaz/",
  MT: "https://www.sefaz.mt.gov.br/",
  MS: "https://www.sefaz.ms.gov.br/certidao-negativa/",
  MG: "https://www.fazenda.mg.gov.br/empresas/certidao_debitos/",
  PA: "https://sefa.pa.gov.br/",
  PB: "https://www.sefaz.pb.gov.br/servirtual/certidoes/",
  PR: "https://www.fazenda.pr.gov.br/servicos/Mais-buscados/Certidoes/",
  PE: "https://www.sefaz.pe.gov.br/Servicos/IPVA/",
  PI: "https://portal.sefaz.pi.gov.br/",
  RJ: "https://portal.fazenda.rj.gov.br/ipva/certidao-de-situacao-fiscal/",
  RN: "https://compras.rn.gov.br/emitirCertidoes.html",
  RS: "https://www.ipva.rs.gov.br/",
  RO: "https://agenciavirtual.sefin.ro.gov.br/",
  RR: "https://www.sefaz.rr.gov.br/cidadao/certidao-negativa",
  SC: "https://www.sef.sc.gov.br/servicos/emitir-certidao-negativa-de-debitos-fiscais-cnd",
  SP: "https://portal.fazenda.sp.gov.br/servicos/certidoes/Paginas/Certidão-de-Pagamento-de-IPVA-.aspx",
  SE: "https://www.sefaz.se.gov.br/SitePages/emissao_certidao_negativa.aspx",
  TO: "https://ipva.sefaz.to.gov.br/quitacao.php",
};

export default function SeletorFazenda() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const uf = (e.currentTarget.elements.namedItem("uf") as HTMLSelectElement)
      ?.value;
    const url = URL_POR_UF[uf as keyof typeof URL_POR_UF];
    if (!url) {
      alert("Não há link configurado para este estado.");
      return;
    }
    // redireciona (ou use window.open(url, "_blank", "noopener,noreferrer"))
    //window.location.href = url;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-wrap items-end gap-3">
      <div className="min-w-64">
        <label htmlFor="uf" className="block text-sm font-medium">
          Estado
        </label>
        <select
          id="uf"
          name="uf"
          required
          defaultValue=""
          className="mt-1 block w-full rounded-xl border px-3 py-2"
          aria-describedby="uf-ajuda"
        >
          <option value="" disabled>
            Selecione seu Estado
          </option>

          <optgroup label="Norte">
            <option value="AC">Acre (AC)</option>
            <option value="AP">Amapá (AP)</option>
            <option value="AM">Amazonas (AM)</option>
            <option value="PA">Pará (PA)</option>
            <option value="RO">Rondônia (RO)</option>
            <option value="RR">Roraima (RR)</option>
            <option value="TO">Tocantins (TO)</option>
          </optgroup>

          <optgroup label="Nordeste">
            <option value="AL">Alagoas (AL)</option>
            <option value="BA">Bahia (BA)</option>
            <option value="CE">Ceará (CE)</option>
            <option value="MA">Maranhão (MA)</option>
            <option value="PB">Paraíba (PB)</option>
            <option value="PE">Pernambuco (PE)</option>
            <option value="PI">Piauí (PI)</option>
            <option value="RN">Rio Grande do Norte (RN)</option>
            <option value="SE">Sergipe (SE)</option>
          </optgroup>

          <optgroup label="Centro-Oeste">
            <option value="DF">Distrito Federal (DF)</option>
            <option value="GO">Goiás (GO)</option>
            <option value="MT">Mato Grosso (MT)</option>
            <option value="MS">Mato Grosso do Sul (MS)</option>
          </optgroup>

          <optgroup label="Sudeste">
            <option value="ES">Espírito Santo (ES)</option>
            <option value="MG">Minas Gerais (MG)</option>
            <option value="RJ">Rio de Janeiro (RJ)</option>
            <option value="SP">São Paulo (SP)</option>
          </optgroup>

          <optgroup label="Sul">
            <option value="PR">Paraná (PR)</option>
            <option value="RS">Rio Grande do Sul (RS)</option>
            <option value="SC">Santa Catarina (SC)</option>
          </optgroup>
        </select>
        {/* <p id="uf-ajuda" className="mt-1 text-xs text-gray-500">
          Escolha o estado e clique em “Ir”.
        </p> */}
      </div>

      <button
        type="submit"
        className="h-10 px-4 rounded-xl bg-black text-white"
      >
        Acessar Fazenda (Sefaz)
      </button>
    </form>
  );
}
