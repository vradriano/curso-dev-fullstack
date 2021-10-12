/* 

PROMISE (PROMESSAS)

Sempre que determinada função for uma promise, é necessário passar .then().catch()
*/

function exibirNaTela(dados){
  console.log('bem vindo', dados)
}

function exibirErro(){
  console.log('Ops, deu erro!')
}

const botaoCarregar = document.querySelector('#carregarFotos')


botaoCarregar.onclick = () => 
    carregarFotos()
      .then(exibirNaTela)
      .catch(exibirErro)



function carregarFotos(){
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest()  
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
          const response = (JSON.parse(this.responseText))
        
    

          resolve(response)
        }

          if(this.status === 404){
            reject()
          }
          
      }
    
    xhttp.open('GET', 'http://jsonplaceholder.typicode.com/photosSS', true) // ABRIR CONEXÃO
    xhttp.send() //ENVIAR CONEXÃO

  })
}


