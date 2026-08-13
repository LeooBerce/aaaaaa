// Histórias e etapas
const historia = [
    {
        id: 0,
        texto: "Dois amigos decidiram ir caçar juntos. Antes de entrar na mata, eles precisam escolher as armas. Qual arsenal eles vão levar?",
        imagem: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
        alternativas: [
            {
                texto: "Armas excelentes: rifles modernos, munição de sobra e facas afiadas",
                proximo: 1
            },
            {
                texto: "Armas ruins: espingardas velhas, pouca munição e facas enferrujadas",
                proximo: 1
            }
        ]
    },
    {
        id: 1,
        texto: "Eles entram na floresta densa. O silêncio é quebrado por uivos longos e assustadores. Lobos. Muitos lobos. Os uivos ecoam por todos os lados. O que eles fazem?",
        imagem: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
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
        imagem: "https://images.unsplash.com/photo-1474511320723-9a5687357845?w=800&q=80",
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

// Finais
const finais = {
    finalBom: {
        titulo: "🏆 Final Feliz",
        texto: "Os dois amigos se posicionam de costas um para o outro. Com coragem e trabalho em equipe, eles enfrentam a alcateia. Disparos ecoam pela floresta. Depois de uma luta intensa, os lobos recuam e fogem. Os dois sobrevivem, feridos, mas vivos. Eles saem da mata como verdadeiros irmãos de caça.",
        imagem: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        classe: "final-bom"
    },
    finalRuim: {
        titulo: "💀 Final Trágico",
        texto: "Um dos amigos entra em pânico e corre desesperado. O outro tenta segurar a posição sozinho, mas é cercado. Os lobos são rápidos demais. O que fugiu é alcançado logo adiante. O que ficou também não resiste. Os dois amigos caem na floresta. Ninguém volta para contar a história.",
        imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
        classe: "final-ruim"
    }
};

// Elementos do DOM
const caixaPergunta = document.getElementById("caixa-pergunta");
const caixaAlternativas = document.getElementById("caixa-alternativas");
const caixaFinal = document.getElementById("caixa-final");
const tituloFinal = document.getElementById("titulo-final");
const textoFinal = document.getElementById("texto-final");
const botaoReiniciar = document.getElementById("botao-reiniciar");
const imagemCena = document.getElementById("imagem-cena");

// Função que mostra uma etapa
function mostraPergunta(indice) {
    const etapa = historia[indice];

    // Atualiza texto e imagem
    caixaPergunta.textContent = etapa.texto;
    imagemCena.src = etapa.imagem;
    imagemCena.alt = "Cena da missão - etapa " + (indice + 1);

    // Limpa e cria os botões
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

// Função que mostra o final
function mostraFinal(tipoFinal) {
    const final = finais[tipoFinal];

    // Esconde pergunta e alternativas
    caixaPergunta.classList.add("escondido");
    caixaAlternativas.classList.add("escondido");

    // Mostra o final
    caixaFinal.classList.remove("escondido");
    caixaFinal.className = final.classe;

    tituloFinal.textContent = final.titulo;
    textoFinal.textContent = final.texto;
    imagemCena.src = final.imagem;
    imagemCena.alt = final.titulo;
}

// Botão de reiniciar
botaoReiniciar.addEventListener("click", () => {
    caixaFinal.classList.add("escondido");
    caixaPergunta.classList.remove("escondido");
    caixaAlternativas.classList.remove("escondido");
    mostraPergunta(0);
});

// Inicia a missão
mostraPergunta(0);