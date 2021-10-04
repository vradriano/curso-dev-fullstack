
let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = (function(evento){
    evento.preventDefault()

    let inputNome = document.forms['formCadastro']['nome']

    let gotError = false

    if(!inputNome.value){
        gotError = true
        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling 
        span.innerText = 'Digite o nome corretamente!'
    } else {
        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling 
        span.innerText = ''
    }

    let inputEmail = document.forms['formCadastro']['email']

    if(!inputEmail.value){
        gotError = true
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling 
        span.innerText = 'Digite o Email corretamente!'
    } else {
        inputEmail.classList.remove('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputCidade = document.forms['formCadastro']['cidade']
    
    if(!inputCidade.value){
        gotError = true
        inputCidade.classList.add('inputError')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = 'Escolha a cidade'
    } else {
        inputCidade.classList.remove('inputError')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!gotError){
        formulario.submit()
    }
})



/*
    if(!gotError){
        formulario.submit()
    }

    ENVIAR FORMULÁRIO APENAS SE NÃO EXISTIR ERRO^



function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
} 

Data Validation
Data validation is the process of ensuring that user input is clean, correct, and useful.

Typical validation tasks are:

has the user filled in all required fields?
has the user entered a valid date?
has the user entered text in a numeric field?
Most often, the purpose of data validation is to ensure correct user input.

Validation can be defined by many different methods, and deployed in many different ways.

Server side validation is performed by a web server, after input has been sent to the server.

Client side validation is performed by a web browser, before input is sent to a web server. 


<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>

*/



