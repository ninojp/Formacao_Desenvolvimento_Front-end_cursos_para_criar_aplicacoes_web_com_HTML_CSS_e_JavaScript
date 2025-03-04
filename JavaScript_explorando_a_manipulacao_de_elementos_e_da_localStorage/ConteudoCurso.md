# Curso Alura JavaScript: explorando a manipulação de elementos e da localStorage

## Aula 01 - Adicionando Tarefas

### Aula 01 - Apresentação - Video 1

Nesta aula do curso de JavaScript, ministrado por Vinicios Neves, aprendemos sobre o uso do localStorage. O objetivo é evoluir a aplicação Fokus, uma aplicação de pomodoro, implementando um CRUD na lista de tarefas. Isso nos permite selecionar, deletar e finalizar tarefas usando eventos customizados do JavaScript. Também são ensinadas técnicas de debug para encontrar e corrigir bugs. É recomendado ter conhecimento em manipulação do DOM e ter feito os primeiros passos com JavaScript no navegador.

### Aula 01 - Exibindo o formulário - Video 2

Nesta aula, o instrutor apresentou o projeto base do curso, explicando a estrutura de pastas e arquivos. Ele mostrou como encontrar o botão "Adicionar nova tarefa" no HTML utilizando o método querySelector(). Em seguida, adicionou um evento de clique ao botão e utilizou o método classList.toggle() para alternar a classe hidden do formulário de adicionar tarefa. Por fim, o instrutor mostrou o formulário no HTML e explicou como a classe hidden é responsável por escondê-lo. Essa funcionalidade é importante para permitir a interação do usuário com o projeto.

### Aula 01 - Submetendo o formulário - Video 3

Nesta aula, o instrutor ensina como interagir com um formulário em uma aplicação web. Ele mostra como monitorar o envio do formulário, obter o valor digitado em um campo de texto e criar uma lista de tarefas a partir desse valor. Além disso, o instrutor explica como armazenar essa lista de tarefas no armazenamento local do navegador usando o localStorage. Ele utiliza os métodos preventDefault() e setItem() para evitar o comportamento padrão de envio do formulário e para guardar a lista de tarefas no localStorage, respectivamente. O instrutor também mostra como verificar se os dados foram corretamente armazenados no localStorage usando as ferramentas de desenvolvedor do navegador.

### Aula 01 - Consumindo a API Json - Video 4

Nesta aula, o instrutor aborda o problema de armazenar objetos complexos no local storage e apresenta a solução utilizando a API JSON e seus métodos stringify() e parse(). Ele mostra como transformar arrays em strings e vice-versa, permitindo o armazenamento adequado no local storage.

### Aula 01 - Para saber mais: LocalStorage x SessionStorage x Cookies

localStorage:
O localStorage é o local que guarda informações sem data de validade. Uma vez que você armazena algo nele, a informação fica lá até que você decida removê-la ou o usuário limpe os dados de navegação.

Peculiaridades  
Ele tem uma capacidade generosa de armazenamento (cerca de 5-10MB, dependendo do navegador). Porém, lembre-se: é específico do domínio. O que significa que cada site tem seu próprio baú de localStorage.

O que é seguro guardar?  
Informações não sensíveis, como preferências de usuário ou um carrinho de compras. Jamais armazene informações pessoais ou chaves de autenticação.

sessionStorage:
Imagine o sessionStorage como uma mochila de aventura: você utiliza durante a viagem (sessão de navegação) e, quando termina, tudo que está dentro é descartado.

Mas o que exatamente é essa "sessão"?  
Uma sessão de navegação começa quando você abre uma nova aba ou janela no seu navegador e termina quando você fecha essa aba ou janela.  
Tecnicamente, é o período de tempo em que um usuário interage com uma aplicação web. Sendo importante frisar que cada aba ou janela aberta tem sua própria sessão independente, mesmo se estiverem acessando o mesmo site.

Peculiaridades  
Assim como o localStorage, o sessionStorage tem uma capacidade de armazenamento similar e é específico do domínio. No entanto, seu conteúdo se evapora quando a aba ou janela do navegador é fechada.

O que é seguro guardar?  
Dados temporários para uma sessão, como informações de um formulário que está sendo preenchido.

cookies:
Os cookies são os pequenos biscoitos mágicos que acompanham você por diferentes sites. São usados, principalmente, para rastrear informações entre sessões e domínios.

Peculiaridades  
São limitados em tamanho (apenas cerca de 4KB cada). E atenção! Eles são enviados em todas as solicitações HTTP, o que pode impactar a performance.

O que é seguro guardar?  
Identificadores de sessão, preferências de usuário ou tokens de CSRF*. Mas cuidado com os regulamentos de privacidade, como o GDPR**, quando estiver trabalhando com cookies!

> CSRF, ou Cross-Site Request Forgery, é um ataque contra aplicações web em que um invasor engana o navegador do usuário para realizar ações indesejadas em um site no qual o usuário está autenticado, sem o conhecimento ou consentimento do usuário. Isso pode incluir ações como fazer uma compra, alterar um endereço de e-mail ou uma senha em um site. O site vulnerável não consegue distinguir se a solicitação foi feita voluntariamente pelo usuário ou se foi uma ação maliciosa induzida por um terceiro.  
GDPR, ou General Data Protection Regulation (Regulamento Geral de Proteção de Dados), é uma legislação da União Europeia que entrou em vigor em maio de 2018. O GDPR visa proteger a privacidade e os dados pessoais dos cidadãos da UE e do Espaço Econômico Europeu (EEE).

### Aula 01 Conclusão - Nessa aula, você aprendeu como:

Selecionar elementos HTML através do querySelector;
Interagir e manipular classes de um elemento HTML com classList.toggle;
Criar e adicionar ouvintes de eventos com addEventListener;
Prevenir comportamentos padrão de elementos HTML, como o recarregamento da página ao submeter um formulário com preventDefault.

## Aula 02 - Exibindo as Tarefas no DOM

### Aula 02 - Criando uma tarefa - Video 1

Nesta aula, o instrutor ensina como criar uma tarefa utilizando JavaScript. Ele mostra um trecho de código HTML que representa a estrutura de uma tarefa e explica que o objetivo é criar uma função em JavaScript que retorne o HTML correspondente a essa tarefa. O instrutor mostra passo a passo como criar os elementos HTML dinamicamente, como o <li>, <svg>, <p> e <button>, e como adicionar classes, conteúdo e atributos a esses elementos. Ele ressalta que o foco é o JavaScript e não o HTML e CSS. No final, o instrutor menciona que o próximo passo é testar as linhas de código escritas e criar as tarefas correspondentes a partir do localStorage.

### Aula 02 - Lendo tarefas gravadas - Video 2

Nesta aula, o instrutor aborda a leitura de tarefas gravadas no localStorage. Ele explica como verificar se a lista de tarefas existe no localStorage, como converter a string retornada em um objeto JavaScript e como percorrer essa lista utilizando o método forEach(). Também é mostrado como criar elementos HTML para cada tarefa e adicioná-los corretamente à lista no DOM. O instrutor destaca a importância de separar as responsabilidades das funções e sugere a depuração para identificar possíveis problemas.

### Aula 02 - Escondendo o formulário - Video 3

Nesta aula, o instrutor abordou a correção do estilo da lista de tarefas, a remoção de elementos desnecessários, a adição de classes CSS aos elementos e a adição de uma nova tarefa à lista. Ele mostrou como resolver problemas de estilo, como adicionar funcionalidades e como limpar o campo de texto do formulário após adicionar uma tarefa.

### Aula 02 - Para saber mais: além do append - Outros métodos do DOM

1 - .append():  
Bastante utilizado durante o curso, esse método permite adicionar múltiplos nós e/ou strings de texto ao final de um elemento. Se você passar uma string, o método a trata como um texto e a adiciona diretamente.

2 - .appendChild():  
É um método mais antigo e é específico para inserir um único nó no final do elemento selecionado. Diferentemente do .append(), o .appendChild() não aceita strings diretamente. Se você quiser adicionar uma string, precisa criar um nó de texto primeiro.

Por que é útil conhecer ambos?  
Enquanto .append() oferece mais flexibilidade, permitindo inserir múltiplos elementos e/ou texto, .appendChild() tem amplo suporte e é mais específico na sua tarefa.  

3 - .prepend():  
Esse método insere conteúdo no início de um elemento selecionado.

Por que é útil?  
Se você deseja adicionar algo no topo de uma lista ou no começo de um container, esta é a função a ser usada.

4 - .insertBefore():  
Permite inserir um elemento, especificamente, antes de outro elemento.

Por que é útil?  
É muito útil quando você precisa inserir um item em uma posição específica, e não apenas no começo ou fim.

5 - .insertAdjacentElement(), .insertAdjacentHTML() e .insertAdjacentText():  
Oferecem controle preciso sobre onde você deseja inserir um novo elemento, seja ele um texto, HTML ou elemento, em relação a um elemento existente.

Por que é útil?  
Permitem inserções em quatro posições diferentes: antes, depois, no início ou no final do elemento selecionado.

6 - .replaceChild():  
Substitui um elemento filho por outro.

Por que é útil?  
Se você precisa atualizar ou trocar um elemento por um novo, você pode usar este método.

7 - .cloneNode():  
Duplica um elemento. Exemplo:  
let item = document.querySelector("li");
let itemDuplicado = item.cloneNode(true); // Com "true" ele copia todos os filhos do item.
document.querySelector("ul").appendChild(itemDuplicado);

Por que é útil?  
Se você precisa de uma cópia exata de um elemento (com ou sem seus filhos), este método é perfeito.

### Aula 02 - Nessa aula, você aprendeu como:

Utilizar o localStorage para armazenar e recuperar dados, permitindo persistência entre sessões;
Criar elementos utilizando o document.createElement;
Aninhar elementos utilizando o método append.

## Aula 03 - Editando Tarefas

### Aula 03 - Ouvindo o clique - Video 1

Nesta aula, o instrutor ensina como implementar a funcionalidade de edição de tarefas na aplicação Fokus. Ele cria um botão de edição e manipula o evento de clique desse botão. Utilizando a função prompt(), o usuário pode informar o novo nome da tarefa, que é armazenado em uma variável e utilizado para atualizar o texto da tarefa no DOM. É importante ressaltar que essa atualização é apenas no DOM e não no localStorage(), que será abordado no próximo vídeo.

### Aula 03 - Atualizando o localStorage - Video 2

Nesta aula, o instrutor aborda a necessidade de atualizar o localStorage() quando o usuário editar uma tarefa já criada. Ele propõe uma nova estratégia, criando uma função chamada atualizarTarefas() que encapsula a lógica de atualização do localStorage. Essa função é chamada dentro do evento onclick do botão. Além disso, o instrutor também atualiza o texto da tarefa no objeto que representa a tarefa. O instrutor identifica um bug onde a tarefa fica em branco caso o usuário clique em "OK" sem digitar nada no campo de texto, mas esse problema será abordado em um próximo vídeo.

### Aula 03 - Depurando código no navegador - Video 3

#### DEBUGGER

Usado para DEBUGAR, depurar o codigo e verificar a execução linha a linha.

Nesta aula, o instrutor aborda a correção de bugs e a aplicação de técnicas de debugging no código JavaScript. Ele mostra como utilizar o console.log() para exibir mensagens no navegador e como utilizar o prompt para interagir com o usuário e obter informações. O instrutor também explica como utilizar a estrutura condicional if para verificar se uma variável possui um valor válido antes de executar determinadas ações. Além disso, ele demonstra como utilizar o debugger para depurar o código e entender o que está acontecendo. Por fim, o instrutor destaca a importância dessas ferramentas de debugging para identificar e solucionar problemas no código.

### Aula 03 - Para saber mais: addEventListener('click') vs onclick

Essas abordagens podem parecer semelhantes, mas têm particularidades importantes.  

Diferença para o Navegador
addEventListener: Com ele, você pode adicionar mais de um ouvinte para o mesmo evento. Imagine que você quer que o botão exiba um alerta e também mude de cor quando clicado.

onclick: Se você tentar definir mais de uma ação usando onclick, a última definida é a que permanecerá, sobrescrevendo as anteriores.

Diferença para o Desenvolvedor
Flexibilidade com addEventListener: Com ele, você tem mais controle e liberdade para adicionar diversas reações a um mesmo evento, ideal para scripts ou módulos distintos.

Controle simplificado com onclick: Pode parecer mais direto, mas o risco é grande em aplicações robustas! Ao sobrescrever funções inadvertidamente, você pode acabar com comportamentos inesperados.

> Reflexão: Em um projeto grande, com vários desenvolvedores trabalhando e talvez até com bibliotecas externas, como garantir que não estamos sobrescrevendo um evento crucial usando onclick?

### Aula 03 Conclusão - Nessa aula, você aprendeu como:

Encapsular lógicas repetidas em funções, como a atualização de itens no localStorage;
Adicionar eventos de clique diretamente a um elemento com a propriedade onclick;
Utilizar a função prompt para obter informações diretamente do usuário;
Atualizar conteúdo textual de um elemento DOM dinamicamente.

## Aula 04 - Integrando com o cronômetro

### Aula 04 - Selecionando uma tarefa - Video 1

Nesta aula, o instrutor ensina como lidar com a seleção de tarefas em uma aplicação chamada Fokus. Ele mostra como atualizar a descrição da tarefa em andamento e adicionar uma classe específica ao item clicado. O instrutor também explica como selecionar o parágrafo onde a descrição da tarefa deve ser preenchida e como adicionar o evento de clique nas tarefas. Além disso, ele mostra como adicionar a classe que indica que a tarefa está ativa. No próximo vídeo, ele irá mostrar como refinar o método para garantir que apenas uma única tarefa tenha a classe ativa por vez.

### Aula 04 - Desselecionando uma tarefa - Video 2

Nesta aula, o instrutor aborda a estratégia de garantir que apenas uma única tarefa tenha a classe ativa. Ele explica a diferença entre os métodos querySelectorAll e querySelector e demonstra como utilizar o querySelectorAll para selecionar e iterar sobre os elementos que possuem a classe ativa. O instrutor também adiciona a funcionalidade de deselecionar a tarefa selecionada e utiliza a técnica de "Early Return" para interromper a execução do código quando necessário.

### Aula 04 - Comunicando o fim da atividade - Video 3

Nesta aula, o instrutor explica como adicionar funcionalidades ao código do projeto "Fokus". Ele mostra como verificar se o tempo decorrido pelo timer chegou a zero e, nesse caso, emitir um alerta, tocar um som e zerar o timer. Além disso, ele ensina como criar um evento customizado chamado "FocoFinalizado" e dispará-lo quando o timer chegar a zero, permitindo que outras partes da aplicação reajam a esse evento. No próximo vídeo, será mostrado como tratar esse evento para indicar que a tarefa foi finalizada.

### Aula 04 - Finalizando uma tarefa - Video 4

Nesta aula, o instrutor ensina como adicionar funcionalidades ao evento customizado "FocoFinalizado" no código JavaScript. Ele mostra como adicionar um event listener para esse evento no objeto "document" e como verificar se existe uma tarefa selecionada e um elemento "li" da tarefa selecionada. Caso existam, ele remove a classe "app__section-task-list-item-active" desse elemento "li" e adiciona a classe "app__section-task-list-item-complete". Além disso, ele desabilita o botão da tarefa selecionada usando o método "setAttribute" com o atributo "disabled". O instrutor também menciona a importância de fazer um "double check" para garantir que o elemento "li" da tarefa selecionada não seja nulo. Essa implementação permite que, ao finalizar a contagem regressiva de uma tarefa, a classe e o estado do botão sejam atualizados corretamente. O próximo passo será lidar com a persistência do estado de tarefa concluída dentro do localStorage.

### Aula 04 - Nessa aula, você aprendeu como:

Aprendemos a adicionar e remover classes de elementos HTML para alterar sua aparência ou comportamento, como evidenciado pelo código que adiciona e remove a classe app__section-task-list-item-active;
Compreendemos como lidar com um estado no JavaScript para rastrear a tarefa selecionada atualmente, usando variáveis como tarefaSelecionada e liTarefaSelecionada;
Desenvolvemos uma lógica para permitir que os usuários cliquem e selecione/desselecione uma tarefa, e como responder a essas interações;
Trabalhamos com a criação e resposta a eventos personalizados, como o evento FocoFinalizado, que é usado para marcar uma tarefa como concluída;
Melhoramos a experiência do usuário ao fornecer feedback visual sobre a tarefa selecionada e a capacidade de marcar uma tarefa como concluída.

## Aula 05 - Removendo Tarefas

### Aula 05 - Corrigindo bugs - Video 1

Nesta aula, o instrutor aborda a necessidade de atualizar o local storage da aplicação para persistir o estado das tarefas completadas mesmo após a recarga da página. São mostrados trechos de código onde são adicionados event listeners para tratar o evento "FocoFinalizado" e o clique em um item de tarefa. Também são feitas modificações no código para adicionar classes, desabilitar botões e atualizar propriedades das tarefas selecionadas. Essas modificações são suficientes para persistir a informação de tarefa completa no local storage e recuperá-la corretamente ao recarregar a página. O instrutor faz um teste selecionando uma tarefa e ao recarregar a página, a tarefa continua marcada como completa, indicando que a informação foi persistida corretamente.

### Aula 05 - Removendo tarefas finalizadas - Video 2

Nesta aula, o instrutor mostra como implementar um menu de contexto no aplicativo Fokus. Esse menu oferece duas opções: limpar as tarefas concluídas ou limpar todas as tarefas. O instrutor explica como selecionar o botão correspondente no HTML e adicionar um evento onclick a ele. Dentro da função onclick, ele utiliza o método querySelectorAll para selecionar todas as tarefas concluídas e remove-las do DOM. Além disso, ele também mostra como atualizar a lista de tarefas na local storage, filtrando apenas as tarefas que não estão completas. O instrutor menciona um erro na linha 122 do código e explica como corrigi-lo. Por fim, ele testa a funcionalidade no navegador e verifica que as tarefas concluídas são removidas tanto do DOM quanto da local storage.

### Aula 05 - Removendo todas as tarefas - Video 3

Nesta aula, o instrutor ensina como implementar a funcionalidade de remover todas as tarefas em uma aplicação chamada Fokus. A abordagem utilizada é criar uma constante chamada "removerTarefas" e associá-la à função que estava no "onclick" do botão de remover concluídas. Agora, ao clicar no botão de remover todas as tarefas, a função "removerTarefas" é executada. Essa função remove os elementos da lista de tarefas que estão marcados como completos e atualiza a lista. Com essa implementação, a aplicação Fokus fica mais robusta, permitindo a remoção de todos os itens ou apenas dos itens completos.

### Aula 05 - Para saber mais: conceitos importantes para o funcionamento do Fokus

A Diferença entre btnRemoverConcluidas.onclick = () => removerTarefas(true) e btnRemoverConcluidas.onclick = removerTarefas
btnRemoverConcluidas.onclick = () => removerTarefas(true)
Ao usar esta sintaxe, estamos definindo o evento de clique do botão para uma função anônima (uma função sem nome) que, quando chamada, executará a função removerTarefas com o argumento true.

Uma maneira simples de entender isso é imaginar que estamos dizendo ao botão: "Quando você for clicado, quero que você execute essa pequena função para mim. E essa pequena função chamará removerTarefas passando true (ou false, como vimos em aula)."

btnRemoverConcluidas.onclick = removerTarefas
Usando esta sintaxe, estamos diretamente atribuindo o evento de clique do botão à função removerTarefas. Isso significa que, quando o botão for clicado, ele tentará chamar a função removerTarefas com qualquer argumento que o evento de clique forneça (normalmente um objeto de evento).

No nosso contexto, isso causaria um problema porque a função removerTarefas espera um argumento específico (somenteCompletas). Ao atribuir diretamente a função removerTarefas, não estamos garantindo que ela será chamada com os argumentos corretos.

Então, por que usamos a primeira sintaxe?

Nós queremos especificar exatamente como e com quais argumentos a função removerTarefas será chamada. Ao usar a função anônima com () =>, temos controle total sobre a chamada da função, garantindo que ela seja chamada da maneira que desejamos.

### Aula 05 - Para saber mais: métodos que buscam elementos

- document.querySelector(seletor): retorna o primeiro elemento do DOM que corresponde ao seletor especificado. Se nenhum elemento for encontrado, retorna null.
  - Por exemplo: ao usar document.querySelector("#lista"), será retornado o primeiro elemento que possuir o id lista.
- document.querySelectorAll(seletor): retorna uma coleção (NodeList) de todos os elementos do DOM que correspondem ao seletor  especificado. Se nenhum elemento for encontrado, retorna uma coleção vazia.
  - Por exemplo: document.querySelectorAll(".texto-principal"), retorna todos os elementos com classe texto-principal.

- Seletores de tipo: selecionam elementos pelo nome da tag HTML, como p, div, img, etc.
- Seletores de classe: selecionam elementos pelo valor do atributo class, usando o prefixo ”.” antes do nome da classe, como .produto, .carrinho, .botao, etc.
- Seletores de id: selecionam elementos pelo valor do atributo id, usando o prefixo ”#” antes do nome do id, como #total, #lista, #confirmacao, etc.
- Seletores de atributo: selecionam elementos pelo valor de qualquer atributo HTML, usando colchetes [ ] para delimitar o nome e o valor do atributo, como [href="https://www.bing.com"], [alt="Logo da loja"], [data-id="123"], etc.
- Seletores combinados: selecionam elementos que atendem a mais de um critério, usando combinadores como espaço (descendente), > (filho direto), + (irmão adjacente), ~ (irmão geral), etc. Por exemplo, .produto > img seleciona todas as imagens que são filhas diretas de elementos com a classe produto.

- getElementById(id): é fornecido por este método um elemento do DOM que tem o valor do atributo id igual ao parâmetro passado.
  - Por exemplo, document.getElementById("total") retorna o elemento que tem id="total". Esse método é útil para selecionar elementos únicos, pois o valor do id deve ser exclusivo na página.
- getElementsByTagName(tag): este método retorna uma coleção (HTMLCollection) de elementos do DOM que têm o nome da tag HTML igual ao parâmetro passado.
  - Por exemplo, document.getElementsByTagName("p") retorna todos os elementos <p> da página. Este método é útil para selecionar elementos por tipo, como parágrafos, imagens, links, etc.
- getElementsByClassName(classe): este método retorna uma coleção (HTMLCollection) de elementos do DOM que têm o valor do atributo class igual ao parâmetro passado.
  - Por exemplo, document.getElementsByClassName("produto") retorna todos os elementos que têm class="produto". Esse método é útil para selecionar elementos por classe, que é um atributo que pode ser usado para definir o estilo ou a funcionalidade dos elementos.
- elementFromPoint(coordenada x, coordenada y): este método retorna o elemento do DOM que está localizado nas coordenadas x e y especificadas na janela de visualização.
  - Por exemplo, document.elementFromPoint(100, 200) retorna o elemento que está na posição 100 pixels da esquerda e 200 pixels do topo da janela. Este método é útil para selecionar elementos com base na sua posição na tela.
- elementsFromPoint(coordenada x, coordenada y): este método retorna uma coleção (Array) de elementos do DOM que estão localizados nas coordenadas x e y especificadas na janela de visualização, ordenados do mais próximo ao mais distante da superfície da tela.
  - Por exemplo, document.elementsFromPoint(100, 200) retorna um array de elementos que estão na posição 100 pixels da esquerda e 200 pixels do topo da janela, incluindo os elementos que estão sobrepostos ou aninhados. Este método é útil para selecionar todos os elementos que estão em uma determinada posição na tela.

No entanto, os seletores JavaScript também têm algumas limitações. Algumas delas são:

- Eles são sensíveis a maiúsculas e minúsculas, ou seja, eles diferenciam letras maiúsculas e minúsculas. Por exemplo, ”.Produto” não é o mesmo que ”.produto”.
- Não podem usar pseudo-elementos ou pseudo-classes CSS, como ::before, ::after, :hover, :checked, etc. Esses elementos e classes são usados para definir o estilo dos elementos HTML, mas não fazem parte do DOM.
- Podem ter um impacto negativo na performance da página web, especialmente se forem usados de forma excessiva ou inadequada. Por exemplo, usar seletores muito complexos ou aninhados pode aumentar o tempo de busca dos elementos no DOM.

Portanto, é importante que você use com cuidado e critério, seguindo as boas práticas de desenvolvimento web. Algumas dicas para isso são:

- Use seletores simples e específicos, que identifiquem claramente os elementos que você quer selecionar.
- Use seletores de id sempre que possível, pois eles são os mais rápidos e únicos.
- Evite usar seletores universais (*) ou que dependam da ordem dos elementos no DOM, pois eles podem ser lentos ou imprecisos.
- Cache os elementos selecionados em variáveis, para evitar buscar os mesmos elementos repetidamente no DOM.

### Aula 05 Conclusão - Nessa aula, você aprendeu como:

Entendemos como acessar e alterar elementos no DOM, uma habilidade fundamental para criar interações dinâmicas nas páginas web;
Exploramos como capturar e responder a eventos como cliques e submissões de formulário, permitindo que nossa aplicação reaja às ações dos usuários;
Aprendemos a manter e atualizar um estado local para nossa aplicação, usando a capacidade do localStorage para persistir tarefas e estados entre as sessões;
Dominamos a arte de criar elementos dinamicamente no JavaScript e inseri-los no DOM, proporcionando uma atualização em tempo real da interface do usuário.

### Aula 05 Conclusão - Video 4

Nesta aula do curso "JavaScript: explorando a manipulação de elementos e da localStorage", os alunos tiveram a oportunidade de aprofundar seus conhecimentos em desenvolvimento web. Foram abordados tópicos como o uso de armazenamento local (local storage) para guardar e atualizar itens, a manipulação de dados em formato JSON, técnicas de depuração e debug, além do desafio de publicar o projeto na plataforma Vercel. O instrutor expressou sua felicidade em ter os alunos acompanhando o curso até o final e espera encontrá-los em um próximo curso.
