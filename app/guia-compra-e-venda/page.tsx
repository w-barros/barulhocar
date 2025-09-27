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
          <h1 className="main-header">Guia de Compra e Venda de Veículos</h1>
          <p className="mt-2 text-gray-600">
            Entenda o essencial para adquirir ou vender um veículo e gere 
            um contrato preenchido em poucos minutos. 
            Você sabia que uma dívida do dono anterior pode fazer com que você 
            perca o carro que você comprou, mesmo depois de anos? 
            E se a outra parte decide recusar a responsabilidade sobre algum 
            problema do veículo, como provar a real situação do veículo à época
            da venda?
            Estes e outros problemas podem ser evitados com alguns cuidados simples: 
            fazer o levantamento da documentação e um contrato adequado. Use o guia
            BarulhoCar, preencha o formulário e gere gratuitamente seu contrato de 
            compra e venda!
    
            
          </p>
        </header>

        <section aria-labelledby="sec-importante" className=" prose max-w-none">
          <h2 className="mt-6 sub-header">Vai comprar ou vender um carro?</h2>
          <p className="mt-3">
            Quais documentos são importantes? O que olhar no carro? Como me proteger? 
            Calma! Não entre em pânico! Siga este passo-a-passo e se livre de preocupações!
          </p>

          <h2 className="mt-7 sub-header">O que é necessário?</h2>
          <p className="mt-3">
            Revise a documentação do veículo, tire as certidões nos órgãos competentes, faça uma vistoria para conhecer as condições do veículo e, por fim, firme por escrito o preço, condições de pagamento e forma de entrega. Siga abaixo o guia:
          </p>

          <ol className="mt-2 list-decimal ml-5 space-y-5 pl-5">
            <li className="mt-2">
              <h3 className="text-xl font-bold">Faça uma Vistoria no carro</h3>
              <p>
                Uma vistoria é essencial para entender e registrar a situação do Veículo no momento da transação, protegendo ambas as partes de situações problemáticas no futuro. 
                Acesse pelo celular e utilize gratuitamente o modelo de Vistoria BarulhoCar. 
                Após finalizar a vistoria, que sugerimos ser feita na presença do comprador e do vendedor, baixe em seu celular o arquivo gerado ou anexe-o diretamente no contrato de compra e venda.
         
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
                Em contratos impressos e assinados manualmente, a assinatura de duas testemunhas é essencial para que o contrato possa ser executado.
                <span className="underline decoration-solid font-semibold">
                  Para o contrato assinado digitalmente por ferramentas como o <a className="underline underline-3 text-blue-600 underline-offset-2"
                  href="https://www.gov.br/pt-br/servicos/assinatura-eletronica">
                  ‎ assinador do gov.br
                </a>a (), não é necessário a participação de Testemunhas
                </span>{" "}, conforme lei 13.105/2015, art. 784, §4º. 
              </p>
            </li>

            <li className="mt-2">
              <h3 className="text-xl font-bold">
                Consulta CRLV (Documento do Carro)
              </h3>
              <p>
                O Vendedor deve apresentar ao Comprador a CRLV (Documento do Carro). Neste documento, com o uso do aplicativo VIO da Serpro (Gratuito), você pode ler o QR Code e fazer uma consulta atualizada de bloqueios e gravames do veículo.
                esses dados.
                Verifique se o nº do Chassi e do Motor conferem entre o documento e o carro (confira o guia de vistoria), e utilize os dados para consultar o Senatran sobre furto e gravames.
                  <a
                  className="underline underline-3 text-blue-600 underline-offset-2"
                  href="https://play.google.com/store/apps/details?id=br.gov.serpro.lince&hl=pt_BR"
                >
                  ‎ Loja de aplicativos Android
                </a>
                   <a
                  className="underline underline-3 text-blue-600 underline-offset-2"
                  href="https://apps.apple.com/br/app/vio-qr-seguro/id1218953994"
                >
                  ‎ Loja de aplicativos Apple Store
                </a>
              </p>
            </li>
            
            <li className="mt-2">
              <h3 className="text-xl font-bold">Consulta no SENATRAN</h3>
              <p>
                Utilize os dados da CRLV (Renavan, placa e CPF do proprietário) para consultar sobre furtos e bloqueios.
                Acesse aqui{" "}
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
