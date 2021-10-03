//SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>Olá</i>'

//SELETOR POR TAG
//querySelector seleciona apenas o PRIMEIRO ELEMENTO, se quiser selecionar todos é preciso colocar querySelectorALL.
//innerHTML permite adicionar TAG, se for innerTEXT entederá as tags como TEXTO. 
document.querySelector('a').innerText = 'testando'


//SELECIONANDO MAIS DE 1 ITEM POR TAG
//forEach é um método para ARRAYS, sempre que o anterior for um ARRAY, pode se utilizar um forEach
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ //FUNÇÃO ANONIMA / CALLBACK.
    console.log(elemento)
})


// SELECIONANDO MAIS DE 1 ITEM POR CLASSE.
let boxes = document.querySelectorAll('.box')


let numeros = 0
boxes.forEach(function(box){
    numeros++
    box.innerHTML = ' bem-vindo ' + numeros
})


let cxs = document.querySelectorAll('.caixa')

cxs.forEach(function(caix, nmr){
    caix.innerHTML = ' Welcome ' + (nmr + 1)
})


let square = document.querySelectorAll('.sqr')

let number = 0
square.forEach(function(bloco){
    number++
    bloco.innerHTML = 'Willkommen ' + number
})