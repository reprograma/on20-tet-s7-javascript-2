// SELEÇÃO DE ELEMENTOS

document.getElementById('titulo-1')
// <h1 id=​"titulo">​Oi, eu sou a Margareth Hamilton​</h1>​
document.getElementById('subtitulo')
// <h2 id=​"subtitulo">​Um pouco mais sobre mim​</h2>​
document.getElementById('paragrafo')
// null -> quando o elemento não existe retorna nulo
let tituloVariavel = document.getElementById('titulo')
tituloVariavel
// <h1 id=​"titulo">​Oi, eu sou a Margareth Hamilton​</h1>​

document.getElementsByClassName('sobre')
// [div.sobre] 
document.getElementsByClassName('redes-sociais-botao')
// [a.redes-sociais-botao, a.redes-sociais-botao, a.redes-sociais-botao, a.redes-sociais-botao]

let divisoes = document.getElementsByTagName('div')

document.querySelector('.descricao p')
// <p>​…​</p>​"Eu sou "<strong>​Margaret Hamilton​</strong>​", sou empresária, engenheira de software e cientista da computação e adoro escrever códigos."</p>​ 
document.querySelector('.descricao p:nth-child(2)')
// <p>​…​</p>​"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, delectus. Culpa officia veritatis quas distinctio cumque nisi earum vero numquam, quod nostrum a est dicta natus?"</p>​
document.querySelectorAll('.descricao p')
// [p, p]
document.querySelector('#titulo')
//  <h1 id=​"titulo">​Oi, eu sou a Margareth Hamilton​</h1>​ 
// document.querySelector('.sobre')
//  <div class=​"sobre" id=​"sobremim">​…​</div>​ 

// -----------------------------------------------------------------
// MANIPULACAO DE CSS

tituloVariavel
//  <h1 id=​"titulo">​Oi, eu sou a Margareth Hamilton​</h1>​ 

// ATRIBUTO STYLE
tituloVariavel.style.color = 'yellow'
tituloVariavel.style.backgroundColor = '#000000'

// CLASSLIST
tituloVariavel.classList.add('vermelho') 
tituloVariavel
// <h1 id=​"titulo" style=​"background-color:​ rgb(0, 0, 0)​;​" class=​"vermelho">​Oi, eu sou a Margareth Hamilton​</h1>​ 

// adiciona a classe grande
tituloVariavel.classList.add('grande')

// remove a classe grande
tituloVariavel.classList.remove('grande')

//alterna a classe grande na lista, ou seja, se já tiver a classe ele remove e se não tiver ele adiciona
tituloVariavel.classList.toggle('grande')
// true
tituloVariavel.classList.toggle('grande')
// false
tituloVariavel.classList.toggle('grande')
// true


//------------------------------------------------------------

//MANIPULACAO DE CONTEUDO

tituloVariavel.innerHTML
'Oi, eu sou a Margareth Hamilton'
let botao = document.querySelector(".redes-sociais-botao")
botao
//  <a href=​"https:​/​/​www.facebook.com/​" target=​"_blank" class=​"redes-sociais-botao">​…​</a>​ flex 
botao.innerHTML 
// '\n                <img src="./imagens/facebook.png" alt="logo do facebook">\n                <h4>Facebook</h4>\n                <p>/MargarethHamilton</p>\n            '
tituloVariavel.innerHTML = 'Oi, eu sou a Ana Morita'
// 'Oi, eu sou a Ana Morita'
tituloVariavel.textContent
// 'Oi, eu sou a Ana Morita'
let paragrafo = document.querySelector('.descricao p')
paragrafo
//  <p>​…​</p>​ 
paragrafo.innerHTML
// 'Eu sou <strong>Margaret Hamilton</strong>, sou empresária, engenheira de software e cientista da computação e adoro escrever códigos.'
paragrafo.textContent
// 'Eu sou Margaret Hamilton, sou empresária, engenheira de software e cientista da computação e adoro escrever códigos.'
paragrafo.textContent = 'Eu sou Margaret Hamilton, sou empresária, engenheira de software e cientista da computação e adoro escrever códigos.'
'Eu sou Margaret Hamilton, sou empresária, engenheira de software e cientista da computação e adoro escrever códigos.'
// paragrafo.textContent = 'Eu sou <strong>Margaret Hamilton</strong>, sou empresária, engenheira de software e cientista da computação e adoro escrever códigos.'
paragrafo.innerHTML = 'Eu sou <strong>Margaret Hamilton</strong>, sou empresária, engenheira de software e cientista da computação e adoro escrever códigos.'
paragrafo.innerText
// 'Eu sou Margaret Hamilton, sou empresária, engenheira de software e cientista da computação e adoro escrever códigos.'

// ----------------------------------------------------------

// MANIPULANDO A ARVORE DO DOM
let novoParagrafo = document.createElement('p')
novoParagrafo
//  <p>​</p>​ 
novoParagrafo.innerHTML = "Texto Novo"
// 'Texto Novo'
novoParagrafo
//  <p>​Texto Novo​</p>​ 
let section = document.querySelector(".descricao")
section
//  <div class=​"descricao">​…​</div>​ 
section.appendChild(novoParagrafo)
//  <p>​Texto Novo​</p>​ 
section.removeChild(novoParagrafo)
//  <p>​Texto Novo​</p>​ 
let irmao = document.querySelector('.descricao button')
irmao
//  <button>​Veja meu cv​</button>​ 
section.insertBefore(novoParagrafo, irmao)
//  <p>​Texto Novo​</p>​ 
section.parentElement
//  <div class=​"sobre">​…​</div>​<h2>​Um pouco mais sobre mim​</h2>​<div class=​"descricao">​…​</div>​<div class=​"habilidades">​…​</div>​</div>​ 
section.nextElementSibling
//  <div class=​"habilidades">​…​</div>​
section.previousElementSibling
// <h2>​Um pouco mais sobre mim​</h2>​ 
section.previousSibling
// #text
section.childNodes
// [text, p, text, p, text, p, button, text]
section.children
// [p, p, p, button]
section.lastElementChild
//  <button>​Veja meu cv​</button>​ 
section.lastChild
// #text
section.firstElementChild
//  <p>​…​</p>​ 
section.firstChild
// #text
irmao

//---------------------------------------------------------------

// EVENTOS
//  <button>​Veja meu cv​</button>​ 
let botaoCV = document.querySelector('.descricao button')
botaoCV
//  <button>​Veja meu cv​</button>​ 
function alertar () {
    alert("O botao foi clicado")
}
botaoCV.addEventListener('click',alertar)

function alertar () {
    alert("O mouse está sobre o botao")
}
botaoCV.addEventListener('mouseover', alertar2)

function alertar2 () {
  alert("O mouse está sobre o botao")
}
botaoCV.addEventListener('mouseover', alertar2)
botaoCV.addEventListener('mouseout', alertar2)