let botaoTeste = document.querySelector ('#botaoTeste')






// addEventListener and removeEventListerner
let contador = 0

function chamarBotao(){
    contador++
    console.log('Chamando Botão 1')

    if(contador >= 5){
        botaoTeste.removeEventListener('click', chamarBotao)
    }
}


botaoTeste.addEventListener('click', chamarBotao)


/* 
function cliqueBotao(){
    console.log('mensagem 1')
}

botaoTeste.addEventListener('click', cliqueBotao()) NÃO PODE ADICIONAR CLIQUE BOTÃO (), POIS CHAMA A FUNÇÃO. */


/* addEventListener SERVE PARA ADICIONAR EVENTOS, AO INVES DE SOBREPOR.
botaoTeste.addEventListener('click', function(){
    console.log('mensagem 1')
})

botaoTeste.addEventListener('click', function(){
    console.log('mensagem 2')
}) */


/* SOBREPOR
 botaoTeste.onclick = function(){
    console.log('mensagem 1')
}
    botaoTeste.onclick = function(){
    console.log('mensagem 2')
} */