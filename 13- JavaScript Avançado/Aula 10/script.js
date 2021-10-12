/* 

AJAX - 2005

Asynchronous JavaScript and XML

Técnica para fazer requisições para determinado SERVIDOR. 

Rotas ou Endpoint é o caminho programado por uma API para obter alguma coisa.

*/

let api = document.querySelector('#api')

const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200){
    const response = (JSON.parse(this.responseText))
    
    console.log(response[0])

}
}

xhttp.open('GET', 'http://jsonplaceholder.typicode.com/photos', true) // ABRIR CONEXÃO
xhttp.send() //ENVIAR CONEXÃO

