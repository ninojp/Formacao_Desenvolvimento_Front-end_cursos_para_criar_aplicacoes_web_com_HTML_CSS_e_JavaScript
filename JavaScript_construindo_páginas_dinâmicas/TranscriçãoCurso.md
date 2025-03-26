# Curso Alura: JavaScript construindo páginas dinâmicas

## Aula 1 - Integrando JavaScript ao projeto

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá, estudante! Boas-vindas a este curso de JavaScript. A instrutora Monica Hillman irá te guiar durante toda essa jornada de aprendizado.

Audiodescrição: Monica Hillman se descreve como uma mulher branca. Tem olhos castanhos e cabelos loiros longos. Usa óculos de grau e camiseta azul. Ao fundo, parede lisa sem decorações com iluminação gradiente do rosa para o azul.

O que vamos desenvolver?
Durante o curso, nós iremos construir uma aplicação de lista de compras com diversas funcionalidades.

![alt text](image.png)

Interface de aplicativo para lista de compras com fundo branco. No topo, há uma ilustração de uma lista de compras e uma sacola com itens de comida. Abaixo, campo de texto com a inscrição em cinza 'Digite o item que deseja adicionar' e um botão rosa com o texto 'Salvar item'. Na parte inferior, título 'Lista de Compras' em rosa, o texto em preto: 'Sua lista está vazia. Adicione itens a ela para não esquecer nada na próxima compra!'
Teremos o monitoramento para verificar se a lista de compras está vazia ou não. Se estiver vazia, será exibido um texto indicando que não há nenhum item na lista no momento.

Além disso, podemos digitar qualquer item no campo de entrada e clicar no botão "Salvar item". No momento em que um item é salvo na lista, a mensagem de lista vazia desaparece e o item inserido é exibido, consistindo no texto que foi colocado no campo de entrada e a data em que o item foi inserido.

Também há um checkbox interativo à esquerda do item. Ao marcá-lo, o item ficará riscado, ou seja, haverá um feedback visual para indicar que o item já foi comprado.

Para construir este projeto, focaremos em diversos conceitos de JavaScript. Por isso, você receberá o HTML pronto. Nós vamos construir, dentro de um arquivo index.js, a funcionalidade de ouvir o clique do botão da pessoa usuária após inserir o texto do item na lista com o addEventListener().

Também praticaremos bastante a manipulação do DOM (Document Object Model) para construir esse novo item na lista. Ademais, utilizaremos alguns métodos do JavaScript, como o new Date(), que permite a formatação de datas. Além disso, aprenderemos sobre import e export, permitindo a modularização do código.

O que você precisa saber antes de começar?
É importante que você já tenha conhecimento básico de JavaScript, como a criação de funções e variáveis, pois nos aprofundaremos na manipulação do DOM. Também é importante ter conhecimento de HTML e CSS, pois, embora não sejam abordados nesta aplicação, são fundamentais no contexto do front-end.

Por que é importante aprender tudo isso? Porque, como pessoa desenvolvedora front-end, não há como fugir da manipulação do DOM. Esses conceitos são essenciais para transformar as telas em dinâmicas e para a modularização do código, que melhora a experiência de outras pessoas desenvolvedoras que irão colaborar no seu trabalho.

Se você se interessou por tudo isso, não deixe de se matricular no curso. Nos encontramos no próximo vídeo. Até lá!

### Aula 1 - Preparando o ambiente

Olá, estudante! Desejamos boas-vindas ao curso JavaScript: construindo páginas dinâmicas.

No curso, usaremos o editor de código chamado [VSCode](https://code.visualstudio.com/) e iremos construir o projeto “Lista de Compras”. Você pode visualizar o layout do projeto acessando o [Figma](https://www.figma.com/design/QtW96TPE97jTKiTbl2ZNcD/Checklist---Desenvolva-aplica%C3%A7%C3%B5es-web-com-JavaScript?node-id=1035-1070&t=DZ1XSDNgvWOz5uKd-0).

Para baixar os “arquivos base” desse projeto você pode acessar o [repositório do github](https://github.com/alura-cursos/4299-javascript) ou clicar [aqui para baixar](https://github.com/alura-cursos/4299-javascript/archive/refs/heads/projeto-base.zip).

Por fim, para iniciar a execução do seu projeto, use a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) dentro do editor de código VSCode.

Caso tenha dúvidas durante a instalação ou no decorrer do curso, pode contar conosco criando um tópico no fórum ou interagindo no nosso servidor do Discord. Também não deixe de ajudar outros colegas. Vamos construir juntos essa grande comunidade da Alura? :)

### Aula 1 - JavaScript na Web - Vídeo 2

Transcrição  
Se você chegou até aqui, provavelmente tem alguma noção de como construir telas visuais para aplicações web utilizando HTML e CSS. Por que enfatizamos o aspecto visual? Porque o HTML é uma tecnologia que permite a construção de elementos na tela, enquanto o CSS possibilita a estilização desses elementos, como a troca de cor, cor de fundo, fonte do texto, entre outras funcionalidades. As possibilidades com essas duas tecnologias são inúmeras.

Conhecendo a aplicação  
Para ilustrar, utilizamos uma aplicação pronta de lista de compras, disponível para download na atividade "Preparando o Ambiente". Podemos conferir esse código HTML e CSS no Visual Studio Code.

Para visualizar o resultado da aplicação, podemos ativar a extensão Live Server clicando no botão "Go Live" no canto inferior direito. Com isso, uma janela é aberta no navegador com a aplicação.

A aplicação de lista de compras já possui uma imagem decorativa, um campo de digitação, um botão para salvar item, além da lista de compras e seus itens.

Por exemplo, adicionamos o item "ração de gato" na segunda-feira, 31 de dezembro de 2022, às oito e meia. A única interação na tela é o botão de checkbox, que podemos clicar para selecionar ou desselecionar o item, gerando uma alteração visual padrão desse tipo de input.

Entendendo JavaScript na web  
Já temos duas tecnologias no nosso cinto de utilidades dev. Sabemos construir uma tela, mas ela não é dinâmica. Por isso, precisamos aprimorar essa aplicação existente. Por exemplo, a data não corresponde à data atual. Além disso, se tentarmos inserir o item "suco de laranja" e clicar em "Salvar item", nada acontece.

É nesse momento que o JavaScript entra em nossa aplicação. O JavaScript permite a interação entre pessoa usuária e navegador, gerando efeitos através dessa interação.

Um comportamento comum de um campo de digitação é validar o dado e informar à pessoa usuária se o que foi digitado não vai de acordo com os requisitos necessários.

Por exemplo, normalmente uma senha deve ter 8 caracteres e pelo menos um carácter especial, um número e uma letra maiúscula. Se digitamos "12345", o site nos avisará que a senha não é forte o suficiente. Isso demonstra a interação da máquina conosco.

O mesmo ocorre ao clicar em um botão, seja para criar uma conta ou fazer uma postagem. Essas ações podem gerar novos elementos na tela ou algum efeito.

Executando JavaScript no navegador  
Já entendemos que o JavaScript transforma a tela em dinâmica, mas onde ele roda? Como funciona? Onde colocamos o JavaScript? Por padrão, essa linguagem é executada nos navegadores em geral - inclusive em celulares - ao acessar um site.

Para demonstrar o JavaScript rodando no navegador, podemos abrir as ferramentas do desenvolvedor, clicando com o botão direito do mouse no navegador e selecionando a opção "Inspecionar elemento" (ou pressionando a tecla "F12" ou atalho "Ctrl + Shift + C").

Feito isso, uma janela é aberta na lateral direita do navegador, com algumas abas. A primeira aba é a dos elementos, onde podemos visualizador todos os elementos HTML e CSS. Essas áreas estão empilhadas uma em cima da outra.

No topo, vamos entrar na aba "Console". Geralmente, podemos encontrar um ícone de engrenagem ativo no canto superior direito, que exibe algumas opções de configurações do console. Não manipularemos essas opções, então clicamos novamente na engrenagem para colapsá-las.

O console conta com uma interface semelhante a um bloco de notas, mas é um mini editor de código embutido no navegador. Nele, podemos interagir com o JavaScript diretamente no navegador.

Por exemplo, podemos usar console.log() e passar o texto "Olá mundo!", entre aspas.

> console.log("Olá, mundo!")  
> Olá, mundo!

Quando apertamos "Enter", a frase é impressa no console. Isso porque com console.log() conseguimos imprimir informações no console.

Também podemos realizar cálculos matemáticos, como console.log() de 2 + 2, que retornará 4.

> console.log(2 + 2)  
> 4

Também é retornado um "undefined" porque não estamos construindo uma função que retorne algo, apenas exibindo um valor no console.

Podemos também trabalhar com variáveis. Para exemplificar, criamos uma const chamada meuNome que recebe "Mônica", entre aspas.

> const meuNome = "Monica"

Com isso, é retornado apenas "undefined", já que não construímos uma função que retorne algo. Apenas criamos uma variável.

Após criar e executar a variável, ela está salva na aplicação e podemos utilizá-la. Por exemplo, console.log() concatenando o texto "Meu nome é " e a variável meuNome.

> console.log("Meu nome é " + meuNome)  
> Meu nome é Monica

Apesar de utilizar uma variável, conseguimos a frase completa "Meu nome é Monica". Com isso, concluímos que o JavaScript é uma linguagem de programação que permite imprimir texto, realizar cálculos matemáticos, criar e utilizar variáveis.

Próximos passos  
Este é apenas o início do que aprenderemos sobre JavaScript como uma pessoa desenvolvedora. Agora, queremos implementar tudo isso em nossa aplicação para integrar com HTML e CSS. Até o próximo vídeo!

### Aula 1 - Para saber mais: diferentes métodos de integração de JavaScript

Quando estamos desenvolvendo um site ou uma aplicação web, muitas vezes precisamos usar JavaScript para adicionar interatividade e funcionalidades dinâmicas. Existem diferentes maneiras de integrar JavaScript em nossos projetos, e cada uma delas tem suas próprias características e implicações de desempenho. Vamos explorar os três métodos principais: inline, interno e externo.

1. JavaScript Inline

O que é?  
O JavaScript inline é quando você escreve o código JavaScript diretamente dentro de um elemento HTML. Isso é feito usando o atributo onclick, onmouseover, ou outros eventos HTML.

Exemplo:  
> `<button onclick="alert('Olá, mundo!')">Clique aqui</button>`

Vantagens:

- Simplicidade: É fácil de adicionar e entender para pequenos trechos de código.
- Rápido para protótipos: Útil para testes rápidos ou protótipos.

Desvantagens:

- Manutenção difícil: O código fica espalhado pelo HTML, tornando difícil a manutenção e a leitura.
- Reutilização limitada: Não é fácil reutilizar o código em diferentes partes do projeto.
- Desempenho: Pode afetar o desempenho, pois o navegador precisa processar o JavaScript sempre que encontra um elemento com código inline.

2. JavaScript Interno

O que é?  
O JavaScript interno é quando você escreve o código JavaScript dentro de uma tag <script> no próprio arquivo HTML.

Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de JavaScript Interno</title>
    <script>
        function mostrarMensagem() {
            alert('Olá, mundo!');
        }
    </script>
</head>
<body>
    <button onclick="mostrarMensagem()">Clique aqui</button>
</body>
</html>
```

Vantagens:

- Organização: O código JavaScript está separado do HTML, mas ainda no mesmo arquivo.
- Facilidade de uso: Mais fácil de gerenciar do que o JavaScript inline para projetos pequenos.

Desvantagens:

- Desempenho: O arquivo HTML pode ficar grande, o que pode afetar o tempo de carregamento.
- Reutilização: O código ainda está preso ao arquivo HTML específico.

3. JavaScript Externo

O que é?  
O JavaScript externo é quando você escreve o código JavaScript em um arquivo separado com a extensão .js e o inclui no HTML usando a tag `<script>` com o atributo src.

Exemplo:

Arquivo HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de JavaScript Externo</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="mostrarMensagem()">Clique aqui</button>
</body>
</html>
```

Arquivo script.js:

```JavaScript
function mostrarMensagem() {
    alert('Olá, mundo!');
}
```

Vantagens:

- Manutenção: O código está separado, facilitando a manutenção e a leitura.
- Reutilização: O mesmo arquivo JavaScript pode ser usado em várias páginas.
- Desempenho: O navegador pode armazenar em cache o arquivo JavaScript, melhorando o tempo de carregamento em visitas subsequentes.

Desvantagens:

- Configuração inicial: Requer mais configuração inicial, pois você precisa gerenciar arquivos separados.
- Dependência de rede: Se o arquivo JavaScript não estiver disponível (por exemplo, devido a problemas de rede), a funcionalidade pode ser afetada.

### Aula 1 - Document Object Model - Vídeo 3

Transcrição  
Já conseguimos ter noção de que o JavaScript roda dentro do navegador. Nós testamos um pouco de código dentro do console, mas o interessante seria colocar esse código dentro do projeto, para que, além de interagir com a aplicação, isso fique salvo.

Se recarregamos a página do navegador, os códigos que estavam no console não aparecem mais. Podemos até tentar imprimir novamente a variável meuNome que havíamos construímos, utilizando o console.log():

> console.log(meuNome)  
> Uncaught ReferenceError: meu nome is not defined

O JavaScript retorna que meuNome não está definido. Portanto, aquela variável que construímos não existe mais.

Criando arquivo index.js  
Para trazer esse código para o nosso projeto, precisamos construir um novo arquivo. No painel do explorador de arquivos do Visual Studio Code, na lateral esquerda da tela, há algumas opções. Vamos clicar na primeira delas, um ícone chamada "New file" (novo arquivo).

Em seguida, precisamos definir o nome desse novo arquivo. Nesse caso, vamos colocar index.js. O nome é um padrão, mas o mais importante é utilizar a extensão .js no final para informar que se trata de um arquivo JavaScript. Se não colocarmos isso, a IDE vai interpretá-lo como um arquivo de texto.

Agora, podemos inserir um console.log() com o texto "Olá, mundo!" e salvar o arquivo.

index.js:

> console.log("Olá, mundo!")

Atualizar a aplicação no navegador, mas não acontece nada.

Integrando JavaScript com HTML  
Isso porque apenas construímos o arquivo, mas ele não está integrado com o HTML, que é o que está sendo renderizado na tela. Para visualizar esse "Olá, mundo!" dentro do navegador, precisamos integrar o index.js com o index.html.

Para fazer isso, utilizamos a tag `<script>`. Segundo a documentação do MDN Web Docs sobre a tag `<script>`, essa tag está disponível para uma variedade de navegadores, como Chrome, Edge, Firefox e Opera.

A documentação do MDN Web Docs é bastante completa e possui versão em português. Basta selecionar a opção "Português (do Brasil)" no dropdown na parte superior.

O elemento HTML `<script>` é usado para incluir ou referenciar um script executável.

A documentação também explica alguns atributos que podemos colocar nessa tag. No final da página, encontramos um exemplo prático mostra como usar essa tag tanto no HTML4 quanto no HTML5, que é o mais moderno:

Exemplo da documentação:

<!-- HTML4 and (x)HTML -->
`<script type="text/javascript" src="javascript.js"></script>`

<!-- HTML5 -->
`<script src="javascript.js"></script>`

Vamos aplicar isso no projeto no Visual Studio Code. No explorador de arquivo, acessar o arquivo index.html.

Um fator importante é que, geralmente, colocamos o `<script>` no final do HTML para carregar o JavaScript apenas depois que a tela foi totalmente carregada.

Na linha 43, depois da tag `<main>` e antes do fechamento da tag `<body>`, vamos abrir a tag `<script>` e acrescentar o atributo src igual a "index.js". Lembrando de fechar a tag `<script>`.

index.html:

```html
<body>
    <main>
    <!-- Código omitido -->
    </main>
    <script src="index.js"></script>
</body>
```

Depois de ativar a extensão do Live Server, podemos atualizar a aplicação no navegador. Vamos abrir o inspecionar elemento para conferir o console.

Olá, mundo!

Já está sendo impresso o log de "Olá, mundo!". Isso significa que já está ocorrendo uma integração.

Na documentação, há uma opção de um atributo chamado defer. Esse é um atributo booleano para indicar ao navegador que o script deve ser executado depois que o documento tenha sido parseado.

Quando colocamos o atributo defer na tag `<script>`, podemos colocar essa tag em qualquer lugar do código, pois informamos que a integração com o index.js deve ocorrer após o carregamento completo da tela.

> `<script defer src="index.js"></script>`

Temos essas duas opções: colocar `<script>` com defer em qualquer lugar; ou não precisamos dele, mas é necessário colocar a tag no final, antes do fechamento do `<body>`.

Resgatando o valor do input  
Agora podemos começar a construir o JavaScript dentro da nossa aplicação. Vamos remover o console.log("Olá, mundo!"), pois não precisamos mais dele.

Iremos começar com a funcionalidade mais importante dessa aplicação. Precisamos resgatar o que está escrito dentro do campo de digitação. O primeiro passo é selecionar aquele elemento.

Para isso, vamos construir uma variável chamada inputItem, que representa o item do input dentro da aplicação, ou seja, o campo de digitação. Para selecionar o input, precisamos acessar o documento HTML, usando o document. E, a partir desse acesso, podemos procurar algo que torne esse elemento único para identificá-lo.

Nesse caso, podemos utilizar getElementById. Ao escrever getElement, a IDE nos oferece várias opções: getElementById, getElementsByClassName, getElementsByName, getElementsByTagName, entre outras.

Como vamos buscar pelo ID, precisamos colocar, entre aspas, o ID que queremos selecionar. No index.html, podemos conferir qual é o ID do <input>. Na linha 22, conferimos que o atributo id é igual a input-item.

index.html:

```html
<input
    class="input-item"
    id="input-item"
    type="text"
    placeholder="Digite o item que deseja adicionar"
/>
```

Portanto, no index.js, colocamos input-item, entre aspas, no getElementById.

Na próxima linha, podemos acrescentar um console.log() de inputItem para visualizar o retorno da nossa pesquisa dentro do documento.

index.js:

> const inputItem = document.getElementById("input-item")  
> console.log(inputItem);

Atualizamos a tela do live server no navegador. Dessa forma, conseguimos visualizar o <input> no console:

Console:

```JavaScript
<input class="input-item" id="input-item" type="text" placeholder="Digite o item que deseja adicionar">
    #shadow-root (user-agent)
        <div pseudo="-webkit-input-placeholder" id="placeholder" style="display: block !important;">
            Digite o item que deseja adicionar
        </div>
        <div></div>
</input>
```

Ele tem todas as informações: classe, ID, tipo, placeholder. Se clicamos na seta para expandir o elemento, conseguimos conferir o que há dentro dele. Nesse caso, é apenas o placeholder, que tem alguns estilos padrões do HTML e CSS.

Buscando elementos no DOM  
Mas, para que serve aquele documento que colocamos no código para encontrar o elemento? Quando utilizamos document.método, estamos pesquisando dentro do DOM.

DOM significa Document Object Model (Modelo de Objeto de Documento), que é uma representação da estrutura dos elementos na tela.

Diagrama de árvore que representa a estrutura de um documento HTML. No topo da imagem está a palavra 'Document', seguida por 'Root Element: `<html>`' abaixo. A estrutura se divide em dois ramos. Primeiro ramo, à esquerda, sai de elemento 'head' que leva a elemento 'title' com o texto 'My Title'. Segundo ramo, à direita, sai de elemento 'body', que se divide em dois elementos subordinados: elemento 'a' com o atributo 'href' e o texto 'My link'; e elemento 'h1' com o texto 'My header'. Os elementos e textos estão contidos em caixas com bordas e fundos azul-claros, e as linhas que conectam as caixas são brancas.  
Funciona como uma árvore, pois possui ramificações. Também podemos comparar com uma árvore genealógica. No topo da árvore, temos o document, que é o documento inteiro do HTML.

Dentro dele, temos uma raiz, o root element, que é o HTML. Todos os elementos visíveis dentro desse documento estão dentro da tag `<html>` na estrutura padrão de um projeto.

Essa raiz é separada em duas partes. Primeira parte, é o `<head>`, onde colocamos informações não necessariamente visuais na tela, como o `<title>` que, por sua vez, pode conter um texto.

A segunda parte da raiz é o elemento `<body>`, que é filho do `<html>`. Dentro do `<body>`, podemos ter vários elementos, como `<a>, <h1>, <img>, <input>,` entre outros. Cada um deles também tem seu próprio filho, como um conteúdo textual ou outros elementos.

Com isso, percebemos que existem elementos-pai e elementos-filho. Por exemplo, quando expandimos o `<input>` no console, encontramos o texto placeholder, que é filho do input, mas não precisa ser incluído manualmente no código do HTML. O próprio DOM já o interpreta como um filho do `<input>`.

Próximos passos  
Podemos, inclusive, visualizar qual o valor que está sendo digitado dentro desse campo de digitação. No index.js, dentro do console.log(), basta colocar inputItem.value.

> console.log(inputItem.value);

O inputItem.value vai retornar vazio no console, pois não há nada escrito no campo de digitação. Se digitarmos algo atualmente, também não mostrará nada no console.

Porque, do jeito que está desenvolvida a aplicação, ao digitar ou fazer qualquer ação, esse JavaScript já foi renderizado e executado. No momento em que a tela atualizou e mostrou todos os itens, o JavaScript pegou o elemento do inputItem, colocou na variável e já imprimiu - independente do que fizermos depois.

Precisamos colocar algumas informações a mais dentro dessa aplicação para monitorar eventos que acontecem após a execução do JavaScript e do HTML. No próximo vídeo, vamos conhecer o ouvinte de eventos para interpretar quando algo está sendo digitado ou quando o botão está sendo clicado.

### Aula 1 - Explorando o DOM

Você está desenvolvendo uma página web para uma lista de compras. Até agora, você usou HTML e CSS para estruturar e estilizar a página. Agora, deseja adicionar interatividade para que a página responda a ações do usuário, como a inserção de itens na lista. Você aprendeu que o JavaScript pode ser integrado ao HTML para manipular elementos da página. Como você pode usar o JavaScript para capturar o valor de um campo de input e exibi-lo no Console do navegador?

Resposta:

```JavaScript
const item = document.getElementById("input-item").value;
console.log(item);
```

> Esta alternativa captura diretamente o valor do campo de input e o armazena na variável item, exibindo-o no Console.

### Aula 1 - Faça como eu fiz: selecionando elemento pelo ID

Chegou o momento de colocar em prática o que aprendemos! Nesta atividade, você vai criar um arquivo JavaScript e integrá-lo à sua página HTML. O objetivo é selecionar um elemento pelo ID, neste caso, um campo de input, e acessar o valor inserido nele.

Bora lá? Abaixo em “opinião da instrutora” deixarei a resolução, caso queira acompanhar.

Opinião do instrutor

Insira o script no HTML utilizando a tag `<script>` com o atributo defer para garantir que ele será executado no momento certo.

> `<script defer src="index.js"></script>`

No arquivo JavaScript, use o método getElementById para capturar o input pelo ID.

> const inputItem = document.getElementById("input-item");

Use o código para exibir no console o valor contido no campo de input.

> console.log(inputItem.value);

Certifique-se de que o arquivo index.js está no mesmo diretório que o HTML ou ajuste o caminho no atributo src da tag `<script>`.
Boa sorte e divirta-se codificando!

### Aula 1 - Lista de exercícios

Chegou o seu momento de praticar tudo que você viu nesta aula com a lista de exercícios abaixo!

O que é:

Boas-vindas à nossa lista de exercícios "mão na massa"! Um caminho prático e envolvente para aprender e aprimorar suas habilidades em tecnologia. Aqui, você não encontrará longas leituras teóricas ou explicações abstratas. Em vez disso, nossos exercícios são projetados para colocar você no centro do processo de aprendizado, permitindo que você construa, experimente e explore conceitos tecnológicos de forma direta e aplicada.

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

Exercício 1) Exibir mensagem no console

Você aprendeu que o JavaScript pode ser usado diretamente no navegador e decidiu praticar usando apenas a ferramenta de console. Seu objetivo é escrever a mensagem "Estou estudando JavaScript!" no console.

Exercício 2) Cálculos matemáticos com JavaScript

Você foi desafiado a implementar uma função que subtrai dois números. Para isso, você pode usar a ferramenta do Console do navegador para te ajudar a implementar essa lógica.

Uma dica é você criar duas variáveis a e b para armazenar os valores e exibir no console a soma dos dois números.

Exercício 3) Personalização das mensagens exibidas no console

No exercício 1, você escreveu a mensagem "Estou estudando JavaScript!" no console do navegador. Agora, a ideia é dar um salto e evoluir essa mensagem.

Seu objetivo é personalizar a mensagem e permitir que a pessoa usuária defina qual tecnologia ela está aprendendo.

Uma dica é criar uma variável que armazene o nome da tecnologia escolhida e interpolar a variável com a mensagem no console do navegador, para tornar o texto dinâmico.

Exercício 4) Integração do arquivo JavaScript no arquivo HTML

Até aqui, você praticou o JavaScript apenas pelo navegador, mas não construímos um site diretamente no navegador, e sim utilizamos algumas linguagens como HTML, CSS e JavaScript para implementar a estrutura, os estilos e a lógica respectivamente.

Seu objetivo é criar um arquivo HTML ("index.html") e integrar um arquivo JavaScript ("script.js") através da tag `<script>`. Em seguida, para garantir que a integração esteja funcionando, você pode exibir a mensagem "Integração realizada com sucesso!" no console do projeto.

Lembre-se que você pode usar o atalho exclamação do Emmet (!) para implementar a estrutura HTML rapidamente.

Exercício 5) Manipulação do DOM para capturar valores do arquivo HTML com JavaScript

Agora que você já integrou o arquivo JavaScript ao arquivo HTML, você pode acessar os elementos do DOM (Document Object Model) utilizando o JavaScript para manipular os elementos da página de forma dinâmica.

Portanto, seu objetivo é criar uma tag `<h1>` com um título qualquer no seu arquivo "index.html" e usar o JavaScript para acessar esse elemento e modificar o texto dele.

Uma dica que pode te ajudar é usar o document.querySelector para acessar o documento e o innerHTML para modificar o texto.

Caso tenha dúvidas, você pode consultar a opinião da instrutora. Para isso clique no botão "Ver opinião do instrutor". Além disso, você também pode deixar suas perguntas no fórum, por lá temos uma equipe dedicada para te dar todo o suporte necessário.

Opinião do instrutor

Resposta do exercício 1

Exibir uma mensagem no console

Inicialmente abra o console do navegador. Para isso, clique na tecla F12 ou aperte o botão direito do mouse, selecione a opção "Inspecionar" e abra a aba "Console".
Escreva o seguinte código:

```JavaScript
console.log("estou estudando JavaScript!");
//Estou estudando JavaScript!
```

Resposta do exercício 2

Faça uma operação matemática simples

No console do navegador crie as variáveis a e b usando let e utilize o cálculo a - b para exibir o resultado através do console.log, como mostrado abaixo:

let a = 15;
let b = 10;
console.log(a - b);
//5

Resposta do exercício 3

Personalizando mensagens no console

No console do navegador crie uma variável var e chame ela de tecnologia. Em, seguida use o console,log para exibir a mensagem e como parâmetro concatenar a mensagem "Estou estudando" com a variável tecnologiada seguinte maneira:

var tecnologia = HTML
console.log("Estou estudando" + tecnologia)
//Estou estudando HTML

Resposta do exercício 4

Integrando o arquivo JavaScript no arquivo HTML

No seu editor de código, crie o arquivo "index.html" e salve no local desejado:

```html
    <!DOCTYPE html>
<html lang="pt-Br">
<head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
</head>
<body>
</body>
</html>
```

Em seguida, crie um arquivo chamado "script .js" na mesma pasta que você salvou o arquivo "index.html" e use a tag `<script>` com a propriedade src para indicar o caminho do arquivo JavaScript que você quer integrar no HTML. Lembre-se de colocar essa linha de código antes do fechamento da tag `<body>`:

```html
<!DOCTYPE html>
<html lang="pt-Br">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

Agora, use o console.log com a mensagem "Integração realizada com sucesso" para indicar que o HTML está recebendo a lógica do arquivo JavaScript.

> console.log("Integração realizada com sucesso!")

Por fim, abra o arquivo "index.html" no navegador e vá até a aba Console para ver se a mensagem é exibida. Você pode usar a extensão Live Server do VS Code ou abrir diretamente o arquivo HTML no navegador.

Resposta do exercício 5

Manipulação do DOM para capturar valores do arquivo HTML com JavaScript

No arquivo "index.html" use a tag `<h1>` logo abaixo da abertura da tag `<body>` e escreva o título que desejar. No código abaixo, vou usar o título "Teste":

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Teste</h1>
    <script src="script.js"></script>
</body>
</html>
```

Já no arquivo "script.js" crie uma constante chamada h1 que vai usar o document.querySelector("h1") para capturar o texto da tag `<h1>`, da seguinte maneira:

> const h1 = document.querySelector('h1');

Em seguida, pegue a constante h1 e use a propriedade innerHTML para alterar o valor do texto para "Olá mundo!", da mesma forma que mostro no código abaixo:

> h1.innerHTML = 'Olá, Mundo!';

### Aula 1 - O que aprendemos?

Nessa aula, você aprendeu como:

- Usar o Console para testar e executar pequenos trechos de código JavaScript.
- Utilizar comandos como console.log(), operações matemáticas e criação de variáveis.
- Adicionar JavaScript diretamente em um projeto HTML usando a tag `<script>`.
- Manipular o DOM para acessar e modificar elementos HTML dinamicamente.

### Aula 1 -  - Vídeo 7
