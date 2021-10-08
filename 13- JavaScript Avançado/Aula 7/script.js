/* 

JSON

JAVASCRIPT OBJECT NOTATION


UTILIZADO EM API.
TODOS OS SISTEMAS SE COMUNICAM ATRAVÉS DE JSON.
PADRÃO ACEITÁVEL EM TODAS AS LINGUAGENS
GERALMENTE O OBJETO É STRING, POR EXEMPLO:



XML ERA O PADRÃO, PORÉM JSON SE TORNOU PADRÃO VISTO QUE É MAIS PRÁTICO.
*/


const nomes = {
    nome: 'Vitor',
    pontos: 23
}

console.log(nomes)

const json = JSON.stringify(nomes)

const jsonParseado = JSON.parse(nomes.pontos)

console.log(nomes.pontos)