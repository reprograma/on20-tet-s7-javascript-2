let nome = prompt("Digite o seu nome"); // MICA

let paragrafo = document.querySelector('p') // <p></p>
// let paragrafo = document.createElement('p')

// let mensagem = "Seja bem-vinda, " + nome
// let mensagem = "Olá " + nome + ". Seja bem-vinda, ao meu site"
let mensagem = `Seja bem-vinda, ${nome}` // "Seja bem-vinda, MICA"

paragrafo.innerHTML = mensagem; // <p>Seja bem-vinda, MICA</p>
// paragrafo.textContent = mensagem;
// paragrafo.innerText = mensagem;
// paragrafo.innerHTML = `Seja bem-vinda, ${nome}`;

// let paragrafo = document.querySelectorAll('p') // [<p></p>]
// paragrafo[0].innerHTML = mensagem; // <p>Seja bem-vinda, MICA</p>

// let paragrafo = document.getElementsByTagName('p') // [<p></p>]
// paragrafo[0].innerHTML = mensagem; // <p>Seja bem-vinda, MICA</p>

// let tagBody = document.querySelector('body');
// tagBody.appendChild(paragrafo);
