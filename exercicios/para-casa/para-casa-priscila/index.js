let produtos = [
    {nome: "TV 20 polegadas",categoria: "áudio e vídeo",preco: 1500},
    {nome: "Mouse",categoria: "informática",preco: 70},
    {nome: "Teclado",categoria: "informática",preco: 350},
    {nome: "Aparelho de som",categoria: "áudio e vídeo",preco: 600},
    {nome: "Sanduicheira",categoria: "eletrodomésticos",preco: 130},
    {nome: "Microondas 20L",categoria: "eletrodomésticos",preco: 800},
    {nome: "Geladeira frost free",categoria: "eletrodomésticos",preco: 2100},
    {nome: "Carregador de notebook Dell",categoria: "informática",preco: 140},
    {nome: "Caixa de som JBL",categoria: "áudio e vídeo",preco: 230},
    {nome: "Webcam",categoria: "informática",preco: 330},
    {nome: "Fogão 4 bocas",categoria: "eletrodomésticos",preco: 680},
    {nome: "Monitor 24 polegadas",categoria: "informática",preco: 900},
    {nome: "Air fryer",categoria: "eletrodomésticos",preco: 450}];
    
    
    function filterByInformatica(produto) {
        return produto.categoria == 'informática';
    }
    
    function filterByEletrodomesticos(produto) {
        return produto.categoria == 'eletrodomésticos';
    }
    
    function filterByAudioVideo(produto) {
        return produto.categoria == 'áudio e vídeo';
    }
    
    function filterByPreco100(produto) {
        return produto.preco <= 100;
    }
    
    function filterByPreco101a500(produto) {
        return produto.preco >= 101 && produto.preco <= 500;
    }
    
    function filterByPreco500(produto) {
        return produto.preco > 500;
    }
    
    
    function exibirInformatica() {
        let div = document.querySelector('div');
        div.innerHTML = '';
    
        let produtosInformatica = produtos.filter(filterByInformatica);
    
        produtosInformatica.forEach(produto => {
            let novoParagrafo = document.createElement('p')
            novoParagrafo.innerHTML = produto.nome;
            div.appendChild(novoParagrafo);
        });
    }
    
    function exibirEletrodomesticos() {
        let div = document.querySelector('div');
        div.innerHTML = '';
    
        let produtosEletrodomestico = produtos.filter(filterByEletrodomesticos);
    
        produtosEletrodomestico.forEach(produto => {
            let novoParagrafo = document.createElement('p')
            novoParagrafo.innerHTML = produto.nome;
            div.appendChild(novoParagrafo);
        });
    }
    
    function exibirAudioVideo() {
        let div = document.querySelector('div');
        div.innerHTML = '';
    
        let produtosAudioVideo = produtos.filter(filterByAudioVideo);
    
        produtosAudioVideo.forEach(produto => {
            let novoParagrafo = document.createElement('p')
            novoParagrafo.innerHTML = produto.nome;
            div.appendChild(novoParagrafo);
        });
    }
    
    function exibirPreco100() {
        let div = document.querySelector('div');
        div.innerHTML = '';
    
        let produtosPreco100 = produtos.filter(filterByPreco100);
    
        produtosPreco100.forEach(produto => {
            let novoParagrafo = document.createElement('p')
            novoParagrafo.innerHTML = produto.nome;
            div.appendChild(novoParagrafo);
        });
    }
    
    function exibirPreco101a500() {
        let div = document.querySelector('div');
        div.innerHTML = '';
    
        let produtosPreco101a500 = produtos.filter(filterByPreco101a500);
    
        produtosPreco101a500.forEach(produto => {
            let novoParagrafo = document.createElement('p')
            novoParagrafo.innerHTML = produto.nome;
            div.appendChild(novoParagrafo);
        });
    }
    
    function exibirPreco500() {
        let div = document.querySelector('div');
        div.innerHTML = '';
    
        let produtosPreco500 = produtos.filter(filterByPreco500);
    
        produtosPreco500.forEach(produto => {
            let novoParagrafo = document.createElement('p')
            novoParagrafo.innerHTML = produto.nome;
            div.appendChild(novoParagrafo);
        });
    }
    
    let botaoInformatica = document.getElementById("informatica");
    let botaoEletrodomesticos = document.getElementById("eletrodomesticos");
    let botaoAudioVideo = document.getElementById("audio_video");
    
    let botaoPreco100 = document.getElementById("preco_100");
    let botaoPreco101a500 = document.getElementById("preco_101_500");
    let botaoPreco500 = document.getElementById("preco_500");
    
    
    botaoInformatica.addEventListener('click', exibirInformatica);
    botaoEletrodomesticos.addEventListener('click', exibirEletrodomesticos);
    botaoAudioVideo.addEventListener('click', exibirAudioVideo);
    
    botaoPreco100.addEventListener('click', exibirPreco100);
    botaoPreco101a500.addEventListener('click', exibirPreco101a500);
    botaoPreco500.addEventListener('click', exibirPreco500);
    