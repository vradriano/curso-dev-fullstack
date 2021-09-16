let inputNota1 = prompt ('Digite sua nota')
let inputNota2 = prompt ('Digite sua nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2


if (media >= mediaMinima) {
    document.write('Você passou de ano')
} else if (media < mediaMinima){
    document.write('Você não passou de ano')
}

document.write ('<br>')

if (media <= mediaMinima && media === 6) {
    document.write('Você ficou por um pontos de chegar a média minima!!')
} else if(media <= mediaMinima && media === 5) {
    document.write('Precisamos estudar mais! 5!!')
}


document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('Parabéns, você atingiu o ápice!')
} else if(media >= mediaMinima && media === 9) {
    document.write('Parabéns, você tirou 9!! Vamos tentar chegar a nota 10?')
} else if(media >= mediaMinima && media === 8) {
    document.write('Parabéns, você tirou 8! Vamos tentar tirar 10?!!')
}