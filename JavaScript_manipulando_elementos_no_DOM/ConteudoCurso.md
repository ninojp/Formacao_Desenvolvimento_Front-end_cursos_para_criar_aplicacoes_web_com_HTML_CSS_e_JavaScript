# Curso Alura de JavaScript: manipulando elementos no DOM

## Aula 01 - Iniciando o Projeto Fokus

### Aula 01 - Apresentação - Video 1

Nesta aula do curso de JavaScript: manipulando elementos no DOM, foi apresentado o projeto Fokus, inspirado na técnica Pomodoro. O objetivo do curso é aprender a manipular o DOM, que é uma representação em memória de um documento HTML. Durante o projeto, são feitas alterações nos elementos da página ao clicar no botão "Descanso curto" e ao escolher "Começar" ou "Pausar" no cronômetro. É necessário ter conhecimentos prévios de HTML, CSS, funções e métodos do JavaScript para acompanhar o curso.

### Aula 01 - Conhecendo métodos do DOM - Video 2

Nesta aula, o instrutor introduziu o conceito de manipulação de elementos no DOM (Document Object Model) e apresentou alguns métodos para capturar elementos HTML na tela. Ele mostrou como identificar e capturar botões no projeto usando os métodos querySelector(), querySelectorAll(), getElementsByClassName() e getElementById(). Além disso, explicou o que é o DOM e como ele organiza os elementos em uma hierarquia de nós. O objetivo do curso é utilizar JavaScript puro para manipular os elementos no DOM.

### Aula 01 - Alterando data attributes - Video 3

Nesta aula, o instrutor aborda a implementação de um projeto relacionado à alteração de elementos na tela com base em diferentes cenários de temporizadores. O vídeo começa explicando como alterar os atributos de dados (data attributes) em um arquivo HTML e CSS para modificar a cor de fundo da página. Em seguida, é mostrado como adicionar interatividade à página usando JavaScript, através do uso de eventos de clique e do método setAttribute(). O instrutor também menciona a importância do uso do atributo defer ao carregar arquivos JavaScript na página. Por fim, é proposto um desafio para o espectador implementar a mudança de cor de fundo ao clicar em um botão específico. O vídeo termina com a promessa de que no próximo vídeo serão abordadas alterações de imagens.

### Aula 01 - Para saber mais: EventListeners

O que é DOM? DOM é a sigla para Document Object Model (Modelo de Objeto de Documento) e é uma forma padronizada de representar e interagir com objetos em documentos HTML e XML. O DOM representa a estrutura de um documento através de uma árvore de objetos, onde cada objeto representa uma parte do documento.  
O que é um Evento no DOM?
Pense nisso como sinais que o navegador envia quando algo acontece - como um usuário que clica em um botão em sua página web.  
O Método addEventListener.  
Ele é um método disponível para todos os elementos HTML e permite que registremos funções (callbacks) que serão chamadas quando um evento específico ocorrer.  
A sintaxe básica é a seguinte:  
elemento.addEventListener(evento, callback);  

- elemento: É o elemento HTML ao qual queremos associar o evento.
- evento: É uma string que representa o tipo de evento que desejamos capturar.
- callback: É a função que será chamada quando o evento ocorrer.

### Aula 01 Conclusão - Nessa aula, você aprendeu como

Iniciar a manipulação no DOM: Entendemos o que é o DOM (Document Object Model) e como ele representa a árvore de nós e objetos;

Trabalhar com Elementos no DOM: Aprendemos a manipular elementos no DOM usando JavaScript, especificamente nos concentrando na manipulação de botões;

Usar Seletores: Dominamos o uso de vários seletores e métodos, como querySelector, querySelectorAll, getElementsByClassName e getElementById, para selecionar elementos no DOM;

Diferenciar o DOM vs Document: Compreendemos as diferenças entre o Document e o DOM; o Document é um objeto global que representa o HTML, enquanto o DOM é uma representação conjunta de vários elementos;

Criar variáveis para elementos HTML: Aprendemos como criar uma variável para representar um elemento HTML em JavaScript.

## Aula 02 - Manipulando Elementos da tela

### Aula 02 - Alterando imagens - Video 1

Nesta aula, o instrutor ensina como alterar imagens no DOM. Ele mostra como referenciar a tag <img> no HTML e alterar o caminho da imagem usando JavaScript. Ele utiliza o método document.querySelector() para selecionar a tag <img> pela classe app__image e cria uma nova variável chamada banner. Em seguida, ele mostra como alterar a imagem dentro do evento de clique usando o método setAttribute(). Ele utiliza o evento de clique para alterar a imagem para a imagem verde quando o botão "Foco" é clicado, para a imagem azul quando o botão "Descanso curto" é clicado e para a imagem azul quando o botão "Descanso longo" é clicado. O instrutor também menciona que os addEventListener() estão começando a ter códigos repetidos e que isso será refatorado na próxima aula.

### Aula 02 - Para saber mais: trabalhando com atributos

getAttribute:  
O método getAttribute é usado para obter o valor de um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos recuperar o valor.

setAttribute:
O método setAttribute é usado para definir ou modificar o valor de um atributo em um elemento HTML. Ele aceita dois argumentos: o primeiro é o nome do atributo que queremos definir ou modificar, e o segundo é o valor que queremos atribuir a esse atributo. Se o atributo já existir, o método setAttribute irá sobrescrevê-lo; caso contrário, ele criará um novo atributo.

hasAttribute:
O método hasAttribute é usado para verificar se um elemento possui um atributo específico. Ele recebe um argumento, que é o nome do atributo que queremos verificar. O método retornará true se o atributo existir e false se o atributo não estiver presente.

removeAttribute:
O método removeAttribute é usado para remover um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos remover.

### Aula 02 - Separando funções e métodos - Video 2

Nesta aula, o instrutor continua o projeto Fokus, que consiste em alterar imagens e cores de fundo de uma página web. Ele percebe que há linhas de código repetidas dentro de cada addEventListener(), o que torna o código menos eficiente. Para resolver esse problema, o instrutor propõe separar as funções e métodos em uma função chamada alterarContexto(). A função alterarContexto() é criada na linha 22 do arquivo script.js e recebe a variável html com o método setAttribute() para definir os parâmetros data-contexto e contexto. Em seguida, a variável banner também é chamada com o método setAttribute() para definir o atributo src e o contexto. Por fim, o instrutor ajusta os métodos addEventListener() para passar o contexto para a função alterarContexto().

### Aula 02 - Alterando texto da página - Video 3

Nesta aula, o instrutor continua o projeto Fokus, que consiste em alterar o texto exibido na tela principal da página. Ele mostra como encontrar a tag <h1> no código HTML usando o VS Code e como criar uma variável para referenciá-la no JavaScript. A mudança de texto é feita quando houver um evento de clique nos botões "Descanso curto" e "Descanso longo" do temporizador. O instrutor explica como usar o método innerHTML para alterar o texto da tag <h1>. Ele também mostra como adicionar as tags <strong> para destacar partes do texto. O próximo passo do projeto será alterar o estilo dos botões de acordo com o contexto selecionado.

### Aula 02 - Você finalizou a segunda aula. E nela você aprendeu como

Alterar textos HTML com innerHTML: Aprendemos a alterar estrutura de conteúdo HTML com textos, tags e classes;
Utilizar o método switch: Aplicamos o método switch para alternar contextos e alterar a exibição de textos de acordo com o contexto;
Refatorar o código: Identificamos linhas de código repetidas e refatoramos o código criando a primeira função do projeto alterarContexto.

## Aula 03 - Aplicando áudios e estilos

### Aula 03 - Adicionando e removendo classes - Video 1

Nesta aula, o instrutor ensina como alterar o estilo dos botões em um projeto utilizando HTML, CSS e JavaScript. É mostrado como adicionar a classe "active" aos botões quando são clicados, utilizando o método ".classList.add('active')". Também é explicado como remover a classe "active" dos outros botões quando um deles é clicado, para que apenas um botão fique ativo por vez, utilizando o método ".classList.remove('active')". O instrutor menciona que o método ".classList" possui outras funcionalidades, como ".toggle()" e ".contains()", que serão abordadas em um próximo vídeo.

### Aula 03 - Para saber mais: manipulando classes com ClassList

O classList  
O classList é uma propriedade do JavaScript que representa uma lista de classes CSS. Ele fornece métodos que facilitam a adição, remoção e verificação de classes, tornando a manipulação de classes CSS mais eficiente e menos suscetível a erros de programação.

Adicionando uma classe.add()  
Para adicionar uma classe a um elemento HTML, podemos usar o método add() do classList. Este método aceita o nome da classe como argumento e adiciona a classe ao elemento, se ela ainda não estiver presente.

Removendo uma classe.remove()  
Para remover uma classe de um elemento HTML, podemos utilizar o método remove() do classList. Este método aceita o nome da classe como argumento e remove a classe do elemento, se ela estiver presente.  

Alternando uma classe.toggle()  
O método toggle() do classList permite alternar uma classe em um elemento. Se a classe já estiver presente no elemento, o método a remove; caso contrário, ele a adiciona

Verificando se uma classe.contains() está presente  
Para verificar se uma classe específica está associada a um elemento, podemos usar o método contains() do classList

Manipulando várias classes simultaneamente  
É possível adicionar ou remover várias classes de uma vez usando o método add() ou remove() passando vários argumentos separados por vírgula.

### Aula 03 - Inserindo objeto de áudio - Video 2

Nesta aula, aprendemos a inserir e manipular um arquivo de áudio em uma página web. O objetivo é reproduzir o áudio quando o usuário clicar em um input específico. Utilizamos o método document.querySelector('#alternar-musica') para acessar o input de música e a classe Audio para criar o objeto de áudio. Criamos um evento change para controlar o input e reproduzir ou pausar a música. Também aprendemos a utilizar a propriedade loop para reproduzir a música em looping.

### Aula 03 - Para saber mais: utilizando áudio em páginas da web

O objeto ‘Audio’ é uma parte do HTML5 e fornece uma interface fácil e poderosa para reproduzir e controlar arquivos de áudio em tempo real. Que tal explorar o uso, entendendo como criar, controlar, reproduzir e estilizar áudio em uma página da web?

Criando um Objeto ‘Audio’
Para criar um novo objeto ‘Audio’, podemos simplesmente usar a seguinte sintaxe:  
const audioElement = new Audio('caminho/do/arquivo-de-audio.mp3');

Controles básicos de áudio
Após criar um objeto ‘Audio’, podemos controlar sua reprodução e outras propriedades usando métodos e propriedades disponíveis.

- play(): inicia a reprodução do áudio;
- pause(): pausa a reprodução do áudio;
- currentTime: propriedade que retorna ou define a posição atual de reprodução do áudio, em segundos;
- volume: propriedade que retorna ou define o nível de volume do áudio, variando de 0 a 1.

### Aula 03 Conclusão - E nela você aprendeu como

Ativar e desativar áudio com input Checkbox: Entendemos como podemos ativar e desativar um arquivo de áudio na nossa página com a ajuda do input Checkbox;
Criar um objeto de áudio: Aprendemos a criar uma instância da classe de áudio usando a palavra-chave 'new';
Usar propriedades e métodos de áudio: Usamos a propriedade 'paused' e os métodos 'play()' e 'pause()' para controlar a reprodução do áudio;
Configurar áudio para loop: Fizemos com que o áudio fique em loop contínuo ao definir a propriedade "loop" para "true".

## Aula 04 - Desenvolvendo o Temporizador

### Aula 04 - Iniciando o temporizador (setInterval) - Video 1

Nesta aula, o instrutor ensina como implementar um temporizador no projeto Fokus. Ele explica como declarar a variável "tempoDecorridoEmSegundos" e criar uma função de contagem regressiva. Também mostra como referenciar o botão "Começar" no código HTML e criar um evento de clique para chamar a função de contagem regressiva. Além disso, o instrutor demonstra como automatizar o temporizador usando o método setInterval() e associa a função de inicialização à função de contagem regressiva. Por fim, destaca a importância de interromper a execução do temporizador para evitar o consumo excessivo de recursos da máquina.

### Aula 04 - Pausando o temporizador clearInterval - Video 2

Nesta aula, o instrutor ensina como pausar o temporizador utilizando a função clearInterval(). Ele também mostra como implementar essa funcionalidade no código, adicionando um bloco condicional na função contagemRegressiva para verificar se o tempo decorrido é menor ou igual a zero. Caso seja verdadeiro, ele exibe um alerta informando que o tempo foi finalizado e utiliza o return para interromper a execução do código. Além disso, o instrutor cria a função zerar() para utilizar o clearInterval() e interromper a execução do temporizador. Ele também sugere melhorias adicionais, como adicionar sons de notificação ao iniciar, pausar e finalizar o temporizador.

### Aula 04 - Para saber mais: acessando dados com propriedades no DOM

- Propriedade parentNode
A propriedade parentNode é utilizada para acessar o nó pai de um elemento no DOM. Por meio dela, podemos navegar pela árvore do DOM em direção ao nó pai do elemento atual.  
- Propriedade childNodes
A propriedade childNodes é utilizada para acessar todos os nós filhos de um elemento no DOM. Ela retorna uma lista de nós, incluindo nós de texto e elementos HTML.  
- Propriedade nextElementSibling
A propriedade nextElementSibling permite acessar o próximo irmão (nó adjacente) de um elemento no DOM.  
- Propriedade previousElementSibling
A propriedade previousElementSibling é semelhante ao nextElementSibling, mas permite acessar o irmão anterior (nó adjacente) de um elemento no DOM.

### Aula 04 Conclusão - E nela você aprendeu como

Utilizar o SetInterval: Compreendemos o papel do método setInterval na execução contínua de trechos de código;
Utilizar o ClearInterval: Aprendemos como utilizar o método clearInterval para interromper a execução do código;
Concatenar strings e variáveis: Utilizamos o operador + para juntar strings e variáveis.

## Aula 05 - Finalizando o Projeto

### Aula 05 - Alternando texto com textContent - Video 1

Nesta aula, o instrutor finaliza o projeto Fokus e mostra o resultado do desafio proposto no vídeo anterior. Ele adiciona áudios em determinados momentos do projeto, como quando o botão "Começar" é pressionado e quando o temporizador termina. O instrutor faz correções no código, como comentar uma linha de código que aciona o áudio quando o temporizador termina e corrigir a lógica de redefinição do temporizador. Ele também mostra como alterar o texto do botão de "Começar" para "Pausar" usando o método textContent. Por fim, ele menciona que seria interessante também alternar a imagem do botão entre "play_arrow.png" e "pause.png" quando o temporizador é iniciado e pausado.

### Aula 05 - Printando tempo na tela - Video 2

Nesta aula, o instrutor finaliza o projeto discutindo a implementação do temporizador. Ele mostra como exibir o tempo na tela utilizando o método innerHTML e cria a função "mostrarTempo()" para realizar essa tarefa. Além disso, o instrutor chama a função "mostrarTempo()" durante a contagem regressiva e no escopo global para que o tempo seja sempre exibido. Ele menciona que no próximo vídeo irá ajustar o formato do tempo para aparecer no formato "25:00".

### Aula 05 - Formatando tempo com objeto Date - Video 3

Nesta aula, o instrutor aborda a formatação do tempo no projeto Fokus utilizando JavaScript. Ele mostra como utilizar o objeto "Date" para formatar o tempo e como ajustar os valores dos temporizadores de acordo com o contexto. Além disso, ele menciona a necessidade de descomentar o código para reproduzir um áudio quando o tempo é finalizado. No final, o projeto Fokus é concluído.

### Aula 05 - Para saber mais: Objeto Date

Nesta aula, aprendemos como utilizar o [objeto Date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) para formatar minutos e segundos. Entretanto, é possível utilizar suas propriedades e métodos para mais funcionalidades, como manipular e exibir datas e horas no seu código.

- Construtor sem argumentos: const dataAtual = new Date();
- Construtor com argumentos (ano, mês, dia, hora, minuto, segundo, milissegundo): const dataEspecifica = new Date(2023, 7, 3, 12, 30, 0, 0);
- Construtor com uma string que representa a data (formato padrão é "yyyy-mm-dd"):  
const dateString = "2023-08-03";  
const formatoDeData = new Date(dateString);  
- Uma vez criado um objeto Date, você pode acessar informações específicas da data e hora, como o ano, mês, dia, hora, minuto e segundo usando os métodos de acesso do objeto:
const currentDate = new Date();
const ano = currentDate.getFullYear();  // Acessa o ano
const mês = currentDate.getMonth(); // Acessa o mês - Janeiro é 0, Fevereiro é 1, ..., Dezembro é 11
const dia = currentDate.getDate(); // Acessa o dia
const horas = currentDate.getHours(); // Acessa as horas 
const minutos = currentDate.getMinutes(); // Acessa os minutos
const segundos = currentDate.getSeconds(); // Acessa os segundos
const milissegundos = currentDate.getMilliseconds();  // Acessa os milissegundos
- Você também pode modificar a data e hora usando os métodos de definição:
const data = new Date();
data.setFullYear(2024);  // Define o ano
data.setMonth(10); // Define o mês
data.setDate(25); // Define o dia
data.setHours(10);  // Define as horas
data.setMinutes(30); // Define os minutos
data.setSeconds(0); // Define os segundos

### Aula 05 Conclusão - Vamos relembrar o que aprendemos?

Implementar objeto Date: Entendemos como implementar o objeto Date do JavaScript no projeto Fokus para formatar minutos e segundos;
Configurar diferentes temporizadores: Configuramos o temporizador para três contextos diferentes: foco, descanso curto e descanso longo;
Inserir temporizador na tela: Criamos a função “mostrarTempo()” e utilizamos o método innerHTML para mostrar o temporizador na tela.

### Aula 05 - Conclusão - Video 4

Nesta aula, o instrutor conclui o curso e apresenta o projeto Fokus, que utiliza métodos do JavaScript para manipulação de elementos no DOM. São utilizados os métodos InnerHTML, setAttribute, classList, querySelector e EventList para alterar textos, caminhos de imagens, classes e estilos dos botões, selecionar elementos e escutar interações com a página. O instrutor destaca a importância desses métodos e incentiva os alunos a compartilharem o projeto no LinkedIn com a hashtag #AprendiNaAlura. Ele também menciona a disponibilidade de um servidor no Discord para tirar dúvidas e trocar informações. O instrutor encerra desejando que os alunos tenham aprendido muito e se encontrem no próximo curso.
