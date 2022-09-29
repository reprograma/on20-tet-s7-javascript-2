const produtos = [
    { nome: "TV 20 polegadas", categoria: "áudio e vídeo", preco: 1500}, 
    { nome: "Mouse", categoria: "informática", preco: 70 }, 
    { nome: "Teclado", categoria: "informática", preco: 350 }, 
    { nome: "Aparelho de som", categoria: "áudio e vídeo", preco: 600 }, 
    { nome: "Sanduicheira", categoria: "eletrodomésticos", preco: 130 }, 
    { nome: "Microondas 20L", categoria: "eletrodomésticos", preco: 800}, 
    { nome: "Geladeira frost free", categoria: "eletrodomésticos", preco: 2100 }, 
    { nome: "Carregador de notebook Dell", categoria: "informática", preco: 140 }, 
    { nome: "Caixa de som JBL", categoria: "áudio e vídeo", preco: 230 }, 
    { nome: "Webcam", categoria: "informática", preco: 330 }, 
    { nome: "Fogão 4 bocas", categoria: "eletrodomésticos", preco: 680 }, 
    { nome: "Monitor 24 polegadas", categoria: "informática", preco: 900 }, 
    { nome: "Air fryer", categoria: "eletrodomésticos", preco: 450 } 
  ]
  
  // Só executa quando eu clico no botão
  function filtrarItens(categoria) {
      const lista = document.querySelector('ul');
    // limpa a lista
    lista.innerHTML = '';
    
    produtos.forEach((produto) => {
        if (produto.categoria === categoria) {
          const itemLista = document.createElement('li');
        itemLista.textContent = produto.nome
        lista.appendChild(itemLista)
      }  
    })
  }
  
  function adicionarProdutosNaLista() {
      const lista = document.querySelector('ul');
      
      produtos.forEach((produto) => {
      const itemLista = document.createElement('li');
      itemLista.textContent = produto.nome
      lista.appendChild(itemLista)
    })
  } 
  
  // Executa a função acima quando carrega a pagina
  adicionarProdutosNaLista()