const clientes = [
    { name: 'Thiago', score: 34},
    { name: 'Jaqueline', score: 38},
    { name: 'Sarah', score: 80 },
    { name: 'Clarah', score: 50 },
    { name: 'Sophia', score: 98 },
]



// acc = acumulator
// curr = current
// reduce, filter, map < percorrem arrays.

const clientesFinal = clientes.reduce ((acc, curr) => {
    if(curr.score > 50){
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc
}, {
    pass: [],
    fail: [],
})

console.log(clientesFinal)





const numeros = [1, 2, 3, 4]
const um = [1]

const numerosFinais = numeros.reduce((acc, curr) => {
    acc += `${curr + 1}`

    return acc
}, '')

console.log(numerosFinais)





/*

const passou = clientes.filter(Maiores => {
    let retorno = false

    if(Maiores.score >= 50){
        retorno = true
    } else {
        retorno = true
    }
    
    return retorno
})
*/