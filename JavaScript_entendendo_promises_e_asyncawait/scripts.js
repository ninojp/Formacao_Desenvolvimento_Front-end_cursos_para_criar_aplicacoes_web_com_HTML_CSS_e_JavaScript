'use strict';

document.getElementById("upload-btn").addEventListener("click", () => {
    document.getElementById("image-upload").click();
});
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        //FileReader é uma API do JavaScript que permite ler o conteúdo de arquivos de forma assíncrona
        //O FileReader é usado para ler o conteúdo de arquivos armazenados no cliente, como imagens, textos, etc.
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name});
        };
        leitor.onerror = (erro) => {
            reject(`Erro! na leitura do arquivo ${arquivo.name} `, erro);
        };
        leitor.readAsDataURL(arquivo);
    });
};
document.getElementById('image-upload').addEventListener('change', async (evento) => {
    const arquivoImg = evento.target.files[0]; // Pegando o arquivo selecionado pelo usuário
    if (arquivoImg) {
        try {
            const conteudoDoArquivoImg = await lerConteudoDoArquivo(arquivoImg);
            document.querySelector('.main-imagem').src = conteudoDoArquivoImg.url; 
            document.querySelector('.container-imagem-nome p').textContent = conteudoDoArquivoImg.nome;
        } catch (error) {
            console.error('Erro! na Leitura do arquivo', error);
            throw error;
        };
    };
});
//==============================================================================================

document.querySelector('.lista-tags').addEventListener('click', (evento) => {
    if (evento.target.classList.contains('remove-tag')) {
        const liTagElementoAtual = evento.target.parentElement;
        // document.querySelector('.lista-tags').removeChild(liTagElementoAtual);//Professora fez assim
        liTagElementoAtual.remove();
    };
});
//==============================================================================================

const tagsDisponiveis = ["Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"];
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        })
    });
};
//==============================================================================================

document.getElementById('tagsCategoria').addEventListener('keypress', async (evento) => {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        const novaTag = evento.target.value.trim();
        if (novaTag !== '') {
            try {
                const tagExiste = await verificaTagsDisponiveis(novaTag);
                if (tagExiste) {
                    const liTagElemento = document.createElement('li');
                    const pTagElemento = document.createElement('p');
                    pTagElemento.textContent = novaTag;
                    const btnRemover = document.createElement('img');
                    btnRemover.src = './img/close-black.svg';
                    btnRemover.classList.add('remove-tag');
                    liTagElemento.appendChild(pTagElemento);
                    liTagElemento.appendChild(btnRemover);
                    document.querySelector('.lista-tags').appendChild(liTagElemento);
                    evento.target.value = '';
                } else {
                    console.error('Erro! na verificação da tag');
                    alert("Tag não foi encontrada.");
                }
            } catch (error) {
                console.error('Erro! na verificação da tag', error);
                alert("Erro ao verificar a existência da tag. Verifique o console.")
                throw error;                
            };
        };
    };
});
//==============================================================================================

async function publicarProjeto(novoProjeto){
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const deuCerto = Math.random() > 0.5;
                if (deuCerto) {
                    resolve("Projeto publicado com sucesso.")
                } else {
                    reject("Erro ao publicar o projeto.")
                }
            }, 1000);
        });
    } catch (error) {
        console.error('Erro! ao publicar o projeto', error);
        alert("Erro ao publicar o projeto. Verifique o console.")
        throw error;
    };
};
//==============================================================================================

document.querySelector('.botao-publicar').addEventListener('click', async (evento) => {
    evento.preventDefault();
    const nomeProjeto = document.getElementById('nome').value;
    const descricaoProjeto = document.getElementById('descricao').value;
    //Array.from() é usado para converter um objeto semelhante a um array (como NodeList) em um array real
    const tagsSelecionadas = Array.from(document.querySelectorAll('.lista-tags li p')).map((tag) => tag.textContent);
    const novoProjeto = { nome: nomeProjeto, descricao: descricaoProjeto, tags: tagsSelecionadas };
    console.log(novoProjeto);
    // Aqui você pode fazer o que quiser com o novo projeto, como enviá-lo para um servidor ou armazená-lo localmente
    try {
        const resultado = await publicarProjeto(novoProjeto);
        console.log(resultado);
        alert("Deu tudo certo!")
    } catch (error) {
        console.log("Deu errado: ", error)
        alert("Deu tudo errado!");
    }
});
//==============================================================================================

document.querySelector('.botao-descartar').addEventListener('click', (evento) => {
    evento.preventDefault();
    document.querySelector('form').reset(); // Reseta o formulário
    document.querySelector('.main-imagem').src = './img/imagem1.png'; // Reseta a imagem
    document.querySelector('.container-imagem-nome p').textContent = "image_projeto.png"; // Reseta o nome do arquivo
    document.querySelector('.lista-tags').innerHTML = ''; // Limpa as tags
});
//==============================================================================================

//Lendo e exibindo um aqruivo texto
// document.getElementById("upload-txt-btn").addEventListener("click", () => {
//     document.getElementById("txt-upload").click();
// });
// function lerConteudoDoArquivoTexto(arquivo) {
//     return new Promise((resolve, reject) => {
//         const leitor = new FileReader();
//         leitor.onload = () => resolve({ texto: leitor.result });
//         leitor.onerror = () => reject(leitor.error);
//         leitor.readAsText(arquivo);
//     });
// };
// document.getElementById('txt-upload').addEventListener('change', async (evento) => {
//     const arquivoTexto = evento.target.files[0]; // Pegando o arquivo selecionado pelo usuário
//     console.log(arquivoTexto);
//     if (arquivoTexto) {
//         try {
//             const conteudoArquivoTexto = await lerConteudoDoArquivoTexto(arquivoTexto);
//             console.log(conteudoArquivoTexto.texto);
            
//             document.getElementById('textoPrevia').textContent = conteudoArquivoTexto.texto; 
//             // document.querySelector('.container-imagem-nome p').textContent = conteudoArquivoTexto.nome;
//         } catch (error) {
//             console.error('Erro! na Leitura do arquivo', error);
//             throw error;
//         };
//     };
// });
//==============================================================================================

//Lendo e exibindo um aqruivo JSON
// document.addEventListener('DOMContentLoaded', () => {
//     const upload = document.querySelector('#upload');
//     const listaDados = document.querySelector('#listaDados');

//     upload.addEventListener('change', async (event) => {
//         const arquivo = event.target.files[0];
//         if (arquivo) {
//             try {
//                 const conteudo = await lerConteudoDoArquivo(arquivo);
//                 const dados = JSON.parse(conteudo.texto);
//                 listaDados.innerHTML = '';
//                 dados.forEach(dado => {
//                     const li = document.createElement('li');
//                     li.textContent = JSON.stringify(dado);
//                     listaDados.appendChild(li);
//                 });
//             } catch (erro) {
//                 console.error('Erro na leitura do arquivo', erro);
//             }
//         }
//     });
// });

// function lerConteudoDoArquivo(arquivo) {
//     return new Promise((resolve, reject) => {
//         const leitor = new FileReader();
//         leitor.onload = () => resolve({ texto: leitor.result });
//         leitor.onerror = () => reject(leitor.error);
//         leitor.readAsText(arquivo);
//     });
// }
//==============================================================================================

// Função para exibir a imagem de pré-visualização
// document.getElementById('imageInput').addEventListener('change', function(event) {
//     const file = event.target.files[0]; // Pegando o arquivo selecionado pelo usuário
//     if (file) {
//         const reader = new FileReader(); // Criando uma instância do FileReader
//         reader.onload = function(e) {
//             const preview = document.getElementById('preview');
//             preview.src = e.target.result; // Atribuindo o resultado da leitura como fonte da imagem de pré-visualização
//             preview.style.display = 'block'; // Tornando a pré-visualização visível
//         };
//         reader.readAsDataURL(file); // Lendo o arquivo como um Data URL
//     }
// });
