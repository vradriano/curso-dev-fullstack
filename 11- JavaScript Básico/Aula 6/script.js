/* 

string
number
boolean
array
object
undefined
null

*/ 

//string
let nome = 'Vitor'
console.log(nome)

//string - concatenada
let sobrenome = 'Ricardo'
console.log(sobrenome)

//string - concatenada
let ultimoNome = 'Adriano'
console.log(ultimoNome)

//FORMA ANTIGA DE COLOCAR VARIÁVEIS COM ESPAÇO
// console.log(nome + ' ' + sobrenome + ' ' + ultimoNome)

//string literal
//FORMA CORRETA DE ADICIONAR VARIÁVEIS COM ESPAÇO
console.log(`${nome} ${sobrenome} ${ultimoNome}`)


//number
let idade = 23
console.log(idade)
console.log(idade + 5)

//number float
let porcentagem = 10.5
console.log(porcentagem + `%`)

// boolean (true or false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false 
console.log(menorDeIdade)

// array COMO SE FOSSE UMA GAVERA, É POSSÍVEL GUARDAR VARIOS TIPOS DE VARIÁVEIS E ETC. ['', '',]
let habilidades = ['JavaScript', 'PHP', 'NODEJS']
console.log(habilidades)
console.log(habilidades.length)-
console.log(habilidades[2])

// object {} < IGUAL AO CSS, MAS COM O FINAL ADICIONANDO ,
let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['c++', 'c#', 'python']
}
console.log(pessoa)
console.log(pessoa.habilidades)

// undefined
let endereco 
console.log(endereco)

//null 
let cidade = null
console.log(cidade)


let name1 = 'Joana'
console.log(name1)

let name2 = 'Darc'

let name3 = 'Adriano'

console.log(`${name1} ${name2} ${name3}`)

let percent = 10.3
console.log(percent + `%`)

let verdadeiro = true
let falso = false
console.log(verdadeiro)
console.log(falso)