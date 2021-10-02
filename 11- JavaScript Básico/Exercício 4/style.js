
function entrar() {

let inputNome = prompt('Digite seu nome!')
let inputIdade = prompt('Digite sua Idade')

if (inputNome === '' || inputIdade === ''){
    alert('Por favor, preencha os campos')
    return
}

let idade = parseInt(inputIdade)


let maiorOuMenor

if (idade >= 18) {
    maiorOuMenor = ('maior')
} else if (idade < 18) {
    maiorOuMenor = ('menor')
}


if (inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson' || inputNome === ' Thomas anderson') {
     msgPersonalizada = 'Você é personagem do filme The Matrix' 
}

let saudacao = `Olá ${inputNome}, você é ${maiorOuMenor} de idade!`

document.querySelector('#inputSaudacao').innerHTML = saudacao
document.querySelector('#taName').innerHTML = msgPersonalizada

}