let nome = prompt ('Digite seu Nome')

   if (nome === 'Vitor' || nome === 'vitor') {
      document.write ('Olá Vitor!')
   } else if (nome === 'Joana' || nome === 'joana') {
      document.write ('Olá Joana')
   } else {
      document.write ('Infelizmente você não tem acesso')
   }



let idade = prompt ('Digite sua idade')
   if (idade >= 17) {
      document.write ('Você tem 18 anos ou mais')
   } else if (idade <= 17) {
      document.write ('Você tem menos de 17 anos')
   } else {
      document.write ('Você não existe')
   }

let sexo = prompt ('Digite seu sexo')
   if (sexo === 'masculino') {
      document.write ('Você é homem!')
   } else {
      document.write ('Você é mulher!')
   }

