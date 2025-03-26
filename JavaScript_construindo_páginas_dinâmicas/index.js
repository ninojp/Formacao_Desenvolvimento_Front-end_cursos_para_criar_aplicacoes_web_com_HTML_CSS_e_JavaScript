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
    inputCheckBox.id = 'checkbox-'+ contador++;
    // inputCheckBox.id = `checkbox-${contador++}`;

    const novoItem = document.createElement('p');
    novoItem.textContent = inputItem.value;

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(novoItem);
    itemDaLista.appendChild(containerItemDaLista);
    ulItens.appendChild(itemDaLista);

});
