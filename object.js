//object

let user={
    id:1,
    firstname:"jithendar",
    lastname:"Reddy",
    age:24,
    state:"Telenagana"
}

console.log(user)



// way to access key and values
console.log(user.firstname) //jithendar
console.log(user["firstname"])//jithendar

user.hi=function(){
    console.log( "Hi")
}
user.hi() // Hi

user.getName=function(){
    return `Hi mr.${this.firstname}`
}
console.log(user.getName()) //Hi mr.jithendar

let obj1={a:1,b:2}
let obj2={c:3,d:4}
let obj3={e:5,f:6}

let combine1=Object.assign({},obj1,obj2,obj3)
console.log(combine1)
let combine2={...obj1,...obj2,...obj3}
console.log(combine2);



let data=[
    {
        id:1,
        username:"teja",
        passsword:742847
    },
    {
        id:2,
        username:"kaja",
        passsword:742847
    },
    {
        id:3,
        username:"pooja",
        passsword:742847
    },
    {
        id:4,
        username:"sheeja",
        passsword:742847
    }

]

// console.log(Object.keys(data))
// console.log(Object.values(data))

const {firstname:name} =user
console.log(name) //jithendar