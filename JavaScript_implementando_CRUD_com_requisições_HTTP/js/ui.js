'use strict';
import api from "./api.js";

const ui = {
    async renderizarPensamentos() {
        const ulListaPensamentos = document.getElementById('lista-pensamentos');
        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(pensamento => {
              ulListaPensamentos.innerHTML += `<li class="li-pensamento" data-id="${pensamento.id}">
              <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
              <div class="pensamento-conteudo">${pensamento.conteudo}</div>
              <div class="pensamento-autoria">${pensamento.autoria}</div>
              </li>`;
            });
        } catch (error) {
            console.log('Erro ao buscar pensamentos na APILocal', error);
            alert('Erro ao buscar pensamentos na APILocal');
            throw error;
        };
    }
};
export default ui;
