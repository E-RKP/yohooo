const numerino = document.getElementById('numerino')
const numerone = document.getElementById('numerone')
const buttonaumenta = document.getElementById('dx')
const buttondiminuisci = document.getElementById('sx')
const reset = document.getElementById('reset')
let valorepic = 0
let valoregrand = 0


function aumenta(){
  valorepic++;
  valoregrand++;

  return{
    valorepic,
    valoregrand
  };
}

function diminuisci(){
  valorepic++;
  valoregrand--;
  if (valoregrand<0){
    valoregrand=0
  }

  return{
    valorepic,
    valoregrand
  };
}

buttonaumenta.addEventListener('click', ()=>{
  aumenta();
  numerino.textContent = valorepic
  numerone.textContent = valoregrand
})

buttondiminuisci.addEventListener('click', ()=>{
  diminuisci();
  numerino.textContent = valorepic
  numerone.textContent = valoregrand
})

reset.onclick = function(){
  valoregrand = 0
  valorepic = 0
  numerino.textContent = valorepic
  numerone.textContent = valoregrand
}

fetch ("https://jsonplaceholder.typicode.com/users").then(function(placeholder){
  return placeholder.json();
}).then(function(placeholder){
  let lista = document.createElement('ul')
  for (i=0; i<placeholder.length;i++){
    let li = document.createElement('li')
    li.textContent = `${placeholder[i].name} - ${placeholder[i].email}`
    lista.appendChild(li)
  }

  document.body.appendChild(lista)
})