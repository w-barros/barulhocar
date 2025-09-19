"use client";
import React from "react";
import type { Metadata } from "next";

export default function ContatoPage() {
  // Função para adicionar atributos customizados após renderização
  React.useEffect(() => {
    const first = document.querySelector('input[name="Name_First"]');
    const last = document.querySelector('input[name="Name_Last"]');
    const email = document.querySelector('input[name="Email"]');
    const msg = document.querySelector('textarea[name="MultiLine"]');
    if (first) first.setAttribute("fieldType", "7");
    if (last) last.setAttribute("fieldType", "7");
    if (email) {
      email.setAttribute("checktype", "c5");
      email.setAttribute("fieldType", "9");
    }
    if (msg) msg.setAttribute("checktype", "c1");
  }, []);

  // Handler para submit com validação Zoho
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // @ts-ignore
    if (typeof window !== "undefined" && window.zf_ValidateAndSubmit) {
      // @ts-ignore
      if (!window.zf_ValidateAndSubmit()) {
        e.preventDefault();
        return false;
      }
    }
    // document.charset não é necessário
    return true;
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl text-white bg-neutral-800">
      <a
        href="/"
        className="inline-block mb-6 text-red-400 hover:text-red-600 transition-colors text-sm underline"
        aria-label="Voltar para a página inicial"
      >
        ← Voltar para a página inicial
      </a>
      <h1 className="text-3xl font-bold mb-6 text-red-500">Fale conosco</h1>
      <p className="mb-6">
        Preencha o formulário abaixo para enviar sua mensagem. Retornaremos o
        mais breve possível.
      </p>
      <form
        action="https://forms.zohopublic.com/vidavizinha1/form/FalacomigobbD/formperma/Mt3Z7k0gbgIOHppdDDb7Dc1_4EUeD6_Cm90xyb6GBqs/htmlRecords/submit"
        name="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        id="form"
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 shadow-md text-black"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Seu nome
          </label>
          <div className="flex gap-2">
            <div className="flex-1">
              <input
                type="text"
                maxLength={255}
                name="Name_First"
                placeholder="Nome"
                className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                maxLength={255}
                name="Name_Last"
                placeholder="Sobrenome"
                className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>
          <p id="Name_error" className="text-xs text-red-500 mt-1 hidden">
            Preencha seu nome.
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Email"
            maxLength={255}
            placeholder="Seu e-mail"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <p id="Email_error" className="text-xs text-red-500 mt-1 hidden">
            E-mail inválido.
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sua Mensagem <span className="text-red-500">*</span>
          </label>
          <textarea
            name="MultiLine"
            maxLength={65535}
            placeholder="Digite sua mensagem"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 min-h-[120px]"
          />
          <p id="MultiLine_error" className="text-xs text-red-500 mt-1 hidden">
            Mensagem obrigatória.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Enviar
        </button>
      </form>
      <script src="/js/validation.js"></script>
      <p className="text-xs text-white/60 mt-8">
        Última atualização: Setembro/2025
      </p>
    </main>
  );
}
