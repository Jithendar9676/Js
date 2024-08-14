const button=document.querySelectorAll('.button')
console.log(button)
const body=document.querySelector("body")
console.log(body)

button.forEach((e)=>{
e.addEventListener('click',(element)=>{
    console.log(element)
  console.log(element.target.id)
  if(element.target.id==='grey'){
    body.style.backgroundColor=element.target.id
  }
  if(element.target.id==='yellow'){
    body.style.backgroundColor=element.target.id
  }
  if(element.target.id==='white'){
    body.style.backgroundColor=element.target.id
  }
  if(element.target.id==='blue'){
    body.style.backgroundColor=element.target.id
  }
})
})