"use strict";
const elementoParaInserirLivro = document.getElementById("livros");
const elementoValorTotalLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis");

function exibirOsLivrosNaTela(listaDeLivros) {
    //Limpa o elemento, entra no elemento .innetHTML e limpa = ""
    elementoValorTotalLivrosDisponiveis.innerHTML = "";
    elementoParaInserirLivro.innerHTML = "";
    listaDeLivros.forEach(livro => {
        // let disponibilidade = verificarDispDoLivro(livro);
        let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
        elementoParaInserirLivro.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `;
    });
};
// function verificarDispDoLivro(){
//     if(livro.quantidade > 0){
//         return "livro__imagens";
//     }else{
//         return "livro__imagens indisponivel";
//     }
// }