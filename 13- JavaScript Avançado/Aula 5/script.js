const clientes = [
    { name: 'Fulano', lastname: 'Da Silva', age: 10},
    { name: 'Ciclano', lastname: 'Santos', age: 20},
    { name: 'Beltrano', lastname: 'Moreira', age: 25},
]

//É preciso sempre retornar.
const clientesMaiores = clientes.filter(Maiores => {
    let retorno = false

    if(Maiores.age >= 18) {
        retorno = true
    }

    return retorno
})

console.log(clientesMaiores)



// IF Ternário (Reduz a função Filter a tamanhos menores.)
const clientesMaioress = clientes.filter(Maiores => Maiores.age >= 18)

console.log(clientesMaioress)




/* FILTER SEMPRE PRECISA QUE RETORNE TRUE OU FALSE */