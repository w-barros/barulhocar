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

      <main className="container mx-auto px-5 mx-2 py-8 bg-white mx-auto flex-1 ">
        <div className="mx-auto max-w-5xl">
          <div className="flex mb-5">
            <ChevronLeft />
            <a className="underline decoration-1 underline-offset-2 cursor-pointer hover:decoration-2">
              Voltar
            </a>
          </div>

          <h1 className="main-header mb-10 max-w-2xl">
            Gerar Contrato de Compra e Venda
          </h1>
          <form
            action="/api/contrato"
            method="post"
            noValidate
            className="mt-2 space-y-4"
          >
            <input
              id="step1"
              name="step"
              type="radio"
              defaultChecked
              className="peer/step1 hidden"
            />
            <fieldset className="hidden peer-checked/step1:block">
              <legend className="sub-header ">Dados do Comprador</legend>

              <div className="mt-5">
                <label htmlFor="nome" className="block font-medium text-lg">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-1 w-full max-w-xl  border-black border-2  px-3 py-2"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="nome" className="block font-medium">
                  CPF
                </label>
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  autoComplete="cpf"
                  required
                  className="mt-1 w-full max-w-xl border-black border-2  px-3 py-2"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="nome" className="block font-medium">
                  Endereço
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  className="mt-1 w-full max-w-xl border-black border-2 px-3 py-2"
                />
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

            <input
              id="step2"
              name="step"
              type="radio"
              className="peer/step2 hidden"
            />
            <fieldset className="hidden peer-checked/step2:block">
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
              <div className="mt-6 flex justify-between gap-3">
                <label
                  htmlFor="step1"
                  className="cursor-pointer rounded-xl border px-4 py-2"
                >
                  Voltar
                </label>
                <label
                  htmlFor="step3"
                  className="cursor-pointer rounded-xl bg-black px-4 py-2 text-white"
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
