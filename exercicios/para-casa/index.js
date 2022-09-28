let produtos = [
  { nome: "TV 20 polegadas", categoria: "áudio e vídeo", preco: 1500 },
  { nome: "Aparelho de som", categoria: "áudio e vídeo", preco: 600},
  { nome: "Caixa de som JBL", categoria: "áudio e vídeo", preco: 230},
  { nome: "Mouse", categoria: "informática", preco: 70 },
  { nome: "Teclado",categoria: "informática",preco: 350 },
  { nome: "Carregador de notebook Dell", categoria: "informática", preco: 140},
  { nome: "Webcam", categoria: "informática", preco: 330},
  { nome: "Monitor 24 polegadas", categoria: "informática",preco: 900},
  { nome: "Microondas 20L", categoria: "eletrodomésticos", preco: 800 },
  { nome: "Geladeira frost free", categoria: "eletrodomésticos", preco: 2100},
  { nome: "Sanduicheira", categoria: "eletrodomésticos", preco: 130},
  { nome: "Fogão 4 bocas", categoria: "eletrodomésticos", preco: 680},
  { nome: "Air fryer",categoria: "eletrodomésticos", preco: 450}
  ]
  

/* aponto o botão na variável que irei utilizar no JS (EXERCÍCIO)*/

 let btn_audioevideo = document.querySelector('#btn-audioevideo');
 let btn_informatica = document.querySelector('#btn-informatica');
 let btn_eletrodomesticos = document.querySelector('#btn-eletrodomesticos');


/* função de escrever na tela que será chamada pelas outras funções, a listHTML foi criada para tirar do formato de objeto e colocar em formato de HTML para exibir na tela. A caixa foi criada para colocar o html gerado dentro dela com o querySelector e o innerHTML (EXERCÍCIO)*/

function escreverTela(listaFiltrada){
  let listaHTML = "<ul>";
  listaFiltrada.forEach(linha => {
    listaHTML = listaHTML+"<li>"+linha.nome+" "+linha.categoria+" "+ linha.preco+"</li>";
  });
  listaHTML = listaHTML+"</ul>"
 
  let caixa_produtos = document.querySelector('#caixa-produtos-html');
  caixa_produtos.innerHTML = listaHTML;
}

// função filtrar para cada categoria, com o retorno do objeto inteiro e compara com a condição de categoria do filtro (EXERCÍCIO)

function filtrarEletrodomesticos(produto){
  return produto.categoria == "eletrodomésticos";
}

function filtrarInformatica(produto){
  return produto.categoria == "informática";
}

function filtrarAudioEvideo(produto){
  return produto.categoria == "áudio e vídeo";
}


// função escrever na tela para cada categoria, pega a resposta da função filter, coloca na variável listaExemplo, depois utilizar a função escreverTela para exibir o resultado em html na página.(EXERCÍCIO)

function escreverEletrodomesticos(){
  let listaEletrodomesticos = produtos.filter(filtrarEletrodomesticos);
escreverTela(listaEletrodomesticos);
}

function escreverInformatica(){
  let listaInformatica = produtos.filter(filtrarInformatica);
escreverTela(listaInformatica);
}

 function escreverAudioEvideo(){
   let listaAudioEvideo = produtos.filter(filtrarAudioEvideo);
  //  console.log(listaAudioEvideo);
  escreverTela(listaAudioEvideo);
 }

// colocar o evento de chamar a função de filtrar dos botões. (EXERCÍCIO)

btn_eletrodomesticos.addEventListener("click", escreverEletrodomesticos);

btn_informatica.addEventListener("click", escreverInformatica);

btn_audioevideo.addEventListener("click", escreverAudioEvideo);




// variáveis dos botões (OPCIONAL)
let btnPrecoQuinhentos = document.querySelector('#btnPrecoQuinhentos');
let btnPrecoMil = document.querySelector('#btnPrecoMil');
let btnPrecoMileQuinhentos = document.querySelector('btnPrecoMileQuinhentos');
let btnPrecoDoisMil = document.querySelector('btnPrecoDoisMil');

// console.log(produtosPrecoMil);
// console.log(produtosPrecoMileQuinhentos);
// console.log(produtosPrecoDoisMil);


// função filtrar e depois escrever na tela para cada categoria utilizando lambda (OPCIONAL)
function filtrarprodutosPrecoQuinhentos(){
  const produtosPrecoQuinhentos = produtos.filter((produtos)=>produtos.preco <= 500);
  escreverTela(produtosPrecoQuinhentos);
}

function filtrarprodutosPrecoMil(){
  const produtosPrecoMil = produtos.filter((produtos)=>produtos.preco <= 1000);
   escreverTela(produtosPrecoMil);
}

function filtrarprodutosPrecoMileQuinhentos(){
  const produtosPrecoMileQuinhentos = produtos.filter((produtos)=>produtos.preco <= 1500);
  escreverTela(produtosPrecoMileQuinhentos);
}

function filtrarprodutosPrecoDoisMil(){
  const produtosPrecoDoisMil = produtos.filter((produtos)=>produtos.preco > 2000);
  escreverTela(produtosPrecoDoisMil);
}

