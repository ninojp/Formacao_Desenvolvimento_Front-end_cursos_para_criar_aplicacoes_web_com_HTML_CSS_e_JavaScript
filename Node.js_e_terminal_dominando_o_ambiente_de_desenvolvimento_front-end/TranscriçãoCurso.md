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

## Aula 3 - Explorando script, pacotes locais e globais

### Aula 3 - Identificando os pacotes locais e globais - Vídeo 1

Transcrição  
Agora que sabemos um pouco melhor sobre o NPM e também sobre o package.json, que estão bem relacionados, talvez você tenha se perguntado o seguinte: como utilizamos o json-server no projeto, se ele não está especificado no package.json?

Identificando os pacotes locais e globais  
Até agora, aprendemos a utilizar algumas dependências e as listamos todas. Porém, a nossa API local está sendo servida também por um pacote do Node: o json-server.

Vamos abrir o terminal integrado do VS Code, o qual está sendo executado agora, e vamos interromper por um momento. Relembrando uma atividade que deixamos para você sobre a instalação do json-server. O comando usado foi o seguinte:

```JavaScript
npm install -g json-server@0.17.4
```

Com isso, você consegue utilizar o comando json-server --watch.

```JavaScript
json-server --watch
```

Perceba que conseguimos utilizar o json-server diretamente no terminal, sem colocar npm ou npx no início do comando. Isso é possível porque nós instalamos o json-server de forma global no terminal. É exatamente isso que significa a opção -g. Ela é o mesmo que escrever --global. É basicamente um atalho, como o -v de --version.

Qual a diferença entre um pacote local e um pacote global? A diferença é que, no global, não precisamos instalar localmente em um projeto. Conseguimos utilizar o json-server em qualquer projeto do nosso computador.

A vantagem é que, se tivermos muitos projetos no computador e vários deles utilizarem o json-server, não precisaremos baixar o json-server para cada um deles, o que pode economizar espaço. Por outro lado, existe uma desvantagem em ter um pacote global. O projeto não vai conseguir, por exemplo, especificar a versão mais adequada do json-server para aquele projeto.

É isso que estamos aprendendo até agora. O package.json lista exatamente as versões que devemos usar em um projeto, evitando problemas de compatibilidade e até quando outras pessoas forem baixar nosso projeto.

No nosso caso, seria inclusive uma boa prática instalar o json-server localmente no computador. Portanto, vamos modificar o comando removendo o -g. Depois, vamos alterar a versão para 0.16.0 para você observar a diferença entre o json-server que vai ser instalado agora e o global instalado anteriormente. Vamos colocar essa versão apenas para teste.

Além disso, vamos adicionar a opção --save-dev, que pode ser abreviada para -D. Vamos instalar o json-server como uma dependência de desenvolvimento, já que ele não é necessário em produção, em um site de verdade.

```JavaScript
npm install json-server@0.16.0 -D
```

Após executar o comando, esperamos o json-server ser instalado localmente. Com o json-server baixado no projeto, podemos usar "Ctrl + L" para limpar o terminal. Agora, sabemos que temos o json-server local e o global.

O que acontece se digitarmos no terminal, por exemplo, json-server -v para verificar a versão?

```JavaScript
json-server -v
```

A versão retornada foi 0.17.4, que não é a que instalamos localmente. Isso mostra que, quando usamos o json-server diretamente, sem npx no início do comando, pegamos a versão global. Se quisermos usar a versão local, precisamos colocar npx json-server -v.

```JavaScript
npx json-server -v
```

Quando usamos os comandos do NPM, ele dá prioridade para os pacotes listados no package.json. Então, qual será a versão retornada com o comando acima? 0.16.0, exatamente o que queríamos. Agora você aprendeu a diferença entre um pacote local e global, e as diferenças entre executar usando o npx, que dá prioridade para o local.

Sabendo disso, podemos remover o json-server global, porque não fará mais diferença para nós. Temos um local para trabalhar com ele. Para remover o global, executaremos o seguinte comando:

```JavaScript
npm uninstall -g json-server
```

É retornado que foram removidos 116 pacotes. Se tentarmos usar o json-server -v de novo, o termo não será reconhecido. Não temos mais ele global. Porém, se usarmos com npx, continuará funcionando e retornará 0.16.0.

Para finalizar o vídeo, instalamos a versão 0.16 só para mostrar a diferença entre versões. Mas, como trabalhamos com a versão 0.17.4 até agora, vamos atualizar no arquivo package.json a versão que queremos utilizar. Podemos fazer isso simplesmente modificando o número da versão para 0.17.4 e salvando o package.json.

package.json:

```JavaScript
"json-server": "^0.17.4"
```

Feito isso, voltamos para o terminal com o comando abaixo:

```JavaScript
npm install
```

Assim, atualizamos as dependências do projeto conforme as novas modificações do package.json. Para ter certeza que realmente atualizou a versão, usamos o comando npx json-server -v. Se retornar 0.17.4, deu certo.

```JavaScript
npx json-server -v
```

Com sucesso, removemos o json-server global e deixamos apenas o local na nossa máquina.

Como dissemos anteriormente, isso fornece vantagens, como usar o package.json para controlar exatamente a versão que queremos no nosso projeto, o que é bem importante. Além disso, se não precisarmos mais do projeto no computador, o json-server vai embora com ele.

Conclusão  
Agora que você sabe um pouco mais sobre a diferença de pacotes locais e globais, falta entender melhor como funciona a sintaxe de versão, o que são os números e até mesmo o circunflexo no código. É o que vamos aprender em seguida!

### Aula 3 - Entendendo a sintaxe de versionamento - Vídeo 2

Transcrição  
Nós já entendemos as diferenças entre pacotes locais e globais, utilizando o json-server como exemplo. Se quisermos executar o projeto novamente, teremos que ir ao terminal e usar o comando abaixo:

> npx json-server --watch backend/videos.json

Após executar, vamos conferir que continua funcionando corretamente. Se acessarmos o navegador, onde já rodamos o Live Server no VS Code, e atualizarmos a página, continua funcionando perfeitamente. Mas agora que sabemos disso, é hora de entender um pouco melhor como funciona a sintaxe de números separados por pontos.

Entendendo a sintaxe de versionamento  
Para explicar melhor, vamos acessar o site do npm. Esse é o site onde os pacotes ficam hospedados, e podemos buscar por informações sobre eles.

Para tomar como exemplo, vamos pesquisar pelo pacote ESLint. Digitando exatamente o nome do pacote, aparecerá a sugestão da versão mais recente, que no momento da gravação é a 8.52.0. Clicaremos no link dessa versão, lembrando que a sua mais recente pode ser uma versão maior.

Na página do ESLint, podemos conferir algumas instruções, mas o que queremos mostrar é a aba de versões, que possui 341 versões por enquanto. Ao clicar nela, visualizamos todo um histórico de versões do ESLint que foram lançadas.

Essa é uma boa oportunidade para explicar o que são os números. Vamos descer até a versão 7.0.0, que é um pouco mais fácil de explicar. O que significam cada um desses números?

O número mais à direita, na versão 7.0.0, por exemplo, representa uma atualização de correção. Isso significa que, quando esse número da direita muda, a equipe provavelmente lançou uma nova atualização da ferramenta corrigindo algum bug, chamada em inglês de patch version.

O número do meio é a versão menor. Geralmente, ela traz novos recursos quando atualizada, além de poder corrigir bugs, mas sempre trazendo novidades.

O número da esquerda é a versão maior do projeto. Quando esse número muda, a equipe do pacote pode descontinuar recursos antigos ou modificar recursos existentes. Então, uma mudança nesse número maior requer atenção, pois talvez seja necessário consultar um guia de migração, que normalmente é disponibilizado pela equipe, indicando mudanças necessárias na sintaxe ou em outros códigos, ou algum comando pode não existir mais na nova versão.

Observando como funcionam essas atualizações, quando o número do meio muda, ele sempre reseta o número da direita para 0. Por exemplo, observe a versão 7.3.1. Quando foi para 7.4.0, a versão de correção que estava 1 volta a ser 0. É uma regra que devemos seguir.

Da mesma forma, ao mudar da versão 7 para 8, todos os números à direita voltam a ser 0. Podemos conferir isso no histórico. Da versão 7.32.0 para a versão 8.0.0, resetou para 0. Isso é o que chamamos de versionamento semântico, uma convenção muito utilizada no mundo do desenvolvimento web, seja no front-end ou no back-end.

### Aula 3 - Versonando com NPM - Vídeo 3

Transcrição  
Agora que você sabe como funciona o versionamento semântico no Node, vamos usar o VS Code.

Versionando com NPM  
Falta explicar mais uma coisa que o NPM utiliza no arquivo package.json. Em eslint, note que há um circunflexo logo antes do número da versão 8.52.0. Isso quer dizer que o nosso projeto é compatível com qualquer versão maior ou igual a 8.52.0, mas que não aumente o número da versão maior. Ou seja, que seja menor do que 9.

Basicamente, se forem lançadas novas versões, 8.53.0, 8.54.0, e assim por diante, documentamos no package.json que o nosso projeto também será compatível com essas outras versões.

package.json:

> "eslint": "^8.52.0"

Para demonstrar isso na prática, podemos simular a situação de um amigo vindo baixar o nosso projeto do GitHub, por exemplo. Vamos tomar como exemplo uma versão de número diferente. Em vez de usar 8.52.0, vamos usar 7.10.0, mantendo o circunflexo. Feito isso, vamos salvar o arquivo.

> "eslint": "^7.10.0"

Se alguém for baixar o nosso projeto, essa estrutura toda, a estrutura não virá com a pasta "node_modules", pois pedimos para o Git ignorá-la com o arquivo .gitignore. Então, para simular esse amigo baixando o projeto, vamos apagar a pasta.

Sem a pasta "node_modules", a pessoa quer utilizar o nosso projeto e agora terá que usar o NPM, isto é, o Node do computador dela, para instalar essas dependências de desenvolvimento. Para isso, a pessoa deverá abrir o terminal integrado e usar o comando npm install.

> npm install

Após executar o comando, podemos conferir quais são as versões que realmente foram baixadas de cada um desses pacotes. Vamos conferir, no caso, o do ESLint. Para isso, executamos o comando abaixo:

> npx eslint -v

A versão retornada foi v7.32.0. É uma versão diferente da 7.10.0, mas devido ao circunflexo. Por mais que isso não seja um problema na maioria dos casos, isso pode vir a ser um problema, porque o número do meio, a versão menor, adiciona novos recursos e talvez corrija alguns bugs. Mas, ainda assim, podem haver incompatibilidades se houver diferenças de projeto.

Se o projeto no seu computador usa a versão 7.10.0, talvez ele funcione de forma diferente da versão 7.32.0 no computador do seu amigo. Por esse motivo, é uma boa prática, na verdade, não utilizar o circunflexo no package.json. Se removermos ele, tanto do eslint quanto do json-server, documentamos que queremos que todos utilizem exatamente essas versões, eliminando qualquer possibilidade de erro quando o projeto for rodado em outros computadores.

package.json:

> "eslint": "7.10.0",
> "json-server": "0.17.4"

Feito isso, vamos retornar ao terminal e executar o comando npm install novamente.

> npm install

Em seguida, podemos limpar o terminal e executar npx eslint -v mais uma vez.

> npx eslint -v

Agora, como retorno, temos a versão v7.10.0. Dessa forma, com a sintaxe sem circunflexo, pedimos para fixar exatamente a versão 7.10.0 nos computadores de todos que forem utilizar esse projeto.

Para evitar qualquer problema no nosso projeto, vamos mudar o número de 7.10.0 de volta para 8.52.0, porque é a versão que utilizamos até agora.

> "eslint": "8.52.0"

Após salvar o arquivo, executamos npm install novamente. Ao terminar de executar o comando, apenas para garantir, podemos executar npx eslint -v e verificar se a versão do projeto realmente é 8.52.0. Assim, garantimos a compatibilidade do nosso projeto com toda a equipe!

### Aula 3 - Para saber mais: conteúdos sobre o SemVer

No último vídeo, conferimos sobre o Versionamento Semântico (em inglês: Semantic Versioning ou SemVer). Você pode ler mais sobre esse tema nesses links:

Artigo: [Versionamento Semântico (SemVer)](https://www.alura.com.br/artigos/versionamento-semantico-breve-introducao): uma breve introdução
Documentação: [About semantic versioning](https://docs.npmjs.com/about-semantic-versioning)

### Aula 3 - Facilitando comandos com scripts - Vídeo 4

Transcrição  
Já entendemos melhor como o NPM trabalha com as versões dos pacotes que utilizamos, e talvez você tenha notado um problema: sempre que vamos rodar nossa aplicação com a API, precisamos ir ao terminal e digitar npx json-server --watch backend/videos.json. É um comando um pouco grande; ele funciona, mas pode ser um pouco cansativo ter que digitá-lo toda vez que queremos executar a API local.

Além disso, podemos não lembrar de uma parte desse comando e precisar consultar na documentação. Essa é uma situação comum quando trabalhamos com pacotes de linha de comando. É comum não lembrarmos de uma parte do comando ou mesmo digitar algo errado.

Pensando nisso, o NPM traz para nós um recurso interessante que ajuda a não precisar lembrar ou digitar esses comandos longos o tempo inteiro: os scripts.

Facilitando comandos com scripts  
Para usar esse recurso, vamos interromper a execução do servidor no terminal e teclar "Seta para cima" para copiar o último comando. Queremos copiar ele quase todo. Para isso, vamos segurar "Ctrl + Shift" e teclar "Seta para a esquerda" para selecionar até json-server. Feito isso, vamos usar o atalho "Ctrl + X" para recortar json-server --watch backend/videos.json.

. json-server --watch backend/videos.json

Não vamos usar mais o npx ao início do comando, então podemos ignorá-lo. Agora vamos ao arquivo package.json. Na parte de scripts, vamos criar um script novo, que será o seguinte: abrimos aspas duplas, confirme exigido pela sintaxe do JSON, e adicionamos o nome que quisermos, nesse caso, api-local. Depois das aspas, colocamos dois pontos e abrimos de novo aspas duplas. Vamos usar "Ctrl + V" para colar json-server --watch backend/videos.json.

package.json:

> "api-local": "json-server --watch backend/videos.json"

Após salvar o arquivo, queremos pedir para o NPM executar esse comando para nós, em vez de digitar npx e o comando inteiro. Então, de volta ao terminal, para executar o script api-local, vamos escrever um novo comando:

> npm run api-local

Vamos verificar o que aparece após executar. Logo abaixo do comando npm run api-local, temos uma parte dizendo justamente o conteúdo do script, que é json-server --watch backend/videos.json. Agora vamos conferir se funciona? De volta ao navegador, ao atualizar a página do VidFlow, parece estar funcionando perfeitamente.

Essa é uma prática muito interessante que pode ajudar na nossa produtividade. Note que, analisando o arquivo package.json, não precisamos colocar npx, por exemplo, no início do script api-local, porque o NPM já entende que queremos executar esse comando. Então, não é necessário colocar o npx. Senão, ele precisaria ficar no início de todo script.

Podemos ir além e criar um script para o ESLint. Após api-local, criaremos um script chamado checar-codigo, cujo conteúdo será eslint ., para fazer uma verificação em todos os arquivos JavaScript do projeto.

package.json:

> "checar-codigo": "eslint ."

Uma vez salvo o arquivo, podemos abrir um novo terminal clicando em + e escrever de novo npm run. Porém, agora será o script checar-codigo.

> npm run checar-codigo

Após teclar "Enter", verificamos que o comando eslint . foi executado. Não tivemos nenhum retorno, porque não temos nenhum problema com os arquivos JavaScript. Isso é bem legal. Percebemos que podemos até tornar os comandos com um nome semântico, que fica mais evidente para nós e facilita o entendimento do que os comandos fazem.

Para finalizar o script checar-codigo, na verdade, quando temos um comando em script que se refere ao ESLint, é muito comum encontrar a convenção de chamá-lo de lint. Então vamos fazer essa alteração e salvar o arquivo.

> "lint": "eslint ."

Nesse caso, poderíamos rodar o comando npm run lint e funcionaria da mesma forma.

Conclusão  
Esse é um recurso bem interessante disponibilizado pelo NPM para ajudar na nossa produtividade. Na próxima aula, vamos conhecer um novo pacote que vai nos ajudar a melhorar ainda mais o projeto. Te esperamos lá!

### Aula 3 - Instalando globalmente

Você está trabalhando em vários projetos pessoais diferentes no seu computador e todos eles precisam do JSON Server.

Para não baixar o JSON Server em cada um dos projetos e, assim, economizar espaço no seu computador, você decide instalar o JSON Server de forma global no seu computador.

Para isso, o que você deve fazer?

Resposta:  
Abrir o terminal em qualquer local do computador e executar npm install -g json-server.

> A opção -g (ou --global) indica para o NPM que queremos instalar o pacote globalmente. Além disso, ao instalar globalmente, não faz diferença em qual pasta vamos executar o comando.

### Aula 3 - Faça como eu fiz: aplicando melhorias!

Chegou a hora de você colocar a mão na massa, caso ainda não tenha feito!

Segue a listinha de tarefas:

- Desinstale o json-server globalmente e instale-o localmente no projeto do VidFlow. Isso permitirá um gerenciamento de pacotes mais controlado;
- Atualize o package.json para que outras pessoas que forem baixar seu projeto utilizem exatamente as mesmas versões de dependências que você utilizou;
- Crie scripts para facilitar a execução de comandos no terminal.

Opinião do instrutor

1. Desinstale o json-server global:

```JavaScript
    npm uninstall -g json-server
```

Em seguida, instale-o localmente na pasta do projeto:

```JavaScript
    npm install json-server@0.17.4
```

Especificamos a versão 0.17.4 para você utilizar a mesma versão que o instrutor e não haver nenhuma diferença de funcionalidades ao longo do curso, mas sinta-se livre para instalar versões mais recentes em seus projetos pessoais executando npm install json-server. Nesse caso, consulte a documentação da ferramenta para conferir quaisquer mudanças.

2. No package.json, remova os circunflexos dos números das versões.

A propriedade "devDependecies" ficará assim:

```JavaScript
    "devDependencies": {
      "eslint": "8.52.0",
      "json-server": "0.17.4",
      "prettier": "3.0.3"
    }
```

Você pode executar npm install para atualizar as versões dos pacotes do seu projeto de acordo com o package.json. Para conferi-las, execute npx <nome-do-pacote> -v.

3. Crie dois novos scripts na propriedade "scripts" do package.json:

```JavaScript
    "api-local": "json-server --watch backend/videos.json",
    "lint": "eslint ."
```

Agora você pode executar esses scripts com npm run api-local e npm run lint.

Com isso, você aplicou com sucesso as melhorias no seu projeto :)

### Aula 3 - O que aprendemos?

Nessa aula, você aprendeu a:

- Diferenciar pacotes locais e globais:
- Ao instalar e desinstalar pacotes, podemos utilizar a opção -g (ou --global) para indicar que queremos realizar a operação de forma global;
- Para executar um pacote local, é necessário escrever npx no início do comando. Para executar um pacote global, não é necessário.
- Versionar as dependências do seu projeto:
- Você aprendeu sobre o versionamento semântico e que os números se referem a Major Version, Minor Version e Patch Version (versões maiores, menores e de correção);
- O NPM utiliza alguns caracteres especiais para indicar faixas de versões compatíveis.
- O circunflexo (^) indica que queremos uma versão igual ou maior à especificada da dependência, mas sem aumentar o número da major version. Exemplo: ^1.5.0 é compatível com 1.5.0, 1.5.2 e 1.6.0, mas não é compatível com 2.0.0 ou maiores.
- Facilitar a execução de comandos com scripts:
- Você pode definir seus próprios scripts na seção "scripts" do package.json;
- Para executar um script, basta executar npm run `<nome-do-script>`.

## Aula 4 - Usando uma biblioteca externa

### Aula 4 - Usando CDN do Axios - Vídeo 1

Transcrição  
Nós já praticamos um pouco o uso do Node e do NPM com alguns pacotes, como S-Linux, Printer e até JSON Server. Agora, vamos praticar com mais um pacote chamado Axios.

Imagine que estamos trabalhando com uma equipe no VidFlow que decidiu utilizar esse pacote. Se formos ao projeto, no arquivo script.js estamos utilizando, na linha 5, o método fetch() para realizar uma requisição HTTP para a API local:

```JavaScript
const busca = await fetch("http://localhost:3000/videos");
```

O pacote Axios também é uma forma de realizar requisições HTTP, por isso a equipe decidiu trocar de Fetch API para Axios, muito utilizado em empresas.

Para explorar esse pacote, vamos acessar o site npmjs.com, no navegador. No campo de busca, pesquisaremos por "axios" e clicaremos em sua correspondência, que deve aparecer assim:

axios

Promise based HTTP client for the browser and node.js 1.6.0

Ao clicá-la, note que há um pacote Axios com a versão 1.6.0. Neste momento, é possível que você encontre uma versão diferente e é por isso que, ao usar o NPM para instalar o Axios, recomendamos que você use a mesma versão da pessoa instrutora.

Descendo um pouco a página, encontraremos a seção "Table of Contents" (Tabela de conteúdos). Nela, clicaremos na opção "Installing".

Em "Installing", temos acesso a algumas formas de instalar este pacote. Porém, ao invés de usar o primeiro comando, $ npm install axios, veremos uma forma mais fácil de utilizar o Axios, já que o NPM tem algumas particularidades.

Mais abaixo, na seção "CDN", temos o seguinte script:

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
```

Vamos copiá-lo, voltar ao VS Code e abrir o arquivo index.html.

Podemos colocar esse script no `<head>` da aplicação, pois realmente não precisamos esperar o DOM carregar. Então, após as outras tags, damos um espaço, colamos o script e salvamos o arquivo:

```JavaScript
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        href="https://fonts.googleapis.com/css?family=Roboto:wght@400;500;700&display=swap" 
        rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/estilos.css" />
    <link rel="stylesheet" href="./css/flexbox.css" />
    <title>VidFlow</title>
    <link rel="shortcut icon" href="./img/Favicon.png" type="image/x-icon" /> Follow link (ctrl + click)

    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script> 
</head>
```

O CDN vai disponibilizar uma variável global chamada Axios. Para vê-la disponibilizada, podemos ir ao script.js e, no início do arquivo, escrever console.log(axios);:

```JavaScript
console.log(axios);
```

Em seguida, salvamos o arquivo, voltamos ao navegador, abrimos o VidFlow e atualizamos a página. No console, vemos que o Axios está disponível.

Mas como usamos o Axios no nosso projeto ao invés da Fetch API? No script.js, em vez de await fetch(), usamos await axios.get(). Já em const videos, ao invés de await busca.json(), colocaremos apenas busca.data, que é a propriedade do objeto retornado pelo axios.get, o que pode ser conferido na documentação. Inclusive, podemos um console.log(busca) para visualizar melhor esse objeto.

```JavaScript
const busca = await axios.get("http://localhost:3000/videos");

console.log(busca);

const videos = busca.data;
```

Vamos salvar o arquivo e voltar ao navegador. No DevTools, já temos esse objeto com várias propriedades, como config, data e headers. A propriedade data retorna exatamente a lista com as informações dos vídeos, uma lista com 13 itens. Continua funcionando perfeitamente.

De volta ao arquivo script.js, note que está sendo mostrado um erro em console.log(axios). Isso ocorre porque estamos utilizando CDN e não temos como informar ao VS Code de onde está vindo. Por isso, ao invés de usar CDN, podemos utilizar o NPM. Assim conseguimos informar no nosso código de onde estamos tirando as variáveis e fazendo as importações.

O Axios faz o mesmo que a Fetch API, mas isso vai depender do contexto de cada empresa e do que ela preferir utilizar. Em projetos maiores, por exemplo, o Axios consegue oferecer padrões de projetos que ajudam a organizar melhor as requisições. Mas em um projeto pequeno talvez não vejamos muita diferença, então dependendo da empresa e do projeto em que você trabalha, poderá ver o Axios em ação.

### Aula 4 - Usando NPM para instalar o Axios - Vídeo 2

Transcrição  
Nós já utilizamos a CDN do Axios e o vimos funcionando corretamente no nosso projeto. Mas, com o script.js aberto no VS Code vemos que é indicado um erro na variável, porque não se sabe de onde ela está vindo. Isso é um comportamento que acontece quando utilizamos a CDN de um pacote.

Nós também vimos que o NPM é ótimo para gerenciar dependências, inclusive informar as versões exatas que vamos utilizar. Então, agora usaremos o NPM para tentar utilizar o Axios.

No arquivo index.html, vamos remover a CDN, ou seja, o script que havíamos colado no `<head>`:

```JavaScript
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        href="https://fonts.googleapis.com/css?family=Roboto:wght@400;500;700&display=swap" 
        rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/estilos.css" />
    <link rel="stylesheet" href="./css/flexbox.css" />
    <title>VidFlow</title>
    <link rel="shortcut icon" href="./img/Favicon.png" type="image/x-icon" /> Follow link (ctrl + click)
</head>
```

Em seguida, salvamos o arquivo e voltamos para script.js. Nele, vamos retirar console.log(axios) e console.log(busca), mas manteremos axios.get(). Fazendo isso, deixará de funcionar. Se salvarmos o arquivo e voltarmos ao navegador VidFlow, teremos um informativo dizendo que Axios não está definido. Então, vamos tentar definir essa variável ao instalar o Axios pelo NPM. Para isso, na página do Axios, vamos até a seção "Installing" e copiamos o comando $ npm install axios.

Agora, vamos abrir o terminal e criar um novo. Em seguida, colamos o comando copiado anteriormente. Para que você use a mesma versão do instrutor basta acrescentar @1.6.0. Além do mais, podemos colocar --save-exact ou -E para colocar essa versão 1.6.0 no package.json sem aquele caractere circunflexo (^), sobre o qual falamos na aula passada. Dessa forma, todos que utilizarem o seu pacote, usarão exatamente essa mesma versão utilizada no projeto.

```JavaScript
npm install axios@1.6.0 -E
```

Após teclar "Enter" basta esperar o Axios ser instalado localmente no nosso projeto.

Finalizado o processo, fecharemos o terminal integrado e vamos conferir se ele foi documentado no package.json.

Note que ele foi adicionado na parte de dependencies e não na parte de devDependencies. Isso porque nós precisamos do código do Axios realmente em produção. Ou seja, se nós quisermos fazer o deploy do nosso projeto para um site de verdade, para que qualquer pessoa possa acessar.

Mas como podemos identificar que uma dependência é de desenvolvimento ou de produção? Veja que o ESLint, o JsonServer e o Prettier fazem sentido apenas em ambiente de desenvolvimento e nem utilizamos eles no código do projeto. Por outro lado, no script.js, estamos, sim, utilizando uma variável disponibilizada pelo pacote. Ou pelo menos tentando utilizá-la, e sabemos que esse arquivo vai para o frontend. Então, é dessa forma que identificamos mais facilmente, digamos assim, uma dependência de produção: realmente precisamos do código desse pacote atuando nos arquivos JavaScript do frontend.

Agora que sabemos que precisamos utilizar essa variável do Axios diretamente no nosso código que vai para a produção, precisemos importá-la de alguma forma no arquivo script.js. E até poderíamos tentar fazer isso importando esse Axios lá da pasta node_modules, porque sabemos que ele foi baixado e está lá. Porém, existe um grande problema em tentar fazer isso, já que a pasta node_modules não vai para a produção. Ela nem mesmo vai para o GitHub, pois pedimos para ela ser ignorada pelo arquivo .gitignore.

Sendo assim, precisamos importar esse pacote de alguma outra forma. Ou pelo menos fazer algumas configurações de forma que funcione tanto de forma local quanto em produção. Isso porque se deixarmos o código do jeito que está agora e voltarmos para o VidFlow, continuaremos com aquele erro do Axios. Mesmo que tenhamos baixado no nosso projeto, não informamos ao NPM de onde pegaremos essa variável, por isso aparece um erro dizendo que ele não está definido.

Na sequência, veremos um pacote que ajuda a realizar configurações de como importar mais facilmente essa dependência de produção.

### Aula 4 - Para saber mais: aprofundando no Axios

Se você quiser conhecer mais sobre o Axios e mais casos de uso, confira o [artigo Requisições HTTP utilizando o AXIOS!](https://www.alura.com.br/artigos/requisicoes-http-utilizando-axios)

### Aula 4 - Criando um projeto Vite - Vídeo 3

Transcrição
Atualmente, estamos enfrentando um problema ao tentar usar o Axios utilizando o NPM. No VidFlow, estamos com um erro indicando que o Axios não está definido. Se formos para o código do script.js, verificamos que não estamos informando ao NPM de onde estamos buscando essa variável e já vimos o motivo de não podermos pegar diretamente do node_modules.

Vamos utilizar um pacote que vai facilitar bastante para lidarmos com essas dependências de produção, o Vite. Esse pacote lida com o problema de utilizar dependências, mas existem outros, como Parcel e Webpack. Utilizaremos o Vite como exemplo porque ele fornece uma configuração facilitada para trabalharmos em um primeiro momento. Além disso, ele também é utilizado em alguns ambientes como React, por exemplo. Vamos acessar sua documentação no navegador através do [link](https://vitejs.dev/).

Precisamos criar um novo projeto utilizando o Vite e depois fazer uma migração do VidFlow para esse novo projeto. No site do Vite, clicaremos no botão "Get Started". Em seguida, descemos um pouco a página até encontrar o tópico Scaffolding Your First Vite Project (Criando o seu primeiro projeto Vite), que mostra como fazer isso com alguns gerenciadores, inclusive o NPM. Vamos copiar o comando que corresponde a ele: $ npm create vite@latest.

Como vamos criar um novo projeto, abriremos o PowerShell do computador. Ao abrir esse terminal, colaremos o comando copiado. Criaremos realmente uma nova pasta, mas no lugar de @latest colocaremos @4.4.1, assim usaremos a mesma versão.

```JavaScript
npm create vite@4.4.1
```

Agora, basta teclar "Enter" para executar o comando. Ele fará praticamente o mesmo que o npm init, então executará um pacote da web que vai tornar o terminal interativo e instalará um pacote do Vite.

Como retorno, obtemos uma primeira pergunta do terminal que é o nome do projeto. Optaremos por nodejs-vidflow-vite. Ao teclar "Enter", recebemos a próxima pergunta, que é sobre o framework que utilizaremos. Existem várias opções e é possível utilizar o Vite integrado com vários desses frameworks. Mas vamos selecionar a primeira opção, que é Vanilla, basicamente o JavaScript puro. Em seguida, entre TypeScript e JavaScript, selecionaremos JavaScript. Pronto! É uma configuração simples.

Agora vamos seguir as próximas instruções do terminal, que é copiar o primeiro comando cd nodejs-vidflow-vite. Lembrando que cd serve para entrar na pasta.

Antes de rodar os próximos comandos, digitaremos code . e teclamos "Enter" para abrir esse projeto no VS Code antes de instalar as dependências.

Note que o Vite já traz uma estrutura de pastas pronta para nós. É exatamente o que o pacote executou e instalou automaticamente. Entre as pastas, temos public e .gitignore, além de alguns arquivos HTML e JS que vêm apenas como exemplo. Aqui, vamos focar no package.json.

Ao abri-lo, temos a pasta de devDependencies, uma dependência de desenvolvimento que é o Vite na versão que pedimos para instalar.

Então, vamos seguir as instruções do terminal. Para isso, abriremos o terminal integrado no próprio projeto. Nele, executamos npm install para instalar essa dependência do Vite e aguardamos o carregamento.

Após finalizado, as dependências já foram instaladas. Podemos até conferir que temos uma pasta node_modules na raiz do projeto. Ao voltar para o outro terminal, ele nos informa que o próximo comando é npm run dev, que podemos executar no terminal integrado. Este comando, como já conferimos em um vídeo anterior, executa um script chamado dev. Se olharmos no package.json, conseguimos ver esse script na linha 7. Tudo o que ele vai fazer, na verdade, é executar um comando chamado vite. Então, seria o mesmo que escrever npx vite.

Vamos executá-lo para ver o que acontece.

```JavaScript
npm run dev
```

Após executar, ele disponibiliza um link: http://localhost:5173/. Vamos segurar a teclar "Ctrl" e clicar nesse link para abri-lo no navegador. Note que abriu uma página web dizendo "Hello Vite!", que se trata de um projeto Vite padrão.

Mas qual a diferença dele para o projeto que estávamos trabalhando até agora? A diferença é que ele está rodando diretamente através de um servidor Node.js. Ou seja, não precisamos configurar e/ou criar um servidor utilizando o JavaScript manualmente, pois ele já fez isso automaticamente, o que economiza tempo e poupa trabalho. Além disso, ele também fornece algumas capacidades que nos ajudarão a lidar melhor com dependências de produção, incluindo o Axios.

O próximo passo é pegar o nosso código antigo, do VidFlow, e migrar para esse novo projeto do Vite, para finalmente conseguirmos utilizar o Axios como uma dependência de produção.

### Aula 4 - Para saber mais: sobre a instalação do Vite

No vídeo anterior, executamos o seguinte comando para criar o projeto Vite:

```JavaScript
npm create vite@4.4.1
```

No entanto, depois de gerar o projeto, encontramos o seguinte no package.json:

```JavaScript
"devDependencies": {
  "vite": "^4.4.5"
}
```

Note a diferença entre os números 4.4.1 e 4.4.5. Será que houve algum erro na instalação para acontecer essa divergência de versões?

O que acontece é que, na verdade, esses números se referem a pacotes diferentes. Vamos entender melhor?

Entendendo a diferença  
Vamos retornar ao primeiro comando:

```JavaScript
npm create vite@4.4.1
```

Esse comando tornou o terminal interativo, fazendo perguntas sobre a configuração do projeto a ser criado. Isso é bastante semelhante a quando configuramos o ESLint no nosso projeto.

Na verdade, o npm create é um alias (apelido) do npm init, então o comando acima é o mesmo que executar npm init vite@4.4.1.

Esse comando, por sua vez, é o equivalente a executar o seguinte:

```JavaScript
npx create-vite@4.4.1
```

Ou seja, pedimos para o NPM executar o pacote create-vite na versão 4.4.1. Você pode conferir esse pacote no site do NPM.

Então percebemos que o create-vite, de forma semelhante ao @eslint/create-config, também é um pacote que torna o terminal interativo e gera a estrutura do projeto de acordo com as respostas que fornecemos.

Ao terminar de interagir com o terminal, temos uma estrutura de projeto gerada para nós. No package.json gerado, podemos conferir o vite dependência de desenvolvimento:

```JavaScript
"vite": "^4.4.5",
```

Note que o create-vite e o vite são pacotes diferentes. Enquanto o create-vite é apenas o pacote que gera a estrutura inicial do projeto, o vite é o Vite em si, que disponibiliza o servidor Node.js.

Sabendo dessas diferenças, entendemos melhor as ferramentas com as quais estamos trabalhando, assim evitando confusões e resultados inesperados.

### Aula 4 - Migrando o Vidflow para o Vite - Vídeo 4

Transcrição  
Criamos com sucesso o nosso projeto Vite, utilizando o NPM. Agora, nosso próximo passo é justamente migrar o nosso antigo projeto, o próprio Vidflow, para esse novo servidor do Vite.

Para isso, vamos abri-los em duas abas do navegador: uma no endereço localhost:5173, onde está o servidor do Vite e, outra no antigo VidFlow antigo, que está sendo disponibilizado pelo Live Server, ainda com aquele erro do Axios, que vamos tentar resolver após migrar o projeto.

Para fazer essa migração, vamos até o VS Code, especificamente no projeto novo do Vite, para excluir alguns arquivos e pastas que não precisamos mais. Começaremos selecionando a pasta public e, segurando tecla "Ctrl", selecionamos as pastas counter.js, index.html, javascript.svg, main.js e style.css. Feito isso, basta teclar "Delete" e confirmar a ação para apagá-las. Manteremos a pasta node_modules e os arquivos .gitignore, package.json e package-lock.json.

Agora, arrastaremos o VS Code para o lado direito da tela, de forma que tenhamos duas janelas, lado a lado. Na janela à esquerda, abriremos o VS Code com o projeto antigo, que estávamos trabalhando até pouco tempo. Nele, selecionamos a pasta backend e, segurando o "Ctrl" no teclado, selecionamos as pastas css, img, e os arquivos .eslintrc.json, index.html e script.js. Em seguida, teclamos "Ctrl + C", clicamos no explorador do VS Code da janela à direita e teclamos "Ctrl + V". Assim, traremos todos os arquivos que precisamos.

Não copiaremos o node_modules porque a melhor forma de interagir com ele no novo projeto é pegando as dependências antigas, inclusive por isso não selecionamos o package.json. Então, quando passarmos as dependências para o novo projeto, pediremos ao NPM que instale no novo node_modules. É o que faremos agora.

Vamos abrir o package.json do projeto antigo e do projeto novo. Na janela à esquerda, onde está o antigo, copiamos as dependências de desenvolvimento dentro de devDependencies, comoeslint, json e prettier:

```JavaScript
"eslint": "8.52.0",
"json-server": "0.17.4",
"prettier": "3.0.3"
```

No projeto novo, vamos em devDependencies, acrescentamos uma vírgula e um enter após vite e teclamos "Ctrl + V" para colar o que copiamos:

```JavaScript
"devDependencies": {
    "vite": "^4.4.5",
    "eslint": "8.52.0",
    "json-server": "0.17.4",
    "prettier": "3.0.3"
}
```

Está é a dependência de desenvolvimento. Agora, falta a dependência do Axios. No projeto antigo, copiaremos toda a parte de dependencies e, no novo projeto, acrescentamos uma vírgula e um enter após o fechamento das chaves de devDependencies e colamos:

```JavaScript
"devDependencies": {
    "vite": "^4.4.5",
    "eslint": "8.52.0",
    "json-server": "0.17.4",
    "prettier": "3.0.3"
},
"dependencies": {
    "axios": "1.6.0"
}
```

Feito isso, salvamos o package.json do novo projeto.

Agora, faltam apenas os scripts que criamos no projeto antigo. Então, vamos copiar api-local e lint, que estão nas chaves de scripts, no projeto antigo:

```JavaScript
"api-local": "json-server --watch backend/ videos.json",
"lint": "eslint ."
```

Em seguida, em colamos em scripts, novo projeto novo, após preview:

```JavaScript
"scripts":{
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "api-local": "json-server --watch backend/ videos.json",
    "lint": "eslint ."
}
```

Feito isso, salvamos o package.json do novo projeto e fechamos o projeto antigo.

Agora, vamos maximizar o VS Code com o novo projeto. Como modificamos o package.json, vamos ao terminal. Vale ressaltar que já temos um terminal rodando o servidor do Vite, então abriremos um novo. Nele, executamos o comando npm install para instalar essas novas dependências que listamos no package.json e aguardamos o carregamento.

Concluído o processo, as dependências já foram instaladas no novo projeto, então podemos até testar no front-end se o projeto foi pelo menos migrado com sucesso. No navegador, fecharemos a aba do Live Server, porque é do projeto antigo e não estamos mais utilizando, e atualizamos a aba com o endereço localhost:5173, que é do Vite. Ao fazer isso, vemos que o projeto já foi migrado com sucesso, pelo menos visualmente, mas ainda está com aquele mesmo erro, indicando que o Axios não está definido. Vamos resolvê-lo agora.

Para isso, voltamos ao VS Code, fechamos o terminal, abrimos o arquivo script.js e fechamos o explorador. Neste arquivo, a dependência do axios continua com o indicativo de erro. Vamos entender uma nova sintaxe.

No início do arquivo, escrevemos import axios. Conforme escrevemos, o VS Code nos mostra uma sugestão de importar esse axios de um pacote chamado Axios. Quando selecionamos essa sugestão, ele completa o comando, ficando import axios from "axios";. Essa sintaxe de import já é nativa do ECMAScript e funciona tanto no back-end quanto no front-end. Porém, essa sintaxe de colocar exatamente o nome de um pacote entre aspas é algo que funciona apenas em ambientes Node.

```JavaScript
import axios from "axios";
```

Se você tentasse fazer essa sintaxe em um projeto front-end puro, receberia uma reclamação dizendo que é necessário utilizar um caminho relativo ou absoluto, o que não é o caso, porque essa sintaxe funciona dentro do servidor Node.js, que é o servidor do Vite. Assim, conseguimos utilizar todos os métodos que o Axios disponibiliza. Inclusive, o próprio Vite irá converter essa sintaxe para uma que seja compatível no front-end e que os navegadores consigam entender.

Vamos salvar esse arquivo e ver se funciona. Ao voltar para o navegador e atualizá-lo, encontramos um erro de network. Isso porque Axios agora está definido, mas falta rodarmos a API do JSON Server nesse novo projeto, já que interrompemos a do projeto antigo. Para isso, abrimos o terminal na aba já existente e executamos o comando npm run api-local, que é o nome do script que já tínhamos criado. Feito isso, a API é disponibilizada.

```JavaScript
npm run api-local
```

Agora, voltamos ao navegador e atualizamos novamente. Note que os vídeos finalmente foram carregados! Podemos até teclar F12 para abrir o DevTools do Chrome e verificar que não há nenhum erro acontecendo.

Conseguimos migrar o nosso projeto do VidFlow para o servidor do Vite com sucesso e utilizar a dependência de produção do Axios!

### Aula 4 - Para saber mais: importando arquivos como módulos

Ao trabalhar em um projeto Vite, é possível que você se depare com o seguinte erro no console do navegador:

```JavaScript
Uncaught SyntaxError: Cannot use import statement outside a module
```

Esse erro não aconteceu com a gente porque, no index.html, a importação do script.js já estava sendo feita com o atributo type="module":

```JavaScript
<script src="script.js" type="module"></script>
```

Por padrão, o Vite trabalha com os [ECMAScript Modules (ESM)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), tanto em arquivos JavaScript do front-end quanto do Node.

Dessa forma, caso você se depare com esse erro no futuro, basta adicionar esse atributo na importação do arquivo JavaScript e ele será utilizado como um módulo.

### Aula 4 - Para saber mais: conteúdos sobre Vite

Além de o [Vite](https://vitejs.dev/guide/why.html) poder ser utilizado em projetos Front-end Vanilla (HTML, CSS e JS “puros”), atualmente, ele é muito utilizado com o React e o Vue.

Separamos os conteúdos abaixo para você explorar o uso do Vite com o React. Mesmo que você decida não trabalhar com React, ainda é possível conferir detalhes bem bacanas em relação ao Vite e outras ferramentas:

- Artigo: [Utilizando o Vite para criar uma aplicação React com TypeScript](https://www.alura.com.br/artigos/vite-criar-aplicacao-react-typescript);
Artigo: [A evolução do desenvolvimento React](https://www.alura.com.br/artigos/evolucao-desenvolvimento-react): porque outras ferramentas estão ganhando espaço sobre o create-react-app.

E não se preocupe se você ainda achar o conteúdo muito avançado, você sempre pode salvá-los para ler no futuro. :)

### Aula 4 - Migração de projeto

Você está em uma equipe que trabalha em um projeto Front-end Vanilla, chamado Bytebank, e o time decide migrar esse projeto para o Vite.

Para iniciar a tarefa, você já criou um novo projeto Vite com o comando npm create vite@latest, respondeu as perguntas do terminal e executou npm install dentro do projeto para instalar as dependências. Assim, a pasta node_modules do Vite foi criada.

Agora você deve migrar o Bytebank para o novo projeto Vite. Quais ações você deve realizar?

Respostas:

1. Copiar as dependências do Bytebank para o package.json do projeto Vite e executar npm install novamente.

> Essa é a forma correta de levar as dependências para o novo projeto. Em vez de manipular a pasta node_modules manualmente, você deve utilizar os comandos do NPM para criar ou atualizar essa pasta.

2. Substituir o arquivo index.html do projeto Vite pelo arquivo HTML principal do Bytebank, que também deve se chamar index.html.

> O projeto Vite precisa de um arquivo index.html na raiz do projeto para funcionar. Além disso, você também deve remover os arquivos CSS e JS que vêm por padrão e migrar os arquivos CSS e JS do Bytebank para o novo projeto.

### Aula 4 - Faça como eu fiz: migrando o projeto e usando o Axios

Chegou a hora de você colocar a mão na massa, caso ainda não tenha feito!

Realize a migração do Vidflow para um novo projeto Vite;
Utilize o Axios como uma dependência de produção, através do NPM.
Ver opinião do instrutor
Opinião do instrutor

Crie o projeto Vite:

```JavaScript
npm create vite@4.4.1
```

Responda as perguntas do terminal e siga as instruções para instalar as dependências.

Agora, vamos realizar a migração do Vidflow para o novo projeto:

- Apague os arquivos HTML, CSS e JS do novo projeto;
- Migre os arquivos HTML, CSS e JS do VidFlow para o projeto Vite;
- Copie as dependências do VidFlow para o package.json do novo projeto e execute npm install para instalá-las no node_modules;
- Copie os scripts do Vidflow para o package.json do projeto Vite.

Agora, falta utilizarmos o Axios:

- Execute npm install axios@1.6.0 -E no projeto Vite, se ele já não estiver especificado nas devDependecies. Se ele estiver, o npm install já irá instalá-lo;
- Agora você pode escrever import axios from "axios" no script.js;
- Utilize o seguinte código para obter os vídeos da API local utilizando o Axios:

```JavaScript
    const busca = await axios.get("http://localhost:3000/videos");
    
    const videos = busca.data;
```

Ou, para deixar o código mais sucinto, utilize o recurso de desestruturação do JS:

```JavaScript
    const { data: videos } = await axios.get("http://localhost:3000/videos");
```

Com isso, você migrou com sucesso o VidFlow para o Vite, permitindo utilizar o Axios junto com o NPM, como uma dependência de produção!

### Aula 4 - O que aprendemos?

Nessa aula, você aprendeu a:

- Utilizar a CDN do Axios:
- É a forma mais simples de utilizar seu código-fonte;
- Porém, não temos um controle de versionamento que o NPM nos fornece;
- Também não temos o IntelliSense (auto-completamento) do VSCode para o Axios.
- Migrar um projeto para o Vite:
- Criamos um projeto Vite com npm create vite@4.4.1;
- Migramos os arquivos, dependências e scripts necessários;
- Utilizar o Axios junto com o NPM, como uma dependência de produção:
- Em um projeto Vite, conseguimos usar a sintaxe import axios from "axios" para utilizar o Axios diretamente em um arquivo JS;
- Colocar o nome de um pacote NPM diretamente dentro do caminho da importação é uma sintaxe que funciona apenas em um ambiente Node.js;
- Ou seja, essa sintaxe funcionou porque o Vite nos disponibiliza um servidor Node que, além de entender a sintaxe, transforma ela para um código que os navegadores consigam entender;
- Normalmente, o caminho de importação no front-end sempre inicia com um caminho relativo ou absoluto. Exemplos: "./caminho", "../caminho", "/caminho".
- Diferenciar uma dependência de desenvolvimento de uma dependência de produção:
- Uma dependência de desenvolvimento vai atuar apenas em ambiente de desenvolvimento, como o ESLint, Prettier, JSON Server e o próprio Vite; elas não serão utilizadas no ambiente de produção, quando o nosso site estiver no ar em um endereço da web;
- Já uma dependência de produção precisa ter seu código-fonte importado mesmo quando nosos site for para produção, que é o caso do Axios. Isso porque utilizamos diretamente os métodos do Axios para realizar requisições HTTP nos arquivos JS que irão para produção.

### Aula 4 -  - Vídeo 8
