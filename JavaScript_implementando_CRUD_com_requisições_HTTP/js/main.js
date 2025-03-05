'use strict';
import api from "./api.js";
import ui from "./ui.js";

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await ui.renderizarPensamentos();
        document.getElementById('pensamento-form').addEventListener('submit', manipulaSubmitForm);
    } catch (error) {
        console.log('main.js: Erro ao renderizar pensamentos! ', error);
        alert('main.js: Erro ao renderizar pensamentos! ');
        throw error;
    };
    async function manipulaSubmitForm(event) {
        try {
            event.preventDefault();
            const pensamentoId = document.getElementById('pensamento-id').value.trim();
            const pensamentoConteudo = document.getElementById('pensamento-conteudo').value.trim();
            const pensamentoAutoria = document.getElementById('pensamento-autoria').value.trim();
            if (!pensamentoConteudo || !pensamentoAutoria) {
                alert('Preencha todos os campos!');
                return;
            };
            let novoPensamento;
            if (pensamentoId) {
                novoPensamento = await api.editarPensamento({ id: pensamentoId, conteudo: pensamentoConteudo, autoria: pensamentoAutoria });
            } else {
                //O id é gerado automaticamente pelo json-server.
                novoPensamento = await api.salvarPensamento({ conteudo: pensamentoConteudo, autoria: pensamentoAutoria });//A IA do VSC Copilot sugeriu essa linha
            };
            // await ui.renderizarPensamentos();//Professora fez assim, Renderiza todos os pensamentos                
            await ui.adicionarPensamentoNaLista(novoPensamento);

            // alert('Pensamentos Salvo e Adicionado!');
            
            // Adiciona um pequeno atraso antes de rolar até o elemento
            // setTimeout(() => {
                const elementoPensamento = document.querySelector(`[data-id='${novoPensamento.id}']`);
                if (elementoPensamento) {
                    elementoPensamento.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.log('Elemento não encontrado no DOM!');
                }
            // }, 100); // Atraso de 100ms
            // Rola até o final da página
            // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            ui.limpaFormulario();
        } catch (error) {
            console.log('main.js: Erro ao manipulaSubmitForm(): - ', error);
            alert('main.js: Erro ao manipulaSubmitForm()');
            throw error;
        };
    };
});
//============================================================================================
document.getElementById('botao-cancelar').addEventListener('click', ui.limpaFormulario);
