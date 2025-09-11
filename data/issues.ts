// data/issues.ts
import { type IssueRow } from "@/lib/schema-issues";

export const ISSUES_DATA: IssueRow[] = [
  {
    part: "Pastilha de freio desgastada",
    sector: "rodas/suspensão/freio",
    image: "https://i.imgur.com/6GDmzRo.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/I4yKDppggcP_HnLaFLafEhZ11P188HPIBf-R8YW6IFck12oXqffOHnGHAcVmQ8QO/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Pastilha%20de%20freio%20desgastada.mp3",
    info: `As pastilhas de freio desgastadas costumam gerar ruídos ao frear, aumento da distância de parada e até vibrações no pedal. Isso acontece porque, com o uso, o material de atrito se consome até expor o metal, que pode danificar o disco de freio. A causa principal é a falta de substituição periódica, algo comum pela correria do dia a dia. A correção é simples: trocar as pastilhas por novas, garantindo segurança, eficiência na frenagem e evitando reparos mais caros no futuro.`,
  },
  {
    part: "Pastilha de freio desgastada",
    sector: "rodas/suspensão/freio",
    image: "https://i.imgur.com/6GDmzRo.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/MGcGwcSG0ZeB9bbOK1hu8wDLJ_L6DSCfJhGL-wpHVwC1DabZGj6VpFTkQ1s-HLAi/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Pastilha%20de%20freio.mp3",
    info: `Barulhos vindos das pastilhas de freio nem sempre significam apenas desgaste. Muitas vezes, poeira, sujeira ou pequenas pedras presas entre a pastilha e o disco podem causar chiados incômodos. Outra possibilidade é a falta de lubrificação nos pontos de contato da pinça de freio. A solução pode variar: uma limpeza adequada já resolve em alguns casos, mas se houver desgaste ou defeito, a substituição da peça é o mais indicado para evitar riscos à sua segurança.`,
  },
  {
    part: "Pivô da suspensão",
    sector: "rodas/suspensão/freio",
    image: "https://i.imgur.com/4ymNEre.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/DnnJfirjxEA0hgVe_ZVJ6dUHppa5YUG2wF84vQPBken3CoTm6vtWfE4GviEW3mqm/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Piv%C3%B4%20da%20suspens%C3%A3o.mp3",
    info: `O pivô da suspensão é essencial para a estabilidade do carro, pois conecta a roda ao sistema de direção. Quando está com problema, surgem estalos ao manobrar, desgaste irregular dos pneus e sensação de carro “puxando” para os lados. As causas mais comuns são desgaste natural pelo tempo, impacto em buracos ou falta de manutenção. A correção envolve substituir o pivô por um novo, devolvendo segurança, firmeza na direção e evitando que outros componentes da suspensão sejam danificados.`,
  },
  {
    part: "Suspensão",
    sector: "rodas/suspensão/freio",
    image: "https://i.imgur.com/mkxOHg3.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/b72QFL6ISNVpbbrdNyGWfeRuusHSeLQPDVSraHwmAecsPch4kRucQk7pDMk_Hdij/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Suspens%C3%A3o.mp3",
    info: `Problemas na suspensão costumam se manifestar por barulhos ao passar em buracos, vibrações no volante, carro “rebaixando” de um lado ou perda de conforto. As causas mais frequentes são desgaste dos amortecedores, molas cansadas ou buchas ressecadas. Essa situação não só prejudica a estabilidade como também aumenta o desgaste dos pneus. A solução é verificar cada componente e substituir o que estiver comprometido, devolvendo ao veículo segurança, firmeza e suavidade na condução.`,
  },
  {
    part: "Tambor do freio gasto",
    sector: "rodas/suspensão/freio",
    image: "https://i.imgur.com/sbHqCZ2.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/hcQsh5phNnfvA357sYhxgpu7hWXtafZvBO4i6-pwLW9OQ6GQkfbMBfpCqOTUwNMa/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Tambor%20do%20freio%20gasto.mp3",
    info: `O tambor de freio, presente em muitos carros na traseira, pode apresentar chiados, perda de eficiência ou até travamento das rodas. Esses problemas geralmente vêm do desgaste das lonas, acúmulo de sujeira ou deformação do próprio tambor. Quando não tratado, o carro pode perder estabilidade nas frenagens e comprometer a segurança. A correção indicada é revisar o conjunto, realizar a limpeza e, se necessário, retificar ou substituir o tambor para restaurar a eficiência do sistema de freio.`,
  },
  {
    part: "Buraco no escapamento",
    sector: "motor/correias",
    image: "https://i.imgur.com/PcuCain.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/yp5V3aOUzwVeuzcEmymqBncC79Q3UUDcc0hSJL5wqerLqtkyTMkoA_8TCkuDG95D/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Buraco%20no%20silenciador%20do%20escapamento.mp3",
    info: `O escapamento, além de reduzir o ruído do motor, também direciona os gases para fora do carro. Quando apresenta furos ou trincas, é comum notar barulho excessivo, cheiro de fumaça dentro do veículo e até perda de desempenho. As causas podem ser corrosão pela umidade, impacto em lombadas ou desgaste natural. A correção envolve identificar a parte danificada, que pode ser soldada em casos simples, ou substituir o trecho comprometido, garantindo silêncio, segurança e eficiência ao motor.`,
  },
  {
    part: "Correia dentada",
    sector: "motor/correias",
    image: "https://i.imgur.com/ZkrLNlt.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/BmsEtMKPEkE49U-A29IyJJj4ygteRRTNGWAcTzxoXdpvZsggY7USuNJKXtE4BnQP/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Correia%20dentada.mp3",
    info: `Quando a correia dentada está no fim, o motor pode demorar a pegar, falhar nas acelerações, emitir chiados/assobios e até acender a luz de injeção. Isso ocorre porque a borracha resseca e perde dentes, o tensor e as polias desalinham, ou vazamentos de óleo contaminam o material. Se ela romper, pode haver choque entre válvulas e pistões, gerando alto custo. A correção é preventiva: trocar o kit completo (correia, tensor e, em muitos motores, a bomba d’água) no prazo do manual. Suspeitou de rompimento? Não ligue o carro; peça reboque e evite danos maiores.`,
  },
  {
    part: "Escapamento solto",
    sector: "motor/correias",
    image: "https://i.imgur.com/PcuCain.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/MrWcN4rlTzXmR_BLZJF-mPI51LCjvMRkWEyqSRIq3WmCdDFZUg7JGksLESz3IP6C/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Escapamento.mp3",
    info: `A causa mais comum é a ferrugem corroendo os suportes (grampos) que prendem o escapamento. Também pode ser por impacto em buracos ou desgaste das buchas de borracha que absorvem o vibração. Não ignore! Um escapamento solto pode se soltar na rua, criando um risco grave. Leve o carro a um mecânico de confiança. Eles farão uma inspeção e a solução geral é soldar um novo suporte ou trocar as buchas, um reparo normalmente rápido e econômico.`,
  },
  {
    part: "Furo no escapamento",
    sector: "motor/correias",
    image: "https://i.imgur.com/PcuCain.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/FRQ-qLhK7hTjvwSHm1iAZuaSGqD-hfGo3q0QwsEEFI2vSVxA55RU-rVJiAf2g7f_/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Furo%20no%20escapamento%20.mp3",
    info: `Quando há furo no escapamento, você pode notar barulho mais alto/ronco metálico, cheiro de gases dentro do carro, perda de força e aumento de consumo; às vezes estalos ao acelerar. Isso acontece porque corrosão por umidade e salpicos, impactos em lombadas ou suportes quebrados fazem o tubo ou o silencioso racharem. Além do incômodo, o vazamento de gases quentes pode queimar peças próximas e permitir entrada de monóxido de carbono no interior. A correção é direta: localizar o ponto, substituir o trecho ou o silencioso e revisar abraçadeiras, juntas e coxins. Remendos com massa ou fita térmica servem só como paliativo até chegar à oficina.`,
  },
  {
    part: "Motor sem óleo",
    sector: "motor/correias",
    image: "https://i.imgur.com/pQpmFI6.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/pOQU7EXW9RxfrLn8yM54qRes6gMADMz3zriMC2AsU1uTok6bRbrivlABY5KFJ9PP/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Motor%20sem%20%C3%B3leo.mp3",
    info: `Quando o motor roda com pouco óleo, surgem luz de pressão acesa, ruído metálico (batidas/tuchos), cheiro de queimado e queda de desempenho; em casos graves, superaquecimento. Isso ocorre por vazamentos no cárter/retentores, queima por anéis/guia de válvula, trocas atrasadas ou uso do óleo errado. Sem lubrificação, as peças raspam, podendo fundir bronzinas e travar o motor. A correção é imediata: pare, verifique a vareta em piso plano, complete com a especificação do manual e vá à oficina para achar o vazamento/consumo e fazer troca com filtro. Se a luz ficar acesa ou houver barulho forte, peça reboque.`,
  },
  {
    part: "Pistão batendo pino",
    sector: "motor/correias",
    image: "https://i.imgur.com/xCUPWh3.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/jkr52dPE8VMA5rUfHsB5OW1c516dqlzNAyiHtw5UfXrQaOw6ibBBTd9WRE_eA8HB/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Pist%C3%A3o%20batendo%20pino.mp3",
    info: `Quando o motor está “batendo pino”, surge um tec-tec metálico ao acelerar, mais forte em subida ou com o motor quente; pode haver perda de força e aumento de consumo. Isso ocorre por detonação — a mistura inflama antes da hora — causada por gasolina de baixa octanagem, superaquecimento, mistura pobre, ponto de ignição adiantado, carvão na câmara, velas erradas/gastas ou sensor de detonação falho. A correção: alivie o pé, evite forçar em baixa rotação, abasteça em posto confiável (maior octanagem) e vá à oficina para checar ponto, sensor, velas, arrefecimento e mistura; se persistir, não insista — há risco de furar pistões.`,
  },
  {
    part: "Transmissão (acelerando motor)",
    sector: "motor/correias",
    image: "https://i.imgur.com/2wjm6uQ.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/lb0iHEjwJz15rMGPOQGLlWWMVU3ij8m_tM6tSu7JySwzxVSJivusFA9MeEbI0LKI/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Transmiss%C3%A3o%20(acelerando%20motor).mp3",
    info: `O motor acelera, mas o carro não responde proporcionalmente, com rotação alta e baixo desempenho. Pode ocorrer em mudanças específicas ou todas. Pode ser causado por nível baixo ou fluido velho e degradado, desgaste de componentes internos como embreagens ou bandas, ou problemas no módulo de controle. Correção: Pare de dirigir! Continuar pode causar danos severos e reparos extremamente custosos. Verifique o nível e a condição do fluido de transmissão com a vareta. Leve imediatamente a um especialista para diagnóstico preciso. A solução pode desde uma troca de fluido até reparos internos complexos.`,
  },
  {
    part: "Transmissão falhando com carro em movimento",
    sector: "motor/correias",
    image: "https://i.imgur.com/2wjm6uQ.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/7Veq62LI54Atm6fT4c7j-PB84TMKuj-KxLDWqJXYpbWiWmz_mPC9MKnJBfpwuVNg/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Transmiss%C3%A3o%20falhando%20com%20carro%20em%20movimento.mp3",
    info: `Causado por baixo nível de fluido, desgaste interno (embreagens, engrenagens), solenoides defeituosos ou problemas eletrônicos no módulo de controle. Isto faz com que o ocorram trocas de marcha bruscas, solavancos, ruídos de atrito (moagem) ou hesitação ao acelerar com o veículo em rotação. Pode falhar ao engatar ou perder força repentinamente. Correção: Reduza a velocidade e evite acelerações bruscas. Procure imediatamente um especialista em transmissão. O diagnóstico pode incluir verificação do fluido, escaneamento de erros e teste de pressão interna. Reparos variam de troca de fluido/filtro até revisão completa, dependendo da gravidade.`,
  },
  {
    part: "Transmissão",
    sector: "motor/correias",
    image: "https://i.imgur.com/2wjm6uQ.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/CZBgcNJ0zw0OjVHPNYGh9PTerwBQJ3e0Rnb7nSA6u1uKe5bbUZm_LCt9wr7HFDBv/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Transmiss%C3%A3o.mp3",
    info: `A marcha entra e sai, trocas perdidas, modo de emergência ativado (travado em uma marcha) e luz de aviso no painel. Diferente de deslizamento, há falha na execução do comando. Se isto acontece, pode ser falha em solenoides, sensor de velocidade, ou bomba hidráulica, além de baixa pressão de fluido ou entupimento de filtro. Correção: Desligue e reinicie o carro. Se persistir, busque um especialista. Não force a transmissão. O reparo exige diagnóstico eletrônico e pode envolver troca de solenoides, limpeza do sistema ou substituição de componentes hidráulicos. Manutenção preventiva com troca de fluido é crucial.`,
  },
  {
    part: "Tucho/balancim desajustado",
    sector: "motor/correias",
    image: "https://i.imgur.com/ShKIkk0.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/k3NoXZwJieUCnSY8UBq1YGgR9e9AXRjA5HUcaFyZKhNAJ2JWhvHqNMneC5cVkvMT/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Tucho%20desajustado.mp3",
    info: `É possível identificar pelo ruído metálico de "clique" rápido, que some ao acelerar e piora em rotação baixa. O barulho vem da parte superior do motor. A causa é geralmente falta de lubrificação (óleo velho ou nível baixo), desgaste natural ou regulagem incorreta das válvulas (quando necessário). Correção: É um aviso importante! Evite rodar assim. O barulho indica desgaste que pode prejudicar outras peças. Leve ao mecânico para diagnóstico. A solução pode ser uma regulagem de válvulas ou, em casos mais sérios, a troca dos tuchos/balancins, sempre acompanhada da troca de óleo e filtro.`,
  },
  {
    part: "Válvulas desreguladas",
    sector: "motor/correias",
    image: "https://i.imgur.com/GBExqcQ.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/abdTlt0SAy5IH2GEBdFEHdXKIXOX5-YbfuPXYa-2NIrBC60OfEjoWjZBfcAf4gpc/n/gr5txs57s9g3/b/BarulhoCarSounds/o/V%C3%A1lvulas%20desreguladas.mp3",
    info: `Quanho há desgaste natural dos componentes ou regulagem incorreta feita na última manutenção, afetando a abertura e o fechamento precisos das válvulas, o que causa o ruído de "tic tac" constante no motor, perda de potência, consumo excessivo de combustível e dificuldade na partida a frio. Correção: É necessária uma regulagem de válvulas, procedimento feito por um mecânico. Evite rodar assim para não desgastar prematuramente outros componentes. A correção restaura o desempenho e a economia do motor.`,
  },
  {
    part: "Ventoinha do radiador",
    sector: "motor/correias",
    image: "https://i.imgur.com/IM9DhBX.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/Jh6XZDSrUTHsig3Z6G8J7SOe99vxmt-xMwyytUpXORsTZ7GYvCOQgO6JR3HHgZ9t/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Ventoinha%20do%20exaustor%20obstru%C3%ADda.mp3",
    info: `Quando ocorre um problema no motor elétrico da ventoinha, fusível queimado, relé defeituoso ou sensor de temperatura com falha, impedindo que ela ligue no momento certo, acontece o superaquecimento do motor principalmente em trânsito lento ou parado, com o ponteiro da temperatura subindo perigosamente. Pode vir acompanhado do cheiro de refrigerante quente. Correção: Não force o motor! Se o carro esquentar, ligue o aquecimento no máximo para ajudar a dissipar calor e pare em local seguro. O reparo deve ser feito por um eletricista ou mecânico, que testará o circuito e substituirá o componente defeituoso (motor, relé ou sensor).`,
  },
  {
    part: "Bomba d'água",
    sector: "hidráulica/arrefecimento/bombas",
    image: "https://i.imgur.com/Nsgzm3Q.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/dPZ9sVi-j047CmHMiPUx__F_OkDWdI3IJTYqcgFjGke9ZA9FpGLPoeP9NM-n8SV5/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Bomba%20d%27%C3%A1gua.mp3",
    info: `Ocorre pelo desgaste natural do seu eixo ou selo interno. A corrosão do líquido de arrefecimento antigo ou de má qualidade acelera muito esse processo. Isto pode causar o vazamento de líquido de arrefecimento (geralmente cor laranja/verde, se você utilizar aditivos) na parte frontal do motor, superaquecimento constante e, em alguns casos, ruído de rolamento ruim (ranger).Correção: Parada imediata é crucial para evitar o superaquecimento severo, que pode trancar o motor. A bomba d'água deve ser substituída por uma nova, e é altamente recomendável trocar também a correia de distribuição (se acionada por ela) e o líquido de arrefecimento.`,
  },
  {
    part: "Bomba d'água",
    sector: "hidráulica/arrefecimento/bombas",
    image: "https://i.imgur.com/Nsgzm3Q.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/nFfZdHNmmoXz14IrVFuwmoHQQcsfCR5pAWnwvakh-p1FCJDAuaNlcpbsH1FKfjiL/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Bomba%20d%27%C3%A1gua%20(1).mp3",
    info: `O superaquecimento sem vazamentos visíveis, aquecimento irregular do motor e possível ruído de "raspagem" metálica, mesmo com o nível de arrefecimento correto, pode ser causado pela quebra das palhetas do rotor interno devido à corrosão por uso de líquido de arrefecimento inadequado ou contaminado, impedindo a circulação eficiente do fluido. Correção: Não ignore sinais de superaquecimento! A falha interna exige a substituição urgente da bomba. É vital usar líquido de arrefecimento de qualidade especificada no manual para prevenir corrosão e novos danos.`,
  },
  {
    part: "Radiador fervendo",
    sector: "hidráulica/arrefecimento/bombas",
    image: "https://i.imgur.com/EzcanSJ.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/5U5gDbtET6CTsAY3Nmr4ry1O_UKveItCVDceCmUAbgZM2siNU32OV5m5eLZqxir_/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Radiador%20fervendo.mp3",
    info: `Pode ser identificado por vapor saindo do capô, ponteiro de temperatura no vermelho e possível perda de líquido de arrefecimento, indicando superaquecimento crítico. As causas são vazamento no sistema, ventoinha defeituosa, termostato travado ou bomba d'água com falha, que impedem a refrigeração adequada do motor. Correção: Pare imediatamente! Desligue o motor e espere esfriar naturalmente. Nunca abra o radiador quente. Após resfriar, verifique o nível de arrefecimento e procure um mecânico urgente para diagnosticar e reparar a causa, evitando danos graves ao motor.`,
  },
  {
    part: "Rasgo na mangueira",
    sector: "hidráulica/arrefecimento/bombas",
    image: "https://i.imgur.com/h2EZN7v.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/-Vkytm_lcIQUEF7rbZckYQg2kfxp3izx7f3VTUdXJ_xaBMqfsbDRIO8zfp00YiD6/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Rasgo%20na%20mangueira.mp3",
    info: `Envelhecimento natural da borracha, ressecamento por calor excessivo, ou contato com produtos químicos corrosivos podem causar o vazamento visível de líquido de arrefecimento (geralmente colorido), superaquecimento do motor e possível cheiro adocicado no compartimento do motor. Correção: Não ignore! Um rasgo pode levar à perda rápida do líquido e superaquecimento grave. Substitua a mangueira danificada o quanto antes, preferencialmente em par com a do outro lado para evitar desequilíbrio. Use sempre mangueiras de qualidade e verifique o estado das demais.`,
  },
  {
    part: "Partida com bateria descarregada",
    sector: "elétrica",
    image: "https://i.imgur.com/WorsFiI.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/R_iOPnk2sgZLFqZMEp3wVrdm7lVGEv4sO6BnF1Ynbox3kBwnKK91qphfmkhwp3P7/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Dando%20partida%20com%20bateria%20descarregada.mp3",
    info: `Deixar luzes ou eletrônicos ligados com motor desligado ("baliza"), desgaste natural da bateria (vida útil de ~2-5 anos), ou problemas no alternador que não recarrega adequadamente, podem deixar o motor de arranque lento ou sem resposta, luzes do painel fracas, ruído de "clique" ao girar a chave e sistemas elétricos falhos. Correção: Recarregue ou dê uma chupeta! Use cabos e outra bateria em boas condições, conectando positivo (+) com positivo e negativo (-) a um ponto de aterramento no carro descarregado. Após ligar, rode para recarregar. Se recorrente, teste a bateria e o alternador em uma oficina.`,
  },
  {
    part: "Partida com bateria descarregada",
    sector: "elétrica",
    image: "https://i.imgur.com/WorsFiI.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/R_iOPnk2sgZLFqZMEp3wVrdm7lVGEv4sO6BnF1Ynbox3kBwnKK91qphfmkhwp3P7/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Dando%20partida%20com%20bateria%20descarregada.mp3",
    info: `Perda de carga rápida mesmo após recarga, dificuldade de partida em dias frios e, em casos extremos, inchaço ou vazamento de líquido da bateria, podem ser causados pela sulfatação interna (acúmulo de cristais nas placas) devido a ciclos profundos de descarga, ou curto-circuito entre células, reduzindo permanentemente sua capacidade. Correção: Se mesmo após uma chupeta o problema persistir, então a bateria precisa ser substituída. Evite deixá-la descarregar totalmente para prevenir danos. Descarte a antiga corretamente e instale uma nova com as especificações recomendadas no manual do veículo.`,
  },
  {
    part: "Isolamento térmico solto",
    sector: "acabamentos",
    image: "https://i.imgur.com/5SbPI3p.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/JQTW5wQ9AJxhNWiYiyEDB1BWSH7ZpyMXLgVx7NG_ib1PCsZtT4C5zcE6d3Xjalaz/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Isolamento%20t%C3%A9rmico%20solto.mp3",
    info: `Rangidos, estalos ou chiados vindos do painel, portas, bancos ou console, especialmente em pisos irregulares ou curvas, podems er causados por peças plásticas encaixadas folgadas devido ao desgaste, vibração do carro, ou fixadores quebrados. Materiais expandem/contraem com temperatura, piorando o problema. Correção: Identifique a origem pressionando levemente as áreas com ruído. Use espuma de densidade média ou silicone entre folgas para amortecer. Se persistir, um especialista em autocentro pode desmontar e reforçar encaixes com fixadores novos. Evite impactos fortes nas peças.`,
  },
  {
    part: "Acabamento externo solto",
    sector: "acabamentos",
    image: "https://i.imgur.com/IptoXVJ.png",
    sound:
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/3dSf9Fdq8soqYWScLGEnJMHWkbfZ1RGLXhjP8yHpFnn-WnJL1nQWMkJD_x30fUVg/n/gr5txs57s9g3/b/BarulhoCarSounds/o/Paralama%20soltando.mp3",
    info: `Barulhos como batidas, assovios ou vibrações vindos de para-choques, espelhos, molduras ou aerofólios durante o movimento, especialmente em alta velocidade ou vento forte podem ser cusados por fixações folgadas ou quebradas devido a impacto, desgaste por vibração, ou peças mal encaixadas após reparos. Correção: Verifique e aperte parafusos e clipes de fixação. Se o ruído persistir, consulte um especialista em funilaria para inspeção e reposição de fixadores ou uso de selante automotivo. Evite rodar com peças soltas, pois podem se soltar completamente.`,
  },
];

export default ISSUES_DATA;
