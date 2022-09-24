let inserirNome = (prompt("Qual o seu nome?"))

let paragrafo = document.querySelector('p')

let mensagem = " Olá, " + inserirNome + " Seja bem-vinda ao nosso site!! " 

paragrafo.innerHTML = mensagem
// paragrafo.innerText = mensagem
// paragrafo.textContent = mensagem


