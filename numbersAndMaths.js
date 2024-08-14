// numbers and Maths

let num=1000000000

let value =num.toLocaleString('en-IN')
console.log(value) //1,00,00,00,000
console.log(typeof value) //string


let a=6.4
console.log(Math.round(a))//6
console.log(Math.ceil(a))//7
console.log(Math.floor(a))//6

let b=Math.random()
console.log(b)// 0 to 1 

console.log((Math.floor(Math.random()*10)+1)) // 1 t0 10 
const min=100
const max=200
console.log((Math.floor(Math.random()*(max-min)+1)+min)) //100 to 200

