'use strict';
import { criarItemDaLista } from "./JS/criarItemDaLista.js";
import verificarListaVazia from "./JS/verificarListaVazia.js";
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
verificarListaVazia();
