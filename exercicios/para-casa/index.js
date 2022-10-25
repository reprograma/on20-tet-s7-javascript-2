let produtos = [{nome: "TV 20 polegadas", categoria: "áudio e vídeo", preco: 1500},
    {nome: "Mouse", categoria: "informática", preco: 70},
    {nome: "Teclado", categoria: "informática", preco: 350},
    {nome: "Aparelho de som", categoria: "áudio e vídeo", preco: 600},
    {nome: "Sanduicheira", categoria: "eletrodomésticos", preco: 130},
    {nome: "Microondas 20L", categoria: "eletrodomésticos", preco: 800},
    {nome: "Geladeira frost free", categoria: "eletrodomésticos", preco: 2100},
    {nome: "Carregador de notebook Dell", categoria: "informática", preco: 140},
    {nome: "Caixa de som JBL", categoria: "áudio e vídeo", preco: 230},
    {nome: "Webcam", categoria: "informática", preco: 330},
    {nome: "Fogão 4 bocas", categoria: "eletrodomésticos", preco: 680},
    {nome: "Monitor 24 polegadas", categoria: "informática", preco: 900},
    {nome: "Air fryer", categoria: "eletrodomésticos", preco: 450}]

const menuAueVid = document.querySelector(`#btnAueVid`); 
const menuInfo = document.querySelector(`#btnInfo`); 
const menuEletro = document.querySelector(`#btnEletro`); 
const precoMinimo = document.querySelector(`#btnMenor`); 
const precoMediano = document.querySelector(`#btnMedio`); 
const precoAcima = document.querySelector(`#btnMaior`); 

function filtroAueVid() {
    produtos.filter(function (produtos) {
        return produtos.categoria == 'áudio e vídeo'})};
function filtroInform() {
    produtos.filter(function (produtos) {
        return produtos.categoria == 'informática'})};
function filtroEletro() {
    produtos.filter(function (produtos) {
        return produtos.categoria == 'eletrodomésticos'})};

function escrevendoFinal (elemento){
    let conjunto = "<ul>";
    elemento.map(linha => {conjunto = conjunto + "<li>" +" Produto: "+  linha.nome + "   " + "R$" + linha.preco + "</li>";});
    let paragrafoFinal = document.querySelector('#resultadoProd');
    paragrafoFinal.innerHTML = conjunto};
  
function retornoAueVid(){
    let filtroAueVid = produtos.filter(function (produtos) {
        return produtos.categoria == 'áudio e vídeo'})
    escrevendoFinal(filtroAueVid)};
function retornoInfo(){
    let filtroInform = produtos.filter(function (produtos) {
        return produtos.categoria == 'informática'})
    escrevendoFinal(filtroInform)};
function retornoEletro(){
    let filtroEletro = produtos.filter(function (produtos) {
        return produtos.categoria == 'eletrodomésticos'})
escrevendoFinal(filtroEletro)};

menuEletro.addEventListener("click", retornoEletro);
menuInfo.addEventListener("click", retornoInfo);
menuAueVid.addEventListener("click", retornoAueVid);
precoMinimo.addEventListener("click", retornoPrecoBaixo);
precoMediano.addEventListener("click", retornoPrecoMedio);
precoAcima.addEventListener("click", retornoPrecoAlto);

function precoBaixo (){
    produtos.filter(function (produtos) {
        return produtos.preco <= 100})};
function precoMedio (){
    produtos.filter(function (produtos) {
        return produtos.preco >= 101 && produtos.preco <= 500})};
function precoAlto (){
    produtos.filter(function (produtos) {
        return produtos.preco >= 501})};

function retornoPrecoBaixo(){
    let precoBaixo = produtos.filter(function (produtos) {
        return produtos.preco <= 100})
    escrevendoFinal(precoBaixo)};
function retornoPrecoMedio(){
    let precoMedio = produtos.filter(function (produtos) {
        return produtos.preco >= 101 && produtos.preco <= 500})
    escrevendoFinal(precoMedio)};
function retornoPrecoAlto(){
    let precoAlto = produtos.filter(function (produtos) {
        return produtos.preco >= 501})
    escrevendoFinal(precoAlto)};