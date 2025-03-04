# Curso Alura - JavaScript: Implementando CRUD com requisições HTTP

## Aula 1 - Primeira Requisição

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá! Que tal aprender a implementar um CRUD com JavaScript? Meu nome é Nayanne Batista e te dou as boas-vindas a este curso.

Audiodescrição: Nayanne se autodeclara como uma pessoa de pele morena. Ela tem tem olhos castanho-escuros e cabelos lisos, compridos, também castanho-escuros. Ela veste uma camiseta laranja. Ao fundo, um ambiente de iluminação azulada, com uma estante de livros e uma janela com a persiana fechada.

O que aprenderemos?  
Neste curso, vamos trabalhar na Memoteca, projeto para colecionar memórias e pensamentos.

Por meio deste projeto, você entenderá como funciona a comunicação entre cliente e servidor e como ocorrem as requisições entre o front-end e o back-end. Para fazer isso, vamos entender e utilizar métodos HTTP como POST, PUT, DELETE e GET.

Além disso, vamos utilizar uma API fake com a ferramenta JSON Server, para simular uma API e conseguirmos fazer essa conexão e obter os dados desejados.

Com essas operações CRUD, poderemos buscar pensamentos já cadastrados, cadastrar um novo pensamento utilizando o formulário, além de editar e também excluir.

Pré-requisitos  
Para fazer este curso, é necessário ter conhecimentos de HTML, CSS e também alguns conhecimentos de JavaScript, como código assíncrono, promises e try-catch.

Vamos começar?!

### Aula 1 - Preparando o ambiente: download do projeto Memoteca

Olá, dev!
Boas-vindas a mais um curso de JavaScript!

Antes de prosseguir, é preciso ajustar o seu ambiente, conforme as instruções a seguir.

1. Código do projeto-base
Para este curso, utilizaremos o projeto Memoteca, que servirá de base para a implementação do CRUD em JavaScript.

Acesse o código do projeto por meio do [repositório no GitHub](https://github.com/alura-cursos/3781-javascript/tree/projeto-base) ou [faça download](https://github.com/alura-cursos/3781-javascript/archive/refs/heads/projeto-base.zip).

2. Layout no Figma
Caso tenha interesse no layout do projeto, acesse o Figma e explore os elementos da aplicação “Memoteca”.

> Se tiver alguma dúvida durante este curso, não hesite em interagir com a gente pelo Discord da Alura e pelo fórum. Estamos aqui para apoiar o seu aprendizado. Mesmo que não tenha dúvidas agora, ficaríamos felizes em ver você por lá (e o seu avanço).

Vamos lá!

### Aula 1 - Conhecendo a função fetch do JavaScript - Vídeo 2

Transcrição  
No vídeo anterior, conhecemos a aplicação Memoteca, repleta de pensamentos, como ficará ao final do curso. Mas, na verdade, até agora o mural da nossa aplicação ainda está vazio.

Queremos que a nossa aplicação tenha o mural repleto de pensamentos. Mas como vamos buscar esses pensamentos? Você já parou para se perguntar como acontece essa comunicação? Como uma aplicação front-end consegue buscar dados da internet?

Vamos entender como isso acontece no console do navegador.

Transferindo dados com o JSON
A instrutora tem um back-end rodando localmente na máquina, com o navegador exibindo a URL localhost:3000/pensamentos.

Nessa aplicação, temos diversos dados num formato parecido com o de objetos JavaScript, no modelo chave e valor, dando a estrutura dos pensamentos que vamos armazenar, com as propriedades id, conteudo e autoria.

```JSON
[
    {
        "id": "2",
        "conteudo": "Vc faz TI? Conserta meu celular!",
        "autoria": "Grupo da família"
    },
    {
        "id": "4",
        "conteudo": "Da vida reclama, mas sem ela não vive!",
        "autoria": "Mestre Yoda"
    }
...
]
```

Na verdade, esses dados não são objetos do JavaScript, mas um formato que chamamos de JSON (JavaScript Object Notation). Trata-se de um formato leve, muito utilizado na internet para a troca e armazenamento de dados. Cada trecho de código entre chaves é um dado único.

Vamos imaginar que os dados que queremos mostrar na aplicação são esses acima. Como faríamos isso? Faremos isso ao longo do curso, mas vamos entender como buscá-los primeiro.

**Buscando dados com fetch()**  
Vamos clicar com o botão direito nessa tela de dados no navegador e selecionar a opção "Inspecionar". Nessa aba de inspeção, vamos clicar em "Mais guias > Console". Na guia do Console, vamos clicar em "Limpar console" no menu superior de ferramentas.

Na nossa aplicação front-end, queremos buscar dados de algum lugar. Sendo assim, vamos criar uma função para buscar os pensamentos, definindo-a no console com function buscarPensamentos() {}. Dentro dessa função, precisamos fazer uma solicitação para obter esses dados.

Quando pedimos um favor para alguma amiga ou amigo, geralmente, usamos algumas palavras mágicas para aumentar as chances de conseguir, como "por favor" e "obrigada". Há palavras mágicas para solicitações para o JavaScript também. Especificamente para a solicitação de busca de dados, temos a palavra fetch() (cuja tradução pode ser, justamente, algo como "buscar").

Precisamos passar um endereço como parâmetro dessa função. Por exemplo, supondo que pedimos para uma amiga buscar um livro para nós em uma biblioteca, precisamos dar o endereço dessa biblioteca para ela, certo? A lógica é a mesma para o fetch.

O endereço dessas informações é o da nossa aplicação back-end. Portanto, vamos copiar a URL dessa aplicação (localhost:3000/pensamentos) e passar para dentro dos parênteses do fetch, entre aspas simples.

Esse fetch vai nos retornar uma promise (promessa), assim como a nossa amiga pode responder ao nosso pedido dizendo "ok, eu vou buscar o seu livro na biblioteca", prometendo essa ação.

Como o fetch retorna uma promessa, precisamos utilizar as palavras reservadas async e await. Antes do function, vamos digitar async, para definir essa função como assíncrona. Antes do fetch, vamos digitar await, para definir que esperamos essa resposta. Isso é necessário para lidar com esse tipo de solicitação no JavaScript.

Esse fetch() basta para buscarmos os pensamentos. Que tal também pedir um console.log() para verificar o que for retornado? Vamos chamá-lo abaixo do fetch. Mas o que vamos exibir nesse retorno, exatamente?

Para que a resposta que estamos esperando não se perca, precisamos atribuir essa resposta a uma constante. Então, antes do await fetch, vamos criar uma constante (com a palavra const) que chamaremos de response. Ou seja, com isso, vamos dar um console.log() nessa response, passando-a como parâmetro.

Por fim, após o fechamento das chaves, vamos chamar a função buscarPensamentos().

```JavaScript
async function buscarPensamentos() {
  const response = await fetch('http://localhost:3000/pensamentos')
  console.log(response)
}
buscarPensamentos()
```

Ao executar o código acima no console do navegador pressionando "Enter", nos é retornada uma response.

Essa response tem uma estrutura mais robusta e complexa do que os objetos da nossa aplicação back-end, com várias informações com as quais não precisamos nos preocupar nesse momento.

Os dados que buscamos em si estão contidos nessa response, mas não estão tão acessíveis para nós ainda. É como se a nossa amiga tivesse voltado da biblioteca com o nosso livro, mas ele estivesse em outro idioma.

Para conseguirmos acessar esses dados, de fato, precisamos fazer uma conversão de formato.

Convertendo JSON para objeto JavaScript com json()
Vamos limpar o terminal novamente e pressionar a seta para cima no teclado, para retornar ao código que tínhamos digitado anteriormente, antes da execução.

O fetch() vai retornar os dados que buscamos num formato JSON, mas precisamos converter para um formato possível de manipular na aplicação front-end. Pode ser, por exemplo, o formato de objeto JavaScript.

Para fazer isso, vamos criar outra constante, que vamos chamar de dados, logo abaixo do console.log() da nossa função. A essa constante, vamos atribuir o valor de response e aplicar nela a função json(), responsável por fazer a conversão da resposta para um formato JavaScript.

Para confirmar se essa conversão ocorreu, vamos dar um console.log() nos dados. Vamos comentar o primeiro console.log(), para não repetir o retorno, deixando apenas o segundo.

Por fim, precisamos utilizar o await antes do response.json(), porque esse método também vai nos retornar uma promessa.

```JavaScript
async function buscarPensamentos() {
  const response = await fetch('http://localhost:3000/pensamentos')
  //console.log(response)
  const dados = await response.json()
  console.log(dados)
}
buscarPensamentos()
```

Ao executar esse código, recebemos como resposta um array de 15 objetos, cada um deles representando um pensamento (ou seja, um dado):

Retorno

```JavaScript
[
  { id: '2', conteudo: 'Vc faz TI? Conserta meu celular!' autoria: 'Grupo da Família' },
  { id: '4', conteudo: 'Da vida reclama, mas sem ela não vive!' ...},
  { id: '5', conteudo: 'Na minha máquina funciona!', autoria: ...},
  { id: '6', conteudo: 'Esse é de laranja que parece de limão, mas é de uva.'...}
  ...
]
```

Este formato é de objeto JavaScript, porque fizemos a conversão, e ele tem algumas diferenças em relação ao JSON. Por exemplo, a chave não fica entre aspas, mas apenas o valor.

Ou seja, por meio de uma conversão de formato, conseguimos obter os dados desejados!

Próximos passos  
Começamos a entender como funciona a comunicação entre o front-end e o back-end na prática. No próximo vídeo, vamos abordar essa comunicação na teoria.

### Aula 1 - Para saber mais: arquivo JSON

**O que é JSON?**  
JSON (JavaScript Object Notation) é um formato leve de intercâmbio de dados que é fácil de ler e escrever para humanos e simples de analisar e gerar para máquinas. É amplamente utilizado para transmitir dados entre um servidor e um cliente web, bem como para armazenamento de configurações e dados estruturados em diversos sistemas.

Se você precisa escrever um documento, utiliza um arquivo no formato .docx; se precisa montar uma apresentação de slides, um arquivo PPT. Se precisa receber ou enviar dados na internet, o formato JSON é uma excelente escolha!

Quais são as características do JSON?  

- Formato simples: JSON é baseado em texto e usa uma notação de chave-valor que é fácil de entender e manipular;
- Linguagem agnóstica: Embora derivado do JavaScript, JSON é independente de linguagem, com suporte em praticamente todas as linguagens de programação modernas. Esse característica quase “universal” de funcionar em diversas linguagens é o que significa “linguagem agnóstica”;
- Estrutura hierárquica: Suporta estruturas de dados complexas através de objetos (coleções de pares chave-valor) e arrays (listas ordenadas de valores).

Quais são as vantagens do JSON?

- Leve e compacto: o que o torna ideal para transferência de dados em redes;
- Fácil de ler e escrever: a sintaxe é minimalista e intuitiva.;
- Interoperabilidade: suporte nativo em muitas linguagens de programação e plataformas, facilitando a troca de dados entre sistemas diferentes.

JSON é uma ferramenta poderosa e versátil para troca de dados, com uma sintaxe simples e que funciona em conjunto com diversos ambientes e
linguagens. Compreender o JSON é essencial para toda pessoa que trabalha com web, APIs ou qualquer forma de intercâmbio de dados estruturados.

### Aula 1 - Conhecendo como funciona a comunicação cliente-servidor - Vídeo 3

Transcrição  
No console do navegador, aprendemos como fazer um fetch() para buscar dados na prática. Agora, vamos entender teoricamente como se dá esse processo de comunicação entre cliente (quem busca os dados) e servidor (quem fornece os dados).

Como ocorre a comunicação servidor-cliente?  
Vamos comparar a situação com um restaurante. Normalmente, não temos acesso direto à cozinha dos restaurantes que frequentamos. Se queremos, por exemplo, um copo de água, não vamos até a cozinha buscá-lo. Existe uma pessoa (o garçom ou garçonete) a quem fazemos esse pedido, e essa pessoa é quem vai até a cozinha para buscar o que solicitamos e trazer à nossa mesa.

Na web, essas solicitações funcionam de forma parecida. O cliente, que no caso da web é a aplicação front-end, não tem contato direto com o servidor, ou back-end. Essa é a parte da aplicação que a pessoa usuária não vê funcionando, mas é importantíssima porque lida com toda a lógica de negócio e armazenamento de dados, e a nossa aplicação precisa se conectar a ela.

Assim como no restaurante temos a pessoa do garçom ou garçonete para intermediar essa comunicação entre nós e a cozinha, na internet nós precisamos de uma API.

A sigla API significa Application Programming Interface (Interface de Programação de Aplicações). Ela é a responsável por intermediar a comunicação entre o front-end e o back-end - assim como fizemos o fetch() no navegador para buscar os dados desejados e obter a resposta.

Quando precisa de informações que não tem disponíveis imediatamente, a aplicação front-end faz uma requisição (termo utilizado para "solicitação" nesse contexto, também chamada de "request") para a API, e o fetch() (a função de busca do JS) retorna uma promise, como o garçom que se compromete a ir buscar a sua água.

Feito isso, a API envia essa requisição para o back-end, ou servidor. O servidor, por sua vez, retorna a resposta (ou "response") com os dados solicitados em JSON (ou com um erro!).

Como sabemos, é necessário fazer uma conversão dessa resposta em JSON para um objeto JavaScript. No navegador, utilizamos a função .json() para fazer essa conversão.

Próximos passos  
Agora que entendemos como funciona a comunicação cliente-servidor e sabemos que precisamos de uma API, surge a dúvida:

— Nós ainda não temos uma API, mas apenas um projeto base de aplicação front-end. Como vamos nos conectar com o back-end? Além disso, essa API é desenvolvida com uma linguagem back-end, como Java ou Python. Será que vamos precisar aprender uma linguagem dessas para desenvolver uma API?

A boa notícia é que não!

Esse cenário é bastate comum no mercado de trabalho, em que existe um time front-end e um time back-end que trabalham em paralelo, e a API não fica pronta antes que o time de front-end precise fazer seus testes para finalizar o projeto.

Sendo assim, existem algumas ferramentas que podem nos auxiliar nesses casos. Neste curso, vamos utilizar a biblioteca JSON Server para nos auxiliar a criar uma API falsa, com a qual vamos conseguir simular todas as requisições a uma API real.

Então, vamos construir essa API falsa?!

### Aula 1 - Preparando o ambiente: Node.js e JSON server

Para prosseguir com o curso, você precisa instalar o Node.js.

1. Node.js
No próximo vídeo, iremos instalar a ferramenta JSON-Server. Para fazer isso, precisaremos do Node.js instalado na nossa máquina.

Caso não tenha o Node.js instalado, você pode fazer o download nesse site. Após o download, selecione o checkbox para aceitar os termos, clique em “Next” (“próximo”) algumas vezes para prosseguir e, por fim, clique em “Install" (“instalar”) para concluir a instalação.

2. JSON-Server
A instalação do JSON-Server será feita no próximo vídeo. O código que será colado no arquivo db.json está disponibilizado abaixo:

```JSON
{
    "pensamentos": [
      {
        "id": "2a56",
        "conteudo": "Vc faz TI? Conserta meu celular!",
        "autoria": "Grupo da família"
      },
      {
        "id": "4c7d",
        "conteudo": "Da vida reclama, mas sem ela não vive!",
        "autoria": "Mestre Yoda"
      },
      {
        "id": "5b8a",
        "conteudo": "Na minha máquina funciona!",
        "autoria": "Dev"
      },
      {
        "id": "68uy",
        "conteudo": "Esse é de laranja que parece de limão, mas tem gosto de tamarindo!",
        "autoria": "Chaves"
      },
      {
        "id": "b807",
        "conteudo": "Melhor professor, o fracasso é!",
        "autoria": "Mestre Yoda"
      },
      {
        "id": "9f3c",
        "conteudo": "Você não é todo mundo!",
        "autoria": "Mãe"
      },
      {
        "id": "6a2b",
        "conteudo": "Foi sem querer querendo!",
        "autoria": "Chaves"
      },
      {
        "id": "7e2a",
        "conteudo": "Que a força esteja com você!",
        "autoria": "Mestre Yoda"
      },
      {
        "id": "5c8f",
        "conteudo": "Resolver o bug não consegue? Esfriar a cabeça vc deve.",
        "autoria": "Mestre Yoda"
      },
      {
        "id": "2d6e",
        "conteudo": "Não faça drama, faça café! :)",
        "autoria": "Dev"
      },
      {
        "id": "3f1a",
        "conteudo": "Conserta minha impressora?",
        "autoria": "Grupo da família"
      },
      {
        "id": "8b4c",
        "conteudo": "A vingança nunca é plena... mata a alma e a envenena...",
        "autoria": "Seu Madruga"
      },
      {
        "id": "4d2e",
        "conteudo": "Se eu for aí e achar, eu esfrego na sua cara!",
        "autoria": "Mãe"
      }
    ]
  }
```

Esse código JSON contém os dados dos pensamentos que vamos exibir no projeto Memoteca.

Com o Node.js instalado, você pode prosseguir no curso!

### Aula 1 - Instalando o JSON Server para configurar uma API fake - Vídeo 4

Transcrição  
No VS Code, vamos acessar o projeto base disponibilizado nas atividades desta aula. Vamos instalar o JSON Server, acessando o terminal do VS Code com o atalho "Ctrl + J".

Pré-requisito: NodeJS  
Antes de tudo, podemos executar o comando clear para limpar o terminal e melhorar a visualização.

Para instalar o JSON Server, é necessário ter o Node instalado na nossa máquina. Isso porque o JSON Server é um pacote NPM (Node Package Manager, ou "Gerenciador de Pacotes do Node").

Podemos descobrir se temos o Node instalado executando o seguinte comando no terminal:

> node -v

No caso da instrutora, que tem o Node instalado, o retorno desse comando foi a versão do Node configurada na máquina (20.12.2). Caso você receba algum erro dizendo que este não é um comando reconhecido ou algo do gênero, pode ser que você não tenha o Node instalado.

Para resolver isso, basta acessar o site do NodeJS e clicar em "Descarregar Node.js" no centro da tela. Quando o download for finalizado, é só clicar no arquivo e seguir os passos para fazer a instalação (basicamente, clicar em "Next" até o fim e depois em "Finish").

Instalando o JSON Server  
Com o Node instalado, então, nós podemos agora usar o Gerenciador de Pacotes do Node para instalar o JSON Server. No terminal vamos executar o seguinte comando:

> npm i -g json-server

npm é o nome do gerenciador de pacotes, i é a abreviação de "install" (instalar), -g é a flag que indica que estamos realizando essa operação de maneira global, e json-server é a ferramenta que queremos instalar.

Normalmente essa instalação é rápida, mas isso pode depender da sua internet.

Configurando o back-end  
Quando a instalação for finalizada, vamos acessar o menu lateral esquerdo do VS Code, também chamado de "Explorador" de arquivos.

Nosso projeto tem as pastas "assets", "css" e o arquivo index.html do nosso projeto base. Agora, vamos criar uma nova pasta que vai representar o nosso back-end.

Normalmente, trabalhamos no front-end em uma máquina enquanto o back-end está hospedado em outra máquina, no servidor, etc. Mas, como estamos utilizando a abordagem de uma API fake, tanto o front-end quanto o back-end vão rodar localmente na nossa máquina.

Vamos clicar no botão "New Folder" (nova pasta) no topo desse menu. Podemos chamá-la de "backend".

Em seguida, vamos limpar o terminal novamente com o comando cleare entrar nessa nova pasta com o seguinte comando:

> cd backend

Dentro da pasta "backend", vamos executar o seguinte comando:

> npm init -y

Esse comando vai criar um novo arquivo na nossa pasta "backend", package.json, como podemos conferir na nossa estrutura de pastas na aba do explorador. Esse é o arquivo de configurações do nosso back-end, e contém algumas informações como nome, versão, descrição e alguns scripts, que analisaremos com mais detalhes adiante.

package.json

```JavaScript
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Criando um banco de dados  
Agora, dentro do "backend", vamos criar um arquivo que vai conter os dados que vamos buscar. Esses dados vão ser criados de forma dinâmica posteriormente, mas, por enquanto, vamos criar um arquivo para disponibilizar esses dados fixos, servindo como um banco de dados fake.

Dentro da pasta "backend", vamos criar um novo arquivo clicando no botão "New File", e vamos chamá-lo de db.json. Dentro dele, vamos colar os dados que conferimos no primeiro vídeo:

db.json

```JavaScript
{
  "pensamentos": [
    {
      "id": "2a56",
      "conteudo": "Vc faz TI? Conserta meu celular!",
      "autoria": "Grupo da família"
    },
    {
      "id": "4c7d",
      "conteudo": "Da vida reclama, mas sem ela não vive!",
      "autoria": "Mestre Yoda"
    },
    {
      "id": "5b8a",
      "conteudo": "Na minha máquina funciona!",
      "autoria": "Dev"
    },
    {
      "id": "68uy",
      "conteudo": "Esse é de laranja que parece de limão, mas tem gosto de tamarindo!",
      "autoria": "Chaves"
    },
    {
      "id": "b807",
      "conteudo": "Melhor professor, o fracasso é!",
      "autoria": "Mestre Yoda"
    },
    {
      "id": "9f3c",
      "conteudo": "Você não é todo mundo!",
      "autoria": "Mãe"
    },
    {
      "id": "6a2b",
      "conteudo": "Foi sem querer querendo!",
      "autoria": "Chaves"
    },
    {
      "id": "7e2a",
      "conteudo": "Que a força esteja com você!",
      "autoria": "Mestre Yoda"
    },
    {
      "id": "5c8f",
      "conteudo": "Resolver o bug não consegue? Esfriar a cabeça vc deve.",
      "autoria": "Mestre Yoda"
    },
    {
      "id": "2d6e",
      "conteudo": "Não faça drama, faça café! :)",
      "autoria": "Dev"
    },
    {
      "id": "3f1a",
      "conteudo": "Conserta minha impressora?",
      "autoria": "Grupo da família"
    },
    {
      "id": "8b4c",
      "conteudo": "A vingança nunca é plena... mata a alma e a envenena...",
      "autoria": "Seu Madruga"
    },
    {
      "id": "4d2e",
      "conteudo": "Se eu for aí e achar, eu esfrego na sua cara!",
      "autoria": "Mãe"
    }
  ]
}
```

Os dados são objetos JSON compostos pelas propriedades id, conteudo e autoria, estruturando os pensamentos que queremos registrar na nossa aplicação e tentar mostrar na interface de usuário.

Executando o servidor  
Com o nosso banco de dados fake, vamos acessar o arquivo package.json e mudar um de seus scripts. Atualmente, temos nele apenas um script de teste, mas não vamos trabalhar com testes nessa aplicação. Então, vamos mudar o nome do script de test para start, porque queremos adicionar nele um comando para rodar a nossa aplicação back-end.

Esse comando será o json-server --watch db.json --port 3000. Com esse comando, estamos dizendo que a biblioteca que instalamos, o JSON Server, vai ficar assistindo (watch) às modificações que vão acontecer no arquivo db.json, onde estão contidos os nossos dados. Além disso, dissemos que essa API vai rodar na porta 3000.

Com esse comando configurado no back-end, só vamos precisar digitar no terminal o comando npm start para subir o back-end. Senão, precisaríamos toda vez digitar todo esse comando, que é muito grande.

package.json

```JavaScript
"scripts": {
    "start": "json-server --watch db.json --port 3000"
}
```

Agora, vamos acessar o terminal com o atalho "Ctrl + J" para verificar se deu tudo certo e se estamos conseguindo servir o back-end, ou seja, rodar a nossa aplicação.

Verifique se você está na pasta "backend" no terminal. Dentro dela, vamos rodar:

> npm start

Sucesso! Ao executar o comando acima para rodar a aplicação, recebemos como retorno uma mensagem com o comando que está sendo executado por baixo dos panos, um emoji feliz denotando que a operação foi bem-sucedida, a URL base (localhost:3000) e os endpoints, que, na verdade, é apenas o endereço onde vamos buscar esses pensamentos (localhost:3000/pensamentos).

Considerando novamente a analogia da pessoa que foi buscar o livro na biblioteca, a URL base é como o endereço da biblioteca, e o endpoint é a seção específica dessa biblioteca em que se encontra o livro que queremos, como a de ficção científica, por exemplo.

Como a nossa aplicação é bem simples, temos apenas um endpoint, o /pensamentos, mas poderíamos ter vários!

Ao clicar no link do endpoint retornado no terminal com "Ctrl" pressionado, abrimos uma página no navegador que contém todos os dados da nossa aplicação, ou seja, os pensamentos, em formato JSON.

Observação: precisaremos sempre executar o back-end ao longo do curso para conseguir fazer requisições ao back-end. Do contrário, teremos um erro se o servidor não estiver em execução.

Próximos passos  
Agora nós já temos uma aplicação front-end e uma API. Nos próximos vídeos, vamos preparar a aplicação para fazer a nossa primeira requisição.

### Aula 1 - Escrevendo a primeira requisição no projeto - Vídeo 5

Transcrição  
Agora, além da aplicação front-end, temos a nossa API falsa com o JSON Server. Mas como vamos obter, efetivamente, as informações de lá? Precisamos adicionar comportamento à nossa aplicação.

Se acessarmos o menu lateral esquerdo, o explorador de arquivos do VS Code, observaremos que temos apenas o "backend", os "assets", o index.html e o "css". No entanto, para adicionar dinamismo na aplicação, precisamos do JavaScript. É isso que vamos fazer agora.

Fazendo nossa primeira requisição à API  
Vamos criar uma nova pasta no nosso projeto, que chamaremos de "js". Dentro dela, vamos adicionar os arquivos JavaScript. O primeiro deles será o arquivo api.js, que será responsável por conter as nossas requisições à API.

Dentro dele, primeiramente, vamos criar uma constante (const) chamada api. Ela será um objeto com as várias funções do nosso código, que serão as requisições.

Vamos configurar a primeira, a de buscar pensamentos. Para isso, vamos criar uma função com o async, que chamaremos de buscarPensamentos().

Dentro dessa função, vamos utilizar o try/catch, porque, se ocorrer algum erro nessa requisição, já conseguiremos captá-lo e mostrar alguma mensagem amigável na interface informando sobre ela.

Para isso, podemos adicionar um alert() no catch, sinalizando o erro para a pessoa usuária com a mensagem 'Erro ao buscar pensamentos', por exemplo. Também precisamos lançar esse erro com throw error.

No try, vamos fazer algo bem parecido com o que fizemos no console do navegador. Então, vamos criar uma constante que também chamaremos de response, que vai receber um fetch(). Já aprendemos que precisamos usar o await antes do fetch(), porque esse método vai nos retornar uma promise.

Passamos o endereço dessa busca para o fetch() entre aspas simples. Esse endereço é o link para o endpoint /pensamentos, que conseguimos no vídeo anterior: http://localhost:3000/pensamentos.

Em seguida, adicionamos o que queremos que seja retornado, com a palavra return. Nesse caso, queremos retornar a response com o método json() aplicado para fazer a conversão do formato JSON para o objeto JavaScript e podermos manipular esses dados. Também precisamos adicionar um await antes do response, porque o método retorna uma promise.

Inclusive, vamos exportar essa constante, adicionando a linha de código export default api ao final do arquivo, para conseguir utilizar essa constante em outros arquivos JavaScript, como veremos mais adiante.

Com isso, nosso arquivo ficará assim:  

api.js

```JavaScript
const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch('http://localhost:3000/pensamentos')
      return await response.json()
    }
    catch {
      alert('Erro ao buscar pensamentos')
      throw error
    }
  }
}
export default api
```

Próximos passos  
Agora temos a nossa primeira requisição, em que usamos o fetch() para buscar os pensamentos!

Para verificar o resultado, vamos clicar no botão "Extensions" do menu lateral esquerdo no VS Code, pesquisar por "live server" no campo de busca e instalar e habilitar a primeira extensão da página de resultados.

Feito isso, quando clicamos em "Go Live" no canto inferior direito da tela de código no VS Code, conseguimos visualizar a aplicação em outra janela.

Temos a aplicação Memoteca funcionando! Criamos o arquivo api.json e fizemos a requisição fetch(), mas os dados ainda não estão disponíveis na aplicação, porque precisamos pegar essa resposta e manipular o DOM para mostrá-la na interface da pessoa usuária.

É isso que faremos no próximo vídeo. Até lá!

### Aula 1 - Avaliando a implementação de requisições

Você decidiu aplicar seus conhecimentos em um projeto pessoal chamado "Gatito Petshop", um site para adoção de pets.

Você já configurou a API para listar os pets disponíveis para adoção e agora precisa implementar a função que fará a requisição para buscar esses pets do servidor.

Como você pode escrever o código dessa função de busca?

Alternativa correta

```JavaScript
  async function buscarPets() {
    try {
      const response = await fetch('http://localhost:3000/pets’)
      return await response.json()
    }
    catch (error){
      alert('Erro ao buscar dados’)
      throw error
    }
  }
```

Esta implementação segue as boas práticas ao utilizar a função fetch() para fazer a requisição e ler o JSON, e lançar um erro caso a requisição falhe, o que facilita o tratamento de erros.

### Aula 1 - Mostrando os dados na interface do projeto - Vídeo 6

Transcrição  
No vídeo anterior, criamos uma pasta chamada "js" para conter os arquivos JavaScript, e o primeiro deles foi responsável pelas solicitações à API, que chamamos de api.js.

Nesse momento do vídeo, a instrutora realiza correções no arquivo api.js. Elas foram adicionadas na transcrição do vídeo anterior.

Observamos na aplicação que os pensamentos ainda não estão aparecendo, e precisamos de um arquivo JavaScript para lidar com essa manipulação do DOM e outro para lidar com a interface.

Vamos por partes.

Renderizando os pensamentos  
Dentro da pasta "js", vamos criar um novo arquivo chamado ui.js. O ui vem de User Interface (Interface do Usuário).

Nesse arquivo, vamos criar uma função para renderizar os pensamentos na tela. Para isso, vamos declarar uma constante chamada ui, que vai receber um bloco de chaves. Dentro dela, vamos criar a função assíncrona chamada renderizarPensamentos().

Precisaremos ter acesso à lista de pensamentos nessa função. Se acessarmos o arquivo index.html no explorador de arquivos, podemos observar a renderização de lista ul de pensamentos dentro da section da linha 63, cujo id é lista-pensamentos:

index.html

```HTML
<section id="lista-pensamentos-container">
    <h3>Meu Mural</h3>
    <ul id="lista-pensamentos"></ul>
</section>
```

Ou seja, vamos acessar esse elemento na função de renderizar pensamentos para conseguir criar os itens dessa lista de forma dinâmica.

Então, no ui.js, vamos criar uma constante chamada listaPensamentos dentro da função que estamos criando, e atribuir a ela o document.getElementById(), passando por parâmetro o ID da ul que conferimos agora, lista-pensamentos.

Em seguida, vamos utilizar o try/catch novamente. No catch, vamos lançar um alert() com a mensagem Erro ao renderizar pensamentos. Dentro do try, queremos fazer uma chamada à API. Afinal, para renderizar esses pensamentos, precisamos buscá-los primeiro.

Essa função de buscar os pensamentos foi criada no arquivo api.js, mas podemos acessá-la no ui.js, porque expostamos a constante api antes. Então, vamos importá-la no topo do arquivo:

ui.js

> import api from "./api.js"

Você pode estar se perguntando: por que estamos criando vários arquivos JavaScript? Por que não fazemos tudo num arquivo só?

Criar diferentes arquivos é importante para conseguirmos separar as responsabilidades. Quando criamos um arquivo específico para lidar com as requisições, outro para lidar com a interface de usuário e outro para lidar com a manipulação do DOM, facilitamos a legibilidade e manutenção do código, sendo uma boa prática de programação.

Por exemplo, vamos imaginar que houve um erro em alguma requisição. Nesse caso, não precisamos procurá-lo em um arquivo grande com tudo dentro, o que seria difícil. Quando temos um arquivo específico para cada tarefa, fica mais fácil achar o erro, debugar e corrigir o código.

Dentro do try, vamos acessar a API. Para isso, vamos criar uma constante chamada pensamentos, para a qual vamos atribuir a chamada da API. Começamos com await, porque ela vai nos retornar uma promise, e depois chamamos api.buscarPensamentos().

Após buscarmos esses pensamentos, precisamos criar os itens da lista de forma dinâmica. Para isso, vamos acessar os pensamentos e fazer um forEach() neles, resultando em pensamentos.forEach().

Dentro desse método, para cada pensamento, vamos criar uma arrow function e mudar o conteúdo da listaPensamentos, com listaPensamentos.innerHTML += para fazer uma concatenação desse conteúdo.

No card de cada pensamento, temos as aspas, o conteúdo e a autoria, então vamos precisar criar essa estrutura aqui também. Vamos utilizar uma template string com a sintaxe das crases e, dentro delas, colar um código HTML que vamos entender mais adiante.

Com isso, nossa função ficará assim:

```JavaScript
const ui = {
  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos")
    try {
      const pensamentos = await api.buscarPensamentos()
      pensamentos.forEach(pensamento => {
        listaPensamentos.innerHTML += `
          <li class="li-pensamento" data-id="${pensamento.id}">
          <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
          <div class="pensamento-conteudo">${pensamento.conteudo}</div>
          <div class="pensamento-autoria">${pensamento.autoria}</div>
          </li>
        `
      })
    }
    catch {
      alert('Erro ao renderizar pensamentos')
    }
  }
}
```

No código HTML que passamos para o innerHTML, criamos dinamicamente cada li (item) da lista. Começamos com a tag li, em que adicionamos algumas classes que já estão disponíveis no CSS, como li-pensamento.

Adicionamos também um atributo de dados chamado data-id. Esse atributo de dados é do HTML e podemos utilizá-lo para salvar uma informação dentro desse elemento. Ou seja, ele não vai modificar a aparência do elemento, mas a informação vai ficar salva dentro desse atributo. Passamos para ele o pensamento.id, porque é o que queremos armazenar. Lembrando que o nosso pensamento tem três propriedades: id, conteúdo e autoria.

Logo abaixo, criamos a imagem com a tag img. Passamos o caminho da imagem, um alt e uma classe também, chamada icone-aspas.

Depois, criamos duas divs com suas classes respectivas, pensamento-conteudo e pensamento-autoria, e também concatenamos o seu conteúdo.

Com isso, estamos criando os lis, ou itens da lista, de forma dinâmica!

Para finalizar, vamos exportar essa função ao final do arquivo ui.js:

> export default ui

**Lógica principal da aplicação**  
Por fim, precisamos de mais um arquivo JavaScript. Dentro da pasta "js", vamos criar um novo arquivo chamado main.js. Esse arquivo será responsável pela lógica principal do carregamento da aplicação, ou seja, da manipulação do formulário, da submissão desses dados e do próprio carregamento da página.

Nesse arquivo, vamos precisar chamar a função que acabamos de criar no arquivo ui.js, chamada renderizarPensamentos().

Vamos chamar essa função quando o HTML for carregado. Então, podemos digitar document.addEventListener() para adicionar um ouvinte de eventos e identificar quando a página for carregada. Então, entre os parênteses, vamos adicionar o DOMContentLoaded, que significa justamente que o HTML terminou de ser carregado.

Após uma vírgula, vamos criar uma arrow function como segundo parâmetro e chamar nela a função do ui.

main.js

```JavaScript
document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos()
})
```

Precisamos importar a função do ui no topo do arquivo para a chamada funcionar:

> import ui from "./ui.js"

Pronto! Agora já temos três arquivos com sua respectiva responsabilidade bem definida.

Chamando os scripts no HTML  
Para finalizar, vamos adicionar esses três scripts JS no index.html, para podermos testar se tudo está funcionando.

Abaixo de footer, vamos adicionar a tag script do tipo module, porque estamos utilizando a estrutura de import e export. No src dessa tag. vamos indicar o caminho js/api.js. Isso resulta na linha <script type="module" src="js/api.js"></script>.

Deixando o cursor parado ao final da linha e pressionando o atalho "Alt + Shift + Seta para baixo", duplicamos essa linha. Vamos fazer isso duas vezes e apenas substituir o nome dos arquivos para ui.js e main.js.

index.html

```HTML
<script type="module" src="js/api.js"></script>
<script type="module" src="js/main.js"></script>
<script type="module" src="js/ui.js"></script>
```

Podemos testar. Nossa aplicação já está em execução, então vamos acessar a porta para ela no navegador e recarregar a página, os pensamentos aparecerão no mural!

![alt text](image.png)

A imagem mostra um conjunto de seis quadros azuis com bordas azul-escuro, organizados em duas colunas e três linhas, com um fundo claro e manchas azuis claras nas extremidades superiores. Cada quadro contém uma citação em aspas, seguida pelo nome da pessoa ou personagem que teria dito a frase. No topo da imagem, centralizado, lê-se 'Meu Mural' em letras maiúsculas. As citações e seus respectivos autores de cima para baixo, da esquerda para a direita, são: 'Vc faz TI?? Conserta meu celular!' - Grupo da família; 'Da vida reclama, mas sem ela não vive!' - Mestre Yoda; 'Na minha máquina funciona!' - Dev; 'Esse é de laranja que parece de limão, mas tem gosto de tamarindo!' - Chaves; 'Melhor professor, o fracasso é!' - Mestre Yoda; 'Você não é todo mundo!' - Mãe. Cada quadro possui um ícone de aspas grandes no canto superior esquerdo e o texto é alinhado à esquerda. A tipografia utilizada para os nomes dos autores é menor do que a usada para as citações.

Próximos passos  
Conseguimos realizar a nossa primeira requisição à API e mostrar os pensamentos na tela! Mas isso é só o começo. Na próxima aula, vamos aprender a adicionar um novo pensamento no mural.

### Aula 1 - Faça como eu fiz: realize a primeira requisição no Memoteca

Nesta aula, aprendemos importantes conceitos para fazer a primeira requisição e mostrar os dados do pensamento no mural do projeto Memoteca.

É importante que você coloque em prática o conhecimento adquirido em aula para que o seu aprendizado seja eficaz!

Para implementar o que foi visto na aula, clique abaixo em “ver opinião da instrutora” para seguir o passo a passo.

**Opinião do instrutor**  

Nesta aula, foram adicionados novos pensamentos ao arquivo "db.json" e configurado o arquivo "package.json" para iniciar o servidor JSON com os novos dados.

No arquivo "db.json", foram inseridos novos pensamentos com seus respectivos IDs, conteúdos e autorias. Já no arquivo "package.json", foi adicionado um script de inicialização do servidor JSON.

Para ver mais detalhes do código implementado, acesse o [repositório no GitHub](https://github.com/alura-cursos/3781-javascript/tree/aula-1).

Abaixo, veja instruções mais detalhadas do que fizemos nesta aula:

Arquivo “backend/db.json”:

- Abra o arquivo "db.json";
- Adicione um novo objeto com as informações de um pensamento, incluindo ID, conteúdo e autoria;
- Repita o passo anterior para adicionar todos os novos pensamentos ao arquivo;
- Salve as alterações feitas no arquivo.

Arquivo “backend/package.json”:

- Abra o arquivo "package.json";
- Adicione um novo script chamado "start" com o comando para iniciar o servidor JSON;
- Salve as alterações feitas no arquivo; Também criamos um arquivo chamado "api.js" que contém um objeto chamado "api" com um método assíncrono chamado buscarPensamentos. Esse método faz uma requisição para a URL 'http://localhost:3000/pensamentos' utilizando o método fetch, e retorna os dados em formato JSON. Caso ocorra algum erro na requisição, é exibido um alerta com a mensagem 'Erro ao buscar pensamentos' e o erro é lançado.

Arquivo "api.js":

- Crie um arquivo chamado "api.js";
- Declare uma constante chamada api que seja um objeto;
- Adicione um método assíncrono chamado buscarPensamentos dentro do objeto api;
- Dentro do método buscarPensamentos, faça uma requisição utilizando o método fetch para a URL 'http://localhost:3000/pensamentos';
- Retorne os dados da resposta da requisição em formato JSON utilizando o método response.json();
- Caso ocorra algum erro na requisição, exiba um alerta com a mensagem 'Erro ao buscar pensamentos';
- Lance o erro utilizando a palavra-chave throw;
- Exporte o objeto "api" como padrão no final do arquivo.

Além disso, realizamos algumas alterações em três arquivos: "index.html", "js/api.js", "js/main.js" e "js/ui.js".

No arquivo "index.html", adicionamos três novos scripts para importar os arquivos "api.js", "main.js" e "ui.js".

Em "js/api.js", removemos a variável error do bloco catch.

Já em "js/main.js", importamos o arquivo "ui.js" e adicionamos um evento para chamar a função renderizarPensamentos ao carregar a página.

Por fim, no arquivo "js/ui.js", criamos a função "renderizarPensamentos" que busca os pensamentos da API e os exibe na página.

Arquivo “index.html”:

Adicione os seguintes scripts no final do body:

```HTML
<script type="module" src="js/api.js"></script>
<script type="module" src="js/main.js"></script>
<script type="module" src="js/ui.js"></script>
```

Arquivo “js/api.js”:

Remova a variável "error" do bloco catch.

Arquivo “js/main.js”:

Importe o arquivo "ui.js";

Adicione um evento para chamar a função renderizarPensamentos ao carregar a página.

Arquivo “js/ui.js”:

- Crie a função assíncrona renderizarPensamentos;
- Obtenha o elemento com o id lista-pensamentos;
- Tente buscar os pensamentos da API e, para cada pensamento, adicione o HTML correspondente à lista de pensamentos;
- Em caso de erro, exiba um alerta.

Se sobrarem dúvidas, chame a gente no forum ou discord!

### Aula 1 - Lista de exercícios

Vamos praticar?

O que é:  
Boas-vindas à nossa lista de exercícios - um caminho prático para aprender e aprimorar suas habilidades em tecnologia. Nossos exercícios colocam você no centro do processo de aprendizado, permitindo que você construa, experimente e explore conceitos de programação e tecnologia.

Para que serve:  
Esta lista serve para aprender, reforçar, praticar e aprimorar habilidades em programação e desenvolvimento web. Desafie-se! A lista prepara você não apenas para entender a tecnologia, mas para utilizá-la de maneira eficaz e criativa em seus próprios projetos ou no trabalho.

Como fazer:  
Leia cada exercício com atenção: comece entendendo o cenário proposto e o que se espera como resultado.
Escreva o código: utilize o ambiente de codificação de sua escolha para escrever e testar o seu código. Não se preocupe em acertar de primeira, a prática leva à perfeição.
Verifique o gabarito: após tentar resolver o exercício, compare seu código com o gabarito fornecido em “Opinião do instrutor”. Isso ajudará a identificar áreas de melhoria e consolidar o aprendizado.
Repita: a repetição é chave para o aprendizado. Tente fazer os exercícios mais de uma vez, aplicando melhorias e variantes.
Lembre-se, cada desafio é uma chance de crescer. Não se desanime com os erros; eles são degraus no caminho do aprendizado. Sobretudo, divirta-se! O aprendizado mais eficaz acontece quando nos engajamos e nos interessamos pelo que estamos fazendo.

Não se esqueça que estamos no Fórum e no Discord para ajudar você!

Bons estudos!

1) Simulando uma API com JSON Server
Você está desenvolvendo a aplicação web ADOPET, um site para adoção de animais, e precisa buscar dados de um servidor com as informações dos pets. No entanto, você ainda não tem um back-end pronto. Para contornar isso, você pode utilizar o JSON Server para simular uma API.

Logo, abra seu editor de código, crie um novo projeto e faça a configuração do JSON-Server para simular um back-end que retorna os dados de animais para adoção.

Utilize os dados fictícios a seguir:

```JSON
{
  "pets": [
    {
      "id": "1a2b",
      "especie": "felina",
      "nome": "Mimi",
      "raca": "Siamês"
    },
    {
      "id": "2b3c",
      "especie": "canina",
      "nome": "Rex",
      "raca": "Labrador"
    },
    {
      "id": "3c4d",
      "especie": "felina",
      "nome": "Luna",
      "raca": "Persa"
    },
    {
      "id": "4d5e",
      "especie": "canina",
      "nome": "Max",
      "raca": "Beagle"
    },
    {
      "id": "5e6f",
      "especie": "felina",
      "nome": "Simba",
      "raca": "Maine Coon"
    },
    {
      "id": "6f7g",
      "especie": "canina",
      "nome": "Bella",
      "raca": "Bulldog"
    },
    {
      "id": "7g8h",
      "especie": "felina",
      "nome": "Oscar",
      "raca": "Bengal"
    },
    {
      "id": "8h9i",
      "especie": "canina",
      "nome": "Lola",
      "raca": "Poodle"
    },
    {
      "id": "9i0j",
      "especie": "felina",
      "nome": "Nina",
      "raca": "Sphynx"
    },
    {
      "id": "0j1k",
      "especie": "canina",
      "nome": "Charlie",
      "raca": "Golden Retriever"
    }
  ]
}
```

2) Buscando dados da API  
Agora que você tem uma API simulada rodando, você precisa buscar os dados dessa API. Faça uma requisição para buscar os dados dos pets.

3) Exibindo dados no Front-end  
Você já configurou uma API simulada com JSON Server e fez a requisição para buscar os dados dos pets. Agora, é hora de exibir esses dados na interface da aplicação web.

Crie uma função em JavaScript que renderize os dados dos pets no frontend, exibindo-os em uma lista.

Lembre-se que o projeto não estará estilizado, então, caso queira, crie um arquivo ".css" e adicione estilo para as classes dos elementos.

Vamos lá?

Opinião do instrutor

Agora que você concluiu os exercícios, é hora de ver o "gabarito" com as respostas!

Lembre-se de que seu código pode variar um pouco. O importante é que ele funcione e siga boas práticas de programação!

1) Simulando uma API com JSON Server

Para configurar o JSON Server:

- Crie um novo projeto no seu editor de código;
- Crie uma pasta chamada ”backend” e rode o comando npm init -y;
- Instale o JSON Server com npm i json-server;
- Crie um arquivo db.json com os dados dos animais;
- Adicione o comando abaixo para inicialização no package.json:
"scripts": {
  "start": "json-server --watch db.json --port 3000"
}

Inicie o servidor com npm start e acesse http://localhost:3000/pets.

2) Buscando dados da API  
Para buscar os dados da API, crie uma pasta chamada js no seu projeto e, dentro dela, um arquivo chamado api.js.

Adicione o seguinte código no arquivo api.js para buscar os dados da API:

```JavaScript
const api = {
  async buscarInformacoesPets() {
    try {
      const response = await fetch('http://localhost:3000/pets’);
      return await response.json();
    } catch (error) {
      alert(‘Erro ao buscar dados’);
      throw error;
    }
  }
};
export default api;
```

3) Exibindo dados no Front-end  
Para exibir uma lista com os dados dos pets, siga os passos a seguir:

Crie um arquivo chamado ui.js na pasta js do seu projeto;
Adicione uma função renderizarPets que buscará os dados dos pets da API e exibirá esses dados em uma lista HTML.

// js/ui.js

```JavaScript
import api from "./api.js"
const ui = {
  async renderizarPets() {
    const listaPets = document.getElementById("lista-pets");
    try {
      const pets = await api.buscarInformacoesPets();
      pets.forEach(pet => {
        listaPets.innerHTML += `
          <li class="li-pet" data-id="${pet.id}">
            <div class="pet-especie">Espécie: ${pet.especie}</div>
            <div class="pet-nome">Nome: ${pet.nome}</div>
            <div class="pet-raca">Raça: ${pet.raca}</div>
          </li>
        `;
      });
    } catch (error) {
      console.error("Erro ao obter pets:", error);
      alert("Erro ao obter pets. Tente novamente mais tarde.");
    }
  }
};
export default ui;
```

Crie um arquivo main.js para gerenciar o carregamento da página e a chamada da função renderizarPets:

//js/main.js

```JavaScript
import ui from "./ui.js"
document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPets();
});
```

Crie um arquivo HTML básico com um elemento <ul> com o id lista-pets, onde os dados serão inseridos e adicione o código JavaScript para carregar e executar a função renderizarPets quando a página for carregada.

//index.html

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ADOPET</title>
</head>
<body>
  <ul id="lista-pets"></ul>
  <script type="module" src="js/api.js"></script>
  <script type="module" src="js/ui.js"></script>
  <script type="module" src="js/main.js"></script>
</body>
</html>
```

Teste sua aplicação e verifique se os dados dos pets são exibidos corretamente na lista.

Parabéns por concluir essa lista!

### Aula 1 - O que aprendemos?

Nesta aula, você aprendeu a:

- Comunicar-se com o servidor: utilizamos o projeto base e o projeto final para explorar como obter dados de um servidor;
- Configurar um servidor JSON com JSON-Server: Utilizamos o JSON-Server para simular um back-end, criando um arquivo “db.json” e configurando o “package.json” para iniciar a API;
- Fazer uma requisição com Fetch: Criamos um arquivo “api.js” e implementamos o método buscarPensamentos() para fazer uma requisição à API e obter os dados dos pensamentos;
- Renderizar dados na interface: implementamos o arquivo “ui.js” com o método renderizarPensamentos() para atualizar dinamicamente a interface com os pensamentos obtidos da API.

Espero você na próxima aula!

## Aula 2 - 

### Aula 2 -  - Vídeo 1
### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
### Aula 2 -  - Vídeo 6
### Aula 2 -  - Vídeo 7
### Aula 2 -  - Vídeo 8
