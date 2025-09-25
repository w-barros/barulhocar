import Navbar from "@/components/navbar";
import SeletorEstado from "@/components/select";
import Select from "@/components/select";
import SeletorFazenda from "@/components/select-fazenda";
import SelectFazenda from "@/components/select-fazenda";
import "../globals.css";

export default function ContratoCompraEVenda() {
  return (
    <div className="min-h-screen bg-neutral-800">
      <Navbar />

      <main className="container mx-auto px-4 py-8 bg-white max-w-5xl">
        <header className="mb-8">
          <h1 className="main-header">Guia de Compra e Venda de Carros</h1>
          <p className="mt-2 text-gray-600">
            [texto 1] Entenda o essencial e gere um contrato preenchido em
            minutos. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Labubu
          </p>
        </header>

        <section aria-labelledby="sec-importante" className=" prose max-w-none">
          <h2 className="mt-6 sub-header">Vai comprar ou vender um carro?</h2>
          <p className="mt-3">
            [texto 2] Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor…Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="mt-7 sub-header">O que é necessário?</h2>
          <p className="mt-3">
            [texto 3] Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor…
          </p>

          <ol className="mt-2 list-decimal ml-5 space-y-5 pl-5">
            <li className="mt-2">
              <h3 className="text-xl font-bold">Faça uma Vistoria no carro</h3>
              <p>
                [texto 4] Uma vistoria é essencial para entender e registrar a
                situação do Carro no momento da transação, protegendo ambas as
                partes de situações chatonildas no futuro. Nós disponilizamos
                gratuitamente este modelo de Vistoria que gera um documento PDF
                ao termino do preencimento, que deve ser feito presencialmente
                no Carro (pode ser feito pelo Celular).
                <a
                  className="underline underline-3 text-blue-600 underline-offset-2"
                  href="https://portalservicos.senatran.serpro.gov.br/#/home"
                >
                  ‎ Acesse clicando aqui
                </a>
                .
              </p>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">2 Testemunhas</h3>
              <p>
                {" "}
                [texto 5]
                <span className="underline decoration-solid font-semibold">
                  Para o contrato assinado digitalmente pelo iti.gov.br, não é
                  necessária a participação de Testemunhas
                </span>{" "}
                , conforme lei 13.105/2015, art. 784, §4º. Caso você opte por
                imprimir e assinar manualmente, é necessária a assinatura de
                duas (02) testemunhas.
              </p>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">
                Consulta CRLV (Documento do Carro)
              </h3>
              <p>
                [texto 6] O Vendedor deve apresentar ao Comprador a CRLV
                (Documento do Carro). O Comprador deve consultar X, Y e Z com
                esses dados.
              </p>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">
                Emita Certidão Negativa DETRAN
              </h3>
              <p>
                [texto 7] Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor…
              </p>
              <div>
                <Select />
              </div>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">Consulta no SENATRAN</h3>
              <p>
                É importante consultar a placa e RENAVAN do veículo no SENATRAN
                pra saber se a ratazana proprietaria do mesmo não esta jurada de
                morte pela polícia. Acesse aqui{" "}
                <a
                  className="underline underline-3 text-blue-600 underline-offset-2"
                  href="https://portalservicos.senatran.serpro.gov.br/#/home"
                >
                  SENATRAN
                </a>
              </p>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">Certidão Negativa DNIT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </p>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">
                Certidão Negativa Fazenda (IPVA em dia)
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </p>
              <div>
                <SeletorFazenda />
              </div>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">
                RGs do Comprovador e Vendedor
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </p>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">Contrato Detalhado</h3>
              <p>
                É importante se apoiar em um contrato para não tomar golpes. Use
                o modelo de contrato que a BarulhoCar disponiliza gratuitamente,
                acessando{" "}
                <a
                  className="underline underline-3 text-blue-600 underline-offset-2"
                  href="https://portalservicos.senatran.serpro.gov.br/#/home"
                >
                  Aqui
                </a>
                .
              </p>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">
                Notificação de Venda feita pelo vendedor (depois de assinatura
                do Contrato)
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="sec-form" className="mt-5">
          <h2 className="text-2xl font-bold">Contrato gratuito BarulhoCar</h2>
          <p className="text-gray-700">
            Preencha o formulário a seguir para gerarmos agora um contrato
            preenchido e pronto para uso.
          </p>

          <form
            action="/api/contrato"
            method="post"
            noValidate
            className="mt-2 space-y-6"
          >
            <fieldset className="">
              <legend className="text-lg font-bold">Dados do Comprador</legend>

              <div>
                <label htmlFor="nome" className="block font-medium">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="nome" className="block font-medium">
                  CPF
                </label>
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  autoComplete="cpf"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="nome" className="block font-medium">
                  Endereço
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>
            </fieldset>

            <fieldset className="">
              <legend className="text-lg font-bold">Dados do Vendedor</legend>

              <div>
                <label htmlFor="nome" className="block font-medium">
                  Nome
                </label>
                <input
                  id="seller_name"
                  name="name"
                  type="text"
                  autoComplete="seller_name"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="nome" className="block font-medium">
                  CPF
                </label>
                <input
                  id="seller_cpf"
                  name="seller_cpf"
                  type="text"
                  autoComplete="seller_cpf"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="nome" className="block font-medium">
                  Endereço
                </label>
                <input
                  id="seller_address"
                  name="seller_address"
                  type="seller_address"
                  autoComplete="seller_address"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>
            </fieldset>

            <fieldset className="">
              <legend className="text-lg font-bold">
                Dados da Primeira Testemunha
              </legend>
              <p className="mt-0 text-gray-500">
                Você só precisa de Testemunhas se for imprimir e assinar o
                Contrato à mão, se você for assinar pelo iti.gov.br
                (digitalmente) não vai precisar de Testemunhas, e pode deixar
                estes campos em branco.
              </p>

              <div>
                <label htmlFor="nome" className="block font-medium">
                  Nome
                </label>
                <input
                  id="seller_name"
                  name="name"
                  type="text"
                  autoComplete="seller_name"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="nome" className="block font-medium">
                  CPF
                </label>
                <input
                  id="seller_cpf"
                  name="seller_cpf"
                  type="text"
                  autoComplete="seller_cpf"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>
            </fieldset>

            <fieldset className="">
              <legend className="text-lg font-bold">
                Dados da Segunda Testemunha
              </legend>
              <p className="mt-0 text-gray-500">
                Você só precisa de Testemunhas se for imprimir e assinar o
                Contrato à mão, se você for assinar pelo iti.gov.br
                (digitalmente) não vai precisar de Testemunhas, e pode deixar
                estes campos em branco.
              </p>
              <div>
                <label htmlFor="nome" className="block font-medium mt-4">
                  Nome
                </label>
                <input
                  id="seller_name"
                  name="name"
                  type="text"
                  autoComplete="seller_name"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="nome" className="block font-medium">
                  CPF
                </label>
                <input
                  id="seller_cpf"
                  name="seller_cpf"
                  type="text"
                  autoComplete="seller_cpf"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>
            </fieldset>

            <fieldset className="">
              <legend className="text-lg font-bold">Dados do veículo</legend>

              <div>
                <label htmlFor="marca" className="block font-medium">
                  RENAVAN
                </label>
                <input
                  id="renavan"
                  name="renavan"
                  type="text"
                  autoComplete="renavan"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="placa" className="block font-medium">
                  Placa
                </label>
                <input
                  id="placa"
                  name="placa"
                  type="text"
                  inputMode="text"
                  pattern="[A-Za-z]{3}[0-9A-Za-z]{4}"
                  aria-describedby="placa-ajuda"
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
                <p id="placa-ajuda" className="mt-1 text-xs text-gray-500">
                  Formato Mercosul.
                </p>
              </div>

              <div>
                <label htmlFor="marca" className="block font-medium">
                  Marca/Modelo
                </label>
                <input
                  id="marca"
                  name="marca"
                  type="text"
                  autoComplete="marca"
                  required
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="preco" className="block font-medium">
                  Preço (R$)
                </label>
                <input
                  id="price"
                  name="price"
                  inputMode="decimal"
                  pattern="^\d+(,\d{2})?$"
                  required
                  aria-describedby="preco-ajuda"
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
                <p id="preco-ajuda" className="mt-1 text-xs text-gray-500">
                  Use vírgula para centavos.
                </p>
              </div>
            </fieldset>

            <fieldset className="">
              <legend className="text-lg font-bold">
                Acessórios / Informações adicionais
              </legend>
              <p className="mt-1 text-gray-500">
                Preencha apenas os itens instalados ou que não são originais do
                veículo. Itens não aplicáveis podem ficar em branco.
              </p>

              <div>
                <label htmlFor="preco" className="block font-medium mt-2">
                  Som automotivo
                </label>
                <input
                  id="som"
                  name="som"
                  pattern="^\d+(,\d{2})?$"
                  aria-describedby="som"
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
                <p id="preco-ajuda" className="mt-1 text-xs text-gray-500">
                  Se não tiver, deixe em branco.
                </p>
              </div>

              <div>
                <label htmlFor="preco" className="block font-medium">
                  Alto-falantes
                </label>
                <input
                  id="som"
                  name="som"
                  pattern="^\d+(,\d{2})?$"
                  aria-describedby="som"
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
                <p id="preco-ajuda" className="mt-1 text-xs text-gray-500">
                  Se não tiver, deixe em branco.
                </p>
              </div>

              <div>
                <label htmlFor="preco" className="block font-medium">
                  Alarme
                </label>
                <input
                  id="som"
                  name="som"
                  pattern="^\d+(,\d{2})?$"
                  aria-describedby="som"
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
                <p id="preco-ajuda" className="mt-1 text-xs text-gray-500">
                  Se não tiver, deixe em branco.
                </p>
              </div>

              <div>
                <label htmlFor="preco" className="block font-medium">
                  Rodas não-originais
                </label>
                <input
                  id="som"
                  name="som"
                  pattern="^\d+(,\d{2})?$"
                  aria-describedby="som"
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
                <p id="preco-ajuda" className="mt-1 text-xs text-gray-500">
                  Se não tiver, deixe em branco.
                </p>
              </div>

              <div>
                <label htmlFor="preco" className="block font-medium">
                  Rastreador
                </label>
                <input
                  id="som"
                  name="som"
                  pattern="^\d+(,\d{2})?$"
                  aria-describedby="som"
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
                <p id="preco-ajuda" className="mt-1 text-xs text-gray-500">
                  Se não tiver, deixe em branco.
                </p>
              </div>

              <div>
                <label htmlFor="preco" className="block font-medium">
                  Outros
                </label>
                <input
                  id="som"
                  name="som"
                  pattern="^\d+(,\d{2})?$"
                  aria-describedby="som"
                  className="mt-1 block w-full rounded-xl border px-3 py-2"
                />
                <p id="preco-ajuda" className="mt-1 text-xs text-gray-500">
                  Descreva itens e modificações feitas no carro.
                </p>
              </div>
            </fieldset>

            <button
              type="submit"
              className="rounded-2xl px-5 py-3 bg-black text-white"
            >
              Gerar contrato
            </button>
          </form>
        </section>

        <footer className="mt-12 text-xs text-gray-500">
          * Este material não substitui orientação jurídica. Revise antes de
          assinar.
        </footer>
      </main>
    </div>
  );
}
