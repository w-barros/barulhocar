// app/components/SeletorEstado.tsx
"use client";

const URL_POR_UF: Record<string, string> = {
  AC: "https://www.detran.ac.gov.br/veiculos/veic-informacoes-de-servicos/solicitacoes/nada-consta-de-veiculos/",
  AL: "https://www.detran.al.gov.br/servicos/veiculos/consulta-veiculo/menu_lateral",
  AP: "https://www.detran.ap.gov.br/detranap/menu-servicos/veiculos-renavam/",
  AM: "https://www.detran.am.gov.br/servicos/certidao-negativa-de-multas/",
  BA: "https://servicos.detran.ba.gov.br/servico/Emitir-Nada-Consta-de-Veiculo/",
  CE: "https://sistemas.detran.ce.gov.br/central/servicos/nadaconsta",
  DF: "https://www.detran.df.gov.br/portal-de-servicos/servicos/veiculos/consulta-debitos-e-nada-consta/",
  ES: "https://renach2.es.gov.br/Habilitacao/Publico/pub_solicita_nadaconsta.aspx",
  GO: "https://www.detran.go.gov.br/servicos/veiculos/consulta-nada-consta",
  MA: "https://www.detran.ma.gov.br/inicio/formularios/Certidao.xhtml",
  MT: "https://www.detran.mt.gov.br/servicos/veiculo/consulta-debitos-e-nada-consta",
  MS: "https://www.detran.ms.gov.br/servicos/veiculos/emitir-nada-consta",
  MG: "https://www.detran.mg.gov.br/veiculos/servicos/extrato-e-certidao-nada-consta",
  PA: "https://www.detran.pa.gov.br/renach/renach-web/servicos/certidaoNegativa/indexCertidaoNegativa.jsf",
  PB: "https://detran.pb.gov.br/servicos/veiculos/emitir-nada-consta",
  PR: "https://www.detran.pr.gov.br/servicos/certidoes-de-veiculo-e-proprietario",
  PE: "https://www.detran.pe.gov.br/extrato-de-debitos-nada-consta",
  PI: "https://www.pi.getran.com.br/site/apps/veiculo/filtroplacarenavam-consultaveiculo.jsp",
  RJ: "https://www2.detran.rj.gov.br/portal/multas/certidaoEmitir",
  RN: "https://www.detran.rn.gov.br/servicos/veiculos/consulta-nada-consta",
  RS: "https://www.detran.rs.gov.br/certidao-de-registro-de-veiculo",
  RO: "https://centralservicos.detran.ro.gov.br/servico/emitir-certidao-nada-consta",
  RR: "https://www.detran.rr.gov.br/servicos/veiculos/emitir-nada-consta",
  SC: "https://www.detran.sc.gov.br/certidao-veiculos/",
  SP: "https://www.detran.sp.gov.br/detransp/pb/servico/habilitacao/_emitir_certidao_propriedade_veiculo?id=carta_de_servico_emitir_certidao_propriedade_veiculo",
  SE: "https://www.detran.se.gov.br/portal/?pg=certidao_negativa_debitos",
  TO: "https://www.to.gov.br/detran/certidao-de-nada-consta-de-veiculos/1nmbgmbcbyk1",
};

export default function SeletorEstado() {
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
        Acessar Detran
      </button>
    </form>
  );
}
