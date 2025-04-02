# Curso Alura: JavaScript evoluindo a sua aplicação com ES6+

## Aula 1 - Implementando um campo de Busca

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Boas-vindas a mais este curso de JavaScript! Me chamo Nayanne Batista e serei a sua instrutora.

Audiodescrição: Nayanne se declara como uma mulher de pele morena, com olhos e cabelos castanhos escuros, e está vestindo uma camisa laranja. Ao fundo, há uma estante com livros e decorações, além de uma janela à esquerda com iluminação verde.

Aplicação utilizada neste curso  
Evoluiremos o projeto Memoteca, um mural de pensamentos que conta com um formulário intitulado "Adicione um pensamento novo" para adicionar conteúdo, autoria e data, além de um mural com os pensamentos preferidos cadastrados na parte inferior, denominado "Meu Mural".

Nesta aplicação, implementaremos o campo de data no formulário, permitindo que você aprenda a manipular datas em JavaScript e a personalizá-las para apresentá-las de forma agradável à pessoa usuária. Além disso, integraremos uma busca typeahead ("digitação antecipada"), que sugere resultados dinamicamente conforme o texto é digitado.

Implementaremos também a funcionalidade de favoritar pensamentos clicando no ícone de coração na parte inferior direita de um dos pensamentos do "Meu Mural", além de aplicar validações no formulário com o uso de regex para evitar a adição de pensamentos duplicados.

O que vamos aprender para implementar essas funcionalidades?
Utilizaremos diversos métodos do ES6+ (ECMAScript 6 e versões posteriores), como o replaceAll, o spreadOperator e a desestruturação, além de outros métodos e recursos do JavaScript.

Pré-requisitos  
Os pré-requisitos para este curso incluem conhecimentos em HTML, CSS e JavaScript, especialmente sobre funções e requisições HTTP. É recomendável também que você tenha concluído os cursos anteriores da formação.

Estou muito animada para começar, e espero que você também esteja empolgado. Vamos lá!

### Aula 1 - Preparando o ambiente

Olá, dev!  
Boas-vindas a mais um curso de JavaScript!

Antes de prosseguir, é preciso ajustar o seu ambiente, conforme as instruções a seguir.

1. Código do projeto-base  
Para este curso, utilizaremos o projeto Memoteca, que servirá de base para a implementação do CRUD em JavaScript.

Acesse o código do projeto por meio do [repositório no GitHub](https://github.com/alura-cursos/3782-javascript) ou [faça download](https://github.com/alura-cursos/3782-javascript/archive/refs/heads/projeto-base.zip).

Um arquivo CSS foi disponibilizado no projeto para facilitar os seus estudos. Portanto, recomendamos que baixe o projeto base para fazer este curso!

2. Layout no Figma  
Caso tenha interesse no layout do projeto, [acesse o Figma](https://www.figma.com/community/file/1408150826654686645) e explore os elementos da aplicação “Memoteca”.

> Se tiver alguma dúvida durante este curso, não hesite em interagir com a gente pelo Discord da Alura e pelo fórum. Estamos aqui para apoiar o seu aprendizado. Mesmo que não tenha dúvidas agora, ficaríamos felizes em ver você por lá (e o seu avanço).

Vamos lá!

### Aula 1 - Criando o layout de um campo de busca - Vídeo 2

Transcrição  
Chegou o momento de aprimorar a aplicação Memoteca. Neste curso, adicionaremos diversas funcionalidades para tornar nosso projeto mais completo e robusto, além de melhorar a experiência da pessoa usuária.

Contextualizando o problema  
O projeto é o "Mural de Pensamentos". Com o crescimento da aplicação e o cadastro de novos pensamentos, torna-se mais difícil encontrar um pensamento específico.

Imagine um e-commerce com milhares de produtos. Mesmo utilizando filtros por categoria, pode ser difícil localizar um produto específico entre tantos outros.

Solução
Para resolver esse problema, seria ideal implementar uma funcionalidade que facilite a busca e a localização desses produtos.

Vamos ao Figma!

Interface de usuário com cabeçalho intitulado 'Meu Mural' e abaixo um campo de busca com o texto 'O que você procura?'.
Abaixo do título "Meu Mural", há um campo de busca. A ideia é permitir que a pessoa digite uma palavra-chave ou termo e encontre o que procura. Neste vídeo, vamos começar a implementar essa funcionalidade, dividindo o processo em várias etapas.

Etapas que seguiremos:

A primeira etapa é a parte da interface. Começamos adicionando o campo de busca no mural. Em seguida, avançamos para o envio das palavras-chave para a API e o retorno dos pensamentos necessários.

Adicionando o campo de busca no mural  
Acessamos a aplicação e abrimos o VSCode. Com o comando "Ctrl + J" para abrir o terminal, verificamos que o back-end já está em execução, pois digitamos npm start.

> npm start

Terminal da instrutora:

Endpoints:

`http://localhost:3000/pensamentos`

No arquivo index.html, adicionamos um novo bloco para representar o campo de busca. Observamos que já temos uma section na linha 30, que representa o container do formulário (`<section id="form-container">`), e outra section na linha 56, que representa o container da lista de pensamentos (`<section id="lista-pensamentos-container">`).

Adicionaremos uma nova section para representar o container do campo de busca.

É sempre importante utilizar HTML o mais semântico possível. Em vez de adicionar várias divs, optamos por usar tags que representem melhor o que estamos fazendo no código. Abaixo do h3, na linha 58, criamos uma nova section. Para identificar claramente essa seção, adicionamos um id com o valor busca-container.

index.html

```html
<!-- código omitido -->

<section id="busca-container">
    
</section>

<!-- código omitido -->
```

Dentro da nova section, incluímos um input para permitir que a pessoa digite. Utilizamos o <input type="text">, quebramos para facilitar a visualização e definimos o id como campo-busca, que poderá ser usado posteriormente para estilizar. Adicionamos também um placeholder com a mensagem "O que você procura?".

```html
<!-- código omitido -->

<section id="busca-container">
    <input 
        type="text"
        id="campo-busca"
        placeholder="O que você procura?" />
</section>

<!-- código omitido -->
```

Além do input, adicionamos também uma imagem da lupa. Usamos então img e um src (source). O caminho da imagem é assets/imagens/lupa.png. Como essa imagem é apenas decorativa, não adicionamos a propriedade alt, pois, nesses casos, não é obrigatório incluir essa descrição.

```html
<!-- código omitido -->

<section id="busca-container">
<input 
    type="text"
    id="campo-busca"
    placeholder="O que você procura?" />
<img src="assets/imagens/lupa.png" alt="">
</section>

<!-- código omitido -->
```

Agora, voltamos à aplicação. Observamos que o layout está um pouco desalinhado, com a lupa à direita fora do campo de busca. Para corrigir isso, adicionamos uma classe à imagem da lupa. Definimos a classe como lupa.

```html
<!-- código omitido -->

<section id="busca-container">
<input 
    type="text"
    id="campo-busca"
    placeholder="O que você procura?" />
<img class="lupa" src="assets/imagens/lupa.png" alt="">
</section>

<!-- código omitido -->
```

Essas classes e IDs já estão sendo referenciados no nosso CSS, em styles.css.

styles.css

```CSS
# código omitido

#busca-container {
  display: flex;
  align-items: center;
  margin-top: 56px;
  width: 100%; 
  max-width: 600px; 
  margin: 56px auto; 
  padding: 0 16px; 
}

#campo-busca {
  flex: 1; 
  width: 572px;
  height: 48px;
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid #144480;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  outline: none;
}

.lupa {
  margin-left: -40px;
  width: 24px;
  height: 24px;
}

# código omitido
```

Estamos estilizando tanto o container quanto o input e a imagem. Assim, ao voltar para a aplicação, observamos o campo de busca com a lupa corretamente posicionada dentro dele.

Conclusão e próximo passo  
Completamos o primeiro passo: modificamos a interface para incluir um campo de busca, permitindo que a pessoa digite um termo para realizar a busca. Observamos que não há um botão para buscar, mas isso será abordado em vídeos futuros, onde explicaremos por que apenas o campo de busca é suficiente por enquanto.

No próximo passo, iremos ao arquivo da API, onde já temos algumas requisições configuradas para enviar o termo de busca. A implementação detalhada será discutida no próximo vídeo!

### Aula 1 - Implementando a lógica de busca e filtragem de pensamentos - Vídeo 3

Transcrição  
No vídeo anterior, adicionamos o campo de busca na aplicação. No entanto, ele ainda não está funcionando porque precisamos integrar essa funcionalidade no arquivo api.js, que é responsável por enviar as requisições para a API.

Acessamos o arquivo api.js no VSCode. O que precisamos fazer é adicionar uma nova busca. Já temos algumas buscas implementadas na aplicação, como a função buscarPensamentos(), que retorna todos os pensamentos, e a função buscarPensamentoPorId(id), que retorna um pensamento específico com base no ID.

Criando a função buscarPensamentosPorTermo()
Desta vez, desejamos buscar um conjunto de pensamentos que contenham uma palavra-chave, que a pessoa vai digitar, seja no conteúdo ou na autoria. Para isso, criamos uma nova função. Na linha 58, digitaremos async e chamaremos essa função de buscarPensamentosPorTermo(). Precisamos passar como parâmetro o termo que a pessoa vai digitar.

api.js

```JavaScript
// código omitido

async buscarPensamentosPorTermo(termo) {

}

// código omitido
```

Dentro dessa função, precisamos primeiro obter todos os pensamentos. Após isso, podemos filtrá-los para identificar quais contêm o termo pesquisado. Para obter todos os pensamentos, utilizaremos a função buscarPensamentos(), pois já temos essa funcionalidade implementada e não precisamos fazer uma nova requisição.

Criamos uma constante chamada pensamentos e atribuímos a ela o valor retornado pela função this.buscarPensamentos(), usando await.

```JavaScript
// código omitido

async buscarPensamentosPorTermo(termo) {
    const pensamentos = await this.buscarPensamentos()
}

// código omitido
```

Assim, pensamentos conterá todos os pensamentos, pois a função buscarPensamentos() retorna todos os dados dos pensamentos, conforme definido na linha 4 da função.

Com isso, temos todos os pensamentos armazenados na constante pensamentos.

- Criando a constante pensamentosFiltrados
- Criaremos uma constante chamada pensamentosFiltrados. Para obter esses pensamentos filtrados, faremos um filtro no array pensamentos. No JavaScript, utilizamos o método filter para essa tarefa, e o nome do método é bem sugestivo para sua função.

Passaremos pensamentos.filter, onde fornecemos um callback que recebe cada pensamento e uma condição. Se o pensamento atender a essa condição, ele será incluído no array pensamentosFiltrados; caso contrário, não será incluído. Inserimos uma arrow function dentro dos parênteses do pensamentos.filter().

```JavaScript
// código omitido

async buscarPensamentosPorTermo(termo) {
    const pensamentos = await this.buscarPensamentos()
    
    const pensamentosFiltrados = pensamentos.filter(pensamento => {
    
    })
}

// código omitido
```

Desejamos que o método filter retorne todos os pensamentos que atendem à condição. Para isso, usaremos return para incluir o pensamento.conteudo. Também aplicaremos o método toLowerCase() a esse conteúdo.

```JavaScript
// código omitido

async buscarPensamentosPorTermo(termo) {
    const pensamentos = await this.buscarPensamentos()
    
    const pensamentosFiltrados = pensamentos.filter(pensamento => {
    return pensamento.conteudo.toLowerCase()
    })
}

// código omitido
```

Esse método converte o texto para letras minúsculas para garantir que a busca não seja case-sensitive (sensível a maiúsculas e minúsculas). Assim, asseguramos que o termo de busca seja encontrado independentemente de como o texto está formatado.

Desejamos que, se a pessoa digitar "chaves" em minúsculas, maiúsculas ou caixa alta, isso não influencie na busca. Para garantir isso, converteremos o conteúdo digitado e o conteúdo dos pensamentos para letras minúsculas. Assim, a busca será realizada de forma uniforme, independentemente do formato das letras.

Para converter o termo digitado para letras minúsculas, criaremos uma constante chamada termoEmMinusculas após pensamentos, que receberá o valor de termo.toLowerCase().

```JavaScript
// código omitido

async buscarPensamentosPorTermo(termo) {
    const pensamentos = await this.buscarPensamentos()
    const termoEmMinusculas = termo.toLowerCase()
    
    const pensamentosFiltrados = pensamentos.filter(pensamento => {
    return pensamento.conteudo.toLowerCase()
    })
}

// código omitido
```

Assim, independentemente de como a pessoa digitar o termo, ele será convertido para minúsculas. Compararemos esse termo convertido com o conteúdo do pensamento, que também será convertido para minúsculas, garantindo uma busca consistente.

Verificando o termo no conteúdo
Após a comparação, desejamos verificar se o conteúdo do pensamento inclui o termo pesquisado. Para isso, usaremos o método includes() do JavaScript após o toLowerCase(). Esse método verifica se o termo está presente no conteúdo, retornando true se estiver e false se não estiver. Passaremos o termoEmMinusculas para essa verificação.

```JavaScript
// código omitido

async buscarPensamentosPorTermo(termo) {
    const pensamentos = await this.buscarPensamentos()
    const termoEmMinusculas = termo.toLowerCase()
    
    const pensamentosFiltrados = pensamentos.filter(pensamento => {
    return pensamento.conteudo.toLowerCase().includes(termoEmMinusculas)
    })
}

// código omitido
```

Vamos criar um filtro que permita pesquisar tanto pelo conteúdo quanto pela autoria. Digitamos duas barras verticais (||), que representam o operador "ou". Abaixo, inserimos o código: pensamento.autoria.toLowerCase().includes(termoEmMinusculas).

Desejamos que sejam retornados os pensamentosFiltrados.

```JavaScript
// código omitido

async buscarPensamentosPorTermo(termo) {
    const pensamentos = await this.buscarPensamentos()
    const termoEmMinusculas = termo.toLowerCase()
    
    const pensamentosFiltrados = pensamentos.filter(pensamento => {
    return pensamento.conteudo.toLowerCase().includes(termoEmMinusculas) || pensamento.autoria.toLowerCase().includes(termoEmMinusculas)
    })
    return pensamentosFiltrados
}

// código omitido
```

Após obter esses resultados, adicionaremos o tratamento de erros.

Adicionando o tratamento de erros
Para manter o padrão utilizado em outras requisições, usaremos o bloco try-catch. Na linha 59, digitamos try e abrimos os colchetes. Movemos o conteúdo da linha 62 até a linha 69 para dentro do bloco try (todo o código que montamos).

Na linha 68, após o primeiro fechamento de chaves depois do return, adicionamos um catch(error). Se ocorrer um erro, usamos alert() para informar a pessoa usuária com a mensagem "Erro ao filtrar pensamentos". Em seguida, lançamos o erro com throw error.

```JavaScript
// código omitido

async buscarPensamentosPorTermo(termo) {
    try {
        const pensamentos = await this.buscarPensamentos()
        const termoEmMinusculas = termo.toLowerCase()

        const pensamentosFiltrados = pensamentos.filter(pensamento => {
            return pensamento.conteudo.toLowerCase().includes(termoEmMinusculas) ||
            pensamento.autoria.toLowerCase().includes(termoEmMinusculas)
        })
        return pensamentosFiltrados
    } catch (error) {
        alert("Erro ao filtrar pensamentos")
        throw error
    }
} 

// código omitido
```

Conclusão e próximo passo  
Com isso, temos uma nova requisição na API responsável pela lógica de filtragem e pela verificação de se os pensamentos contêm o termo digitado pela pessoa.

No entanto, ao voltar à aplicação e digitar qualquer coisa, não veremos a atualização da lista ainda, pois precisamos fazer algumas modificações na interface. Abordaremos essas alterações nos próximos vídeos!

### Aula 1 - Implementando filtros no Serenatto café

Você está trabalhando no site da cafeteria “Serenatto café”!

A demanda é melhorar a experiência das pessoas ao buscar itens no menu digital da cafeteria. O objetivo é implementar um campo de busca que permita encontrar pratos e bebidas facilmente. O menu é representado por um array de objetos, onde cada objeto contém o nome do item e sua descrição.

Analise o array de objetos menuabaixo:

```JavaScript
const menu = [
  { name: 'Café Expresso', description: 'Café forte e encorpado' },
  { name: 'Cappuccino', description: 'Café com leite vaporizado e espuma' },
  { name: 'Bolo de Cenoura', description: 'Bolo caseiro com cobertura de chocolate' },
  { name: 'Sanduíche Natural', description: 'Sanduíche leve com ingredientes frescos' }
];
```

Considerando esse array, você precisa implementar um campo de busca que retorna todos os itens cujo nome ou descrição contenha a palavra digitada pela pessoa (ignorando maiúsculas e minúsculas).

Como você pode implementar o campo de busca?

Resposta:

```JavaScript
function searchMenu(query) {
  return menu.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) || 
    item.description.toLowerCase().includes(query.toLowerCase())
  );
}
```

> Esta opção usa toLowerCase para ignorar maiúsculas e minúsculas e includes para verificar se a palavra digitada está presente no nome ou na descrição dos itens.

### Aula 1 - Manipulando a busca - Vídeo 4

Transcrição  
Vamos avançar para a próxima etapa da implementação dessa funcionalidade. Já criamos o campo de busca na interface e adicionamos uma função para buscar um pensamento por termo no arquivo api.js. Precisamos integrar essa funcionalidade aos diversos arquivos JavaScript no VSCode, cada um com sua responsabilidade específica.

No arquivo main.js, adicionamos ouvintes de evento e agora precisamos fazer o mesmo com relação ao campo de entrada (input). Desejamos capturar o valor digitado pela pessoa e também monitorar o momento em que ela está digitando.

Estamos implementando uma busca dinâmica, também conhecida como typeahead ("preenchimento automático").

À medida que a pessoa digita, os pensamentos são atualizados automaticamente. É semelhante a um formulário de cadastro onde, ao inserir seu endereço e estado, as sugestões de cidades são oferecidas enquanto você digita.

Esse processo é conhecido como autossugestão ou typeahead. Conforme a pessoa digita, os resultados correspondentes vão aparecendo em tempo real.

Implementando o typeahead  
Para implementar isso, precisamos acessar o campo de entrada (input) e seu valor, além de adicionar um evento. Na linha 9, criaremos uma constante chamada inputBusca que será atribuída ao resultado de document.getElementById(), passando o id que criamos, que é campo-busca.

main.js

```JavaScript
// código omitido

const inputBusca = document.getElementById("campo-busca")

// código omitido
```

Na linha 13, após botaoCancelar, usaremos a constante inputBusca para adicionar um evento com addEventListener().

O evento que desejamos ouvir é o evento de input. Esse evento será disparado toda vez que houver uma modificação no campo de entrada. Quando isso acontecer, precisaremos manipular a busca. Portanto, passaremos o nome de uma função, que ainda vamos criar, chamada manipularBusca.

```JavaScript
// código omitido

inputBusca.addEventListener("input", manipularBusca)

// código omitido
```

Criando a função manipularBusca  
Copiamos o nome manipularBusca e criamos a função correspondente após o manipularCancelamento() no final do arquivo. Ela será definida como uma função assíncrona que chamará o método assíncrono que criamos na API. Digitamos async function manipularBusca() {}.

```JavaScript
// código omitido

async function manipularBusca() {

}

// código omitido
```

Dentro dessa função, precisamos primeiro obter o valor digitado no campo de busca. Para isso, criaremos uma constante chamada termoBusca e a atribuiremos o valor de document.getElementById("campo-busca").value.

O .value é porque precisamos acessar o valor do input passado. Observe que ao digitar "." temos todas propriedades referentes ao campo sendo exibidas em um menu suspenso, optamos pelo "value". O resultado disso é obtermos o termo que a pessoa digitou.

```JavaScript
// código omitido

async function manipularBusca() {
    const termoBusca = document.getElementById("campo-busca").value
}

// código omitido
```

Utilizaremos o bloco try-catch. Na linha 41, criaremos uma constante chamada pensamentosFiltrados dentro do try, e a atribuiremos ao resultado da chamada assíncrona await api.buscarPensamentosPorTermo(), passando o termoBusca. Ao digitarmos "api." serão exibidos diversos métodos, precisamos escolher o buscarPensamentosPorTermo.

```JavaScript
// código omitido

async function manipularBusca() {
  const termoBusca = document.getElementById("campo-busca").value
  try {
    const pensamentosFiltrados = await api.buscarPensamentosPorTermo(termoBusca)
  } catch (error) {
    
  }

// código omitido
```

Renderizando os pensamentos filtrados  
Precisamos renderizar apenas esses pensamentos filtrados. Acessaremos a função renderizarPensamentos() que temos no arquivo ui, usando ui.renderizarPensamentos(). Precisamos passar os pensamentos filtrados para essa função para que sejam renderizados.

Ao teclarmos "Ctrl + clique" sobre a função renderizarPensamentos, somos direcionados para o arquivo ui.js e observamos que ela captura todos os pensamentos na linha 22, em async renderizarPensamentos(). Ela vai na api e busca todos os pensamentos em api.buscaPensamentos().

Portanto, todos os pensamentos estão sendo exibidos. Precisamos ajustar a função de renderização para que passe apenas os pensamentos filtrados como parâmetro, garantindo que apenas esses pensamentos sejam exibidos.

Voltando ao main.js, copiaremos a constante pensamentosFiltrados e a passaremos para a função renderizarPensamentos().

main.js

```JavaScript
// código omitido

async function manipularBusca() {
  const termoBusca = document.getElementById("campo-busca").value
  try {
    const pensamentosFiltrados = await api.buscarPensamentosPorTermo(termoBusca)
     ui.renderizarPensamentos(pensamentosFiltrados)
  } catch (error) {
    
  }

// código omitido
```

No bloco catch(), se ocorrer algum erro, exibiremos a mensagem "Erro ao realizar busca".

```JavaScript
// código omitido

async function manipularBusca() {
  const termoBusca = document.getElementById("campo-busca").value
  try {
    const pensamentosFiltrados = await api.buscarPensamentosPorTermo(termoBusca)
    ui.renderizarPensamentos(pensamentosFiltrados)
  } catch (error) {
    alert("Erro ao realizar busca")
  }
}

// código omitido
```

Verificando a aplicação  
Agora, verificamos na aplicação se algo está acontecendo. Digitamos "Yoda" no campo de busca "Meu Mural" e não visualizamos nenhuma resposta. Precisamos confirmar se o filtro está sendo aplicado corretamente.

Analisando o filtro  
Como chamamos a função e atribuímos os resultados a pensamentosFiltrados, podemos usar console.log(pensamentosFiltrados) para verificar se o filtro está funcionando.

```JavaScript
// código omitido

async function manipularBusca() {
  const termoBusca = document.getElementById("campo-busca").value
  try {
    const pensamentosFiltrados = await api.buscarPensamentosPorTermo(termoBusca)
    console.log(pensamentosFiltrados)
    ui.renderizarPensamentos(pensamentosFiltrados)
  } catch (error) {
    alert("Erro ao realizar busca")
  }
}

// código omitido
```

Isso nos ajudará a identificar se o problema está na filtragem ou na renderização dos resultados.

Identificando o problema  
Acessamos a aplicação e abrimos o terminal com "Ctrl + Shift + J" para abrir o console do navegador à direita. Com o console aberto, digitamos "chaves" no campo de busca. Ao selecionar "chaves", o console exibe um array com dois elementos.

```JavaScript
0:
    "autoria": "Chaves",
    "conteudo": "Esse é de laranja que parece de limão, mas tem go...",
    "id": "68uy"
1:
    "autoria": "Chaves",
    "conteudo": "Foi sem querer querendo!",
    "id": "6a2b"
     [[Prototype]]: Object
    length: 2
     [[Prototype]]: Array(a)
```

Os dois pensamentos exibidos no console têm a autoria de "Chaves". Isso indica que a funcionalidade da API e do main.js está funcionando corretamente. No entanto, a lista na interface da aplicação não está sendo atualizada.

Conclusão e próximo passo  
Agora que ajustamos a API e o main.js, precisamos fazer o ajuste na função do arquivo ui responsável por renderizar os pensamentos. Isso permitirá que a lista seja atualizada dinamicamente conforme digitamos o termo de busca.

Vamos concluir isso no próximo vídeo!

### Aula 1 - Atualizando os dados em tempo real

Como você pode implementar a funcionalidade de busca dinâmica ou typeahead para garantir que a lista de produtos buscados no menu digital seja atualizada em tempo real no Serenatto - Café & Bistrô?

Resposta:

> document.querySelector('#search').addEventListener('input', manipularBusca);  
> O evento input é disparado sempre que o valor do campo de busca é alterado, permitindo a atualização em tempo real da lista de pensamentos.

### Aula 1 - Finalizando a busca typeahead - Vídeo 5

Transcrição  
No vídeo passado, atualizamos a função de manipulação da busca. Inclusive, observando o console, descobrimos que os pensamentos já estão sendo filtrados. No entanto, a nossa lista ainda não está sendo atualizada com esses resultados. Vamos entender o porquê.

Entendendo a filtragem dos pensamentos
Retornando ao arquivo main.js, no VS Code, temos a função manipularBusca(), que criamos. Já podemos apagar o console.log(pensamentosFiltrados), para não deixarmos no nosso código por esquecimento. Não precisamos mais dele.

Arquivo main.js

```JavaScript
//código omitido

async function manipularBusca() {
    const termoBusca = document.getElementById("campo-busca").value
    try {
        const pensamentosFiltrados = await api.buscarPensamentosPorTermo(termoBusca)
        ui.renderizarPensamentos(pensamentosFiltrados)
    } catch (error) {
        alert("Erro ao realizar busca")
    }
}
```

Nessa função, buscamos os pensamentos por termo (termoBusca). Em seguida, chamamos a função renderizarPensamentos(), passando os pensamentosFiltrados como parâmetro. Acessaremos essa função para entendermos melhor o que fizemos.

Pressionando "Ctrl" e clicando na função renderizarPensamentos(), acessamos o código da criação da função, no ui.js. Quando a chamamos no main.js, passamos um parâmetro para ela, mas ela não recebe nenhum parâmetro na sua construção.

Arquivo ui.js

```JavaScript
// código omitido

async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos")
    const mensagemVazia = document.getElementById("mensagem-vazia")
    listaPensamentos.innerHTML = ""

    //código omitido
},
```

Ela não está adaptada para receber esse o pensamentosFiltrados como parâmetro e lidar com ele, então precisamos refatorar essa função que já existia no código. Isso é algo comum de acontecer.

Quando estamos implementando uma nova funcionalidade, além de criarmos vários trechos de código, às vezes precisamos modificar um código que já existia, mas precisamos trabalhar com cuidado nesse aspecto.

Refatorando a renderizarPensamentos()  
Começaremos passando um parâmetro opcional para essa função, porque atualmente apenas buscamos todos os pensamentos, como podemos observar no try{}.

Arquivo ui.js

```JavaScript
// código omitido

async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos")
    const mensagemVazia = document.getElementById("mensagem-vazia")
    listaPensamentos.innerHTML = ""

    try {
        const pensamentos = await api.buscarPensamentos()
        if (pensamentos.length === 0) {
            mensagemVazia.style.display = "block"
        } else {
            mensagemVazia.style.display = "none"
            pensamentos.forEach(ui.adicionarPensamentoNaLista)
        } 
    }

    //código omitido
}
```

Essa lista não está sendo atualizada. Precisamos fazer uma busca e depois renderizar novamente essa lista, conforme o que a pessoa for digitando. Para isso, nos parênteses de renderizarPensamento(), escreveremos o pensamentosFiltrados como nulo.

Arquivo ui.js

```JavaScript
// código omitido

async renderizarPensamentos(pensamentosFiltrados = null) {
    const listaPensamentos = document.getElementById("lista-pensamentos")
    const mensagemVazia = document.getElementById("mensagem-vazia")
    listaPensamentos.innerHTML = ""

    //código omitido
},
```

Temos que pensar que nem todas as pessoas que vão entrar na aplicação realizarão uma busca. Sendo assim, esse campo pode ficar vazio, porque esse parâmetro pode não existir.

Em seguida, dentro do try, criaremos uma variável, codando let pensamentosParaRenderizar. Essa variável, como o próprio nome diz, representará os pensamentos que aparecerão na lista. Para isso, criaremos uma condição.

Arquivo ui.js

```JavaScript
// código omitido

async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos")
    const mensagemVazia = document.getElementById("mensagem-vazia")
    listaPensamentos.innerHTML = ""

    try {
        let pensamentosParaRenderizar
        if (pensamentosFiltrados) {
            pensamentosParaRenderizar = pensamentosFiltrados
        } else {
            pensamentosParaRenderizar = await api.buscarPensamentos()

        if (pensamentos.length === 0) {
            mensagemVazia.style.display = "block"
        } else {
            mensagemVazia.style.display = "none"
            pensamentos.forEach(ui.adicionarPensamentoNaLista)
        } 
    }

    //código omitido
}
```

Agora, se o parâmetro for passado no campo de busca, (if(pensamentosFiltrados), executamos os pensamentosParaRenderizar como os pensamentosFiltrados. Se não houver, aparecerá o resultado da busca total de pensamentos mesmo.

Precisamos ajustar a segunda condicional, que mostra ou não a mensagem de que não existe nenhum pensamento cadastrado. Ao invés de pensamentos, mudamos para pensamentosParaRenderizar. Faremos essa substituição no segundo if/else dentro do try da função renderizarPensamentos().

Arquivo ui.js

```JavaScript
// código omitido

    try {
        let pensamentosParaRenderizar
        if (pensamentosFiltrados) {
            pensamentosParaRenderizar = pensamentosFiltrados
        } else {
            pensamentosParaRenderizar = await api.buscarPensamentos()

        if (pensamentosParaRenderizar.length === 0) {
            mensagemVazia.style.display = "block"
        } else {
            mensagemVazia.style.display = "none"
            pensamentosParaRenderizar.forEach(ui.adicionarPensamentoNaLista)
        } 
    }

    //código omitido
}
```

Testando as alterações  
Voltando à nossa aplicação, recarregaremos a página e, no campo de busca, digitaremos, por exemplo, "dev". Com isso, apareceram os três pensamentos de autoria "Dev". Se digitarmos "drama", aparece o pensamento que tem "drama" no seu conteúdo. Se deixamos o campo de busca vazio, aparecem todos os pensamentos.

Nossa busca typeahead está pronta! À medida que a pessoa digitar, os resultados correspondentes serão sugeridos. Muito legal!

Revisando nosso código  
Para fazermos essa busca, utilizamos alguns métodos bem interessantes do JavaScript, como o filter, includes, e várias outras funcionalidades. Esses métodos pertencem ao ECMAScript 6+.

O que é ECMAScript é uma especificação da linguagem de script, como o JavaScript. O ES6, é a versão, lançada em 2015. Já o ES6+ significa todas as outras versões lançadas após ela. Não se preocupe, porque já utilizamos o ES6+ em vários projetos dessa formação.

Já aprendemos muitas funcionalidades importantes lançadas com essa versão, como:

- asynce await;
- Template Literals;
- Abordagem de módulos;
- import e export.

Tudo isso era algo que já utilizávamos e continuaremos utilizando nesse curso para evoluirmos ainda mais a nossa aplicação.

Na próxima aula, você aprenderá como favoritar um pensamento.

### Aula 1 - Para saber mais: ECMAScript e suas evoluções

1. O que é ECMAScript?  
ECMAScript é uma especificação de linguagem desenvolvida pela organização ECMA International que define um padrão para linguagens de script, como o JavaScript. A primeira edição foi publicada em 1997 e a linguagem é amplamente utilizada no desenvolvimento web para criar scripts do lado do cliente em navegadores.

Pense no ECMAScript como um documento técnico que estabelece regras de sintaxe utilizadas pelo JavaScript.

Como é natural em qualquer tecnologia, o ECMAScript passou por atualizações que adicionaram novas funcionalidades e capacidades a essa linguagem. Logo, não é importante que você decore quais foram as atualizações, mas tenha uma ideia geral da história do ECMAScript e como suas atualizações influenciam o JavaScript.

O mais importante é entender e saber como utilizar as funcionalidades trazidas pelas atualizações do ECMAScript, como o ES6.

2. O que é ES6?  
ES6, também conhecido como ECMAScript 2015, é uma das atualizações mais significativas da especificação EcmaScript. Por quê?

Bem, dizemos até que existe um JavaScript antes de 2015 e outro depois. Em 2015, a atualização no ECMAScript introduziu uma série de novas funcionalidades e melhorias que aprimoraram a sintaxe e a capacidade do JavaScript. Entre as principais adições estão:

- Let e Const: novas formas de declarar variáveis com escopo de bloco, substituindo o var que tem escopo de função;
- Arrow functions: sintaxe mais curta para funções, com um comportamento léxico de this;
- Classes: sintaxe para criar classes e objetos que simplificam a programação orientada a objetos;
- Template literals: strings com interpolação e múltiplas linhas, facilitando a construção de strings complexas;
- Destructuring: extração de valores de arrays ou objetos em variáveis individuais de forma mais concisa;
- Modules: suporte nativo para módulos, permitindo a importação e exportação de código entre arquivos;
- Promises: facilita o trabalho com operações assíncronas, melhorando a manipulação de callbacks.

Como você talvez percebeu, já utilizamos algumas dessas ferramentas em cursos passados dessa formação. A atualização ES6+ realmente impactou como o JavaScript funciona e suas adições são utilizadas até hoje!

3. O que é ES6+?  
“ES6+” refere-se a todas as versões do EcmaScript que foram lançadas após o ES6, ou seja, após 2015. Cada nova versão trouxe mais melhorias e recursos adicionais, tais como:

- ES7 (ECMAScript 2016): introduziu o operador de exponenciação (**) e o método Array.prototype.includes;
- ES8 (ECMAScript 2017): adicionou async/await para simplificar o trabalho com promises, e novos métodos para strings e objetos;
- ES9 (ECMAScript 2018): incluiu features como rest/spread properties, RegExp named groups e asynchronous iteration;
- ES10 (ECMAScript 2019): trouxe melhorias como Object.fromEntries, Array.prototype.flat, e o método String.prototype.trimStart/trimEnd.;
- ES11 (ECMAScript 2020): adicionou características como o operador de coalescência nula (??), String.prototype.matchAll, e melhorias para Promise.allSettled;
- ES12 (ECMAScript 2021): inclui melhorias como o operador &&= e ||=, WeakRefs, e Logical assignment operators.

Podemos dizer que cada tecnologia parece com um organismo vivo, que está em constante evolução!

4. Diferença entre ECMAScript e JavaScript  
Essa é uma dúvida comum: qual a diferença entre ECMAScript e o JavaScript? Vejamos quais são as diferenças:

- EcmaScript é a especificação ou padrão que define como a linguagem deve se comportar. Ele é agnóstico à implementação, o que significa que não é uma linguagem em si, mas um conjunto de regras que as linguagens de script devem seguir;
- JavaScript é uma implementação específica de ECMAScript. É a linguagem real usada em navegadores e ambientes como Node.js, que adota e adapta a especificação ECMAScript. Em alguns casos, o JavaScript é atualizado com recursos próprios que não constam no ECMAScript.

É importante conhecer o ES6 e suas evoluções, pois muitas das novas funcionalidades melhoram a legibilidade, a manutenção e a eficiência do código.

A maioria das aplicações e bibliotecas modernas usa essas características para tirar proveito das melhorias de desempenho e da sintaxe mais limpa.

### Aula 1 - Faça como eu fiz: adicionando a funcionalidade de busca no Memoteca

Nesta aula, colocamos a mão na massa para implementar a funcionalidade de busca e filtrar pensamentos.

Se ainda não fez, é importante que você coloque em prática o conhecimento adquirido em aula para que o seu aprendizado seja eficaz! Siga os passos abaixo:

- Implemente o campo de busca no layout do projeto, conforme o Figma;
- Crie a lógica de filtragem, incluindo a busca typeahead.
- O resultado esperado é que você consiga buscar e filtrar um pensamento ou pensamentos específicos ao digitar termos na caixa de busca.

Vamos lá?

Para implementar o que foi visto na aula, clique abaixo em “ver opinião da instrutora” para seguir o passo a passo.

Opinião do instrutor

Para ver detalhes do código implementado, acesse o repositório no GitHub.

No arquivo HTML, foi adicionado um campo de busca com uma imagem de lupa e ajustada a formatação da imagem exibida quando não há pensamentos disponíveis.

No arquivo "index.html":

- Adicione um campo de busca com a tag `<input>` e um id "campo-busca", e um placeholder com o texto "O que você procura?";
- Insira uma imagem de lupa com a classe "lupa" e o src apontando para "assets/imagens/lupa.png";
- Formate a imagem exibida quando não há pensamentos disponíveis, ajustando o src para "assets/imagens/lista-vazia.png" e adicionando um alt com o texto "Nenhum pensamento disponível".
- Para criar a requisição de busca, adicionamos um novo método na classe api chamado buscarPensamentosPorTermo, que recebe um termo como parâmetro e filtra os pensamentos que contenham esse termo no conteúdo ou na autoria. Utilizamos o método filter para realizar essa filtragem. Além disso, fizemos o tratamento de erros com try/catch para lidar com possíveis falhas na busca dos pensamentos ou no filtro por termo.

No arquivo “api.js”:

- Adicione um novo método na classe api chamado buscarPensamentosPorTermo;
- Utilize o async para indicar que a função é assíncrona;
- Implemente a lógica para buscar os pensamentos, transformar o termo em minúsculas e filtrar os pensamentos que contenham o termo no conteúdo ou na autoria;
- Utilize o método filter para realizar a filtragem;
- Retorne os pensamentos filtrados;
- Adicione um bloco try/catch para tratar possíveis erros durante a busca ou filtragem dos pensamentos;
- No bloco catch, exiba um alerta informando sobre o erro e lance o erro novamente.
- Para integrar a funcionalidade no arquivo main.js, adicionamos a funcionalidade de busca de pensamentos no formulário da página. Para fazer isso, criamos um novo evento de input no campo de busca, que aciona a função manipularBusca. Essa função busca os pensamentos de acordo com o termo inserido no campo de busca, renderiza os pensamentos filtrados na tela e trata possíveis erros durante a busca.

No arquivo “js/main.js”:

- Adicione um evento de input no campo de busca;
- Crie a função manipularBusca para buscar os pensamentos de acordo com o termo inserido;
- Dentro da função manipularBusca, obtenha o termo de busca do campo de busca;
- Utilize a função api.buscarPensamentosPorTermo para buscar os pensamentos;
- Renderize os pensamentos filtrados na tela com a função ui.renderizarPensamentos;
- Trate possíveis erros durante a busca exibindo um alerta com a mensagem "Erro ao realizar busca".

Por fim, alteramos o arquivo "js/ui.js" para adicionar a funcionalidade de renderizar pensamentos filtrados. Inserimos um parâmetro opcional na função "renderizarPensamentos" para receber os pensamentos filtrados e exibi-los na lista. Caso não haja pensamentos filtrados, a função continua buscando todos os pensamentos.

No arquivo “ui.js”:

- Adicione um parâmetro opcional chamado "pensamentosFiltrados" na função "renderizarPensamentos";
- Verifique se há pensamentos filtrados passados como argumento;
- Se houver pensamentos filtrados, atribua-os à variável "pensamentosParaRenderizar";
- Caso contrário, busque todos os pensamentos utilizando a função "api.buscarPensamentos()" e atribua o resultado à variável "pensamentosParaRenderizar";
- Verifique se a lista de pensamentos para renderizar está vazia;
- Se estiver vazia, exiba a mensagem de vazia;
- Caso contrário, oculte a mensagem de vazia e adicione cada pensamento da lista à interface utilizando a função "ui.adicionarPensamentoNaLista".

Se ainda sobrarem dúvidas, chame a gente no fórum ou no Discord!

### Aula 1 - Lista de exercícios

O que é:  
Boas-vindas à nossa lista de exercícios - um caminho prático para aprender e aprimorar suas habilidades em tecnologia. Aqui, você não encontrará longas leituras teóricas ou explicações abstratas.

Em vez disso, nossos exercícios colocam você no centro do processo de aprendizado, permitindo que você construa, experimente e explore conceitos tecnológicos.

Para que serve:  
Esta lista serve para aprender, reforçar, praticar e aprimorar habilidades em programação e desenvolvimento web.

Cada exercício é uma oportunidade de aplicar conhecimentos teóricos em cenários reais. Desafie-se! A lista prepara você não apenas para entender tecnologia, mas para utilizá-la de maneira eficaz e criativa em seus próprios projetos ou no trabalho.

Como fazer:  

- Leia cada exercício com atenção: comece entendendo o cenário proposto e o que se espera como resultado.
- Escreva o código: utilize o ambiente de codificação de sua escolha para escrever e testar o seu código. Não se preocupe em acertar de primeira, a prática leva à perfeição.
- Verifique o gabarito: após tentar resolver o exercício, compare seu código com o gabarito fornecido em “Opinião do instrutor”. Isso ajudará a identificar áreas de melhoria e consolidar o aprendizado.
- Repita: a repetição é chave para o aprendizado. Tente fazer os exercícios mais de uma vez, aplicando melhorias e variantes.
- Lembre-se: cada desafio é uma chance de crescer. Não se desanime com os erros; eles são degraus no caminho do aprendizado. Sobretudo, divirta-se! O aprendizado mais eficaz acontece quando nos engajamos e nos interessamos pelo que estamos fazendo.

Não se esqueça que estamos no Fórum e no Discord para ajudar você!

Bons estudos!

1. Abrindo o projeto da lista de filmes
Você teve acesso ao projeto Lista de Filmes e precisa implementar algumas funcionalidades. Mas antes, é necessário abrir este arquivo e deixar ele funcionando em seu navegador.

Dicas:

Lembre-se de usar o json-server no terminal para ter acesso ao back-end e conseguir exibir os filmes na tela.
Use também a extensão Live Server para abrir o projeto no navegador.
2. Implementando um campo de busca básico
A primeira funcionalidade que você deve implementar no projeto é o layout de um campo de busca, para que a pessoa encontre o filme buscado rapidamente. Para isso, é necessário criar um campo de busca no documento HTML, como mostrado na imagem abaixo:

Imagem. Temos dois elementos, acima centralizado temos o título "Lista de Filmes" e abaixo também centralizado, um campo de busca retangular com a frase "O que está procurando" escrita em cinza-claro

Dicas:

Lembre-se de usar tags semânticas para construir sua aplicação como `<section>` e `<input>`;

Caso queira, personalize o projeto inicial da forma como preferir. Para fazê-lo, altere devidamente o arquivo "style.css", contido na pasta "css".

3. Criando a função de buscar

Agora que você fez um campo para realizar a busca, é preciso criar a lógica para filtrar os filmes.

- Implemente a função que fará a busca pelo termo digitado no arquivo JavaScript;
- Certifique-se de que a busca seja insensível a maiúsculas e minúsculas;
- Crie um código que possibilite realizar a busca tanto pelo nome quanto pelo gênero do filme;
- Certifique-se de informar a pessoa usuária caso algum erro aconteça. Para isso, você pode usar o try e catch.

4. Atualizando a interface com resultados de busca em tempo real

Agora que você implementou a lógica de busca, garanta que a lista de filmes no navegador seja atualizada dinamicamente conforme a pessoa usuária digita no campo de busca.

Dica:

Adicione um manipulador de eventos no campo de busca que chame a função no arquivo "main.js".
Vamos lá?

5. Usando Inteligência Artificial para aumentar a quantidade de filmes

Nossa lista de filmes está bem pequena ainda, com apenas cinco filmes no catálogo. Seria mais legal usar a funcionalidade de busca em um catálogo maior. Tente usar o chat GPT para aumentar a quantidade de filmes no back-end.

Dica:

Ao conversar com a inteligência artificial, use mensagens diretas e contextos claros, além de mostrar os dados que você já possui no back-end;
A lista de filmes deve estar em formato JSON.

Vamos lá?

Opinião do instrutor

Veja, abaixo, as sugestões de resolução dos exercícios.

1. Abrindo o projeto da lista de filmes

- Baixe o projeto no link indicado e descompacte a pasta clicando com o botão direito do mouse e selecionando a opção "Extrair tudo…";
- Abra a pasta no seu editor de código. Recomendo que use o VS Code;
- Abra o terminal integrado do VS Code com o atalho CTRL + J;

Digite o comando:

```JavaScript
json-server --watch backend/db.json
```

Clique com o botão direito do mouse sobre o arquivo "index.html" que está na lateral esquerda do VS Code e selecione a opção Open with Live Server.

Feitos esses passos, você abriu e preparou o projeto corretamente!

2. Implementando um campo de busca básico

Abra o arquivo "index.html";

Adicione o seguinte código HTML para o campo de busca após a tag <h2>com o título "Lista de Filmes":

```JavaScript
<section id="busca-container">
    <input type="text" id="campo-busca" placeholder="O que está procurando?" />
</section>
```

Vamos entender o código linha a linha:

`<section id="busca-container">:`

- Esta linha abre uma tag `<section>`, que é um elemento semântico usado para agrupar conteúdo relacionado;
- O atributo id="busca-container" é usado para identificar este elemento unicamente na página, permitindo que ele seja estilizado ou manipulado através de CSS e JavaScript. Neste caso, o ID sugere que esta seção é destinada a conter algo relacionado com a funcionalidade de busca.

`<input type="text" id="campo-busca" placeholder="O que está procurando?" />`

- Esta linha cria um campo de entrada (input) do tipo texto (type="text"), que permite ao utilizador inserir informações, como palavras ou frases;
- O atributo id="campo-busca" dá um ID único ao campo de entrada, facilitando a referência a este elemento em CSS e JavaScript;
- O atributo placeholder="O que está procurando?" define um texto que aparece dentro do campo de entrada como uma sugestão ou exemplo, desaparecendo quando o utilizador começa a digitar.
`</section>`

Esta linha fecha a tag `<section>`, indicando o fim do bloco de conteúdo definido anteriormente.
Portanto, este código cria uma seção na página com um campo de entrada em que os usuários podem digitar e buscar um título de um filme.

3. Criando a função de buscar

Abra o arquivo "api.js";

Adicione uma vírgula após a função anterior que exclui um filme;

Implemente a função para a busca pelo termo (dê o nome que preferir para a função).

```JavaScript
async buscarFilmesPorTermo(termo) {
  try {
    const filmes = await this.buscarFilmes()
    const termoEmMinusculas = termo.toLowerCase()
    const filmesFiltrados = filmes.filter(filme => {
      return filme.nome.toLowerCase().includes(termoEmMinusculas) ||
        filme.genero.toLowerCase().includes(termoEmMinusculas)
    })
    return filmesFiltrados
  } catch (error) {
    alert("Erro ao filtrar filmes")
    throw error
  }
}
```

Vejamos como fica o código linha a linha:

```JavaScript
async buscarFilmesPorTermo(termo) {
```

Linha 1: Esta linha define uma função assíncrona chamada buscarFilmesPorTermo, que recebe um parâmetro chamado termo. O prefixo async indica que a função contém operações assíncronas, permitindo o uso da palavra-chave await dentro dela.

```JavaScript
try {
```

Linha 2: Abre um bloco try, que é usado para envolver código que pode lançar exceções (erros). Caso algum erro ocorra dentro desse bloco, ele será capturado pelo bloco catch correspondente.

```JavaScript
const filmes = await this.buscarFilmes();
```

Linha 3: Esta linha utiliza await para esperar que a função buscarFilmes seja concluída antes de prosseguir. this.buscarFilmes() chama uma função dentro do mesmo objeto (ou classe) que provavelmente retorna uma lista de filmes. A palavra await garante que a execução da função buscarFilmesPorTermo aguarde a resposta da função assíncrona buscarFilmes antes de continuar.

```JavaScript
  const termoEmMinusculas = termo.toLowerCase();
```

Linha 4: Converte o termo de busca fornecido pelo usuário (termo) para letras minúsculas usando o método toLowerCase(). Isso faz com que a busca não seja sensível a maiúsculas e minúsculas, ou seja, o termo "Ação" será tratado da mesma forma que "ação".

```JavaScript
  const filmesFiltrados = filmes.filter(filme => {
```

Linha 5: Usa o método filter em filmes para criar um novo array filmesFiltrados contendo apenas os filmes que correspondem ao termo de busca. A função de callback passada para filter é executada para cada elemento do array filmes.

```JavaScript
    return filme.nome.toLowerCase().includes(termoEmMinusculas) ||
```

Linha 6: Esta linha verifica se o nome do filme (filme.nome) contém o termo de busca em letras minúsculas. O método toLowerCase() é novamente usado para garantir que a comparação não seja sensível a maiúsculas e minúsculas. A função includes() retorna true se o termo de busca estiver contido no nome do filme.

```JavaScript
      filme.genero.toLowerCase().includes(termoEmMinusculas);
```

Linha 7: Esta linha verifica se o gênero do filme (filme.genero) contém o termo de busca em letras minúsculas, da mesma forma que a linha anterior. Se o termo de busca estiver presente no nome ou no gênero, o filme será incluído no array filmesFiltrados.

```JavaScript
  });
```

Linha 8: Fecha a função de callback usada no método filter.

```JavaScript
  return filmesFiltrados;
```

Linha 9: Retorna o array filmesFiltrados que contém apenas os filmes que correspondem ao termo de busca.

```JavaScript
} catch (error) {
```

Linha 10: Abre um bloco catch que captura qualquer erro que tenha ocorrido no bloco try. Se houver algum problema na filtragem dos filmes, o código dentro deste bloco será executado.

```JavaScript
  alert("Erro ao filtrar filmes");
```

Linha 11: Exibe um alerta no navegador informando ao usuário que ocorreu um erro ao tentar filtrar os filmes.

```JavaScript
  throw error;
```

Linha 12: Relança o erro capturado, permitindo que ele seja tratado em outro lugar do código, se necessário.

```JavaScript
}
```

Linha 13: Fecha o bloco catch e a função buscarFilmesPorTermo.
A função busca filmes de acordo com um termo fornecido, verificando se o termo aparece no nome ou gênero dos filmes, e retorna uma lista de filmes que correspondem ao termo de busca. Se ocorrer algum erro durante o processo, a função exibe uma mensagem de erro e relança a exceção para ser tratada em outro lugar.

4. Atualizando a interface com resultados de busca em tempo real

Abra o arquivo "main.js";

Ao final do arquivo, crie a função que atualiza a tela à medida que a pessoa faz uma busca:

```JavaScript
async function manipularBusca() {
  const termoBusca = document.getElementById("campo-busca").value
  try {
    const filmesFiltrados = await api.buscarFilmesPorTermo(termoBusca)
    ui.renderizarFilmes(filmesFiltrados)
  } catch (error) {
    alert("Erro ao realizar busca")
  }
}
```

Dentro do evento DOMContentLoaded, busque pelo campo de busca com o getElementById e armazene em uma constante:

```JavaScript
  const inputBusca = document.getElementById("campo-busca")
```

Ainda dentro do evento de DOMContentLoaded, adicione um evento de input e adicione a função que você criou para manipular a busca de elementos na tela:

```JavaScript
inputBusca.addEventListener("input", manipularBusca)
```

5. Usando Inteligência Artificial para aumentar a quantidade de filmes

Abra o ChatGPT;

Você pode usar como base a seguinte mensagem para obter mais filmes para o seu catálogo:

Tenho uma lista de filmes em formato json. Quero que você adicione 15 filmes e quero que essa lista mantenha o padrão do arquivo. O nome dos filmes deve estar em português.

Veja um exemplo de resultado em JSON obtido com o prompt acima:

```JavaScript
{
  "filmes": [
    {
      "id": "1001",
      "nome": "O Iluminado",
      "genero": "Terror"
    },
    {
      "id": "1002",
      "nome": "Forrest Gump: O Contador de Histórias",
      "genero": "Drama"
    },
    {
      "id": "1003",
      "nome": "Matrix",
      "genero": "Ficção Científica"
    },
    {
      "id": "1004",
      "nome": "Batman: O Cavaleiro das Trevas",
      "genero": "Ação"
    },
    {
      "id": "1005",
      "nome": "Alien: Romulus",
      "genero": "Ficção Científica"
    }
  ]
}
```

Você concluiu mais uma lista de exercícios! Muito bem!

Procure-nos no fórum ou Discord se precisar de ajuda!

## Aula 2 - Fovoritando um pensamento

### Aula 2 - Adaptando o back-end e a interface para a funcionalidade de favoritar - Vídeo 1

Transcrição  
Sabe quando você está navegando em uma aplicação com centenas de itens, sejam produtos ou fotos em uma rede social, e quer destacar ou marcar alguns deles? No caso de produtos, seria adicionar a uma lista para acompanhar o preço, por exemplo. Essa funcionalidade de "favoritar" é bastante comum e muito útil para acompanhar dados de interesse, mas ainda não está disponível no nosso mural. Que tal implementá-la?

Implementando o ícone favoritar  
No Figma, podemos ver que, ao lado dos ícones de editar e excluir, existe um ícone de coração, que geralmente utilizamos para favoritar cards, produtos, ou itens semelhantes. Nossa tarefa agora é implementar a funcionalidade de favoritar. Temos o ícone de coração vazio e também a versão preenchida, quando for favoritado. Podemos dividir essa implementação em várias etapas para facilitar o processo.

Primeiro, precisamos adicionar o ícone de coração ao lado dos ícones de editar e excluir, representados pelo lápis e pela lixeira. Além disso, também devemos programar o comportamento desse botão: ao clicar no coração, ele deve mudar visualmente, ficando preenchido, e, ao mesmo tempo, enviar a informação para a API, indicando que o item foi marcado como favorito. Começaremos a implementar isso agora.

Alterações no back-end  
No VS Code, no menu lateral esquerdo, acessamos backend > db.json. Estamos utilizando o jsonServer, que serve como nossa API fictícia. Como somos responsáveis tanto pelo front-end quanto pelo back-end, será necessário fazer uma alteração nesse arquivo.

Um pensamento possui algumas características, como id, conteudo e autoria. A implementação da funcionalidade para marcar um item como favorito adiciona uma nova característica a ele, tornando-o uma propriedade. Para podermos enviar essa informação corretamente, o back-end deve estar preparado para recebê-la. Não adianta apenas modificar a interface e adicionar essa nova característica se o back-end não estiver configurado para processar e armazenar essas informações.

Essa parte ficaria a cargo do time de back-end, mudar esse pensamento, adicionar essa propriedade e também nos informar qual é o tipo dessa propriedade. Temos conteudo e autoria como string. Além disso, no caso da propriedade de favorito, ou um pensamento é favorito, ou não é. Então, teremos uma propriedade booleana, true ou false.

A primeira coisa que precisamos fazer é ajustar esse arquivo, adicionando a propriedade. Como são vários pensamentos, para não dar erro adicionaremos a propriedade em todos os pensamentos que já existem. Nisso, quando adicionarmos a funcionalidade, os próximos virão com essa propriedade setada.

Atualização no JSON Server  
Como todo pensamento tem a mesma estrutura, então selecionamos "id": e com o "Ctrl + D", você pode selecionar todas as outras ocorrências do termo. Outra forma de fazer isso é utilizando o atalho "Ctrl + Shift + L", assim, selecionamos de uma só vez todos os ids.

Feito isso, pressionamos a tela de seta para direita até chegar na vírgula. Após, pressionamos "Enter" para pular para a linha abaixo. Após, escrevemos entre aspas duplas favorito: false,.

```JavaScript
  "pensamentos": [
    {
      "id": "2a56",
      "favorito": false,
      "conteudo": "Vc faz TI? Conserta meu celular!",
      "autoria": "Grupo da família"
    },
    {
      "id": "4c7d",
      "favorito": false,
      "conteudo": "Da vida reclama, mas sem ela não vive!",
      "autoria": "Mestre Yoda"
    },
    {
      "id": "68uy",
      "favorito": false,
      "conteudo": "Esse é de laranja que parece de limão, mas tem gosto de tamarindo!",
      "autoria": "Chaves"
    },
    {
      "id": "b807",
      "favorito": false,
      "conteudo": "Melhor professor, o fracasso é!",
      "autoria": "Mestre Yoda"
    },
    {
      "id": "9f3c",
      "favorito": false,
      "conteudo": "Você não é todo mundo!",
      "autoria": "Mãe"
    },
    {
      "id": "6a2b",
      "favorito": false,
      "conteudo": "Foi sem querer querendo!",
      "autoria": "Chaves"
    },
    {
      "id": "7e2a",
      "favorito": false,
      "conteudo": "Que a força esteja com você!",
      "autoria": "Mestre Yoda"
    },
    {
      "id": "5c8f",
      "favorito": false,
      "conteudo": "Resolver o bug não consegue? Esfriar a cabeça vc deve.",
      "autoria": "Mestre Yoda"
    },
    {
      "id": "2d6e",
      "favorito": false,
      "conteudo": "Não faça drama, faça café! :)",
      "autoria": "Dev"
    },
    {
      "id": "3f1a",
      "favorito": false,
      "conteudo": "Conserta minha impressora?",
      "autoria": "Grupo da família"
    },
    {
      "id": "8b4c",
      "favorito": false,
      "conteudo": "A vingança nunca é plena... mata a alma e a envenena...",
      "autoria": "Seu Madruga"
    },
    {
      "id": "584a",
      "favorito": false,
      "conteudo": "Na minha máquina funciona!",
      "autoria": "Dev"
    }

//Código omitido
```

Modificamos o back-end adicionando essa propriedade de favorito, que vai ser inerente a todos os pensamentos e colocamos todos como false. Para não dar nenhum erro, você pode abrir o terminal com o "Ctrl + J" e acessar a aba em que estávamos executando o back-end. Repare que deu um erro, pois estávamos modificando. Para corrigir, paramos a execução com "Ctrl + C" e executar novamente passando o comando npm start.

```JavaScript
npm start
```

Adicionando o botão de favoritar na interface  
Assim, não temos mais erros. Essa foi a primeira alteração, agora, fechamos esse arquivo e abrimos o arquivo de interface ui.js. O que faremos é adicionar esse novo botão e ícone ao lado dos outros que já existem. Então, depois do .appendChild(iconeExcluir), pulamos uma linha.

Para criar o botão, próximo à linha 86, criamos uma const botaoFavorito = document.createElement(). Nos parênteses, entre aspas duplas, passamos button.

Adicionaremos uma classe para esse botão, então, na linha abaixo escrevemos botaoFavorito.classList.add(). Nesse caso, entre aspas duplas, o nome da classe será botao-favorito.

Para criar o ícone, na linha abaixo escrevemos const iconeFavorito = document.createElement("img"). Abaixo passamos iconeFavorito.src = "assets/imagens/".

Importante passar o nome correto da imagem. Nesse caso, no Explorer do VS Code, acessamos "assets". Nisso, encontramos dois ícones, o icone-favorito_outline, que está vazio, e o icone-favorito, que é o que está preenchido.

Como setamos todos os pensamentos como o favorito false, vamos escolher o icone-favorito_outline e depois vamos ver como é que essa mudança vai acontecer, à medida que clicarmos no coração.

Então, na mesma linha de código, após a barra, passamos icone-favorito_outline.png. Na linha seguinte, escrevemos iconeFavorito.alt - "Ícone de favorito". Após, faremos o append do ícone no botão, para isso escrevemos botaoFavorito.appendChild(iconeFavorito).

Onde estamos criando esses cards dinamicamente, estamos adicionando na div de ícones, que está na linha 94, o botaoEditar e o botaoExcluir. Também adicionaremos, na linha 96, icones.appendChild(botaoFavorito).

```JavaScript
    iconeExcluir.alt = "Excluir"
    botaoExcluir.appendChild(iconeExcluir)

    const botaoFavorito = document.createElement("button")
    botaoFavorito.classList.add("botao-favorito")

    const iconeFavorito = document.createElement("img")
    iconeFavorito.src = "assets/imagens/icone-favorito_outline.png"
    iconeFavorito.alt = "Ícone de favorito"
    botaoFavorito.appendChild(iconeFavorito)

    const icones = document.createElement("div")
    icones.classList.add("icones")
    icones.appendChild(botaoFavorito)
    icones.appendChild(botaoEditar)
    icones.appendChild(botaoExcluir)
```

Após realizar essas alterações, abrimos a aplicação e verificamos que o ícone de coração apareceu corretamente. Primeiro, ajustamos o back-end, adicionando uma nova propriedade ao pensamento no JSON Server. Em seguida, atualizamos a interface, criando um botão com o ícone de coração que, ao ser clicado, provoca uma mudança visual e altera a propriedade correspondente.

Por enquanto, a funcionalidade ainda não está completa, mas nos próximos vídeos, mostraremos como implementar a lógica necessária para que essa funcionalidade esteja totalmente operacional.

Até lá!

### Aula 2 - Criando requisição com patch para o botão de favoritar pensamentos - Vídeo 2

Transcrição  
A interface está preparada e adaptada para a nossa funcionalidade de favoritar e o back-end também está pronto para receber essa atualização. Agora, precisamos enviar essa informação para a API.

Modificando a propriedade pensamento  
No VS Code, vamos editar o pensamento, porque pegaremos as informações que temos nesse pensamento específico e modificar uma das propriedades desse pensamento. Precisamos editá-lo, semelhante ao que fizemos no editarPensamento(), só que dessa vez terá um detalhe diferente. Entenderemos o que acontecerá.

Criando a função atualizarFavorito()  
No arquivo api.js, onde encontramos essa lógica das requisições, próximo à linha 74, criamos a função async atualizarFavorito().

É importante ter um código organizado. Imagine se tivéssemos todo esse JavaScript em arquivo só. Seria mais complicado para conseguirmos nos localizar e adicionar essas novas funcionalidades.

Talvez você possa estar pensando, será que não é preciso criar uma função para marcar o pensamento como favorito e outra função para desmarcar esse pensamento, para marcá-lo como não favorito?

Na verdade, não é necessário fazer isso. Podemos concentrar essa lógica de mudança da propriedade em uma função só. Por isso colocamos atualizarFavorito e não favoritar ou desfavoritar. Faremos essa lógica, tanto de mudar a propriedade de true para false ou de false para true, em uma única função. Isso é mais eficiente.

Para conseguir fazer isso, precisaremos de algumas informações. Então, nos parênteses, passamos id, favorito. Adicionamos chaves para abrir o bloco de código. Dentro dela, escrevemos try {} catch (error) {}.

Como queremos fazer uma edição, nas chaves de try, passamos const response = await axios.patch. Esse método patché a novidade. Já vimos get, post, put, delete, mas para fazer essa edição, usaremos o método patch.

Para esse método, passaremos entre crases a concatenação. Então, escrevemos ${URL_BASE/}/pensamentos/${id}. Temos a URL e pensamentos. Adicionamos vírgula e passamos a propriedade favorito entre chaves. Na linha abaixo, escrevemos retun response.data. Dentro de catch (error) {} passamos alert("Erro ao atualizar favorito") e na linha abaixo throw error.

```JavaScript
      alert("Erro ao filtrar pensamentos")
      throw error
    }
  },
  async atualizarFavorito(id, favorito) {
    try {
      const response = await axios.patch(`${URL_BASE}/pensamentos/${id}`, { favorito })
      return response.data
    } catch (error) {
      alert("Erro ao atualizar favorito")
      throw error
    }
  }
}
export default api
```

Diferença entre put e patch  
Criamos uma função na API que acessa um pensamento com id específico e atualiza a propriedade favorito. Mas, você pode estar se perguntando, na função de editar, na linha 37, também queríamos modificar o pensamento, mas utilizamos o método put. Qual a diferença entre eles?

O método put é utilizado para fazer uma alteração de várias propriedades do pensamento. Para ele, precisamos passar o recurso inteiro, o dado, por completo. Perceba que no editarPensamento(), como parâmetro, estamos passando o pensamento por completo. No parâmetro, para requisição, também. Nesse caso, poderíamos editar o conteúdo, a autoria e outras propriedades, se houvesse.

No caso de atualizar uma propriedade específica, não seria necessário passar o pensamento por completo, já que o nosso intuito é atualizar apenas essa propriedade. Então, utilizamos o patch, porque ele é responsável por fazer a atualização parcialmente. Esse método utilizamos e passamos como parâmetro as propriedades que queremos modificar.

Então, utilizamos o patch, passamos o endpoint e também a propriedade específica que queremos atualizar. Isso acaba sendo mais eficiente. Disponibilizamos um Para Saber Mais com um link para você estudar sobre as diferenças entre o método put e o patch.

Próximos passos  
Criamos a requisição, mas se voltarmos na aplicação e clicarmos no ícone de coração, nada acontece. Isso, pois precisamos adicionar comportamento a esse botão e também fazer essa mudança visual. Vamos fazer isso no próximo vídeo.

### Aula 2 - Para saber mais: diferenças entre PATCH e PUT

Nesta aula, utilizamos o PATCH para fazer a funcionalidade de favoritar pensamentos.

Vamos conhecê-lo um pouco mais?

1. O que são PATCH e PUT?  
PATCH e PUT são métodos HTTP usados para atualizar recursos em um servidor, mas eles funcionam de maneiras diferentes.

O PUT é utilizado para substituir um recurso existente ou criar um novo recurso se ele não existir. Quando você usa PUT, você deve enviar a representação completa do recurso que está sendo atualizado ou criado. Isso significa que o recurso no servidor é substituído pela versão fornecida na requisição PUT. Por exemplo, utilizamos o PUT quando editamos um pensamento por completo, em suas várias propriedades, como autoria e conteúdo.

Por sua vez, o PATCH é usado para fazer atualizações parciais em um recurso existente. Em vez de enviar o recurso completo, você envia apenas as mudanças que deseja aplicar. PATCH é útil quando você precisa atualizar apenas uma parte de um recurso sem afetar o restante. No nosso caso, só podemos favoritar um pensamento que já existe no projeto e, além disso, apenas atualizamos o status de “favorito” ou “não-favorito” — ou seja, uma parte do pensamento; não o pensamento por completo.

2. Quando usar PUT?  
Substituição completa: use PUT quando você precisa substituir um recurso inteiro. Por exemplo, se você tiver um objeto de usuário com várias propriedades e quiser atualizar todas as propriedades, você enviaria o objeto completo com PUT;
Criação de recurso: se o recurso ainda não existir no servidor, PUT pode ser usado para criá-lo com a representação fornecida.

3. Quando usar PATCH?  
Atualização parcial: utilize o PATCH quando você precisar modificar apenas algumas partes de um recurso. Isso economiza largura de banda e evita o envio de dados que não foram alterados;
Atualizações específicas: ideal para alterações específicas, como atualizar apenas o endereço de e-mail, enquanto mantém outras informações inalteradas.

4. Principais diferenças  
Vamos resumir tudo o que vimos da seguinte forma:

Abrangência da atualização:

- PUT: atualiza ou substitui o recurso completo;
- PATCH: atualiza apenas os campos especificados.

Uso de dados:

- PUT: envia todos os dados do recurso;
- PATCH: envia apenas as alterações.

Agora que você compreendeu as diferenças entre PUT e PATCH, poderá escolher o método mais apropriado para atualizar recursos em uma API. Logo, seu código ficará mais eficiente ao interagir com um servidor.

### Aula 2 - Gerenciamento de favoritos com Axios

Você está desenvolvendo o aplicativo de culinária Cookin'UP.

Para criar a funcionalidade de favoritar receitas, você precisa implementar uma função que atualize o estado de favorito de uma receita no servidor usando uma requisição com Axios.

Como você pode atualizar o estado “favorito” de uma receita?

Resposta:

```JavaScript
async function atualizarFavorito(id, favorito) {
  try {
    const response = await axios.patch(`${URL_BASE}/receitas/${id}`, { favorito });
    return response.data;
  } catch (error) {
    alert("Erro ao atualizar o estado de favorito", error);
    throw error;
  }
}
```

> PATCH é o método ideal para atualizações parciais. Usamos PATCH porque queremos atualizar apenas o campo favorito sem alterar os outros dados da receita.

### Aula 2 - Adicionando o comportamento e ajustando o ícone de favorito - Vídeo 3

Transcrição  
Ajustamos a interface e criamos a função na API responsável por atualizar o pensamento. Agora, precisamos adicionar comportamento ao botão e fazer com que haja uma mudança visual ao clicá-lo.

Mudando a aparência do botão  
Para isso, acessamos o VS Code. Começaremos pelas mudanças visuais. Passamos de forma fixa, na linha 90, o src do ícone favorito como favorito_outline.png, ou seja, como o ícone de coração vazio. Mas, na verdade, esse ícone precisa variar de forma dinâmica conforme a propriedade pensamentoFavorito. Uma forma de resolver isso é utilizando um operador ternário que verificará se esse pensamento é ou não favorito e vai mudar o ícone de acordo com esse valor.

Para esse src, passamos após o sinal de igual pensamento.favorito ?. Feito isso, pressionamos "Enter" para dar uma quebra de linha. Se esse pensamento for favorito, queremos renderizar o ícone favorito.

Então, passamos o caminho "assets/imagens/icone-favorito.png". Se o pensamento for favorito, ou seja, se essa propriedade for true, será renderizado esse primeiro valor do coração preenchido. Se não, então passamos : será renderizado o coração vazio.

```JavaScript
//Código omitido

const icone Favorito = document.createElement("img")
icone Favorito.src = pensamento.favorito ?
"assets/imagens/icone-favorito.png" :
"assets/imagens/icone-favorito_outline.png"

//Código omitido
```

Vamos testar se essa abordagem funcionou. Lembra que colocamos no db.json essa propriedade como false em todos os pensamentos. Então, teoricamente, eles devem continuar assim.

Como ainda não adicionamos esse comportamento, para testar se está funcionando, podemos ir ao arquivo db.json e fazer essa mudança manualmente. Então, na linha 11, mudamos de false para true.

db.json

```JavaScript
//Código omitido
{
"id": "4c7d",
"favorito": true,
"conteudo": "Da vida reclama, mas sem ela não vive!",
"autoria": "Mestre Yoda"
},

//Código omitido
```

Feito isso, ao abrir a aplicação, notamos que o coração fica realmente com a cor preenchida. A abordagem que utilizamos com o operador ternário do JavaScript funcionou.

Como sempre, na programação, existem diversas formas de fazer a mesma coisa. A que utilizamos deu certo.

Porém, se clicarmos no coração, o ícone não muda para o coração vazio. Esse comportamento ainda precisa ser adicionado. Então, fechamos e voltamos ao VS Code.

Adicionando comportamento ao botão  
Agora, precisamos adicionar comportamento a esse botão. No arquivo ui.js, em const botaoFavorito, próximo à linha 88, escrevemos botaoFavorito.onclick = async () => {}. Nas chaves, passamos try {} cat (error){}.

Nas chaves de try, chamaremos a função atualizarFavorito(), que criamos na API.js. Para isso, escrevemos await.api.atualizarFavorito(). Essa função recebe dois parâmetros, então passamos pensamento.id, pensmento.favorito.

Após, queremos renderizar os pensamentos. Então, na linha de baixo, escrevemos ui.renderizarPensamentos(), para vermos essa atualização na interface. Dentro do catch (erro) {}, passamos alert("Erro ao atualizar pensamento").

```JavaScript
//Código omitido
const botaoFavorito = document.createElement("button")
    botaoFavorito.classList.add("botao-favorito")
    botaoFavorito.onclick = async () => {
      try {
        await api.atualizarFavorito(pensamento.id, pensamento.favorito)
        ui.renderizarPensamentos()
      } catch (error) {
        alert("Erro ao atualizar pensamento")
      }
    }
//Código omitido
```

Vamos verificar se está funcionando. Para isso, abrimos a aplicação. Ao clicar no coração, a página recarrega, mas nada acontece. Para entendermos o que está acontecendo, abrimos o arquivo db.js.

Perceba que a lógica que utilizamos, passando esses parâmetros, está um pouco equivocada. Estamos adicionando um manipulador, um evento de onclick no botão favorito seguido do id e a propriedade favorito. Mas, na verdade, precisamos passar a informação negando essa propriedade. Isso, pois, ao clicarmos, queremos que automaticamente essa propriedade mude. Se ela é true, queremos que fique false. Se é false, queremos que fique true.

Então, passamos o operador de negação ! antes de pensamento.favorito. Assim, sempre que clicarmos, haverá essa mudança de true para false ou de false para true.

```JavaScript
//Código omitido
const botaoFavorito = document.createElement("button")
    botaoFavorito.classList.add("botao-favorito")
    botaoFavorito.onclick = async () => {
      try {
        await api.atualizarFavorito(pensamento.id, !pensamento.favorito)
        ui.renderizarPensamentos()
      } catch (error) {
        alert("Erro ao atualizar pensamento")
      }
    }
//Código omitido
```

Feito isso, abrimos a interface novamente. Ao clicar no coração ele fica preenchido, ao clicar novamente, fica vazio. Então, na interface, está dando tudo certo a nossa funcionalidade.

Agora, verificaremos no db.json se está havendo essas modificações. Perceba que, além daquela modificação que fizemos no pensamento do mestre Yoda, houve várias outras, conforme fomos clicando. Então, conseguimos implementar a funcionalidade e está havendo essa mudança, tanto visual como também na propriedade do pensamento.

Agora, nossa aplicação ficou mais completa e interativa. Com certeza a experiência da pessoa usuária será melhor com essa possibilidade de dar destaque aos pensamentos que ela mais gosta.

Na próxima aula, esperamos você para continuarmos evoluindo a aplicação MemoTeca.

### Aula 2 - Faça como eu fiz: favoritando um pensamento da lista

Nesta aula, continuamos evoluindo o projeto e adicionamos a funcionalidade que permite marcar pensamentos como favoritos.

Se ainda não fez, é importante que você coloque em prática o conhecimento adquirido em aula para que o seu aprendizado seja eficaz! Siga os passos abaixo:

- Adapte o back-end para receber a nova propriedade de favorito;
- Crie o layout do botão;
- Implemente a lógica e comportamento da funcionalidade, incluindo uma requisição HTTP.

O resultado final esperado é que os pensamentos tenham um botão de favoritar ou desfavoritar. Além disso, clicar no botão vazio “favorita” um pensamento; clicar no botão preenchido “desfavorita” o pensamento.

Vamos lá?

Para implementar o que foi visto na aula, clique abaixo em “ver opinião da instrutora” para seguir o passo a passo.

Opinião do instrutor

Para ver detalhes do código implementado, acesse o repositório no GitHub.

Nesta aula, adicionamos um novo campo chamado "favorito" com o valor "false" para cada pensamento no arquivo "backend/db.json". Além disso, no arquivo "js/ui.js", produzimos um botão de favorito para cada pensamento exibido na interface.

No arquivo “backend/db.json”:

- Adicione o campo "favorito" com o valor "false" para cada pensamento.

No arquivo “js/ui.js”:

- Crie um botão de favorito para cada pensamento na interface;
- Adicione um ícone de favorito ao botão de favorito.

Para criar a requisição, escrevemos um novo método chamado atualizarFavorito na classe api, que faz uma requisição PATCH para atualizar o campo favorito de um pensamento específico. Para replicar as alterações feitas no arquivo “js/api.js”, siga os passos abaixo:

No arquivo “js/api.js”:

- Crie um novo método assíncrono chamado atualizarFavorito dentro da classe api;
- Utilize a palavra-chave async antes da declaração do método;
- No corpo do método, faça uma requisição PATCH, utilizando o axios para a URL ${URL_BASE}/pensamentos/${id}, passando o objeto { favorito } como parâmetro;
- Retorne os dados da resposta da requisição utilizando response.data;
- Em caso de erro, exiba um alerta com a mensagem "Erro ao atualizar favorito" e lance o erro novamente com throw error.

No arquivo “js/ui.js”:

- Crie um botão de favorito para cada pensamento renderizado;
- Ao clicar no botão de favorito, faça uma requisição assíncrona para atualizar o estado de favorito do pensamento;
- Renderize novamente os pensamentos após a atualização do favorito;
- Se ocorrer algum erro durante a atualização, exiba um alerta com a mensagem "Erro ao atualizar pensamento";
- Altere o ícone do favorito para "assets/imagens/icone-favorito.png" se o pensamento for favorito, caso contrário, utilize "assets/imagens/icone-favorito_outline.png".

Se sobrar alguma dúvida, chame a gente no fórum ou Discord!

### Aula 2 - Lista de exercícios

Vamos praticar o que vimos nesta aula com alguns exercícios?

Para isso, continuaremos a trabalhar com o projeto da lista de filmes que vimos na aula anterior! Utilize o seu editor de código para fazer os exercícios.

1. Adicionando botão de favoritar na interface  
Você foi encarregado(a) de adicionar a funcionalidade de favoritar um filme da lista de filmes. Para construí-la, no arquivo "ui.js", escreva o código necessário para criar o botão de favoritar com o ícone de coração vazio na pasta "assets/imagens".

Dica:

Você pode se basear nos códigos dos botões de excluir e editar para criar essa funcionalidade.
Vamos lá?

2. Salvando a atualização de favoritos no back-end  
Agora, você precisa garantir que a ação de favoritar um filme seja registrada no back-end. Logo, é necessário criar uma função assíncrona que utiliza a biblioteca Axios para enviar uma requisição do tipo Patch ao servidor, atualizando o estado de favorito no filme desejado assim que o botão for clicado.

Dicas:

Lembre-se de usar o id do filme para favoritar apenas o filme que for clicado.
Use try e catch para caso haja algum erro, ele ser informado para a pessoa usuária.
Vamos lá?

3. Alterando o ícone do botão favorito  
Você precisa produzir a lógica que altera o ícone do botão conforme o status de favorito do filme. O ícone deve ser preenchido quando o filme for favoritado e deve mostrar apenas o contorno quando não for favoritado.

Dica:

Uma opção seria adicionar um evento de click ao botaoFavorito no arquivo "ui.js".
Vamos lá?

Opinião do instrutor

1. Adicionando botão de favoritar na interface

- Abra o arquivo "ui.js";
- Crie o botão de favoritar com o código document.createElement("button"):

```JavaScript
const botaoFavorito = document.createElement("button")
```

Adicione a classe botao-favorito ao botão usando classList.add:

```JavaScript
botaoFavorito.classList.add("botao-favorito")
```

Crie o ícone de coração usando document.createElement("img"):

```JavaScript
const iconeFavorito = document.createElement("img")
```

Defina o caminho da imagem e o texto alternativo.

```JavaScript
iconeFavorito.src = "../assets/imagens/icone-favorito_outline.png"
iconeFavorito.alt = "Ícone de favorito"
```

Anexe o ícone ao botão com appendChild:

```JavaScript
botaoFavorito.appendChild(iconeFavorito)
```

Anexe o botão ao elemento icones. Lembre-se que isso precisa ser feito após o elemento ter sido criado.

```JavaScript
icones.appendChild(botaoFavorito)
```

2. Salvando a atualização de favoritos no back-end

- Abra o arquivo "api.js";
- Adicione uma vírgula após a função anterior que busca um filme por termo;
- Crie uma função assíncrona que vai atualizar os itens favoritos (dê o nome de sua preferência para a função). Ela deve aceitar dois parâmetros ide favorito;
- Abra um bloco try e use axios.patch para enviar a requisição ao back-end, atualizando a propriedade favorito;
- Retorne os dados da resposta em caso de sucesso;
- Após fechar o bloco try abra um bloco catch para capturar os possíveis erros;
- Retorne os dados da resposta em caso de sucesso, capture erros e mostre uma mensagem de alerta em caso de falha.

```JavaScript
  async atualizarFavorito(id, favorito) {
    try {
        const response = await axios.patch(`${url}/filmes/${id}`, {favorito})
        return response.data
    } catch (error) {
        alert("Erro ao atualizar o estado de favorito", error)
        throw error
    }
  }
```

3. Alterando o ícone do botao favorito

- Abra o arquivo "ui.js";
- Adicione um manipulador de eventos onclick ao botão de favoritar.;
- No evento de onclick, chame a função que atualiza os itens de favorito, passando o id do filme e o estado oposto de favorito;
- Atualize a interface chamando ui.renderizarFilmes() após a atualização;
- Ajuste o caminho da imagem do ícone com base no estado de favorito.

O código poderá ficar parecido com isto:

```JavaScript
    botaoFavorito.onclick = async () => {
      try {
        await api.atualizarFavorito(filme.id, !filme.favorito)
        ui.renderizarFilmes()
      } catch (error) {
        alert("Erro ao atualizar favorito")
      }
    }

    iconeFavorito.src = filme.favorito ? "../assets/imagens/icone-favorito.png" : "../assets/imagens/icone-favorito_outline.png"
```

Você concluiu mais uma lista de exercícios! Muito bem!

Procure-nos no fórum ou Discord se precisar de ajuda!

### Aula 2 - O que aprendemos?

Nesta aula, você aprendeu como:

- Adicionar a funcionalidade de "favoritar" pensamentos, incluindo a atualização do back-end para armazenar o estado de favorito;
- Criar e estilizar um botão de favoritar na interface;
- Implementar uma função usando o método PATCH para atualizar o estado de favorito no backend;
- Adicionar comportamento ao botão de favoritar para alternar o estado de favorito e atualizar a interface;
- Ajustar o ícone do botão para refletir visualmente o estado de favorito (preenchido ou vazio).

Espero você na próxima aula!

## Aula 3 - Trabalhando com datas em JavaScript

### Aula 3 - Criando e validando inputs de data - Vídeo 1

Transcrição  
Nosso projeto já possui as funcionalidades de busca e de favoritar. Agora, vamos começar a entender como manipular algo muito importante em várias aplicações: as datas.

Criando e validando inputs de data  
Imagine uma rede social com uma linha do tempo sem o registro de datas, ou mesmo uma aplicação de agendamento de consultas sem essa informação. Precisamos entender como manipular datas, isto é, como inseri-las, buscá-las, alterá-las e formatá-las em JavaScript na nossa aplicação.

Começaremos a fazer isso nesta aula, pois o nosso projeto ainda não tem a opção de registrar uma data junto com o pensamento. Faremos todo o passo a passo para enviar a data para a API e conseguir manipular, formatar e exibir na aplicação efetivamente.

Criando o campo pensamento-data  
Primeiramente, vamos adicionar um campo onde a pessoa conseguirá selecionar uma data para o pensamento. Para isso, vamos acessar o arquivo index.html e, abaixo da label para pensamento-autoria, criaremos uma nova label para (for) pensamento-data, que nomearemos como "Data".

Feito isso, criaremos logo abaixo um input do tipo (type) date. Não precisaremos do atributo name, mas o id será o que passamos anteriormente para a label, ou seja, pensamento-data.

Ao final, passamos o required para adicionar uma validação e esse campo ser obrigatório.

index.html:

```html
<!-- código omitido -->

<input 
  type="text" 
  id="pensamento-autoria" 
  placeholder="Insira a autoria ou fonte" 
  required />
  <label for="pensamento-data">Data</label>
  <input 
    type="date" 
    id="pensamento-data"
    required>

<!-- código omitido -->
```

Após salvar, podemos retornar à aplicação e ir ao início do formulário, onde teremos o novo campo de data ("Data"), no qual podemos selecionar uma data clicando no ícone de calendário à direita.

Declarando a constante data
Agora, vamos voltar para o arquivo main.js no Visual Studio Code, onde começaremos a manipular a data. Na função manipularSumissaoFormulario(), buscaremos o valor da data para enviar à API.

Sendo assim, após a declaração de const autoria, vamos criar uma nova constante chamada data, onde iremos usar p método document.getElementById(), passando o ID pensamento-data entre parênteses e aspas duplas, seguido de .value ao final do código.

main.js:

```JavaScript
// código omitido

async function manipularSubmissaoFormulario(event) {
  event.preventDefault()
  const id = document.getElementById("pensamento-id").value
  const conteudo = document.getElementById("pensamento-conteudo").value
  const autoria = document.getElementById("pensamento-autoria").value
  const data = document.getElementById("pensamento-data").value

// código omitido
```

Utilizando a constante data  
Uma vez com acesso a esse valor de data, no bloco try logo abaixo, onde temos as funções editarPensamento() e salvarPensamento(), passamos primeiro id, conteudo e autoria na de edição, depois conteudo e autoria na de salvar. Agora, passaremos também data em ambas.

```JavaScript
// código omitido
try {
  if (id) {
    await api.editarPensamento({ id, conteudo, autoria, data })
  } else {
    await api.salvarPensamento({ conteudo, autoria, data })
  }
  ui.renderizarPensamentos()
} catch {
  alert("Erro ao salvar pensamento")
}
// código omitido
```

Criando a função validarData()  
Agora, temos um requisito na nossa aplicação: ao clicar no calendário do campo "Data", podemos selecionar qualquer data, seja uma data passada ou até mesmo futura.

No entanto, para a nossa aplicação, foi solicitado não permitir a inclusão de datas futuras. Criamos esse requisito para entender como validar as datas, mas pensando em uma aplicação de agendamento de consultas. O requisito poderia ser não permitir o agendamento de consultas com datas passadas, o que faria mais sentido para esse contexto.

Sendo assim, antes de enviar a data, precisaremos fazer uma validação se a data é futura ou não. Para isso, vamos criar uma função (function) chamada validarData() ao final do arquivo main.js. Entre parênteses, passaremos data, que já conseguimos obter com o valor criado.

```JavaScript
// código omitido
function validarData(data) {

}
```

Para validar essa data, precisamos saber:

Qual é a data atual;

E qual data a pessoa escolheu.

Para saber qual é a data atual (dataAtual), basta utilizar uma classe do JavaScript responsável por lidar e manipular com datas: a Date (new Date()). Utilizando esse construtor de datas, podemos manipular datas. Ao criar uma data sem nenhum parâmetro em Date(), ele retorna a data atual.

Logo abaixo, vamos declarar outra constante chamada dataInserida. Como vamos comparar a data selecionada no calendário, que irá retornar uma string, com o formato Date, também precisamos criar um new Date(), mas dessa vez, passaremos como parâmetro a data que a pessoa inseriu.

Agora, precisamos fazer uma verificação: queremos saber, com o retorno (return), se a dataInserida é menor ou igual (<=) à dataAtual.

```JavaScript
// código omitido
function validarData(data) {
  const dataAtual = new Date()
  const dataInserida = new Date(data)
  return dataInserida <= dataAtual
}
```

Criando um bloco condicional if  
Para validar a data, antes de fazer as requisições no arquivo main.js — isto é, antes do bloco try —, vamos adicionar um bloco condicional if. Entre parênteses, usaremos o operador de negação (!) seguido de validarData (ou seja, se a data não for validada), passando como parâmetro a data.

No escopo do bloco if, iremos enviar um alerta para a pessoa usuária. Com alert(), passaremos uma mensagem dizendo que "Não é permitido o cadastro de datas futuras. Selecione outra data.".

```JavaScript
// código omitido
if(!validarData(data)) {
    alert("Não é permitido o cadastro de datas futuras. Selecione outra data")
    return
}
// código omitido
```

Testando o código na aplicação, podemos digitar caracteres aleatórios em "Pensamento" e "Autoria ou Fonte", e selecionar uma data futura em "Data". Ao clicar em "Salvar", aparece o alerta na parte superior da página dizendo que não é permitido o cadastro de datas futuras.

Conclusão  
Assim, finalizamos o primeiro passo de adicionar um campo onde a pessoa usuária consegue escolher a data, bem como de realizar uma primeira validação. Nos encontramos no próximo vídeo!

### Aula 3 - Entendendo o objeto Date - Vídeo 2

Transcrição  
No vídeo anterior, começamos a entender como manipular datas no JavaScript. Para isso, no arquivo main.js, criamos uma nova data utilizando um construtor com new Date().

Às vezes, passamos parâmetros, e outras vezes não (por exemplo, quando obtivemos a data atual). Porém, como será que a data é retornada? Neste vídeo, vamos entender um pouco mais sobre isso.

Entendendo o objeto Date

Testando códigos no console  
Com a aplicação no navegador, vamos abrir o console com o atalho "Ctrl + Shift + J", onde criaremos uma constante chamada dataAtual, da mesma forma que fizemos anteriormente. Passaremos para ela o new Date() sem parâmetros. Abaixo, faremos um console.log() em dataAtual.

```JavaScript
const dataAtual = new Date()
console.log(dataAtual)
```

Ao executar o código, a data será retornada de forma bem completa:

Mon Aug 12 2024 15:36:33 GMT-0300 (Horário Padrão de Brasília)

Primeiro, temos a abreviação do nome do dia da semana em inglês (abreviação de Monday, segunda-feira em português). Depois, temos a abreviação do nome do mês (abreviação de August, agosto em português). Em seguida, temos o dia 12 e o ano 2024.

Além disso, temos informações sobre a hora, em horas, minutos e segundos. Por fim, temos a informação do fuso horário (GMT-0300), que seria 3 horas a menos em relação ao horário de Greenwich. Trata-se de uma informação bastante completa e local do navegador.

Não imaginamos apresentar isso na interface para a pessoa usuária, correto? Nesse caso, queremos conseguir manipular a data para apresentá-la de forma mais amigável.

Agora, vamos limpar o console clicando no segundo ícone da barra de menu superior, e criar uma constante chamada data, passando para ela um new Date(), mas dessa vez com o parâmetro de data. Nesse caso, usaremos a data atual: '12-08-2024'.

Por fim, daremos um console.log() em data.

```JavaScript
const data = new Date('12-08-2024')
console.log(data)
```

Como retorno, ele traz o seguinte resultado:

Sun Dec 08 2024 00:00:00 GMT-0300 (Horário Padrão de Brasília)

Novamente, recebemos o nome do dia da semana abreviado em inglês (Sunday, domingo em português). Só que hoje é segunda; depois a abreviação do nome do mês (December, dezembro em português); o dia 08; o ano 2024; e as informações sobre hora e fuso horário.

No entanto, queríamos que o retorno fosse 12 de agosto de 2024, enquanto recebemos 8 de dezembro de 2024. Assim, começamos a perceber que existe um formato específico que precisamos passar para o construtor de datas, de modo que ele consiga interpretar e retornar o que queremos.

Definindo um formato específico  
O formato específico que queremos é: ano — mês — dia. Se quisermos a data dessa forma, precisamos declarar a const data, que receberá o new Date(), e aplicar algumas formas específicas de passar os parâmetros. Podemos passar entre parênteses, por exemplo, 2024, 8, 12, ou seja, o ano, depois o mês, e depois o dia.

Ao final, usaremos console.log() de data para conferir o resultado.

```JavaScript
const data = new Date(2024, 8, 12)
console.log(data)
```

Agora, temos um retorno diferente dos anteriores:

Thu Sep 12 2024 00:00:00 GMT-0300 (Horário Padrão de Brasília)

Ele retornou o dia 12, em 2024, mas com a abreviação Sep de September (setembro em português). Portanto, mesmo com o número 8 como parâmetro, ele identifica setembro em vez de agosto.

No JavaScript, os meses são representados de 0 a 11. Funciona como no array, em que o índice do primeiro elemento é 0, não 1. Sendo assim, ao lidar com meses, precisamos fazer uma conversão: se quisermos o mês de agosto, precisamos passar 7 para que o construtor retorne o mês correto.

Conclusão  
Essa é apenas uma das várias peculiaridades quando lidamos com datas. No início, pode ser um pouco mais desafiador, mas temos a documentação e diversos métodos que nos auxiliam na manipulação das datas e no envio para a API conforme desejado, bem como a exibir na interface de forma amigável e compreensível para todas as pessoas.

Entenderemos como fazer isso no próximo vídeo!

### Aula 3 - Para saber mais: formatando o objeto Date

O objeto Date em JavaScript é fundamental para manipular datas e horários. Criado para lidar com uma ampla gama de operações relacionadas a datas, o objeto Date cria instâncias de datas com precisão, bem como modifica e formata essas datas de diversas maneiras.

Ao instanciar um objeto Date, você pode usar diferentes construtores: sem parâmetros para obter a data e hora atual, ou passando parâmetros específicos, como ano, mês e dia. Por exemplo: new Date(2024, 7, 19) cria um objeto Date para 19 de agosto de 2024. É importante notar que os meses são indexados a partir de 0, então agosto é o mês 7. Portanto, janeiro é o mês 0 e dezembro é o mês 11.

O Date oferece uma variedade de métodos para obter e ajustar partes da data. Métodos como getFullYear(), getMonth(), e getDate() são usados para extrair o ano, mês e dia, respectivamente. Para ajustar a data, você pode usar setDate(), setMonth(), entre outros. Isso permite que você ajuste datas e horas com precisão.

Também, o objeto Date facilita operações matemáticas com datas. Métodos como getTime() retornam a data em milissegundos, permitindo cálculos diretos entre datas. Por exemplo, você pode calcular a diferença em dias entre duas datas, subtraindo seus valores em milissegundos e convertendo o resultado.

Para saber mais como formatar datas, horas e moedas em JavaScript, confira o [artigo Formatar datas](https://www.alura.com.br/artigos/formatar-datas-horas-moedas-javascript), horas e moedas em javaScript, que fornece diferentes técnicas e abordagens para lidar com a formatação de dados no seu código.

### Aula 3 - Salvando datas no formato UTC - Vídeo 3

Transcrição  
Começamos a estudar datas no JavaScript e percebemos que existem algumas formas diferentes de representar datas e horas. Já criamos o campo para inserir a data, mas assim como o pensamento e a autoria, ela também é uma propriedade do pensamento. Sendo assim, precisaremos ajustar o back-end para que ele esteja apto a receber a informação enviada pelo front-end.

Salvando datas no formato UTC  
Como lidamos tanto com front-end quanto com back-end, através do JSON Server com a nossa API fictícia, temos a responsabilidade de ajustar a API para receber a informação necessária.

Começaremos o processo ajustando o arquivo db.json. Pode surgir a seguinte dúvida:

Qual formato de data a API poderá receber?

Esse é um acordo feito entre o front-end e o back-end. Nesse caso, o time de back-end informa para o time de front-end em qual formato ele quer receber a data.

Podemos receber, por exemplo, somente a data; ou a data e as horas, caso seja necessário; informações de fuso horário; e até mesmo o formato da data, como: com hífen, sem hífen, com barra, e assim em diante. Tudo isso precisa ser ajustado.

Seria muito útil se houvesse um formato universal para lidar com as datas. Neste vídeo, aprenderemos que esse formato existe!

Acessando a documentação MDN Web Docs

Na documentação do MDN Web Docs, vamos até a página Date.UTC().

O método UTC() é justamente o formato global que podemos utilizar para manipular datas. Trata-se de um padrão global muito utilizado, pois ele não muda de acordo com os diferentes fusos horários do mundo. Da mesma forma, ele não é afetado pelo horário de verão.

Precisamos pensar em tudo isso ao trabalhar com datas. Esse formato é muito utilizado por conta dos fatores já citados, e o horário universal é o que vamos utilizar como formato para a nossa API.

Na documentação, a sintaxe do método UTC() é a seguinte:

```JavaScript
Date.UTC(ano, mês[, dia[, hora[, minuto[, segundo[, milisegundo]]]]])
```

Primeiro, recebemos o ano, depois o mês, depois dia, hora, minuto, segundo, e por último, milissegundos. Portanto, são diversas as informações que serão enviadas.

Utilizando o ChatGPT 
Com o VS Code aberto, vamos acessar o arquivo db.json para inserir a propriedade data em cada pensamento, bem como o horário específico em cada data adicionada.

Como é um formato completo, bastante específico, e temos diversos pensamentos para alterar na lista, seria uma tarefa muito repetitiva para realizar manualmente. Dito isso, por que não utilizamos o ChatGPT para nos auxiliar com o processo?

Podemos usar o atalho "Ctrl + A" para selecionar todo o código do arquivo db.sjon, e depois o atalho "Ctrl + C" para copiar. Feito isso, vamos acessar uma aba do ChatGPT, onde enviaremos um prompt explicando o nosso problema e o que queremos.

GPT, tenho um arquivo de dados de pensamentos e quero adicionar a propriedade data em todos eles. Preciso que o formato da data seja em UTC. Adicione datas diferentes para cada pensamento.
"db.json":

```JavaScript
(Inserir código do arquivo `db.json`, localizado na pasta "backend" do projeto.)
```

Como retorno, recebemos a seguinte resposta e o código solicitado:

Para adicionar a propriedade data em formato UTC a cada pensamento no seu arquivo db.json, você pode seguir o modelo abaixo. Aqui estão as datas adicionadas e formatadas em UTC para cada pensamento:

```JavaScript
{
  "pensamentos": [
    {
      "id": "2a56",
      "favorito": true,
      "conteudo": "Vc faz TI? Conserta meu celular!",
      "autoria": "Grupo da família",
      "data": "2024-08-01T00:00:00Z"
    },

    // código omitido

    {
      "id": "3e67",
      "conteudo": "fdsfafdgf",
      "autoria": "gsdfgsdfg",
      "data": "2024-08-15T00:00:00Z"
    }
  ]
}
```

Perceba que ele adicionou a propriedade data no formato UTC, então temos o ano, depois o mês seguido do dia, e logo na sequência, o T que separa a data do horário. Em seguida, temos hora, minutos e segundos, sem os milissegundos. Ao final, um Z que representa que o formato UTC.

Nesse caso, vamos pedir para retornar também os milissegundos, buscando uma informação mais completa. Para isso, basta enviar um novo prompt no mesmo chat:

> Me retorne também os milissegundos

Vamos copiar o código final retornado, clicando em "" no canto superior direito, e voltar para o VS Code. Feito isso, podemos substituir o conteúdo de db.json pelo que copiamos.

db.json:

```JavaScript
{
  "pensamentos": [
    {
      "id": "2a56",
      "favorito": true,
      "conteudo": "Vc faz TI? Conserta meu celular!",
      "autoria": "Grupo da família",
      "data": "2024-08-01T00:00:00.000Z"
    },

    // código omitido

    {
      "id": "3e67",
      "conteudo": "fdsfafdgf",
      "autoria": "gsdfgsdfg",
      "data": "2024-08-15T00:00:00.000Z"
    }
  ]
}
```

Testando o código  
Agora, vamos acessar o terminal. Essa manipulação pode gerar algum erro na API. Nesse caso, basta parar com o atalho "Ctrl + C" e executar o comando npm start novamente.

```JavaScript
npm start
```

Com a API fictícia preparada para receber a data específica, podemos testar o código salvando um novo pensamento, para conferir se o resultado terá o formato esperado.

Na aplicação, após recarregar a página do navegador, criaremos o seguinte pensamento:

Pensamento: Testando formato de data;  
Autoria ou Fonte: Dev;  
Data: 01/08/2024.

Ao final, basta clicar no botão "Salvar". Não conseguiremos visualizar no card da aplicação ainda, pois não ajustamos a interface, mas podemos verificar a mudança no próprio arquivo db.json.

De volta ao VS Code, ao final do arquivo, temos o pensamento criado na aplicação com a propriedade data, mas com um formato diferente do que queríamos. Ele está em um formato mais simples, uma string com o ano, o mês e o dia separados por hífens, não no formato UTC.

db.json

```JavaScript
// código omitido
    {
      "id": "c724",
      "conteudo": "Testando formato de data",
      "autoria": "Dev",
      "data": "2024-08-01"
    }
  ]
}
```

Nesse caso, precisaremos manipular a data para converter no formato desejado, pois quando selecionamos a data diretamente no calendário, é retornada uma data simples em formato. Sendo assim, é necessária uma conversão antes de enviar para a API.

Conclusão  
Entendemos que a forma como a data é selecionada e enviada não segue o formato que a API está apta a receber: o formato UTC. Dito isso, aprenderemos a fazer essa conversão no próximo vídeo!

### Aula 3 - Manipulação de datas no javaScript

Você está desenvolvendo uma funcionalidade de calendário para um sistema de gestão de eventos.

Durante o desenvolvimento, percebeu que, ao criar uma data no JavaScript, o mês fornecido como parâmetro para o construtor Date não corresponde ao mês esperado. Para fazer um teste, você pretende criar uma data correspondente a 15 de julho de 2024.

Como você pode implementar o código dessa função?

```JavaScript
function criarData() {
    // Sua implementação aqui
}
```

Resposta:

```JavaScript
function criarData() {
    return new Date(2024, 6, 15);
}
```

> Em JavaScript, o mês é representado por um índice de 0 a 11. Portanto, 6 corresponde a julho, que é o mês desejado. O resto da implementação está correto!

### Aula 3 - Faça como eu fiz: manipulando datas

Nesta aula, evoluímos um pouco mais o projeto e permitimos a adição de datas no cadastro dos pensamentos.

Se ainda não fez, é importante que você coloque em prática o conhecimento adquirido em aula para que o seu aprendizado seja eficaz! Siga os passos abaixo:

- Implemente um campo de data no formulário do Memoteca;
- Adicione uma validação para garantir que apenas datas passadas ou atuais sejam permitidas;
- Ajuste o back-end para suportar a nova informação de data.

O resultado final esperado é que o formulário do projeto possua um campo tipo Date que permite a seleção de uma data. Com a validação, não é permitida a seleção de datas futuras.

Vamos lá?

Para implementar o que foi visto na aula, clique abaixo em “ver opinião da instrutora” para seguir o passo a passo.

Opinião do instrutor

Para ver detalhes do código implementado, acesse o repositório no GitHub.

Nesta aula, adicionamos um novo campo de data no formulário de pensamentos, juntamente com a validação para impedir o cadastro de datas futuras. Além disso, alteramos o arquivo "main.js" para incluir a data no envio do formulário e a função de validação da data.

No arquivo “index.html”:

- Adicione um novo campo de data no formulário com a label "Data";
- Defina o tipo do input como "date" e adicione o id "pensamento-data";
- Torne o campo obrigatório para preenchimento.

No arquivo “js/main.js”:

- Crie a função validarData(data) para verificar se a data inserida é anterior ou igual à data atual;
- Dentro da função manipularSubmissaoFormulario(event), antes de salvar ou editar o pensamento, verifique se a data é válida;
- Caso a data seja futura, exiba um alerta informando que não é permitido cadastrar datas futuras e retorne da função;
- Adicione a data no objeto enviado para a API ao salvar ou editar um pensamento.

Para ajustar o back-end e adaptá-lo à nova propriedade, implementamos o campo "data" em formato de data e hora para cada citação no arquivo "backend/db.json". Isso foi feito para melhorar a organização e visualização das informações.

No arquivo “backend/db.json”:

- Adicione a linha "data": "2024-08-01T00:00:00.000Z"" após a linha com a autoria "Grupo da família";
- Repita o passo anterior para as demais citações, adicionando o campo data com a data e hora correspondentes;
- Salve as alterações feitas no arquivo.

### Aula 3 - Lista de exercícios

Vamos implementar mais funcionalidades no projeto da lista de filmes?

Use os exercícios abaixo para praticar tudo que você aprendeu nesta aula.

1. Criando campo para adicionar data de lançamento de filmes  
Queremos aprimorar a lista de filmes, adicionando a data de lançamento dos filmes que fazem parte da lista. Para fazer isso, inicialmente precisamos ter um campo de preenchimento para que os novos filmes que forem adicionados através do formulário possam receber a data de lançamento.

Dica:

Lembra de quando você criou o campo de busca para filtrar os filmes da lista? Vamos usar a mesma lógica nesta situação.
Vamos lá?

2. Enviando a data para a API  
Agora vamos começar a manipular o campo de data para conseguir inserir esses dados na API que guarda a lista de filmes (o arquivo "db.json" que está na pasta "back-end"). Para fazer isso, manipule o DOM e realize algumas alterações na submissão do formulário.

O resultado esperado é que assim, que a pessoa usuária adicionar um filme, a data seja adicionada no arquivo "db.json" como parâmetro.

Vamos lá?

3. Validando as datas  
Não seria muito legal colocar um filme que ainda nem teve sua data de estreia confirmada, certo?

Por isso, crie uma função que valida a data dos filmes, permitindo que as pessoas coloquem apenas na lista filmes que já estrearam. Isso quer dizer que apenas filmes que estrearam até a data atual podem ser adicionados. Caso haja algum problema, use um alert para informar a pessoa usuária.

Dicas:

Você pode usar algumas propriedades de data para te ajudar;

Lembre-se de usar condicionais como o if, por exemplo.

Vamos lá?

4. Usando Inteligência Artificial para adicionar datas  
Estamos trabalhando com datas, mas, no nosso arquivo "db.json", alguns itens não possuem informações sobre a data de lançamento. Fazer isso manualmente seria muito desgastante, então podemos usar a inteligência artificial para nos ajudar.

Insira as datas nos itens que estão sem data com ajuda de uma IA como o GPT.

Dica:

Ao conversar com a inteligência artificial, use mensagens diretas e contextos claros, além de mostrar os dados que você já possui no back-end.
Vamos lá?

Opinião do instrutor

1. Criando campo para adicionar data de lançamento de filmes

Abra o arquivo "index.html";

Crie um campo de preenchimento para a data dentro da tag `<form>`, conforme o código HTML abaixo:

`<input type="date" id="data-lancamento" required/>`

Vamos entender melhor cada parte do código?

`<input>`: a tag `<input>` é usada para criar elementos de entrada interativos em formulários HTML. É um dos elementos mais comuns em formulários, permitindo diferentes tipos de entradas como texto, senhas, números, datas, entre outros.

type="date": O atributo type especifica o tipo de entrada que o campo input aceitará. Neste caso, type="date" indica que o campo aceitará uma data. Isso faz com que os navegadores exibam um controle de seleção de data (como um calendário) para o usuário escolher a data desejada. O formato de exibição da data pode variar de acordo com as configurações do navegador e do sistema operacional.

id="data-lancamento": o atributo id atribui um identificador único ao elemento de entrada, que pode ser usado para referenciar este campo no CSS, JavaScript, ou em outras partes do HTML. Neste caso, o ID é data-lancamento, sugerindo que este campo está relacionado ao lançamento de algo (como a data de lançamento de um filme, produto, etc.).

required: o atributo required indica que o preenchimento deste campo é obrigatório antes que o formulário seja submetido. Se o usuário tentar enviar o formulário sem preencher este campo, o navegador exibirá uma mensagem de erro, solicitando que o campo seja preenchido.

Portanto, o código cria um campo de entrada de data, em que o usuário pode selecionar uma data por meio de um seletor de calendário. O campo tem um ID único de data-lancamento, o que facilita a identificação e manipulação do campo por meio de CSS e JavaScript, e o atributo required assegura que o usuário preencha a data antes de enviar o formulário.

2. Enviando a data para a API

Abra o arquivo "main.js";

Na função manipularSubmissaoFormulario, após a linha que pega o valor do gênero do filme, adicione o seguinte código:

```JavaScript
const data = document.getElementById("data-lancamento").value
```

Em seguida, acrescentamos o valor capturado no formulário dentro do bloco try ainda na função manipularSubmissaoFormulariocomo parâmetros das funções editarFilme e salvarFilme.

```JavaScript
  try {
    if (id) {
      await api.editarFilme({ id, nome, genero, data })
    } else {
      await api.salvarFilme({ nome, genero, data })
    }
    ui.renderizarFilmes()
  }
```

Com este código, conseguimos adicionar uma data de um filme na API da aplicação!

3. Validando as datas

Abra o arquivo main.js;

Na última linha, crie uma função de validação (dê o nome que preferir para a função) e adicione o seguinte código:

```JavaScript
function validarData(data) {
  const dataAtual = new Date()
  const dataInserida = new Date(data)
  return dataInserida <= dataAtual
}
```

Na função manipulaSubmissaoFormulario, após capturar o valor de data no formulário, use um if para fazer a verificação da seguinte maneira:

```JavaScript
  if (!validarData(data)) {
    alert("Parece que esse filme ainda não foi lançado!")
    return
  }
```

Com este código, validamos as datas de lançamento de um filme. Apenas filmes já lançados poderão ser cadastrados (neste caso, essa limitação tem fins didáticos para que você pratique a validação de datas no JavaScript).

4. Usando Inteligência Artificial para adicionar datas

Abra o ChatGPT.

Você pode usar como base a seguinte mensagem para obter mais filmes para o seu catálogo:
Tenho uma lista de filmes em formato json. A data deve ser o lançamento do respectivo filme no Brasil.

db.json:

```JavaScript
{
  "filmes": [
    {
      "id": "1001",
      "nome": "O Iluminado",
      "genero": "Terror"
    },
    {
      "id": "1002",
      "nome": "Forrest Gump: O Contador de Histórias",
      "genero": "Drama"
    },
    {
      "id": "1003",
      "nome": "Matrix",
      "genero": "Ficção Científica"
    },
    {
      "id": "1004",
      "nome": "Batman: O Cavaleiro das Trevas",
      "genero": "Ação"
    },
    {
      "id": "1005",
      "nome": "Alien: Romulus",
      "genero": "Ficção Científica"
    },
    {
      "id": "1006",
      "nome": "A Origem",
      "genero": "Ficção Científica"
    },
    {
      "id": "1007",
      "nome": "O Poderoso Chefão",
      "genero": "Drama"
    },
    {
      "id": "1008",
      "nome": "Senhor dos Anéis: A Sociedade do Anel",
      "genero": "Fantasia"
    },
    {
      "id": "1009",
      "nome": "Clube da Luta",
      "genero": "Drama"
    },
    {
      "id": "1010",
      "nome": "Gladiador",
      "genero": "Ação"
    },
    {
      "id": "1011",
      "nome": "Jurassic Park: O Parque dos Dinossauros",
      "genero": "Aventura"
    },
    {
      "id": "1012",
      "nome": "O Resgate do Soldado Ryan",
      "genero": "Guerra"
    },
    {
      "id": "1013",
      "nome": "Coringa",
      "genero": "Drama"
    },
    {
      "id": "1014",
      "nome": "Vingadores: Ultimato",
      "genero": "Ação"
    },
    {
      "id": "1015",
      "nome": "Interestelar",
      "genero": "Ficção Científica"
    },
    {
      "id": "1016",
      "nome": "Pulp Fiction: Tempo de Violência",
      "genero": "Crime"
    },
    {
      "id": "1017",
      "nome": "De Volta para o Futuro",
      "genero": "Ficção Científica"
    },
    {
      "id": "1018",
      "nome": "O Senhor dos Anéis: O Retorno do Rei",
      "genero": "Fantasia"
    },
    {
      "id": "1019",
      "nome": "O Lobo de Wall Street",
      "genero": "Biografia"
    },
    {
      "id": "1020",
      "nome": "Mad Max: Estrada da Fúria",
      "genero": "Ação"
    }
  ]
}
```

O código json colocado aqui é um exemplo, você pode usar o exemplo implementar o seu arquivo "db.json".

Você concluiu mais uma lista de exercícios! Muito bem!

Procure-nos no fórum ou Discord se precisar de ajuda!

### Aula 3 - O que aprendemos?

Nesta aula, você aprendeu a:

- Adicionar e configurar um campo de data no formulário para registrar a data de criação de pensamentos;
- Implementar validações para impedir o cadastro de datas futuras, garantindo a integridade dos dados;
- Criar e utilizar a função validarData() para incluir validações adicionais antes de salvar ou editar um pensamento, prevenindo a submissão de dados inválidos;
- Inserir a data correta no objeto enviado à API ao salvar ou editar um pensamento, garantindo que as informações estejam completas e consistentes no back-end;
- Atualizar o arquivo “backend/db.json”, incluindo o campo data para cada pensamento existente, a fim de manter os registros organizados e coerentes com o novo formato.

Espero você na próxima aula!

## Aula 4 - Manipulando e exibindo Datas

### Aula 4 - Convertendo datas - Vídeo 1

Transcrição
No vídeo anterior, conseguimos ajustar a API fictícia para o formato de data que precisamos enviar. No entanto, percebemos que, ao salvar um novo pensamento, esse formato ainda não está da forma como queríamos.

Precisamos converter o formato selecionado, obtido quando a pessoa seleciona a data no calendário, para o formato que a API deseja receber.

Convertendo a data  
Voltando ao VS Code, no arquivo api.js, onde está concentrada a lógica de manipulação e de requisições para a API, criaremos uma função acima da const api. Ela será atribuída a uma constante, chamada converterStringParaData.

Nessa função, receberemos como parâmetro a dataString, e criar uma arrow function para transformar essa data, de 2024-08-01, para uma data mais complexa, onde temos o formato UTC.

Entre os parênteses da arrow function, criaremos uma constante, que será um array, com o ano, mês e dia. Para esse array, atribuiremos o valor da dataString, utilizando o método split() e passando entre aspas duplas um hífen.

api.js:

```JavaScript
const converterStringParaData = (dataString) => {
    const [ano, mes, dia] = dataString.split("-")
}
const api = {
    // Código omitido
}
```

Essa dataString está no formato 2024-08-12 e esse split() é um método de manipulação de string que fará uma quebra nessa string. Dentro dos parênteses, informamos o caractere - através a quebra será feita.

Ou seja, estamos pedindo que um array seja retornado com esses valores quebrados a partir do hífen. Nesse split(), será retornado um array com os valores 2024, 08 e 12.

Atribuindo a constante [ano, mes, dia] a esse retorno, dizemos que essa constante receberá os elementos 2024, 08 e 12. Esse processo se chama destructuring (desestruturação) no JavaScript e consiste em associar um array a outro. Como resultado, o ano será 2024, o mês será 08 e o dia será 12.

Fazemos isso porque queremos retornar um formato de data. Consequentemente, precisamos retornar o construtor new Date na linha seguinte da arrow function, passando como parâmetro o Date.

Adicionando um ponto após o Date, veremos uma lista com vários métodos para manipular datas, entre os quais selecionaremos o UTC, que serve para obter esse formato específico de data. Entre os parênteses desse UTC, passaremos os valores de ano, mês e dia.

```JavaScript
const converterStringParaData = (dataString) => {
    const [ano, mes, dia] = dataString.split("-")
    return new Date(Date.UTC(ano, mes, dia))
}
```

Fizemos a desestruturação do array para obter somente os números de ano, mês e dia para criar uma data no formato UTC, passando esses valores que obtivemos. Dessa forma, transformaremos essa data do formato string para Date.

Incluindo a data no pensamento  
Com essa função pronta, podemos fazer algumas alterações no método salvarPensamento(). Dentro do bloco try, criaremos uma constante chamada data e igualá-la à chamada da função que acabamos de criar, converterStringParaData(), passando o valor de pensamento.data entre parênteses.

Com isso, recolheremos a data que a pessoa escolheu, e quando ela salvar o pensamento, chamaremos a função converterStringParaData(), passando esse valor.

Na linha seguinte, estamos fazendo a requisição post(). Entre seus parênteses, ao invés de passar o pensamento completo, apagaremos a variável pensamento, abriremos colchetes, e entre eles, desceremos uma linha para digitar três pontos e a variável pensamento.

Adicionando uma vírgula, pularemos outra linha e digitaremos a data.

```JavaScript
async salvarPensamento(pensamento) {
    try {
        const data = converterStringParaData(pensamento.data)
        const response = await axios.post(`${URL_BASE}/pensamentos`, {
            ...pensamento,
            data
        })
        return await response.data
    }
    catch {
        alert('Erro ao salvar pensamento')
        throw error
    }
},
```

Com os três pontos, enviaremos as propriedades que já existem no pensamento ao invés de enviá-lo por completo. Esse procedimento se chama spread (espalhamento) no JavaScript.

O operador de três pontos é o Spread Operator (operador de espalhamento). Nesse caso, ele adiciona a data às propriedades do pensamento, sobrescrevendo essa data com a que convertemos para o formato Date.

Testando as alterações  
Podemos testar para ver se essa abordagem deu certo. Acessando a aplicação pelo navegador, criaremos um novo pensamento, escrevendo "Novo teste de datas" no campo de pensamento, "Dev" na autoria, escolhendo uma data no campo de data e clicando em "Salvar".

Voltando ao VS Code, verificaremos o arquivo db.json que um novo objeto foi criado.

```JavaScript
{
    "id": "0956",
    "conteudo": "Novo teste de datas",
    "autoria": "Dev",
    "data": "2024-09-12T00:01:00.000Z"
}
```

Podemos constatar que deu certo. O pensamento já está com a data no formato que a API espera receber.

Próximos passos  
Ainda precisamos fazer alguns ajustes e modificações em outros métodos, como, por exemplo, buscarPensamentos().

### Aula 4 - Exibindo datas de forma amigável - Vídeo 2

Transcrição  
No vídeo anterior, criamos uma função para converter a data do formato string para Date, e fizemos alguns ajustes na função salvarPensamento(). Ao testar, percebemos que o pensamento estava sendo salvo, mas a data escolhida foi 12 de agosto, e a data salva foi 12 de setembro.

Isso ocorreu porque, como já mencionamos, o JavaScript trata os meses de 0 a 11, e não de 1 a 12, conforme temos costume de lidar. Portanto, podemos fazer um ajuste na função converteStringParaData().

Ajustando a função converteStringParaData()  
Entre as chaves de converteStringParaData(), podemos adicionar -1 após o mes, localizado entre os parênteses de Date.UTC(). Assim, adicionaremos um número ao mês que a pessoa escolhe.

Com essa adição, tornaremos agosto — que é o mês 08, por exemplo — no mês 07, que será reconhecido pelo JavaScript como agosto.

api.js:

```JavaScript
const converterStringParaData = (dataString) => {
    const [ano, mes, dia] = dataString.split("-")
    return new Date(Date.UTC(ano, mes - 1, dia))
}
```

Podemos fazer o teste dessa mudança agora.

Testando o ajuste
Voltando à aplicação no navegador, adicionaremos caracteres aleatórios no pensamento e na autoria, e para a data, escolheremos 1 de agosto.

Salvaremos esse pensamento, voltaremos ao VS Code, no qual acessaremos o db.json, e verificaremos um novo objeto com a data correta, 1 de agosto.

db.json:

```JavaScript
{
    "id": "c9c6",
    "conteudo": "fewfewf",
    "autoria": "etfewgt",
    "data": "2024-08-01T00:00:00.000Z"
}
```

Precisamos fazer ajustes em outros métodos do arquivo api.json. Já ajustamos o salvarPensamento() para passar o pensamento com o Spread Operator e a data sobrescrita. Nesse momento, ajustaremos o buscarPensamentos().

Ajustando a função buscarPensamentos()  
Em seu interior, dentro do bloco, try, apagaremos o return na linha 12 e criaremos em seu lugar uma constante chamada pensamentos, à qual atribuiremos o retorno da API com await response.data.

Pulando uma linha, informaremos o que deve ser retornado, adicionando um return pensamentos e uma transformação nesse array. Para isso, escreveremos um ponto e adicionaremos o método map() do JavaScript.

Esse método retornará um array transformado, de acordo com a condição que informaremos numa função callback. Entre os parênteses do map(), informaremos o pensamento, criando uma arrow function. Entre as chaves desta, adicionaremos um return e um bloco de chaves para informar o que deve ser retornado.

Entre essas chaves, adicionaremos o Spread Operator novamente para fazer o espalhamento do pensamento, e na linha de baixo, a data como um new Date() do pensamento.data.

api.js:

```JavaScript
const api = {
    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos`)
            const pensamentos = await response.data
            
            return pensamentos.map(pensamento => {
                return {
                    ...pensamento,
                    data: new Date(pensamento.data)
                }
            })
        }
        catch {
            alert('Erro ao buscar pensamentos')
        throw error
    }
},
```

Dessa forma, ajustamos as funções salvarPensamento() e buscarPensamento(). Atualizaremos também a função buscarPensamentoPorId(), porque ela é utilizada na parte de edição.

Ajustando a função buscarPensamentoPorId()  
Fazer o mesmo processo das outras funções. Entre as chaves do try, substituiremos o return pela criação de uma constante, que chamaremos de pensamento, no singular, pois a função retornará só um pensamento.

Pulando uma linha, nosso return passará a ser um bloco de chaves, dentro do qual espalharemos a propriedade de pensamento com o Spread Operator e passaremos a data também no formato Date.

Para isso, utilizaremos o construtor de datas new Date(), passando entre parênteses o pensamento.data.

```JavaScript
async buscarPensamentoPorId(id) {
    try {
        const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
        const pensamento = await response.data
        
        return {
            ...pensamento,
            data: new Date(pensamento.data)
        }    
    }
    catch {
        alert('Erro ao buscar pensamento')
        throw error
    }
},
```

Após esses ajustes, falta mostrar a data escolhida para a pessoa usuária. Para isso, modificaremos o arquivo de interface ui.js.

Exibindo a data  
Precisamos criar uma div que conterá essa data. Entre as chaves de adicionarPensamentoNaLista(), duplicaremos as três linhas de autoria para as linhas seguintes, com "Ctrl + C" e "Ctrl + V".

ui.js:

```JavaScript
adicionarPensamentoNaLista(pensamento) {

    // Código omitido
    
    const pensamentoAutoria = document.createElement("div")
    pensamentoAutoria.textContent = pensamento.autoria
    pensamentoAutoria.classList.add("pensamentoAutoria")
    
    const pensamentoAutoria = document.createElement("div")
    pensamentoAutoria.textContent = pensamento.autoria
    pensamentoAutoria.classList.add("pensamentoAutoria")
    
    // Código omitido
}
```

Na cópia, faremos as modificações. Ao invés de pensamentoAutoria, a constante se chamará pensamentoData. O textContent na segunda linha será pensamento.data em vez de autoria, e a classe adicionada na terceira linha será pensamento-data.

```JavaScript
adicionarPensamentoNaLista(pensamento) {
    // Código omitido
    const pensamentoAutoria = document.createElement("div")
    pensamentoAutoria.textContent = pensamento.autoria
    pensamentoAutoria.classList.add("pensamentoAutoria")
    
    const pensamentoData = document.createElement("div")
    pensamentoData.textContent = pensamento.data
    pensamentoData.classList.add("pensamento-data")
    // Código omitido
}
```

Após criar essa div, podemos coletar o valor do pensamento.data. Acessando a função preencherFormulario(), ativada quando clicamos no ícone de editar, posicionaremos o cursor no final da linha document.getElementById("pensamento-autoria").value = pensamento.autoria e pressionaremos "Alt + Shift + seta para baixo" para copiá-la abaixo de si.

```JavaScript
async preencherFormulario(pensamentoId) {
    const pensamento = await api.buscarPensamentoPorId(pensamentoId)
    document.getElementById("pensamento-id").value = pensamento.id
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo
    document.getElementById("pensamento-autoria").value = pensamento.autoria
    document.getElementById("pensamento-autoria").value = pensamento.autoria
},
```

Na cópia, substituiremos o pensamento-autoria para pensamento-data, e o value pensamento.autoria para pensamento.data.

```JavaScript
async preencherFormulario(pensamentoId) {
    const pensamento = await api.buscarPensamentoPorId(pensamentoId)
    document.getElementById("pensamento-id").value = pensamento.id
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo
    document.getElementById("pensamento-autoria").value = pensamento.autoria
    document.getElementById("pensamento-data").value = pensamento.data
},
```

Em seguida, precisamos fazer o append dessa nova div para aparecer no cartão. No interior da função adicionarPensamentoNaLista(), posicionaremos o cursor no final da linha li.appendChild(pensamentoAutoria) e a duplicaremos assim como feito antes, mudando o pensamentoAutoria para pensamentoData.

```JavaScript
adicionarPensamentoNaLista(pensamento) {
    // Código omitido
    li.appendChild(pensamentoAutoria)
    li.appendChild(pensamentoData)
    // Código omitido
}
```

Testando a exibição da data  
Voltando à aplicação, vamos recarregá-la. Após isso, descendo a página, notaremos que a data já está aparecendo nos cartões, junto à hora, ao dia da semana e ao fuso horário.

Não precisamos de tantas informações na data do cartão. Queremos mostrar apenas a data. Para apresentar essa data de forma mais amigável, precisaremos formatá-la.

Formatando a data  
Voltando ao VS Code, no interior da função adicionarPensamentoNaLista(), criaremos uma constante chamada dataFormatada, entre as linhas const pensamentoData = document.createElement("div") e pensamentoData.textContent = pensamento.data. Ela receberá o valor contido em pensamento.data.

```JavaScript
adicionarPensamentoNaLista(pensamento) {
    // Código omitido
    
    const pensamentoData = document.createElement("div")
    const dataFormatada = pensamento.data
    pensamentoData.textContent = pensamento.data
    pensamentoData.classList.add("pensamento-data")
    
    // Código omitido
}
```

Conforme mencionamos anteriormente, existem vários métodos que manipulam as datas no JavaScript e permitem formatá-las. Um deles é o toLocaleDateString(), que adicionaremos ao pensamento.data.

```JavaScript
adicionarPensamentoNaLista(pensamento) {
    // Código omitido
   
    const pensamentoData = document.createElement("div")
    const dataFormatada = pensamento.data.toLocaleDateString()
    pensamentoData.textContent = pensamento.data
    pensamentoData.classList.add("pensamento-data")
    
    // Código omitido
}
```

Esse método é perfeito para o que estamos querendo, porque retornará apenas a data como um valor de string.

Essa data corresponderá ao local onde o navegador está.

Também podemos passar alguns parâmetros para essa função. Para informar a localidade, digitaremos entre aspas simples um pt-BR, com "BR" em maiúsculas.

Por fim, acessando a linha do textContent, logo abaixo, substituiremos o pensamento.data por dataFormatada.

```JavaScript
adicionarPensamentoNaLista(pensamento) {

    // Código omitido
    
    const pensamentoData = document.createElement("div")
    const dataFormatada = pensamento.data.toLocaleDateString('pt-BR')
    pensamentoData.textContent = dataFormatada
    pensamentoData.classList.add("pensamento-data")
    
    // Código omitido
}
```

Testando a formatação da data  
Voltando à aplicação, vamos recarregá-la. Após isso, constataremos qeu conseguimos apresentar a data de forma mais amigável, exibindo apenas o dia, o mês e o ano em números, separados por barras.

Por exemplo, temos o dia da semana 01/08/2024 no cartão do mestre Yoda.

### Aula 4 - Para saber mais: entendendo o formato UTC e o formato ISO

Ao trabalhar com datas, vimos um formato padrão utilizado internacionalmente: o UTC! Vamos conhecer um pouco mais sobre ele?

1. O que é o formato UTC?  
O formato UTC (Tempo Universal Coordenado) é um padrão de tempo global que assegura a consistência de datas e horários em todo o mundo, independentemente da localização geográfica. Por exemplo: o Brasil utiliza o formato dia-mês-ano (30/1/24); os Estados Unidos emprega o formato mês-dia-ano (1/30/2024). Se cada país utilizasse apenas seu próprio formato, seria difícil trabalhar com datas em aplicações que rodam em vários países. Assim, o UTC estabelece um padrão mundial que facilita a nossa vida!

Em JavaScript, o UTC é utilizado para armazenar e manipular datas de maneira padronizada, evitando problemas relacionados a fusos horários locais e garantindo que suas aplicações funcionem de forma uniforme, não importa onde estejam sendo executadas.

2. Como o UTC funciona em JavaScript?  
Quando você cria um objeto Date em JavaScript, ele é internamente armazenado como o número de milissegundos desde 1º de janeiro de 1970 às 00:00:00 UTC. Este ponto de referência, conhecido como **Epoch Unix, é utilizado para garantir que a data e a hora sejam representadas de forma consistente.

Para trabalhar com o formato UTC, o javaScript oferece métodos como:

- toUTCString(): converte a data em uma string no formato UTC, que é fácil de ler e entender;
- toISOString(): retorna a data no formato ISO 8601, que é uma representação padrão e amplamente utilizada para troca de dados.

Ambos os métodos garantem a precisão e a consistência dos dados de data quando armazenados em bancos de dados ou trocados entre sistemas.

Você viu que falamos de outro formato, o ISO 8601. Assim como o UTC, o ISO 8601 tamb é uma maneira padronizada de representar datas e horas, comumente utilizado em computação para garantir a clareza e evitar ambiguidades. Ométodo toISOString() é usado para converter uma data para o formato ISO 8601, que segue o padrão YYYY-MM-DDTHH:mm:ss.sssZ.

Por exemplo:

```javascript
const data = new Date()
console.log(data.toISOString()) // Exemplo de saída: "2024-08-19T10:30:00.000Z"
```

Já quando você precisa exibir datas na interface, você pode converter as datas de UTC para o horário local utilizando métodos como:

- toLocaleString(): retorna uma string representando a data de acordo com o fuso horário local do navegador.
- toLocaleDateString(): retorna uma string da data ajustada para o fuso horário local, com opções de formatação específicas para diferentes localidades.

Esses métodos ajudam a garantir que as datas sejam apresentadas de maneira compreensível e adequada para a localização da pessoa usuária.

Esse é um assunto bem interessante e para aprender ainda mais sobre como utilizar o objeto Date e o formato de datas em JavaScript, e como o UTC e o formato ISO se encaixam na manipulação de datas, você pode conferir o [artigo Objeto Date e formato de datas em javaScript](https://www.alura.com.br/artigos/objeto-format-date-e-formato-datas-em-javascript), que explora técnicas e práticas recomendadas para lidar com datas em suas aplicações.

### Aula 4 - Agendamento de consultas com Date

Você trabalha na Clínica Médica Voll e quer desenvolver um sistema de agendamento de consultas. A clínica deseja que todas as datas e horários sejam armazenados no formato UTC para evitar problemas de fuso horário.

Durante o desenvolvimento, você precisa criar uma função que receba a data e hora da consulta em formato local e a converta para UTC. Considere que a data e a hora local são fornecidos como strings no formato "YYYY-MM-DDTHH:mm:ss” e você precisa convertê-lo para o UTC.

Como você pode escrever o código da função de conversão?

```JavaScript
function convertToUTC(localDateTime) {
    // Sua implementação aqui
}

//Resposta

function convertToUTC(localDateTime) {
    let date = new Date(localDateTime);
    return date.toISOString();
}
```

toISOString() retorna a data no formato ISO 8601, que é o formato UTC desejado pela clínica.

### Aula 4 - Aprimorando a exibição de datas - Vídeo 3

Transcrição  
Podemos utilizar alguns meios para estilizar a data, apresentando o dia do mês por extenso e adicionando o dia da semana, por exemplo. Mas como fazer isso?

Estilizando a data  
Voltando ao VS Code, passaremos outro parâmetro para o método toLocaleDateString(). Podemos digitar uma vírgula depois de pt-BR e passar algumas opções, digitando options, uma variável que criaremos.

Subindo o código, entre as constantes pensamentoData e dataFormatada, criaremos uma linha na qual adicionaremos a variável nova options. Enviaremos a ela um conteúdo copiado de uma referência externa, que será explicado na sequência.

ui.js:

```JavaScript
adicionarPensamentoNaLista(pensamento) {
    // Código omitido
    const pensamentoData = document.createElement("div")
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    }
    const dataFormatada = pensamento.data.toLocaleDateString('pt-BR', options)
    pensamentoData.textContent = dataFormatada
    pensamentoData.classList.add("pensamento-data")
    
    // Código omitido
}
```

No trecho colado, passamos algumas propriedades e valores para elas. Temos o weekday (dia da semana) que recebe o valor de long — ou seja, teremos o nome do dia da semana por extenso.

Também informamos que o year (ano) será numérico, o month (mês) em formato long, o day (dia) também numérico, e a timezone com o valor UTC, para não termos problemas com relação ao fuso horário.

Com essas opções já adicionadas ao método toLocaleDateString(), se voltarmos à aplicação, teremos a apresentação no cartão com o nome do dia da semana, o dia, o mês e o ano — por exemplo, "sexta-feira, 2 de agosto de 2024" no cartão do mestre Yoda.

Ajustando a edição de cartões  
Já testamos a parte de criação dos cartões. Entretanto, ao clicar no ícone de editar em um deles, continuaremos na mesma parte da aplicação. Podemos ajustar isso.

Voltando ao VS Code, acessaremos a função preencherFormulario(). Entre seus parênteses, abaixo do último código podemos chamar um document.getElementById() quando essa função for chamada, passando o contêiner do formulário form-container entre os parênteses e o método scrollIntoView() fora deles. Isso ativará o direcionamento para essa parte do formulário por meio do clique no ícone.

```JavaScript
async preencherFormulario(pensamentoId) {
    const pensamento = await api.buscarPensamentoPorId(pensamentoId)
    document.getElementById("pensamento-id").value = pensamento.id
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo
    document.getElementById("pensamento-autoria").value = pensamento.autoria
    document.getElementById("pensamento-data").value = pensamento.data
    document.getElementById("form-container").scrollIntoView()
},
```

Voltando à aplicação, clicaremos novamente no ícone de editar do cartão, e dessa vez, haverá um redirecionamento para a tela do formulário de edição. Em seu interior, teremos o conteúdo do pensamento e a autoria cadastrados anteriormente, só que a data não foi preenchida.

Por que isso está acontecendo? Recebemos a data em UTC, realizamos a formatação para mostrar no cartão, mas não conseguimos preencher o input de data com essa informação.

Isso é uma limitação do próprio campo de input. Precisaremos realizar um ajuste para fazer isso.

Ajustando o input de data  
Voltando ao código, na linha document.getElementById("pensamento-data").value = pensamento.data, na qual coletamos o valor de data, utilizaremos outro método após pensamento.data, chamado toISOString().

Realizaremos uma quebra de linha antes desse método e após o ponto que o ativa para facilitar sua visualização.

```JavaScript
async preencherFormulario(pensamentoId) {
    const pensamento = await api.buscarPensamentoPorId(pensamentoId)
    document.getElementById("pensamento-id").value = pensamento.id
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo
    document.getElementById("pensamento-autoria").value = pensamento.autoria
    document.getElementById("pensamento-data").value = pensamento.data
    document.getElementById("form-container").scrollIntoView().
    toISOString()
},
```

Esse método retornará uma data como um valor de string no formato ISO, o padrão para a representação de datas e horas. Ele pode ser utilizado em conjunto com o UTC.

Após os parênteses de toISOString(), também precisaremos fazer uma quebra com o split(), enviando como parâmetro o T entre aspas duplas.

Por fim, após os parênteses, acessaremos o primeiro elemento, o [0].

```JavaScript
async preencherFormulario(pensamentoId) {
    const pensamento = await api.buscarPensamentoPorId(pensamentoId)
    document.getElementById("pensamento-id").value = pensamento.id
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo
    document.getElementById("pensamento-autoria").value = pensamento.autoria
    document.getElementById("pensamento-data").value = pensamento.data
    document.getElementById("form-container").scrollIntoView().
    toISOString().split("T")[0]
},
```

Voltaremos ao arquivo db.json e observaremos o último objeto cadastrado para entender o que fizemos.

db.json:

```JavaScript
{
    "id": "c9c6",
    "conteudo": "fewfewf",
    "autoria": "etfewgt",
    "data": "2024-08-01T00:00:00.000Z"
}
```

Estamos recebendo a data "2024-08-01T00:00:00.000Z" no formato UTC, e precisamos fazer com que o input de data a reconheça. Para isso, utilizamos o toISOString().

Também fizemos um split(), portanto, a quebra acontecerá a partir do T, e será dividida em duas partes: a primeira com a data e a segunda com o horário.

Por fim, o array entre colchetes que informamos com o valor zero indica que queremos o primeiro elemento desse array — ou seja, a data.

Após essa explicação, como estamos utilizando o toISOString(), acessaremos o arquivo api.js, na função salvarPensamento(). Entre as chaves da const response adicionaremos dois pontos e enviaremos o valor de data.toISOString() para a data. Assim, teremos uma compatibilidade entre esses métodos.

api.js:

```JavaScript
async salvarPensamento(pensamento) {
    try {
        const data = converterStringParaData(pensamento.data)
        const response = await axios.post(`${URL_BASE}/pensamentos`, {
            ...pensamento,
            data: data.toISOString()
        })
        return await response.data
    }
    catch {
        alert('Erro ao salvar pensamento')
        throw error
    }
},
```

Testando o input de data  
Voltando à aplicação, podemos testar novamente. Ao clicar no ícone de editar no cartão do Chaves, notaremos que há o conteúdo, a autoria e a data, condizentes com o que há no cartão.

Podemos até alterar essa data para 12/08/2024 e salvar. Com isso, a data do cartão será atualizada.

Conclusão e próximos passos  
Finalmente, conseguimos adicionar a propriedade de data no pensamento. Realizamos uma série de manipulações nessa data para enviá-la e recebê-la no formato correto, além de apresentar na interface de uma forma amigável.

Na próxima aula, aprenderemos sobre um padrão para manipulação de strings muito importante no JavaScript.

### Aula 4 - Manipulação de datas com UTC e toISOString

Você está desenvolvendo um sistema para a Jornada Milhas, uma empresa que compra e vende milhas aéreas.

Uma das funcionalidades do sistema é registrar a data e hora exata em que uma passagem é comprada, para garantir que todas as datas sejam armazenadas de forma consistente.

Você precisa criar uma função em JavaScript que registre a data e hora atual da compra de uma passagem em formato ISO 8601, utilizando o fuso horário UTC.

Como você pode escrever o código dessa função?

Resposta:

```JavaScript
function registrarCompra() {
  let dataAtual = new Date();
  return dataAtual.toISOString();
}
```

Muito bem! Esta função cria um objeto Date com a data e hora atual e utiliza o método toISOString para convertê-la para o formato ISO 8601 em UTC.

### Aula 4 - Faça como eu fiz: formatando datas

Nesta aula, abordamos a formatação de datas para garantir que elas sejam apresentadas de forma clara e consistente. Aprendemos a converter datas em strings e a exibir essas datas de maneira amigável na interface.

Se ainda não fez, é importante que você coloque em prática o conhecimento adquirido em aula para que o seu aprendizado seja eficaz! Siga os passos abaixo para implementar o que foi visto na aula:

- Atualizar o back-end com data formatada;
- Converter string de data para objeto Date;
- Exibir datas formatadas na interface.

O resultado final esperado é que as datas sejam corretamente armazenadas, formatadas e exibidas na interface.

Vamos lá?

Para implementar o que foi visto na aula, clique abaixo em “ver opinião da instrutora” para seguir o passo a passo.

Opinião do instrutor

Para ver detalhes do código implementado, acesse o repositório no GitHub.

No arquivo "js/api.js", criamos uma função para converter uma string de data em um objeto Date, e essa função foi utilizada para formatar a data antes de salvar um novo pensamento na API.

No arquivo “js/api.js”:

- Crie uma função chamada converterStringParaData que recebe uma string de data e a converte em um objeto Date;
- Utilize a função converterStringParaData para formatar a data antes de salvar um novo pensamento na API;
- Atualize o objeto a ser enviado na requisição POST para incluir a data formatada.
- No arquivo "js/api.js", também modificamos as funções de busca de pensamentos para converter a data de string para objeto Date. E no arquivo "js/ui.js", adicionamos a exibição da data formatada de cada pensamento na interface.

No arquivo “js/api.js”:

- Modifique a função buscarPensamentos para mapear os pensamentos e converter a data de cada um para objeto Date;
- Modifique a função buscarPensamentoPorId para converter a data do pensamento retornado para objeto Date.

No arquivo “js/ui.js”:

Adicione a exibição da data formatada de cada pensamento na interface, criando um elemento div para mostrar a data e formatando-a com toLocaleDateString('pt-BR').

No arquivo "js/api.js", ajustamos o formato da data para ser enviado no formato ISO. Já no arquivo "js/ui.js", a exibição da data de um pensamento foi formatada de acordo com as configurações especificadas.

No arquivo “js/api.js”:

- Encontre a parte do código que faz o envio do pensamento para a API;
- Modifique a linha que define a data para que seja convertida para o formato ISO antes de ser enviada.

No arquivo “js/ui.js”:

- Procure a função que preenche o formulário com os dados de um pensamento;
- Adicione uma linha para formatar a exibição da data no formato ISO e separar a data da hora;
- Encontre a parte do código que formata a data de um pensamento para exibição;
- Adicione as opções de formatação desejadas para exibir a data de acordo com as especificações.

Se restar alguma dúvida, procure-no fórum dou Discord!

### Aula 4 - Lista de exercícios

Vamos para mais uma rodada de exercícios?

O projeto da lista de filmes ainda precisa de você para exibir as datas de lançamento dos filmes na tela.

1. Ajustando o formato de data de lançamento dos filmes

As datas que estão no back-end têm o formato de ano, mês e dia (2024-08-12). Ao salvar um novo filme na lista, a data também aparece nesse mesmo formato. Mas queremos converter a data para mostrar apenas o ano de lançamento do filme. Para fazer isso, você precisa criar uma função que converta a data para exibir apenas o ano.

Dicas:

Faça as alterações no arquivo "api.js";  
Você precisa obter o valor específico do ano por meio de uma desestruturação.
Bom trabalho!

2. Atualizando as funções que precisam receber a data.

Agora que temos uma função que converte as datas e obtém apenas o ano do lançamento dos filmes, altere a função as três funções a seguir:

- buscarFilmes: que busca o filme no back-end;
- salvarFlme: que salva os filmes novos;
- buscaFilmePorId: que busca os filmes pela id.

Dicas:

Para a função buscarFilmes, empregue a função .map() para retornar uma nova lista que contenha apenas o ano de lançamento do filme;
Nas funções salvarFilme e buscarFilmePorId, informe a data convertida.

Vamos lá?

3. Exibindo os resultados do ano de lançamento do filme na tela

Ainda falta a parte mais importante: exibir os filmes na tela. Para exibi-los, precisamos realizar algumas alterações no arquivo "ui.js":

- Acrescente o valor recebido pelo formulário lá na função preencherFormulario;
- Crie um elemento para inserir o ano dentro dos cards dos filmes. Você pode usar a mesma lógica usada na criação das constantes FilmeNome e Filme Genero;
- Por fim, faça um appendChild do elemento que foi criado para exibir o ano de lançamento do filme.

Bons estudos!

Opinião do instrutor

Hora de conferir as sugestões de resolução dos exercícios!

1. Ajustando o formato de data de lançamento dos filmes

Abra o arquivo "api.js";

- Abaixo da constante url, crie uma constante converterData;
- Passe para essa constante uma arrow function que faça a desestruturação da data com o método split;
- Retorne apenas o ano.

O seu código JavaScript pode ter ficado parecido com isto:

```JavaScript
const converterData = (dataString) => {
  const [ano] = dataString.split("-")
  return ano
}
```

Vamos analisar as partes do código:

```JavaScript
const converterData = (dataString) => {
```

Linha 1: Aqui, declaramos uma função chamada converterData usando uma função de seta (arrow function). A função aceita um parâmetro chamado dataString, que é esperado ser uma string representando uma data no formato "YYYY-MM-DD" (por exemplo, "2024-08-27").

```JavaScript
  const [ano] = dataString.split("-")
```

Linha 2:

- Esta linha usa a desestruturação de array para extrair a primeira parte do array retornado pelo método split.
- dataString.split("-"): O método split("-") divide a string dataString em um array de substrings, usando o hífen (-) como separador. Por exemplo, se dataString for "2024-08-27", o resultado de split("-") seria o array ["2024", "08", "27"].
- const [ano] = ...: A desestruturação de array [ano] extrai o primeiro elemento do array resultante do split e o atribui à variável ano. Nesse caso, ano conterá a string "2024".

```JavaScript
  return ano
```

Linha 3: Esta linha retorna o valor da variável ano, que é a parte do ano extraída da string original dataString.

Colocando em linhas gerais, a função converterData pega uma string de data no formato "YYYY-MM-DD" (ano-mês-dia), divide-a em partes usando o hífen como delimitador, extrai o ano (a primeira parte da string, ou seja, “YYYY”) e retorna esse ano como uma string.

Veja um exemplo:

```JavaScript
const ano = converterData("2024-08-27");
console.log(ano);  // Saída: "2024"
```

Nesse exemplo, a função extrai "2024" da data "2024-08-27" e a retorna. Teste isso em seu console para praticar ainda mais!

2. Atualizando as funções que precisam receber a data.

Abra o arquivo "api.js";

Altere as funções abaixo, acrescentando os códigos necessários:

Função buscarFilmes:

```JavaScript
async buscarFilmes() {
    try {
      const response = await axios.get(`${url}/filmes`)
      const filmes = await response.data
      return filmes.map(filme=>{
        return{
          ...filme,
          data: converterData(filme.data)
        }
      })
    }
    catch {
      alert('Erro ao buscar filmes')
      throw error
    }
  }
```

Função salvarFilme:

```JavaScript
 async salvarFilme(filme) {
    try {
      const response = await axios.post(`${url}/filmes`, {
        ...filme,
        data: converterData(filme.data)
      })
      return await response.data
    }
    catch {
      alert('Erro ao salvar filme')
      throw error
    }
  }
```

Função buscarFilmePorId:

```JavaScript
async buscarFilmePorId(id) {
    try {
      const response = await axios.get(`${url}/filmes/${id}`)
      const filme = await response.data

      return{
        ...filme,
        data: converterData(filme.data)
      }
    }
    catch {
      alert('Erro ao buscar filme')
      throw error
    }
  }
```

3. Exibindo os resultados do ano de lançamento do filme na tela

Abra o arquivo "ui.js";

```JavaScript
Na função preencherFormulario, após a linha de código que captura o valor do gênero do filme, adicione a seguinte linha de código:
document.getElementById("filme-data").value = filme.data
```

Em seguida, abaixo da constante FilmeGenero, crie um novo elemento para a data da seguinte maneira:

```JavaScript
const filmeData = document.createElement("div")
filmeData.textContent = filme.data
filmeData.classList.add("filme-data")
```

Finalmente, para exibir o ano de lançamento dos filmes na tela, após fazer o appendChild do gênero do filme, faça o appendChild da data do filme:

```JavaScript 
 li.appendChild(filmeData)
```

Você concluiu mais uma lista de exercícios! Muito bem!

Procure-nos no fórum ou Discord se precisar de ajuda!

### Aula 4 - O que aprendemos?

Nesta aula, você aprendeu como:

- Criar uma função para converter strings de data em objetos Date, facilitando a manipulação de datas no back-end e front-end;
- Garantir que as datas sejam formatadas corretamente antes de salvar novos pensamentos na API;
- Refatorar funções para converter as datas retornadas pela API em objetos Date;
- Exibir datas formatadas na interface, utilizando métodos para apresentar as datas de maneira legível;
- Modificar o código para enviar e exibir as datas no formato ISO, assegurando consistência entre a data armazenada e a data exibida.

Espero você na próxima aula!

## Aula 5 - 
### Aula 5 -  - Vídeo 1
