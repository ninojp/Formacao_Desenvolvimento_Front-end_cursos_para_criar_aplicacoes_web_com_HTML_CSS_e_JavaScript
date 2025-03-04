"use strict";
const elementoHTML = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const elementoIMG = document.querySelector('.app__image');
const elementoH1 = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const startPauseBtn = document.querySelector('#start-pause');
const startPauseBtnImg = document.querySelector('#start-pause img');
const startPauseBtnSpan = document.querySelector('#start-pause span');
const tempoNaTela = document.querySelector('#timer');
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;
const somPlay = new Audio('./sons/play.wav');
const somPause = new Audio('./sons/pause.mp3');
const somBeep = new Audio('./sons/beep.mp3');

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})
btnFoco.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    btnFoco.classList.add('active');
});
btnCurto.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    btnCurto.classList.add('active');
});
btnLongo.addEventListener('click', (event) => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    btnLongo.classList.add('active');
    // console.log(event)
    // alert(event)
});
function alterarContexto(contexto){
    mostrarTempo();
    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    });
    elementoHTML.setAttribute('data-contexto', contexto);
    elementoIMG.setAttribute('src', `./assets/imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            elementoH1.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'descanso-curto':
            elementoH1.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case 'descanso-longo':
            elementoH1.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong"> Faça uma pausa longa.</strong>`;
            break;
        default:
            break;
    }
};
const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        somBeep.play();
        alert('Tempo decorrido Finalizado!');
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1
    // console.log('Tempo decorrido em segundos:' +tempoDecorridoEmSegundos);
    mostrarTempo();
};

startPauseBtn.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar(){
    if(intervaloId){
        somPause.play();
        zerar();
        return;
    }
    somPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    startPauseBtnSpan.textContent = "Pausar";
    startPauseBtnImg.setAttribute('src', './assets/imagens/pause.png');
};

function zerar(){
    clearInterval(intervaloId);
    startPauseBtnSpan.textContent = "Começar";
    startPauseBtnImg.setAttribute('src', './assets/imagens/play_arrow.png');
    intervaloId = null;
};

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}
mostrarTempo();