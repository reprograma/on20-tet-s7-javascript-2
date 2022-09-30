let nomeInput = document.getElementById('nome')
let emailInput = document.getElementById('email')
let senhaInput = document.getElementById('senha')
let formulario = document.querySelector('form')

function cadastrarUsuario(evento) {
  evento.preventDefault();

  const valorNome = nomeInput.value;
  const valorEmail = emailInput.value;
  const valorSenha = senhaInput.value;

  let p = document.createElement('p');
  p.innerText = `Cadastro realizado com sucesso! \n Nome: ${valorNome} \n Email: ${valorEmail} \n Senha: ${valorSenha}`;

  let div = document.querySelector('div');
  div.appendChild(p)
}

function comparar(numero) {
  return numero > 10
} 


formulario.addEventListener('submit', cadastrarUsuario)