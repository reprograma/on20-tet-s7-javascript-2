//Pedir o nome do usuário e o nome que digitar, coloca a tela de Boas-Vindas.

let nome = prompt("Qual o seu nome?")

let paragrafo = document.querySelector('p') //recebendo a TAG <p></p>

// let mensagem = "Seja bem-vinda, " + nome
let mensagem = `Seja bem-vinda, ${nome}`

paragrafo.innerHTML = mensagem;
//paragrafotextContent = mensagem;
// paragrafo.innerText = mensagem
