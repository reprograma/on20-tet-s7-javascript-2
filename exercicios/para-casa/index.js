let produtos = [
    {
      nome: "TV 20 polegadas",
      categoria: "áudio e vídeo",
      preco: 1500
    },
    {
      nome: "Mouse",
      categoria: "informática",
      preco: 70
    },
    {
      nome: "Teclado",
      categoria: "informática",
      preco: 350 
    },
    {
      nome: "Aparelho de som",
      categoria: "áudio e vídeo",
      preco: 600
    },
    {
      nome: "Sanduicheira",
      categoria: "eletrodomésticos",
      preco: 130
    },
    {
      nome: "Microondas 20L",
      categoria: "eletrodomésticos",
      preco: 800
    },
    {
      nome: "Geladeira frost free",
      categoria: "eletrodomésticos",
      preco: 2100
    },
    {
      nome: "Carregador de notebook Dell",
      categoria: "informática",
      preco: 140
    },
    {
      nome: "Caixa de som JBL",
      categoria: "áudio e vídeo",
      preco: 230
    },
    {
      nome: "Webcam",
      categoria: "informática",
      preco: 330
    },
    {
      nome: "Fogão 4 bocas",
      categoria: "eletrodomésticos",
      preco: 680
    },
    {
      nome: "Monitor 24 polegadas",
      categoria: "informática",
      preco: 900
    },
    {
      nome: "Air fryer",
      categoria: "eletrodomésticos",
      preco: 450
    }
  ]

let botoesCategoria = document.querySelectorAll('button');

function listarProdutos(listaProdutos) {
  let section = document.querySelector('section')
  let listaExistente = document.querySelectorAll('.produto')


  if (listaExistente.length > 0) {
    listaExistente.forEach(function (itemListaExistente) {
      section.removeChild(itemListaExistente);
    })
  }


  listaProdutos.forEach(function (produtoASerListado) {
    let p = document.createElement('p')
    p.classList.add('produto')
    p.innerText = `Procuto: ${produtoASerListado.nome} \n Preço: ${produtoASerListado.
    preco}`;
    section.appendChild(p);
  })
}

function filtrarProdutos(evento) {
  let produtosFiltrados = [];
  produtosFiltrados = produtos.filter(function (produto) {
    return produto.categoria === evento.target.innerText;
  })
  listarProdutos(produtosFiltrados);
}


//ADICIONAR UM EVENTO A UM ELEMENTO DO HTML
//elemento.addEventListener('nome do evento' funcao)

// FORMA 1 DE ADICIONAR O EVENTO NOS BOTOES
// botoesCategoria[0].addEdventListener('click', filtrarProdutos)
// botoesCategoria[1].addEdventListener('click', filtrarProdutos)
// botoesCategoria[2].addEdventListener('click', filtrarProdutos)

// FORMA 2 DE ADICIONAR O EVENTO NOS BOTOES
for(let botao of botoesCategoria) {
  botao.addEventListener('click', filtrarProdutos);
}