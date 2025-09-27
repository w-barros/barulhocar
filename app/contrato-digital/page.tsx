import Navbar from "@/components/navbar";
import SeletorEstado from "@/components/select";
import Select from "@/components/select";
import SeletorFazenda from "@/components/select-fazenda";
import SelectFazenda from "@/components/select-fazenda";
import "../globals.css";
import { ChevronLeft } from "lucide-react";
import ExclusiveCheckboxGroup from "@/components/exclusive-checkbox-group";

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
              <legend className="main-header ">Dados do Comprador</legend>

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

              <div className="mt-10 flex max-w-xl w-full">
                {/* <div className="mr-auto">
                  <label
                    htmlFor="step1"
                    className="cursor-pointer border-b-2 border-gray-500  bg-gray-200 px-4 py-2 text-gray text-lg"
                  >
                    Anterior
                  </label>
                </div> */}

                <div className="ml-auto">
                  <label
                    htmlFor="step2"
                    className="cursor-pointer border-b-2 border-black  bg-emerald-700 px-4 py-2 text-white text-lg"
                  >
                    Próximo
                  </label>
                </div>
              </div>
            </fieldset>

            <input
              id="step2"
              name="step"
              type="radio"
              className="peer/step2 hidden"
            />
            <fieldset className="hidden peer-checked/step2:block">
              <legend className="main-header ">Dados do Vendedor</legend>

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

              <div className="mt-10 flex max-w-xl w-full">
                <div className="mr-auto">
                  <label
                    htmlFor="step1"
                    className="cursor-pointer border-b-2 border-gray-500  bg-gray-200 px-4 py-2 text-gray text-lg"
                  >
                    Anterior
                  </label>
                </div>

                <div className="justify-end">
                  <label
                    htmlFor="step3"
                    className="cursor-pointer border-b-2 border-black  bg-emerald-700 px-4 py-2 text-white text-lg"
                  >
                    Próximo
                  </label>
                </div>
              </div>
            </fieldset>

            <input
              id="step3"
              name="step"
              type="radio"
              className="peer/step3 hidden"
            />
            <fieldset className="hidden peer-checked/step3:block">
              <legend className="main-header ">Dados do Veículo</legend>

              <div className="mt-5">
                <label htmlFor="nome" className="block font-medium text-lg">
                  RENAVAN
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
                  Placa
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
                  Marca e Modelo
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

              <div className="mt-5">
                <label htmlFor="nome" className="block font-medium">
                  Preço
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

              <div className="mt-10 flex max-w-xl w-full">
                <div className="mr-auto">
                  <label
                    htmlFor="step2"
                    className="cursor-pointer border-b-2 border-gray-500  bg-gray-200 px-4 py-2 text-gray text-lg"
                  >
                    Anterior
                  </label>
                </div>

                <div className="justify-end">
                  <label
                    htmlFor="step4"
                    className="cursor-pointer border-b-2 border-black  bg-emerald-700 px-4 py-2 text-white text-lg"
                  >
                    Próximo
                  </label>
                </div>
              </div>
            </fieldset>

            <input
              id="step4"
              name="step"
              type="radio"
              className="peer/step4 hidden"
            />
            <fieldset className="hidden peer-checked/step4:block">
              <legend className="main-header ">Acessórios e Opcionais</legend>
              <p className="text-lg max-w-xl">
                Informe se houve alteração de itens no carro.
              </p>

              <ExclusiveCheckboxGroup
                name="som_automotivo"
                label="Som automotivo"
                options={[
                  { value: "original", label: "Original" },
                  { value: "outro", label: "Outro" },
                  { value: "nao_tem", label: "Não tem" },
                ]}
                otherValue="outro"
                descriptionLabel="Qual? Descreva a marca e o modelo do Som automotivo."
                placeholderOther="Por exemplo: Pioneer DEH-X7000BT"
                required
              />

              <ExclusiveCheckboxGroup
                name="alto-falantes"
                label="Alto-Falantes"
                options={[
                  { value: "original", label: "Original" },
                  { value: "outro", label: "Outro" },
                  { value: "nao_tem", label: "Não tem" },
                ]}
                otherValue="outro"
                descriptionLabel="Qual? Descreva a marca e o modelo dos Alto-falantes."
                placeholderOther="Por exemplo: JBL Multisystem, 80W"
                required
              />

              <ExclusiveCheckboxGroup
                name="alarme"
                label="Alarme"
                options={[
                  { value: "original", label: "Original" },
                  { value: "outro", label: "Outro" },
                  { value: "nao_tem", label: "Não tem" },
                ]}
                otherValue="outro"
                descriptionLabel="Qual? Descreva a marca e o modelo."
                placeholderOther="Ex.: Pioneer DEH-X7000BT"
                required
              />

              <ExclusiveCheckboxGroup
                name="rastreador"
                label="Rastreador"
                options={[
                  { value: "original", label: "Original" },
                  { value: "outro", label: "Outro" },
                  { value: "nao_tem", label: "Não tem" },
                ]}
                otherValue="outro"
                descriptionLabel="Qual? Descreva a marca e o modelo do Rastreador."
                placeholderOther="Por exemplo: Ituran."
                required
              />

              <ExclusiveCheckboxGroup
                name="alarme"
                label="Rodas"
                options={[
                  { value: "original", label: "Original Liga" },
                  { value: "nao_tem", label: "Original Ferro" },
                  { value: "outro", label: "Outras " },
                ]}
                otherValue="outro"
                descriptionLabel="Qual? Descreva a marca e o modelo das Rodas."
                placeholderOther="Por exemplo: Roda Aro 17 R Seven 4x100"
                required
              />

              <div className="mt-5">
                <label
                  htmlFor="nome"
                  className="block font-medium text-lg mb-0"
                >
                  Outros
                </label>
                <label className="block text-gray-600 font-normal text-lg mt-0">
                  Descreva outras alterações feitas no carro se houverem.
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  className="mt-1 w-full max-w-xl border-black border-2 px-3 py-2 "
                />
              </div>

              <div className="mt-10 flex max-w-xl w-full">
                <div className="mr-auto">
                  <label
                    htmlFor="step3"
                    className="cursor-pointer border-b-2 border-gray-500  bg-gray-200 px-4 py-2 text-gray text-lg"
                  >
                    Anterior
                  </label>
                </div>

                <div className="justify-end">
                  <label
                    htmlFor="step5"
                    className="cursor-pointer border-b-2 border-black  bg-emerald-700 px-4 py-2 text-white text-lg"
                  >
                    Finalizar
                  </label>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}
