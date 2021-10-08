const clientes = [
    { name: 'Fulano', lastname: 'Da Silva' },
    { name: 'Ciclano', lastname: 'Santos' },
    { name: 'Beltrano', lastname: 'Moreira' },
]

// ['Fulano da Silva', 'Clicano Santos']


let texto = document.querySelector('#texto')

let clientesFinal = []

clientes.forEach(function(cliente){
    clientesFinal.push(cliente.name  + ' ' +  cliente.lastname)
})
console.log(clientesFinal)



const clientesFinalMap = clientes.map((cliente) => {
    return cliente.name + ' ' + cliente.lastname
})

console.log(clientesFinalMap)

const clientesFinalMapp = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clientesFinalMapp)

/*ARROW FUNCTION - .map = VOCê CONSEGUE DECLARAR VARIÁVEL DE INICIO, SEM PRECISAR DECLARAR
FORA COMO É FEITO NO .forEach
Resumidamente; 
const variavel = clientes.map(parameters, parameters) => array........
.map só percorre Arrays., forEach percorre qualquer elemento.

*/

const clientesFinalMapp = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clientesFinalMapp)






















const ignite = clientes.map(olx => olx.name + ' ' + olx.lastname)
console.log(ignite)


const ignited = clientes.forEach(kappa => kappa.name + ' ' + kappa.lastname)
console.log(ignited)


