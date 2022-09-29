// ARRAY COM OBJETOS
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
// CONSTANTES 
const menuAeV = document.querySelector(`#btnAeV`); // BUTTON DE ÁUDIO E VÍDEO
const menuInfo = document.querySelector(`#btnInfo`); // BUTTON DE ELETRODOMÉSTICOS
const menuEletro = document.querySelector(`#btnEletro`); // BUTTON INFORMÁTICA
const precoMinimo = document.querySelector(`#btnMenor`); // BUTTON DE PREÇO MENOR
const precoMediano = document.querySelector(`#btnMedio`); // BUTTON DE PREÇO MEDIANO
const precoAcima = document.querySelector(`#btnMaior`); // BUTTON DE PREÇO MAIOR
//FUNCTION PARA FILTRAR OS PRODUTOS
function filtroAeV() {
    produtos.filter(function (produtos) {
        return produtos.categoria == 'áudio e vídeo'})};
function filtroInfo() {
    produtos.filter(function (produtos) {
        return produtos.categoria == 'informática'})};
function filtroEletro() {
    produtos.filter(function (produtos) {
        return produtos.categoria == 'eletrodomésticos'})};
//FUNCTION QUE COLOCA O TEXTO NO PARAGRAFO FINAL DO HTML QUE EU FIQUEI TRES ANOS PROCURANDO NA INTERNET
function escrevendoFinal (elemento){
    let conjunto = "<ul>";
    elemento.map(linha => {conjunto = conjunto + "<li>" +" Produto: "+  linha.nome + "   " + "R$" + linha.preco + "</li>";});
    let paragrafoFinal = document.querySelector('#resultadoProd');
    paragrafoFinal.innerHTML = conjunto};
//FUNCTION PARA ESCREVER PRODUTOS
function retornoAeV(){
    let filtroAeV = produtos.filter(function (produtos) {
        return produtos.categoria == 'áudio e vídeo'})
    escrevendoFinal(filtroAeV)};
function retornoInfo(){
    let filtroInfo = produtos.filter(function (produtos) {
        return produtos.categoria == 'informática'})
    escrevendoFinal(filtroInfo)};
function retornoEletro(){
    let filtroEletro = produtos.filter(function (produtos) {
        return produtos.categoria == 'eletrodomésticos'})
escrevendoFinal(filtroEletro)};
//EVENTOS DE CLIQUE
menuEletro.addEventListener("click", retornoEletro);
menuInfo.addEventListener("click", retornoInfo);
menuAeV.addEventListener("click", retornoAeV);
precoMinimo.addEventListener("click", retornoPrecoBaixo);
precoMediano.addEventListener("click", retornoPrecoMedio);
precoAcima.addEventListener("click", retornoPrecoAlto);
//FUNCTIONS PARA FILTRAR PREÇOS
function precoBaixo (){
    produtos.filter(function (produtos) {
        return produtos.preco <= 100})};
function precoMedio (){
    produtos.filter(function (produtos) {
        return produtos.preco >= 101 && produtos.preco <= 500})};
function precoAlto (){
    produtos.filter(function (produtos) {
        return produtos.preco >= 501})};
//FUNCTIONS PARA ESCREVER PREÇOS
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