# Curso Alura JavaScript: Métodos de Arrays

"Falta de tempo é desculpa daqueles que perdem tempo por falta de métodos."
(Albert Einstein)

## Aula 01 - ForEach: Função para cada Elemento

### Aula 01 - Apresentação - Video 1

Nesta aula do curso de JavaScript: métodos de array, o instrutor Guilherme Lima apresenta o projeto AluraBooks. O objetivo do curso é utilizar uma API para extrair informações de uma lista de objetos e exibi-las na tela. Serão criados filtros para livros de front-end, back-end, livros de dados e livros disponíveis. Serão abordadas técnicas de manipulação de elementos no DOM e no JavaScript, além de ordenação de preços. O foco principal será nos métodos especiais do JavaScript, como filter, forEach, map, reduce e sort. O curso é indicado tanto para iniciantes quanto para aqueles que já possuem conhecimento, pois sempre há algo interessante para aprender e analisar. O instrutor espera que seja um momento de aprendizado proveitoso para todos os participantes.

### Aula 01 - Carregando o projeto base - Video 2

Nesta aula, o instrutor inicia os estudos sobre métodos de array com JavaScript. Ele mostra como carregar o projeto base, renomeado para "alura_books", utilizando o Visual Studio Code e a extensão Live Server. O instrutor explica a estrutura da aplicação e destaca o arquivo "equisicao.txt", que contém um endereço para buscar informações de livros em formato JSON. Ele comenta que o desafio será fazer uma requisição para exibir as informações dos livros na tela, utilizando o DOM.

### Aula 01 - Fetch de livros no console - Video 3

Nesta aula, o instrutor mostra como realizar uma requisição para um endpoint e obter um arquivo JSON contendo informações sobre livros. O código JavaScript é organizado em uma pasta chamada "app" e um arquivo chamado "main.js" é criado para realizar a requisição e armazenar os livros em uma variável chamada "livros". É utilizada uma função assíncrona chamada "getBuscarLivrosDaAPI" que utiliza o método "fetch" para fazer a requisição e o método "json()" para transformar a resposta em um objeto JSON. Os livros são exibidos no console utilizando o método "console.log()" e também em forma de tabela utilizando o método "console.table()". No próximo trecho do vídeo, será explicado como manipular o DOM para exibir os livros na tela utilizando métodos especiais de arrays em JavaScript.

### Aula 01 - Como funciona o forEach - Video 4

Nesta aula, o instrutor discute a forma de exibir as informações de um JSON na tela. Ele apresenta a ideia de utilizar um loop for para percorrer a lista de livros, mas aponta que essa abordagem é verbosa. Em seguida, ele propõe o uso do método forEach() para simplificar o código. O forEach() executa uma função para cada elemento do array, permitindo criar uma classe de livro para cada elemento. O instrutor demonstra como utilizar o forEach() e mostra que o resultado é o mesmo obtido com o loop for. Ele também menciona que é possível passar outros parâmetros para a função, como o índice do elemento e o próprio array. A aula termina com a promessa de mostrar como criar uma função com o forEach() para exibir os livros na tela.

### Aula 01 - forEach de livros - Video 5

Nesta aula, o instrutor ensina como exibir uma lista de livros na tela utilizando JavaScript. Ele mostra como selecionar o elemento HTML onde os livros serão inseridos e cria uma função para exibir os livros na tela. Utilizando o loop forEach, ele percorre cada livro da lista e insere suas informações no elemento HTML. Ele também demonstra como alterar dinamicamente o valor dos atributos de uma tag de imagem para exibir a imagem e o texto alternativo de cada livro. No final, ele mostra o resultado da requisição e do loop forEach, exibindo uma lista de livros na tela.

### Aula 01 Conclusão - Nesta aula

Carregamos o projeto base que vamos usar nesse treinamento;  
Realizamos o uma requisição para pegar todos os livros da API de exemplo;  
Entendemos que o método forEach é bastante parecido com o for antigo, basicamente faz o mesmo que ele, mas numa forma bem mais elegante;  
Exibimos os livros da API manipulando o DOM através do método forEach.

## Aula 02 - Map: Novo array modificado

### Aula 02 - Como funciona o map - Video 1

Nesta aula, o instrutor aborda o uso do método map() em JavaScript. O map() é utilizado para invocar uma função de callback para cada elemento de um array e retorna um novo array como resultado. O instrutor demonstra um exemplo prático multiplicando cada elemento de um array por dois. Ele destaca que o map() não altera o array original, mas cria uma cópia com os novos valores. Além disso, o map() retorna um valor, ao contrário do método forEach(), e é possível utilizar o retorno da função para realizar outras ações.  
O método map invoca a função passada por argumento para cada elemento do array e devolve um novo Array como resultado.  
E essa é a principal diferença entre os métodos map e forEach. Sendo assim, o forEach manipula os dados reais de um array e o map cria um novo array.

### Aula 02 - Desconto com map - Video 2

Nesta aula, o instrutor organiza o código em arquivos separados e implementa a funcionalidade de aplicar descontos nos preços dos livros. Ele utiliza os métodos forEach e map para percorrer a lista de livros e realizar as operações necessárias. Além disso, ele utiliza o spread operator e o método toFixed para fazer cópias de objetos e formatar os valores exibidos na tela.

### Aula 02 Conclusão - Nesta aula

Aprendemos que o método map executa uma função para cada elemento do array e devolve um novo array como resultado;  
Aplicamos um desconto através do método map nos preços de cada livro do nosso projeto e entendemos a diferença entre os métodos forEach e map.

## Aula 03 - Filter: aplicando filtros diferentes

### Aula 03 - filter - Video 1

Nesta aula, o palestrante discute a implementação de filtros em um projeto. Ele explica o funcionamento do método filter em JavaScript, que cria um novo array com base em uma função que retorna um valor booleano. O objetivo é filtrar elementos de um array de acordo com determinados critérios, como categorias de livros. O palestrante demonstra exemplos práticos de como utilizar o método filter para criar novos conjuntos de elementos. Ele destaca a importância desse método para a criação de filtros em projetos.

### Aula 03 - Como funciona o filter - Video 2

Nesta aula, o instrutor explica como aplicar o método filter em botões de uma página web. Ele cria um novo arquivo chamado metodoFilter.js e adiciona-o ao projeto. Em seguida, ele adiciona um evento de clique a um botão específico. Ao clicar no botão, é executada a função filtrarLivrosDeFront(), que utiliza o método filter para filtrar os livros da categoria "front-end" e armazená-los em uma variável chamada livrosFiltrados. Os livros filtrados são exibidos no console utilizando console.table(livrosFiltrados). O instrutor menciona a possibilidade de aplicar o mesmo comportamento a outros botões de categorias diferentes, como "back-end" e "dados", e promete abordar esse assunto no próximo vídeo.

### Aula 03 - Filter de livros - Video 3

Nesta aula, o instrutor mostra como otimizar o código ao atribuir a mesma função a vários botões. Ele utiliza o método document.querySelectorAll para selecionar todos os botões com a classe .btn e atribui a lista resultante a uma variável chamada botoes. Em seguida, ele utiliza o método forEach para percorrer cada botão da lista e atribuir a função filtrarLivros a cada um deles.

No entanto, o instrutor percebe que todos os botões estão filtrando os livros de front-end, o que não é o comportamento desejado. Ele explica que é necessário identificar qual botão foi clicado para saber qual é a categoria correspondente. Para isso, ele utiliza o método getElementById para obter o botão específico que foi clicado e, em seguida, utiliza a propriedade value para obter a categoria desse botão.

Com a categoria identificada, o instrutor utiliza a função filter para filtrar os livros com base nessa categoria. Ele utiliza o método console.table para exibir os livros filtrados no console. O instrutor demonstra que, ao clicar nos diferentes botões, apenas os livros da categoria correspondente são exibidos no console.

O próximo desafio mencionado pelo instrutor é exibir esses livros filtrados na tela.

### Aula 03 - Livros filtrados na tela - Video 4

Nesta aula, o instrutor discute sobre a funcionalidade de exibir os livros na tela ao clicar nos botões correspondentes. Ele sugere utilizar a função exibirOsLivrosNaTela presente no método forEach para substituir o console.table e exibir os livros na tela. Porém, ao clicar novamente nos botões, os livros são repetidos. Para resolver esse problema, ele propõe modificar o elemento elementoParaInserirLivros no método forEach e limpar o conteúdo do elemento utilizando a propriedade .innerHTML e atribuindo uma string vazia. Dessa forma, apenas os livros correspondentes serão exibidos na tela. O instrutor destaca a reutilização do código já desenvolvido e a possibilidade de cruzar informações entre os métodos forEach e filter para realizar o filtro dos botões.

### Aula 03 Conclusão - Nesta aula:

Realizamos testes na documentação oficial do JavaScript para entender como o método filter funciona;

Atribuímos um evento de click no botão para filtrar os livros por categoria através do filter;

Exibimos os livros filtrados por categoria e que estejam disponíveis.

## Aula 04 - Sort: Ordenando a lista

### Aula 04 - Como funciona o sort - Video 1

Nesta aula, o instrutor discute sobre o método array.prototype.sort() em JavaScript, que é responsável por ordenar os elementos de um array. Ele explica que a ordenação não é necessariamente estável e depende da conversão dos elementos para string e da pontuação de código unicode de cada caractere. O instrutor mostra exemplos de ordenação de frutas e números para ilustrar como a função de comparação pode ser utilizada para definir a ordem dos elementos. Ele também menciona que elementos undefined são classificados no final do array. Para obter uma ordenação estável, o instrutor cria uma função de comparação que retorna a diferença entre os valores a e b. Ele demonstra como usar essa função para obter a ordenação desejada e destaca a importância de aplicar esse conhecimento em projetos que necessitam de ordenação.

### Aula 04 - sort de livros - Video 2

Nesta aula, o instrutor ensina como implementar a ordenação por preço em um projeto utilizando o método sort() em JavaScript. Ele cria uma função chamada ordenarLivrosPorPreco que utiliza o sort() para ordenar os livros por preço. Além disso, ele explica a importância de chamar a função exibirOsLivrosNaTela para mostrar os livros ordenados corretamente. O instrutor também mostra como passar uma função de comparação para o sort(), utilizando a sintaxe (a, b) => a.preco - b.preco, para ordenar os livros de acordo com o critério desejado. No final, ele testa a funcionalidade e os livros são exibidos corretamente na tela, ordenados pelo preço.

### Aula 04 - Livros indisponíveis - Video 3

Nesta aula, o instrutor discute sobre a implementação de uma funcionalidade no projeto AluraBooks que permite aos usuários saberem se um livro está disponível ou não. Ele mostra como utilizar a propriedade "quantidade" de cada livro para verificar se ele está disponível. O instrutor cria uma função chamada "verificarDisponibilidadeDoLivro" que retorna a classe correspondente ao estado do livro (disponível ou indisponível). Ele também mostra duas formas de implementar essa verificação: utilizando um "if" tradicional e utilizando o operador ternário. Por fim, o instrutor menciona que ainda falta implementar a funcionalidade de exibir os livros indisponíveis e a ordenação por preço, que serão os próximos desafios do projeto.

### Aula 04 - Filtrando livros disponíveis - Video 4

Nesta aula, aprendemos como implementar filtros para exibir apenas os livros disponíveis em um projeto. Utilizamos o método .filter para percorrer a lista de livros e verificar as condições estabelecidas. Verificamos o valor do botão no arquivo index.html e, se for igual a "disponível", filtramos os livros com base na quantidade disponível. Caso contrário, o filtro é feito com base na categoria selecionada anteriormente. Ao final, verificamos se os filtros estão funcionando corretamente, exibindo apenas os livros disponíveis quando o botão correspondente é selecionado. A implementação foi bem-sucedida e a variável livrosFiltrados foi atualizada de acordo com as condições estabelecidas.

### Aula 04 Conclusão - Nesta aula

Aprendemos como funciona o método de ordenação de array sort;

Ordenamos os livros da aplicação por preço;

Melhoramos a experiência do usuário da aplicação, aplicando uma opacidade nos livros indisponíveis.

## Aula 05 - Reduce: Um único valor

### Aula 05 - Manipulando HTML com JS - Video 1

Nesta aula, o instrutor apresentou um desafio relacionado à exibição de uma seção de livros disponíveis em um site. Ele mostrou como filtrar os livros por categoria e exibir a seção apenas quando necessário. O instrutor também refatorou o código para deixá-lo mais limpo e legível, destacando a importância da organização do código. Por fim, ele mencionou que será necessário somar os valores dos livros de forma adequada utilizando um método especial de array.

### Aula 05 - Como funciona o reduce - Video 2

Nesta aula, o instrutor aborda o método reduce em JavaScript, que é utilizado para realizar operações de redução em um array. Ele explica que o reduce executa uma função para cada elemento do array, resultando em um único valor de retorno. Diferente dos métodos map e filter, o reduce combina todos os elementos do array em um único valor. O instrutor mostra exemplos de como utilizar o reduce para somar valores e encontrar o maior valor em um array. O conceito principal é entender que o reduce é usado para combinar dois valores e produzir um único valor.

### Aula 05 - Valor total com reduce - Video 3

Nesta aula, o instrutor ensina como implementar o método reduce em JavaScript para somar o valor de todos os livros disponíveis quando o botão "Livros disponíveis" for clicado. Ele explica como criar o arquivo metodoReduce.js, importá-lo no arquivo index.html e filtrar os livros disponíveis. Em seguida, ele mostra como calcular o valor total dos livros utilizando o método reduce e exibir esse valor na página. O instrutor destaca que o valor total só é exibido quando o botão é clicado e será atualizado automaticamente se os valores da API forem alterados.

### Aula 05 - Guia do Mochileiro JavaScript

Método .concat( )
[ 🏀 , 🏀 , 🏀 ].concat( [ ⚾ , ⚾ ] ) => [🏀 , 🏀 , 🏀, ⚾ , ⚾ ]  
O método concat junta dois (ou mais) arrays em um novo array, sem alterar os já existentes.

Método .pop( )
[ 🏀 , 🏀 , 🏀, 🏀 , ⚽ ].pop( ) => [🏀 , 🏀 , 🏀, 🏀]  
O método pop remove o último elemento de um array.

Método .push( )
[🏀 , 🏀 , 🏀].push(🏈) => [ 🏀 , 🏀 , 🏀, 🏈 ]  
O método push adiciona um novo elemento no final do array, aumentando seu tamanho.

Método .includes()
[ ⚾ , 🏈, ⚽, 🏀 ].includes( ⚽ ) => true  
O método includes verifica se um elemento está contido em um array e retorna true se o elemento estiver contido ou false caso contrário.

Método .fill( )
[ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽, 1 ) => [ ⚾ , ⚽, ⚽, 🏀 ] [ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽ ) => [ ⚽, ⚽, ⚽, ⚽ ]  
O método fill preenche os elementos especificados em um array com um determinado valor.

Método .indexOf( )
[ ⚾ , 🏈, ⚽, 🏀, ⚽ ].indexOf( ⚽ ) => 2  
O método indexOf retorna o primeiro índice encontrado de um valor especificado. Se o valor não for encontrado o método retorna -1.

Método .reverse( )
[ ⚾ ,🏈, ⚽, 🏀 ].reverse( ) => [🏀, ⚽,🏈, ⚾]  
O método reverse inverte a ordem dos elementos de um array e substitui o array original.

Método .slice( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].slice( 1, 3 ) => [ 🏈, ⚽ ]  
O método slice retorna elementos de um array, selecionados de determinada posição de início até determinada posição final. O elemento na posição final não é incluso.

Método .some( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].some( ( 🏐 ) ⇒ { return bola === 🏐 } ) => true  
O método some verifica se algum elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para um dos elementos, e false se o teste for false para todos os elementos. Além disso, o método não executa a função callback para arrays vazios e não altera o array.

Método .join( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join() ⇒ ⚾,🏈,⚽,🏀,🏐 [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘ ’) ⇒ ⚾🏈⚽🏀🏐 [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘-’) ⇒ ⚾-🏈-⚽-🏀-🏐  
O método join puxa elementos de um array e lista no formato de string, o resultado da operação puxou as propriedades do array e as listou de acordo com o que foi determinado.

Método .shift( )
[⚽, 🏐 , 🏐 , 🏐, 🏐].shift( ) ⇒[🏐 , 🏐 , 🏐, 🏐]  
O método shift é parecido com o método .pop() mas ao invés de remover o último elemento do array, ele é usado para remover o primeiro elemento do array.

Método .unshift( )
[🏀 , 🏀 , 🏀].unshift(🏐) ⇒ [ 🏐, 🏀 , 🏀 , 🏀]  
O método unshift é parecido com o que método .push() realiza, mas ao invés de adicionar no final do array, ele é utilizado para adicionar um elemento no início de um array.

Método .splice( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 1, 2, 🎱 ) ⇒ [⚾ ,🎱, 🏀, 🏐 ] [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 2, 3) ⇒ [⚾, 🏈 ]  
Com o método splice conseguimos escolher um índice inicial e final para substituirmos valores no lugar deles. E também podemos remover itens, no segundo exemplo, foram removidos três elementos a partir da posição dois.

Método .length( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length(3) ⇒ ⚾ , 🏈, ⚽ [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length() ⇒ 5  
O método length define ou retorna o número de elementos em um array.

Método .sort( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].sort() ⇒ ⚽,⚾,🏀,🏈,🏐  
O método sort ordena os elementos do próprio array e retorna o array. A ordenação padrão é de acordo com a pontuação de código unicode.

Método .toString( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].toString ⇒ ⚾,🏈,⚽,🏀,🏐  
O método toString retorna uma string com todos os valores do array separados por vírgulas.

Método .findIndex( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].findIndex(emoji => emoji === “⚽”) ⇒ 2  
O método findIndex retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

Método .find( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].find( bola ⇒ bola.formato === “redonda” ) => ⚾  
O método find é utilizado para procurar um elemento dentro do array que atenda a condição atribuída a ele, que retornará o primeiro elemento encontrado. Ele percorre todo o array buscando o elemento que atenda a condição e retorna o primeiro que foi encontrado, caso não encontre retorna undefined. Este método não executa caso o array esteja vazio e não altera o array original

Método .at( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(-1) ⇒ 🏐 / [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(1) ⇒ 🏈  
O at acessar os elementos de um array usando um índice inteiro positivo e negativo, sendo que o índice negativo enumera os itens de trás para frente, portando o 🏐 está posicionado no índice -1.

Método .isArray( )
var bolas = [ ⚾ , 🏈, ⚽, 🏀, 🏐 ] Array.isArray(bolas) ⇒ true  
O método Array.isArray verifica se a variável é um array e retorna true ou false.

Método .every( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].every( ( bola ) ⇒ { return bola === 🏐 } ) => false  
O método every verifica se cada elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para todos os elementos, e false se o teste for false para pelo menos um elemento. Além disso, o método não executa a função callback para arrays vazios e não altera o array.

Método .filter( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].filter( ( bola ) ⇒ { return bola !== 🏈 } ) => [ ⚾, ⚽, 🏀, 🏐 ]  
O método filter usa uma função callback de teste e executa ela para cada elemento do array. Ele retorna um novo array com os elementos que passarem no teste.

Método .map( )
[🏀, 🏀,🏀,🏀 ].map( console.log(( bola ) ⇒ { return 🏈 }) ) => [ 🏈, 🏈, 🏈, 🏈 ]  
O método map usa uma função callback de teste e executa ela para cada elemento do array, retornando um novo array modificado. Não executa a função de callback para arrays vazios.

Método .forEach( )
[🏀, 🏀,🏀,🏀 ].forEach( ( bola ) ⇒ { console.log( bola + ⚽)} ) => 🏀⚽🏀⚽🏀⚽  
O método forEach usa uma função callback e executa ela para cada elemento do array. Não executa a função de callback para arrays vazios e não retorna um novo array, diferente do método map.

Método .copyWithin( )
[ ⚾ , 🏈, ⚽, 🏀 ].copyWithin(2,0) ⇒ [ ⚾ , 🏈, ⚾ , 🏈 ]  
O método copyWithin copia os elementos do array para outra posição no array, ele não adiciona itens apenas substitui os valores existentes.

Método .lastIndexOf( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].lastIndexOf(⚽) ⇒ 2  
O método lastIndexOf retorna o valor do último índice especificado, se o valor não for encontrado ele retorna -1.

Método .valueOf( )
[ ⚽, ⚾ , 🏀, 🏐 ].valueOf() ⇒ [ ⚽, ⚾ , 🏀, 🏐 ]  
O método valueOf é usado para retornar o array. É um método padrão do objeto Array. Este método retorna todos os itens na mesma matriz. Ele não altera o conteúdo original da matriz e não contém nenhum valor de parâmetro.

Método .reduce( )
[ 🥦, 🍅, 🥕, 🍆 ].reduce((valor, elemento) => valor + elemento, 0)) ⇒ 🥗  
O método reduce executa uma função redutora para o elemento array, ele retorna um único valor que é o resultado acumulado da função. Ele não executa a função para elementos de array vazios e não altera a matriz original.

Método .keys( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].keys() => ["0","1","2","3"]  
O método keys retorna um novo array composto pelas chaves (posições) do array o qual ele foi aplicado.

### Aula 05 Conclusão - Nesta aula

Manipulamos o DOM para exibir a sessão de valor total dos livros disponíveis apenas quando o botão de filtrar livros disponíveis fosse clicado;

Utilizamos o método reduce para descobrir o valor total de todos livros disponíveis.

Você aprendeu como aplicar um for moderno e elegante através do método forEach, o map para aplicar um desconto em todos os livros e ter como retorno um novo array com os valores atualizados. Além disso, aprendeu como filtrar e ordenar elementos de uma lista comos métodos filter e sort e para fechar com chave de ouro, aprendeu como reduzir toda array em apenas um elemento com reduce

