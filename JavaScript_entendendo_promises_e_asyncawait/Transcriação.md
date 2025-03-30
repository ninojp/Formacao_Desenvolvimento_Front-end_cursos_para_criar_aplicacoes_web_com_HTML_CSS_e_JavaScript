# Curso Alura: JavaScript: entendendo promises e async/await

## Aula 1 - Construindo a Página

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá, estudante! Boas-vindas a este curso de JavaScript assíncrono. Meu nome é Mônica Hillman, e serei a instrutora que irá te guiar durante toda essa jornada de aprendizado.

Audiodescrição: Mônica se descreve como uma mulher branca, de cabelos lisos castanho-escuros com algumas mechas loiras, e olhos castanho-escuros com um delineado preto. Ela usa óculos de armação arredondada marrom, tem um piercing prateado no septo, veste uma camiseta preta, e está sentada em frente a uma parede clara iluminada em gradiente roxo, com duas prateleiras de madeira dispostas verticalmente contendo livros e enfeites.

O que vamos desenvolver?  
Durante este curso, vamos desenvolver a página de upload de arquivos do CodeConnect. Essa página possui uma barra de navegação lateral e também uma seção principal com duas colunas.

A primeira coluna é a parte onde podemos fazer o upload de uma imagem de prévia do projeto. Podemos testar essa funcionalidade clicando no botão "Carregar imagem" e selecionando um arquivo. Ao fazer isso, a imagem do projeto é atualizada pela que escolhemos no computador.

Na segunda coluna, temos um formulário para descrever o projeto:

No primeiro campo de digitação ("Nome do projeto"), podemos inserir o nome do projeto (colocaremos "Gato bonifácio", por exemplo);
No segundo campo ("Descrição"), colocamos a descrição do projeto (no nosso caso, colocaremos "Portfólio do gato");
No terceiro campo ("Tags"), podemos inserir palavras-chave para encontrar o projeto, como a palavra "Programação", por exemplo. Nesse campo, pressionamos "Enter" para construir um item na lista de tags de acordo com o que digitamos.
Abaixo do formulário, temos as seguintes opções: "Descartar" ou "Publicar". Se clicarmos no botão "Publicar", será retornada a mensagem "Deu tudo certo!" em um alerta.

O que vamos aprender?  
Primeiramente, iremos reforçar alguns conceitos de HTML e CSS. Depois aprenderemos conceitos de assincronicidade, como promises, async e await, blocos try…catch, e funcionalidades de JavaScript que conseguem executar algo após determinado tempo, como o setTimeout().

Esses são conceitos essenciais para pessoas desenvolvedoras no mercado de trabalho. Você irá se deparar com eles no momento de fazer upload de informações para o banco de dados, isto é, para o back-end, ou quando quiser retornar dados já existentes para mostrar dinamicamente na tela.

Quais são os pré-requisitos?  
É importante ter uma base de HTML e CSS, pois apesar de abordar isso neste curso, não iremos nos aprofundar nessas duas tecnologias. Além disso, é importante ter noção de lógica de programação.

Conclusão  
Se você se interessou em aprender todos esses conceitos, matricule-se no curso e nos encontramos no próximo vídeo. Até lá!

### Aula 1 - Preparando o ambiente

Olá, estudante! Desejamos boas-vindas ao curso JavaScript: Entendendo promises e async/await.

No curso, usaremos o editor de código chamado [VSCode](https://code.visualstudio.com/) e iremos construir a página de upload de posts do CodeConnect. Você pode visualizar o layout do projeto acessando o [Figma](https://www.figma.com/community/file/1410409546403062951).

Para baixar os “arquivos base” desse projeto você pode acessar o [repositório do github](https://www.figma.com/community/file/1410409546403062951) ou clicar [aqui para baixar](https://github.com/alura-cursos/3802-javascript-assincrono/archive/refs/heads/projeto-base.zip).

Por fim, para iniciar a execução do seu projeto, use a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) dentro do editor de código VSCode.

Caso tenha dúvidas durante a instalação ou no decorrer do curso, pode contar conosco criando um tópico no fórum ou interagindo no nosso servidor do Discord. Também não deixe de ajudar outros colegas. Vamos construir juntos essa grande comunidade da Alura? :)

### Aula 1 - Menu lateral - Vídeo 2

Transcrição  
Estamos desenvolvendo a página de upload de arquivos da CodeConnect.

Menu lateral

Acessando o projeto no Figma  
Começaremos com o projeto no Figma aberto, onde identificamos que a primeira coisa que precisamos desenvolver é a barra de menu lateral.

Para isso, vamos dividir a tela, de modo que seja possível visualizar metade do Figma e metade do código. Com o Figma à esquerda e o Visual Studio Code à direita, podemos iniciar.

Criando o menu lateral

Inicialmente, vamos acessar o arquivo base index.html, disponibilizado na atividade Preparando o ambiente. Ao final do código, na primeira linha dentro da tag body, vamos adicionar a tag aside. Essa tag representa o menu lateral, e no escopo dela, vamos começar a inserir os outros elementos.

index.html:

```htnl
<!-- código omitido -->

<body>
    <aside>

    </aside>
    <script src="scripts.js"></script>
</body>

<!-- código omitido -->
```

Adicionando o logotipo  
O primeiro elemento que vamos adicionar será o logotipo do CodeConnect. No escopo da tag aside, usaremos a tag img com o atributo src="./img/Logo.svg". Também vamos colocar um texto alternativo (atributo alt), que será "Logo do CodeConnect".

```htnl
<!-- código omitido -->

<aside>
    <img src="./img/Logo.svg" alt="Logo do CodeConnect">
</aside>

<!-- código omitido -->
```

Criando o menu de navegação  
Em seguida, temos o menu de navegação. Por isso, vamos utilizar a tag nav. No escopo dela, precisamos passar a lista de links, então usamos a tag ul, cuja classe será lista-links.

```htnl
<!-- código omitido -->

<aside>
    <img src="./img/Logo.svg" alt="Logo do CodeConnect">
    <nav>
        <ul class="lista-links">
        
        </ul>
    </nav>
</aside>

<!-- código omitido -->
```

Adicionando os itens do menu de navegação  
O primeiro item da lista de links deve ser inserido no escopo da tag li, que vamos adicionar em ul. Esse primeiro link será o botão "Publicar", então vamos colocar uma âncora (tag a) com o atributo href recebendo uma hashtag (#), por enquanto. Além disso, a classe dessa âncora será link-destaque, para facilitar a estilização. Dentro de a, digitaremos o texto "Publicar".

Construímos esse item da lista como uma âncora pois, mesmo aparentando ser um botão visualmente, ele não tem a funcionalidade de gerar alguma ação com o clique, sem ser levar para outra tela. Por isso, podemos utilizar um link (a) em vez de um botão (button).

```htnl
<!-- código omitido -->

<aside>
    <img src="./img/Logo.svg" alt="Logo do CodeConnect">
    <nav>
        <ul class="lista-links">
            <li>
                <a href="#" class="link-destaque">Publicar</a>
            </li>
        </ul>
    </nav>
</aside>

<!-- código omitido -->
```

Podemos dar continuidade aos demais links, utilizando um novo li abaixo do primeiro. Dentro dele, vamos colocar outra âncora (a), também com o atributo href="#", mas agora colocaremos uma imagem (img) no escopo dela, com o atributo src igual a ./img/feed.svg entre aspas duplas.

Feito isso, na linha abaixo, adicionaremos o texto "Feed".

```htnl
<!-- código omitido -->

<aside>
    <img src="./img/Logo.svg" alt="Logo do CodeConnect">
    <nav>
        <ul class="lista-links">
            <li>
                <a href="#" class="link-destaque">Publicar</a>
            </li>
            <li>
                <a href="#">
                    <img src="./img/feed.svg">
                    Feed
                </a>
            </li>
        </ul>
    </nav>
</aside>

<!-- código omitido -->
```

Agora temos um item da lista contendo um link, que será representado por uma imagem e um texto. Isso se repete para os links de "Perfil", "Sobre nós" e "Sair", então apenas repetiremos o mesmo processo. Ao final, teremos o seguinte resultado do menu de navegação:

```htnl
<!-- código omitido -->

<aside>
    <img src="./img/Logo.svg" alt="Logo do CodeConnect">
    <nav>
        <ul class="lista-links">
            <li>
                <a href="#" class="link-destaque">Publicar</a>
            </li>
            <li>
                <a href="#">
                    <img src="./img/feed.svg">
                    Feed
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="./img/account_circle.svg">
                    Perfil
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="./img/info.svg">
                    Sobre nós
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="./img/logout.svg">
                    Sair
                </a>
            </li>
        </ul>
    </nav>
</aside>

<!-- código omitido -->
```

Estilizando o corpo da aplicação  
Uma vez colocados os links faltantes no código, podemos começar a estilização da aplicação. Para isso, vamos abrir o explorador de arquivos à esquerda e abrir o arquivo styles.css.

Feito isso, vamos iniciar a estilização ao final do código, utilizando o seletor de body para definir uma cor de fundo para a aplicação geral, não somente do menu lateral.

Para isso, usaremos a propriedade background-color, que receberá a variável var(--background-color), construída anteriormente no projeto base.

Na sequência, podemos definir a cor do texto (color) como var(--text-color). Assim, teremos a cor de fundo escura e a cor dos textos como branca.

Depois, podemos definir a fonte (font-family) como var(--font-family).

styles.css:

```CSS
/* código omitido */

body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);
}
```

No caso acima, deixamos as variáveis com nomes ideais para adicionar às propriedades correspondentes, mas agora precisamos começar a posicionar os elementos do body.

Podemos fazer isso através da propriedade display: flex. Agora, todos os elementos do body se tornarão flex items e serão posicionados lado a lado pela configuração padrão do flex-direction.

Depois, podemos usar as propriedades justify-content: center e align-items: start. Isso irá centralizar todos os elementos do body e alinhá-los pelo início do elemento em si. Dessa forma, o topo dele será o foco do alinhamento.

```CSS
/* código omitido */

body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);

    display: flex;
    justify-content: center;
    align-items: start;
}
```

Feito isso, podemos adicionar um height de 100vh, que definirá a altura da tela como 100% da altura da tela da pessoa usuária. Depois, usaremos um gap de 27px para fazer o espaçamento dos itens do body, além de um padding de 56px acima e abaixo, e 0 nas laterais.

```CSS
/* código omitido */

body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);

    display: flex;
    justify-content: center;
    align-items: start;

    height: 100vh;
    gap: 27px;
    padding: 56px 0;
}
```

Você pode conferir essas configurações no Figma do projeto.

Estilizando o menu lateral  
Agora vamos estilizar o aside, logo após o body. Primeiramente, precisamos colocar um background-color diferente: nesse caso, var(--itens-background).

Depois, precisamos arredondar a borda da barra lateral. Faremos isso com a propriedade border-radius com o valor de 10px. Além disso, podemos definir uma altura (height) de 100%, de modo que o menu lateral ocupe 100% do espaço disponível para ele.

```CSS
/* código omitido */

aside {
    background-color: var(--itens-background);
    border-radius: 10px;
    height: 100%;
}
```

Em seguida, vamos utilizar um padding de 40px acima e abaixo, 16px nas laterais. Além disso, vamos adicionar a propriedade text-align recebendo o valor center.

```CSS
/* código omitido */

aside {
    background-color: var(--itens-background);
    border-radius: 10px;
    height: 100%;
    padding: 40px 16px;
    text-align: center;
}
```

Estilizando os links do menu lateral  
Nesse momento, podemos utilizar a extensão Live Server para visualizar as alterações realizadas através do código CSS. Com o navegador aberto, podemos visualizar que alguns padrões foram estilizados, como o fundo da aplicação e o fundo do menu lateral.

No entanto, ainda precisamos estilizar os links. Dito isso, ao final do código de styles.css, vamos selecionar a classe .lista-links. No escopo dela, vamos colocar primeiro a propriedade display: flex seguida de flex-direction: column.

Isso dará a possibilidade de utilizar o gap para fazer um espaçamento entre os links. Sendo assim, vamos adicionar a propriedade gap com o valor de 40px. Feito isso, vamos definir uma margin-top de 80px, um align-items com o valor center, e um list-style-type com o valor none.

```CSS
/* código omitido */

.lista-links {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 80px;
    align-items: center;
    list-style-type: none;
}
```

Dessa forma, conseguimos posicionar tudo corretamente na tela. Alinhamos os itens ao centro e também tiramos os estilos padrão da lista, que são os pontos à esquerda de cada item.

Por fim, vamos utilizar o seletor .lista-links li a, que também receberá display: flex, além de flex-direction: column. Com isso, conseguimos colocar as imagens acima do texto.

Também colocaremos um gap de 10px, seguido de um align-items: center. Com isso, definimos um espaçamento entre as imagens e os textos, além de alinhá-los ao centro.

```CSS
/* código omitido */

.lista-links li a {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
```

Para finalizar, vamos utilizar a propriedade text-decoration: none para remover o estilo de link, em que temos uma linha abaixo do texto. Depois, definiremos a cor do texto como var(--secondary-color). Por último, iremos configurar a font-size como 22px.

```CSS
/* código omitido */

.lista-links li a {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-decoration: none;
    color: var(--secondary-color);
    font-size: 22px;
}
```

Conclusão  
Com isso, conseguimos estilizar todos os itens da lista, mas ainda existem algumas coisas a serem estilizadas, como o destaque do botão "Publicar", por exemplo.

Daremos continuidade à estilização no próximo vídeo!

### Aula 1 - Seção principal - Vídeo 3

Transcrição  
Estamos desenvolvendo o menu lateral da aplicação e precisamos adicionar alguns estilos no primeiro botão para destacá-lo.

Ao final do arquivo styles.css, vamos utilizar o seletor .lista-links li:first-of-type a {}. Esse seletor vai entrar na lista de links, pegar o primeiro li, que definimos com first-of-type, e dentro desse primeiro li, vai pegar a primeira âncora.

Vamos definir que esse seletor vai receber o color: var(--primary-color). Com isso, o primeiro texto da lista de links ficará com a fonte em verde.

styles.css

```CSS
.lista-links li:first-of-type a {
    color: var(--primary-color);
}
```

Agora, precisamos selecionar a classe .link-destaque, onde vamos colocar um border de 1px solid var(--primary-color). Depois, podemos adicionar um padding de 12 px em cima e embaixo, e 30 px aos lados. Em seguida, adicionamos um border-radius de 8px.

```CSS
.link-destaque {
    border: 1px solid var(--primary-color);
    padding: 12px 30px;
    border-radius: 8px;
}
```

Dessa maneira, definimos a borda com a cor verde, além de um espaçamento interno e um arredondamento nas bordas.

Menu lateral de um aplicativo de fundo escuro com o logo 'code connect' no topo e os seguintes itens listados: botão 'Publicar' destacado em verde, e os itens 'Feed', 'Perfil', 'Sobre nós', e 'Sair', com ícones representativos ao lado de cada texto, em cinza.
Criando a seção principal
Podemos continuar a adicionar os elementos da aplicação. Conferindo o Figma do projeto, conferimos que ainda precisamos adicionar uma seção principal. Dentro dessa seção principal temos uma imagem, que está em cima de um quadrado. Abaixo dela, temos um botão para "Carregar imagem", o nome do arquivo da imagem carregado e um formulário com informações sobre ela.

Vamos abrir o index.html para implementar essa seção. Após o fechamento do aside, vamos abrir um espaço pressionando "Enter" três vezes.

Nesse espaço, vamos abrir a tag main. Dentro dela, vamos ter uma div com a classe container-upload-imagem. Dentro dela, vamos colocar uma div class='container-image'.

Depois, vamos colocar uma imagem com a tag img, cujo src será ./img/imagem1.png. O texto alternativo, na propriedade alt, vai ficar vazio por enquanto. Em seguida, vamos adicionar uma classe (class) chamada main-imagem.

Depois do fechamento da div class='container-imagem', vamos pressionar um "Enter" e adicionar um botão (tag button), cujo texto será "Carregar imagem".

Em seguida, vamos adicionar uma nova div com classe container-imagem-nome. Dentro disso, vamos inserir um parágrafo (tag p), que vai receber image_projeto.png, assim como está no Figma. Depois, vamos colocar uma tag img com a src igual a ./img/close.svg.

index.html

```html
<main>
        <div class="container-upload-imagem">
                <div class="container-imagem">
                        <img src="./img/imagem1.png" alt="" class="main-imagem">
                </div>
                <button id="upload-btn">Carregar imagem</button>
                <div class="container-imagem-nome">
                        <p>image_projeto.png</p>
                        <img src="./img/close.svg">
                </div>
        </div>
</main>
```

Conseguimos fazer a primeira coluna do main, com a imagem carregada, o botão e o nome dessa imagem. Agora, precisamos fazer o formulário.

Criando o formulário  
Após o fechamento da div de container-upload-imagem, vamos abrir um espaço e adicionar uma nova div com a classe container-descricao. Dentro dessa div, vamos colocar um h2 com o texto Novo Projeto.

Depois, vamos inicializar um formulário com a tag form, que vai ter uma div contendo uma label for="nome" com o valor de Nome do Projeto. Depois, vamos colocar um input do tipo text com o id igual a nome e também o name como nome.

Para cada campo do nosso formulário, vamos precisar inserir um label e um input dentro de uma div, para depois facilitar na hora de estilizar.

Quando inserimos um campo de digitação grande, podemos utilizar a tag textarea em vez de input, como faremos no caso do campo de descrição!

Por fim, precisamos colocar a lista de tags previamente inseridas. Para isso, antes do fechamento do formulário, podemos adicionar um ul. Dentro desse ul, vamos ter a classe lista-tags. Ela conterá um li e um p. O p vai ter o texto de Front-end. Depois, podemos colocar uma imagem cuja fonte será ./img/close-black.svg.

Por fim, precisamos inserir os botões de "Descartar" e "Publicar". Eles serão colocados após o ul da lista de tags, então vamos abrir um espaço com "Enter" e adicionar uma div com a classe chamada container-botoes.

Dentro da div, vamos colocar o primeiro botão com a classe botao-descartar e o texto "Descartar". Depois, embaixo, vamos adicionar mais um botão, agora com a classe botao-publicar e o texto "Publicar".

```html
<div class="container-descricao">
        <h2>Novo projeto</h2>
        <form>
                <div>
                        <label for="nome">Nome do projeto</label>
                        <input type="text" id="nome" name="nome" />
                </div>
                <div>
                        <label for="descricao">Descricao</label>
                        <textarea id="descricao" name="descricao"></textarea>
                </div>
                <div>
                        <label for="categoria">Tags</label>
                        <input type="text" id="categoria" name="categoria" />
                </div>
                <ul class="lista-tags">
                        <li>
                                <p>Front-end</p>
                                <img src="./img/close-black.svg">
                        </li>
                </ul>
                <div class="container-botoes">
                        <button class="botao-descartar">Descartar</button>
                        <button class="botao-publicar">Publicar</button>
                </div>
        </form>
</div>
```

Próximos passos  
Conseguimos implementar toda a parte do HTML da nossa segunda seção! Agora, precisamos estilizar todo o restante da aplicação. Vamos para o próximo vídeo, então, para nos aventurar bastante com CSS!

### Aula 1 - Lista de links

Você está desenvolvendo uma lista de links para um projeto. Com base nas técnicas aprendidas, qual das seguintes abordagens você adotaria para estilizar os links da sua sidebar, garantindo que um dos links da lista seja destacado?

Resposta:

```CSS
.lista-links li a {
    color: var(--secondary-color);
}
.link-destaque {
    background-color: var(--primary-color);
    color: white;
    padding: 12px 30px;
    border-radius: 8px;
}
```

> Esta é a abordagem correta, pois aplica um estilo distinto ao link "Publicar" usando a classe .link-destaque, destacando-o visualmente dos outros links através de cor de fundo, cor do texto, padding e bordas arredondadas.

### Aula 1 - Estilos específicos - Vídeo 4

Transcrição  
Construímos os elementos HTML da nossa seção principal e agora vamos começar a estilizá-los. Para isso, vamos abrir o Live Server ao lado esquerdo da nossa tela e abrir o styles.css ao lado direito, para acompanharmos as mudanças em tempo real.

Estilizando a seção principal
Ao final do arquivo, vamos começar selecionando o main, colocando um background-color de var(--itens-background). Depois, vamos colocar um border-radius de 10 pixels, um padding de 32 pixels, um display: flex e um gap de 24 pixels.

styles.css

```CSS
main {
    background-color: var(--itens-background);
    border-radius: 10px;
    padding: 32px;
    display: flex;
    gap: 24px;
}
```

Salvamos e atualizamos a página para aplicar os novo estilos.

Agora, vamos selecionar o h2 e definir uma font-size de 26 pixels, um margin-bottom de 40 pixels e um font-weight de 600.

```CSS
h2 {
    font-size: 26px;
    margin-bottom: 40px;
    font-weight: 600;
}
```

Até agora, adicionamos uma cor de fundo para ficar igual à do sidebar, arredondamos as bordas, colocamos o espaçamento interno, também trocamos a nossa fonte e colocamos uma margem para separar o nosso h2, que é o título do formulário. Também colocamos um display: flex no main para adicionar a coluna de imagem ao lado da coluna de formulário.

Estilizando o formulário  
Agora vamos selecionar o form, em que vamos inserir um display: flex e um flex-direction de column, tudo isso para possibilitar a inserção do nosso gap, que vai ser de 24 pixels.

```CSS
form {
    display: flex;
    flex-direction: column;
    gap: 24px
}
```

Neste momento, a instrutora percebe que algumas mudanças não ocorreram por erros no index.html: é importante que o textarea tenha o fechamento da tag em si, não dé possível fazer um auto-fechamento em que a tag fecha já na abertura. Ao ajustar isso, ela salva o arquivo e todos os estilos definidos até agora aparecem na tela.

Agora vamos selecionar o form div label, que vai receber um font-size de 18 pixels, um font-weight de 400, um display: block e um margin-bottom de 8 pixels.

```CSS
form div label {
    font-size: 18px;
    font-weight: 400;
    display: block;
    margin-bottom: 8px;
}
```

Salvamos e atualizamos o projeto. Agora fizemos várias estilizações diretamente no label, o texto que fica em cima do campo de digitação.

Em seguida, vamos selecionar o form div input e também o textarea. Nele, vamos colocar os seguintes estilo: um width de 100%, um padding de 8 pixels em cima e embaixo e, aos lados, 16 pixels. Depois, vamos colocar um background-color, que vai receber um secondary-color. Depois, podemos definir um border: none e também um border-radius de 4 pixels. Também definimos a font-family como var(--font-family) e também um line-height de 22.5 pixels.

```CSS
form div input,
textarea {
    width: 100%;
    padding: 8px 16px;
    background-color: var(--secondary-color);
    border: none;
    border-radius: 4px;
    font-family: var(--font-family);
    line-height: 22.5px;
}
```

Colocamos 100% de largura para os campos de digitação do formulário, trocamos a fonte deles, tiramos a borda e arredondamos os cantos.

Agora vamos selecionar novamente o form div input para definir a altura desses campos. Ele vai receber um height de 39 pixels:

```CSS
form div input {
    height: 39px;
}
```

Já o textarea vai receber uma altura de 161 pixels. Não precisamos especificar tão bem o seletor do textarea, porque ele aparece somente uma vez no nosso código. Então:

```CSS
texarea {
    height: 161px;
}
```

Com isso, terminamos a estilização do formulário.

Observando o Live Server, alguns elementos podem estar aparecendo um pouco fora do escopo, mas porque estamos com a tela dividida ao meio. Podemos dar continuidade na estilização, agora, na lista de tags e os botões.

Estilizando a lista de tags  
Em seguida, vamos selecionar o .lista-tags li, que vai receber um display: flex, um background-color de var(--secondary-color) e também um color de var (--background-color). Então, posicionamos o texto e a imagem do "x" de fechar essa tag um ao lado do outro com o display: flex. Depois, trocamos a cor tanto do fundo quanto do texto.

Para dar continuidade, vamos definir um gap de 10 pixels para estabelecer um espaçamento entre o texto e a imagem. Depois, vamos colocar um padding de 4 pixels em cima e embaixo e 8 pixels aos lados. Também vamos adicionar um border-radius de 4 pixels. Agora, nossa tag está com um estilo mais semelhante ao do Figma.

```CSS
.lista-tags li {
    display: flex;
    background-color: var(--secondary-color);
    color: var(--background-color);
    gap: 10px;
    padding: 4px 8px;
    border-radius: 4px;
}
```

Também precisamos colocar um display: flex na lista-tags, porque quando tivermos mais lis dentro dessa lista-tags, vamos precisar que eles fiquem um ao lado do outro, e o display: flex possibilita isso.

```CSS
.lista-tags {
    display: flex;
}
```

Estilizando os botões
Vamos para os próximos elementos do formulário: os botões. Vamos selecionar a classe container-botoes, que vai ter um display: flex para deixar os botões uns ao lado dos outros. Vamos definir também um gap de 24 pixels para espaçá-los e um justify- content: como space-between.

```CSS
.container-botoes {
    display: flex;
    gap: 24px;
    justify-content: space-between;
}
```

Depois, vamos selecionar o .container-botoes button, e eles vão receber um width de 50%, uma largura de 50% e um padding de 12 pixels em cima e embaixo. Queremos 32 pixels somente na direita, então definimos 12px 32px 12px 12px. Vamos colocar também um text-align de center e um border-radius de 8 pixels.

Também precisamos trocar a fonte para var(--font-family), um font-size de 18 pixels e um font-weight de 500.

```CSS
.container-botoes button {
    width: 50%;
    padding: 12px 32px 12px 12px;
    text-align: center;
    border-radius: 8px;
    font-family: var(--font-family);
    font-size: 18px;
    font-weight: 500;
}
```

Agora, vamos precisar estilizar aspectos mais específicos. Por exemplo, o botao-descartar tem uma determinada cor, que vai ser o background-color de itens-background. Consequentemente, vamos precisar trocar a cor da fonte para primary-color. Também podemos colocar um border de 1px solid var(--primary-color) e também um position: relative, que vai permitir manipular o ícone que fica ao lado do texto desses botões.

```CSS
.botao-descartar {
    background-color: var(--itens-background);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    position: relative;
}
```

Vamos selecionar o botao-descartar, agora com ::after. Ele vai receber um content com duas aspas (""), ou seja, uma string vazia. Depois, vamos colocar o background-image nessa string vazia, que vai receber o url("./img/trash.svg"), que é o ícone de lixeira. Depois, vamos colocar o background-size como contain e o background-repeat como no-repeat.

Depois, precisamos definir o tamanho desse ícone, que vai ser 15 pixels de largura (width) e 15 pixels de altura (height). Depois, precisamos colocar um inline-block no display para possibilitar essa mudança de altura e largura na imagem.

Depois, adicionamos um position: absolute para conseguir manipular o espaço que ela vai ocupar dentro do botão. Vamos colocar um top: 50% para mudar realmente onde está aparecendo esse nosso ícone. Depois, vamos colocar um transform que vai receber um translateY(50%).

Conseguimos, através do position, centralizar esse nosso ícone. Depois, conseguimos colocar um margin-left de 8 pixels para espaçá-lo do texto.

```CSS
.botao-descartar::after {
    content: "";
    background-image: url("./img/trash.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px;
}
```

Desafio  
Tendo em mente todas as configurações necessárias para construir essa estilização do botão de descartar, queremos te desafiar a construir o botão de publicar, praticando tudo o que você aprendeu neste vídeo. Afinal, é muito comum surgirem esses botões com ícones ao lado do texto no dia a dia de trabalho!

Nos encontramos no próximo vídeo para continuar as estilizações da página.

### Aula 1 - Envio de arquivos - Vídeo 5

Transcrição  
Continuaremos na estilização do nosso projeto, porque queremos que ele fique bem apresentável antes de partir para o JavaScript.

Finalizando as estilizações
Agora, ao final do nosso styles.css, vamos começar a estilizar o container-descricao. Vamos definir uma largura (width) de 422 pixels para que esse campo ocupe um espaço menor e fixo, comparado com a coluna do formulário.

styles.css

```CSS
.container-descricao {
    width: 422px;
}
```

Em seguida, vamos começar a estilizar a nossa imagem, selecionando a main-imagem. Primeiro, vamos definir um border-radius de 8 pixels. Depois, vamos definir um height de 100%, um object-fit de cover. Com isso, conseguimos definir a altura, como a imagem vai ser renderizada dentro desse elemento, e também colocamos uma borda.

```CSS
.main-imagem {
    border-radius: 8px;
    height: 100%;
    object-fit: cover;
}
```

Agora vamos selecionar o container-imagem. Ele vai receber os seguintes estilos: um height de 368px, um padding de 24 pixels em cima e embaixo e 16 pixels aos lados, e depois um background-color de var(--secondary-color). Vamos aproveitar e colocar um border-radius de 8px. Com isso, temos aquele espaço cinza que fica embaixo da imagem, conforme o projeto no Figma.

```CSS
.container-imagem {
    height: 368px;
    padding: 24px 16px;
    background-color: var(--secondary-color);
    border-radius: 8px;
}
```

Agora vamos selecionar o container-upload-imagem button, o botão de upload que fica embaixo da imagem.

Ele vai possuir uma margem (margin) de 16 pixels em cima, zero aos lados, e 8 pixels embaixo. Depois, vamos colocar um background-color de var(--items-background), e um border de 1px de var(--secondary-color). Com isso, definimos um espaçamento entre a imagem e o botão, e depois, definimos as cores de fundo e das bordas conforme o Figma.

Agora, precisamos arredondar essa borda com border-radius de 8px, e trocar a cor do texto para a var(--secondary-color), porque não estava dando para ler. Depois, podemos colocar um width de 100%, para ele ocupar toda a largura possível. Depois, definiremos um text-align: center, para o texto ficar centralizado dentro desse botão.

Também podemos colocar um padding de 12px, para realizar o espaçamento interno. E vamos trocar a fonte, font-family, para a variável (--font-family). Depois, vamos poder utilizar o font-weight de 600, e o font-size de 18px. Depois, podemos colocar um position: relative.

```CSS
.container-upload-imagem button {
    margin: 16px 0 8px 0;
    background-color: var(--itens-background);
    border: 1px solid var(--secondary-color);
    border-radius: 8px;
    color: var(--secondary-color);
    width: 100%;
    text-align: center;
    padding: 12px;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 18px;
    position: relative;
}
```

Vamos precisar trabalhar também com o ícone dentro desse botão. Para isso, vamos selecionar o container-upload-imagem button::after, semelhante ao que fizemos no botão de descartar e de publicar. Então, vamos colocar um content vazio, um background-image como url(). Essa URL vai receber o ícone de upload, "./img/upload.svg".

Depois, inserimos um background-size de contain, um background-repeat de no-repeat. Você pode também já colocar o display: inline-block, para possibilitar o width de 15px, e o height de 15px.

Agora, vamos lidar com o posicionamento desse ícone por meio do position: absolute. E vamos colocar o top: 50% e o transform de translateY(), para receber -50%, o que vai centralizar o nosso ícone dentro do botão. Depois, fazemos o espaçamento entre o texto e o ícone, com margin-left de 8px.

```CSS
.container-upload-imagem button::after {
    content: "";
    background-image: url("./img/upload.svg");
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px
}
```

Praticamos novamente como colocar o ícone dentro do botão. Agora, só falta estilizar o nome da imagem, por meio da classe container-imagem-nome. Vamos definir um display: flex para posicionar o ícone ao lado do texto. Também vamos colocar um gap de 8px, uma cor de var(--secondary-color), além de um font-size de 15px.

```CSS
.container-imagem-nome {
    display: flex;
    gap: 8px;
    color: var(--secondary-color);
    font-size: 15px;
}
```

Funcionalidade do botão de carregar imagem
Agora que terminamos as estilizações, precisamos que esse botão de upload da imagem seja funcional, ou seja, que ele possibilite realmente fazer o upload de uma imagem. Então, vamos ao index.html para trocar o tipo desse botão.

No botão de carregar imagem, `<button>`Carregar imagem`</button>`, vamos utilizar um id de upload-btn:

index.html

```html
<button id="upload-btn">Carregar imagem</button>
```

Na linha de baixo, precisamos adicionar um input cujo tipo será file e o id será imagem-upload. Depois podemos determinar, através do accept, que tipo de arquivo queremos aceitar dentro desse input. Queremos que sejam somente imagens, então colocamos image/. Depois do accept, podemos colocar um style igual a display: none.

```html
<input type="file" id="image-upload" accept="image/" style="display: none" />
```

Aqui estamos colocando o estilo inline, mas poderíamos colocar no CSS também, de acordo com a classe que colocássemos nesse input.

Mas o objetivo não é fazer esse input aparecer na tela. Queremos utilizar a funcionalidade dele, mas associado com o botão de carregar imagem. Então, para isso, vamos precisar usar um pouco de JavaScript.

Vamos abrir o arquivo scripts.js e selecionar esses dois itens que acabamos de construir.

Primeiramente, vamos criar o const uploadBtn, que vai receber o document.getElementById() com o id que colocamos dentro do botão como parâmetro, "upload-btn".

Depois, precisamos criar o const inputUpload, que vai receber um document.getElementById() com o "image-upload" como parâmetro.

scripts.js

```JavaScript
const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload")
```

Construímos duas variáveis, e cada uma dessas variáveis vai receber um elemento dentro do nosso documento HTML, de acordo com o id dele.

Agora queremos que, quando clicarmos no botão, ele ative a funcionalidade de receber imagem. Então, vamos precisar chamar o uploadBtn e aplicar nele o método .addEventListener().

Dentro da addEventListener(), precisamos passar duas informações. A primeira: qual é o evento que queremos ouvir? Vai ser o clique, "click".

A segunda: o que queremos que aconteça quando esse evento ocorrer? Precisamos definir essa ação com uma função de callback. Então, para isso, vamos adicionar como parâmetro o () => {}. Dentro das chaves, vamos chamar a variável inputUpload com o método .click().

```JavaScript
uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})
```

Ou seja: no momento que clicarmos no botão, ele vai ser associado com o nosso input que está escondido para possibilitar o envio de imagens.

Para testar essa funcionalidade, o import desse script deve estar correto no arquivo HTML:

index.html

```html
<script src="scripts.js"></script>
```

Agora, podemos testar. Ao clicar em "Carregar imagem", a página já nos oferece o explorador de arquivos para selecionar o arquivo a ser carregado.

Próximos passos  
A seguir, precisamos trabalhar com a leitura desse arquivo, atualização da nossa tela com a imagem de prévia, e também fazer uma simulação de upload de arquivo. Faremos tudo isso na próxima aula!

### Aula 1 - Para saber mais: validação de imagens no upload

Quando estamos criando um site ou aplicativo que permite aos usuários fazer upload de imagens, é muito importante garantir que esses arquivos sejam realmente imagens e que tenham um tamanho adequado. Isso ajuda a manter nosso site seguro, rápido e amigável. Para fazer isso, podemos usar JavaScript e HTML5. Vamos explorar como!

Por que Validar?

Antes de mais nada, vamos entender por que a validação é tão importante:

- Segurança: Evita uploads de arquivos maliciosos disfarçados de imagens.
- Desempenho: Imagens muito grandes podem deixar seu site lento.
- Experiência do Usuário: Garante que o conteúdo seja exibido corretamente para todos os usuários.

Usando HTML5

HTML5 trouxe várias melhorias para a web, incluindo formas mais fáceis de validar arquivos antes do upload. Veja como você pode fazer isso diretamente no seu formulário de upload:

`<input type="file" id="imageUpload" accept="image/png, image/jpeg" />`

O atributo accept especifica os tipos de arquivos que o usuário pode selecionar. Isso já é uma forma de validação, pois limita as escolhas a arquivos PNG e JPEG, que são formatos comuns de imagem.

Usando JavaScript para Validação Avançada  
Embora o HTML5 ofereça uma forma básica de validação, podemos usar JavaScript para fazer verificações mais detalhadas, como o tamanho do arquivo. Veja como:

1. Capturando o Arquivo  
Primeiro, precisamos obter o arquivo que o usuário deseja fazer upload. Isso pode ser feito quando o usuário seleciona um arquivo:

```JavaScript
document.getElementById('imageUpload').addEventListener('change', function(event) {
  var file = event.target.files[0];
  // Agora temos o arquivo e podemos fazer mais validações
});
```

2. Validando o Tipo de Arquivo
Mesmo especificando o atributo accept no HTML, é uma boa prática verificar o tipo de arquivo novamente com JavaScript:

```JavaScript
if (!file.type.match('image/png') && !file.type.match('image/jpeg')) {
  alert('Por favor, selecione uma imagem PNG ou JPEG.');
  return;
}
```

3. Verificando o Tamanho do Arquivo
Também é importante verificar o tamanho do arquivo para evitar imagens muito grandes. Isso pode ser feito facilmente com JavaScript:

```JavaScript
// Vamos limitar o tamanho a 2MB
if (file.size > 2 * 1024 * 1024) {
  alert('A imagem deve ter no máximo 2MB.');
  return;
}
```

Conclusão  
Validar imagens antes do upload é uma prática essencial para qualquer site ou aplicativo que aceite esse tipo de conteúdo. Usando HTML5 e JavaScript, podemos facilmente garantir que apenas arquivos adequados sejam enviados, melhorando a segurança, o desempenho e a experiência do usuário. Experimente implementar essas técnicas no seu próximo projeto!

### Aula 1 - Faça como eu fiz: criando o visual da página

Desenvolva a interface visual da página de upload de arquivos do CodeConnect e integre o botão de carregar arquivos com o script. Para isso, você deve fazer o seguinte:

- Adicionamos um botão de "Carregar imagem" para permitir que o usuário selecione uma imagem para o projeto.
- Criamos um evento de clique para o botão de "Carregar imagem" que aciona o clique no input de upload de imagem.
- Adicionamos um input do tipo "file" com o id "image-upload" e o atributo "accept" definido como "image/" para permitir apenas a seleção de arquivos de imagem.
- Criamos um container para exibir a imagem selecionada pelo usuário, com a classe "container-imagem".
- Adicionamos um botão de fechar na imagem selecionada, representado pelo ícone "close.svg".
- Adicionamos um container para exibir o nome da imagem selecionada, com a classe "container-imagem-nome".
- Adicionamos um formulário para o usuário inserir o nome, descrição e tags do projeto.
- Estilizamos o formulário e os elementos relacionados, como labels, inputs e textarea.
- Adicionamos uma lista de tags para exibir as tags selecionadas pelo usuário.
- Estilizamos a lista de tags e adicionamos um botão de fechar em cada tag, representado pelo ícone "close-black.svg".
- Adicionamos botões de "Descartar" e "Publicar" para permitir que o usuário descarte o projeto ou o publique.
- Estilizamos os botões e adicionamos ícones representando as ações de descartar e publicar.

Bora lá?

Opinião do instrutor

É bastante trabalho, mas você pode contar comigo! Caso precise, confira o código do projeto que foi desenvolvido [clicando nesse link](https://github.com/alura-cursos/3802-javascript-assincrono/commit/6e8a6e1aa3e791e9dfb9dd6cebf658f418c1c26b#diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051).

### Aula 1 - Lista de exercícios da aula 1

O que é:

Boas-vindas à nossa lista de exercícios "Mão na massa", um caminho prático e envolvente para aprender e aprimorar suas habilidades em tecnologia. Aqui, você não encontrará longas leituras teóricas ou explicações abstratas. Em vez disso, nossos exercícios são projetados para colocar você no centro do processo de aprendizado, permitindo que você construa, experimente e explore conceitos tecnológicos de forma direta e aplicada.

Para que serve:

Esta lista é uma ferramenta dinâmica para aprender, reforçar e aprimorar habilidades práticas em programação e desenvolvimento web. Cada exercício é uma oportunidade de aplicar conhecimentos teóricos em cenários reais, preparando você não apenas para entender a tecnologia, mas para utilizá-la de maneira eficaz e criativa em seus próprios projetos ou no ambiente de trabalho.

Como fazer:

1. Leia cada exercício com atenção: comece entendendo o cenário proposto e o que se espera como resultado;

2. Escreva o código: utilize o ambiente de codificação de sua escolha para escrever e testar o seu código. Não se preocupe em acertar de primeira, a prática leva à perfeição;

3. Verifique o gabarito: após tentar resolver o exercício, compare seu código com o gabarito fornecido em “Opinião do instrutor”. Isso ajudará a identificar áreas de melhoria e consolidar o aprendizado;

4. Repita: a repetição é chave para o aprendizado. Tente fazer os exercícios mais de uma vez, aplicando melhorias e variantes.

Lembre-se, cada desafio é uma chance de crescer. Não se desanime com os erros, eles são degraus no caminho do aprendizado. E acima de tudo, divirta-se! O aprendizado mais eficaz acontece quando nos engajamos e nos interessamos pelo que estamos fazendo.

Não se esqueça que estamos no Fórum e no Discord para te ajudar!

Bons estudos!

Lista de exercícios da aula 1  
Exercício 1) - Criando a barra lateral de navegação

Conteúdo:

Você está trabalhando na criação da barra lateral de navegação para a página de upload de arquivos da MundoPet. Para isso, você deve seguir as especificações do Figma.

Exercício 2) - Estilizando o primeiro botão do menu lateral

Conteúdo:

Você está trabalhando na estilização de um menu lateral do MundoPet. Sua tarefa é aplicar um estilo especial ao primeiro botão do menu, destacando-o dos demais. Você pode conferir os estilos necessários no Figma. Coloque o código CSS necessário no arquivo styles.css.

Exercício 3) - Criando a primeira coluna da estrutura principal

Conteúdo:

Você está desenvolvendo a estrutura principal de uma página de upload do MundoPet, que inclui uma imagem com botão de carregamento, o nome da imagem, e um formulário. Você deve começar a construção pela primeira coluna dessa tela.

Para isso, você irá precisar criar a seção principal da aplicação com o auxílio da tag <main> e construir os elementos necessários dentro dela:

- Uma div com a classe container-upload-imagem
- Outra div com a classe container-imagem
- Uma imagem com classe mainImage
- Um botão com o texto "Carregar Imagem"
- Um parágrafo com um texto referente ao nome da imagem.
- Um ícone de fechar com src="img/close.svg"
- Implemente o código HTML necessário no arquivo index.html.

Exercício 4) - Criando o formulário de upload

Conteúdo:

Você trabalha com desenvolvimento web e começou a desenvolver o HTML da seção principal da página de upload de arquivos do MundoPet. Agora, você precisa desenvolver a segunda coluna do projeto, que consiste em um formulário.

Para isso, você deve construir os seguintes elementos:

- Contêiner Principal: Comece com um contêiner principal para o formulário. Isso ajuda a organizar e centralizar o layout do formulário na página.
- Título do Formulário: Inclua um título claro e informativo no topo do formulário para identificar o propósito, por exemplo, "Novo Projeto".
- Formulário HTML: Use a tag `<form>` para envolver todos os elementos do formulário. Isso facilita a captura e o processamento das informações inseridas.

Dentro do formulário, você deverá criar novos elementos:

- Campo Nome do Projeto: Adicione um campo de entrada de texto para que os usuários possam inserir o nome do projeto. Use uma etiqueta para descrever claramente o campo.
- Campo Descrição do Projeto: Inclua uma área de texto para que os usuários possam fornecer uma descrição detalhada do projeto. Isso permite capturar informações adicionais sobre o projeto.
- Campo Tags (Categorias): Insira um campo de texto para que os usuários possam adicionar tags ou categorias relevantes ao projeto. Isso ajuda na organização e categorização de projetos similares.
- Lista de Tags: Mostre as tags inseridas anteriormente em uma lista. Cada tag pode ser exibida com um botão ou ícone ao lado para remover a tag, oferecendo uma experiência interativa para o usuário gerenciar as tags adicionadas.

Por fim, ainda dentro do formulário, construa os botões de interação com o formulário.

- Container dos botões: Construa um container para os botões de interação.
- Botão Descartar: Inclua um botão para que os usuários possam descartar o projeto. Isso permite cancelar a criação do projeto caso decidam não prosseguir.
- Botão Publicar: Adicione um botão para que os usuários possam publicar o projeto. Este botão deve ser utilizado para enviar as informações do formulário para processamento ou armazenamento.

Exercício 5) - Estilizando o container de imagem e botão de upload

Conteúdo:

Você está trabalhando no desenvolvimento da aplicação MundoPet. Sua liderança solicitou que você ajuste a aparência de todos elementos da seção principal de acordo com o design no Figma. O objetivo é garantir que a interface fique visualmente atraente e funcional.

Opinião do instrutor

Resposta do exercício 1)

Opinião da instrutora:

1 - HTML: Estrutura da barra lateral

- Insira a tag aside para representar a barra lateral no arquivo index.html.
- Adicione o logo do MundoPet e os itens do menu de navegação dentro do aside.

2 - CSS: Estilização da barra lateral

Estilize o corpo da página (body) para aplicar um layout flexível e um fundo escuro.
Adicione estilos para a barra lateral (aside), incluindo cor de fundo, borda arredondada e alinhamento dos itens.
Estilize os links do menu para que se alinhem centralmente, com espaçamento adequado e sem decorações padrão de lista.
Criando a barra lateral de navegação

1 - HTML: Estrutura da barra lateral

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MundoPet - Upload</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <aside>
        <img src="./img/logo.svg" alt="Logo do MundoPet">
        <nav>
            <ul class="listaifemlinks">
                <li><a href="#" class="linkifindestack">Publicar</a></li>
                <li><a href="#"><img src="./img/feed.svg" alt="Feed">Feed</a></li>
                <li><a href="#"><img src="./img/cat.svg" alt="Perfil">Perfil</a></li>
                <li><a href="#"><img src="./img/about.svg" alt="Sobre Nós">Sobre Nós</a></li>
                <li><a href="#"><img src="./img/logout.svg" alt="Sair">Sair</a></li>
            </ul>
        </nav>
    </aside>
</body>
</html>
```

2 - CSS: Estilização da barra lateral

```CSS
body {
    background-color: #00090E;
    color: #Cinza médio;
    font-family: "Prompt", sans-serif;
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100vh;
    gap: 27px;
    padding: 56px 0;
}

aside {
    background-color: #211727;
    border-radius: 10px;
    height: 100%;
    padding: 40px 16px;
    text-align: center;
}

.lista-links {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 80px;
    align-items: center;
    list-style-type: none;
}

.lista-links li {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.lista-links a {
    text-decoration: none;
    color: #888888;
    font-size: 22px;
}
```

Resposta do exercício 2)

Opinião da instrutora:

Abra o arquivo styles.css no Visual Studio Code.

Na linha 58, adicione o seguinte código CSS:

```CSS
.lista-item-links li:first-of-type a {
  color: #FD7BF0;
}

.link-item-destaque {
  border: 1px solid #FD7BF0;
  padding: 12px 6px;
  border-radius: 8px;
}
```

Resposta do exercício 3)

Opinião da instrutora:

Abra o arquivo index.html.

Após o fechamento da tag side, na linha 50, adicione três linhas em branco.

Na linha 52, adicione a estrutura do main conforme especificado:

```html
<main>
  <div class="container-upload-imagem">
    <div class="container-imagem">
      <img src="img/image.png" alt="" class="main-image">
      <button>Carregar Imagem</button>
      <p>image_projeto.png</p>
      <img src="img/close.svg" alt="">
    </div>
  </div>
</main>
```

Resposta do exercício 4)

Opinião da instrutora:

Primeiramente, crie um `<div>` com a classe container-descricao para envolver todo o conteúdo do formulário. Isso ajudará a organizar visualmente e aplicar estilos conforme necessário.

```html
<div class="container-descricao">
    <!-- Conteúdo do formulário será adicionado aqui -->
</div>
```

Adicione um `<h2>` dentro do contêiner principal para identificar o propósito do formulário.

```html
<div class="container-descricao">
    <h2>Novo projeto</h2>
    <!-- Restante do conteúdo do formulário será adicionado aqui -->
</div>
```

Utilize a tag `<form>` para envolver todos os elementos do formulário. Isso é importante para a estruturação semântica do HTML.

Adicione `<div>`s para cada campo, contendo uma `<label>` descritiva e um elemento `<input>` ou `<textarea>` conforme necessário.

```html
        <div>
            <label for="nome">Nome do projeto</label>
            <input type="text" id="nome" name="nome" />
        </div>
        <div>
            <label for="descricao">Descrição</label>
            <textarea id="descricao" name="descricao"></textarea>
        </div>
        <div>
            <label for="categoria">Tags</label>
            <input type="text" id="categoria" name="categoria" />
        </div>
```

Crie uma lista não ordenada `<ul>` com a classe lista-tags. Cada tag será representada por um `<li>` contendo um parágrafo `<p>` para o nome da tag e uma imagem `<img>` para remover a tag, conforme o exemplo fornecido.

```html
        <ul class="lista-tags">
            <li>
                <p>Gato Laranja</p>
                <img src="./img/close-black.svg">
            </li>
        </ul>
```

Crie um `<div>` com a classe container-botoes para agrupar os botões de ação dentro do formulário.

```html
        <div class="container-botoes">
            <button class="botao-descartar">Descartar</button>
            <button class="botao-publicar">Publicar</button>
        </div>
```

Resposta do exercício 5)

Opinião da instrutora:

Estilize o contêiner principal onde o formulário está inserido, aplicando um fundo, borda arredondada, padding, layout flexível e espaçamento entre elementos.

```CSS
main {
    background-color: #211727;
    border-radius: 10px;
    padding: 32px;
    display: flex;
    gap: 24px;
}
```

Defina o tamanho da fonte, margem inferior, e peso da fonte para o título h2.

```CSS
h2 {
    font-size: 26px;
    margin-bottom: 40px;
    font-weight: 600;
}
```

Configure o layout do formulário para coluna, com espaçamento entre os elementos.

```CSS
form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
```

Defina o estilo das etiquetas das entradas, largura total e estilos de caixa para os campos de entrada e área de texto.

```CSS
form div label {
    font-size: 18px;
    font-weight: 400;
    display: block;
    margin-bottom: 8px;
}

form div input,
textarea {
    width: 100%;
    padding: 8px 16px;
    background-color: #211727;
    border: none;
    border-radius: 4px;
    font-family: "Prompt", sans-serif;
    line-height: 22.5px;
}

form div input {
    height: 39px;
}

textarea {
    height: 161px;
}
```

Estilize cada item da lista de tags com um fundo, cor de texto e layout flexível.

```CSS
.lista-tags li {
    display: flex;
    background-color: #E7E5E5;
    color: #211727;
    align-items: center;
    gap: 10px;
    padding: 4px 8px;
    border-radius: 4px;
}

.lista-tags {
    display: flex;
}
```

Configure o layout flexível para os botões dentro do contêiner, com espaço entre os botões.

```CSS
.container-botoes {
    display: flex;
    gap: 24px;
    justify-content: space-between;
}
```

Estilize os botões "Descartar" e "Publicar" com cores de fundo, texto, borda e adição de ícones.

```CSS
.container-botoes button {
    width: 50%;
    padding: 12px 32px 12px 12px;
    text-align: center;
    border-radius: 8px;
    font-family: "Prompt", sans-serif;
    font-size: 18px;
    font-weight: 500;
}

.botao-descartar {
    background-color: #211727;
    color: #FD7BF0;
    border: 1px solid #FD7BF0;
    position: relative;
}

.botao-descartar::after {
    content: "";
    background-image: url("../img/trash.svg");
    background-size: contain;
    width: 15px;
    height: 15px;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px;
}

.botao-publicar {
    background-color: #FD7BF0;
    color: #132E35;
    border: none;
    position: relative;
}

.botao-publicar::after {
    content: "";
    background-image: url("../img/arrow_forward2.svg");
    background-size: contain;
    width: 15px;
    height: 15px;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px;
}
```

### Aula 1 - O que aprendemos?

Nessa aula, você aprendeu como:

- Criar interfaces de usuário para páginas da web que permitem o carregamento de imagens.
- Criar um botão de upload de imagem e associá-lo a um campo de entrada de arquivo oculto.
- Estilizar botões personalizados mantendo a funcionalidade padrão do HTML.
- Usar JavaScript para adicionar um ouvinte de evento de clique ao botão de upload, acionando o campo de entrada de arquivo oculto.

## Aula 2 - Assincronicidade

### Aula 2 - Promises - Vídeo 1

Transcrição  
Vamos continuar com a implementação do upload de arquivos no CodeConnect. Para isso, vamos abrir o Visual Studio Code, dentro do scripts.js, e começar a construir uma funcionalidade de leitura dos arquivos.

Para isso, vamos construir uma função no fim do código, que terá o nome lerConteudoDoArquivo() {}. Dentro desses parênteses, precisaremos receber o arquivo que será lido. Para isso, vamos retornar um new Promise().

O que é essa promessa que queremos retornar? Quando falamos de promessa no JavaScript, é algo que não sabemos se vai dar certo ou não.

Então, ele vai fazer a leitura e terá que fazer um procedimento assíncrono para retornar algo que pode estar acontecendo ainda, que foi recusado ou que foi resolvido.

Isso vai acontecer na leitura do arquivo. E não sabemos qual é o tamanho do arquivo. Não dá para garantir que na hora que bater a leitura, já vai realizá-la por completo.

Para lidarmos com essa assincronicidade, podemos fazer o seguinte: Dentro dos parênteses da promessa, vamos utilizar o resolve e o reject dentro de parênteses.

Quando essa promessa der certo, teremos um retorno dentro do resolve. Quando der errado, teremos um retorno dentro do reject. E queremos construir a funcionalidade baseada nisso.

Então, vamos colocar => {}. Dentro das chaves, vamos utilizar um leitor, que estará dentro de uma variável, então const leitor = new FileReader(). Essa é uma funcionalidade do JavaScript, então estamos iniciando um leitor de arquivo. Ele será o responsável por ler o arquivo que está sendo recebido como parâmetro dessa função.

Para dar continuidade, vamos utilizar o leitor. E quando houver o carregamento dele, queremos que aconteça o seguinte: = () => {} Queremos retornar o resolve da promessa, ou seja, quando essa leitura acontecer, iremos retornar da promessa um resolve, algo resolvido, que vai receber entre parênteses e entre chaves o url: leitor.result e também o nome: arquivo.name.

Então, se der tudo certo na hora da leitura do arquivo, a promessa vai retornar resolvida e ela vai retornar o URL do nosso arquivo, que será o resultado da leitura, e também o nome do arquivo, porque precisamos mostrar aquele nome da imagem embaixo da imagem dentro do HTML.

E se der errado essa leitura? O que retornamos? O reject. Então, vamos fazer isso, leitor.onerror = () => reject('Erro na leitura do arquivo ${arquivo.name}'). Ele vai retornar em inglês, nesse caso.

Aqui, ele está retornando para nós dois casos da promessa, que é ou resolve ou reject, e fazemos isso baseado no retorno do FileReader.

Agora, podemos utilizar o leitor de novo para ele ler os dados daquele arquivo como uma URL. Então, vamos utilizar o leitor.readAsDataURL(), e o arquivo vai ficar dentro desses parênteses.

```JavaScript
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name })
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo)
    })
}
```

Se queremos entender mais sobre o readAsDataURL, podemos abrir o MDN. Se passar o mouse no Visual Studio Code, já nos manda para essa página.

E ele diz que esse readAsDataURL é um método para ler o conteúdo do tipo blob ou file. No nosso caso, ele vai fazer a leitura de um arquivo, que é aquele que estamos enviando entre os parênteses.

É bastante informação nova. Estamos vendo FileReader, promessas etc. Então, mostramos como fazer na prática, demos uma pincelada na teoria, mas terá uma atividade textual com a explicação mais aprofundada para você fixar no seu aprendizado.

Agora, como conseguimos utilizar essa funcionalidade que nos retorna uma promessa? Vamos descobrir no próximo vídeo.

### Aula 2 - Para saber mais: JavaScript e FileReader API

Quando você está criando um site ou aplicativo que permite aos usuários(as) enviar imagens, é uma boa prática mostrar uma pré-visualização dessas imagens antes de serem enviadas para o servidor. Isso melhora a experiência do usuário, pois eles podem ver e confirmar se a imagem escolhida é a correta. Para fazer isso, podemos usar JavaScript juntamente com uma ferramenta poderosa chamada FileReader API. Vamos entender como isso funciona de uma maneira simples e prática.

O que é FileReader API?  
A FileReader API é uma parte do File API do HTML5 que permite ler o conteúdo de arquivos (ou buffers de dados brutos) armazenados no computador do(a) usuário(a), usando objetos JavaScript. Isso é feito de forma assíncrona, ou seja, o navegador pode continuar trabalhando em outras tarefas enquanto o arquivo está sendo lido.

Por que usar FileReader API para pré-visualização de imagens?  
Usar a FileReader API para pré-visualizar imagens antes de enviá-las para o servidor tem várias vantagens:

Melhora a Experiência do Usuário: Permite que os(as) usuários(as) vejam exatamente o que estão prestes a enviar, evitando erros.
Redução de Carga no Servidor: Ao permitir que os(as) usuários(as) corrijam erros antes do envio, você reduz a quantidade de dados desnecessários sendo transferidos para o servidor.
Feedback Imediato: Os(as) usuários(as) recebem um feedback visual instantâneo, o que torna a interface mais interativa e agradável.
Como Funciona?
Vamos ver um exemplo simples de como implementar a leitura e pré-visualização de uma imagem usando JavaScript e FileReader API.

HTML
Primeiro, precisamos de um input do tipo file para que o usuário possa escolher a imagem, e um elemento img onde a pré-visualização será exibida.

```html
<input type="file" id="imageInput" accept="image/*">
<img id="preview" src="" alt="Pré-visualização da imagem" style="max-width: 200px; display: none;">
```

JavaScript  
Agora, vamos adicionar o JavaScript para fazer a mágica acontecer.

```JavaScript
document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Pegando o arquivo selecionado pelo usuário
    if (file) {
        const reader = new FileReader(); // Criando uma instância do FileReader
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result; // Atribuindo o resultado da leitura como fonte da imagem de pré-visualização
            preview.style.display = 'block'; // Tornando a pré-visualização visível
        };
        reader.readAsDataURL(file); // Lendo o arquivo como um Data URL
    }
});
```

Explicação do Código

- Evento 'change': Primeiro, adicionamos um ouvinte de eventos ao nosso input de arquivo. Isso significa que sempre que um arquivo for selecionado, o código dentro da função será executado.
- FileReader: Criamos uma nova instância do FileReader. Esse objeto nos permite ler o conteúdo do arquivo selecionado.
reader.onload: Definimos o que acontece quando a leitura do arquivo é concluída. Neste caso, queremos mostrar a imagem no elemento img que preparamos.
- readAsDataURL: Este método lê o arquivo e o codifica como um Data URL, uma string base64 que representa os dados do arquivo. Isso permite que a imagem seja mostrada diretamente no navegador sem precisar ser enviada para um servidor primeiro.

Conclusão  
Agora você sabe como usar JavaScript e FileReader API para ler e mostrar uma pré-visualização de imagens antes de enviá-las para o servidor. Isso não apenas melhora a experiência do usuário, mas também pode ajudar a reduzir o tráfego desnecessário para o seu servidor. Experimente adicionar essa funcionalidade aos seus projetos e veja como ela pode fazer a diferença!

### Aula 2 - Funções assíncronas - Vídeo 2

Transcrição  
Agora que construímos uma funcionalidade de leitura de arquivo que retorna uma promessa para nós, e não o valor já gerado pela leitura do arquivo, como podemos lidar com essa assincronicidade para utilizar essa nova função?

Para isso, vamos fazer o seguinte: no fim do código do arquivo "scripts.js", vamos começar a selecionar o nosso inputUpload, porque queremos que essa leitura do arquivo aconteça quando ocorrer uma mudança no arquivo que ele está lendo.

Então, inputUpload.addEventListener, que vai receber como primeiro parâmetro desse ouvinte o change. Quando acontecer alguma mudança dentro do nosso input de imagem, vai acontecer uma funcionalidade que será a leitura do arquivo.

Para isso, precisamos lidar com o evento. Então, vou colocar entre parênteses, evento, igual, sinal de maior, abre e fecha chaves.

Lá dentro, queremos selecionar um arquivo que está sendo enviado nessa mudança. Então, vamos criar uma variável chamada arquivo, que ela vai receber o evento.target.files[0]. Ou seja, ele vai pegar o evento do envio, vai entrar dentro desse evento e vai pegar o arquivo que está sendo enviado.

Com isso, precisamos fazer uma validação. Se realmente existir um arquivo, queremos que tente fazer alguma coisa com esse arquivo. E essa tentativa vai ser algo que vai ficar dentro de uma variável chamada conteudoDoArquivo, que vai receber a leitura do nosso arquivo. Então, o que for retornado da nossa funcionalidade.

Então, vamos utilizar o seguinte, lerConteudoDoArquivo(arquivo). Agora, temos a problemática, que é a seguinte: se estou enviando para a função lerConteudoDoArquivo e ela tem que ter aquele tempo para fazer a promessa ser resolvida e retornar a erro ou o que for o conteúdo do arquivo em si, não podemos simplesmente chamá-la.

Ela vai fazer a leitura da função e já vai seguir o caminho da leitura do nosso scripts.js e não vai superar essa resolução.

Para definirmos que queremos esperar essa promessa ser resolvida, precisamos definir essa funcionalidade como async. Então, antes dos parênteses evento, vamos definir o async para informar que essa função é assíncrona.

Precisamos determinar dentro da função o que queremos que seja esperado. Então, podemos fazer isso utilizando a palavra await antes da função.

Então, agora definimos, essa função vai ser assíncrona, a funcionalidade dentro da mudança do nosso input, e queremos que ocorra essa espera quando ele for utilizar a função lerConteudoDoArquivo.

```JavaScript
inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
        }
    }
})
```

Vamos lidar com o caso se der tudo certo nessa leitura do arquivo. Queremos colocar a imagem que foi retornada dentro do campo de imagem dentro do nosso projeto. Também queremos trocar o nome da imagem dentro do projeto.

Então, para isso, vamos fazer outros seletores antes do inputUpload.addEventListener. Vai ser o const ImagemPrincipal, que vai receber o document.querySelector(".main-imagem"). Vamos confirmar se essa é a classe mesmo, indo no nosso index.html e procurando a linha 55.

Agora, podemos selecionar a parte do texto. Então, const nomeDaImagem, que vai receber o document.querySelector(".container-imagem-name p"). Então, vamos pegar o container que tem o nome da imagem, e queremos só definir o parágrafo. Podemos visualizar isso lá na linha 59 do index.html.

Voltando para "scripts.js", quero que após a leitura do arquivo, seja substituído a ImagemPrincipal.src pelo valor do conteudoDoArquivo.url. E depois, queremos trocar nomeDaImagem.textContent, para o conteudoDoArquivo.nome, que foi o que definimos dentro do resolve da linha 12.

```JavaScript
const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
            }
        }
})
```

Agora, precisamos lidar com o caso de que se acontecer algum erro na leitura da funcionalidade lerConteudoDoArquivo, passa determinada coisa.

Para isso, vamos utilizar o catch após o bloco de try. Antes de abrir as chaves, podemos colocar entre parênteses, erro. E dentro das chaves, vamos colocar um console.error("Erro na leitura do arquivo").

Aqui, esse try catch, ele é uma funcionalidade de funções assíncronas também. Então, o que ele está fazendo? Ele está tentando alguma coisa.

No caso, ele está tentando fazer a leitura do arquivo. Se der algo errado durante o processo dentro do try, ele vai capturar esse erro através do catch, e ele vai fazer alguma coisa com esse erro, ou seja, ele vai imprimir no console que não foi possível fazer upload do arquivo.

Então, vamos testar essa funcionalidade. Vamos abri-la no navegador, clicar em "Carregar imagem", e no Explorador de Arquivos, vamos ir nas imagens para selecionar uma imagem aleatória.

No momento que definimos a imagem, ele já atualizou a prévia e colocou a imagem que escolhemos. Só faltou mudar o nome da imagem.

O nome da imagem não era imagem-projeto. O que está acontecendo aqui? Na linha 24 do scripts.js, usamos container-imagem-name. Vamos confirmar essa classe na linha 59 do index.html, e na realidade é nome, não name.

Então, vamos substituir lá no scripts.js, vamos no navegador, selecionar novamente aquela imagem, e agora ele trocou a imagem de acordo com o que está dentro do computador.

```JavaScript
const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        } catch (erro) {
            console.error("Erro na leitura do arquivo")
        }
    }
})
```

Então, com sucesso, já conseguimos aprender sobre vários conceitos de assincronicidade em JavaScript, como promessas e também o async-await, e conseguimos implementar uma funcionalidade específica na nossa aplicação.

Mas não é somente isso, ainda temos muitas coisas para aprender. Então, vamos para a próxima aula!

### Aula 2 - Para saber mais: promessas e async

Quando você começa a explorar o mundo da programação JavaScript, especialmente no desenvolvimento web, logo se depara com conceitos como assincronia. Isso significa fazer coisas ao mesmo tempo sem que uma atrapalhe a outra, como carregar uma imagem enquanto você lê este texto. Vamos explorar alguns conceitos que derivam do Javascript assíncrono.

Promises  
Quando você está aprendendo JavaScript, um dos conceitos mais úteis e, às vezes, um pouco complicados de entender são as Promises. Mas não se preocupe! Vamos descomplicar esse assunto juntos. Imagine que você pediu uma pizza e o atendente disse que ela chegaria em 30 minutos. Essa "promessa" de entrega da pizza é muito parecida com as Promessas em JavaScript. Elas são usadas para lidar com operações que levam algum tempo para serem concluídas, como buscar dados de uma API na internet.

O que são Promessas?  
Uma Promessa em JavaScript é um objeto que representa o sucesso ou a falha de uma operação assíncrona. Assíncrono significa que algo pode acontecer agora ou no futuro, mas não impede outras operações de acontecerem enquanto isso. As Promessas têm três estados:

- Pendente (Pending): Quando a Promessa é criada e a operação ainda não foi concluída.
- Realizada (Fulfilled): Quando a operação assíncrona é concluída com sucesso.
- Rejeitada (Rejected): Quando a operação falha.

Criando uma Promessa

Para criar uma Promessa, você usa o construtor new Promise(), que recebe uma função com dois parâmetros: resolve e reject. Veja um exemplo simples:

```JavaScript
let promessaDePizza = new Promise(function(resolve, reject) {
  // Simulando a entrega da pizza
  let pizzaEntregue = true; // Tente mudar para false e veja o que acontece
  if (pizzaEntregue) {
    resolve('Pizza entregue com sucesso!');
  } else {
    reject('Entrega da pizza falhou.');
  }
});
```

As Promessas são uma parte fundamental do JavaScript moderno, especialmente quando você está lidando com operações assíncronas.

Async/await

No JavaScript, uma das formas mais elegantes de lidar com operações assíncronas é usando async/await. Uma função async é uma função que retorna uma promessa, e o await é usado para esperar por essa promessa ser resolvida (ou seja, completada) antes de continuar com o próximo passo. Isso nos permite escrever código assíncrono que parece síncrono, tornando-o mais legível e fácil de entender.

```JavaScript
async function buscarDados() {
  const resposta = await fetch('https://api.exemplo.com/dados');
  const dados = await resposta.json();
  console.log(dados);
}
```

Melhores Práticas

- Tratamento de Erros: Sempre use try/catch ao usar await para lidar com possíveis erros de forma elegante.
- Evite Await em Loop: Usar await dentro de loops pode levar a um desempenho ruim, pois espera-se que cada operação seja concluída antes de iniciar a próxima. Considere alternativas como Promise.all.
- Código Limpo: Embora async/await torne o código mais legível, ainda é importante manter seu código organizado e evitar aninhamentos profundos.

Dominar async/await e entender como gerenciar múltiplas operações assíncronas pode significativamente melhorar a eficiência e a legibilidade do seu código. Experimente esses padrões e práticas em seus projetos e veja a diferença que eles podem fazer. Lembre-se, a prática leva à perfeição, então continue explorando e experimentando.

### Aula 2 - Carregando e exibindo imagens

Você está desenvolvendo um portfólio online para exibir seus projetos de desenvolvimento web. Uma das funcionalidades que você deseja adicionar é permitir que os(as) usuários(as) carreguem imagens de seus projetos, que serão exibidas na página do portfólio. Para isso, você criou uma função lerConteudoDoArquivo que utiliza Promises para ler o conteúdo dos arquivos de imagem e uma função assíncrona para exibir essas imagens na página. Agora, você precisa combinar essas funcionalidades para que, ao carregar um arquivo, a imagem seja exibida junto com o nome do arquivo na página.

Como você deve modificar o código abaixo para corretamente implementar a funcionalidade de carregar e exibir a imagem e o nome do arquivo na página do seu portfólio?

```JavaScript
const imagemPrincipal = document.querySelector('.main-image');
const nomeDaImagem = document.querySelector('.container-imagem-name p');
const imagemUpload = document.querySelector('#upload-imagem');

imagemUpload.addEventListener('change', async (event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
        // Código a ser inserido aqui
    }
});
```

Resposta:

```JavaScript
const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
imagemPrincipal.src = conteudoDoArquivo.url;
nomeDaImagem.textContent = arquivo.name;
```

> Esta alternativa é correta porque utiliza a função lerConteudoDoArquivo com await para ler o conteúdo do arquivo de forma assíncrona, e depois atualiza o src da imagem principal e o texto do nome da imagem com os dados lidos.

### Aula 2 - Faça como eu fiz: lendo arquivos de imagem

Construa a funcionalidade de ler o conteúdo de um arquivo de imagem selecionado pelo usuário e exibi-lo na página. Para isso, você pode seguir os seguintes passos:

arquivo "scripts.js":

- Crie uma função chamada "lerConteudoDoArquivo" que recebe um arquivo como parâmetro e retorna uma Promise.
- Dentro da função, crie um leitor de arquivos FileReader e defina os eventos "onload" e "onerror".
- No evento "onload", resolva a Promise com um objeto contendo a URL e o nome do arquivo.
- No evento "onerror", rejeite a Promise com uma mensagem de erro.
- Leia o conteúdo do arquivo como uma URL data.
- Selecione os elementos HTML da imagem principal e do nome da imagem.
- Adicione um evento "change" ao input de upload de arquivos.
- Dentro do evento, verifique se um arquivo foi selecionado.
- Se sim, chame a função "lerConteudoDoArquivo" passando o arquivo selecionado.
- No retorno da Promise, atualize o src da imagem principal e o texto do nome da imagem.
- Em caso de erro, exiba uma mensagem de erro no console.

Opinião do instrutor

Para desenvolver essa funcionalidade, vamos iniciar com a função lerConteudoDoArquivo, que será responsável por ler o conteúdo de um arquivo selecionado pelo usuário e retornar uma Promise que será resolvida com os dados da leitura ou rejeitada em caso de erro.

```JavaScript
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        // Cria um novo leitor de arquivo
        const leitor = new FileReader();

        // Define o que acontece quando a leitura é completada com sucesso
        leitor.onload = () => {
            // Resolve a Promise com um objeto contendo a URL e o nome do arquivo
            resolve({ url: leitor.result, nome: arquivo.name });
        };

        // Define o que acontece em caso de erro na leitura do arquivo
        leitor.onerror = () => {
            // Rejeita a Promise com uma mensagem de erro personalizada
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        };

        // Inicia a leitura do arquivo como uma URL data (base64)
        leitor.readAsDataURL(arquivo);
    });
}
```

Promise: A função retorna uma Promise que pode ser resolvida (resolve) quando a leitura do arquivo é concluída com sucesso ou rejeitada (reject) se ocorrer algum erro durante a leitura.
FileReader: É utilizado para ler o conteúdo de arquivos selecionados pelo usuário.
Event Handlers: onload é acionado quando a leitura é bem-sucedida, enquanto onerror é acionado se ocorrer algum erro durante a leitura.
readAsDataURL: Inicia a leitura do arquivo como uma URL de dados (data URL), que é uma representação base64 do conteúdo do arquivo.
Em seguida, vamos construir um ouvinte para quando acontecer alguma mudança no input de upload. Esse ouvinte que chamará a funcionalidade de leitura do arquivo.

```JavaScript
// Seleciona elementos HTML da página
const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");
const inputUpload = document.getElementById("input-upload");

// Adiciona um ouvinte de evento para o input de upload de arquivo
inputUpload.addEventListener("change", async (evento) => {
    // Obtém o arquivo selecionado pelo usuário
    const arquivo = evento.target.files[0];

    // Verifica se um arquivo foi selecionado
    if (arquivo) {
        try {
            // Aguarda a leitura do conteúdo do arquivo
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);

            // Atualiza a imagem principal com a URL do arquivo
            imagemPrincipal.src = conteudoDoArquivo.url;

            // Atualiza o nome da imagem na página
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        } catch (erro) {
            // Em caso de erro na leitura do arquivo, exibe uma mensagem de erro no console
            console.error("Erro na leitura do arquivo:", erro);
        }
    }
});
```

- querySelector: Seleciona elementos HTML na página usando seletores de classe (".main-imagem" e ".container-imagem-nome p").
- inputUpload.addEventListener: Adiciona um ouvinte de evento para o input de upload de arquivo (inputUpload). O evento change é acionado quando o usuário seleciona um arquivo.
- Evento change: Quando o evento é acionado, o código dentro da função assíncrona (async (evento) => { ... }) é executado.
- Obtendo o Arquivo: evento.target.files[0] obtém o arquivo selecionado pelo usuário no input de upload.
- Await e try...catch: await lerConteudoDoArquivo(arquivo) espera pela conclusão da função lerConteudoDoArquivo e captura qualquer erro usando try...catch.
- Atualização da Página: Se a leitura for bem-sucedida, imagemPrincipal.src é atualizado com a URL do arquivo e nomeDaImagem.textContent é atualizado com o nome do arquivo.

Este fluxo permite que o usuário selecione um arquivo, veja uma pré-visualização da imagem e saiba o nome do arquivo carregado, usando assincronicidade e promessas para gerenciar operações de leitura de arquivo de forma eficiente e responsiva na página web.

### Aula 2 - Lista de exercícios da aula 2

Exercício 1) Construindo a função de leitura de arquivos

Conteúdo:

Você está trabalhando na implementação de uma funcionalidade de leitura de arquivos no MundoPet. Para isso, você precisa criar uma função que leia o conteúdo de um arquivo usando JavaScript. Siga os passos abaixo para construir essa funcionalidade:

Abra o Visual Studio Code e navegue até o arquivo Scripts.js.

Na linha 8, crie uma função chamada lerConteudoDoArquivo.

```JavaScript
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        
        leitor.onload = () => {
            resolve({
                resultado: leitor.result,
                nome: arquivo.name
            });
        };

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo: ${arquivo.name}`);
        };

        leitor.readAsDataURL(arquivo);
    });
}
```

Exercício 2) Filtrando lista de gatos

Conteúdo:

Você está trabalhando em um sistema de upload de fotos de gatos e precisa implementar uma função JavaScript que filtre uma lista de gatos por cor. A função deve receber como parâmetros a lista de gatos e a cor desejada, retornando uma nova lista contendo apenas os gatos que são da cor especificada.

Exercício 3) Manipulando o upload de imagem com Promises e Async/Await

Conteúdo:

Você trabalha em um projeto onde é necessário manipular uploads de imagem utilizando JavaScript. Para isso, você precisa ler o arquivo selecionado pelo usuário e exibir uma prévia dessa imagem na página, além de exibir o nome do arquivo. A funcionalidade de leitura do arquivo já está implementada utilizando Promises. Agora, é necessário implementar a função que utiliza esta leitura assíncrona de forma adequada.

Implemente o seguinte:

- Adicione um event listener ao input de upload de arquivo para disparar a leitura do arquivo quando houver uma mudança.
- Utilize async e await para lidar com a sincronia da função de leitura do arquivo.
- Realize a leitura do arquivo, atualize a imagem na página e exiba o nome do arquivo.
- Capture e exiba qualquer erro que ocorra durante a leitura do arquivo.

Exercício 4) Implementando Preview de Arquivo de Texto com Promises e Async/Await

Conteúdo:

Você trabalha em um projeto onde é necessário manipular uploads de arquivos de texto utilizando JavaScript. Para isso, você precisa ler o arquivo selecionado pelo usuário e exibir seu conteúdo na página. A funcionalidade de leitura do arquivo já está implementada utilizando Promises. Agora, é necessário implementar a função que utiliza esta leitura assíncrona de forma adequada.

Implemente o seguinte:

- Adicione um event listener ao input de upload de arquivo para disparar a leitura do arquivo quando houver uma mudança.
- Utilize async e await para lidar com a sincronia da função de leitura do arquivo.
- Realize a leitura do arquivo, atualize o conteúdo do arquivo na página.
- Capture e exiba qualquer erro que ocorra durante a leitura do arquivo.

Exercício 5) Lendo e Exibindo Dados de um Arquivo JSON

Conteúdo:

Você está desenvolvendo uma aplicação que precisa ler arquivos JSON fornecidos pelos usuários e exibir os dados em formato de lista na página. A funcionalidade de leitura do arquivo já está implementada utilizando Promises. Agora, é necessário implementar a função que utiliza esta leitura assíncrona de forma adequada.

Implemente o seguinte:

- Adicione um event listener ao input de upload de arquivo para disparar a leitura do arquivo quando houver uma mudança.
- Utilize async e await para lidar com a sincronia da função de leitura do arquivo.
- Realize a leitura do arquivo, parse o JSON e exiba os dados na página em formato de lista.
- Capture e exiba qualquer erro que ocorra durante a leitura do arquivo.

**Opinião do instrutor**  

Resposta do exercício 1)

Opinião da instrutora:

Abra o Visual Studio Code e navegue até o arquivo Scripts.js.

Na linha 8, crie uma função chamada lerConteudoDoArquivo.

```JavaScript
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        
        leitor.onload = () => {
            resolve({
                resultado: leitor.result,
                nome: arquivo.name
            });
        };

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo: ${arquivo.name}`);
        };

        leitor.readAsDataURL(arquivo);
    });
}
```

Resposta do exercício 2)

Opinião da instrutora:

Para implementar a função que filtra uma lista de gatos por cor, especificamente buscando gatos laranja, você pode seguir estes passos:

Crie uma função chamada filtrarGatosPorCor que receba dois parâmetros: a lista de gatos e a cor desejada para filtragem.

Exemplo:

```JavaScript
   function filtrarGatosPorCor(listaDeGatos, corDesejada) {
       // Implementação será inserida aqui
   }  
```

Utilize o método .filter() para percorrer a lista de gatos e filtrar aqueles que têm a cor especificada como "laranja".

Exemplo:

```JavaScript
   function filtrarGatosPorCor(listaDeGatos, corDesejada) {
       return listaDeGatos.filter(gato => gato.cor === corDesejada);
   }
```

A função deve retornar uma nova lista contendo apenas os gatos que correspondem à cor especificada.

Exemplo Completo:

```JavaScript
   function filtrarGatosPorCor(listaDeGatos, corDesejada) {
       return listaDeGatos.filter(gato => gato.cor === corDesejada);
   }
```

Suponha que você tenha uma lista de gatos com objetos contendo atributos como nome e cor. Para filtrar apenas os gatos laranja, você chamaria a função filtrarGatosPorCor passando a lista de gatos e a cor "laranja":

```JavaScript
let listaDeGatos = [
    { nome: 'Garfield', cor: 'laranja' },
    { nome: 'Whiskers', cor: 'preto' },
    { nome: 'Mittens', cor: 'laranja' },
    { nome: 'Snowball', cor: 'branco' }
];

let gatosLaranja = filtrarGatosPorCor(listaDeGatos, 'laranja');
console.log(gatosLaranja);

// Saída esperada: [{ nome: 'Garfield', cor: 'laranja' }, { nome: 'Mittens', cor: 'laranja' }]
```

Resposta do exercício 3)

Opinião da instrutora:

```JavaScript
Selecione o input de upload de arquivo, a imagem e o nome.
   const upload = document.querySelector('#upload');
   const imagemPrincipal = document.querySelector('.main-imagem');
   const nomeImagem = document.querySelector('.container-item-nome');
```

Um ouvinte de evento deve ser adicionado ao elemento upload para o evento change. Esse evento é disparado quando o usuário seleciona um arquivo para upload.

```JavaScript
   upload.addEventListener('change', async (event) => {
       // Código aqui
   });
```

Dentro do ouvinte de evento change, o código obtém o arquivo selecionado pelo usuário através de event.target.files[0].

- Se um arquivo for selecionado (if (arquivo)), então:
- Chama a função lerConteudoDoArquivo(arquivo) para ler o conteúdo do arquivo de forma assíncrona.
- Atualiza a propriedade src da imagemPrincipal com a URL do conteúdo do arquivo lido.
- Define o texto do nomeImagem com o nome do arquivo selecionado.

```JavaScript
   const arquivo = event.target.files[0];
   if (arquivo) {
       try {
           const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
           imagemPrincipal.src = conteudoDoArquivo.url;
           nomeImagem.textContent = conteudoDoArquivo.nome;
       } catch (erro) {
           console.error('Erro na leitura do arquivo', erro);
       }
   }
```

Defina a função lerConteudoDoArquivo(arquivo) que retorna uma promessa (Promise). Dentro da promessa, cria um FileReader (leitor) para ler o conteúdo do arquivo.

Construa um ouvinte de evento onload que resolve a promessa com um objeto contendo a URL do arquivo (leitor.result) e o nome do arquivo (arquivo.name) após o carregamento completo do arquivo.

Implemente um ouvinte de evento onerror que rejeita a promessa se ocorrer um erro durante a leitura do arquivo.

Por fim, use leitor.readAsDataURL(arquivo) para iniciar a leitura do arquivo como um URL de dados.

```JavaScript
   function lerConteudoDoArquivo(arquivo) {
       return new Promise((resolve, reject) => {
           const leitor = new FileReader();
           leitor.onload = () => resolve({ url: leitor.result, nome: arquivo.name });
           leitor.onerror = () => reject(leitor.error);
           leitor.readAsDataURL(arquivo);
       });
   }
```

Resposta do exercício 4)

Opinião da instrutora:

Selecione os elementos de upload e onde será mostrado o conteúdo do arquivo.

```JavaScript
const upload = document.querySelector('#upload');
const conteudoArquivo = document.querySelector('#conteudoArquivo');
```

Adicione um ouvinte de evento ao campo de upload. O evento change é disparado quando um arquivo é selecionado pelo usuário.

```JavaScript
upload.addEventListener('change', async (event) => {
    // Código aqui
});
```

Acesse a lista de arquivos selecionados pelo usuário. Selecione o primeiro elemento da lista e caso a leitura seja possível, defina o nome de uma função assíncrona que fará a leitura do conteúdo interno desse arquivo.
Também lide com a situação caso o arquivo não exista.

```JavaScript
const arquivo = event.target.files[0];
if (arquivo) {
    try {
        const conteudo = await lerConteudoDoArquivo(arquivo);
        conteudoArquivo.textContent = conteudo.texto;
    } catch (erro) {
        console.error('Erro na leitura do arquivo', erro);
    }
}
```

Construa uma função que faça a leitura desse arquivo com auxilio do FileReader().

```JavaScript
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => resolve({ texto: leitor.result });
        leitor.onerror = () => reject(leitor.error);
        leitor.readAsText(arquivo);
    });
}
```

Resposta do exercício 5)

Opinião da instrutora:

- Selecione o input de upload de arquivo.
- Adicione um event listener para o evento change.
- Dentro do listener, pegue o arquivo selecionado.
- Verifique se há um arquivo e, se houver, leia o arquivo utilizando a função lerConteudoDoArquivo.
- Parse o JSON e atualize a lista na página.
- Capture e exiba erros utilizando try e catch.

```JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const upload = document.querySelector('#upload');
    const listaDados = document.querySelector('#listaDados');

    upload.addEventListener('change', async (event) => {
        const arquivo = event.target.files[0];
        if (arquivo) {
            try {
                const conteudo = await lerConteudoDoArquivo(arquivo);
                const dados = JSON.parse(conteudo.texto);
                listaDados.innerHTML = '';
                dados.forEach(dado => {
                    const li = document.createElement('li');
                    li.textContent = JSON.stringify(dado);
                    listaDados.appendChild(li);
                });
            } catch (erro) {
                console.error('Erro na leitura do arquivo', erro);
            }
        }
    });
});

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => resolve({ texto: leitor.result });
        leitor.onerror = () => reject(leitor.error);
        leitor.readAsText(arquivo);
    });
}
```

### Aula 2 - O que aprendemos?

Nessa aula, você aprendeu como:

- Utilizar promessas para lidar com operações assíncronas, como a leitura de arquivos, de forma eficaz.
- Simplificar o código assíncrono usando as palavras-chave async e await para esperar que as promessas sejam resolvidas.
- Usar o objeto FileReader para ler o conteúdo de arquivos de imagem de forma assíncrona.
- Manipular elementos do DOM para exibir imagens e textos carregados pelos usuários na página.
- Tratar erros em operações assíncronas usando try/catch em funções assíncronas.

## Aula 3 - Manipulando Tags

### Aula 3 - Inserir tags - Vídeo 1

Transcrição  
Implementamos a funcionalidade de leitura de arquivos e agora vamos continuar com a inserção das tags na aplicação. Por exemplo, temos uma tag fixa de front-end na tela. Como criar tags a partir do que a pessoa usuária digita no campo de entrada?

Seleção do campo de entrada
Primeiro, precisamos selecionar o campo de entrada onde as tags serão digitadas. No arquivo index.html, procuramos o campo de entrada de categoria. Nele, já temos um id categoria, então vamos substituí-lo pelo id input-tags.

```html
<label for="categoria">Tags</label>
<input type="text" name="categoria" id="input-tags"/>
```

Criação de variável para o campo de entrada
Agora, ao final do arquivo scripts.js, criamos uma variável chamada inputTags que recebe document.getElementById("input-tags").

```JavaScript
const inputTags = document.getElementById("input-tags");
```

Com isso, acessamos o campo de entrada e adicionamos um ouvinte de eventos para monitorar quando a pessoa usuária pressiona a tecla "Enter". Quando isso ocorrer, o texto digitado será inserido como uma tag.

Adição do ouvinte de eventos  
Para adicionar o ouvinte, usamos inputTags.addEventListener(). O primeiro argumento é o tipo de evento, "keypress", que monitorará as teclas pressionadas. Definimos uma função anônima como segundo argumento, que recebe o evento e executa a lógica necessária.

```JavaScript
inputTags.addEventListener("keypress", (evento) => {

})
```

Verificação da tecla pressionada e prevenção do comportamento padrão
Primeiro, detectamos qual tecla foi pressionada, pois queremos que a funcionalidade ocorra apenas com o "Enter". Usamos a condicional if (event.key === "Enter") para verificar isso. Quando a tecla "Enter" for pressionada, implementamos a funcionalidade.

```JavaScript
inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
    
    }
})
```

Agora, usamos event.preventDefault() para evitar o comportamento padrão de atualização da tela ao pressionar "Enter", garantindo que não perderemos o que foi digitado no formulário.

```JavaScript
inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
    }
})
```

Captura do texto da tag  
Para capturar o texto da tag, criamos uma constante tagTexto que recebe o valor do campo de entrada inputTags.value.trim(). O método trim() remove espaços em branco antes e depois do texto.

```JavaScript
inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
    }
})
```

Criação do elemento de tag  
Prosseguindo, verificamos se há algo digitado em tagTexto com a condição if (tagTexto !== ""). Se houver, criamos um novo item de lista para a tag com const tagNova = document.createElement("li").

```JavaScript
inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            const tagNova = document.createElement("li");
    }
})
```

Definição do conteúdo da tag  
Definimos o conteúdo desse novo item de lista com tagNova.innerHTML e colocamos o valor da tag e a imagem de fechamento. Usaremos a tag <p> com um template string para inserir o texto da tag dentro do parágrafo (`<p>`${tagTexto}`</p>`). Depois, adicionamos uma imagem com `<img src="./img/close-black.svg" class="remove-tag">`. A imagem também recebe a classe remove-tag para permitir estilização futura.

```JavaScript
inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            const tagNova = document.createElement("li");
            tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
    }
})
```

Adição da nova tag e limpeza do campo de entrada
Depois de criar o elemento li, precisamos adicioná-lo à lista de tags. No arquivo index.html, verificamos que a lista de tags é um elemento ul com a classe lista-tags. Podemos adicionar um ID lista-tags a este elemento para facilitar a seleção.

```html
<ul class="lista-tags" id="lista-tags">
```

De volta ao scripts.js, depois de definir const inputTags, criamos const listaTags = document.getElementById("lista-tags").

```JavaScript
const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");
```

Agora, após tagNova.innerHTML, podemos usar listaTags.appendChild() para adicionar tagNova à lista de tags. Em seguida, limpamos o campo de entrada com inputTags.value = "".

```JavaScript
inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            const tagNova = document.createElement("li");
            tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
            listaTags.appendChild(tagNova);
            inputTags.value = "";
        }
    }
})
```

Teste da funcionalidade e próximos passos  
Vamos salvar e testar isso no navegador, adicionando a tag "programação" à lista. Ao digitar "programação" e pressionar "Enter", a tag é adicionada corretamente à lista.

Para melhorar ainda mais, seria interessante permitir a remoção das tags criadas. Vamos implementar essa funcionalidade no próximo vídeo.

### Aula 3 - Para saber mais: delegação de eventos

O que são Eventos?  
Imagine que você está em uma festa (a página da web) e cada vez que algo acontece, como alguém apertando um botão (um evento), você (o JavaScript) quer ser notificado para poder reagir de alguma forma, talvez mudando a música ou as luzes. Em JavaScript, esses "algo acontece" são conhecidos como eventos. Eles podem ser qualquer coisa, desde clicar em um botão, passar o mouse sobre um link, até carregar a página.

Quando um evento acontece, você pode querer fazer algo em resposta. Por exemplo, quando alguém clica em um botão, você pode querer exibir uma mensagem. Para fazer isso, você "escuta" o evento e então define uma função, chamada de "função de callback", que será executada quando o evento ocorrer.

Exemplo Básico de Captura de Evento

```JavaScript
document.getElementById('meuBotao').addEventListener('click', function() {
  alert('Olá, mundo!');
});
```

Neste exemplo, estamos dizendo ao JavaScript para escutar por cliques no elemento com o ID meuBotao. Quando um clique acontece, ele executa a função que mostra um alerta dizendo "Olá, mundo!".

Gerenciando Eventos Eficientemente  
À medida que sua página da web cresce, você pode acabar tendo muitos elementos que precisam escutar por eventos. Adicionar um ouvinte de eventos a cada elemento individualmente pode tornar seu código lento e difícil de gerenciar. É aqui que a delegação de eventos se torna útil.

O que é Delegação de Eventos?  
Delegação de eventos é uma técnica para ouvir eventos onde você usa um único ouvinte de eventos para gerenciar todos os eventos de um tipo específico que ocorrem em seus elementos filhos. Em vez de adicionar um ouvinte de evento a cada elemento individual, você adiciona um ouvinte a um elemento pai e deixa esse ouvinte gerenciar todos os eventos que borbulham de seus elementos filhos.

Por que usar a Delegação de Eventos?  

- Performance: Menos ouvintes de eventos para gerenciar.
- Manutenção: Facilita a adição, remoção ou alteração de elementos sem precisar reatribuir ouvintes de eventos.
- Memória: Menos ouvintes de eventos significam menos uso de memória.

Exemplo de Delegação de Eventos

Imagine que você tem uma lista de itens e quer alertar o conteúdo do item quando ele for clicado. Em vez de adicionar um ouvinte de evento a cada item da lista, você pode adicionar um único ouvinte ao elemento pai.

```html
<ul id="minhaLista">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```JavaScript
document.getElementById('minhaLista').addEventListener('click', function(e) {
  // Verifica se o clique veio de um <li>
  if(e.target.tagName === 'LI') {
    alert(e.target.textContent);
  }
});
```

Neste exemplo, e.target é o elemento que foi realmente clicado. Se esse elemento for um <li>, o código mostra um alerta com o texto desse item. Isso significa que, não importa quantos itens você adicione à sua lista, o ouvinte de eventos no elemento pai (<ul>) cuidará de todos eles.

Conclusão  
Eventos são fundamentais para interagir com os(as) usuários(as) em páginas da web, e saber como gerenciá-los eficientemente é uma habilidade essencial para qualquer desenvolvedor(a) JavaScript. A delegação de eventos é uma técnica poderosa que permite a você otimizar seu código e tornar suas aplicações web mais rápidas e responsivas. Experimente usar eventos e delegação de eventos em seus projetos para ver a diferença que eles podem fazer!

### Aula 3 - Deletar tags - Vídeo 2

Transcrição  
Agora que implementamos a funcionalidade de adicionar novas tags, vamos possibilitar também a remoção de tags já existentes.

Para isso, vamos detectar um clique nos itens da lista e procurar a imagem com o símbolo de X, onde a pessoa usuária vai clicar para remover o item.

Adição do ouvinte de eventos para remoção
Ao final do arquivo scripts.js, vamos pegar o listaTags e adicionar um ouvinte de eventos com .addEventListener(). O primeiro argumento será "click" e o segundo argumento será uma função que recebe o evento.

```JavaScript
listaTags.addEventListener("click", (evento) => {

})
```

Verificação do clique no X  
Queremos detectar onde ocorre o clique dentro da lista de tags. Para isso, vamos fazer uma condicional para que a ação só seja executada quando o X for clicado: if (evento.target.classList.contains("remove-tag")). Aqui, estamos verificando se o local onde clicamos possui a classe removeTag, que adicionamos ao X quando o criamos dinamicamente.

```JavaScript
listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        
    }
})
```

Remoção da tag  
Dentro dessa condicional, vamos fazer a remoção da tag. Primeiro, pegamos o elemento pai do X, que é o li, com const tagQueQueremosRemover. Depois, removemos esse li da lista de tags com listaTags.removeChild(tagQueQueremosRemover).

```JavaScript
listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    }
})
```

Teste de funcionalidade e remoção de rags estáticas no index.html

Vamos salvar e testar a funcionalidade de criar e remover tags no navegador. Primeiramente, clicamos no "X" para remover a tag "Programação", adicionada anteriormente.

No entanto, ao tentar remover a primeira tag, "Front-end", não conseguimos, pois ela não possui a classe necessária dentro da imagem. Podemos resolver isso removendo as linhas de código que criam a tag estática no index.html, deixando apenas as tags dinâmicas em nosso projeto.

Trecho de código a ser removido:

```JavaScript
<li>
    <p>Front-end</p>
    <img src="./img/close-black.svg">
</li>
```

Conclusão e próximos passos  
Com isso, conseguimos remover tags com sucesso. Mas seria interessante limitar as tags que podem ser adicionadas para manter a coerência do conteúdo.

Imagine que nossa plataforma é uma rede social para pessoas desenvolvedoras. Não queremos que alguém adicione uma tag irrelevante, como "receita de bolo", porque a rede social não é sobre isso. Ao restringir as tags permitidas a termos como "Front-end", "Programação", "Banco de dados" e similares, facilitamos a categorização e entendimento do conteúdo compartilhado.

Vamos continuar no próximo vídeo para implementar essa funcionalidade e aprimorar nosso projeto.

### Aula 3 - Definir possíveis tags - Vídeo 3

Transcrição  
Agora que podemos inserir e apagar tags, vamos limitar as opções disponíveis para a pessoa usuária.

Definição das tags permitidas  
Primeiro, definimos as tags permitidas. Ao final do arquivo scripts.js, criaremos uma variável chamada tagsDisponiveis que será uma lista de tags permitidas, como "Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript", entre outras.

> const tagsDisponiveis = ["Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"];

Função de verificação das tags disponíveis  
Com essa lista, verificaremos se a tag digitada está entre as permitidas antes de adicioná-la. Vamos construir uma função assíncrona chamada verificaTagsDisponiveis(), que recebe tagTexto como parâmetro e retorna uma promessa (new Promise()).

```JavaScript
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        
        }
```

Vamos simular uma requisição a um banco de dados para verificar a existência da tag, considerando um possível delay na resposta do servidor.

Como mencionado anteriormente, quando não sabemos quanto tempo uma operação pode levar, e não queremos que o JavaScript continue executando código e esqueça a existência dessa funcionalidade, utilizamos uma promessa (Promise). Quando essa promessa é resolvida, retorna o resultado para a etapa correta.

Para utilizar uma promessa, definimos a função como assíncrona. No nosso caso, como é uma simulação, não incluímos o reject, ou seja, a requisição nunca falhará.

Agora, vamos trabalhar dentro do resolve para que, após um determinado tempo, a resposta seja retornada para quem estiver utilizando essa funcionalidade.

Para isso, usamos setTimeout(), que permite definir o que deve acontecer e quando deve acontecer, após quantos milissegundos. Queremos que o resolve utilize tagsDisponiveis para verificar se tagTexto está presente. Fazemos isso com o método .includes(tagTexto), que percorre a lista e retorna true se encontrar a tag.

```JavaScript
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        })
    })
}
```

Agora, após definir o resolve, podemos adicionar uma vírgula e especificar o tempo em milissegundos. Definiremos como 1000, o que corresponde a 1 segundo. Assim, a pesquisa será rápida, mas ainda lidará com a sincronicidade do setTimeout, que define um intervalo de tempo para a execução.

```JavaScript
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000)
    })
}
```

Conclusão e próximos passos  
Tendo implementado essa funcionalidade, precisamos integrá-la a outra parte do código para que ela seja efetivamente utilizada. Ou seja, precisamos ativá-la quando a tag for digitada ou enviada. Vamos continuar o desenvolvimento na próxima etapa para garantir que essa verificação de tags funcione corretamente dentro do fluxo da aplicação.

### Aula 3 - Funções dinâmicas

No desenvolvimento do seu portfólio DEVSPOT, você decidiu implementar uma funcionalidade que permite aos visitantes filtrar seus projetos por tags, como "Front-end", "Back-end", "JavaScript", entre outras. Para tornar a experiência mais interativa, você implementou um sistema onde as tags podem ser adicionadas ou removidas dinamicamente. Utilizando JavaScript, você criou uma caixa de entrada para adicionar novas tags pressionando Enter e ícones de remoção em cada tag para facilitar a gestão. Agora, você deseja aprimorar essa funcionalidade, garantindo que apenas tags válidas sejam adicionadas e que as tags possam ser removidas eficientemente.

Considerando as técnicas de manipulação do DOM e programação assíncrona aprendidas, como você pode aprimorar a funcionalidade de adição de tags para verificar se a tag inserida é válida antes de adicioná-la à lista, e qual seria a melhor forma de implementar a remoção de uma tag ao clicar no ícone de remoção?

Resposta:

Utilizar addEventListener para capturar o evento de clique no ícone de remoção e tagExistsAsync para verificar a validade da tag antes de adicioná-la.

```JavaScript
tagsInput.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        const tagText = tagsInput.value.trim();
        if (await tagExistsAsync(tagText)) {
            // Adiciona a tag
        }
    }
});
tagsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-tag')) {
        // Remove a tag
    }
});
```

> Esta alternativa combina corretamente a verificação assíncrona da existência da tag antes de adicioná-la e a implementação eficiente da remoção de tags, seguindo as práticas ensinadas no curso.

### Aula 3 - Faça como eu fiz: inserção e remoção de tags com validação

Nesta aula, aprendemos como implementar a funcionalidade de leitura de arquivos e a inserção de tags baseadas no input do usuário, além de como remover tags já existentes e validar as tags inseridas. Vamos praticar essas funcionalidades no seu projeto.

Agora é sua vez de praticar, fazendo o mesmo no seu projeto. Para isso:

- Adicione a funcionalidade de inserir tags no seu projeto.
- Implemente a funcionalidade de remover tags.
- Adicione uma validação para permitir somente tags predefinidas.
- Teste a inserção, remoção e validação de tags no navegador.

Opinião do instrutor

Abaixo, deixo um passo a passo detalhado de como pode realizar a atividade.

Primeira ação detalhada: Adicionar funcionalidade de inserção de tags

1. Selecione o input de tags no HTML:

Adicione um id ao seu input de tags. No arquivo index.html, encontre o input onde as tags são digitadas e adicione id="input-tags".  
`<input type="text" id="input-tags" placeholder="Digite uma tag">`

2. Crie a variável para o input de tags no JavaScript:

No arquivo script.js, selecione o input de tags pelo ID usando getElementById.
const inputTags = document.getElementById('input-tags');

3. Adicione um Event Listener para o input de tags:

```JavaScript
Adicione um ouvinte de eventos para detectar quando o usuário pressiona a tecla Enter.
    if (event.key === 'Enter') {
        event.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto  !== "") {
            // Adicione a tag à lista de tags
        }
    }
});
```

4. Crie a tag e insira na lista:

Dentro do Event Listener, crie um novo elemento li para a tag e adicione-o à lista de tags.

```JavaScript
const listaTags = document.getElementById("lista-tags");
const tagNova = document.createElement("li");
tagNova.innerHTML = `${tagTexto} <img src="img/close.svg" class="remove-tag" alt="Remove">`;
listaTags.appendChild(tagNova);
inputTags.value = "";
```

Segunda ação detalhada: Implementar funcionalidade de remoção de tags

Adicione um Event Listener para a lista de tags:

No script.js, adicione um ouvinte de eventos para detectar cliques na lista de tags.

```JavaScript
    if (event.target.classList.contains('remove-tag')) {
        const tagQueQueremosRemover = event.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    }
```

Terceira ação detalhada: Adicionar validação para tags predefinidas

Defina a lista de tags disponíveis:

Crie um array com as tags disponíveis no script.js.

```JavaScript
const tagsDisponiveis = ['front-end', 'programação', 'data science', 'full stack', 'HTML', 'CSS', 'JavaScript'];
```

Valide as tags antes de inseri-las:

No Event Listener de inserção de tags, valide se a tag está na lista de tags disponíveis.

```JavaScript
    if (event.key === 'Enter') {
        event.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "" && tagsDisponiveis.includes(tagTexto)) {
            const tagNova = document.createElement('li');
            tagNova.innerHTML = `${tagTexto} <img src="img/close.svg" class="remove-tag" alt="Remove">`;
            listaTags.appendChild(tagNova);
            inputTags.value = "";
        } else {
            alert('Tag inválida!');
        }
    }
```

Quarta ação detalhada: Testar a inserção, remoção e validação de tags no navegador

- Abra o projeto no navegador:
 Atualize a página para garantir que todas as mudanças foram aplicadas.

- Teste a inserção de tags:
Digite diferentes tags no campo de input e pressione Enter. Verifique se apenas as tags disponíveis são aceitas e adicionadas à lista.

- Teste a remoção de tags:
Clique no ícone de "x" ao lado de cada tag para removê-la da lista.

- Verifique as mensagens de alerta:
Digite uma tag não disponível e veja se a mensagem de alerta aparece corretamente.

Ao seguir esses passos, você implementará e testará com sucesso a inserção, remoção e validação de tags no seu projeto. Boa sorte!

### Aula 3 - Lista de exercícios da aula 3

Exercício 1) Adicionando tags dinamicamente com JavaScript

Conteúdo:

Você trabalha em um projeto web onde precisa adicionar dinamicamente tags a partir do input do usuário. O objetivo é permitir que os usuários insiram novas tags pressionando a tecla Enter e que estas tags sejam exibidas em uma lista na tela. Vamos implementar essa funcionalidade.

Exercício 2) Validação de formulário de cadastro com JavaScript

Conteúdo:

Você está desenvolvendo um sistema de cadastro de usuários e precisa validar os campos de um formulário antes de enviar os dados ao servidor. Os campos que precisam ser validados são: nome, e-mail e senha. A validação deve garantir que todos os campos estejam preenchidos e que o e-mail esteja em um formato válido.

Exercício 3) Removendo tags ao clicar no "x"

Conteúdo:

Você trabalha em uma rede social para desenvolvedores e precisa implementar a funcionalidade de remoção de tags criadas pelos usuários. Para isso, você deve detectar o clique no ícone de "x" e remover a tag correspondente. Utilize o código fornecido abaixo e construa a funcionalidade de remoção de tags.

```html
<ul id="tagList">
  <li>JavaScript <img src="x-icon.png" alt="remove tag" class="remove-tag"></li>
</ul>
```

Exercício 4) Limitando as tags permitidas

Conteúdo:

Você precisa garantir que os usuários só possam adicionar tags pré-definidas para manter a relevância do conteúdo da rede social de desenvolvedores. Implemente uma verificação ao adicionar novas tags para permitir apenas tags específicas como "frontend", "programação", "banco de dados", etc.

```html
<input type="text" id="entradaTag" placeholder="Adicionar uma tag">
<button id="btnAdicionarTag">Adicionar Tag</button>
<ul id="listaTags"></ul>
```

Exercício 5) Verificando tags disponíveis

Conteúdo:

Você está desenvolvendo uma aplicação que permite aos usuários inserir e apagar tags, mas é necessário limitar as tags que eles podem usar. Para isso, você precisa criar uma lista de tags permitidas e uma função assíncrona que verifica se a tag digitada pelo usuário está nesta lista. A função deve simular uma requisição ao banco de dados, retornando o resultado após um breve atraso.

Opinião do instrutor

Resposta do exercício 1)

Opinião da instrutora:

Primeiro, vamos adicionar o código HTML necessário no arquivo index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tag Input</title>
</head>
<body>
    <!-- Input para adicionar tags -->
    <input type="text" id="input-tags" placeholder="Digite uma tag e pressione Enter">
    
    <!-- Lista para exibir as tags adicionadas -->
    <ul id="lista-tags"></ul>

    <!-- Script JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

Neste código:

- Um `<input>` do tipo texto com id input-tags permite que os usuários digitem tags.
- Uma `<ul>` com id lista-tags será usada para exibir as tags inseridas dinamicamente.

2. Código JavaScript (script.js)

Agora, vamos adicionar o código JavaScript no arquivo script.js para tornar o sistema de tags funcional:

```JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o input de tags e a lista de tags
    const inputTags = document.getElementById('input-tags');
    const listaTags = document.getElementById('lista-tags');

    // Adiciona um ouvinte de evento para capturar a tecla Enter no input
    inputTags.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Verifica se a tecla pressionada foi Enter
            event.preventDefault(); // Evita o comportamento padrão do Enter (submeter o formulário)

            const tagTexto = inputTags.value.trim(); // Obtém o texto da tag e remove espaços em branco extras
            if (tagTexto !== '') { // Verifica se o texto da tag não está vazio
                // Cria um novo elemento <li> para a nova tag
                const novaTag = document.createElement('li');
                novaTag.innerHTML = `${tagTexto} <img src="img/close.svg" class="remove-tag" alt="Remover Tag">`;
                listaTags.appendChild(novaTag); // Adiciona a nova tag à lista de tags
                inputTags.value = ''; // Limpa o input de tags para o próximo input
            }
        }
    });

    // Adiciona um ouvinte de evento para capturar cliques na lista de tags
    listaTags.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-tag')) { // Verifica se o elemento clicado é um botão de remoção de tag
            event.target.parentElement.remove(); // Remove o pai do botão (ou seja, o <li> que contém a tag)
        }
    });
});
```

Explicação do Código JavaScript  
Evento DOMContentLoaded: Espera até que todo o DOM esteja carregado para iniciar a execução do JavaScript. Isso garante que todos os elementos HTML estejam disponíveis para manipulação.

Seleção de Elementos: const inputTags = document.getElementById('input-tags'); seleciona o elemento de entrada de tags onde os usuários digitam as tags. const listaTags = document.getElementById('lista-tags'); seleciona a lista `<ul>` onde as tags serão exibidas.

Evento keypress no Input de Tags: Adiciona um ouvinte de evento para capturar quando uma tecla é pressionada dentro do input de tags. event.key === 'Enter' verifica se a tecla pressionada foi Enter. event.preventDefault(); impede o comportamento padrão do Enter, que é submeter o formulário.

Criação e Adição de Nova Tag: const tagTexto = inputTags.value.trim(); obtém o texto digitado no input de tags e remove espaços em branco extras. if (tagTexto !== '') { ... } verifica se o texto da tag não está vazio. const novaTag = document.createElement('li'); cria um novo elemento `<li>` para representar a nova tag. novaTag.innerHTML = ${tagTexto} `<img src="img/close.svg" class="remove-tag" alt="Remover Tag">`; define o HTML da nova tag, incluindo o texto da tag e um ícone de fechar. listaTags.appendChild(novaTag); adiciona a nova tag à lista de tags.

Evento click na Lista de Tags para Remoção: Adiciona um ouvinte de evento para capturar cliques na lista de tags. event.target.classList.contains('remove-tag') verifica se o elemento clicado tem a classe remove-tag, que é atribuída ao ícone de fechar. event.target.parentElement.remove(); remove o elemento pai do ícone de fechar, ou seja, remove a tag da lista quando o ícone de fechar é clicado.

Resposta do exercício 2)

Opinião:

Entendi! Vamos dividir o código em trechos menores e explicar cada parte separadamente.

- Passo 1: Estrutura do HTML (index.html)
- Primeiro, crie a estrutura básica do HTML para o formulário de cadastro:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Cadastro</title>
</head>
<body>
    <form id="cadastro-form">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <span id="erro-nome" class="erro"></span>
        
        <label for="email">E-mail:</label>
        <input type="text" id="email" name="email">
        <span id="erro-email" class="erro"></span>
        
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha">
        <span id="erro-senha" class="erro"></span>
        
        <button type="submit">Cadastrar</button>
    </form>

    <script src="script.js"></script>
</body>
</html>
```

Selecione os elementos do formulário (nome, email, senha) e os spans de erro correspondentes (erroNome, erroEmail, erroSenha) usando document.getElementById.

```JavaScript
    const form = document.getElementById('cadastro-form');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');
```

Adicione um event listener para o evento submit do formulário, que executa uma função anônima quando o formulário é enviado.

```JavaScript
   form.addEventListener('submit', function(event) {
})
```

Dentro da função do event listener, use event.preventDefault() para impedir o comportamento padrão de envio do formulário.

```JavaScript
  event.preventDefault();
```

Verifique se o campo nome está vazio. Se estiver, exibe uma mensagem de erro no span erroNome.

```JavaScript
    if (nome.value.trim() === '') {
            erroNome.textContent = 'O nome é obrigatório.';
            return; // Encerrar a função se houver erro
        } else {
            erroNome.textContent = '';
        }
```

Verifique se o campo email está vazio. Se estiver, exibe uma mensagem de erro no span erroEmail. Você pode utilizar uma expressão regular (regexEmail) para validar o formato do e-mail.

```JavaScript
       const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            erroEmail.textContent = 'O e-mail é obrigatório.';
            return; // Encerrar a função se houver erro
        } else if (!regexEmail.test(email.value.trim())) {
            erroEmail.textContent = 'O e-mail não é válido.';
            return; // Encerrar a função se houver erro
        } else {
            erroEmail.textContent = '';
        }
```

Verifique se o campo senha está vazio. Se estiver, exibe uma mensagem de erro no span erroSenha.

```JavaScript
        if (senha.value.trim() === '') {
            erroSenha.textContent = 'A senha é obrigatória.';
            return; // Encerrar a função se houver erro
        } else {
            erroSenha.textContent = '';
        }
```

Se todos os campos estiverem preenchidos corretamente (sem mensagens de erro visíveis), o formulário é submetido usando form.submit().

Resposta do exercício 3)

Opinião:

- Adicione um evento de clique ao elemento ul que contém a lista de tags.
- Verifique se o alvo do clique é o ícone de "x" utilizando event.target.classList.contains('remove-tag')
- Encontre o elemento li pai do ícone de "x" com event.target.parentElement
- Remova o elemento li pai utilizando o método remove

```JavaScript
  document.getElementById('tagList').addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-tag')) {
      const tagToRemove = event.target.parentElement;
      tagToRemove.remove();
    }
  });
</script>
```

Resposta do exercício 4)

Opinião:

Primeiro, crie uma lista de tags permitidas em uma constante chamada tagsPermitidas. Essas são as únicas tags que poderão ser adicionadas.

```JavaScript
const tagsPermitidas = ['frontend', 'programação', 'banco de dados', 'backend', 'devops'];
```

Obtenha os elementos do DOM que serão utilizados: o campo de entrada de tags, a lista onde as tags serão exibidas e o botão de adicionar tag.

```JavaScript
const entradaTag = document.getElementById('entradaTag');
const listaTags = document.getElementById('listaTags');
const btnAdicionarTag = document.getElementById('btnAdicionarTag');
```

Adicione um evento de clique ao botão de adicionar tag. Esse evento chamará uma função para processar a entrada de uma nova tag.

```JavaScript
btnAdicionarTag.addEventListener('click', function() {
    const novaTag = entradaTag.value.trim().toLowerCase();
    
    // Passo 4 e 5 são realizados aqui
    
    entradaTag.value = '';
});
```

Dentro da função de clique, verifique se a tag digitada está na lista de tags permitidas e se não é uma duplicata usando uma função auxiliar tagDuplicada.

```JavaScript
if (tagsPermitidas.includes(novaTag) && !tagDuplicada(novaTag)) {
    // Passo 6 é realizado aqui
}
```

Crie a função tagDuplicada para verificar se a tag já existe na lista de tags.

```JavaScript
function tagDuplicada(tag) {
    const tagsExistentes = Array.from(listaTags.children).map(li => li.textContent.trim().toLowerCase());
    return tagsExistentes.includes(tag);
}
```

Se a tag for permitida e não duplicada, crie um novo elemento li para representá-la. Adicione um ícone de "x" ao li para permitir que a tag seja removida.

```JavaScript
const li = document.createElement('li');
li.textContent = novaTag;

const iconeRemover = document.createElement('img');
iconeRemover.src = 'x-icon.png'; // Certifique-se de que este caminho esteja correto
iconeRemover.alt = 'remover tag';
iconeRemover.classList.add('remover-tag');

li.appendChild(iconeRemover);
listaTags.appendChild(li);
```

Adicione um evento de clique ao ícone de "x" para que a tag seja removida quando o ícone for clicado.

```JavaScript
listaTags.addEventListener('click', function(evento) {
    if (evento.target.classList.contains('remover-tag')) {
        const tagParaRemover = evento.target.parentElement;
        tagParaRemover.remove();
    }
});
```

Resposta do exercício 5)

Opinião:

Crie a lista de tags permitidas:

> const tagsDisponiveis = ["front-end", "programação", "data science", "full stack", "HTML", "CSS", "JavaScript"];

Desenvolva a função assíncrona verificaTagsDisponiveis:

```JavaScript
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000);
    });
}
```

- A constante tagsDisponiveis contém a lista de tags permitidas.
- A função verificaTagsDisponiveis é declarada como assíncrona e retorna uma Promise.
- O setTimeout dentro da função simula um atraso de 1 segundo antes de verificar se a tag digitada está na lista de tags permitidas usando o método includes.
- A função resolve a Promise com true ou false, dependendo do resultado da verificação.

### Aula 3 - O que aprendemos?

Nessa aula, você aprendeu como:

- Manipular o Document Object Model (DOM) para adicionar e remover elementos dinamicamente usando JavaScript.
- Usar listeners de eventos para capturar ações do(a) usuário(a), como pressionar a tecla Enter e clicar em ícones de remoção.
- Criar elementos HTML dinamicamente e inseri-los na página.
- Usar funções assíncronas, async/await e Promises para realizar verificações assíncronas antes de adicionar tags.
- A delegação de eventos pode tornar nosso código mais eficiente, adicionando um único event listener a um elemento pai para gerenciar eventos em seus filhos.

## Aula 4 - Coletando dados do Formulário

### Aula 4 - Limitar tags inseridas - Vídeo 1

Transcrição  
Construímos uma funcionalidade para verificar as tags que a pessoa usuária consegue digitar no campo de tags. Agora, precisamos utilizá-la no momento em que os dados forem inseridos no input.

Para isso, vamos mover a função do input tags do addEventListener, para abaixo da nossa nova função verificaTagsDisponíveis(). Isso evitará o risco de erro de tentarmos utilizar uma funcionalidade antes de ela ser construída.

Agora, o ouvinte de definição de tags já existe. Precisamos adicionar novas funcionalidades para verificar se a tag já existe ou não.

Abaixo da linha if (tagTexto !=="") vamos utilizar uma constante tagExiste para verificar se ela está na lista ou não. Para isso, vamos utilizar o await verificaTagsDisponiveis(tagTexto).

Se passarmos o mouse sobre o await, ele vai nos avisar que precisamos utilizar o await sempre em funções assíncronas. Então, precisamos adicionar a palavra-chave async antes da criação dessa funcionalidade dentro do ouvinte de eventos.

```JavaScript
inputTags.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
        const tagExiste = await verificaTagsDisponiveis(tagTexto);
// código omitido
```

No momento em que enviarmos, ele vai chamar aquela função, vai enviar o valor e vai retornar true ou false. Se retornar true, queremos imprimir a tag na tela.

Queremos tentar ver se conseguimos colocar na tela, a partir do retorno daquela promise. Podemos utilizar um try antes do tagExiste, que terá o fechamento no final do input tags. Depois, precisamos adicionar um catch(error){}. Agora, ele vai tentar executar aquela funcionalidade de verificar se a tag existe, e se não funcionar, ele vai retornar algum erro.

Dentro do catch, podemos adicionar um console.error que vai retornar a mensagem "Erro ao verificar a existência da tag".

Também podemos adicionar um alerta, para ficar ainda mais claro para a pessoa usuária. Sempre que ocorrer um erro, ele vai fazer isso.

Mas esse erro é, por exemplo, quando ocorre um erro na requisição para aquela funcionalidade. Não é um erro, por exemplo, que a tag não existe. Precisamos nos preocupar com essa situação também.

Depois do tagExiste, precisamos adicionar um mapa condicional. If tagExiste, então ele vai construir o elemento. Senão, ele vai alertar que a tag não foi encontrada.

Estamos lidando com dois tipos de situações que podem dar problema. Tanto na requisição, quanto quando a tag não existe. São situações diferentes, mas ambas retornariam algum feedback para a pessoa usuária.

```JavaScript
inputTags.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            try {
                const tagExiste = await verificaTagsDisponiveis(tagTexto);
                if (tagExiste) {
                    const tagNova = document.createElement("li");
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
                    listaTags.appendChild(tagNova);
                    inputTags.value = "";
                } else {
                    alert("Tag não foi encontrada.");
                }
            } catch (error) {
                console.error("Erro ao verificar a existência da tag");
                alert("Erro ao verificar a existência da tag. Verifique o console.")
            }
        }
    }
})
```

Testando a aplicação  
Vamos testar. Se inserirmos "teste" e pressionarmos "Enter", ele nos avisa que a tag não foi encontrada. Se inserirmos "front-end", ele aceita, faz a verificação e adiciona a tag "front-end" ao nosso projeto. Então, a nossa funcionalidade está funcionando com sucesso!

Utilizamos vários conceitos de assincronicidade do JavaScript, que são o try-catch, o async-await. Utilizamos o setTimeout, onde definimos um tempo para aquela função ser executada.

No próximo vídeo, daremos continuidade no projeto, pois ainda temos muitas funções para serem construídas!

### Aula 4 - Verificação assíncrona

No desenvolvimento do seu portfólio DEVSPOT, você decidiu implementar uma funcionalidade que permite aos usuários(as) adicionar tags relacionadas às tecnologias utilizadas em seus projetos. Para melhorar a experiência do(a) usuário(a) e a consistência dos dados, você implementou uma verificação assíncrona que confirma se as tags inseridas estão em uma lista predefinida de tags válidas. Utilizando JavaScript, você aplicou técnicas de manipulação de erros, ação condicional e operações assíncronas com async/await e try...catch.

Considerando a necessidade de verificar a validade de uma tag de forma assíncrona antes de adicioná-la à lista de tags do projeto, qual trecho de código melhor representa a implementação dessa funcionalidade?

Resposta:

```JavaScript
tagsInput.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const tagText = tagsInput.value.trim();
        if (tagText !== '') {
            try {
                const tagExists = await tagExistsAsync(tagText);
                if (tagExists) {
                    const newTag = document.createElement('li');
                    newTag.innerHTML = `<p>${tagText}</p><img src="./img/close-black.svg" class="remove-tag">`;
                    tagsList.appendChild(newTag);
                    tagsInput.value = '';
                } else {
                    alert('Tag não encontrada. Por favor, insira uma tag válida.');
                }
            } catch (error) {
                console.error('Erro ao verificar a existência da tag:', error);
                alert('Erro ao verificar a existência da tag. Verifique o console para mais detalhes.');
            }
        }
    }
});
```

> Este código segue corretamente a abordagem async/await para operações assíncronas, utiliza try...catch para manipulação de erros e implementa a lógica condicional para verificar a existência da tag antes de adicioná-la, alinhando-se com a solução proposta no contexto.

### Aula 4 - Dados do formulário - Vídeo 2

Transcrição  
Já implementamos várias funcionalidades na inserção de tags e na inserção de imagens dentro do projeto.

Agora, é importante termos acesso a tudo o que for inserido dentro do formulário, como o nome do projeto, descrição e lista de tags.

Para isso, precisamos selecionar o botão de publicar do formulário. Então, vamos no index.html e ver se existe algum identificador desse botão.

Temos a classe botão-publicar. Podemos usar ela. No scripts.js, vamos criar uma variável const botaoPublicar, que vai receber um document.querySelector(".botao-publicar").

Tendo acesso a esse botão, queremos detectar o clique dentro dele. Esse async vai ser utilizado no futuro, explicaremos no momento que for conveniente o motivo do uso dele.

Precisamos tirar aquele evento padrão de envio de formulário. Vamos utilizar o evento.preventDefault().

const botaoPublicar = document.querySelector(".botao-publicar");

```JavaScript
botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();
```

Agora, ele não vai atualizar a página no envio desse formulário, e podemos começar a selecionar os campos de digitação dentro dele.

```JavaScript
const botaoPublicar = document.querySelector(".botao-publicar");

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome");
    const descricaoDoProjeto = document.getElementById("descricao");
    
```

Agora, como pegar uma lista de tags? Até o momento, todos os locais estamos querendo acessar somente o conteúdo que tem dentro dele. Para isso, vamos utilizar um const tagsProjetocom um array, ou seja, uma lista de informações com todos os elementos "p" que encontrar. Para pegar somente o texto, vamos usar .map((tag) => tag.textContent.

```JavaScript
const botaoPublicar = document.querySelector(".botao-publicar");

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);
```

Agora, dentro do tags-projeto, teremos uma lista com todas as tags, e dentro das nossas variáveis nomeDoProjeto e descricaoDoProjeto, estamos recebendo elementos. E para receber o valor, vamos precisar colocar .value no final deles.

Testando a aplicação  
Agora podemos testar, e para testar, vamos utilizar três console.logs.

```JavaScript
const botaoPublicar = document.querySelector(".botao-publicar");

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

    console.log(nomeDoProjeto);
    console.log(descricaoDoProjeto);
    console.log(tagsProjeto);
})
```

Vamos verificar o que vai retornar tudo isso que capturamos dentro dessas variáveis.

Vamos abrir o inspecionar elemento no navegador, clicando no botão direito do mouse, e abrir o console, que é a segunda opção do menu superior.

Vamos colocar o nome do projeto, a descrição e as tags de front-end e programação. Em seguida, vamos clicar no botão "Publicar".

Ele retornou para nós três console.log dentro do nosso console. Retornou os textos que inserimos nos campos:

Gato bonifácio

Projeto de portfólio do gato

(2) ['Front-end', 'Programação']

Conseguimos com sucesso resgatar todos os valores de dentro desse formulário! Agora precisamos simular o envio dele para um banco de dados. Faremos isso no próximo vídeo.

### Aula 4 - Simulação de envio - Vídeo 3

Transcrição  
Agora que conseguimos capturar os dados de dentro do nosso formulário, podemos implementar uma funcionalidade de simulação de envio dos dados para um back-end, ou seja, para um banco de dados.

Para isso, no script.js vamos construir uma função que vai se chamar publicarProjeto.

Vamos retornar uma promessa, porque como é uma simulação de um envio para o banco de dados, é o mesmo caso dos outros. Não temos como garantir que vai dar certo e nem garantir que vai dar errado. Precisamos esperar esse processo de envio ser resolvido para retornar essa informação.

Então, como vamos simular, vamos utilizar um return new Promise(resolve, reject). Depois, vamos definir o que vai ser feito dentro dessa promessa.

Vamos simular um intervalo de tempo com o setTimeout. E esse timeout vai receber uma arrow function, que vai receber uma variável const deuCerto, que vai receber um número aleatório.

Conseguiremos esse número aleatório através de Math.random() > 0.5. Então, ele vai retornar a verdade quando um número aleatório, que foi retornado do Math.random, for maior do que 0.5. Senão, ele vai retornar essa promessa como errado.

```JavaScript
async function publicarProjeto(nomeDoProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
    })
}
```

Está bem simulada essa situação, por isso que colocamos o Math.random, porque não vamos definir somente se deu certo ou não, vai acontecer algum fator externo para retornar essa resposta da promise. Não vamos colocar manualmente se deu certo ou não, vai ter um fator externo que vai dar essa resposta para nós. E aqui vai ser baseado na sorte.

Então, dando sequência, faremos uma condicional. E precisamos ainda colocar quanto tempo queremos que demore essa nossa promessa. Então, vamos colocar 2000 milissegundos (2 segundos), só para dar um tempo de isso acontecer e simular, então, a demora da internet da pessoa usuária.

O código de function publicarProjeto vai ficar assim:

```JavaScript
async function publicarProjeto(nomeDoProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
            if (deuCerto) {
                resolve("Projeto publicado com sucesso.")
            } else {
                reject("Erro ao publicar o projeto.")
            }
        }, 2000)
    })
}
```

Agora, precisamos utilizar essa funcionalidade que foi construída dentro do envio do formulário. Mas faremos isso na próxima aula!

### Aula 4 - Para saber mais: Event Loop, Call Stack e Task Queue

Agora que estamos explorando a assincronicidade com o JavaScript, é essencial entender como ele gerencia as operações, especialmente aquelas que não acontecem instantaneamente, como as ações que estamos criando durante este curso.

Aqui, vamos desvendar o mistério por trás do Event Loop, Call Stack e Task Queue, e como eles trabalham juntos para fazer o JavaScript parecer multitarefa.

JavaScript é Síncrono, mas...  
Por padrão, o JavaScript executa código linha por linha, de forma síncrona. Isso significa que ele precisa terminar uma linha antes de passar para a próxima. Mas e se uma linha de código leva muito tempo para ser executada, como uma requisição de rede? É aí que entram os conceitos de código assíncrono, Event Loop, Call Stack e Task Queue.

Call Stack: O Gerente de Tarefas  
Imagine a Call Stack (Pilha de Chamadas) como uma pilha de bandejas. Cada vez que você chama uma função, você coloca uma bandeja nesta pilha. Quando a função termina, você tira a bandeja de cima. Isso mantém tudo organizado, sabendo sempre qual função deve retornar depois.

```JavaScript
function primeiraFuncao() {
  segundaFuncao();
  console.log("Olá da primeira função!");
}

function segundaFuncao() {
  console.log("Olá da segunda função!");
}

primeiraFuncao();
```

Neste exemplo, a segundaFuncao() é chamada dentro da primeiraFuncao(). Então, a Call Stack fica assim:

primeiraFuncao()  
segundaFuncao()  

Quando segundaFuncao() termina, ela é removida da pilha, seguida pela primeiraFuncao().

Task Queue: A Fila de Espera  
Quando o JavaScript executa código assíncrono, como setTimeout, ele não espera que a operação termine para continuar. Em vez disso, ele coloca essa operação em uma fila chamada Task Queue (Fila de Tarefas), e continua executando o resto do código síncrono.

```JavaScript
console.log("Início");

setTimeout(() => {
  console.log("Processado no timeout");
}, 2000);

console.log("Fim");
```

Neste caso, "Fim" é impresso antes de "Processado no timeout", porque setTimeout é assíncrono e vai para a Task Queue, esperando a Call Stack ficar vazia.

Event Loop: O Maestro  
Agora, como o JavaScript sabe quando executar o código da Task Queue? Aqui entra o Event Loop (Laço de Eventos). O trabalho do Event Loop é simples: ele verifica se a Call Stack está vazia. Se estiver, ele pega o primeiro item da Task Queue e o move para a Call Stack para ser executado. Esse processo continua, permitindo que o JavaScript execute código assíncrono, como callbacks e promessas, no momento certo.

Exemplo Prático

```JavaScript
console.log("Início");

setTimeout(() => {
  console.log("Timeout 1");
}, 3000);

setTimeout(() => {
  console.log("Timeout 2");
}, 2000);

console.log("Fim");
```

Neste exemplo, a execução ocorre da seguinte forma:

- "Início" é impresso.
- "Fim" é impresso logo depois.
- Após 2000ms, "Timeout 2" é executado primeiro, pois sua espera é menor.
- Após 3000ms, "Timeout 1" é executado.

Isso mostra como o Event Loop gerencia a execução assíncrona, garantindo que o código seja executado na ordem correta, baseado no tempo de espera.

Conclusão  
Entender o Event Loop, junto com a Call Stack e a Task Queue, é fundamental para trabalhar eficientemente com JavaScript, especialmente ao lidar com operações assíncronas. Isso não apenas ajuda a escrever código mais eficiente e a evitar erros comuns, como também abre portas para explorar recursos avançados do JavaScript, tornando suas aplicações mais rápidas e responsivas.

### Aula 4 - Faça como eu fiz: verificação de tags e publicação de projeto

Nesta aula, aprendemos como verificar se as tags digitadas pelo usuário são válidas e como capturar dados do formulário para simular um envio a um banco de dados.

Agora é sua vez de praticar, fazendo o mesmo no seu projeto. Para isso:

- Mova a função inputTags para baixo da função verificaTagsDisponiveis.
- Adicione a verificação assíncrona das tags no momento de inserção.
- Capture os dados do formulário ao clicar no botão de publicar.
- Simule o envio desses dados para um backend.

Opinião do instrutor

Abaixo, deixo um passo a passo detalhado de como pode realizar a atividade.

- Primeira ação detalhada:
- Mover a função inputTags
- Abra o arquivo script.js.
- Localize a função inputTags que está entre as linhas 43 a 54.
- Recorte essa função e cole abaixo da função verificaTagsDisponiveis para evitar erros de execução.

Segunda ação detalhada:

Adicionar a verificação assíncrona das tags

No evento de criação de tags, adicione uma condicional para verificar se a tag existe:

```JavaScript
if (tagTexto !== "") {
    try {
        const tagExiste = await verificaTagsDisponiveis(tagText);
        if (tagExiste) {
            // Código para adicionar a tag
        } else {
            alert("Tag não foi encontrada.");
        }
    } catch (error) {
        console.error("Erro ao verificar a existência da tag", error);
        alert("Erro ao verificar a existência da tag. Verifique o console.");
    }
}
```

Lembre-se de adicionar a palavra-chave async antes da definição da função do ouvinte de eventos.

Terceira ação detalhada:

Capturar dados do formulário

No arquivo script.js, na linha 85, adicione:

```JavaScript
botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeProjeto = document.getElementById("nome").value;
    const descricaoProjeto = document.getElementById("descricao").value;
    
    const tagsProjeto = Array.from(document.querySelectorAll(".tagList p"))
        .map(tag => tag.textContent);

    console.log(nomeProjeto);
    console.log(descricaoProjeto);
    console.log(tagsProjeto);
});
```

Quarta ação detalhada:

Simular o envio dos dados

1. Crie a função publicarProjeto no arquivo script.js, na linha 99:

```JavaScript
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
            if (deuCerto) {
                resolve("Projeto publicado com sucesso.");
            } else {
                reject("Erro ao publicar o projeto.");
            }
        }, 2000);
    });
}
```

2. Utilize essa função dentro do evento de clique do botão de publicar:

```JavaScript
    evento.preventDefault();

    const nomeProjeto = document.getElementById("nome").value;
    const descricaoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(document.querySelectorAll(".tagList p"))
        .map(tag => tag.textContent);

    try {
        const mensagem = await publicarProjeto(nomeProjeto, descricaoProjeto, tagsProjeto);
        console.log(mensagem);
        alert(mensagem);
    } catch (error) {
        console.error(error);
        alert(error);
    }
});
```

Pronto! Agora você tem as instruções detalhadas para replicar a funcionalidade de verificação de tags e simulação de envio dos dados no seu projeto. Boa prática!

### Aula 4 - Lista de exercícios da aula 4

Exercício 1) Validação de E-mail em Formulário de Cadastro

Conteúdo:

Você está desenvolvendo um formulário de cadastro de usuários para um site. Um dos requisitos é validar se o e-mail inserido pelo usuário já está registrado no sistema antes de permitir o envio do formulário. A validação deve ser feita de forma assíncrona, consultando uma lista de e-mails previamente cadastrados.

Exercício 2) Validação de Nome de Usuário em Plataforma de Jogos

Conteúdo:

Você está desenvolvendo uma plataforma de jogos online e precisa implementar uma funcionalidade para validar se o nome de usuário escolhido está disponível. A validação deve ocorrer de forma assíncrona, consultando uma lista de nomes de usuários já registrados, antes de permitir que o usuário finalize o cadastro.

Implemente a funcionalidade de validação de nome de usuário em um formulário de cadastro. A função de validação deve verificar se o nome de usuário digitado já existe em uma lista de nomes registrados e fornecer feedback em tempo real.

Exercício 3) Capturando dados do formulário e simulando envio para o banco de dados

Conteúdo:

Você trabalha com desenvolvimento web e precisa capturar as informações inseridas em um formulário, incluindo o nome do projeto, descrição e lista de tags, e simular o envio desses dados para um banco de dados.

Selecione o botão de publicar do formulário.
Capture os dados do formulário quando o botão for clicado.
Simule o envio dos dados para um banco de dados.
Exercício 4) Enviando feedback do usuário via formulário

Conteúdo:

Você trabalha com desenvolvimento web e precisa criar um formulário de feedback para os usuários do site. O formulário deve capturar o nome do usuário, seu e-mail e a mensagem de feedback. Depois, esses dados devem ser enviados para um servidor quando o botão de enviar for clicado.

Selecione o botão de enviar do formulário.
Capture os dados do formulário quando o botão for clicado.
Simule o envio dos dados para um servidor.
Exercício 5) Simulando envio de formulário para um backend

Conteúdo:

Você trabalha com desenvolvimento web e precisa simular o envio de dados de um formulário para um backend. Crie uma função assíncrona que simule esse envio utilizando uma promessa (Promise). A função deve receber três parâmetros: nome do projeto, descrição do projeto e tags do projeto. A simulação deve ter um tempo de espera e um retorno aleatório para o sucesso ou falha do envio.

Implemente a função publicarProjeto que simula o envio de dados do formulário.
Utilize setTimeout para simular um tempo de resposta de 2 segundos.
Use Math.random para determinar aleatoriamente se o envio foi bem-sucedido ou falhou.
A função deve retornar uma mensagem de sucesso ou falha com base na simulação.
Ver opinião do instrutor
Opinião do instrutor

Resposta do exercício 1)

Opinião

Primeiro, crie uma estrutura HTML básica com um campo de entrada para o e-mail e um local para exibir o feedback ao usuário.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificação de E-mail</title>
    <style>
        #email-feedback {
            margin-top: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <form id="cadastro-form">
        <label for="email-input">E-mail:</label>
        <input type="email" id="email-input" placeholder="Digite seu e-mail">
        <div id="email-feedback"></div>
    </form>
</body>
</html>
```

Crie uma função verificaEmailDisponivel que simula a verificação assíncrona se o e-mail já está cadastrado. Esta função deve retornar uma promessa que resolve com true ou false.

```JavaScript
async function verificaEmailDisponivel(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const emailsCadastrados = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
            resolve(!emailsCadastrados.includes(email));
        }, 1000);
    });
}
```

Adicione um ouvinte de eventos ao campo de entrada de e-mail que dispara a verificação quando o campo perde o foco (evento blur). Utilize async/await para lidar com a chamada assíncrona.

```JavaScript
document.getElementById('email-input').addEventListener('blur', async function (event) {
    const email = event.target.value;

    if (email.trim() !== "") {
        try {
            const emailDisponivel = await verificaEmailDisponivel(email);
            exibirFeedback(emailDisponivel, email);
        } catch (error) {
            console.error('Erro ao verificar a disponibilidade do e-mail:', error);
            exibirFeedbackErro();
        }
    }
});
```

Crie funções para fornecer feedback ao usuário sobre a disponibilidade do e-mail, exibindo mensagens de sucesso ou erro.

```JavaScript
function exibirFeedback(disponivel, email) {
    const feedbackElemento = document.getElementById('email-feedback');
    if (disponivel) {
        feedbackElemento.textContent = `O e-mail ${email} está disponível.`;
        feedbackElemento.style.color = "green";
    } else {
        feedbackElemento.textContent = `O e-mail ${email} já está cadastrado.`;
        feedbackElemento.style.color = "red";
    }
}

function exibirFeedbackErro() {
    const feedbackElemento = document.getElementById('email-feedback');
    feedbackElemento.textContent = "Erro ao verificar a disponibilidade do e-mail. Verifique o console.";
    feedbackElemento.style.color = "red";
}
```

Resposta do exercício 2)

Opinião:

Primeiro, crie uma estrutura HTML básica com um campo de entrada para o nome de usuário e um local para exibir o feedback ao usuário.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificação de Nome de Usuário</title>
    <style>
        #username-feedback {
            margin-top: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <form id="cadastro-form">
        <label for="username-input">Nome de Usuário:</label>
        <input type="text" id="username-input" placeholder="Digite seu nome de usuário">
        <div id="username-feedback"></div>
    </form>
</body>
</html>
```

Crie uma função verificaNomeUsuarioDisponivel que simula a verificação assíncrona se o nome de usuário já está registrado. Esta função deve retornar uma promessa que resolve com true ou false.

```JavaScript
async function verificaNomeUsuarioDisponivel(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const usuariosRegistrados = ['player1', 'gamer2024', 'champion'];
            resolve(!usuariosRegistrados.includes(username));
        }, 1000);
    });
}
```

Adicione um ouvinte de eventos ao campo de entrada de nome de usuário que dispara a verificação quando o campo perde o foco (evento blur). Utilize async/await para lidar com a chamada assíncrona.

```JavaScript
document.getElementById('username-input').addEventListener('blur', async function (event) {
    const username = event.target.value;

    if (username.trim() !== "") {
        try {
            const usernameDisponivel = await verificaNomeUsuarioDisponivel(username);
            exibirFeedback(usernameDisponivel, username);
        } catch (error) {
            console.error('Erro ao verificar a disponibilidade do nome de usuário:', error);
            exibirFeedbackErro();
        }
    }
});
```

Crie funções para fornecer feedback ao usuário sobre a disponibilidade do nome de usuário, exibindo mensagens de sucesso ou erro.

```JavaScript
function exibirFeedback(disponivel, username) {
    const feedbackElemento = document.getElementById('username-feedback');
    if (disponivel) {
        feedbackElemento.textContent = `O nome de usuário ${username} está disponível.`;
        feedbackElemento.style.color = "green";
    } else {
        feedbackElemento.textContent = `O nome de usuário ${username} já está registrado.`;
        feedbackElemento.style.color = "red";
    }
}

function exibirFeedbackErro() {
    const feedbackElemento = document.getElementById('username-feedback');
    feedbackElemento.textContent = "Erro ao verificar a disponibilidade do nome de usuário. Verifique o console.";
    feedbackElemento.style.color = "red";
}
```

Resposta do exercício 3)

Opinião:

Crie um formulário HTML com campos para o nome do projeto, descrição e tags, além de um botão para publicar.

```html
<body>
    <form id="projeto-form">
        <label for="nome-projeto">Nome do Projeto:</label>
        <input type="text" id="nome-projeto" placeholder="Digite o nome do projeto"><br>
        
        <label for="descricao-projeto">Descrição:</label>
        <textarea id="descricao-projeto" placeholder="Digite a descrição"></textarea><br>
        
        <label for="tag-input">Tags:</label>
        <input type="text" id="tag-input" placeholder="Digite uma tag e pressione Enter">
        <ul id="lista-tags"></ul><br>
        
        <button type="button" id="publicar-btn">Publicar</button>
        <div id="feedback" class="feedback"></div>
    </form>
```

Adicione um ouvinte de eventos ao botão de publicar para capturar os dados do formulário quando o botão for clicado.

```JavaScript
publicarBtn.addEventListener('click', capturarEEnviarDados);
```

Crie a função enviarDadosParaBanco para simular o envio dos dados para um banco de dados. Esta função usa um setTimeout para simular a latência de uma chamada de rede.

```JavaScript
async function enviarDadosParaBanco(dados) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Dados enviados para o banco de dados:', dados);
            resolve('Sucesso');
        }, 1000);
    });
}
```

A função capturarEEnviarDados captura os dados do formulário e chama enviarDadosParaBanco para simular o envio. Ela também fornece feedback ao usuário sobre o status do envio.

```JavaScript
async function capturarEEnviarDados() {
    const nomeProjeto = document.getElementById('nome-projeto').value.trim();
    const descricaoProjeto = document.getElementById('descricao-projeto').value.trim();

    if (!nomeProjeto || !descricaoProjeto) {
        feedback.textContent = "Nome do projeto e descrição são obrigatórios.";
        feedback.style.color = "red";
        return;
    }

    const dados = {
        nome: nomeProjeto,
        descricao: descricaoProjeto,
        tags: tags
    };

    try {
        const resultado = await enviarDadosParaBanco(dados);
        feedback.textContent = `Dados enviados com sucesso: ${resultado}`;
        feedback.style.color = "green";
    } catch (error) {
        feedback.textContent = "Erro ao enviar os dados.";
        feedback.style.color = "red";
    }
}
```

Resposta do exercício 4)

Opinião:

Primeiro, precisamos criar um formulário.

```JavaScript
    <form id="feedback-form">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome"><br>
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail"><br>
        
        <label for="mensagem">Mensagem:</label><br>
        <textarea id="mensagem" rows="4" placeholder="Digite sua mensagem"></textarea><br>
        
        <button type="button" id="enviar-btn">Enviar</button>
        <div id="feedback" class="feedback"></div>
    </form>
```

Adicione um ouvinte de eventos ao botão de enviar para capturar os dados do formulário quando o botão for clicado.

```JavaScript
enviarBtn.addEventListener('click', capturarEEnviarDados);
```

Crie a função enviarDadosParaServidor para simular o envio dos dados para um servidor. Esta função utiliza setTimeout para simular a latência de uma chamada de rede.

```JavaScript
async function enviarDadosParaServidor(dados) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Dados enviados para o servidor:', dados);
            resolve('Sucesso');
        }, 1000);
    });
}
```

A função capturarEEnviarDados captura os dados do formulário e chama enviarDadosParaServidor para simular o envio. Ela também fornece feedback ao usuário sobre o status do envio.

```JavaScript
async function capturarEEnviarDados() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        feedback.textContent = "Por favor, preencha todos os campos.";
        feedback.style.color = "red";
        return;
    }

    const dados = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    try {
        const resultado = await enviarDadosParaServidor(dados);
        feedback.textContent = `Mensagem enviada com sucesso: ${resultado}`;
        feedback.style.color = "green";
        // Limpar formulário após envio bem-sucedido (opcional)
        form.reset();
    } catch (error) {
        feedback.textContent = "Erro ao enviar a mensagem.";
        feedback.style.color = "red";
    }
}
```

Simulação de Envio: A função enviarDadosParaServidor simula o envio dos dados usando setTimeout. Esta função imprime os dados no console e resolve a promessa após 1 segundo.
Captura e Envio: A função capturarEEnviarDados coleta os dados do formulário e chama enviarDadosParaServidor. Ela também exibe feedback ao usuário sobre o sucesso ou falha do envio.
Resposta do exercício 5)

Opinião da instrutora:

Para resolver o problema de simular o envio de dados de um formulário para um backend utilizando uma função assíncrona com Promises em JavaScript, vamos seguir os passos abaixo:

- Construa a função publicarProjeto que deve ser assíncrona, recebendo três parâmetros: nomeProjeto, descricaoProjeto e tagsProjeto. Dentro da função publicarProjeto:
- Utilize setTimeout para simular um tempo de resposta de 2 segundos.
- Utilize Math.random() para determinar aleatoriamente se o envio foi bem-sucedido ou falhou (50% de chance para cada caso).

A função deve retornar uma promessa (Promise) que:

- Resolve com uma mensagem de sucesso caso o envio seja bem-sucedido.
- Rejeita com um erro caso o envio falhe.

```JavaScript
async function publicarProjeto(nomeProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        // Simulação de tempo de resposta de 2 segundos
        setTimeout(() => {
            // Simulação de sucesso ou falha aleatória (50% de chance de sucesso)
            if (Math.random() < 0.5) {
                resolve(`Projeto '${nomeProjeto}' publicado com sucesso!`);
            } else {
                reject(new Error(`Falha ao publicar o projeto '${nomeProjeto}'. Tente novamente.`));
            }
        }, 2000); // Tempo de espera de 2 segundos
    });
}
```

Agora, precisamos utilizar essa função, primeiramente definindo as variáveis que serão aplicadas nessa funcionalidade.

```JavaScript
// Exemplo de uso da função publicarProjeto
const nome = "Meu Projeto";
const descricao = "Descrição do meu projeto...";
const tags = ["frontend", "web", "javascript"];

await publicarProjeto(nome, descricao, tags)
```

### Aula 4 - O que aprendemos?

Nessa aula, você aprendeu como:

- Verificar a validade de uma tag de forma assíncrona antes de adicioná-la à lista, usando JavaScript.
- Usar try...catch para capturar e tratar erros durante operações assíncronas.
- Capturar os dados de um formulário, incluindo nome, descrição e tags do projeto, preparando-os para envio.
- Simular uma requisição de publicação de projeto usando Promises para alternar entre sucesso e falha.
- Usar event.preventDefault() para controlar o fluxo de envio de formulários e manipular os dados de forma personalizada.

## Aula 5 - Gerando interações com o formulário

### Aula 5 - Envio do formulário - Vídeo 1

Transcrição  
Implementamos uma simulação de envio de formulário. No entanto, atualmente, ao enviarmos o formulário, apenas chamamos os consoles. Removemos esses consoles no arquivo scripts.js, das linhas 94 a 97, para utilizar a funcionalidade publicarProjeto() que foi construída.

Trecho removido de scripts.js:

```JavaScript
// código omitido

console.log(nomeDoProjeto);
console.log(descricaoDoProjeto);
console.log(tagProjeto);

// código omitido
```

Substituiremos o local onde a função de envio está ocorrendo, recortando-a das linhas 87 a 94 e colocando-a após a função publicarProjeto.

scripts.js

```JavaScript
// código omitido

const botaoPublicar = document.querySelector(".botao-publicar");

async function publicarProjeto(nomeDoProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
            if (deuCerto) {
                resolve("Projeto publicado com sucesso.")
            } else {
                reject("Erro ao publicar o projeto.")
            }
        }, 2000)
    })
}

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

// código omitido
```

Fazemos isso para evitar chamar uma funcionalidade construída após o chamado, o que resultaria em um erro. Dessa forma, resolvemos essa questão.

Na linha 107, dentro do ouvinte do botaoPublicar, utilizamos o try{} para tentar chamar a funcionalidade de simulação de publicação. Dentro do bloco try{}, chamamos const resultado = await publicarProjeto(), enviando como parâmetros o nomeDoProjeto, a descricaoDoProjeto e as tagsProjeto.

Utilizamos console.log() para imprimir o resultado e verificar a mensagem do resolve. Exibimos um alerta com alert(), passando a mensagem "Deu tudo certo!" para que a pessoa não precise abrir o console. Se ocorrer um problema, utilizamos o catch para capturar o erro.

Dentro do bloco catch(error), exibimos "Deu errado: " seguido do error no console e no alerta com a mensagem "Deu tudo errado!".

```JavaScript
// código omitido

    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
        console.log(resultado);
        alert("Deu tudo certo!")
    } catch (error) {
        console.log("Deu errado: ", error)
        alert("Deu tudo errado!");
    }

})
```

Dessa forma, tanto o erro quanto a mensagem definida no project são exibidos adequadamente.

Teste do Formulário  
Preenchemos o formulário no navegador (127.0.0.1:5500/index.html) para testar se funcionou. Inserimos "teste" no campo "Nome do projeto", "teste 1" na descrição, e "front-end" em "Tags". Ao apertar "Publicar" na parte inferior direita, o sistema espera dois segundos e exibe a mensagem "Deu tudo errado" na parte superior central.

Como o resultado é aleatório, podemos continuar clicando em "Publicar" e eventualmente receber uma mensagem de erro, mesmo que tudo tenha funcionado corretamente.

Conceitos assíncronos  
Confirmamos que a função que construímos é assíncrona, pois aguarda dois segundos para ser concluída. Usamos uma promise() para simular esse comportamento e definimos a função como assíncrona com async. Para obter o resultado da função assíncrona, empregamos await.

Dica para aprofundamento: explore mais sobre esses conceitos nas atividades "Para Saber Mais" e assim aprofundar seu conhecimento.

Próximos passos  
Na sequência, implementaremos uma melhoria de usabilidade no projeto: remover os dados digitados no formulário após o envio. Acompanhe o próximo vídeo para realizar essa alteração!

### Aula 5 - Feedback de publicação

Após semanas de trabalho árduo, Alex, um desenvolvedor web entusiasta, finalizou seu mais recente projeto de portfólio, uma aplicação web interativa que destaca suas habilidades e projetos anteriores. Antes de adicionar este projeto ao seu portfólio DEVSPOT, Alex quer garantir que a funcionalidade de publicação esteja funcionando perfeitamente, mesmo sem uma conexão real com o servidor. Para isso, Alex implementou uma simulação de publicação que captura os dados do formulário e exibe uma mensagem de sucesso ou erro, dependendo do resultado da simulação. No entanto, Alex está enfrentando um dilema sobre como melhor estruturar o código para lidar com possíveis erros de forma eficaz e fornecer feedback apropriado ao usuário(a).

Considerando as práticas de programação assíncrona e manipulação de erros, qual das seguintes abordagens Alex deveria adotar para aprimorar a simulação de publicação do projeto e por quê?

Resposta:

Utilizar try...catch no evento do botão "Publicar" e diferenciar o feedback para o usuário com alert para sucesso e erro.

> Esta abordagem permite a Alex capturar e lidar com erros de forma eficaz no ponto de chamada da função publicarProjeto, utilizando async/await. Além disso, fornece um meio direto de informar o usuário sobre o sucesso ou falha da operação, alinhando-se com as melhores práticas de experiência do usuário.

### Aula 5 - Limpeza do formulário - Vídeo 2

Transcrição  
Agora que definimos todas as funcionalidades da aplicação, incluindo referência, publicação e pré-visualização, podemos implementar a funcionalidade do botão "Descartar".

Funcionalidade do botão "Descartar"  
O botão "Descartar" limpa todos os campos do projeto no formulário, retornando ao estado em que estavam na primeira vez que a pessoa usuária acessou a tela. Para isso, no arquivo scripts (linha 118), selecionamos o botão descartar. Declaramos const botaoDescartar, que receberá document.querySelector().

O querySelector() será a classe do botão descartar, encontrada na linha 83 do index.html, que é botao-descartar. No querySelector(), inserimos entre parênteses e aspas o ponto botao-descartar.

Selecionamos esse botão e adicionamos um ouvinte para detectar o clique. Utilizamos botaoDescartar.addEventListener(), com os parênteses abertos e fechados, e o evento que colocamos é o click, entre aspas, seguido por uma vírgula. Em seguida, inserimos (evento) => {} entre parênteses.

Dentro dessas chaves, primeiro inserimos evento.preventDefault() para evitar que o formulário execute seu comportamento padrão. Em seguida, selecionamos o próprio formulário para que possamos manipular seus campos conforme necessário.

Para isso, criamos uma variável const formulario que recebe o resultado de document.querySelector("form"). Isso faz com que o código busque o elemento form dentro de todo o documento HTML.

Estamos usando seletor de elemento, não de um específico. Como o projeto contém apenas um formulário, esse seletor básico é suficiente para encontrá-lo corretamente.

Resetando os campos do formulário
Para resetar todos os campos do formulário, utilizamos a funcionalidade formulario.reset(). Esse método reseta todos os campos de digitação do formulário, deixando-os vazios.

scripts.js

```JavaScript
// código omitido
botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const formulario = document.querySelector("form");
    formulario.reset();

})
```

A imagem de prévia não faz parte do formulário e precisa ser tratada separadamente. Precisamos acessar essa imagem para alterá-la.

Já temos a imagem principal e seu texto definidos em uma variável. Acessamos a variável imagemPrincipal.src e definimos o caminho da imagem padrão exibida no site ao carregá-lo.

Para verificar o caminho, consultamos a linha 55 do index.html.

Confirmamos que o diretório correto é a imagem1.png dentro da pasta img. Em seguida, alteramos o texto que faz referência ao nome da imagem, que está armazenado na variável nomeDaImagem, encontrada na linha 24 do script.

Voltamos para a linha 127 e utilizamos a variável nomeDaImagem, que receberá o .textContent de "image_projeto.png", como definido anteriormente na linha 60 do index.html.

Agora, limpamos a lista de tags. A lista de tags é um caso diferente, pois os itens são construídos com base no conteúdo do formulário, mas não fazem parte dos campos de digitação e, portanto, não são resetados pelo reset(). Para limpar a lista, definimos o innerHTML da listaTags como uma string vazia, "".

```JavaScript
// código omitido
botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const formulario = document.querySelector("form");
    formulario.reset();

    imagemPrincipal.src = "./img/imagem1.png";
    nomeDaImagem.textContent = "image_projeto.png";

    listaTags.innerHTML = "";
})
```

Com isso, podemos testar.

Testando a funcionalidade  
No navegador, escolhemos uma imagem clicando em "Carregar imagem", inserimos o nome do projeto como "Portfólio da Moni", adicionamos a descrição "Tem todos os meus projetos" e colocamos a tag "Front-end". Teclamos "Enter".

Em vez de clicarmos em "Publicar", clicamos em "Descartar". Ao clicar em descartar, todos os dados inseridos nos campos são apagados, e a imagem retorna ao estado inicial.

Conclusão  
Assim, implementamos várias funcionalidades na página de upload.

Personalização e Recursos Adicionais: caso deseje personalizar a página ou adicionar mais recursos, sinta-se à vontade para fazê-lo. Mas a função principal foi definida com base na assincronicidade.

### Aula 5 - Para saber mais: tratamento de erros em JavaScript
 Próxima Atividade

Quando você está aprendendo a programar em JavaScript, uma das coisas mais importantes que você vai encontrar pelo caminho são os erros. Eles podem parecer assustadores no início, mas na verdade, são apenas uma forma de o seu programa dizer: "Ei, algo não está certo aqui!". Entender como lidar com esses erros pode tornar seu código mais robusto e confiável. Vamos explorar algumas estratégias para um tratamento eficaz de erros em JavaScript.

Entendendo os Erros
Antes de mergulharmos nas estratégias, é importante entender o que são os erros. Em JavaScript, quando o código encontra um problema, ele "lança" um erro. Isso pode acontecer por várias razões, como tentar acessar uma variável que não existe, chamar uma função de maneira errada, entre outros.

Uso de try...catch
Uma das maneiras mais comuns de lidar com erros em JavaScript é usando a estrutura try...catch. Você coloca o código que pode gerar um erro dentro do bloco try, e se um erro ocorrer, o controle é passado para o bloco catch, onde você pode lidar com o erro ou mostrar uma mensagem para o usuário.

try {
  // Código que pode gerar erro
  console.log(minhaFuncao());
} catch (erro) {
  // O que fazer se um erro ocorrer
  console.log("Um erro ocorreu: ", erro.message);
}
```

Error Objects
Quando um erro ocorre, JavaScript cria um objeto de erro contendo informações sobre o que deu errado. Esse objeto pode ser muito útil para entender a causa do erro. Ele contém propriedades como name (o nome do erro) e message (uma mensagem descrevendo o erro).

Você também pode criar seus próprios objetos de erro usando o construtor Error e lançá-los usando a palavra-chave throw.

throw new Error("Algo deu errado!");
```

Motivação
Tratar erros de forma eficaz é crucial para desenvolver aplicativos confiáveis. Usando try...catch, Error objects, você pode garantir que seu aplicativo lide com erros de maneira elegante, melhorando a experiência do usuário e facilitando a depuração durante o desenvolvimento.

Lembre-se, erros são parte do processo de aprendizado e desenvolvimento. Com as estratégias certas, você pode transformá-los em oportunidades para criar um código mais forte e confiável.

### Aula 5 - Faça como eu fiz: implementando funcionalidades de publicação e descarte

Nesta aula, aprendemos como implementar a funcionalidade de envio de formulários utilizando funções assíncronas e a função de descarte para limpar o formulário.

Agora é sua vez de praticar, fazendo o mesmo no seu projeto. Para isso:

- Remova os consoles e ajuste a função de envio do formulário.
- Implemente o tratamento assíncrono do envio do formulário.
- Adicione a funcionalidade de limpar o formulário ao clicar no botão de descarte.
- Teste as funcionalidades no navegador.

Opinião do instrutor

Abaixo, deixo um passo a passo detalhado de como pode realizar a atividade.

Primeira ação detalhada:

Remover consoles e ajustar a função de envio

- No arquivo .js, vá até as linhas 94 e 97 e remova os comandos console.log.
- Recorte o bloco de código de envio do formulário entre as linhas 87 e 94.
- Cole esse bloco após a função publicarProjeto.

Segunda ação detalhada:

Implementar tratamento assíncrono do envio

Na linha 107, dentro do ouvinte do botão "Publicar", adicione um bloco try...catch para capturar e lidar com erros.
No bloco try, chame a função publicarProjeto passando os parâmetros necessários: nome do projeto, descrição e tags.
No caso de sucesso, exiba o resultado usando console.log e um alert para a pessoa usuária.
No caso de erro, capture o erro no bloco catch, exiba a mensagem de erro no console.log e também em um alert.

```JavaScript
document.querySelector("#botaoPublicar").addEventListener("click", async (event) => {
    event.preventDefault();
    try {
        const resultado = await publicarProjeto(nomeProjeto, descricaoProjeto, tagsProjeto);
        console.log(resultado);
        alert("Tudo certo!");
    } catch (error) {
        console.log("Deu errado: ", error);
        alert("Deu tudo errado!");
    }
});
```

Terceira ação detalhada:

Adicionar funcionalidade de limpar o formulário

Na linha 118, selecione o botão "Descartar" usando querySelector.

> const botaoDescartar = document.querySelector(".botaoDescartar");

Adicione um ouvinte de eventos para o clique no botão "Descartar".

```JavaScript
botaoDescartar.addEventListener("click", (event) => {
    event.preventDefault();
    const formulario = document.querySelector("form");
    formulario.reset();
    document.querySelector(".imagemPrincipal").src = "./img/imagem1.png";
    document.querySelector(".nomeImagem").textContent = "imagem1.png";
    document.querySelector(".listaTags").innerHTML = "";
});
```

Quarta ação detalhada:

Testar as funcionalidades no navegador

- Preencha o formulário com dados de teste.
- Clique no botão "Publicar" para verificar o envio e os alertas.
- Clique no botão "Descartar" para garantir que todos os campos do formulário são limpos e a imagem retorna ao estado inicial.

Essa atividade permitirá que você pratique o uso de funções assíncronas e manipulação do DOM para melhorar a usabilidade do seu projeto. Boa sorte!

### Aula 5 - Compartilhando o aprendizado

Se você chegou até aqui, espero que tenha seu projeto pronto (e se precisar de alguma ajuda, não deixe de abrir um tópico no fórum ou mandar mensagem no discord da Alura) e tenha adquirido muitos conhecimentos novos.

Que tal compartilhar seu certificado, seu aprendizado até aqui ou até mesmo o seu projeto comigo? Para isso, você pode:

Marcar a Alura nas redes sociais. Você pode encontrar os [nossos perfis por aqui](https://beacons.ai/aluraonline/);

Me marcar através das minhas redes sociais, que podem ser visualizadas por aqui;

Enviar mensagem no [Discord de alunos(as) da Alura](https://discord.gg/QeBdgAjXnn).

### Aula 5 - Projeto final do curso

Caso queira revisar o código final do curso, disponibilizamos os códigos para [baixar nesse link](https://github.com/alura-cursos/3802-javascript-assincrono/archive/refs/heads/aula-05.zip) ou veja nosso [repositório do Github](https://github.com/alura-cursos/3802-javascript-assincrono/tree/aula-05).

### Aula 5 - Lista de exercícios da aula 5

Exercício 1) Implementando tratamento de dados

Conteúdo:

Você foi convocado para uma missão especial: validar os dados dos projetos antes que sejam publicados! Sua tarefa é garantir que todos os campos obrigatórios (nome e descrição) estejam preenchidos e que pelo menos uma tag seja adicionada. Se tudo estiver certo, você liberará o projeto para o mundo!

Exercício 2) Formulário de busca

Conteúdo:

Prepare-se para uma expedição emocionante! Você deve desenvolver um radar de tags que permita aos exploradores encontrar projetos específicos digitando as tags corretas. Explore os projetos e exiba apenas aqueles que correspondem à tag buscada. Boa sorte, explorador!

Exercício 3) Limpando formulário

Conteúdo:

Imagine que você, como desenvolvedor(a), está construindo uma aplicação de gerenciamento de projetos. Nesta aplicação, você implementou um botão "Limpar" que permite aos usuários descartar todas as alterações feitas em um formulário, restaurando-o ao estado inicial. Vamos explorar como esse recurso pode ser implementado de forma eficaz para proporcionar uma experiência de usuário fluida e intuitiva. O estado inicial dessa aplicação é:

```JavaScript
<form id="projeto-form">
        <label for="nome">Nome do Projeto:</label>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="descricao">Descrição:</label><br>
        <textarea id="descricao" name="descricao" rows="4" cols="50" required></textarea><br><br>

        <label for="imagem">Imagem do Projeto:</label><br>
        <input type="file" id="imagem" name="imagem"><br>
        <img id="imagem-preview" src="./img/imagem1.png" alt="Imagem do Projeto"><br><br>

        <label for="tags">Tags:</label><br>
        <input type="text" id="tags" name="tags" placeholder="Adicione tags separadas por vírgula"><br><br>
        <div id="tags-list">
            <!-- Lista de tags será preenchida dinamicamente -->
        </div>

        <button type="submit">Salvar Projeto</button>
        <button type="button" class="botao-limpar">Limpar</button>
    </form>

    <h2>Projetos</h2>
    <div id="lista-projetos">
        <!-- Lista de projetos será preenchida dinamicamente -->
    </div>
```

Exercício 4) Exibindo detalhes de um pedido

Conteúdo:

Você está desenvolvendo uma aplicação de gerenciamento de pedidos online. Em sua aplicação, há uma função que processa e exibe detalhes de um pedido. É essencial garantir que a função maneje corretamente situações onde os dados do pedido possam estar incompletos ou incorretos.

Implemente uma função exibirDetalhesPedido que recebe um objeto pedido como parâmetro. Utilize o try...catch para capturar e tratar possíveis erros que possam ocorrer ao acessar propriedades inexistentes ou inválidas do objeto pedido.

Exercício 5) Tratamento de Erros com try...catch

Conteúdo:

Você está desenvolvendo um sistema de gerenciamento de uma biblioteca que lê informações de livros de um objeto JavaScript. É importante garantir que sua aplicação seja capaz de lidar com diferentes cenários de erro ao acessar e processar esses dados.

Implemente uma função lerDadosBiblioteca que simule a leitura de dados de uma biblioteca a partir de um objeto JavaScript. Utilize try...catch para capturar e tratar possíveis erros que possam ocorrer durante a leitura e processamento dos dados.

Opinião do instrutor

Resposta do exercício 1)

Opinião da instrutora:

Vamos detalhar o passo a passo para o evento de clique no botão "Publicar" em JavaScript:

- Seleção e Evento do Botão "Publicar":
- Utilize document.querySelector('.botao-publicar') para selecionar o elemento HTML que possui a classe "botao-publicar".
- Adicione um ouvinte de evento addEventListener para capturar o evento de clique (click).

```JavaScript
document.querySelector('.botao-publicar').addEventListener('click', async (event) => {
```

Prevenção do Comportamento Padrão:

- Use event.preventDefault() para evitar o comportamento padrão do formulário, que é o envio após o clique no botão.

```JavaScript
event.preventDefault(); // Previne o envio padrão do formulário
```

Captura dos Valores dos Campos de Entrada:

- Utilize document.getElementById('nome').value para capturar o valor do campo com id "nome".
- Utilize document.getElementById('descricao').value para capturar o valor do campo com id "descricao".

```JavaScript
const nomeProjeto = document.getElementById('nome').value;
const descricaoProjeto = document.getElementById('descricao').value;
```

Captura dos Textos das Tags da Lista:

- Se houver uma lista de tags representadas por elementos <p> dentro de um elemento com id "tagsList", utilize Array.from(tagsList.querySelectorAll('p')).map(tag => tag.textContent) para obter um array com os textos de todas as tags.

```JavaScript
const tagsList = document.getElementById('tagsList');
const tagsProjeto = Array.from(tagsList.querySelectorAll('p')).map(tag => tag.textContent);
```

Função de Validação do Formulário:

- Defina uma função validarFormulario que recebe os parâmetros nome, descricao e tags.
- Dentro desta função, verifique se nome e descricao estão preenchidos.
- Verifique também se a array tags possui pelo menos um elemento.

```JavaScript
function validarFormulario(nome, descricao, tags) {
    if (!nome || !descricao) {
        throw new Error('Por favor, preencha todos os campos obrigatórios (nome e descrição).');
    }
    if (tags.length === 0) {
        throw new Error('Adicione pelo menos uma tag ao projeto.');
    }
}
```

Bloco Try...Catch para Gerenciar Erros:

- Envolve a chamada para validarFormulario e a função publicarProjeto dentro de um bloco try...catch para lidar com exceções.
- Se a validação e a publicação forem bem-sucedidas, exiba uma mensagem de sucesso.
- Se ocorrer um erro, capture o erro, exiba no console e mostre uma mensagem de erro para o usuário.

```JavaScript
try {
    validarFormulario(nomeProjeto, descricaoProjeto, tagsProjeto);

    const result = await publicarProjeto(nomeProjeto, descricaoProjeto, tagsProjeto);
    console.log(result);
    alert('Projeto publicado com sucesso!');
} catch (error) {
    console.error('Erro ao publicar projeto:', error);
    alert('Erro ao publicar projeto: ' + error.message);
}
```

Resposta do exercício 2)

Opinião da instrutora:

Captura do Valor Digitado no Campo de Busca:

event.target.value.trim().toLowerCase() captura o valor digitado no campo de busca, removendo espaços em branco extras no início e no final (trim()) e convertendo para minúsculas (toLowerCase()).

```JavaScript
const busca = event.target.value.trim().toLowerCase();
```

Seleção dos Projetos a Serem Filtrados:

document.querySelectorAll('.projeto') seleciona todos os elementos HTML que possuem a classe "projeto". Isso retorna uma NodeList contendo todos os elementos que correspondem à classe "projeto".

```JavaScript
const projetos = document.querySelectorAll('.projeto');
```

Bloco try...catch para Iteração e Filtragem:

try { ... } catch (error) { ... } envolve o código dentro de um bloco try para capturar quaisquer erros que possam ocorrer durante a iteração e filtragem dos projetos.

```JavaScript
try {
    projetos.forEach(projeto => {
        // Iteração pelos projetos e suas tags
        const tags = projeto.querySelectorAll('.tag');
        let mostrar = false;

        tags.forEach(tag => {
            if (tag.textContent.trim().toLowerCase().includes(busca)) {
                mostrar = true; // Define mostrar como true se a tag contém a busca
            }
        });

        // Define a exibição do projeto com base na variável mostrar
        if (mostrar) {
            projeto.style.display = 'block'; // Exibe o projeto
        } else {
            projeto.style.display = 'none'; // Oculta o projeto
        }
    });
} catch (error) {
    console.error('Erro ao filtrar projetos:', error); // Registra o erro no console
    alert('Ocorreu um erro ao filtrar os projetos. Verifique o console para mais detalhes.'); // Exibe uma mensagem de erro ao usuário
}
```

Exibição ou Ocultação dos Projetos:

Dentro do forEach, projeto.style.display é definido para 'block' se mostrar for true, caso contrário é definido para 'none', controlando assim a visibilidade dos projetos na página.

Resposta do exercício 3)

Opinião

- Implemente um evento de clique para o botão "Limpar" (botao-limpar) presente na interface da sua aplicação.
- Utilize event.preventDefault() para evitar que o botão cause um comportamento padrão de envio de formulário ou recarregamento da página.
- Utilize form.reset() para limpar todos os campos do formulário, deixando-os prontos para novas entradas como se o usuário estivesse começando do zero.

```JavaScript
   const form = document.querySelector('form');
   form.reset(); // Limpa todos os campos do formulário
```

Restaure a imagem padrão associada ao projeto, definindo o src de mainImage de volta para o caminho da imagem inicial.

```JavaScript
   const mainImage = document.getElementById('imagem');
   mainImage.src = './img/imagem1.png'; // Define o caminho da imagem padrão
```

Atualize o texto exibido para o nome padrão da imagem no elemento imageName, assegurando que todas as informações voltem ao estado inicial.

```JavaScript
   const imageName = document.getElementById('nome-imagem');
   imageName.textContent = 'image_projeto.png'; // Define o nome padrão da imagem
```

Limpe a lista de tags (tagsList.innerHTML = ''), removendo todas as tags adicionadas ao projeto anteriormente.

```JavaScript
   const tagsList = document.getElementById('tags-list');
   tagsList.innerHTML = ''; // Remove todas as tags da lista
```

Implemente blocos try...catch para capturar e lidar com quaisquer erros que possam ocorrer durante o processo de limpeza e restauração.

```JavaScript
   try {
       // Código de limpeza e restauração aqui
   } catch (error) {
       console.error('Erro ao limpar o formulário:', error); // Registra o erro no console
       alert('Ocorreu um erro ao limpar o formulário. Verifique o console para mais detalhes.'); // Exibe uma mensagem de erro ao usuário
   }
```

Resposta do exercício 4)

Opinião:

Implementação da Função:

- Crie uma função exibirDetalhesPedido que recebe um objeto pedido como parâmetro.
- Dentro da função, utilize try...catch para envolver o código que acessa propriedades do objeto pedido.
- Uso do try...catch:

No bloco try, tente acessar propriedades específicas do objeto pedido.

- Em caso de sucesso, exiba os detalhes do pedido.
- Em caso de erro (por exemplo, propriedade inexistente), lance um erro com throw new Error().
- Chamada da Função e Tratamento de Erros:

Fora da função exibirDetalhesPedido, crie um objeto pedido com dados simulados.

- Chame a função exibirDetalhesPedido passando o objeto pedido como argumento.
- Utilize um bloco catch para capturar e exibir o erro lançado pela função.

Exemplo de Implementação:

```JavaScript
// Função que simula a exibição de detalhes de um pedido
function exibirDetalhesPedido(pedido) {
    try {
        // Simula o acesso a propriedades do objeto pedido
        const id = pedido.id;
        const produto = pedido.produto;
        const quantidade = pedido.quantidade;

        // Verifica se todas as propriedades necessárias estão presentes
        if (!id || !produto || !quantidade) {
            throw new Error('Pedido incompleto. Verifique os dados fornecidos.');
        }

        // Exibe os detalhes do pedido
        console.log(`Detalhes do Pedido - ID: ${id}, Produto: ${produto}, Quantidade: ${quantidade}`);
    } catch (error) {
        // Captura e trata o erro
        console.error('Erro ao exibir detalhes do pedido:', error.message);
        // Poderia exibir uma mensagem para o usuário ou realizar outra ação apropriada
    }
}

// Objeto pedido com dados simulados
const pedido1 = {
    id: '123',
    produto: 'Camiseta',
    quantidade: 2
};

// Chamada da função e tratamento de erros
exibirDetalhesPedido(pedido1);
```

Tarefas Adicionais:

- Modifique o objeto pedido para simular diferentes cenários, como propriedades ausentes ou valores inválidos.
- Experimente diferentes tipos de erros dentro da função exibirDetalhesPedido, como tentar acessar uma propriedade que não existe no objeto pedido.

Resposta do exercício 5)

Opinião da instrutora:

Implementação da Função:

- Crie uma função lerDadosBiblioteca que simule a leitura de dados de uma biblioteca a partir de um objeto JavaScript.
- Dentro da função, utilize try...catch para envolver o código de leitura e processamento dos dados.
- Uso do try...catch:

No bloco try, tente acessar e processar os dados do objeto.

- Em caso de sucesso, exiba os dados dos livros.
- Em caso de erro (por exemplo, dados ausentes ou inválidos), lance um erro com throw new Error().
- Chamada da Função e Tratamento de Erros:

- Fora da função lerDadosBiblioteca, chame-a e utilize um bloco catch para capturar e exibir o erro lançado pela função.
- No bloco catch, exiba uma mensagem apropriada para o usuário ou realize outra ação para lidar com o erro.

Exemplo de Implementação:

```JavaScript
// Função que simula a leitura de dados de uma biblioteca a partir de um objeto JavaScript
function lerDadosBiblioteca() {
    try {
        // Simulação de acesso aos dados da biblioteca (pode ser substituído por dados reais)
        const biblioteca = {
            livros: [
                { id: 1, titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
                { id: 2, titulo: "A Metamorfose", autor: "Franz Kafka", ano: 1915 },
                { id: 3, titulo: "1984", autor: "George Orwell", ano: 1949 }
            ]
        };

        // Verifica se os dados são válidos
        if (!biblioteca || !biblioteca.livros || biblioteca.livros.length === 0) {
            throw new Error('Dados da biblioteca inválidos. Verifique os dados fornecidos.');
        }

        // Exibe os dados dos livros
        console.log('Dados da Biblioteca:');
        biblioteca.livros.forEach(livro => {
            console.log(`ID: ${livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
        });

    } catch (error) {
        // Captura e trata o erro
        console.error('Erro ao ler dados da biblioteca:', error.message);
        // Poderia exibir uma mensagem para o usuário ou realizar outra ação apropriada
    }
}
// Chamada da função e tratamento de erros
lerDadosBiblioteca();
```

### Aula 5 - Conclusão - Vídeo 3

Transcrição  
Parabéns pela conclusão deste curso! Estou muito feliz por ter acompanhado você até aqui.

O que aprendemos?  
Durante o curso, exploramos vários conceitos de programação assíncrona para desenvolver a página de upload de arquivos do CodeConnect. Visualizaremos o resultado no navegador.

> 127.0.0.1:5500

Selecionamos o botão "Carregar Imagem", escolhemos uma imagem específica e definimos o "Nome do projeto", que pode ser "portfólio do gato". Em seguida, preenchemos o campo de descrição com mais informações sobre o projeto, como: "Para este projeto foram usados HTML, CSS e JavaScript".

Logo após, inserimos algumas tags no campo designado, como front-end, que servirão como palavras-chave para o projeto. Pressionando "Enter", adicionamos um novo item à lista de tags, conforme o que digitamos no campo.

Também temos a opção de descartar essas informações ao clicarmos no botão "Descarte" ou "Publicar" as informações. Clicando em "Publicar", exibimos um feedback em um alerta.

Deu tudo certo!

O que usamos?  
Para desenvolver este projeto, utilizamos HTML, CSS, JavaScript e, especificamente em JavaScript, aplicamos promises, async-await, try-catch e set-timeout. Praticamos diferentes funções, variáveis e seletores de HTML.

Compartilhe seu aprendizado! Esses conceitos são essenciais para pessoas desenvolvedoras. Mostrar para todos que sabemos utilizá-los é uma boa maneira de evidenciar nosso conhecimento.

Utilizaremos as redes sociais para compartilhar nosso progresso: use a hashtag #AprendiNaAlura e publique no LinkedIn, Instagram e Discord. Assim, veremos todos por lá!

Nos vemos nos próximos cursos. Até breve!
