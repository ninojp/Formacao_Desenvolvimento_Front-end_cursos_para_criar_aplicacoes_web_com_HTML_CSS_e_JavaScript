"use strict";
let btnPorPreco = document.getElementById("btnOrdenarPorPreco");

btnPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
};