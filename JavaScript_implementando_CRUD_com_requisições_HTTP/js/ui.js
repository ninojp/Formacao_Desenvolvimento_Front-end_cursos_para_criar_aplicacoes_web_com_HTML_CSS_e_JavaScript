'use strict';
import api from "./api.js";

const ui = {
    async renderizarPensamentos() {
        try {
            const pensamentos = await api.buscarPensamentos();
            // pensamentos.forEach(ui.adicionarPensamentoNaLista);//Professora fez essa linha
            pensamentos.forEach(this.adicionarPensamentoNaLista);
            //Usar this.adicionarPensamentoNaLista no forEach, mantein o contexto correto do objeto ui (VSC Copilot)
        } catch (error) {
            console.log('ui.js: Erro ao buscar pensamentos na APILocal', error);
            alert('ui.js: Erro ao buscar pensamentos na APILocal');
            throw error;
        };
    },
    //---------------------------------------------------------------------------------------------------
    async adicionarPensamentoNaLista(pensamento) {
        try {
            const ulListaPensamentos = document.getElementById('lista-pensamentos');

            const liPensamento = document.createElement('li');
            liPensamento.setAttribute('data-id', pensamento.id);
            liPensamento.classList.add('li-pensamento');

            const imgAspas = document.createElement('img');
            imgAspas.setAttribute('src', 'assets/imagens/aspas-azuis.png');
            imgAspas.setAttribute('alt', 'Aspas azuis');
            imgAspas.classList.add('icone-aspas');
            liPensamento.appendChild(imgAspas);

            const divConteudo = document.createElement('div');
            divConteudo.classList.add('pensamento-conteudo');
            divConteudo.textContent = pensamento.conteudo;
            liPensamento.appendChild(divConteudo);

            const divAutoria = document.createElement('div');
            divAutoria.classList.add('pensamento-autoria');
            divAutoria.textContent = pensamento.autoria;
            liPensamento.appendChild(divAutoria);

            ulListaPensamentos.appendChild(liPensamento);
        } catch (error) {
            console.log('ui.js: Erro ao adicionar pensamento na lista', error);
            alert('ui.js: Erro ao adicionar pensamento na lista');
            throw error;
        }
    },
    //---------------------------------------------------------------------------------------------------
};
export default ui;
