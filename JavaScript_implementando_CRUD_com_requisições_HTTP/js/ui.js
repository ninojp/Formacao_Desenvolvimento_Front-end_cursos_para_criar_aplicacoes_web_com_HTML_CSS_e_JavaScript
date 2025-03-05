'use strict';
import api from "./api.js";

const ui = {
    async preencherFormulario(id) {
        try {
            const pensamento = await api.buscaPensamentoPorId(id);
            document.getElementById('pensamento-id').value = pensamento.id;
            document.getElementById('pensamento-conteudo').value = pensamento.conteudo;
            document.getElementById('pensamento-autoria').value = pensamento.autoria;
            // Faz a página subir até o formulário
            document.getElementById('pensamento-form').scrollIntoView({ behavior: 'smooth' }); // 'smooth' para uma rolagem suave;
        } catch (error) {
            console.log('ui.js: Erro ao preencher o formulário', error);
            alert('ui.js: Erro ao preencher o formulário');
            throw error;
        }
    },
    //===================================================================================================

    limpaFormulario() {
        document.getElementById('pensamento-form').reset();
    },
    //===================================================================================================

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
            divConteudo.textContent = pensamento.conteudo; // Adiciona o conteúdo do pensamento
            liPensamento.appendChild(divConteudo);

            const divAutoria = document.createElement('div');
            divAutoria.classList.add('pensamento-autoria');
            divAutoria.textContent = `${pensamento.autoria}`; // Adiciona a autoria do pensamento
            liPensamento.appendChild(divAutoria);

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('botao-editar');
            btnEditar.onclick = () => { ui.preencherFormulario(pensamento.id) };
            const imgEdit = document.createElement('img');
            imgEdit.setAttribute('src', 'assets/imagens/icone-editar.png');
            imgEdit.setAttribute('alt', 'Editar pensamento');
            btnEditar.appendChild(imgEdit);
            liPensamento.appendChild(btnEditar);

            ulListaPensamentos.appendChild(liPensamento);
        } catch (error) {
            console.log('ui.js: Erro ao adicionar pensamento na lista', error);
            alert('ui.js: Erro ao adicionar pensamento na lista');
            throw error;
        }
    },
    //===================================================================================================

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
    //===================================================================================================
};
export default ui;
