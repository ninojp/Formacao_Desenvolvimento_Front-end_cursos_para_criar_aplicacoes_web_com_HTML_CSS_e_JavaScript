"use strict";

// const btnFiltrarLivros = document.getElementById('btnFiltrarLivrosFront');
// // console.log(btnFiltrarLivros)
// btnFiltrarLivros.addEventListener("click", filtrarLivros);

const botoes = document.querySelectorAll(".btn");
// console.log(botoes)
botoes.forEach(btns => btns.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const atualBntClick = document.getElementById(this.id);
    const btnValue = atualBntClick.value
    let livrosFiltrados = btnValue === "disponivel" ? filtrarLivrosDisponiveis() : filtrarLivrosPorCategoria(btnValue);
    exibirOsLivrosNaTela(livrosFiltrados);
    if(btnValue === "disponivel"){
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosDisponiveis(valorTotal);
    };
};
//-------------------------------------------------------------------
function filtrarLivrosDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0);
};
//------------------------------------------------------------------
function filtrarLivrosPorCategoria(btnValue) {
    return livros.filter(livro => livro.categoria === btnValue);
};
//------------------------------------------------------------------------------------
function exibirValorTotalLivrosDisponiveis(valorTotal){
    elementoValorTotalLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`;
};

