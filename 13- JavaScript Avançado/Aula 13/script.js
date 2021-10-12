/* 

FETCH 

Pode existir vários THEN, porém, só pode existir um CATCH.
O primeiro dado de um fetch é um objeto com vários dados da requisição/api.
A próxima função já é um THEN para retornar o obj
fetch recebe dois parametros.
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


botaoCarregar.onclick = () => 
    fetch('https://jsonplaceholder.typicode.com/photos', )
      .then(transformarEmJson)
      .then(exibirNaTela)
      .catch(exibirErro)




