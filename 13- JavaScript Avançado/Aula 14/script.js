/* 

ASYNC / AWAIT
CHAMADA ASSINCRONA EM SINCRONA.
async sempre no inicio da função
A função na frente do AWAIT, sempre terá que ser uma Promise.
*/

function transformarEmJson(response) {
  return response.json()
}

function exibirNaTela(dados){
  console.log('bem vindo', dados)
}

function exibirErro(){
  console.log('Ops, deu erro!')
}

const botaoCarregar = document.querySelector('#carregarFotos')


botaoCarregar.onclick = aoClicarNoBotao


async function aoClicarNoBotao() {
  const dados = await fetch('https://jsonplaceholder.typicode.com/photos', )
      .then(transformarEmJson)
      .catch(exibirErro)
}



