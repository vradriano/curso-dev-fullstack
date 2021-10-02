let listaAtores = [
    {
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
    },
    {
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
    },
    {
      nome: 'Bruce Wayne' ,
      personagem: 'Batman',
      filme: 'Batman - O Início'
    },
]

let htmlAtores = ''

for (let contador = 0; contador < listaAtores.length; contador++) {
  let ator = listaAtores[contador]
  let nome = ator.nome
  let personagem = ator.personagem
  let filme = ator.filme


  htmlAtores += `
  <div class="actor">
    <h3>${nome}</h3>
    <p>Interpreta o personavem ${personagem} no filme ${filme}.</p>
  </div>  
  `

}

document.querySelector('#content').innerHTML = htmlAtores