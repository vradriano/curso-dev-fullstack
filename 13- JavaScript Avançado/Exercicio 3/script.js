const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}

const qtdBimestres = aluno.notas.length

const notaSoma = aluno.notas.reduce((acc, curr) => {
    return acc + curr
}, 0)

mediaNotas = Math.round(notaSoma / qtdBimestres)

console.log(`O aluno ${aluno.nome} ${aluno.sobrenome} obteve uma média de ${mediaNotas}`)