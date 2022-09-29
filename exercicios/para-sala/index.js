let nome = prompt("Digite o seu nome");

let paragrafo = document.querySelector('p');

// let mensagem = "Seja bem-vinda, " + nome

// let mensagem = "Olá " + nome + SEja bem-vinda,

let mensagem = ´Seja bem - vinda, ${nome}´

paragrafo.innerHTML = mensagem;