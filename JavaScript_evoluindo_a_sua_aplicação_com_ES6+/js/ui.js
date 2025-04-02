'use strict';
// import api from "./api.js";
import apiAxios from "./apiAxios.js";

const ui = {
    async preencherFormulario(id) {
        try {
            const pensamento = await apiAxios.buscaPensamentoPorId(id);
            document.getElementById('pensamento-id').value = pensamento.id;
            document.getElementById('pensamento-conteudo').value = pensamento.conteudo;
            document.getElementById('pensamento-autoria').value = pensamento.autoria;
            document.getElementById('pensamento-data').value = pensamento.data.toISOString().split('T')[0];
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
            divAutoria.textContent = pensamento.autoria; // Adiciona a autoria do pensamento
            liPensamento.appendChild(divAutoria);

            const divData = document.createElement('div');
            divData.classList.add('pensamento-data');
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
            const dataFormatada = new Date(pensamento.data).toLocaleDateString('pt-BR', options);
            divData.textContent = dataFormatada;
            // divData.textContent = pensamento.data; // Adiciona a Data do pensamento
            liPensamento.appendChild(divData);


            const divIcones = document.createElement('div');
            divIcones.classList.add('icones');
            liPensamento.appendChild(divIcones);

            const botaoFavorito = document.createElement("button")
            botaoFavorito.classList.add("botao-favorito")
            botaoFavorito.addEventListener('click', async () => {
                try {
                    await apiAxios.atualizarFavorito(pensamento.id, !pensamento.favorito);
                    ui.renderizarPensamentos();
                } catch (error) {
                    console.error('Erro! adicionarPensamentoNaLista(), Linha 62');
                    throw error
                };
            });
            const iconeFavorito = document.createElement("img");
            iconeFavorito.src = pensamento.favorito ? "assets/imagens/icone-favorito.png" : "assets/imagens/icone-favorito_outline.png";
            iconeFavorito.alt = "Ícone de favorito";
            botaoFavorito.appendChild(iconeFavorito);

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('botao-editar');
            btnEditar.onclick = () => { ui.preencherFormulario(pensamento.id) };
            const imgEdit = document.createElement('img');
            imgEdit.setAttribute('src', 'assets/imagens/icone-editar.png');
            imgEdit.setAttribute('alt', 'Editar pensamento');
            divIcones.appendChild(botaoFavorito)
            btnEditar.appendChild(imgEdit);
            divIcones.appendChild(btnEditar);

            const btnExcluir = document.createElement('button');
            btnExcluir.classList.add('botao-excluir');
            btnExcluir.onclick = async () => {
                if (confirm('Tem certeza de que deseja excluir este pensamento?')) {
                    try {
                        await apiAxios.excluirPensamento(pensamento.id);
                        ui.renderizarPensamentos();
                        // liPensamento.remove();
                    } catch (error) {
                        console.log('ui.js: Erro ao excluir pensamento', error);
                        alert('ui.js: Erro ao excluir pensamento');
                        throw error;
                    };
                };
            };
            const imgExcluir = document.createElement('img');
            imgExcluir.setAttribute('src', 'assets/imagens/icone-excluir.png');
            imgExcluir.setAttribute('alt', 'Excluir pensamento');
            btnExcluir.appendChild(imgExcluir);
            divIcones.appendChild(btnExcluir);

            ulListaPensamentos.appendChild(liPensamento);
        } catch (error) {
            console.log('ui.js: Erro ao adicionar pensamento na lista', error);
            alert('ui.js: Erro ao adicionar pensamento na lista');
            throw error;
        }
    },
    //===================================================================================================

    async renderizarPensamentos(pensamentosFiltrados = null) {
        const listaPensamentos = document.getElementById("lista-pensamentos");//não sei pra que a Professora fez essa linha
        const mensagemVazia = document.getElementById("mensagem-vazia");//não sei pra que a Professora fez essa linha
        listaPensamentos.innerHTML = "";
        try {
            let pensamentosParaRenderizar;
            if (pensamentosFiltrados) {
                pensamentosParaRenderizar = pensamentosFiltrados;
            } else {
                pensamentosParaRenderizar = await apiAxios.buscarPensamentos();
            };
            if (pensamentosParaRenderizar.length === 0) {
                mensagemVazia.style.display = "block";
            } else {
                mensagemVazia.style.display = "none";
                pensamentosParaRenderizar.forEach(ui.adicionarPensamentoNaLista)
                //Usar this.adicionarPensamentoNaLista no forEach, mantein o contexto correto do objeto ui (VSC Copilot)
                // pensamentos.forEach(this.adicionarPensamentoNaLista);
            };
        } catch (error) {
            console.log('ui.js: Erro ao buscar pensamentos na APILocal', error);
            alert('ui.js: Erro ao buscar pensamentos na APILocal');
            throw error;
        };
    }
    //===================================================================================================
};
export default ui;
