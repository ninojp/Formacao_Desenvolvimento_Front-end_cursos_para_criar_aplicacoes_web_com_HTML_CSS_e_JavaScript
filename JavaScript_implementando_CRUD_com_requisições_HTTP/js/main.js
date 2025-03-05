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
            //O id é gerado automaticamente pelo json-server.
            const pensamentoConteudo = document.getElementById('pensamento-conteudo').value.trim();
            const pensamentoAutoria = document.getElementById('pensamento-autoria').value.trim();
            if (!pensamentoConteudo || !pensamentoAutoria) {
                alert('Preencha todos os campos!');
                return;
            };
            const objNovoPensamento = { conteudo: pensamentoConteudo, autoria: pensamentoAutoria };
            const novoPensamento = await api.salvarPensamento(objNovoPensamento);//A IA do VSC Copilot sugeriu essa linha
            await ui.adicionarPensamentoNaLista(novoPensamento); // Adiciona apenas o novo pensamento
            // await ui.renderizarPensamentos();//Professora fez assim, Renderiza todos os pensamentos
            btnResetForm();
            alert('Pensamentos Salvo e Adicionado!');
        } catch (error) {
            console.log('main.js: Erro ao manipulaSubmitForm(): - ', error);
            alert('main.js: Erro ao manipulaSubmitForm()');
            throw error;
        };
    };
});
//============================================================================================

function btnResetForm() {
    document.getElementById('pensamento-form').reset();
};
document.getElementById('botao-cancelar').addEventListener('click', btnResetForm);
