
/* 

Desestructuring Assignment

const obj = {
  nome: 'thiago',
  idade: 36,
}

const { 
nome: nomeDoUsuario,
idade,
} = obj

console.log(nomeDoUsuario)

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
  const dados = await fetch('https://jsonplaceholder.typicode.com/users/1', )
      .then(transformarEmJson)
      .catch(exibirErro)

  const { name, username, email, phone, website} = dados
  console.log(name, username, email, phone, website)
    
}



