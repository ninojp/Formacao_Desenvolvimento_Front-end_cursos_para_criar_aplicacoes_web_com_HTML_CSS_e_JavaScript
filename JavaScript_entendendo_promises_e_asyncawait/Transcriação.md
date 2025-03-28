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

<!-- código omitido -->

<body>
    <aside>

    </aside>
    <script src="scripts.js"></script>
</body>

<!-- código omitido -->
Copiar código
Adicionando o logotipo
O primeiro elemento que vamos adicionar será o logotipo do CodeConnect. No escopo da tag aside, usaremos a tag img com o atributo src="./img/Logo.svg". Também vamos colocar um texto alternativo (atributo alt), que será "Logo do CodeConnect".

<!-- código omitido -->

<aside>
    <img src="./img/Logo.svg" alt="Logo do CodeConnect">
</aside>

<!-- código omitido -->
Copiar código
Criando o menu de navegação
Em seguida, temos o menu de navegação. Por isso, vamos utilizar a tag nav. No escopo dela, precisamos passar a lista de links, então usamos a tag ul, cuja classe será lista-links.

<!-- código omitido -->

<aside>
    <img src="./img/Logo.svg" alt="Logo do CodeConnect">
    <nav>
        <ul class="lista-links">
        
        </ul>
    </nav>
</aside>

<!-- código omitido -->
Copiar código
Adicionando os itens do menu de navegação
O primeiro item da lista de links deve ser inserido no escopo da tag li, que vamos adicionar em ul. Esse primeiro link será o botão "Publicar", então vamos colocar uma âncora (tag a) com o atributo href recebendo uma hashtag (#), por enquanto. Além disso, a classe dessa âncora será link-destaque, para facilitar a estilização. Dentro de a, digitaremos o texto "Publicar".

Construímos esse item da lista como uma âncora pois, mesmo aparentando ser um botão visualmente, ele não tem a funcionalidade de gerar alguma ação com o clique, sem ser levar para outra tela. Por isso, podemos utilizar um link (a) em vez de um botão (button).

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
Copiar código
Podemos dar continuidade aos demais links, utilizando um novo li abaixo do primeiro. Dentro dele, vamos colocar outra âncora (a), também com o atributo href="#", mas agora colocaremos uma imagem (img) no escopo dela, com o atributo src igual a ./img/feed.svg entre aspas duplas.

Feito isso, na linha abaixo, adicionaremos o texto "Feed".

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
Copiar código
Agora temos um item da lista contendo um link, que será representado por uma imagem e um texto. Isso se repete para os links de "Perfil", "Sobre nós" e "Sair", então apenas repetiremos o mesmo processo. Ao final, teremos o seguinte resultado do menu de navegação:

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
Copiar código
Estilizando o corpo da aplicação
Uma vez colocados os links faltantes no código, podemos começar a estilização da aplicação. Para isso, vamos abrir o explorador de arquivos à esquerda e abrir o arquivo styles.css.

Feito isso, vamos iniciar a estilização ao final do código, utilizando o seletor de body para definir uma cor de fundo para a aplicação geral, não somente do menu lateral.

Para isso, usaremos a propriedade background-color, que receberá a variável var(--background-color), construída anteriormente no projeto base.

Na sequência, podemos definir a cor do texto (color) como var(--text-color). Assim, teremos a cor de fundo escura e a cor dos textos como branca.

Depois, podemos definir a fonte (font-family) como var(--font-family).

styles.css:

/* código omitido */

body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);
}
Copiar código
No caso acima, deixamos as variáveis com nomes ideais para adicionar às propriedades correspondentes, mas agora precisamos começar a posicionar os elementos do body.

Podemos fazer isso através da propriedade display: flex. Agora, todos os elementos do body se tornarão flex items e serão posicionados lado a lado pela configuração padrão do flex-direction.

Depois, podemos usar as propriedades justify-content: center e align-items: start. Isso irá centralizar todos os elementos do body e alinhá-los pelo início do elemento em si. Dessa forma, o topo dele será o foco do alinhamento.

/* código omitido */

body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);

    display: flex;
    justify-content: center;
    align-items: start;
}
Copiar código
Feito isso, podemos adicionar um height de 100vh, que definirá a altura da tela como 100% da altura da tela da pessoa usuária. Depois, usaremos um gap de 27px para fazer o espaçamento dos itens do body, além de um padding de 56px acima e abaixo, e 0 nas laterais.

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
Copiar código
Você pode conferir essas configurações no Figma do projeto.

Estilizando o menu lateral
Agora vamos estilizar o aside, logo após o body. Primeiramente, precisamos colocar um background-color diferente: nesse caso, var(--itens-background).

Depois, precisamos arredondar a borda da barra lateral. Faremos isso com a propriedade border-radius com o valor de 10px. Além disso, podemos definir uma altura (height) de 100%, de modo que o menu lateral ocupe 100% do espaço disponível para ele.

/* código omitido */

aside {
    background-color: var(--itens-background);
    border-radius: 10px;
    height: 100%;
}
Copiar código
Em seguida, vamos utilizar um padding de 40px acima e abaixo, 16px nas laterais. Além disso, vamos adicionar a propriedade text-align recebendo o valor center.

/* código omitido */

aside {
    background-color: var(--itens-background);
    border-radius: 10px;
    height: 100%;
    padding: 40px 16px;
    text-align: center;
}
Copiar código
Estilizando os links do menu lateral
Nesse momento, podemos utilizar a extensão Live Server para visualizar as alterações realizadas através do código CSS. Com o navegador aberto, podemos visualizar que alguns padrões foram estilizados, como o fundo da aplicação e o fundo do menu lateral.

No entanto, ainda precisamos estilizar os links. Dito isso, ao final do código de styles.css, vamos selecionar a classe .lista-links. No escopo dela, vamos colocar primeiro a propriedade display: flex seguida de flex-direction: column.

Isso dará a possibilidade de utilizar o gap para fazer um espaçamento entre os links. Sendo assim, vamos adicionar a propriedade gap com o valor de 40px. Feito isso, vamos definir uma margin-top de 80px, um align-items com o valor center, e um list-style-type com o valor none.

/* código omitido */

.lista-links {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 80px;
    align-items: center;
    list-style-type: none;
}
Copiar código
Dessa forma, conseguimos posicionar tudo corretamente na tela. Alinhamos os itens ao centro e também tiramos os estilos padrão da lista, que são os pontos à esquerda de cada item.

Por fim, vamos utilizar o seletor .lista-links li a, que também receberá display: flex, além de flex-direction: column. Com isso, conseguimos colocar as imagens acima do texto.

Também colocaremos um gap de 10px, seguido de um align-items: center. Com isso, definimos um espaçamento entre as imagens e os textos, além de alinhá-los ao centro.

/* código omitido */

.lista-links li a {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
Copiar código
Para finalizar, vamos utilizar a propriedade text-decoration: none para remover o estilo de link, em que temos uma linha abaixo do texto. Depois, definiremos a cor do texto como var(--secondary-color). Por último, iremos configurar a font-size como 22px.

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
Copiar código
Conclusão
Com isso, conseguimos estilizar todos os itens da lista, mas ainda existem algumas coisas a serem estilizadas, como o destaque do botão "Publicar", por exemplo.

Daremos continuidade à estilização no próximo vídeo!

### Aula 1 -  - Vídeo 3
### Aula 1 -  - Vídeo 4
### Aula 1 -  - Vídeo 5
### Aula 1 -  - Vídeo 6
