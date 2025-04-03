'use strict';
import api from "./api.js";
import apiAxios from "./apiAxios.js";
import ui from "./ui.js";
/*Regex
// -> /inicia a regex. finaliza/
^ -> inicia a expressão /^
$ -> finaliza a expressão $/
[] -> [A-Z(permite letras maiúsculas)a-z(minúsculas)\s(permite espaço)]
{} -> {minimo de caracteres, maximo}
/g -> a letra "G", é uma flag que significa "global", essa substituição 
vai acontecer não só na primeira ocorrência, e sim em todas as ocorrências que houverem.
\s+ -> O caractere de mais+, vai indicar um ou mais caracteres desses que estão precedendo
*/
function removerEspacos(string) {
    return string.replaceAll(/\s+/g, '');
    // Perceba que não colocamos as âncoras de início e fim, porque queremos que sejam encontrados 
    //todos os espaços que possam existir nesse conteúdo, então não delimitamos o início e o fim da string.
};
function validarRegex(expRegex, conteudo) {
    return expRegex.test(conteudo);
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await ui.renderizarPensamentos();
        document.getElementById('pensamento-form').addEventListener('submit', manipulaSubmitForm);
        document.getElementById('botao-cancelar').addEventListener('click', ui.limpaFormulario);
        document.getElementById('buscarPensamentosId').addEventListener('input', manipularBuscaPorTermo);
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
            const pensamentoData = document.getElementById('pensamento-data').value;
            if (!pensamentoConteudo || !pensamentoAutoria) {
                alert('Preencha todos os campos!');
                return;
            };
            const conteudoSemEspacos = removerEspacos(pensamentoConteudo)
            const autoriaSemEspacos = removerEspacos(pensamentoAutoria)
            const regexConteudo = /^[A-Za-z\s]{10,}$/;
            if (!validarRegex(regexConteudo, conteudoSemEspacos)) {
                alert("É permitida a inclusão apenas de letras e espaços com no mínimo 10 caracteres")
                return
            }
            const regexAutoria = /^[A-Za-z]{3,15}$/;
            if (!validarRegex(regexAutoria, autoriaSemEspacos)) {
                alert("É permitida a inclusão apenas de letras(mínimo 3) máximo 15, sem espaços e caracteres especiais!")
                return
            }
            if (!validarData(pensamentoData)) {
                alert("Não é permitido o cadastro de datas futuras. Selecione outra data")
                return
            }
            let novoPensamento;
            if (pensamentoId) {
                novoPensamento = await apiAxios.editarPensamento({ id: pensamentoId, conteudo: pensamentoConteudo, autoria: pensamentoAutoria, data: pensamentoData });
            } else {
                //O id é gerado automaticamente pelo json-server.
                novoPensamento = await apiAxios.salvarPensamento({ conteudo: pensamentoConteudo, autoria: pensamentoAutoria, data: pensamentoData });//A IA do VSC Copilot sugeriu essa linha
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

async function manipularBuscaPorTermo() {
    const termoBuscado = document.getElementById('buscarPensamentosId').value;
    try {
        const resultTermoBuscado = await apiAxios.buscarPensamentosPorTermo(termoBuscado);
        // console.log(resultTermoBuscado);
        ui.renderizarPensamentos(resultTermoBuscado);
    } catch (error) {
        console.log('Erro!: manipularBuscaPorTermo()');
        throw error;
    };
};
//================================================================================================

function validarData(pensamentoData) {
    const dataAtual = new Date();
    const dataInserida = new Date(pensamentoData);
    return dataAtual >= dataInserida;
};
