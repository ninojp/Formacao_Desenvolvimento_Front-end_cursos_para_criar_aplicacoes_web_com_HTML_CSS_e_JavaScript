# Curso Alura: Node.js e terminal dominando o ambiente de desenvolvimento front-end

![alt text](image.png)

## Aula 1 - Conhecendo o Node.js e o Terminal

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Você quer iniciar seus estudos em um framework, uma biblioteca do front-end, como React, Angular ou Vue, mas ainda tem dúvida de como o Node funciona? Se sim, esse curso é para você!

Boas-vindas! Meu nome é Antonio Evaldo e serei o seu instrutor nesse curso de Node.

Audiodescrição: Antonio se autodeclara como um homem branco. Ele tem cabelos cacheados, pretos, na altura do ombro. Uso óculos, tem bigode e cavanhaque, e olhos castanho-escuros. Está de camiseta preta. Ao fundo, uma parede iluminada por um gradiente do rosa ao azul, com um quadro de guitarra à direita.

O que vamos aprender?  
Neste curso, vamos aprender tudo que é necessário saber em relação ao Node.js, para você poder trabalhar de forma muito mais tranquila com o framework front-end que escolher.

Então, você vai descobrir o que é o Node.js e por que utilizá-lo, além de como utilizá-lo no terminal (linha de comando). Também aprenderá o que é o NPM e os pacotes do Node, e como automatizar tarefas utilizando os scripts do NPM.

Nós também vamos explorar ferramentas front-end muito comuns que você pode utilizar em qualquer projeto, e nem precisa ser um framework. São elas: ESLint, o Prettier, o JSON Server.

Você também vai aprender a diferença entre dependências de desenvolvimento e dependências de produção.

Por fim, faremos o deploy de um projeto que utilizaremos como exemplo, servindo de base para as nossas práticas ao longo do curso: o VidFlow, uma plataforma para publicar e assistir vídeos, clone do YouTube.

E após estudar tudo isso, você terá todos os conhecimentos necessários para começar a estudar um framework front-end, seja ele React, Angular ou Vue, porque praticamente todos eles utilizam o Node. Com essa base já construída e sólida, você terá uma transição muito mais suave.

Pré-requisitos  
É importante que você tenha familiaridade com HTML, CSS e JavaScript para fazer esse curso. Mais especificamente em JavaScript, é interessante que você tenha conhecimento pelo menos até requisições HTTP.

Para estudar bem!  
Se tiver qualquer dificuldade no andamento deste curso, consulte o fórum. Nós tentaremos responder o mais rápido possível.

Além disso, acesse o Discord da Alura e comunique-se por este canal para tirar suas dúvidas e trocar ideias com outros alunos e alunas.

Vamos estudar!

### Aula 1 - Por que utilizar o Node.js? - Vídeo 2

Transcrição  
Quando escolhemos um framework ou biblioteca front-end para trabalhar, não importa qual seja, praticamente todas pedem para executarmos alguns comandos.

Para trazer alguns exemplos, vamos abrir a documentação do React na seção "Start a New React Project" (iniciar um novo projeto). Temos nela uma nota dizendo que precisamos instalar o Node.js para desenvolvimento local. Se descermos um pouco a tela, encontramos algumas opções de blocos de código que pedem para executarmos alguns comandos. Um deles é o npx create-next-app@latest.

Podemos conferir que isso não é muito diferente na documentação do Angular. Para começar a desenvolver com Angular, temos o comando npm install -g @angular/cli, ligeiramente parecido com o de criar projeto com o React.

Ao conferir na documentação do Vue, mais uma vez encontramos esses comandos e eles também pedem para ter o Node.js instalado. O comando do Vue é npm create vue@latest.

Observação: Dependendo da data que você estiver acompanhando este curso, esses comandos podem variar um pouco.

Mas, afinal, o que são esses comandos? Por que precisamos do Node.js para instalá-los?

Node.js: Ambiente de execução do JavaScript  
Para explicar melhor por que precisamos do Node.js, precisamos entender como o JavaScript funciona no ambiente ao qual estamos acostumados, que são os navegadores (ou browsers).

Chamamos esses navegadores de (alguns dos) ambientes de execução do JavaScript. Como sabemos, ele serve para manipular, ler o HTML e CSS, fazer algumas lógicas de programação. Os navegadores que conhecemos até agora, por exemplo, são Chrome, Mozilla Firefox, Opera e Microsoft Edge.

Mas onde entra o Node.js nisso? Ele surge como um novo ambiente de execução do JavaScript. Então, podemos chamá-lo de JavaScript Runtime, uma expressão bastante comum para esse contexto.

Mas, qual a diferença do Node.js para os navegadores?

A diferença é que ele consegue executar operações locais em nossos computadores, como a criação de servidores e APIs — propósito original do Node.js. Sendo o Node.js um ambiente de execução do JavaScript, isso significa que podemos utilizar essa linguagem, com que já temos familiaridade, para criar APIs, por exemplo; o que não era possível antes da criação do Node.js.

Além disso, o Node.js também consegue fazer leitura e escrita de arquivos, compilação de código e automatização de processos. E essas são apenas algumas das suas capacidades.

Se o Node.js foi criado inicialmente voltado para o ambiente do back-end, como ele ajuda no front-end? Justamente devido a essas operações citadas acima, que são muito úteis para nós do lado do front-end.

Fazendo uma analogia com o contexto de videogames, podemos imaginar que os arquivos JavaScript são como se fossem arquivos de jogos, e os navegadores como se fossem os consoles, como o Playstation ou o Xbox.

Um arquivo de jogo sozinho não consegue ser executado. Precisamos de um ambiente de execução, e os navegadores atuam nesse papel. Assim, combinando os navegadores com o JavaScript, conseguimos executá-lo do lado do front-end.

Já o Node.js também é um ambiente de execução, mas ele está mais para um "computador gamer", porque ele consegue fazer algumas operações a mais, que os navegadores não conseguem.

Inclusive, da mesma forma que existem jogos apenas para Xbox ou Playstation, existem jogos apenas para computadores. Isso significa que existem arquivos JavaScript que podem ser executados apenas nos navegadores, e existem arquivos JavaScript que podem ser executados apenas no Node.js. Temos funções específicas do Node e funções específicas do front-end.

É bom manter isso em mente e saber que existem, sim, diferenças entre o front-end e o back-end, mesmo utilizando a mesma linguagem de programação.

Node.js no desenvolvimento front-end  
Para entender como o Node pode ajudar no ambiente de desenvolvimento front-end — seja usando React, Angular ou Vue —, vamos conferir um exemplo.

Há um conceito muito comum na programação chamado "componentes". O código abaixo tem uma tag section, e dentro dela tem um componente chamado Banner, com um 'B' maiúsculo:

```html
<section>
    <Banner />
</section>
```

O que o Node pode fazer, no caso, é ler esse código e manipular o arquivo, transformando-o em código HTML que os navegadores conseguem entender. Por exemplo:

```html
<section>
    <header class="banner">
        <img src="..." alt="...">
        <p class="..."></p>
    </header>
</section>
```

Nesse caso, ele transformou o Banner em uma tag header, com uma imagem e um parágrafo dentro.

Essa é apenas uma das muitas coisas que o Node consegue fazer para auxiliar no nosso desenvolvimento. Muitas vezes, ele faz isso de forma bem automática e rápida. Vamos conferir muitos desses benefícios ao longo deste curso.

Agora que você sabe a importância de se utilizar o Node e por que precisamos dele, vamos instalá-lo.

Nos encontramos no próximo vídeo!

### Aula 1 - Preparando o ambiente: ferramentas do curso

Visual Studio Code e Live Server  
Recomendamos o uso do [Visual Studio Code](https://code.visualstudio.com/) para que você usufrua dos mesmos recursos que a pessoa instrutora ao longo do curso.

Além disso, utilizamos a [extensão Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para visualizar o projeto no navegador.

Node.js

Se você utiliza o Windows, pode pular o restante dessa atividade, pois o próximo vídeo ensinará o passo a passo de instalação do Node.js.

Mas, se você utiliza Linux ou MacOS, você pode seguir os passos abaixo para conferir se ele já está instalado:

1. Abra uma janela do terminal em seu computador. Isso pode ser feito da seguinte forma:

- Linux (Ubuntu): acesse o terminal disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta “Utilitários”.
- MacOS: acesse o terminal disponível no menu de “Aplicações”, dentro da pasta de “Utilitários”.

2. No terminal, digite node --version ou node -v e pressione Enter. Caso retorne um número de versão, como por exemplo v16.17.0, significa que o Node.js já está instalado.

> Se você não tem o Node.js instalado, você pode seguir o passo a passo do [artigo Como instalar o Node.js no Windows, Linux e macOS](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos).

Atenção:  
Por questões de compatibilidade com as ferramentas desse curso, é importante que a sua versão do Node cumpra o seguintes requisitos:

- Ser igual ou maior que a 16, por exemplo: 16.17.0, 18.10.1, 20.0.0;
- Ser uma versão LTS (Long Term Support), ou seja, o primeiro número da versão deve ser um número par, por exemplo: 16, 18, 20.
- Caso você tenha o Node instalado, mas em uma versão que não cumpra esses requisitos, recomendamos que você o desinstale e instale uma nova versão.

### Aula 1 - Instalando o Node.js - Vídeo 2

Transcrição  
Agora que sabemos que precisamos do Node para qualquer framework de front-end, vamos instalá-lo.

Talvez você já tenha instalado no seu computador, então vamos fazer primeiro essa verificação. Você pode abrir o terminal do seu computador (se for Windows, o programa PowerShell) e, para verificar se o Node já está instalado, rodar o seguinte comando:

> node --version

No caso do instrutor, que não tem o Node instalado ainda, aparece a seguinte resposta:

O termo 'node' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa operável.

Basicamente, quando aparece esse erro no Windows, quer dizer que o Node realmente não está instalado.

Se, por outro lado, apareceu uma versão do Node que seja menor do que 16, por exemplo, 14 ou inferior, então recomendamos que você a desinstale, porque ela já está um pouco desatualizada. Além disso, se for uma versão maior do que 16, mas ímpar, também recomendamos que desinstale. Depois de desinstalar, você volta para esse vídeo para instalar uma versão mais recente.

Vamos fechar o PowerShell e acessar o site http://nodejs.org. Há dois grandes botões verdes na tela; do lado esquerdo está a versão mais recente no momento da gravação deste vídeo: 20.9.0 LTS. Para você, pode estar aparecendo uma versão mais recente, mas será sempre LTS, que significa Long Term Support (Suporte a Longo Prazo), e uma versão par nesse lado esquerdo.

Versão par ou ímpar remete ao número antes do primeiro ponto: 20.9.0 é par, enquanto 21.1.0 é ímpar.

A versão do botão da direita, a Current (Atual) — no momento, 21.1.0 —, sempre vai ser ímpar. Mas não recomendamos que baixe a versão Current, porque por mais que seja mais recente, ela pode conter alguns bugs (erros). A versão LTS é sempre a mais estável.

Vamos clicar no botão da versão 20 e, ao fazer isso, o navegador vai baixar o arquivo executável automaticamente. Ao terminar de baixar, vamos abri-lo.

Após abrir o arquivo, surge uma janela do Windows para instalar o Node no nosso computador. Primeiro, clicamos no botão "Next" nessa janela. Seguindo para o termo de contrato, devemos aceitar marcando a checkbox e depois clicando em "Next" novamente.

Depois temos a janela para selecionar o local de instalação do Node, mas não precisamos nos preocupar com isso. Clicamos em "Next". Seguimos para mais configurações com as quais não precisamos nos preocupar, então clicamos em "Next" mais uma vez. Clicamos uma última vez na janela de configurações e, por fim, clicamos no botão "Install".

Note que ele exige que você tenha privilégio de administrador, então clicamos em "Sim" no pop-up sobreposto, pois essa é uma operação importante. Então, apenas esperamos ele instalar o Node na nossa máquina.

Se tudo correr com sucesso, a janela exibirá a mensagem de que o Node já foi instalado, então clicamos em "Finish".

Para ter certeza, vamos abrir de novo o terminal e rodar o comando:

> node -v

A resposta a esse comando deve ser "v20.9.0", a versão do Node que instalamos.

Reforçando: Você precisa ter pelo menos uma versão LTS do Node no seu computador, que seja maior ou igual a 16, para conseguir usar as ferramentas que vamos utilizar ao longo do curso. A versão 20 é suficiente para os nossos propósitos.

### Aula 1 - Para saber mais: conteúdos extras

Se você quiser se aprofundar mais no Node.js ( e espero que sim =]), separei para você alguns conteúdos bem interessantes:

- [Node.js para Frameworks Front-end](https://www.alura.com.br/artigos/nodejs-para-frameworks-front-end): um artigo com uma introdução à mesma temática deste curso;
- [O que é Node.js?](https://www.youtube.com/watch?v=8VSTrZY8vwI): um Alura+ que se aprofunda bem sobre as motivações de criação do Node.js, seus contextos de uso e vários detalhes extras;
- [Node.JS](https://www.alura.com.br/artigos/node-js): o que é, como funciona esse ambiente de execução JavaScript e um Guia para iniciar: um artigo que atua como um guia de introdução completo sobre o Node.

### Aula 1 - Executando o primeiro script Node - Vídeo 3

Transcrição  
Já estamos com uma versão estável do Node.js; no caso, é a versão 20. Executemos o comando node -v no terminal, que é basicamente um atalho para o comando node --version, para verificar se realmente instalamos o Node.

Mas, agora que nós estamos com ele instalado, vamos praticar com um script de JavaScript bem simples.

Para conseguirmos praticar, primeiro precisamos ter algumas noções básicas de uso de terminal, ou no caso do Windows, o PowerShell. Isso porque só conseguimos executar o Node através do terminal.

Verificando o diretório de trabalho  
Seu terminal pode ser um pouco diferente, principalmente se estiver utilizando Mac ou Linux. É possível que a linha de comando comece com um cifrão $, por exemplo. Então, para saber em que parte você está localizado dentro do terminal, você pode digitar o seguinte comando:

> pwd

Esse comando significa print working directory, ou seja, imprimir diretório de trabalho. Ele serve, basicamente, para mostrar o diretório atual.

No contexto do terminal, diretório é um sinônimo de pasta.

Executando pwd, aparecerá o caminho do diretório em que você está no terminal. O terminal é como se fosse outra forma de acessar as pastas e arquivos do seu computador, e o caminho é o "endereço" para chegar até a pasta em questão. No caso do instrutor, o caminho exibido é "C:\Users\Antonio".

Também conseguimos acessar esse mesmo caminho pelo explorador de arquivos do Windows ou qualquer outro sistema operacional. No explorador, usamos o cursor e o mouse para navegar na interface gráfica, clicando em "C:", depois em "Usuários", depois em "Antonio" para chegar ao diretório desejado. No terminal, por outro lado, utilizamos comandos para navegar.

Criando e entrando em um novo diretório  
Vamos voltar ao terminal. Como já sabemos, pwd mostra a pasta atual; no caso do instrutor, a pasta "Antonio".

Para criar uma nova pasta, podemos usar o comando mkdir, que significa make directory.

Após digitar esse comando, passamos um parâmetro para ele: o nome da pasta, que será exemplo-node. Seguindo a convenção de nomes de pastas e arquivos, usamos tudo em minúsculo e separamos as palavras com hífen. Essa é uma boa prática que evita conflitos de execução de programas que leem nossos arquivos e pastas.

Então, executaremos:

> mkdir exemplo-node

Após criar a pasta, vamos entrar nela. Para isso, usamos o comando cd, que significa change directory ("mudar de diretório"), junto do nome da nossa nova pasta:

> cd exemplo-node

Após executar esse comando, o caminho do terminal muda. No caso do instrutor, muda para "C:\Users\Antonio\exemplo-node".

Podemos agora voltar para a pasta anterior ("Antonio", por exemplo) se quisermos. Para isso, rodamos o comando:

> cd ..

Com isso, o caminho do terminal retorna a "C:\Users\Antonio".

Navegar pelas pastas por meio de comandos do terminal é uma prática bacana à qual podemos tentar nos acostumar.

Lembrando: Esse curso fornecerá apenas algumas noções básicas de terminal, suficientes para conseguir executar o Node no seu computador.

Executando um arquivo JavaScript pelo Node  
Conforme o prometido, vamos utilizar o Node por meio do terminal. Para isso, primeiramente vamos entrar novamente na nossa nova pasta com o comando cd exemplo-node.

Agora, queremos abrir essa pasta no Visual Studio Code.

Se você tem a IDE Visual Studio Code instalada, pode usar o programa de linha de comando (terminal) para navegar por ela. Podemos usar o seguinte comando para abrir a pasta atual no editor:

> code .

Ao executar esse comando, o VS Code é aberto automaticamente. Já na interface do editor, vamos criar um arquivo JavaScript clicando no botão "New File..." no menu superior esquerdo. Vamos nomeá-lo como script.js.

Nesse arquivo, vamos escrever o seguinte para imprimir uma mensagem:

scrip.js

> console.log('Meu primeiro programa Node.js');

Salvamos o arquivo com "Ctrl+S".

Lembra da analogia de que o Node é como se fosse computador gamer? Ele consegue executar o nosso arquivo JavaScript, que é como se fosse nosso jogo de videogame.

Ou seja, esse arquivo sozinho não faz nada. Dessa forma, precisamos de um ambiente de execução para o nosso código JavaScript. Nesse caso, usaremos o Node para executá-lo, tal como executaríamos arquivos JavaScript no front-end. No entanto, usaremos um ambiente um pouco diferente: o terminal!

Poderíamos continuar utilizando o terminal local do computador, como o Power Shell, para executar comandos do Node. Mas, vamos conhecer um recurso que utilizaremos bastante: o terminal integrado do VS Code.

Com o VS Code aberto, podemos abrir o terminal clicando em "View > Terminal" no canto superior esquerdo da tela, ou pressionando as teclas "Ctrl + ' ".

Com isso, uma aba chamada "Terminal" se abrirá na parte inferior do VS Code. Note que ele exibe um caminho de forma muito semelhante ao terminal local, o que nos permite verificar qual diretório está aberto. No caso do instrutor: "C:\Users\Antonio\exemplo-node".

Podemos até identificar qual terminal está aberto pelo terminal integrado, observando a parte superior direita dele. Para o instrutor, o terminal exibido é "powershell".

Podemos escolher em que terminal queremos executar nossos comandos, clicando no botão de seta para baixo ao lado do nome do terminal aberto. Temos diferentes opções e cada uma possui suas especificidades, mas, no geral, todos operam de maneiras muito semelhantes. Você pode selecionar o de sua preferência.

Já estamos na pasta "exemplo-node". Para executar o arquivo script.js, vamos digitar o seguinte comando no terminal integrado:

> node script.js

Ao executar o comando, o terminal imprimirá a mensagem "Meu primeiro programa Node.js", conforme o esperado, indicando que o arquivo foi executado com sucesso!

Resumindo, o Node consegue executar arquivos JavaScript assim como os navegadores, mas com algumas capacidades adicionais que conheceremos ao longo do curso.

A partir de agora, vamos entender como o Node pode nos ajudar em um projeto front-end real, utilizando ferramentas que nos auxiliarão no dia a dia de desenvolvimento.

### Aula 1 - Para saber mais: usando o Node diretamente

Sabia que é possível executar código JavaScript diretamente no programa do Node, sem criar arquivos?

Isso pode ser muito útil para realizar operações rápidas com o JavaScript, como a geração de um número aleatório ou até mesmo executar pacotes do Node (você aprenderá mais sobre eles ao longo do curso).

Vamos testar? Existem duas formas de abrir o programa do Node:

1. Pesquise por “Node.js” no seu computador e selecione a seguinte correspondência:

![alt text](image-2.png)

Recorte de tela mostrando o resultado da pesquisa. Nele está o nome “Node.js”, abaixo dele está informando que é um aplicativo, e ao lado está o logo do Node.js.

Recorte de tela mostrando o resultado da pesquisa. Nele está o nome “Node.js”, abaixo dele está informando que é um aplicativo, e ao lado está o logo do Node.js.

2. Ou, no terminal do seu computador, apenas execute o comando node.

Em seguida, um programa de linha de comando será executado, muito semelhante ao terminal:

![alt text](image-1.png)

Captura de tela do programa do Node. É uma tela preta com letras brancas. No início, está escrito em inglês: “Boas vindas ao Node.js v20.9.0. Pressione ‘.help’ para mais informações”. Logo abaixo, há um espaço para digitação.

Captura de tela do programa do Node. É uma tela preta com letras brancas. No início, está escrito em inglês: “Boas vindas ao Node.js v20.9.0. Pressione ‘.help’ para mais informações”. Logo abaixo, há um espaço para digitação.

E nele podemos executar operações válidas do JavaScript, como criação de variáveis, console.log, entre outras. Na imagem abaixo, temos a geração de um número aleatório com a função nativa Math.random():

![alt text](image-3.png)

Foi executado o comando “Math.random()” e o Node.js retornou o valor “0.7287829982691396”.

Foi executado o comando “Math.random()” e o Node.js retornou o valor “0.7287829982691396”.

Esse programa é muito semelhante aos consoles dos navegadores, mas como você deve imaginar, podemos executar não apenas funções como Math.random(), mas também pacotes do Node e operações locais.

### Aula 1 - Revisando o uso do Node

Denize está aprendendo a utilizar o Node.js e, para praticar, criou um arquivo imprimeNome.js com o seguinte conteúdo:

```JavaScript
const nome = 'Denize';

console.log(`Boas vindas, ${nome}!`);
```

O que a Denize deve fazer para executar esse arquivo utilizando o Node.js?

Resposta:

Abrir o terminal no mesmo diretório do arquivo e executar o comando node imprimeNome.js.

> Esse comando leva em conta a pasta que estamos localizados. Outra variação que você pode ver é node ./imprimeNome.js. O ./ faz referência à pasta atual, mas ele pode ser omitido.

### Aula 1 - Para saber mais: cursos de terminal

Neste curso, veremos o conteúdo básico sobre terminal, que será suficiente para trabalharmos com o Node.

No entanto, sabia que ele tem muito mais capacidades, como até mesmo execução de scripts de forma nativa? Ele pode ser utilizado para automatizar tarefas relacionadas aos arquivos e pastas do seu computador.

Confira os seguintes conteúdos para se aprofundar nessa temática, dependendo do seu sistema operacional:

- Windows: [curso Windows Prompt: utilizando o CMD](https://cursos.alura.com.br/course/windows-prompt-utilizando-cmd)
- Windows: [formação PowerShell: automatize suas tarefas](https://cursos.alura.com.br/formacao-powershell)
- Qualquer sistema operacional: [curso Terminal: aprenda comandos para executar tarefas](https://cursos.alura.com.br/course/terminal-comandos-executar-tarefas)

### Aula 1 - Faça como eu fiz: praticando com o Node.js

Chegou a hora de você colocar a mão na massa, caso ainda não tenha feito!

Após instalar o Node em uma versão LTS e maior ou igual a 16, execute o seu primeiro arquivo JavaScript utilizando o Node.js através do terminal.

Opinião do instrutor

Abra o terminal do seu computador. Crie uma nova pasta e entre nela com os seguintes comandos:

mkdir nome-da-pasta

cd nome-da-pasta

Em seguida, abra a pasta no VSCode:

code .

Em seguida, crie um novo arquivo chamado script.js, por exemplo, com o seguinte conteúdo:

console.log('Meu primeiro programa Node.js!');

Por fim, execute o seguinte comando no terminal:

node script.js

Assim, o terminal responderá com a frase “Meu primeiro programa Node.js!”. Você executou seu primeiro arquivo JavaScript utilizando o Node.js :)

### Aula 1 - O que aprendemos?

Nessa aula, você aprendeu a:

- Identificar o Node.js como um ambiente de execução JavaScript (JavaScript Runtime):
- O Node.js é capaz de executar arquivos JavaScript, assim como os navegadores;
- Ele é capaz de realizar operações que os navegadores não conseguem, como: criação de servidores e APIs, leitura e escrita de arquivos, conversão de código, entre outras;
- Naturalmente, ele não consegue executar código JavaScript específico do front-end, como as APIs de manipulação do DOM.
- Executar seu primeiro programa Node.js!
- Você criou e executou um simples script, que imprimia uma frase no terminal;
- Para isso, usamos o comando node nome-do-arquivo.js dentro da pasta do arquivo.

## Aula 2 - Gerenciando Pacotes com NPM

### Aula 2 - Preparando o ambiente: baixando o VidFlow

A partir dessa aula, iremos utilizar o projeto VidFlow. Recomendo que [baixe o projeto](https://github.com/alura-cursos/3519-nodejs-vidflow/archive/refs/heads/projeto-base.zip) ou [visualize os arquivos no GitHub](https://github.com/alura-cursos/3519-nodejs-vidflow), para um melhor aproveitamento do curso.

Em seguida, para utilizar o projeto junto com a API local, você precisará do json-server. Você pode instalá-lo globalmente no seu computador com o seguinte comando:

> npm install -g json-server@0.17.4

Mesmo se você já tiver o json-server instalado, o comando acima o atualizará para a versão 0.17.4, que usaremos neste curso.

> Não se preocupe se não entender todas as partes do comando no momento. Iremos abordá-lo com mais detalhes em um vídeo futuro!

Por fim, caso você utiliza o Windows, abra o Windows PowerShell como administrador e execute o seguinte comando:

> Set-ExecutionPolicy RemoteSigned

Em seguida, digite “S” e pressione Enter. Isso irá permitir a execução de scripts no seu computador, caso essa permissão ainda não estivesse habilitada.

Tudo pronto? Agora podemos prosseguir!

### Aula 2 - Criando o package.json com NPM - Vídeo 1

Transcrição  
Já conhecemos o Node, instalamos em nossos computadores e compreendemos por que ele pode ser muito útil em nosso desenvolvimento. Para exemplificar de forma prática um projeto de front-end, trazemos o VidFlow, que já está aberto no VS Code, proporcionando a oportunidade para que todos possam baixá-lo em uma das atividades disponíveis nesta aula.

Criando o arquivo packege.json

Do lado esquerdo doVS Code, temos:

NODEJS-VIDFLOW
backend
css
img
index.html
script.js

O projeto inclui várias pastas: uma dedicada ao back-end, para a qual precisaremos do pacote chamado JSON Server, uma pasta css, uma de imagens (img), além dos arquivos index.html e script.js.

Para abrir esse projeto em nossos navegadores, podemos utilizar a extensão Live Server (Servidor Ao Vivo), para a qual já deixamos uma atividade de download. Para ativá-la, basta clicar no botão "Go Live" (Ir Ao Vivo), localizado no canto inferior direito de nossos VS Code, ou abrir o arquivo index.html e usar o atalho "Alt + L + Alt + O".

Fazendo isso, o VidFlow abre em nossos navegadores, mas ocorreu um erro devido à indisponibilidade de carregamento dos vídeos. Para resolver esse problema, precisamos executar a nossa API local.

Para isso, podemos retornar ao nosso VS Code, abrir o terminal integrado com "Ctrl + aspas simples" e digitar json-server --watch backend/videos.json.

> json-server --watch backend/videos.json

É importante destacar que é necessário ter o JSON Server instalado em nossos computadores. Ao seguir essas etapas, conseguimos abrir o link localhost:3000/videos ao segurar "Ctrl" e clicar nele. Assim, teremos acesso em nossos navegadores à lista de objetos disponibilizada pela API local.

A lista de objetos abaixo foi parcialmente transcrita. Para conferi-la na íntegra, execute o código na sua máquina.

```JSON
{
"id": 1,
"titulo": "Conhecendo a linguagem Go | Hipsters. Talks",
"descricao": "3 mil visualizações",
"url": "https://www.youtube.com/embed/y8FeZMv37WU",
"imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true", 
"categoria": "Programação"
},
{
"id": 2,
"titulo": "Desmistificando mobile Linguagens e Frameworks",
"descricao": "1,5 mil visualizações",
"url": "https://www.youtube.com/embed/fmulLQvZhms", "imagem":
"https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
"categoria": "Mobile"
},
```

Podemos fechar essa aba.

Ao atualizar o VidFlow, os vídeos carregam com sucesso. Voltando um pouco, o VidFlow é como um clone do YouTube, exibindo vídeos da Alura. Temos a capacidade de filtrar esses vídeos por categoria.

Em essência, no projeto em que estamos trabalhando com o Node, não implementaremos novas funcionalidades ou alterações visuais. Em vez disso, utilizaremos o Node para empregar algumas ferramentas que facilitarão a manutenção do código e aplicaremos boas práticas para aumentar a escalabilidade do projeto.

ESLint  
Uma das ferramentas que iremos utilizar desta vez é o ESLint, que já está aberto em nossos navegadores. Podemos acessar o ESLint através do site eslint.org. Essa ferramenta é projetada para identificar e corrigir problemas em nosso código JavaScript, além de promover boas práticas.

Podemos visualizar no site um comando específico: npm init @eslint/config. Assim, temos mais um comando que precisamos executar.

npm init @eslint/config

O que acontece se tentarmos executar esse comando? Vamos clicar no botão de copiar, que está localizado à esquerda dele. Em seguida, no VS Code, para executar o comando, precisaremos criar um novo terminal, pois o atual já está em uso.

Para abrir um novo terminal, podemos clicar no botão de adição ao lado da aba Node, localizado na parte superior direita do terminal integrado. Alternativamente, podemos digitar "Ctrl + Shift + aspas simples" para abrir um novo terminal. Podemos navegar entre os terminais abertos clicando nas abas do lado direito do VS Code.

No novo terminal aberto, daremos um "Ctrl + V" e rodamos o comando npm init @eslint/config. Se pressionarmos "Enter", já sabíamos que isso resultaria em um erro. Vamos ler esse erro.

throw new Error("A package.json file is necessary to initialize ESLint. Run npm init to create a package.json file and try again.");

Subindo um pouco, uma parte do erro diz que um arquivo package.json é necessário para inicializar o ESLint. Vamos executar npm init para criar um package.json. E o que é esse npm ou package.json?

Vamos limpar o terminal com "Ctrl + L", e o comando que executamos por último foi o npm init. Mas afinal, o que é esse npm? npm significa Node Package Manager (Gerenciador de Pacotes do Node).

Se voltarmos à analogia dos jogos, onde um arquivo JavaScript é um arquivo de jogo, podemos imaginar que o npm é a loja de jogos, porque é lá onde as pessoas desenvolvedoras podem publicar seus projetos JavaScript, e uma vez publicados, qualquer pessoa pode baixá-los em seu computador.

E o ESLint é justamente um desses pacotes. O ESLint também foi feito com o Node, com código JavaScript, e ele consegue fazer a prevenção de erros no nosso código usando o Node.

Agora você sabe que o ESLint é um pacote, e que podemos usar o npm para instalar o ESLint no nosso projeto. Seguindo as orientações do erro, podemos executar npm init no terminal integrado.

> npm init

Pressionamos "Enter" para executar esse comando.

Recebemos uma resposta do terminal em inglês, mas vamos nos concentrar no final, onde pergunta qual é o nome do pacote que queremos criar.

Press ^C at any time to quit.

package name: (nodejs-vidflow)

Ele sugere o nome da pasta, nodejs-vidflow, que já é o nome da nossa pasta. Pressionamos "Enter" para aceitar essa sugestão e continuamos pressionando "Enter" nas próximas opções até o final.

Quando chegamos no final, ele diz que está prestes a criar um arquivo package.json no caminho do nosso projeto com o conteúdo que está entre as chaves. Pergunta se está ok, dizemos que sim e pressionamos "Enter".

O retorno abaixo foi parcialmente transcrito. Para conferi-lo na íntegra, execute o código na sua máquina.

```JSON
{
"name": "nodejs-vidflow",
"version": "1.0.0",
"description": "main": "script.js", "scripts": { "test": "echo \"Error: no test specified\" && exit 1" }, "author":
"license": "ISC"
}

Is this OK? (yes)
```

É criado, de fato, um arquivo package.json na raiz do nosso projeto. Clicamos nesse arquivo, fecho o terminal integrado com "Ctrl + aspas simples".

package.json

```JSON
{
"name": "nodejs-vidflow",
"version": "1.0.0", 
"description": "",
"main": "script.js", 
Debug
"scripts": { 
"test": "echo \ "Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC",
"devDependencies:" {
"eslint": "8.52.0"
}
}
```

Temos um arquivo JSON com chaves e algumas propriedades, como nome do pacote, versão, descrição, etc. Esse arquivo é necessário e é uma exigência do npm para que possamos instalar novos pacotes em nosso projeto, como o ESLint.

Voltando ao site do ESLint e clicando em "Get Started" (Começar), encontramos orientações sobre esse arquivo. Ao descer um pouco, são fornecidas informações sobre as versões necessárias do Node para utilizar o pacote. Descendo mais, deparamos com o comando npm init e algumas configurações opcionais.

Queremos ressaltar que a documentação já indicava a necessidade de um arquivo package.json. Agora que estamos cientes disso e criamos esse arquivo, vamos instalar o ESLint em nosso projeto.

### Aula 2 - Instalando o ESLint - Vídeo 2

Transcrição  
Nós já criamos o arquivo package.json no nosso projeto. Observamos que ele é necessário pelo npm (Node Package Manager) para baixar um pacote, como o ESLint. É importante destacar que o npm funciona como uma loja de pacotes, permitindo o download desses pacotes do Node.

> Instalando o ESLint  
Ao retornarmos ao site do ESLint, copiaremos novamente o comando npm init @eslint/config. Agora podemos executá-lo no nosso terminal.

```JavaScript
npm init @eslint/config
```

No VS Code, abrimos o terminal com "Ctrl + aspas simples". O terminal do JSON Server está em execução, então o mantemos, e acessamos o outro terminal aberto. Pressionamos "Ctrl + L" para limpar e, em seguida, "Ctrl + V" para colar o comando.

Vamos usar o npm para baixar esse pacote no nosso projeto localmente, permitindo-nos aproveitar as funcionalidades do ESLint para corrigir e prevenir erros no nosso código. Antes de executar o comando, iremos adicionar @0.4.6 junto ao config.

```JavaScript
npm init @eslint/config@0.4.6
```

Nós implementamos essa especificação para assegurar que todos baixem o ESLint na mesma versão, assegurando assim consistência no código e na aparência do projeto. Já executamos o comando ao pressionar "Enter"; o terminal está interativo e nos pede, em inglês, como queremos utilizar o ESLint.

How would you like to use ESLint?

To check syntax only

To check syntax and find problems

To check syntax, find problems, and enforce code style

Há três opções disponíveis, que podem ser alternadas com as setas para cima e para baixo. Escolhemos manter a segunda opção, que envolve verificar a sintaxe e identificar problemas (to check syntax and find problems).

Só dando um contexto da terceira opção, que diz ser para reforçar o estilo do código, a verdade é que dá para usar o ESLint também para reforçar o estilo de código, mas a equipe do ESLint já está com planos de depreciar alguns recursos relacionados à estilização de código. Não vamos optar por essa opção. Pressionamos "Enter" na segunda.

A seguinte pergunta é sobre os tipos de módulos que nosso projeto utiliza. Optamos por JavaScript Modules, então pressionamos "Enter".

What type of modules does your project use?

JavaScript modules (import/export)

CommonJS (require/exports)

None of these

Agora, qual framework estamos utilizando? Nem React nem Vue, então escolhemos a terceira opção, nenhum deles, e pressionamos "Enter".

Which framework does your project use?

React

Vue.js

None of these

Estamos utilizando TypeScript? Não, pressionamos "Enter".

Does your project use TypeScript? No/Yes

Na sequência, temos a pergunta: onde nosso projeto será executado?

Where does your code run?

Browser

Node

Ele opera no navegador, pois é um projeto de front-end. Concordamos com isso e pressionamos "Enter" novamente.

What format do you want your config file to be in?

JavaScript

YAML

JSON

Agora, qual é o formato desejado para o arquivo de configuração? Optamos por JSON, que é a terceira opção, pois geralmente apresenta menos problemas em algumas situações. Pressionamos "Enter".

Would you like to install them now? No Yes

Agora, a próxima pergunta que temos é se o terminal está solicitando permissão para instalar a dependência ESLint@latest. Vamos explicar o significado desse termo "dependência". Em resumo, o termo latest indica que queremos baixar a versão mais recente do ESLint. Vamos confirmar selecionando "yes" e pressionando "Enter".

Which package manager do you want to use?

npm

yarn

pnpm

A próxima pergunta que temos é qual gerenciador de pacotes queremos utilizar. Optamos pelo npm e pressionamos "Enter". Agora, vamos proceder à instalação da versão mais recente do ESLint em nosso projeto. O ESLint já foi baixado e essa etapa pode demandar algum tempo; no nosso caso, foram 8 segundos.

Analisando no VSCode
Agora, vamos à seção de explorador no VS Code para verificar alguns detalhes dos arquivos gerados. Observamos a nova pasta chamada node_modules. Ao abri-la, percebemos que é bastante extensa.

node_modules
.bin
@aashutoshrathi
@eslint
@eslint-community
@humanwhocodes
@nodelib
@ungap
acorn
acorn-jsx
ajv
ansi-regex
…

Para elucidar, vamos fechar o terminal integrado. Além disso, para uma compreensão mais clara, começaremos explicando as modificações feitas no arquivo package.json.

package.json

```JavaScript
{
"name": "nodejs-vidflow",
"version": "1.0.0", 
"description": "",
"main": "script.js", 
Debug
"scripts": { 
"test": "echo \ "Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC",
"devDependencies:" {
"eslint": "^8.52.0"
}
}
```

Ele agora está com uma parte nova, chamada devDependencies, e lista o ESLint na versão 8.52.0, que para mim é atualmente a versão mais recente. Para você, talvez seja um número um pouco diferente.

E quando o package.json lista um pacote como dependência, é isso que significa. Quer dizer que o nosso projeto agora depende do ESLint para os seus propósitos.

No nosso caso, se queremos utilizar o ESLint para o nosso desenvolvimento, então documentamos isso no package.json. E também é uma documentação que serve para o npm, porque se outra pessoa for baixar o nosso projeto, ela já vai saber que tem que baixar o ESLint e usar um comando específico do npm para fazer isso.

Ao falarmos sobre baixar o ESLint, o procedimento foi realizado diretamente na pasta node_modules. Ao abrir essa pasta, observamos a presença de uma subpasta denominada ESLint. Contudo, surge a questão: por que essas pastas adicionais foram baixadas simultaneamente? A razão é que o ESLint possui suas próprias dependências.

Ele se apoia em outros pacotes, desencadeando uma cadeia de dependências que resulta na acumulação desses arquivos. Esse cenário é bastante comum no contexto do Node, npm, e pode, de fato, levar a uma instalação que consome tempo.

Temos outro arquivo criado, o .eslintrc.json. Ao abri-lo, percebemos que se trata essencialmente de um arquivo destinado exclusivamente ao ESLint, contendo configurações para prevenção e correção de erros.

.eslintrc.json

```JavaScript
{
"env": {
"browser": true,
"es2021": true
},
"extends": "eslint: recommended",
"parserOptions": {
"ecmaVersion": "latest",
"sourceType": "module"
},
"rules": {
}
}
```

Não é necessário nos concentrarmos profundamente nele por enquanto, uma vez que é específico do ESLint. Para personalizar ou aprimorar essa configuração, sugerimos consultar a documentação correspondente.

Agora que temos o ESLint baixado localmente em nosso projeto, na pasta node_modules, podemos executar esse pacote. Para visualizar o ESLint em ação, abriremos o arquivo script.js e provocaremos um erro. Indo ao início do arquivo, tentaremos realizar um console.log() em uma variável inexistente, como por exemplo, calopsita.

script.js

```JavaScript
const containerVideos = document.querySelector(".videos__container");

console.log(calopsita);

// código omitido
```

Se salvamos este arquivo, conseguimos verificar a gravidade deste erro ao acessar o navegador. Ao abrir o VidFlow, notamos que o ESLint não foi carregado. Ao pressionar "F12" para abrir o DevTools, o erro calopsita é exibido no console do navegador, indicando que não está definido. É exatamente esse tipo de erro que procuramos evitar durante o desenvolvimento.

Imagine se contássemos com uma ferramenta capaz de prevenir esses erros. Poderíamos evitá-los completamente quando nosso site estiver online em uma URL real, em produção, eliminando esse tipo de situação.

Para identificar esse erro, qual seria a abordagem mais adequada? Vamos instruir o npm a executar esse pacote no arquivo script.js. Ao abrir o terminal, teclamos "Ctrl + L" para limpar, e para executar um pacote do nosso projeto, utilizaremos o novo comando npx.

A letra "X" em npx representa "execute" (executar). Com o comando npx, especifico o pacote a ser executado, que neste caso é o ESLint. Em seguida, indicamos o nome do arquivo que desejamos verificar, que é script.js.

```JavaScript
npx eslint script.js
```

Após pressionar "Enter", observamos o ESLint em ação, revelando o erro de que calopsita não está definido. Essa é uma abordagem bastante interessante.

error 'calopsita' is not defined

Por que esse comando é útil? Ao executarmos, por exemplo, npx eslint ., realizamos uma verificação em todos os arquivos JavaScript do nosso projeto. Essa abordagem economiza consideravelmente nosso tempo e aumenta nossa produtividade. Não será mais necessário realizar verificações manuais em cada arquivo; teremos um processo automatizado para essa tarefa.

```JavaScript
npx eslint .
```

Ao pressionarmos "Enter" neste ponto, não haverá diferença no resultado do terminal, pois o script.js é o único arquivo JavaScript. No entanto, ao trabalharmos em um projeto com dezenas ou centenas de arquivos JavaScript, o ESLint se torna extremamente útil. Podemos visualizar claramente sua utilidade nesse contexto.

Agora que identificamos o erro, podemos acessar o arquivo script.js, remover o console.log, salvar as alterações, executar novamente o comando npx eslint ., copiar o último comando com a seta para cima, pressionar "Enter" e, observem, não há mais respostas do terminal. Isso indica a ausência de erros no nosso projeto, permitindo-nos prosseguir sem preocupações.

Para concluir o vídeo, há uma tarefa importante a ser realizada no projeto, caso esteja utilizando o git. É crucial observar que todos os arquivos e componentes da node_modules estão sendo incluídos no git.

Se chegarmos até o terceiro ícone no lado esquerdo, todos esses arquivos seriam enviados para o GitHub, o que resultaria em um erro ao tentar realizar um commit. Para evitar essa situação, é possível acessar o explorador de arquivos, criar um novo arquivo chamado .gitignore.

Nesse ponto, encerraremos o terminal integrado para uma visualização mais clara. No arquivo .gitignore, basta inserir o nome da pasta, que é node_modules.

.gitignore

```JavaScript
node_modules
```

Salvamos o arquivo, o que automaticamente faz com que a pasta seja ignorada pelo git. Agora podemos realizar nossos commits sem problemas. Concluímos a instalação do ESLint usando o npm com o comando npm init e executamos o ESLint em nosso projeto usando o comando npx.

Contudo, repetir esse comando constantemente pode se tornar cansativo. Vamos explorar uma abordagem mais eficiente para utilizar o ESLint em nosso projeto.

Até mais!

### Aula 2 - Para saber mais: explorando comandos do NPM

Até agora utilizamos os comandos npm init e npm init @eslint/config@0.4.6 do NPM. Vamos entender um pouco melhor como esses comandos funcionam?

Você também pode acessar a [página da documentação](https://docs.npmjs.com/cli/commands/npm-init) desse comando.

npm init  
Como você conferiu, ao executar apenas npm init, o terminal se torna interativo e um arquivo package.json é criado na pasta atual, de acordo com as respostas do terminal.

Outra forma de usar esse comando é executando npm init --yes ou npm init -y para pular todas as perguntas do terminal e criar o package.json imediatamente.

npm init `<inicializador>`
Já o comando abaixo funciona um pouco diferente:

```JavaScript
npm init @eslint/config@0.4.6
```

Ele é o equivalente a escrever o seguinte:

```JavaScript
npx @eslint/create-config@0.4.6
```

Com a presença do npx, conferimos que na verdade esse comando executa o pacote @eslint/create-config na versão 0.4.6.

Note que essa sintaxe “adiciona” o termo create- ao parâmetro que escrevemos no comando. É um detalhe interessante de se ter em mente, pois assim podemos procurar corretamente pelo pacote no site do NPM, caso queiramos consultá-lo.

Ou seja, no NPM, o nome do pacote não é @eslint/config, e sim @eslint/create-config, conforme você pode conferir na [página do site](https://www.npmjs.com/package/@eslint/create-config).

A execução desse pacote torna o terminal interativo e nos faz as perguntas relacionadas à criação do arquivo de configuração do ESLint: o .eslintrc.json. Ao final das perguntas, o terminal também pede para instalar o pacote eslint@latest.

Recorte de tela do terminal interativo. Ele diz em inglês que nenhuma instalação local do ESLint foi encontrada e que deseja instalar o pacote “eslint@latest”.

Recorte de tela do terminal interativo. Ele diz em inglês que nenhuma instalação local do ESLint foi encontrada e que deseja instalar o pacote “eslint@latest”.

Ao responder que sim, a instalação da versão mais recente do eslint é feita automaticamente. Mas se tivéssemos respondido que não, poderíamos instalá-lo manualmente no projeto, executando o comando abaixo:

```JavaScript
npm install eslint@latest
```

Resumo  
Então, note que lidamos com dois pacotes:

- O @eslint/create-config é o que executamos para tornar o terminal interativo e criar o arquivo de configurações do ESLint. Esse pacote também foi criado pela equipe do ESLint.
- O eslint é o ESLint em si, que deve ser baixado no nosso projeto, a fim de encontrar os erros no código.
- Por fim, talvez o pacote @eslint/create-config tenha chamado a sua atenção por sua sintaxe diferenciada, com os caracteres arroba (@) e barra (/). Essa sintaxe é um recurso do NPM chamado de scoped packages, que você pode conferir em mais detalhes na [página da documentação](https://docs.npmjs.com/cli/using-npm/scope).

### Aula 2 - Usando extensão do ESLint - Vídeo 3

Transcrição  
Já aprendemos a instalar e utilizar o ESLint no nosso projeto local. O que exploramos até agora está registrado no arquivo script.js. Na ocorrência de erros, como a inexistência da variável console.log, por exemplo, esses problemas só seriam detectados durante a visualização no navegador. O ESLint desempenha um papel crucial ao identificar esses erros antecipadamente.

Entretanto, a única abordagem que discutimos para executar o ESLint é através do comando npx eslint .. Isso é especialmente útil para analisar todos os arquivos JavaScript neste projeto.

Então, executamos esse comando no terminal e ele vai contar os erros de todos os arquivos JavaScript. Só que pode ser um pouco incômodo ficar escrevendo esse comando. Além do mais, precisamos lembrar de executá-lo sempre que quisermos verificar os erros.

Se não lembrarmos de fazer isso, podemos acabar deixando algum erro passar no navegador, por exemplo, e dependendo apenas dos testes manuais que são bem propensos a erros também.

Usando a extensão ESLint  
Existe uma extensão oficial do ESLint projetada para o VS Code que facilita a detecção de erros sem a necessidade de executar comandos no terminal repetidamente. Vamos encerrar o terminal agora e acessar a seção de extensões do VS Code. Podemos encontrá-la no quinto ícone da esquerda ou pressionando "Ctrl + Shift + X" para abrir essa seção.

Digitamos "ESLint", aguardamos a sugestão e clicamos na primeira opção, que é o ESLint desenvolvido pela Microsoft. Essa extensão pode ser instalada com um clique no botão correspondente, "Install". Fechamos a aba após a conclusão da instalação.

Retornando ao script.js, abrimos o explorador também. Note que, após um curto intervalo, a variável inexistente já apresenta sublinhado vermelho no VS Code. Isso ocorre porque a extensão está integrada ao ESLint instalado exclusivamente neste projeto.

Se desejarmos que a extensão identifique erros em outros projetos, será necessário instalar o ESLint nesses projetos também. Além disso, ela considera o arquivo .eslintrc.json, que especifica os erros a serem destacados pelo ESLint.

Isso simplifica a detecção de erros, eliminando a necessidade constante de inserir comandos no terminal. Agora podemos começar a identificar e corrigir os erros que não fazem sentido para nós. Vale ressaltar que o erro relacionado à impressão de uma variável inexistente é apenas um entre vários tipos de erros que o ESLint consegue identificar.

Essa extensão é bastante útil no nosso desenvolvimento diário. A opção de executar o ESLint na linha de comando ainda pode ser valiosa se quisermos verificar erros em todo o projeto de uma vez, em vez de abrir cada arquivo individualmente. Agora, salvamos este arquivo; estamos prontos para explorar o próximo recurso que usaremos com o Node.

### Aula 2 - Para saber mais: erros encontrados pelo ESLint

O ESLint é uma ferramenta muito útil para garantir a consistência e qualidade do código JavaScript, ajudando a prevenir diversos erros comuns. Aqui estão alguns exemplos de erros que o ESLint pode ajudar a identificar e corrigir:

Variáveis não utilizadas:  
Evita declarar variáveis que não são utilizadas no código, o que pode indicar um problema de lógica ou código não otimizado.

```JavaScript
// Variável não utilizada
let x = 10;
```

Declaração de variáveis sem o uso de const, let ou var:
Garante que todas as variáveis sejam devidamente declaradas com const, let ou var para evitar vazamentos de variáveis globais.

```JavaScript
// Variável não declarada
x = 10;
console.log(x);
```

Erro de escopo:  
Previne problemas relacionados a escopo de variáveis, identificando quando variáveis estão sendo acessadas fora do escopo em que foram declaradas.

```JavaScript
function exemplo() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Erro: x não está definido neste escopo
}
```

Uso de == em vez de ===:  
Ajuda a prevenir comparações com coerção de tipo, incentivando o uso de === para comparações estritas de igualdade.

```JavaScript
// Uso de == em vez de ===
if (x == '10') {
  // Esta condição pode ser verdadeira mesmo que x não seja do tipo string
}
```

Esses são apenas alguns exemplos de erros que o ESLint pode ajudar a prevenir no código JavaScript. O ESLint pode capturar ou não algumas dessas regras, dependendo de como está definido o seu arquivo de configuração.

Você pode conferir a lista completa de regras nessa [página da documentação](https://eslint.org/docs/latest/rules/).

### Aula 2 - Instalando o Prettier - Vídeo 4

Transcrição  
Já configuramos o ESLint e sua extensão em nosso projeto. Se abrir o script.js, já realizamos testes para que o ESLint identifique erros de código. No entanto, não aplicamos o ESLint para a formatação e padronização do código, uma prática comum no mercado.

Essa abordagem visa melhorar a legibilidade do código para outros membros da equipe. Por exemplo, se alguém escrever uma função e colocar todo o código em uma única linha, mesmo que funcione, a falta de padronização, como a quantidade máxima de caracteres por linha ou comandos, pode prejudicar a compreensão para outras pessoas desenvolvedoras, o que é crucial.

Imagine que alguém está aprendendo ainda JavaScript e entra no time e acaba vendo coisas como essa no código que ela pode até pensar: "Hum, será que realmente é só dessa maneira que fazemos em JavaScript?" E para quem está aprendendo, isso é muito importante. Então, os formatadores, que vamos utilizar um deles, vêm com o intuito de padronizar o código. Também podemos chamar de padronizar o estilo de código.

Como mencionado, é possível usar o ESLint para fazer isso, porém, a própria equipe do ESLint recomenda que deixemos o ESLint apenas para buscar erros e utilizemos outra ferramenta para formatar e padronizar o código. E é exatamente essa recomendação que vamos seguir. Inclusive, vamos pegar uma das recomendações deles, que é usar uma ferramenta chamada Prettier.

Instalando o Prettier  
Vamos reverter as alterações no código do script.js usando o comando "Ctrl + Z". Em seguida, abrimos o navegador e mantemos aberta a documentação do prettier.io. Podemos consultar as instruções para instalar o Prettier em nossa ferramenta e realizar a formatação necessária.

Ao clicarmos no botão "Install Prettier" centralizado na tela, aguardamos o carregamento da página de instalação e recebemos uma série de comandos. O primeiro deles está associado ao npm. Após copiar o comando, abrimos o VSCode, acessamos o terminal integrado e colamos o seguinte comando para instalar o pacote:

> npm install --save-dev --save-exact prettier

O que significa --save-dev? Isso é o que chamamos de opção, que podemos passar para o npm. No caso do --save-dev, estamos indicando para o npm que queremos instalar esse pacote como uma dependência de desenvolvimento, que está documentado o ESLint no package.json. Se analisarmos esse arquivo, para relembrar um pouco, verificamos que o ESLint está dentro de devDependencies.

Quando solicitamos ao npm para instalar o Prettier com a opção --save-dev, estamos instruindo-o a incluir o Prettier na lista de devDependencies. Isso implica que o Prettier não influenciará nosso projeto quando for implantado para produção. Sua utilidade está restrita aos ambientes de desenvolvimento.

Quanto à alternativa --save-exact, ela indica ao npm que desejamos manter uma versão específica do Prettier. Ao adotar essa opção, garantimos que qualquer pessoa que baixe nosso projeto utilizará exatamente a mesma versão que estamos utilizando. Detalhes mais aprofundados sobre essa abordagem serão abordados em um vídeo futuro.

Atualmente, adicionaremos ao comando do Prettier a seguinte versão: @3.0.3. Essa é a versão que planejamos utilizar em nosso projeto, garantindo consistência em sua implementação. Após inserir o comando, iniciamos a instalação para manter sincronia.

> npm install --save-dev --save-exact prettier@3.0.3

A instalação do Prettier foi extremamente rápida, consumindo apenas um segundo do processo. Verificamos prontamente sua presença no package.json. Para confirmar o sucesso do download, você pode examinar a pasta node_modules ou digitar npx prettier -v no terminal, usando o npx para visualizar a versão do Prettier no projeto local.

> npx prettier -v

Ao realizar esse procedimento, obtive a confirmação no terminal da versão 3.0.3.

### Aula 2 - Usando o Prettier - Vídeo 5

Transcrição  
Agora, como podemos realmente aplicar o Prettier no nosso projeto, especialmente em um arquivo JavaScript? Podemos optar pela linha de comando, mas há uma abordagem mais conveniente recomendada pela equipe do Prettier: usar a extensão do Prettier no VS Code.

Instalando a extensão do Prettier no VS Code  
Para realizar isso, acessamos a aba de extensões, procuramos por Prettier e selecionamos a primeira opção disponível, fornecida pela empresa Prettier.io. Após clicar no botão de instalação ("Install"), aguardamos a conclusão do processo.

Em seguida, fechamos a parte do terminal e também a barra lateral para obter uma visualização mais clara da página da extensão, que fornece informações úteis sobre como aproveitar o Prettier de maneira eficaz.

Vamos descer um pouco nesta parte e explorar as configurações do "Default Formatter". Nesta seção, encontramos algumas opções que podem ser ajustadas nas configurações do VS Code. Para começar, abrimos as configurações do VS Code, podendo fazer isso pressionando "Ctrl + Shift + P" no teclado para acessar a paleta de comandos do VS Code, que já estará inicializada com um sinal de maior que (>).

Em seguida, digitamos "Settings" (configurações em inglês) e selecionamos a opção "Open User Settings (JSON)". É crucial escolher o JSON. Abrirá um arquivo chamado settings.json, específico do seu VSCode, não vinculado a este projeto em particular. Suas configurações podem variar das minhas, e isso é normal, portanto, não se preocupe se houver diferenças.

Agora, o que faremos? Voltaremos à página da extensão, copiaremos uma das configurações. Qual configuração? editor.defaultFormatter com o valor esbenp.prettier-vscode. Após copiar essa configuração, iremos para o arquivo settings.json.

```JavaScript
"editor.defaultFormatter": "esbenp.prettier-vscode",
```

Na última linha, que, no nosso caso, é window.zoomLevel, adicionaremos uma vírgula, pressionaremos "Enter" e em seguida "Ctrl + V". Assim, acrescentaremos uma configuração para definir o formatador padrão do nosso VS Code, aprimorando significativamente o desenvolvimento em conjunto com o Prettier.

settings.json

```JavaScript
// código omitido

"editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

E outro detalhe, é possível que você já tenha formatadores já configurados para determinadas linguagens. Então, se você já tivesse, por exemplo, esse editor.defaultFormatter em alguma linguagem, no meu caso, eu já estou com ela configurada para a linguagem HTML, então, eu recomendo que você apague.

Farei isso também. Vou apagar esse meu do HTML no arquivo settings, e deixo apenas este editor.defaultFormatter, que vai servir para todas as linguagens, porque o Prettier serve não apenas para o JavaScript, ele serve para HTML, CSS e outras linguagens também.

Após isso, salvamos esse arquivo e voltamos ao script.js, por exemplo, onde já podemos tentar formatar esse documento de acordo com as configurações padrões do Prettier. Para fazer isso, teclamos com o botão direito e selecionarmos a opção que é "format document", que é "Shift + Alt + F".

Podemos usar o comando "Shift + Alt + F" para aplicar formatação ao código. Ao fazer isso, algumas indentações são corrigidas e até mesmo algumas aspas são ajustadas. Podemos verificar essas alterações na seção de Git do VS Code (Ctrl + Shift + G).

Mas antes disso, é necessário salvar o arquivo, então salvamos o script.js. Após salvar, vamos para as modificações do script, e ao fechar o painel lateral, conseguimos examinar as mudanças realizadas.

O processo ajusta espaços e substitui algumas aspas, contribuindo para padronizar o código. Essa uniformidade na estilização facilita o aprendizado de uma nova linguagem, proporcionando uma experiência mais consistente para todos.

Para concluir este vídeo, compartilharemos outra configuração que podemos adicionar ao settings.json, uma prática recomendada. Consiste em adicionar a propriedade editor.formatOnSave, sugestão do autocompletamento do VS Code, com o valor true.

settings.json

```JavaScript
// código omitido

"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
}
```

O que isso implica? Após salvarmos o arquivo e abrirmos o script.js, vamos demonstrar o efeito. Ao pressionarmos "Ctrl + Z" para desfazermos e deixarmos no formato original não formatado, em seguida, ao pressionarmos apenas "Ctrl + S", observe que o Prettier é aplicado automaticamente ao nosso arquivo.

Aquela configuração faz isso, ela formata o nosso arquivo automaticamente sempre que salvamos um arquivo, independente de qual seja. Isso é uma boa prática, porque estamos sempre deixando o arquivo formatado e não precisamos ficar lembrando de colocar aquele comando, "Alt + Shift + F", para formatar o documento.

Então, isso garante a formatação e a padronização para todo mundo da equipe. Com isso, estamos deixando o ESLint, apenas para a sua tarefa de encontrar erros e corrigi-los também. E o Prettier já para a formatação.

Lembra que mencionei que existem projetos que utilizam o ESLint também para estilizar o código, para formatá-lo também? Se você encontrar um projeto que usa o ESLint para fazer isso, e quer utilizar o Prettier, você tem que tomar cuidado, porque as regras dos dois podem acabar entrando em conflito.

Para lidar com esses conflitos, é possível acessar o arquivo .eslintrc.json e, nesse ponto, realizar a exclusão de todas as regras especificadas. Essa seção corresponde às rules, que, no nosso caso, está vazia, pois não estamos utilizando o ESLint para formatar o código. Portanto, em nosso projeto, isso não representa um problema, mas é importante ter em mente que as regras de cada usuário podem entrar em conflito. No entanto, para o nosso projeto, está tudo em ordem.

E agora que configuramos corretamente o nosso projeto com o ESLint e o Prettier, na próxima aula vamos aprender um pouco mais algumas funcionalidades do npm e do package.json.

Te espero lá!

### Aula 2 - Para saber mais: tirando dúvidas de um comando

Em pouco tempo, já utilizamos vários comando do NPM e é comum esquecermos o que um certo comando faz, ou confundir um com o outro.

Quando isso acontecer, você sempre pode procurar pelo comando na documentação do NPM, ou mesmo pesquisar no Google pelo nome do comando, e a página correspondente da documentação do NPM deve aparecer como um dos primeiros resultados.

No entanto, existe uma forma mais prática de tirar suas dúvidas em relação a um comando, usando o próprio terminal: basta digitar `<comando>` --help ou `<comando>` -h. Exemplos:

npm install --help
npx --help
npm init --

Por exemplo, ao executar npm install --help, o terminal responde assim:

Install a package

Usage:
npm install [`<package-spec>` ...]

Options:
`[-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
[-E|--save-exact] [-g|--global]
[--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
[--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
[--strict-peer-deps] [--prefer-dedupe] [--no-package-lock] [--package-lock-only]
[--foreground-scripts] [--ignore-scripts] [--no-audit] [--no-bin-links]
[--no-fund] [--dry-run] [--cpu <cpu>] [--os <os>]
[-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
[-ws|--workspaces] [--include-workspace-root] [--install-links]`

aliases: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall

> Run "npm help install" for more info

Primeiro, ele dá uma descrição rápida do que o comando faz: “Instala um pacote”. Ele também dá a sintaxe de uso e as opções que você pode adicionar ao comando.

Note que ele também informa os “aliases” do comando, que são os atalhos ou apelidos. No caso desse comando, em vez de usar npm install, você também pode escrever npm i, npm add, etc.

Por fim, o terminal também diz que você pode executar npm help install, para encontrar mais informações do comando.

O comando npm help `<comando>` irá abrir uma página no navegador com a documentação completa do comando, o que também pode ser mais prático do que buscar pela página manualmente, além de ser disponível offline.

Bons estudos!

### Aula 2 - Revisando conceitos

Nesta aula, aprendemos sobre o NPM, seus pacotes e alguns de seus comandos. Além disso, praticamos o seu uso com o ESLint e o prettier.

Marque as alternativas corretas a respeito dessas ferramentas:

Respostas:  
O NPM é o gerenciador de pacotes do Node. Com ele, podemos executar e instalar pacotes publicados no site do NPM.

> Podemos utilizar a linha de comando para gerenciar os pacotes.

2 Alternativa  
O ESLint é um pacote que encontra e previne erros no código JavaScript, garantindo sua qualidade.

> O ESLint consegue prevenir vários tipos de erros, como variáveis não declaradas ou não utilizadas, erros de escopo, entre outros.

### Aula 2 - Faça como eu fiz: instalando e utilizando pacotes

Chegou a hora de você colocar a mão na massa, caso ainda não tenha feito!

Após preparar o projeto VidFlow e a API de vídeos local, instale os pacotes eslint e prettier e configure-os no seu projeto.

Opinião do instrutor

Primeiro, você deve criar um arquivo package.json com o seguinte comando:

```JavaScript
npm init
# ou execute com a opção "-y" para pular todas as perguntas do terminal:
npm init -y
```

Em seguida, execute:

```JavaScript
npm init @eslint/config@0.4.6
```

> Especificamos a versão 0.4.6 do pacote para você utilizar a mesma versão que o instrutor e não haver nenhuma diferença de funcionalidades ao longo do curso, mas sinta-se livre para instalar versões mais recentes em seus projetos pessoais executando apenas npm init @eslint/config. Nesse caso, consulte a documentação da ferramenta para conferir quaisquer mudanças.

Isso irá tornar o terminal interativo e você responderá sobre as configurações do ESLint que você quer aplicar em seu projeto. Um arquivo .eslintrc.* será criado no projeto com o formato que você especificar (.js, .yaml ou .json). Recomendamos que você escolha o formato JSON por questões de compatibilidade com outras ferramentas.

Em seguida, instale a extensão ESLint para que ela forneça feedback visual dos erros nos arquivos.

Agora, instale o prettier no projeto com o comando abaixo:

```JavaScript
npm install --save-dev --save-exact prettier@3.0.3
```

Em seguida, instale a extensão Prettier - Code formatter. Para integrar o prettier ao seu VSCode, de forma que você não precise utilizar a linha de comando para formatar os arquivos, siga os seguintes passos:

- Pressione Ctrl + Shift + P > digite settings > selecione “Open User Settings (JSON)”;
- Adicione a propriedade "editor.defaultFormatter": "esbenp.prettier-vscode" no JSON;
- Para evitar conflitos, remova a propriedade "editor.defaultFormatter" de outros locais do JSON, como em "[html]" ou "[javascript]";
- Adicione a propriedade "editor.formatOnSave": true para formatar os arquivos automaticamente ao salvá-los.

Com isso, você instalou e configurou corretamente o ESLint e o Prettier no seu projeto!

### Aula 2 - O que aprendemos?

Nessa aula, você aprendeu a:

- Criar o arquivo package.json com o comando npm init:
- Esse arquivo documenta as informações do projeto, inclusive as dependências.
- Identificar o que é o NPM (Node Package Manager):
- É o gerenciador de pacotes do Node e vem instalado junto com ele;
- Um pacote é um projeto escrito em Node que foi publicado no site do NPM, o qual podemos acessar para conferir informações de qualquer pacote, como instruções de uso, versões, etc;
- Podemos utilizar a linha de comando do NPM para instalar e executar pacotes Node.
- Executar um pacote com npm init `<inicializador>`:
- Executamos o comando npm init @eslint/config@0.4.6, que executa o pacote @eslint/create-config na versão 0.4.6;
- A execução desse pacote torna o terminal interativo. Ao final das perguntas, esse pacote também pede para instalar o eslint no projeto.
- Executar um pacote com npx `<pacote>`:
- O npx executa um pacote que foi instalado no projeto.
- Instalar um pacote com npm install `<pacote>`:
- Instalamos o Prettier com npm install --save-dev --save-exact prettier@3.0.3.
- Identificar opções de instalação no comando npm install `<pacote>`:
- --save-dev ou -D: instala um pacote como dependência de desenvolvimento;
- --save-exact ou -E: documenta que o pacote deve ser instalado por outras pessoas exatamente na versão que nós utilizamos.

### Aula 2 -  - Vídeo 7
