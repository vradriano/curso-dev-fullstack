let inputNome = prompt ('Olá, qual o seu nome?!')
let inputIdade = prompt ('Qual a sua idade?')


if (inputIdade >= 18) {
    document.write(`Seja bem vindo ${inputNome}!`)
} else if (inputIdade <= 18) (
    document.write(`Infelizmente você é de menor ${inputNome}`)
)