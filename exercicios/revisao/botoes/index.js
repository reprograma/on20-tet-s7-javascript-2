let divs = document.querySelectorAll('div')

function trocarCorDiv(evento) {
  console.log(evento)
  evento.target.classList.toggle('vermelho') // evento.target é quem recebe o evento ou seja um elemento do html
}

function adicionarClick(elemento) {
  elemento.addEventListener('click', trocarCorDiv)
}

divs.forEach(adicionarClick)
