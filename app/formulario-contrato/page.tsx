import Navbar from "@/components/navbar";
import SeletorEstado from "@/components/select";
import Select from "@/components/select";
import SeletorFazenda from "@/components/select-fazenda";
import SelectFazenda from "@/components/select-fazenda";
import "../globals.css";
import { ChevronLeft } from "lucide-react";

export default function ContratoCompraEVenda() {
  return (
    <div className="min-h-screen bg-neutral-800  min-h-[100dvh] flex flex-col">
      <Navbar />
      <div className="bg-red-50 py-4 px-5 border-b border-red-500">
        <div className="text-lg font-bold cursor-pointer hover:underline-2 hover:underline-offset-2 hover:underline">
          Gerar um Contrato de Compra e Venda de Veículo
        </div>
      </div>

      <main className="container mx-auto px-5 mx-2 py-8 bg-white mx-auto flex-1 ">
        <div className="mx-auto max-w-5xl">
          {/* <div className="flex mb-5">
            <ChevronLeft />
            <a className="underline decoration-1 underline-offset-2 cursor-pointer hover:decoration-2">
              Voltar
            </a>
          </div> */}

          {/* <h1 className="main-header mb-10 max-w-2xl">
            Gerar Contrato de Compra e Venda
          </h1>
          <p className="mt-0">
            Preencha este formulario para gerar um Contrato gratuito.
          </p> */}
          <form
            action="/api/contrato"
            method="post"
            noValidate
            className="mt-5 space-y-4 "
          >
            <input
              id="step1"
              name="step"
              type="radio"
              defaultChecked
              className="peer/step1 hidden"
            />
            <fieldset className="hidden peer-checked/step1:block">
              <legend className="sub-header ">
                Qual tipo de contrato você prefere?
              </legend>

              <div className="mt-5">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    id="opcao-w"
                    name="wb"
                    value="W"
                    className="h-10 w-10 accent-black "
                  />

                  <div>
                    <h3 className="font-medium text-lg">Contrato Digital</h3>
                    <div className="text-gray-900 dark:text-gray-100 max-w-lg text-lg">
                      Você preenche, baixa o arquivo e envia para a outra parte,
                      e ambos assinam digitalmente.
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-5">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    id="opcao-w"
                    name="wb"
                    value="W"
                    className="h-10 w-10 accent-black "
                  />
                  <div>
                    <h3 className="font-medium text-lg">
                      Contrato para Impressão
                    </h3>
                    <div className="text-gray-900 dark:text-gray-100 max-w-lg text-lg">
                      Voce preenche, baixa o arquivo, imprime, e ambas partes
                      assinam e reconhecem firma em cartório.
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-6 flex justify-end gap-3 w-full max-w-xl">
                <label
                  htmlFor="step2"
                  className="cursor-pointer border-b-2 border-black  bg-emerald-700 px-4 py-2 text-white text-lg"
                >
                  Próximo
                </label>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}
