const alunos = [
    {
      nome: 'Maria',
      sobrenome: 'da Silva',
    },

    {
      nome: 'José',
      sobrenome: 'Moreira',
    },

    {
      nome: 'Paulo',
      sobrenome: 'Henrique',
    },

    {
      nome: 'Pedro',
      sobrenome: 'Souza',
    },
]

const clientesFinalMapp = alunos.map((cliente) => `${cliente.nome}` + ' ' + `${cliente.sobrenome}`)

console.log(clientesFinalMapp)

