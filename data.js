

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

fetch("https://jsonplaceholder.typicode.com/posts").then(function(a){
  return a.json();
}).then(function(a){

  let lista = document.createElement('ul')
  for(i=0; i<5;i++){
    let li = document.createElement('li')
    li.textContent = a[i].title
    lista.appendChild(li)
  }
  document.body.appendChild(lista)
})

fetch("https://jsonplaceholder.typicode.com/users/3").then(function(a){
  return a.json();
}).then(function(foglie){

  let box = document.createElement('div')
  let p = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')
  let p4 = document.createElement('p')

  p.textContent = foglie.name,
  box.appendChild(p)
  p2.textContent = foglie.username
  box.appendChild(p2)
  p3.textContent = foglie.email
  box.appendChild(p3)
  p4.textContent = foglie.address.street
  box.appendChild(p4)

  document.body.appendChild(box)

  return foglie;
})

fetch("https://jsonplaceholder.typicode.com/users").then(function(a){
return a.json();
}).then(function(ab){
  let lista = document.createElement('ul')
  for(i=0; i<ab.length;i++){
    if (ab[i].name.includes('C')){
      let li = document.createElement('li')
      li.textContent = ab[i].name
      lista.appendChild(li)
    }
  }
  document.body.appendChild(lista)
})