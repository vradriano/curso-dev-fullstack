/* 

HOISTING (IÇAR, ERGUER)

Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo de um 
escopo. 

É uma boa prática sempre que for chamar uma função, colocar após a declaração da função
como no exemplo abaixo.

*/

function teste(){
    function outraFuncao(){
        console.log('Ok, eu sou a outra função')
    }

    outraFuncao()
}
teste()
