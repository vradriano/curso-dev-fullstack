​const alunos = [

    {
      nome: 'Maria',
      sobrenome: 'da Silva',
      nota: 10,
    },

    {
      nome: 'José',
      sobrenome: 'Moreira',
      nota: 4,
    },

    {
      nome: 'Paulo',
      sobrenome: 'Henrique',
      nota: 7,
    },

    {
      nome: 'Sara',
      sobrenome: 'Souza',
      nota: 5,
    },

    {
      nome: 'Clara',
      sobrenome: 'Barbosa',
      nota: 9,
    },

    {
      nome: 'Rodrigo',
      sobrenome: 'Barros',
      nota: 4,
    },

    {
      nome: 'Renato',
      sobrenome: 'Barros',
      nota: 7,
    },

    {
      nome: 'Andrea',
      sobrenome: 'Batista',
      nota: 6,
    },

    {
      nome: 'Carla',
      sobrenome: 'Campos',
      nota: 3,
    },

]

const alumn = document.querySelector('#enterText')



const alumn = alunos.nota

if(alumn === 4){
    document.write('José Domingues: Sua nota foi 4!')
    document.write('Rodrigo Barros: Sua nota foi 4!')
} else if (alumn === 5){
    document.write('Sara Souza: Sua nota foi 5!')
} else if (alumn === 6){
    document.write('Andrea Batista: Sua nota foi 6!')
} else if (alumn === 7){
    document.write('Renato Barros: Sua nota foi 7!')
    document.write('Paulo Henrique: Sua nota foi 7!')
} else if (alumn === 8){
    document.write('Não possui ninguém com essa nota!')
} else if (alumn === 9){
    document.write('Clara Barbosa: Sua nota foi 9!')
} else if (alumn === 10){
    document.write('Maria da Silva: Parabéns, sua nota foi 10!')
} else if (alumn < 4){
    document.write('Não possuimos ninguém com essa nota no nosso Banco de Dados!')
} else if (alumn = ''){
    document.write('Erro!')
}
