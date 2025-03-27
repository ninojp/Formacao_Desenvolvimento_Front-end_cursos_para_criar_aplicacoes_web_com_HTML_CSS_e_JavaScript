'use strict';

import { criarItemDaLista } from "./JS/criarItemDaLista.js";
const ulItens = document.getElementById('lista-de-compras');
const btnAdicionar = document.getElementById('adicionar-item');

btnAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (document.getElementById('input-item').value === '') {
        alert('Por favor insira um item!');
        return;
    };
    const itemDaLista = criarItemDaLista();
    ulItens.appendChild(itemDaLista);
    verificarListaVazia();
});
//================================================================================
function verificarListaVazia() {
    const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');
    // const itensDaLista = ulItens.querySelectorAll("li");
    // if (itensDaLista.length === 0) {
    if (ulItens.childElementCount === 1) {//porque o primeiro filho é a mensagemVazia
        mensagemListaVazia.style.display = 'block';
    } else {
        mensagemListaVazia.style.display = 'none';
    }
};
verificarListaVazia();
//================================================================================

//Aula 4, Trabalhando com datas
var options = {
    weekday: "long",//long, short, narrow
    year: "numeric",//numeric, 2-digit
    month: "long",//long, short, narrow, numeric, 2-digit
    day: "numeric",//numeric, 2-digit
};
//não é possível escolher a ordem de exibição dos elementos
const toLocaleDateString = new Date().toLocaleDateString('pt-BR', options);
// console.log('toLocaleDateString:\n', toLocaleDateString);
//mas posso criar uma variavel para armazenar a data formatada
const diaDoMes = new Date().toLocaleDateString('pt-BR', { day: 'numeric' });
// console.log('Dia do Mês:', diaDoMes);

