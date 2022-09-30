let produtos = [
    { 
        nome: "TV 20 polegadas", 
        categoria: "áudio e vídeo", 
        preco: 1500 
    },
    { 
        nome: "Aparelho de som", 
        categoria: "áudio e vídeo", 
        preco: 600
    },
    { 
        nome: "Caixa de som JBL", 
        categoria: "áudio e vídeo", 
        preco: 230
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
        nome: "Carregador de notebook Dell", 
        categoria: "informática", 
        preco: 140
    },
    { 
        nome: "Webcam", 
        categoria: "informática", 
        preco: 330
    },
    { 
        nome: "Monitor 24 polegadas", 
        categoria: "informática",
        preco: 900
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
        nome: "Sanduicheira", 
        categoria: "eletrodomésticos", 
        preco: 130
    },
    { 
        nome: "Fogão 4 bocas", 
        categoria: "eletrodomésticos", 
        preco: 680
    },
    { 
        nome: "Air fryer",
        categoria: "eletrodomésticos", 
        preco: 450
    }
]


//
  function resultado(filtrados){
    let listaHTML = "<ul>";
    filtrados.forEach(linha => {
      listaHTML = listaHTML+"<li>"+linha.nome+"</br>preço: "+ linha.preco+"</li>";
    });
    listaHTML = listaHTML+"</ul>"
    document.querySelector('#resultado').innerHTML = listaHTML;
  
 // produtos.nome.style.fontSize = "2rem";
  produtos.style.fontSize = '50px';
  filtrados.style.backgroundColor = "#FF0F0F";
}



//  eletrodomésticos
let eletrodomesticos = document.querySelector('#eletrodomesticos');
  eletrodomesticos.addEventListener("click", escreverEletrodomesticos);
function filtrarEletrodomesticos(produto){
    return produto.categoria == "eletrodomésticos";
  }
function escreverEletrodomesticos(){
    let listaEletrodomesticos = produtos.filter(filtrarEletrodomesticos);
    resultado(listaEletrodomesticos);
  }
//
let informatica = document.querySelector('#informatica');
  informatica.addEventListener("click", escreverInformatica);  
  function filtrarInformatica(produto){
    return produto.categoria == "informática";
  }
  function escreverInformatica(){
    let listaInformatica = produtos.filter(filtrarInformatica);
    resultado(listaInformatica);
  }
// 
let audioevideo = document.querySelector('#audioevideo');
  audioevideo.addEventListener("click", escreverAudioEvideo);
  function filtrarAudioEvideo(produto){
    return produto.categoria == "áudio e vídeo";
  }
   function escreverAudioEvideo(){
     let listaAudioEvideo = produtos.filter(filtrarAudioEvideo);
     resultado(listaAudioEvideo);
   }
// ate 100
let ate100 = document.querySelector('#ate100');
ate100.addEventListener("click", escreverAte100);
  function filtrarAte100(produto){
    return produto.preco <= 100;
  }
   function escreverAte100(){
     let listaAte100 = produtos.filter(filtrarAte100);
     resultado(listaAte100);
   }
// de 101 a 500
let de101a500 = document.querySelector('#de101a500');
de101a500.addEventListener("click", escreverDe101a500);
  function filtrarDe101a500(produto){
    return produto.preco > 100 && produto.preco <= 500;
  }
   function escreverDe101a500(){
     let listaDe101a500 = produtos.filter(filtrarDe101a500);
     resultado(listaDe101a500);
   }
// acima de 500 reais
let acima500 = document.querySelector('#acima500');
acima500.addEventListener("click", escreverAcima500);
  function filtrarAcima500(produto){
    return produto.preco > 500;
  }
   function escreverAcima500(){
     let listaAcima500 = produtos.filter(filtrarAcima500);
     resultado(listaAcima500);
   }
