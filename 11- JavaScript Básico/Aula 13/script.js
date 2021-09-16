let lista = ''

let clientes = ['Vitor', 'Joana', 'Fulano', 'Ciclano']


for (let contador = 0; contador <= clientes.length - 1; contador++) {
    lista += `<li>${clientes[contador]} - ${contador}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista




/* let opcoes

for (let contador = 2021; contador >= 1900; contador--) {
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes */





/*for (let contador = 0; contador <= 5000; contador++) {
    document.write(`Hello World! ${contador}`)
    document.write('<br>')
} */