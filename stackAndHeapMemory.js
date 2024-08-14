//Stack and heap memory 

let value ="jithendar"

let value2=value

value2="vineth"
console.log(value) //jithendar
console.log(value2) //vineth

let data={
    id:1,
    name:"Hey"
}

let data2=data
data2.name="hello"

console.log(data) //{ id: 1, name: 'hello' }
console.log(data2)//{ id: 1, name: 'hello' }