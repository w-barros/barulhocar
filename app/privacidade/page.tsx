import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Barulho Car",
  description:
    "Saiba como coletamos, usamos e protegemos suas informações no Barulho Car.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl text-white bg-neutral-800">
      <a
        href="/"
        className="inline-block mb-6 text-red-400 hover:text-red-600 transition-colors text-sm underline"
        aria-label="Voltar para a página inicial"
      >
        ← Voltar para a página inicial
      </a>
      <h1 className="text-3xl font-bold mb-6 text-red-500">
        Política de Privacidade
      </h1>
      <p className="mb-4">
        Esta Política de Privacidade descreve como suas informações são
        coletadas, usadas e protegidas ao utilizar o site Barulho Car.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Informações coletadas
      </h2>
      <p className="mb-4">
        Podemos coletar informações como endereço IP, tipo de navegador, páginas
        visitadas e dados fornecidos voluntariamente em formulários. Utilizamos
        cookies e tecnologias similares para melhorar sua experiência.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Uso das informações
      </h2>
      <p className="mb-4">
        As informações coletadas são usadas para melhorar o site, personalizar
        conteúdo, responder dúvidas e exibir anúncios relevantes.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Compartilhamento</h2>
      <p className="mb-4">
        Não compartilhamos suas informações pessoais com terceiros, exceto
        quando exigido por lei ou para funcionamento do site (ex: serviços de
        anúncios do Google).
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Cookies do Google AdSense
      </h2>
      <p className="mb-4">
        O Google pode usar cookies para exibir anúncios com base em visitas
        anteriores ao site. Você pode desativar a personalização de anúncios nas
        configurações do Google.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Segurança</h2>
      <p className="mb-4">
        Adotamos medidas para proteger suas informações, mas nenhum sistema é
        100% seguro.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Alterações</h2>
      <p className="mb-4">
        Esta política pode ser atualizada periodicamente. Recomendamos que você
        a revise regularmente.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contato</h2>
      <p className="mb-4">
        Em caso de dúvidas sobre esta política, entre em contato pelo&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-red-300 hover:text-red-500"
          href="https://forms.zohopublic.com/vidavizinha1/form/FalacomigobbD/formperma/97Zjl4JGQS3gRxjc56xdmjLJNnlhyLauEZe9r2HyhRk"
        >
          Formulario de Contato
        </a>
      </p>
      <p className="text-xs text-white/60 mt-8">
        Última atualização: Setembro/2025
      </p>
      <a
        href="/"
        className="inline-block mb-6 text-red-400 hover:text-red-600 transition-colors text-sm underline"
        aria-label="Voltar para a página inicial"
      >
        ← Voltar para a página inicial
      </a>
    </main>
  );
}
