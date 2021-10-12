/* 

CALLBACK

Clicar no botão Carregar > chama função vazia > chama função carregarFotos > após chamar, chama if(callback), e depois chama função exibirNaTela 

*/

function exibirNaTela(dados){
  console.log('bem vindo', dados)
}


const botaoCarregar = document.querySelector('#carregarFotos')

botaoCarregar.onclick = () => carregarFotos(exibirNaTela)



function carregarFotos(callback){
    const xhttp = new XMLHttpRequest()  

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      const response = (JSON.parse(this.responseText))
    

      if(callback){
        callback(response)
      }
          
    }
  }

xhttp.open('GET', 'http://jsonplaceholder.typicode.com/photos', true) // ABRIR CONEXÃO
xhttp.send() //ENVIAR CONEXÃO
  }


