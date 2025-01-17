let quantidadeJogosAlugados = 0;

document.addEventListener("DOMContentLoaded", function() {
    quantidadeJogosAlugados = document.querySelectorAll(".dashboard__item__button--return").length;
});

function alterarStatus(id) {
    let botao = document.getElementById(`game-${id}`).querySelector(".dashboard__item__button");
    let imagem = document.getElementById(`game-${id}`).querySelector(".dashboard__item__img");
    let jogo = document.getElementById(`game-${id}`).querySelector(".dashboard__item__name");

    
    if (botao.classList.contains("dashboard__item__button--return")) {
        if (confirm(`Deseja devolver ${jogo.textContent}?`) == true) {
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented");
        botao.innerHTML = "Alugar";
        informarConsole("devolvendo");
    } else {
        return;
    }
    } else {
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        botao.innerHTML = "Devolver";
        informarConsole("alugando");
    }
}

function informarConsole(acao) {
    if (acao == "alugando") {
        quantidadeJogosAlugados++
    } else {
        quantidadeJogosAlugados--
    }

    console.log(`Jogos alugados = ${quantidadeJogosAlugados}`)
}