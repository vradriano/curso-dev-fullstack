
exercicio5()
function exercicio5(){
    return new Promise((resolve, reject) => {
        const abc = setTimeout(function(){
            console.log('Parabéns, funcionou!')
        }, 1000)
        
        resolve(abc)
    }
)}
