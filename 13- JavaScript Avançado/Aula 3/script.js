/* 

ARROW FUNCTION

ES6

As funções de seta nos permitem escrever uma sintaxe de função mis curta

*/


// FORMA PADRÃO
const soma = (param1, param2) => {
    return param1 + param2
}
const resultado = soma(10, 30)
console.log(resultado)

// RETORNO IMPLÍCITO 
const subtrair = (param1, param2) => param1 - param2
const resultado1 = subtrair(20, 10)
console.log(resultado1)



// quando se tem apenas um PARAMETRO, pode se remover os parentesis.
const teste = param1 => {
    return param1
}
console.log(teste('Olá'))



const botao = document.querySelector('#botao')
const botao1 = document.querySelector('#botao1')


/* SEMPRE QUE NÃO SE UTILIZAR (ARROW FUNCTION =>) O ESCOPO É O OBJETO DECLARADO; 
SE UTILIZADO O ARROW FUNCTION, O ESCOPO DO THIS DELA SEMPRE SERÁ O ESCOPO DE QUEM CHAMOU ELA */

botao.onclick = function(){
    console.log(this)
}


botao1.onclick = abc => console.log(this)
