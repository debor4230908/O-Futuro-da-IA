const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado:
        "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
      alternativas: [
          {
              texto:"Isso é assustador!",
              afirmacao: "Os robôs irão destruir a humanidade!!!"
          },
          {
              texto:"Isso é maravilhoso!",
              afirmacao: "Irá me ajudar em diversos trabalhos escolares."
          }  
      ],
    },
    {
      enunciado:
        "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
      alternativas: [
              {
                  texto:  "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                  afirmacao:"afirmacao"
              },
              {
                  texto:  "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                  afirmacao: "afirmacao"
              }  
      ],
    },
    {
      enunciado:
        "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
      alternativas: [
          {
              texto:  "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
              afirmacao: "A IA pode ser uma grande aliada para resolver questões que levaria dias, meses ou anos para ser resolvida."
          },
          {
              texto:  "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
              afirmacao: "A IA é usada por pessoas preguiçosas, ela está presente apenas para regredir a inteligência e a capacidade dos seres humanos."
          }    
      ],
    },
    {
      enunciado:
        "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
      alternativas: [
          {
              texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
              afirmacao: "Usar minha criatividade e usar formas e cores retiradas da minha cabeça para demonstrar meus sentimentos."
          },
          {
              texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
              afirmacao: "Utilizar meus conhecimentos técnicos e desenvolver comando para a IA desenvolver uma imagina da forma exata em que eu quero."
          }    
      ],
    },
    {
      enunciado:
        "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
      alternativas: [
          {
              texto:  "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
              afirmacao: "Realmente, usar a IA em casos extremos pode ser necessário, e não é um problema ela estar presente em seu trabalho."
          },
          {
              texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
              afirmacao: "Não acho de bom tom usar a IA para fazer o trabalho completo. e sim para auxiliar."
          }    
      ]
    },
  ];

  let atual = 0;
  let perguntaAtual;
  let historiaFinal = "";

  function mostraPergunta(){
    if(atual >= perguntas.length){
      mostraResultado();
      return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
  }

  function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
      const botaoAlternativa = document.createElement("button");
      botaoAlternativa.textContent = alternativa.texto;
      botaoAlternativa.addEventListener("click", () => respostaSelecionada
      (alternativa));
      caixaAlternativas.appendChild(botaoAlternativa);
    }
  }

  mostraPergunta()

  function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
  }

  function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
  }
  mostraPergunta()