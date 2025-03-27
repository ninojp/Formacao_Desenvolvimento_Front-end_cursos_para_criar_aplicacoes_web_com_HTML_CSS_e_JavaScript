'use strict';

export default function verificarListaVazia() {
    const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');
    // const itensDaLista = ulItens.querySelectorAll("li");
    // if (itensDaLista.length === 0) {
    if (document.getElementById('lista-de-compras').childElementCount === 1) {//porque o primeiro filho é a mensagemVazia
        mensagemListaVazia.style.display = 'block';
    } else {
        mensagemListaVazia.style.display = 'none';
    }
};
