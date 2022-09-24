let input = document.querySelector('input')
let botao = document.querySelector('button')
let body = document.querySelector('body')

function comprimentarUsuario() {
  let valorDoInput = input.value;
  let mensagem = `Seja bem-vinda, ${valorDoInput}`;
  let novoParagrafo = document.createElement('p')
  novoParagrafo.innerHTML = mensagem;
  body.appendChild(novoParagrafo);
}

botao.addEventListener('click', comprimentarUsuario)
