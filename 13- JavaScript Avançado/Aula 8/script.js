/* 

LOCAL STORAGE

*/

const tarefas = [
    { tarefas: 'Estudar JavaScript'},
    { tarefas: 'Estudar NodeJs'},
    { tarefas: 'Estudar React.JS'},
]

const tarefasJson = JSON.stringify(tarefas)
const tarefasJsonObj = JSON.parse(tarefasJson)

localStorage.setItem('tarefas', tarefasJson)

const listaTarefasSalvas = localStorage.getItem('tarefas')
console.log(tarefasJsonObj)