
let DiaSemana = new Date().getDay()

let nomeDiaSemana

switch(DiaSemana) {
    case 0:
        nomeDiaSemana = 'Domingo'
        break;
    case 1: 
        nomeDiaSemana = 'Segunda-Feira'
        break;
    case 2:
        nomeDiaSemana = 'Terça-Feira'
        break;
    case 3: 
        nomeDiaSemana = 'Quarta-Feira'
        break;
    case 4:
        nomeDiaSemana = 'Quinta-Feira'
        break;
    case 5:
        nomeDiaSemana = 'Sexta-Feira'
        break;
    case 6:
        nomeDiaSemana = 'Sabado'
        break;     
    
}
document.write(`O dia da semana é: ${nomeDiaSemana}`)


document.write('<br>')

let DiaSemanaa = new Date().getDay() 

switch(DiaSemanaa) {
    case 0:
        document.write('Hoje é DOMINGO!')
        break;
    case 1:
        document.write('Hoje é Segunda-Feira')
        break;
    case 2:
        document.write('Hoje é Terça-Feira')
        break;
    case 3:
        document.write('Hoje é Quarta-feira')
        break;
    case 4:
        document.write('Hoje é Quinta-Feira')
        break;
    case 5:
        document.write('Hoje é Sexta-Feira')
        break;
    case 6:
        document.write('Hoje é Sabado')
}



let alimentos = new Date().getDay()

let alimento


switch (alimentos) {
    case 3:
        alimento = 'Carne, Leite, Aveia, Amêndoas'
        break;
    case 4:
        alimento = 'Banana, Batata Doce, Feijão, Pão'
        break;
    case 5:
        alimento = 'Bacon'
        break;
}

document.write('<br>')

document.write(`Os alimentos da Refeição de hoje é: ${alimento}`)


document.write('<br>')

let cargo = 'presidente'
let salario = 5000

switch (cargo) {
    case 'presidente':
        salario *= 3.30
        break;
    case 'gerente':
        salario *= 2.0
        break;
    case 'administrador':
        salario *= 1.8
        break;
    case 'team leader':
        salario *= 1.0
        break;

}

document.write(`O Salario da posição ${cargo} é igual a ${salario}`)


document.write('<br>')

