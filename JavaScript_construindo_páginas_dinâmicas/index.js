'use strict';

const inputItem = document.getElementById('input-item');
const ulItens = document.getElementById('lista-de-compras');
const btnAdicionar = document.getElementById('adicionar-item');
let contador = 0;

btnAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (inputItem.value === '') {
        alert('Por favor insira um item!');
        return;
    };
    const itemDaLista = document.createElement('li');

    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');

    const inputCheckBox = document.createElement('input');
    // inputCheckBox.type = 'checkbox';//poderia ser feito assim ou como está abaixo
    inputCheckBox.setAttribute('type', 'checkbox');
    inputCheckBox.id = `checkbox-${contador++}`;

    const novoItem = document.createElement('p');
    novoItem.textContent = inputItem.value;

    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' });
    const dataCompleta = `${diaDaSemana} (${dataAtual}) às ${horaAtual}`;

    const itemData = document.createElement('p');
    itemData.classList.add('texto-data');
    itemData.innerText = dataCompleta;
    
    inputCheckBox.addEventListener('click', () => {
        if (inputCheckBox.checked) {
            novoItem.style.textDecoration = 'line-through';
            novoItem.style.color = 'red';
        } else {
            novoItem.style.textDecoration = 'none';
            novoItem.style.color = 'black';
        }
    });

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(novoItem);
    itemDaLista.appendChild(containerItemDaLista);
    itemDaLista.appendChild(itemData);
    inputItem.value = '';//limpa o input, para que o usuário possa inserir um novo item
    ulItens.appendChild(itemDaLista);

});
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

