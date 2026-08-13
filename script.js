const historia = [
    {
        id: 0,
        texto: "Dois amigos decidiram ir caçar juntos. Antes de entrar na mata, eles precisam escolher as armas. Qual arsenal eles vão levar?",
        imagem: "https://cdn.observatoriodocinema.com.br/2019/11/supernatural_final_season-1068x580.jpg",
        alternativas: [
            {
                texto: "Armas excelentes — rifles modernos, munição de sobra e facas afiadas",
                proximo: 1
            },
            {
                texto: "Armas ruins — espingardas velhas, pouca munição e facas enferrujadas",
                proximo: 1
            }
        ]
    },
    {
        id: 1,
        texto: "Eles entram na floresta densa. O silêncio é quebrado por uivos longos e assustadores. Lobos. Muitos lobos. Os uivos ecoam por todos os lados. O que eles fazem?",
        imagem: "https://www.loucoporviagens.com.br/wp-content/uploads/2015/02/floresta-negra-1.jpg",
        alternativas: [
            {
                texto: "Recuar e tentar voltar pelo caminho que vieram",
                proximo: 2
            },
            {
                texto: "Se esconder e ficar na espera, observando a situação",
                proximo: 2
            }
        ]
    },
    {
        id: 2,
        texto: "Os uivos estão cada vez mais próximos. As folhas se mexem. Olhos brilham na escuridão. Os dois amigos ficam paralisados. O medo toma conta. O que acontece agora?",
        imagem: "https://assets.grok.com/users/36ddca02-473d-4fb4-8993-0ca5b57f664c/generated/baa85a0e-bb92-4838-ae85-0fa00c647936/image.jpg",
        alternativas: [
            {
                texto: "Um dos amigos foge correndo e o outro fica para lutar",
                proximo: "finalRuim"
            },
            {
                texto: "Os dois ficam juntos e enfrentam os lobos lado a lado",
                proximo: "finalBom"
            }
        ]
    }
];

const finais = {
    finalBom: {
        titulo: "SOBREVIVÊNCIA",
        texto: "Os dois amigos se posicionam de costas um para o outro. Com coragem e trabalho em equipe, eles enfrentam a alcateia. Disparos ecoam pela floresta. Depois de uma luta intensa, os lobos recuam e fogem. Os dois sobrevivem, feridos, mas vivos. Eles saem da mata como verdadeiros irmãos de caça.",
        imagem: "https://assets.grok.com/users/36ddca02-473d-4fb4-8993-0ca5b57f664c/generated/d72747c6-7cf0-4788-bb3f-77e9145965fe/image.jpg",
        classe: "final-bom"
    },
    finalRuim: {
        titulo: "MORTE",
        texto: "Um dos amigos entra em pânico e corre desesperado. O outro tenta segurar a posição sozinho, mas é cercado. Os lobos são rápidos demais. O que fugiu é alcançado logo adiante. O que ficou também não resiste. Os dois amigos caem na floresta. Ninguém volta para contar a história.",
        imagem: "https://assets.grok.com/users/36ddca02-473d-4fb4-8993-0ca5b57f664c/generated/1ab8f177-baf7-417e-aaa4-ed3571b74199/image.jpg",
        classe: "final-ruim"
    }
};

const caixaPergunta = document.getElementById("caixa-pergunta");
const caixaAlternativas = document.getElementById("caixa-alternativas");
const caixaFinal = document.getElementById("caixa-final");
const tituloFinal = document.getElementById("titulo-final");
const textoFinal = document.getElementById("texto-final");
const botaoReiniciar = document.getElementById("botao-reiniciar");
const imagemCena = document.getElementById("imagem-cena");

function mostraPergunta(indice) {
    const etapa = historia[indice];

    caixaPergunta.textContent = etapa.texto;
    imagemCena.src = etapa.imagem;

    caixaAlternativas.innerHTML = "";

    etapa.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.classList.add("botao-alternativa");
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            if (typeof alternativa.proximo === "number") {
                mostraPergunta(alternativa.proximo);
            } else {
                mostraFinal(alternativa.proximo);
            }
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostraFinal(tipoFinal) {
    const final = finais[tipoFinal];

    caixaPergunta.classList.add("escondido");
    caixaAlternativas.classList.add("escondido");

    caixaFinal.classList.remove("escondido");
    caixaFinal.classList.remove("final-bom", "final-ruim");
    caixaFinal.classList.add(final.classe);

    tituloFinal.textContent = final.titulo;
    textoFinal.textContent = final.texto;
    imagemCena.src = final.imagem;
}

botaoReiniciar.addEventListener("click", () => {
    caixaFinal.classList.add("escondido");
    caixaPergunta.classList.remove("escondido");
    caixaAlternativas.classList.remove("escondido");
    mostraPergunta(0);
});

// Inicia
mostraPergunta(0);