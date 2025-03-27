'use strict';

export default function gerarDiaDaSemana() {
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' });
    const dataCompleta = `${diaDaSemana} (${dataAtual}) às ${horaAtual}`;
    return dataCompleta;
};
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
