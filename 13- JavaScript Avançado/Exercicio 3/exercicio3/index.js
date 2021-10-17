
const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}

const bimestreTotal = aluno.notas.length


const notasAluno = aluno.notas.reduce((acc, curr) => {
    return acc + curr
}, 0)

const mediaAluno = Math.round(notasAluno / bimestreTotal)

console.log(`O Aluno ${aluno.nome} ${aluno.sobrenome} obteve uma média de ${mediaAluno}`
)


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]



const numerosMaisUm = numeros.reduce((acc, curr) => {
    
    acc += `${curr + 1}`

    return acc

},'')

console.log(numerosMaisUm)