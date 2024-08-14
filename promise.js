// const prom=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log("task compeleted");
//     resolve()
// },1000)
// })

// prom.then(()=>{
//     console.log("promise consumed");
    
// })
const promiseScond=new Promise((resolve,reject)=>{
    let hence=true
    if(hence){
        console.log("promise resloved")

        resolve({username:"jithendar",password:123})
    }else{
        console.log("Something went worng !");
        
        reject()
    }
})

promiseScond.then((user)=>{
console.log(user)
}).then().catch()

async function asyncFun() {
  try {
    const respone=  await promiseScond
    console.log(respone)
  } catch (error) {
    console.log(error)
  }
}
asyncFun()

async function apicall() {
   try {
    const respone=await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await respone.json()
    console.log(data)

   } catch (error) {
    console.log(error)
   }}

   //apicall()

   fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json()
   }).then((data)=>{
console.log(data);

   }).catch((error)=>error)