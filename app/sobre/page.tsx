import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Barulho Car",
  description:
    "Conheça o projeto Barulho Car, sua missão e quem está por trás do site.",
};

export default function SobrePage() {
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
        Sobre o Barulho Car
      </h1>
      <p className="mb-4">
        O <strong>Barulho Car</strong> é um projeto criado para ajudar
        motoristas e entusiastas a identificar barulhos estranhos em seus
        carros, trazendo informações claras e acessíveis sobre possíveis causas
        e soluções.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Missão</h2>
      <p className="mb-4">
        Nossa missão é democratizar o conhecimento automotivo, facilitando o
        diagnóstico de ruídos e promovendo a manutenção preventiva de veículos.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Quem faz</h2>
      <p className="mb-4">
        O site foi idealizado e desenvolvido por apaixonados por tecnologia e
        carros, com o objetivo de compartilhar conhecimento e ajudar a
        comunidade automotiva.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contato</h2>
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
    </main>
  );
}
