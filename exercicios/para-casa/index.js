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

// let infor = document.getElementById('infor')
// let audioVideo = document.getElementById('audioVideo')
// let eletro = document.getElementById('eletro')
let body = document.querySelector('body')
let lista = document.querySelector('ul')

function filtrarProduto(filtro) {
    lista.innerHTML = ""
    for (let indice = 0; indice < produtos.length; indice++ ){
        if (filtro === produtos[indice].categoria){
            let li = document.createElement('li')
            //  nome
            let nome = document.createElement('strong')
            nome.innerHTML = produtos[indice].nome
            //  categoria
            let categoria = document.createElement('p')
            categoria.innerHTML = produtos[indice].categoria
            //  preço
            let preco = document.createElement('p')
            preco.innerHTML = produtos[indice].preco
            
            li.append(nome, categoria, preco)
            lista.appendChild(li)
        }
    }
    
}

// infor.addEventListener("click", filtrarProduto("informática"));
// audioVideo.addEventListener("click", filtrarProduto("áudio e vídeo"));
// eletro.addEventListener("click", filtrarProduto("eletrodomésticos"));

// OBSERVAÇÃO (O navegador está com problema, ele não executa a função AddListener)