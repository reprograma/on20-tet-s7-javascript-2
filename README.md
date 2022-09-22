<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 20 - Todas em Tech  | Front-end | Semana 7 | 2022 | Professora Ana Beatriz Morita

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* [Add outras intrucoes caso necessario]

### Resumo
O que veremos na aula de hoje?
* [DOM](#DOM)
* [Métodos de seleção](#Métodos-de-seleção)
* [Manipulação de CSS](#Manipulação-de-css)
* [Manipulação de conteúdo de tags](#alterando-conteudo-de-tags)
* [Alterando a árvore do DOM](#alterando-a-arvore-do-DOM)
* [Navegando pelos elementos da árvore do DOM](#Navegando-pelos-elementos-da-árvore-do-DOM)
* [Eventos](#eventos)

## Conteúdo
### DOM 
1. [Métodods DOM](#métodos-dom)

### Métodos de seleção 
1. [getElementById](#getElementById)
2. [getElementsByTagName](#getElementByTagName)
3. [getElementsByClassName](#getElementByClassName)
4. [querySelector](#querySelector)
5. [querySelectorAll](#querySelectorAll)
   
### Manipulação de CSS
1. [style](#style)
1. [classlist](#classlist)
  * [add](#add)
  * [remove](#remove)
  * [toggle](#toggle)
  * [contains](#contains)
### Manipulação de contéudo
1. [innerHTML](#innerHTML)
1. [textContent](#textContent)
1. [innerText](#innerText)
1. [value](#value)

### Alterando árvore do DOM
1. [Criando elementos do DOM](#removendo-elementos-do-dom)
2. [Adicionando elementos ao DOM](#adicionando-elementos-ao-dom)
3. [Removendo elementos do DOM](#removendo-elementos-do-dom)

### Navegando pelos elementos da árvore do DOM
1. [Parents](#parents)
2. [Siblings](#sibling)
3. [Children](#children)

### Eventos
1. [Tipos de Eventos](#tipos-de-eventos)
2. [EventListener](#event-listener)
3. [Atributo](#atributo)
4. [PreventDefault](#preventDefault)

### DOM 
O Document Object Model é uma interface multiplataforma e independente de linguagem que trata um documento XML ou HTML como uma estrutura de árvore em que cada nó é um objeto que representa uma parte do documento. O DOM representa um documento com uma árvore lógica.

<img src="./assets/dom.jpeg">

No desenvolvimento de sites o DOM é uma interface de programação que nos permite criar, alterar ou remover elementos de um documento do site. A manipulação do DOM é quando você usa JavaScript para adicionar, remover e modificar elementos de um site. É muito comum no desenvolvimento web.

Embora o DOM seja frequentemente acessado usando JavaScript, não é uma parte da linguagem JavaScript. Ele também pode ser acessado por outras linguagens.

Uma página da Web é um documento. Este documento pode ser exibido na janela do navegador ou como a fonte HTML. Mas é o mesmo documento nos dois casos. O DOM (Document Object Model) representa o mesmo documento para que possa ser manipulado. O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.

Como o próprio nome diz, o maior objeto que temos é o document, ou seja, podemos considerar a página que carregamos no nosso navegador. Podemos começar a requisitar elementos HTML, manipulá-los, criar novos e apagá-los utilizando a variável ‘document’.

<img src="./assets/dom.gif">

Por exemplo, se digitarmos no console document.head podemos acessar a tag <head> e o que contém dentro dela.

Uma boa prática ao criar seletores de JavaScript é atribuir seus valores à constantes ao invés de variáveis, garantindo que os elementos de HTML que estamos manipulando ao longo do código não serão alterados em nenhum momento.

#### Métodos DOM

Os métodos HTML DOM são ações que você pode executar (em elementos HTML).
Propriedades HTML DOM são valores (de elementos HTML) que você pode definir ou alterar.
No DOM, todos os elementos HTML são definidos como objetos.
A interface de programação são as propriedades e métodos de cada objeto.
Uma propriedade é um valor que você pode obter ou definir (como alterar o conteúdo de um elemento HTML).
Um método é uma ação que você pode fazer (como adicionar ou excluir um elemento HTML).

### Métodos de seleção

Métodos de seleção são a forma que conseguiremos manipular os elementos seja pelo estilo ou conteúdo. Comoo próprio nome sugere, são métodos que vão selecionar os elementos da árvore do DOM.
#### getElementById

Esse método retorna o elemento que tiver o ID informado como argumento. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.

```javascript
let input = document.getElementById('nome');
```

No exemplo acima estamos selecionando um elemento que tenho o id nome.
#### getElementsByClassName

Este método retorna uma lista de elementos que possuem a class informada como argumento da função.

```javascript
let cards = document.getElementsByClassName('cards');
```

No exemplo acima estamos selecionando todos os elementos que contem a classe card.
#### getElementsByTagName

Este método retorna uma lista com todos os elementos que correspondem a seleção por tag do nome informado em praênteses.

```javascript
let ancoras = document.getElementsByTagName('a');
```

No exemplo acima estamos selecionando todas as âncoras que existem no nosso site.
#### querySelector

Este é um método muito versátil, ele funciona utilizando os mesmos seletores utilizados no CSS para estilizar os elementos. 

```javascript
let input = document.querySelector('form input');
```

No exemplo acima estamos selecionando o primeiro input que está dentro de um form que for encontrado no html .
#### querySelectorAll

Assim como o querySelector este método é muito versátil, a diferená entre um e outro é que o querySelectorAll retorna uma lista de elementos 

```javascript
let input = document.querySelectorAll('form input');
```

No exemplo acima estamos selecionando todos os inputs dentro de um form.


Para selecionar apenas um elemento pelo id, é mais viável utlizar document.getElementById pois o mesmo é específico para essa finalidade. Caso precise de uma seleção mais avançada, use document.querySelector pelo fato de ter a liberdade de utilizar seletores CSS, o que é uma grande vantagem, além de ser mais performático para o browser.

### Manipulação de Css

Através do DOM também conseguimos alterar o estilo de algum article. Para alterar o estilo de um elemento temos duas maneiras que podemos utilizar, mas para isso primeiro precisamos selecionar o elemento que terá seu estilo alterado.  
#### style
Todo elemento sendo manipulado pelo DOM possui uma série de propriedades que podem ser acessadas. E dentre elas temos o style. O style permite que alteremos os estilos no seu grau de prioridade mais alto.
Após acessar a apropriedade style podemos acessar as prorpriedades do CSS através de um ponto (".") seguido do nome da propriedade a ser alterada. 
obs: as propriedades no css tem um traço ("-") entre as palavras, mas dentro do javascript isso não é possível, então os traços são substituídos pelo uso do camel Case.

```javascript
let input = document.querySelectorAll('input');
input.style.backgroundColor = "purple";
```

Alterar um estilo pelo style é o equivalente a:

```html
<input style="background-color: 'purple'" />
```

#### classlist
O classlist é uma propriedade que retorna a lista de classes que um elemento tem.

```javascript
let input = document.querySelectorAll('input');
input.classlist;
```

A propriedade classList é utilizada para leitura, mas podemos adicionar e remover classes da lista utilizando os métodos:

* add
  com este método adicionamos uma classe à lista de classes de um elemento
  
```javascript
let div = document.querySelectorAll('div');
div.classlist.add("card");
```

* remove
 com este método removemos uma classe da lista de classes de um elemento
 ```javascript
let div = document.querySelectorAll('div');
div.classlist.remove("card");
```

* toggle
 com este método removemos uma classe da lista de classes de um elemento ser ele já tiver essa classe na sua lista ou adicionamos a classe caso ele não tenha. A palavra toggle to inglês significa alternar, então ele fica alternando a classe da lista.

 ```javascript
let div = document.querySelectorAll('div');
div.classlist.toggle("ativo");
```

* contains
Esse método retorna um valor booleano, indicando se um elemento contem o nome da classe especificado. Valores possíveis:

true - o elemento contém o nome da classe especificado
false - o elemento não contém o nome da classe especificado
 ```javascript
let div = document.querySelectorAll('div');
div.classlist.contains("ativo"); // devolve true ou false
```

### Manipulação de Conteúdo

Através do DOM também conseguimos alterar o conteúdo de algum article. Para alterar o conteúdo de um elemento temos algumas manerras que podemos utilizar. 

#### innerHTML
O innerHTML permite que possamos ver o conteúdo interno da tag do HTML e também podemos utilizá-lo para alterar o conteúdo do elemento

```javascript
let div = document.querySelectorAll('div');
div.innerHTML(); // retorna o conteúdo da div
div.innerHTML = "novo <strong>conteudo</strong>"; // muda o conteúdo da tag para novo <strong>conteudo</strong>
```

#### textContent
O textContent retorna o texto da tag com formatação feita

```javascript
let h2 = document.querySelectorAll('h2');
h2.textContent(); // retorna o texto com formatação
h2.textContent = "novo texto" // altera o texto para novo texto
```
#### innerText
Semelhante ao textContent porém não traz a formatação.

```javascript
let p = document.querySelectorAll('p');
p.innerText();
```
#### value
O value permite que possamos acessar o valor atual de algum input ou textarea.

```javascript
let input = document.querySelectorAll('input');
input.value; // retorna o valor digitado no input
```

### Alterando a árvore do DOM
Através da árvore do DOM também podemos criar, adicionar, remover elementos da nossa página conforme surgir a necessidade.
#### Criando elementos
Para criar elementos utilizamos a função createElement e passamos como argumento da função o nome da tag a ser criada
obs: esse método apenas cria o elemento mas não inclui ele dentro do nosso html.

```javascript
let novaTag = document.createElement('p'); //cria um novo elemento paragrafo
```
#### Adicionando elementos
Para adicionar o elemento ao nosso HTML podemos utilizar o método appendChild(), esse método permite que adicionemos um novo elemento como filho de outro. Esse elemento é adicionado como último filho do elemento pai.

```javascript
let novaTag = document.createElement('p'); //cria um novo elemento paragrafo

let div = document.querySelector('div'); // selecionamos o elemento ao qual queremos adicionar a nova tag

div.appendChild(novaTag) // adicionamos a nova tag como filha da div
```

Existe também uma forma de adicionar os elementos em uma ordem específica, para isso utilizamos o insertBefore.
Para utilizar essa forma precisamos de dois parâmetros: o primeiro é o elemento filho e o segundo é o elemento que servirá de referência para inserir o elemento filho.
```javascript
let titulo = document.createElement('h1');
let paragrafo = document.querySelector('p'); 
let artigo = document.querySelector('article'); 

div.insertBefore(titulo, paragrafo) // adicionamos a nova tag h1 como filha do article antes do paragrafo
```
#### Excluindo elementos
Da mesma forma que podemos adicionar elementos ao nosso HTML podemos remover os elementos. Para isso precisamos do elemento pai e do elemento filho a ser removido.

```javascript
let titulo = document.querySelector('h1'); 
let article = document.querySelector('article'); 
article.removeChild(titulo); //remove o titulo do article
```


### Navegando pela árvore do DOM
Através da árvore do DOM também podemos verificar o grau de parentesco entre os elementos (nós). 
#### Parents
Para criar verificar o elemento pai ou mãe de um outro elemento podemos utilizar do parentNode ou parentdiv.

```javascript
let p = document.querySelector('p');
p.parentNode(); // retorna um objeto com o nó do elemento pai do paragrafo
p.parentElement(); // retorna o elemento pai do paragrafo
```
#### Siblings
Para verificar os elementos irmãos podemos utilizar as seguintes propriedades: nextSibling, previousSibling, nextElementSibling e previousElementSibling.

```javascript
let div = document.querySelector('div'); 

div.nextSibiling // irá retornar o próximo item após a div (pode ser um espaço vazio) 

div.previousSibiling // irá retornar o item anterior a div (pode ser um espaço vazio)

div.nextElementSibiling // irá retornar o próximo elemento após a div

div.previousElementSibiling // irá retornar o elemento anterior a div
```
#### Children
Também podemos verificar os elementos filhos de outro, para isso utilizamos o children, childNodes, firstElementChild e lastElementChild

```javascript
let article = document.querySelector('article'); 
article.children // irá retornar todos elementos filhos do article

article.childNodes // irá retornar um objeto ou lista com todos os elementos filhos do article. as vezes pode retornar espaços vazios como elementos também.

article.firstElementChild // retorna o primeiro elemento filho do article
article.lastElementChild // retorna o ultimo elemento filho do article

```
### Eventos
Em uma página web, nós utilizamos uma estrutura de programação
orientada à eventos para adequar-se e responder às ações do usuário
em nossa página. Eventos são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo, no qual este te alerta sobre essas ações para que você possa responder de alguma forma, se desejado. 

No caso da web, eventos são disparados dentro da janela do navegador, e tende a estarem anexados a algum item especifico nele — pode ser um único elemento, um conjunto de elementos, o HTML carregado na guia atual, ou toda a janela do navegador.

Para conseguirmos isso, a ideia é que várias funções sejam criadas para serem chamadas quando determinados eventos (como clique, uma passagem de mouse, etc) definidos pelo programador acontecerem. Podemos ver um exemplo disso na seguinte lógica:

Um botão de menu mobile precisa, ao ser clicado, mostrar a barra
de navegação para que o usuário possa ir até onde deseja.
Nesse caso, podemos chegar às seguintes conclusões:
. Nosso elemento que recebe o evento é o menu mobile;
. Nosso evento atribuído é o clique;

. A função que ele tem que executar é mostrar uma barra de nave-
gação que está atualmente oculta;

- O usuário clicando com o mouse sobre um certo elemento ou passando o cursor do mouse sobre um certo article.
- O usuário pressionando uma tecla do teclado.
- O usuário redimensionando ou fechando a janela do navegador.
- Uma pagina da web terminando de carregar.
- Um formulário sendo enviado.
- Um erro ocorrendo.

Os eventos ao serem disparados permitem que consigamos visualizar o próprio evento dentro das funções de ação que são passadas. Eles ficam disponíveis como um parâmetro da função. No geral, costumamos chamar esse parâmetro de evento, event ou apenas e.
#### Tipos de eventos
Existem uma série de eventos que podemos ter na nossa página e nos elementos, a seguir temos uma lista de alguns deles.


| Evento      | Descrição                                                    |
| :---------- | :----------------------------------------------------------- |
| onBlur      | define a ação quando o elemento perde o foco                 |
| onChange    | define a ação quando o elemento muda o valor                 |
| onClick     | define a ação quando o elemento é clicado pelo usuário       |
| onFocus     | define a ação quando o elemento é focado                     |
| onKeyPress  | define a ação quando o elemento tem uma tecla pressionada pelo usuário |
| onLoad      | define a ação quando o elemento carrega por completo         |
| onMouseOver | define a ação quando o usuário passa o mouse sobre o elemento |
| onMouseOut  | define a ação quando o usuário retira o mouse sobre o elemento |
| onSubmit    | define a ação ao enviar um formulário                          |

#### EventListener
Para adicionar um evento a um elemento podemos utilizar o addEventListener. Esta função adiciona um escutador de eventos ao elemento e permite que passemos uma função a ser utilizada quando o elemento receber i evento especificado.

É um manipulador e rastreador de eventos, onde é possível adicionar ou remover um evento sobre qualquer elemento. O Event Listener disponibiliza duas funções principais, são elas:

addEvent - Adiciona uma função que será disparada quando ocorrer determinado evento no objeto. O primeiro parâmetro é o tipo de evento e o segundo a ação (função) a ser performada quando o evento ocorrer.

removeEvent - Remove um listener previamente adicionado em um objeto e retorna true em caso de sucesso.


```javascript
let botao = document.querySelector('button')
botao.addEventListener('click', function () {
  alert("Botão foi clicado")
})
```

#### Atributo
Existe uma outra forma de adicionar os eventos a um elemento e é utilizando atributos. Dessa forma adicionamos uma função ao atributo do evento.

```javascript
let botao = document.querySelector('button')
botao.onclick = function () {
  alert("Botão foi clicado")
}
```


#### Diferenças

| addEventListener | atributo |
| :---------- | :----------------------------------------------------------- |
| permite que um elemento tenha mútiplas ações para um mesmo tipo de evento | permite que o elemento tenha apenas uma ação para cada tipo de evento |
| pode receber um terceiro argumento que controla a propagação de um evento | não consegue controlar a propação de um evento |
| só pode ser adicionado através da tag script do html ou por um arquivo externo de js | além das formas do addEventListener também pode ser adicionado diretamente no html |
| addEventListener não funciona em versões mais antigas do internet explorer que usa o attachEvent no lugar|funciona em todos os browsers |

#### PreventDefault
O método cancela o comportamento padrão (padrão) de um determinado elemento, ou seja, cancela o comportamento que os elementos geralmente tem na página.  Vale lembrar que nem todos os eventos podem ser cancelados.

Isso pode ser útil nesses cenários:

Ao clicar no botão "Enviar", evite que ele envie um formulário
Ao clicar em um link, impeça o link de seguir o URL

```javascript
let form = document.querySelector('form')
form.preventDefault()
```

***
### Exercícios 
* [Exercicio para sala](https://github.com/reprograma/on20-tet-s7-javascript-2/tree/main/exercicios/para-sala)
* [Exercicio para casa](https://github.com/reprograma/on20-tet-s7-javascript-2/tree/main/exercicios/para-casa)

### Material da aula 

### Links Úteis
- [Manipulação de dom - free code camp](https://www.freecodecamp.org/news/javascript-dom-manipulation/)
- [DOM - mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
- [Manipulação de DOM - tableless](https://tableless.com.br/entendendo-o-dom-document-object-model/)
- [Manipulaçao de DOM do zero - RocketSeat](https://www.youtube.com/watch?v=UftSB4DaRU4&list=WL&index=2&t=577s)


<p align="center">
Desenvolvido com :purple_heart:  
</p>

