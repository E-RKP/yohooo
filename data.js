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