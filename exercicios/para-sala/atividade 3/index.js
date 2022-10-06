let nome = prompt("qual o seu nome?")

let paragrafo = 
document.getElementById("Nome-fulana")

//let mensagem = "Seja bem-vinda," +  nome
//let mensagem = "Olá" + nome + ". Seja bem-vinda, ao meu site"
let mensagem = `Seja bem-vinda,  ${nome}`

//paragrafo.textContent= mensagen;
//paragrafo.innerText = mensagem;
//paragrafo.innerHTML = ` Seja bem-vinda, ${nome}`;

paragrafo.innerHTML = mensagem


