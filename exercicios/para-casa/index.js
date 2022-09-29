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
  
   let btn_audioevideo = document.querySelector('#btn-audioevideo');
   let btn_informatica = document.querySelector('#btn-informatica');
   let btn_eletrodomesticos = document.querySelector('#btn-eletrodomesticos');
       
  function escreverTela(listaFiltrada){
    let listaHTML = "<ul>";
    listaFiltrada.forEach(linha => {
      listaHTML = listaHTML+"<li>"+linha.nome+" "+linha.categoria+" "+ linha.preco+"</li>";
    });
    listaHTML = listaHTML+"</ul>"
  
    let caixa_produtos = document.querySelector('#caixa-produtos-html');
    caixa_produtos.innerHTML = listaHTML;
  }
      
  function filtrarEletrodomesticos(produto){
    return produto.categoria == "eletrodomésticos";
  }
  
  function filtrarInformatica(produto){
    return produto.categoria == "informática";
  }
  
  function filtrarAudioEvideo(produto){
    return produto.categoria == "áudio e vídeo";
  }
        
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
    escreverTela(listaAudioEvideo);
   }
  
  btn_eletrodomesticos.addEventListener("click", escreverEletrodomesticos);
  
  btn_informatica.addEventListener("click", escreverInformatica);
  
  btn_audioevideo.addEventListener("click", escreverAudioEvideo);
  
  let btnPrecoQuinhentos = document.querySelector('#btnPrecoQuinhentos');
  let btnPrecoMil = document.querySelector('#btnPrecoMil');
  let btnPrecoMileQuinhentos = document.querySelector('btnPrecoMileQuinhentos');
  let btnPrecoDoisMil = document.querySelector('btnPrecoDoisMil');
  
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
  //