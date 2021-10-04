
let contador = document.querySelector('#contador')

let count = 0

let intervalo = setInterval(function(){
    count++
    contador.innerText = count
}, 100)


let botaoPausar = document.querySelector ('#botaoPausar')

botaoPausar.onclick = function(){
    clearInterval(intervalo)
}



/* Window setInterval() Method

Alert "Hello" every 3 seconds (3000 milliseconds):

setInterval(function(){ alert("Hello");
}, 3000);

The clearInterval() method clears a timer set with the setInterval() method.

The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

Note: To be able to use the clearInterval() method, you must use a variable when creating the interval method:

myVar = setInterval("javascript function", milliseconds);
Then you will be able to stop the execution by calling the clearInterval() method.

clearInterval(myVar); */