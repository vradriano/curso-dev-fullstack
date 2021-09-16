let clientes =  [
    {
        nome: 'Vitor',
        idade: 23,
        linguagens: ['JavaScript', 'Python', 'Php']
    }, 
    {
        nome: 'Fulano',
        idade: 27,
        linguagens: ['c', 'c#', 'c++']
    }, 
    {
        nome: 'Ciclano',
        idade: 32,
        linguagens: ['go', 'closure', 'r']
    }, 

]


let htmlClientes = ''

for (let cliente of clientes) {

let listaLinguagens = '' 

    for(let linguagem of cliente.linguagens) {
        listaLinguagens += `<ul>${linguagem}</ul>`
    }


    htmlClientes +=`
        <li>
            <b>Nome:</b> ${cliente.nome}<br>
            <b>Idade:</b> ${cliente.idade}<br>
            <b>Linguagens</b>
            <ul>
            ${cliente.linguagens}
            </ul>
        </li>
    `

}

document.querySelector('#listaClientes').innerHTML = htmlClientes





































/* let htmlClientes = ''

for (let cliente of clientes){

let listaLinguagens = ''

    for(let linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome}<br>
            <b>Idade:</b> ${cliente.idade}<br>
            <b>Linguagens</b>
            <ul>
             ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes
















/* let htmlClientes = ''


for (let cliente of clientes){ 

    let listaLinguagens = ''

    for (let linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += ` 
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagens</b><br>
            <ul>
              ${listaLinguagens}
            </ul>
        </li>
    `

}

document.querySelector('#listaClientes').innerHTML = htmlClientes



for (let contador = 0; contador < clientes.length; contador++) {
    console.log(clientes[contador].nome)
} */