
let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')


let aberto = false

function abrirOuFecharMenu(){
    if(aberto === true){
        aberto = false
        menuMobile.classList.remove('aberto')
        botaoMenu.innerText = 'Abrir Menu'
    } else if (aberto === false){
        aberto = true 
        menuMobile.classList.add('aberto')
        botaoMenu.innerText = 'Fechar Menu'
    }
}


/* menuMobile.classList.add('NOME DA CLASSE QUE IRÁ SER ADICIONADA.') */