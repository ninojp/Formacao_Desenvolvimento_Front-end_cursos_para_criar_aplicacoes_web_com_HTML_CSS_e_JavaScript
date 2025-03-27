'use strict';
const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLista() {
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
    
    return itemDaLista;
};
