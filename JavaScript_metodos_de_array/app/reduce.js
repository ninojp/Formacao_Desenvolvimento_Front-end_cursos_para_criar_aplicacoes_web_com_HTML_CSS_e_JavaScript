"use strict";

function calcularValorTotalLivrosDisponiveis(livrosFiltrados){
    return livrosFiltrados.reduce((acc, livroAtual) => acc + livroAtual.preco, 0).toFixed(2);
}